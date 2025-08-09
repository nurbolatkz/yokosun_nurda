import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ShoppingCart, Star, Check } from 'lucide-react';
import { products } from '../content/data/products'; // Assuming you have a products data file

const Products = ({ onOrderClick }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Наша продукция
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Высококачественные детские товары из Японии для здоровья и комфорта вашего малыша
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-4">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-red-500 text-white hover:bg-red-600">
                      Хит продаж
                    </Badge>
                  </div>
                </div>
                
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price and Rating */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-blue-600">
                      {product.price}
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">(4.9)</span>
                    </div>
                  </div>
                </div>

                {/* Order Button */}
                <Button 
                  onClick={() => onOrderClick(product)}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Заказать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;