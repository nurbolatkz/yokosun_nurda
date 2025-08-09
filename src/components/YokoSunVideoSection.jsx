import React from 'react';
import { Play, Star, Users, Award } from 'lucide-react';
import { videoData } from '../mock';

const YokoSunVideoSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #DCC2FF 0%, #D1AFFF 25%, #C59CFF 50%, #BA8CFF 75%, #AF79FF 100%)' }}>
      {/* Background Clouds */}
      <div className="absolute inset-0">
        <div style={{
          position: 'absolute',
          top: '80px',
          left: '8%',
          width: '280px',
          height: '170px',
          background: 'white',
          borderRadius: '55% 45% 25% 75%',
          opacity: '0.25',
          transform: 'rotate(18deg)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '100px',
          right: '12%',
          width: '240px',
          height: '140px',
          background: 'white',
          borderRadius: '35% 65% 55% 45%',
          opacity: '0.2',
          transform: 'rotate(-15deg)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '200px',
          right: '35%',
          width: '200px',
          height: '120px',
          background: 'white',
          borderRadius: '70% 30% 40% 60%',
          opacity: '0.15',
          transform: 'rotate(10deg)'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-800 mb-3 md:mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
            Узнайте больше о YokoSun
          </h2>
          <p className="text-lg md:text-xl text-purple-700 max-w-3xl mx-auto leading-relaxed">
            Посмотрите видео и узнайте, почему тысячи родителей в Казахстане доверяют японскому качеству YokoSun
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Video Player */}
          <div className="space-y-4 md:space-y-6">
            <div className="bg-white rounded-2xl p-2 md:p-4 shadow-xl border border-purple-100">
              <div className="relative" style={{ paddingBottom: '56.25%', borderRadius: '12px', overflow: 'hidden' }}>
                <iframe
                  src={videoData.embedUrl}
                  title={videoData.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video Info */}
              <div className="p-2 md:p-4 bg-white rounded-b-xl">
                <div className="flex items-center space-x-2 text-xs md:text-sm text-purple-600">
                  <Play className="w-3 h-3 md:w-4 md:h-4" />
                  <span>Официальный канал YokoSun Kazakhstan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video Benefits */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-purple-100">
              <h3 className="text-xl md:text-2xl font-bold text-purple-800 mb-3 md:mb-4">
                Почему родители выбирают YokoSun?
              </h3>
              <p className="text-purple-700 leading-relaxed text-sm md:text-base">
                В этом видео вы узнаете о японских технологиях производства, 
                сертификации качества и том, как наши продукты заботятся о здоровье вашего малыша.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4 md:space-y-6">
              <div className="bg-white rounded-xl p-3 md:p-4 lg:p-6 shadow-md border border-purple-50">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 rounded-xl bg-blue-100 flex-shrink-0">
                    <Award className="w-4 h-4 md:w-6 md:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-1 md:mb-2 text-sm md:text-base">Японское качество</h4>
                    <p className="text-purple-700 text-xs md:text-sm">
                      Производство в Японии с соблюдением самых строгих стандартов безопасности
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-3 md:p-4 lg:p-6 shadow-md border border-purple-50">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 rounded-xl bg-green-100 flex-shrink-0">
                    <Users className="w-4 h-4 md:w-6 md:h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-1 md:mb-2 text-sm md:text-base">Доверие родителей</h4>
                    <p className="text-purple-700 text-xs md:text-sm">
                      Более 10,000 семей в Казахстане уже оценили преимущества нашей продукции
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-3 md:p-4 lg:p-6 shadow-md border border-purple-50">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 rounded-xl bg-yellow-100 flex-shrink-0">
                    <Star className="w-4 h-4 md:w-6 md:h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-1 md:mb-2 text-sm md:text-base">Высокие рейтинги</h4>
                    <p className="text-purple-700 text-xs md:text-sm">
                      Средний рейтинг 4.9/5 от реальных покупателей и рекомендации педиатров
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 md:pt-6">
              <a 
                href={videoData.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors text-sm md:text-base"
              >
                <Play className="w-4 h-4 md:w-5 md:h-5" />
                <span>Смотреть на YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Video Stats */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg border border-purple-100 max-w-full lg:max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 mb-1 md:mb-2">50K+</div>
                <div className="text-xs md:text-sm text-purple-700">Просмотров</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-green-500 mb-1 md:mb-2">98%</div>
                <div className="text-xs md:text-sm text-purple-700">Положительных отзывов</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-purple-600 mb-1 md:mb-2">2.5K</div>
                <div className="text-xs md:text-sm text-purple-700">Подписчиков</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-500 mb-1 md:mb-2">1.2K</div>
                <div className="text-xs md:text-sm text-purple-700">Лайков</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YokoSunVideoSection;