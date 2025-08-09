import React from 'react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Star, Quote } from 'lucide-react';

const YokoSunTestimonials = () => {
	const testimonials = [
		{
			id: 1,
			name: "Айгуль Казыбаева",
			city: "Алматы",
			rating: 5,
			text: "Потрясающее качество YokoSun! Покупаю японские подгузники уже полгода, ребенок чувствует себя отлично. Особенно нравятся их дышащие свойства - никаких раздражений.",
			image: "https://images.unsplash.com/photo-1624448445915-97154f5e688c"
		},
		{
			id: 2,
			name: "Марат Турсунов",
			city: "Астана",
			rating: 5,
			text: "Японское качество YokoSun чувствуется во всем. Подгузники очень удобные, дочка с удовольствием их носит. Рекомендую всем родителям попробовать!",
			image: "https://images.unsplash.com/photo-1638927730962-5af1cdc11c5b"
		},
		{
			id: 3,
			name: "Жанна Смагулова",
			city: "Шымкент",
			rating: 5,
			text: "Долго искала качественные детские товары. YokoSun превзошел все ожидания - японское качество по доступной цене. Кожа малыша всегда мягкая и здоровая.",
			image: "https://images.unsplash.com/photo-1542385151-efd9000785a0"
		}
	];

	return (
		<section className="py-20 bg-white relative overflow-hidden">
			{/* Background Clouds */}
			<div className="absolute inset-0">
				<div style={{
					position: 'absolute',
					top: '100px',
					left: '10%',
					width: '250px',
					height: '150px',
					background: 'linear-gradient(135deg, #F3E8FF 0%, #E8D5FF 100%)',
					borderRadius: '50% 30% 70% 40%',
					opacity: '0.4',
					transform: 'rotate(15deg)'
				}}></div>

				<div style={{
					position: 'absolute',
					bottom: '120px',
					right: '15%',
					width: '200px',
					height: '120px',
					background: 'linear-gradient(135deg, #E8D5FF 0%, #DCC2FF 100%)',
					borderRadius: '40% 60% 30% 70%',
					opacity: '0.3',
					transform: 'rotate(-12deg)'
				}}></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-6">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-5xl font-bold text-purple-800 mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
						Отзывы наших клиентов
					</h2>
					<p className="text-xl text-purple-700 max-w-2xl mx-auto">
						Более 10,000 довольных родителей уже выбрали японское качество YokoSun для своих малышей
					</p>
				</div>

				{/* Testimonials Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map((testimonial) => (
						<Card key={testimonial.id} className="relative hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group hover:scale-105 bg-white overflow-hidden">
							{/* Purple gradient background */}
							<div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-50"></div>

							{/* Quote Icon */}
							<div className="absolute top-4 right-4 text-purple-200 group-hover:text-purple-300 transition-colors">
								<Quote className="w-8 h-8" />
							</div>

							<CardContent className="relative p-8 space-y-6">
								{/* Rating */}
								<div className="flex items-center space-x-1">
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
									))}
								</div>

								{/* Testimonial Text */}
								<blockquote className="text-purple-800 leading-relaxed italic font-medium">
									"{testimonial.text}"
								</blockquote>

								{/* Author Info */}
								<div className="flex items-center space-x-4 pt-4 border-t border-purple-100">
									<Avatar className="w-12 h-12 ring-2 ring-purple-200">
										<AvatarImage
											src={testimonial.image}
											alt={testimonial.name}
											className="object-cover"
										/>
										<AvatarFallback className="bg-purple-500 text-white font-semibold">
											{testimonial.name.split(' ').map(n => n[0]).join('')}
										</AvatarFallback>
									</Avatar>

									<div>
										<div className="font-semibold text-purple-800">
											{testimonial.name}
										</div>
										<div className="text-sm text-purple-600">
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
					<div style={{
						background: 'linear-gradient(135deg, #F8F4FF 0%, #F0E6FF 50%, #E8D5FF 100%)',
						borderRadius: '45% 55% 35% 65%',
						padding: '48px',
						maxWidth: '800px',
						margin: '0 auto',
						border: '1px solid rgba(168, 85, 247, 0.2)',
						transform: 'rotate(-1deg)'
					}}>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
							<div className="text-center">
								<div className="text-3xl font-bold text-purple-600 mb-2">10,000+</div>
								<div className="text-sm text-purple-700">Довольных клиентов</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-green-500 mb-2">4.9</div>
								<div className="text-sm text-purple-700">Средний рейтинг</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-orange-500 mb-2">3</div>
								<div className="text-sm text-purple-700">Года на рынке</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-blue-500 mb-2">100%</div>
								<div className="text-sm text-purple-700">Японское качество</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default YokoSunTestimonials;