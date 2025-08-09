// components/BecomePartner.jsx
import React from 'react';
import { Handshake, BadgeCheck, Shield, BarChart2 } from 'lucide-react';

const BecomePartner = () => {
  const benefits = [
    {
      icon: <BarChart2 className="w-8 h-8 text-purple-600" />,
      title: "Выгодные условия",
      description: "Гибкая система скидок и бонусов для наших партнеров"
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-purple-600" />,
      title: "Официальный поставщик",
      description: "Все необходимые сертификаты и документы"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Гарантия качества",
      description: "Только оригинальная продукция из Японии"
    }
  ];

  return (
    <div className="py-16 md:py-20 bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-800 mb-4">
            Стать партнером YokoSun
          </h2>
          <p className="text-lg md:text-xl text-purple-600 max-w-3xl mx-auto">
            Присоединяйтесь к нашей сети партнеров и предлагайте качественные японские товары своим клиентам
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Benefits */}
          <div className="space-y-8">
            <div className="bg-white bg-opacity-90 rounded-xl p-8 shadow-md">
              <div className="flex items-center space-x-4 mb-6">
                <Handshake className="w-10 h-10 text-purple-600" />
                <h3 className="text-2xl font-bold text-purple-800">Преимущества сотрудничества</h3>
              </div>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-2 rounded-full mt-1">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-purple-800 mb-1">{benefit.title}</h4>
                      <p className="text-purple-700">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Partner form */}
          <div className="bg-white bg-opacity-90 rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-purple-800 mb-6">Заявка на сотрудничество</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-purple-700 mb-1">Ваше имя</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Иван Иванов"
                />
              </div>
              <div>
                <label className="block text-purple-700 mb-1">Телефон</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="+7 (777) 123 45 67"
                />
              </div>
              <div>
                <label className="block text-purple-700 mb-1">Название компании</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Моя компания"
                />
              </div>
              <div>
                <label className="block text-purple-700 mb-1">Город</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Алматы"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomePartner;