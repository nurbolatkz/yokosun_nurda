import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { X, MessageCircle, User, Phone, MapPin, Package, Hash } from 'lucide-react';
import { products, whatsappNumber } from '../mock';
import { useToast } from '../hooks/use-toast';

const OrderForm = ({ isOpen, onClose, selectedProduct, promoCode }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    address: '',
    product: selectedProduct?.name || '',
    quantity: 1,
    promoCode: promoCode || '',
    comments: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateTotal = () => {
    if (!formData.product) return 0;
    
    const product = products.find(p => p.name === formData.product);
    if (!product) return 0;
    
    const price = parseInt(product.price.replace(/[^\d]/g, ''));
    let total = price * formData.quantity;
    
    // Apply promo code discount
    if (formData.promoCode === 'YOKOSUN20') {
      total = total * 0.8; // 20% discount
    } else if (formData.promoCode === 'NEWBORN30') {
      total = total * 0.7; // 30% discount
    }
    
    return total;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.city || !formData.product) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const total = calculateTotal();
    const message = `
🛍️ *НОВЫЙ ЗАКАЗ YOKOSUN*

👤 *Клиент:* ${formData.name}
📱 *Телефон:* ${formData.phone}
🏙️ *Город:* ${formData.city}
📍 *Адрес:* ${formData.address}

📦 *Товар:* ${formData.product}
🔢 *Количество:* ${formData.quantity} шт.
${formData.promoCode ? `🎟️ *Промокод:* ${formData.promoCode}` : ''}
💰 *Итого:* ${total.toLocaleString()} ₸

${formData.comments ? `💬 *Комментарии:* ${formData.comments}` : ''}

_Заказ оформлен через сайт YokoSun_
    `.trim();

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Заказ оформлен!",
      description: "Мы получили ваш заказ и скоро с вами свяжемся",
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border-0">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative">
          <Button 
            onClick={onClose}
            variant="ghost" 
            size="sm"
            className="absolute right-4 top-4 text-white hover:bg-white/20"
          >
            <X className="w-4 h-4" />
          </Button>
          
          <CardTitle className="text-2xl font-bold pr-12">
            Оформление заказа
          </CardTitle>
          <p className="text-blue-100">
            Заполните форму, и мы свяжемся с вами в WhatsApp
          </p>
        </CardHeader>

        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Customer Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <User className="w-5 h-5 mr-2 text-blue-600" />
                Контактная информация
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Ваше имя"
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
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">Город *</Label>
                  <Select onValueChange={(value) => handleInputChange('city', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите город" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="almaty">Алматы</SelectItem>
                      <SelectItem value="nursultan">Нур-Султан</SelectItem>
                      <SelectItem value="shymkent">Шымкент</SelectItem>
                      <SelectItem value="aktobe">Актобе</SelectItem>
                      <SelectItem value="taraz">Тараз</SelectItem>
                      <SelectItem value="other">Другой город</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Адрес доставки</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Улица, дом, квартира"
                  />
                </div>
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Package className="w-5 h-5 mr-2 text-blue-600" />
                Информация о товаре
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="product">Товар *</Label>
                  <Select 
                    value={formData.product}
                    onValueChange={(value) => handleInputChange('product', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите товар" />
                    </SelectTrigger>
                    <SelectContent>
                      {products.map((product) => (
                        <SelectItem key={product.id} value={product.name}>
                          {product.name} - {product.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="quantity">Количество</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    max="10"
                    value={formData.quantity}
                    onChange={(e) => handleInputChange('quantity', parseInt(e.target.value) || 1)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="promoCode">Промокод</Label>
                <div className="space-y-2">
                  <Select value={formData.promoCode || "none"} onValueChange={(value) => handleInputChange('promoCode', value === 'none' ? '' : value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите промокод" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">Без промокода</SelectItem>
                      <SelectItem value="YOKOSUN20">YOKOSUN20 - Скидка 20% на первый заказ</SelectItem>
                      <SelectItem value="FREE_DELIVERY">FREE_DELIVERY - Бесплатная доставка от 15,000₸</SelectItem>
                      <SelectItem value="NEWBORN30">NEWBORN30 - Набор для новорожденного -30%</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  {formData.promoCode && (
                    <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <Hash className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-green-800">
                          Промокод применен: {formData.promoCode}
                        </span>
                      </div>
                      <Badge className="bg-green-500 text-white hover:bg-green-500">
                        {formData.promoCode === 'YOKOSUN20' ? '-20%' : 
                         formData.promoCode === 'NEWBORN30' ? '-30%' : 
                         'Бесплатная доставка'}
                      </Badge>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="comments">Комментарии к заказу</Label>
                <Textarea
                  id="comments"
                  value={formData.comments}
                  onChange={(e) => handleInputChange('comments', e.target.value)}
                  placeholder="Дополнительные пожелания или вопросы..."
                  rows={3}
                />
              </div>
            </div>

            {/* Order Summary */}
            {formData.product && (
              <div className="bg-gray-50 rounded-lg p-4 border">
                <h4 className="font-semibold text-gray-900 mb-3">Итого к оплате:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>{formData.product} × {formData.quantity}</span>
                    <span>{(calculateTotal() / (formData.promoCode ? (formData.promoCode === 'YOKOSUN20' ? 0.8 : 0.7) : 1)).toLocaleString()} ₸</span>
                  </div>
                  {formData.promoCode && (
                    <div className="flex justify-between text-green-600">
                      <span>Скидка ({formData.promoCode}):</span>
                      <span>-{(calculateTotal() / (formData.promoCode === 'YOKOSUN20' ? 0.8 : 0.7) - calculateTotal()).toLocaleString()} ₸</span>
                    </div>
                  )}
                  <div className="border-t pt-2 font-semibold text-lg flex justify-between">
                    <span>К оплате:</span>
                    <span className="text-blue-600">{calculateTotal().toLocaleString()} ₸</span>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Отправить заказ в WhatsApp
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderForm;