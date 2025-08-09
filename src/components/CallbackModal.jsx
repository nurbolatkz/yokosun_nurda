import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { X, Phone } from 'lucide-react';
import { whatsappNumber } from '../mock';
import { useToast } from '../hooks/use-toast';

const CallbackModal = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните имя и телефон",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message for callback request
    const message = `
📞 *ЗАКАЗАТЬ ЗВОНОК*

👤 *Имя:* ${formData.name}
📱 *Телефон:* ${formData.phone}
${formData.message ? `💬 *Сообщение:* ${formData.message}` : ''}

_Пожалуйста, перезвоните мне_
    `.trim();

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });

    onClose();
    setFormData({ name: '', phone: '', message: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl border-0">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-800 text-white relative">
          <Button 
            onClick={onClose}
            variant="ghost" 
            size="sm"
            className="absolute right-4 top-4 text-white hover:bg-white/20"
          >
            <X className="w-4 h-4" />
          </Button>
          
          <CardTitle className="text-xl font-bold pr-12 flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            Заказать звонок
          </CardTitle>
          <p className="text-purple-100">
            Оставьте свои данные и мы перезвоним
          </p>
        </CardHeader>

        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Ваше имя *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Введите ваше имя"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Телефон *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+7 (___) ___-__-__"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Сообщение (необязательно)</Label>
              <Input
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Дополнительная информация"
              />
            </div>

            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              Заказать звонок
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CallbackModal;