
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CopyIcon, CheckIcon, AlertCircle, MessageSquare, Send } from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface PurchaseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPlan?: string;
  selectedPrice?: string;
}

const cryptoOptions = [
  { name: 'Bitcoin (BTC)', address: 'bc1qfy93fhwd97suypnjgv6kdqm7j7yfnf3ycrx5xl', icon: '₿' },
  { name: 'Ethereum (ETH)', address: '0x1DBA609317a86294cce03D3283e37A7072d0FAa2', icon: 'Ξ' },
  { name: 'Litecoin (LTC)', address: 'LdYGMFqeEqPLxGmooVk2tmRnrSdqkmP3xr', icon: 'Ł' },
  { name: 'Ripple (XRP)', address: 'rHCLurVAtjmLfSEU7txES5phaLAVJZ25bo', icon: 'X' },
  { name: 'Solana (SOL)', address: '922Vf2Vz95zJy3hbbsXaS4f5cBE1ZgFACnW6ZWJWDcRc', icon: 'S' },
  { name: 'USDC', address: '0x1DBA609317a86294cce03D3283e37A7072d0FAa2', icon: '$' },
];

const webhookUrl = "https://discord.com/api/webhooks/1347224301262340169/o7KPfjXzevRRGelXyPXxSKcURrWdf4g98tcuO3Wqm21UMR0nIzZ1SMC1PFfEyHpl6wz0";

