import React from 'react';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Детские подгузники и трусики YokoSun",
      image: "../content/img/comfort.jpg",
    },
    {
      id: 2,
      name: "Детские подгузники и трусики YokoSun Premium",
      image: "../content/img/premium.jpg",
    },
    {
      id: 3,
      name: "Детские подгузники и трусики YokoSun Eco",
      image: "../content/img/eco.jpg",
    },
    {
      id: 4,
      name: "Подгузники и трусики YokoSun для взрослых",
      image: "https://customer-assets.emergentagent.com/job_sun-order-page/artifacts/bi7iytxn_NB34-4602009725043-2.jpg",
    },
    {
      id: 5,
      name: "Вкладыши для груди",
      image: "https://customer-assets.emergentagent.com/job_sun-order-page/artifacts/bi7iytxn_NB34-4602009725043-2.jpg",
    },
    {
      id: 6,
      name: "Одноразовые пеленки",
      image: "https://customer-assets.emergentagent.com/job_sun-order-page/artifacts/bi7iytxn_NB34-4602009725043-2.jpg",
    },
    {
      id: 7,
      name: "Влажные салфетки",
      image: "https://customer-assets.emergentagent.com/job_sun-order-page/artifacts/bi7iytxn_NB34-4602009725043-2.jpg",
    },
    {
      id: 8,
      name: "Влажная туалетная бумага",
      image: "https://customer-assets.emergentagent.com/job_sun-order-page/artifacts/bi7iytxn_NB34-4602009725043-2.jpg",
    },
    {
      id: 9,
      name: "Для бережного ухода и купания",
      image: "https://customer-assets.emergentagent.com/job_sun-order-page/artifacts/bi7iytxn_NB34-4602009725043-2.jpg",
    },
    {
      id: 10,
      name: "Средства для стирки и мытья посуды",
      image: "https://customer-assets.emergentagent.com/job_sun-order-page/artifacts/bi7iytxn_NB34-4602009725043-2.jpg",
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Cartoon character */}
      <div className="absolute left-12 top-1/2 transform -translate-y-1/2 z-10">
        <div className="relative w-32 h-32">
          <div className="w-24 h-24 bg-white rounded-full border-4 border-purple-400 flex items-center justify-center shadow-xl">
            <div className="text-4xl">😊</div>
          </div>
          <div className="absolute -top-2 -right-2 w-12 h-12 bg-red-500 rounded-full opacity-90 transform rotate-45"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-6xl font-bold text-center text-purple-800 mb-20" style={{ fontFamily: 'Arial, sans-serif' }}>
          Продукция
        </h2>

        <div className="grid grid-cols-5 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #6B46C1 0%, #7C3AED 25%, #8B5CF6 50%, #A855F7 75%, #C084FC 100%)',
                borderRadius: '160px',
                padding: '24px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
              }}
            >
              <div className="bg-white rounded-xl p-6 mb-6 h-32 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-bold text-white text-center leading-tight text-lg">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;