import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Gift, Percent, Truck, Clock, MessageCircle } from 'lucide-react';
import { offers } from '../mock';

const Offers = ({ onOrderClick }) => {
	const getOfferIcon = (index) => {
		const icons = [Percent, Truck, Gift];
		const Icon = icons[index % icons.length];
		return <Icon className="w-6 h-6" />;
	};

	const getOfferColor = (index) => {
		const colors = [
			'from-red-500 to-pink-500',
			'from-green-500 to-emerald-500',
			'from-purple-500 to-violet-500'
		];
		return colors[index % colors.length];
	};

	const openWhatsApp = () => {
		const phoneNumber = '77088883000'; // Ваш номер без + и пробелов
		const message = 'Здравствуйте! Я заинтересован в продукции YokoSun.';
		const encodedMessage = encodeURIComponent(message);
		window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
	};

	return (
		<section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Специальные предложения
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Экономьте на покупках качественных японских товаров для детей
					</p>
				</div>

				{/* Offers Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{offers.map((offer, index) => (
						<Card key={offer.id} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group hover:scale-105">
							{/* Background Gradient */}
							<div className={`absolute inset-0 bg-gradient-to-br ${getOfferColor(index)} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

							<CardHeader className="relative">
								<div className="flex items-start justify-between">
									<div className={`p-3 rounded-xl bg-gradient-to-r ${getOfferColor(index)} text-white shadow-lg`}>
										{getOfferIcon(index)}
									</div>
									<Badge variant="outline" className="bg-white/80 backdrop-blur-sm border-gray-200">
										<Clock className="w-3 h-3 mr-1" />
										Ограниченное время
									</Badge>
								</div>

								<CardTitle className="text-xl font-bold text-gray-900 mt-4">
									{offer.title}
								</CardTitle>
							</CardHeader>

							<CardContent className="relative space-y-4">
								<p className="text-gray-600 leading-relaxed">
									{offer.description}
								</p>

								{/* Code Display */}
								<div className="bg-gray-100 rounded-lg p-4 border-2 border-dashed border-gray-300">
									<div className="text-center">
										<div className="text-sm text-gray-500 mb-1">Промокод:</div>
										<div className="text-lg font-bold text-gray-900 font-mono tracking-wider">
											{offer.code}
										</div>
									</div>
								</div>

								{/* Valid Until */}
								<div className="flex items-center justify-between text-sm text-gray-500 pt-2 border-t border-gray-100">
									<span>Действует до:</span>
									<span className="font-semibold">{offer.validUntil}</span>
								</div>

								{/* Action Button */}
								<Button
									onClick={() => onOrderClick(null, offer.code)}
									className={`w-full bg-gradient-to-r ${getOfferColor(index)} hover:opacity-90 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
								>
									Воспользоваться предложением
								</Button>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Additional CTA */}
				<div className="text-center mt-16">
					<div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-100">
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							Не нашли подходящее предложение?
						</h3>
						<p className="text-gray-600 mb-6">
							Свяжитесь с нами в WhatsApp для индивидуального предложения
						</p>
						<Button
							onClick={openWhatsApp}
							size="lg"
							className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto"
						>
							<MessageCircle className="w-5 h-5 mr-2" />
							Написать в WhatsApp
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Offers;