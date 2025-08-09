import React from 'react';
import { Play, Star, Users, Award } from 'lucide-react';
import { videoData } from '../mock';

const VideoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Узнайте больше о YokoSun
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Посмотрите видео и узнайте, почему тысячи родителей в Казахстане доверяют японскому качеству YokoSun
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-2">
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={videoData.embedUrl}
                  title={videoData.title}
                  className="absolute inset-0 w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video Info */}
              <div className="p-4 bg-white rounded-b-xl">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Play className="w-4 h-4" />
                  <span>Официальный канал YokoSun Kazakhstan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Почему родители выбирают YokoSun?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                В этом видео вы узнаете о японских технологиях производства, 
                сертификации качества и том, как наши продукты заботятся о здоровье вашего малыша.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-blue-100">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Японское качество</h4>
                  <p className="text-gray-600 text-sm">
                    Производство в Японии с соблюдением самых строгих стандартов безопасности
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-green-100">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Доверие родителей</h4>
                  <p className="text-gray-600 text-sm">
                    Более 10,000 семей в Казахстане уже оценили преимущества нашей продукции
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-yellow-100">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Высокие рейтинги</h4>
                  <p className="text-gray-600 text-sm">
                    Средний рейтинг 4.9/5 от реальных покупателей и рекомендации педиатров
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a 
                href={videoData.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                <Play className="w-5 h-5" />
                <span>Смотреть на YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Video Stats */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                <div className="text-sm text-gray-600">Просмотров</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">98%</div>
                <div className="text-sm text-gray-600">Положительных отзывов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">2.5K</div>
                <div className="text-sm text-gray-600">Подписчиков</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">1.2K</div>
                <div className="text-sm text-gray-600">Лайков</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;