const PurchaseModal: React.FC<PurchaseModalProps> = ({ open, onOpenChange, selectedPlan, selectedPrice }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [paymentSent, setPaymentSent] = useState(false);
  const [contactStep, setContactStep] = useState(true);
  const [contactInfo, setContactInfo] = useState({
    email: '',
    discord: '',
    telegram: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    contact: ''
  });

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      toast.success('Address copied to clipboard');
      
      setTimeout(() => {
        setCopiedIndex(null);
      }, 2000);
    });
  };

  const validateContactInfo = () => {
    let isValid = true;
    const newErrors = { email: '', contact: '' };
    
    // Validate email
    if (!contactInfo.email || !contactInfo.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }
    
    // Validate at least one contact method
    if (!contactInfo.discord && !contactInfo.telegram) {
      newErrors.contact = 'Please provide either Discord or Telegram username';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleContactSubmit = () => {
    if (validateContactInfo()) {
      setContactStep(false);
    }
  };

  const notifyDiscord = async () => {
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: "🔔 **New Purchase Alert**",
          embeds: [
            {
              title: "New Order Placed",
              description: `A customer has indicated they completed payment for ${selectedPlan || "a plan"}.`,
              color: 3447003,
              fields: [
                {
                  name: "Plan",
                  value: selectedPlan || "Not specified",
                  inline: true
                },
                {
                  name: "Price",
                  value: selectedPrice || "Not specified",
                  inline: true
                },
                {
                  name: "Email",
                  value: contactInfo.email,
                  inline: true
                },
                {
                  name: "Discord",
                  value: contactInfo.discord || "Not provided",
                  inline: true
                },
                {
                  name: "Telegram",
                  value: contactInfo.telegram || "Not provided",
                  inline: true
                },
                {
                  name: "Status",
                  value: "Awaiting confirmation",
                  inline: true
                }
              ],
              timestamp: new Date().toISOString()
            }
          ]
        }),
      });
      
      if (response.ok) {
        setPaymentSent(true);
        toast.success("Payment notification sent!");
      } else {
        throw new Error('Failed to send webhook notification');
      }
    } catch (error) {
      console.error("Error sending webhook:", error);
      toast.error("Couldn't notify our team. Please contact directly with proof of payment.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({ ...prev, [name]: value }));
    
    // Clear errors when user types
    if (name === 'email') {
      setErrors(prev => ({ ...prev, email: '' }));
    }
    if (name === 'discord' || name === 'telegram') {
      setErrors(prev => ({ ...prev, contact: '' }));
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-[#0c1118] border border-white/10 shadow-frost text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-snow-400">❄</span> {contactStep ? 'Contact Information' : 'Complete Your Purchase'}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            {contactStep 
              ? 'Please provide your contact information to proceed with your purchase.'
              : 'Send payment to one of the following cryptocurrency addresses. Your access will be activated after confirmation.'}
          </DialogDescription>
        </DialogHeader>
        
        {contactStep ? (
          <div className="space-y-4 mt-4">
            {selectedPlan && selectedPrice && (
              <div className="p-3 bg-snow-500/10 rounded-lg border border-snow-400/20">
                <div className="text-sm font-medium mb-1 text-white">Selected Plan: <span className="text-snow-400">{selectedPlan}</span></div>
                <div className="text-sm font-medium text-white">Price: <span className="text-snow-400">{selectedPrice}</span></div>
              </div>
            )}
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email Address <span className="text-red-500">*</span></Label>
                <Input 
                  id="email"
                  name="email"
                  className="bg-white/5 border-white/20 text-white"
                  placeholder="your@email.com"
                  value={contactInfo.email}
                  onChange={handleInputChange}
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="discord" className="text-white">Discord Username</Label>
                <Input 
                  id="discord"
                  name="discord"
                  className="bg-white/5 border-white/20 text-white"
                  placeholder="username#0000"
                  value={contactInfo.discord}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="telegram" className="text-white">Telegram Username</Label>
                <Input 
                  id="telegram"
                  name="telegram"
                  className="bg-white/5 border-white/20 text-white"
                  placeholder="@username"
                  value={contactInfo.telegram}
                  onChange={handleInputChange}
                />
              </div>
              
              {errors.contact && <p className="text-xs text-red-500">{errors.contact}</p>}
              
              <div className="pt-2 text-xs text-gray-500 text-center">
                At least one contact method (Discord or Telegram) is required
              </div>
              
              <Button 
                className="w-full bg-snow-500 hover:bg-snow-600" 
                onClick={handleContactSubmit}
              >
                Continue to Payment
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4 mt-4">
            {selectedPlan && selectedPrice && (
              <div className="p-3 bg-snow-500/10 rounded-lg border border-snow-400/20">
                <div className="text-sm font-medium mb-1 text-white">Selected Plan: <span className="text-snow-400">{selectedPlan}</span></div>
                <div className="text-sm font-medium text-white">Price: <span className="text-snow-400">{selectedPrice}</span></div>
              </div>
            )}
            
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="text-xs text-snow-400 font-medium mb-1">Important Instructions</div>
              <p className="text-sm text-gray-300">
                After sending payment, click the "I've Sent Payment" button below to notify our team. Then contact <span className="font-semibold">projectexoticz</span> on Discord or join our Telegram group with proof of purchase.
              </p>
            </div>
            
            <div className="space-y-3">
              {cryptoOptions.map((option, index) => (
                <div key={index} className="p-3 bg-white/5 rounded-lg border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-snow-900 text-snow-400 font-bold">
                      {option.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{option.name}</div>
                      <div className="text-xs text-gray-400 font-mono">{option.address.substring(0, 12)}...{option.address.substring(option.address.length - 4)}</div>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 px-2 text-gray-400 hover:text-white hover:bg-white/10"
                    onClick={() => handleCopy(option.address, index)}
                  >
                    {copiedIndex === index ? (
                      <CheckIcon className="h-4 w-4 text-green-500" />
                    ) : (
                      <CopyIcon className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
            
            {paymentSent ? (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-center space-y-4">
                <CheckIcon className="h-6 w-6 mx-auto mb-2 text-green-500" />
                <p className="text-white text-sm">
                  Payment notification sent! Please contact <span className="font-semibold">projectexoticz</span> on Discord or join our Telegram group with proof of payment.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button 
                    className="bg-[#5865F2] hover:bg-[#4752C4] gap-2"
                    size="sm"
                    onClick={() => window.open('https://discord.gg/Re3qX65NRH', '_blank')}
                  >
                    <MessageSquare className="h-4 w-4" />
                    Join Discord
                  </Button>
                  
                  <Button 
                    className="bg-[#0088cc] hover:bg-[#0077b5] gap-2"
                    size="sm"
                    onClick={() => window.open('https://t.me/snowc2', '_blank')}
                  >
                    <Send className="h-4 w-4" />
                    Join Telegram
                  </Button>
                </div>
              </div>
            ) : (
              <Button 
                className="w-full bg-snow-500 hover:bg-snow-600" 
                onClick={notifyDiscord}
              >
                I've Sent Payment
              </Button>
            )}
            
            <div className="pt-2 text-center text-xs text-gray-500 space-y-2">
              <div>
                Discord: <a href="https://discord.gg/Re3qX65NRH" target="_blank" rel="noopener noreferrer" className="text-snow-400 hover:text-snow-300">https://discord.gg/Re3qX65NRH</a>
              </div>
              <div>
                Telegram: <a href="https://t.me/snowc2" target="_blank" rel="noopener noreferrer" className="text-snow-400 hover:text-snow-300">https://t.me/snowc2</a>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseModal;
