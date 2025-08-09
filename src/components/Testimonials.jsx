import React from 'react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../mock';

const Testimonials = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%236366F1\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M20 20c0-11.046-8.954-20-20-20v20h20zm0 0v20h20c0-11.046-8.954-20-20-20z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Более 10,000 довольных родителей уже выбрали YokoSun для своих малышей
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group hover:scale-105 bg-gradient-to-br from-white to-gray-50">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-100 group-hover:text-blue-200 transition-colors">
                <Quote className="w-8 h-8" />
              </div>

              <CardContent className="p-8 space-y-6">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <Avatar className="w-12 h-12 ring-2 ring-blue-100">
                    <AvatarImage 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-blue-500 text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.city}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-sm text-gray-600">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">4.9</div>
                <div className="text-sm text-gray-600">Средний рейтинг</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                <div className="text-sm text-gray-600">Года на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                <div className="text-sm text-gray-600">Качество гарантии</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;