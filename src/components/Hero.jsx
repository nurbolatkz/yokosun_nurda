import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Star, Shield, Truck } from 'lucide-react';
import { heroData, companyInfo } from '../mock';

const Hero = ({ onOrderClick }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%234F46E5\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"7\" cy=\"7\" r=\"7\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-200">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-gray-700">№1 в Японии</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {heroData.title.split(' - ')[0]}
                </span>
                <br />
                <span className="text-gray-800 text-3xl lg:text-4xl">
                  {heroData.title.split(' - ')[1]}
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                {heroData.subtitle}
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {companyInfo.benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-blue-100">
                  {index === 0 && <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />}
                  {index === 1 && <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />}
                  {index === 2 && <Truck className="w-5 h-5 text-green-600 flex-shrink-0" />}
                  <span className="text-sm font-medium text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                onClick={onOrderClick}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                {heroData.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-8">
              <img 
                src={heroData.heroImage} 
                alt="YokoSun Baby Products"
                className="w-full h-auto object-cover rounded-xl"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg shadow-lg animate-bounce">
                -20%
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white rounded-lg px-4 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-semibold">5.0</span>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-3xl -z-10 transform rotate-3"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl -z-20 transform -rotate-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;