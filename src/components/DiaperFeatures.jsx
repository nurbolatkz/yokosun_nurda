import React from 'react';
import { Baby, Leaf, Shield, Droplet } from 'lucide-react';

const DiaperFeaturesHeader = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 py-16 md:py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute top-20 left-1/4 w-32 h-32 rounded-full bg-pink-200 opacity-20 animate-float-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 rounded-full bg-purple-200 opacity-20 animate-float-medium"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-indigo-200 opacity-20 animate-float-slow"></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-800 mb-4">
            Преимущества наших подгузников
          </h2>
          <p className="text-lg md:text-xl text-purple-600 max-w-3xl mx-auto">
            Японское качество и инновационные технологии для здоровья вашего малыша
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Feature 1 */}
          <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <Droplet className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Дышащий слой</h3>
              <p className="text-purple-700">Кожа остается сухой и чистой</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Абсорбирующий слой</h3>
              <p className="text-purple-700">Быстро впитывает жидкость</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Эластичный поясок</h3>
              <p className="text-purple-700">Надежная защита от протеканий</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Baby className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Застежки-липучки</h3>
              <p className="text-purple-700">Удобные и безопасные</p>
            </div>
          </div>
        </div>

        {/* Product image */}
      
      </div>

      {/* Animation */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-1deg); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default DiaperFeaturesHeader;