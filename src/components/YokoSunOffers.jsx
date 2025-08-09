import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Gift, Percent, Truck, Clock } from 'lucide-react';

const YokoSunOffers = ({ onOrderClick }) => {
	const offers = [
		{
			id: 1,
			title: "Скидка 20% на первый заказ",
			description: "Специальное предложение для новых клиентов YokoSun",
			code: "YOKOSUN20",
			validUntil: "31 декабря 2025",
			color: "from-red-500 to-pink-500"
		},
		{
			id: 2,
			title: "Бесплатная доставка",
			description: "При заказе японских подгузников от 15,000 ₸",
			code: "FREE_DELIVERY",
			validUntil: "Постоянно",
			color: "from-green-500 to-emerald-500"
		},
		{
			id: 3,
			title: "Набор для новорожденного",
			description: "Полный комплект YokoSun со скидкой 30%",
			code: "NEWBORN30",
			validUntil: "15 февраля 2025",
			color: "from-purple-500 to-violet-500"
		}
	];

	const getOfferIcon = (index) => {
		const icons = [Percent, Truck, Gift];
		const Icon = icons[index % icons.length];
		return <Icon className="w-6 h-6" />;
	};

	const openWhatsApp = () => {
		const phoneNumber = '77088883000'; // Ваш номер без + и пробелов
		const message = 'Здравствуйте! Я заинтересован в продукции YokoSun.';
		const encodedMessage = encodeURIComponent(message);
		window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
	};


	return (
		<section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F3E8FF 0%, #E8D5FF 25%, #DCC2FF 50%, #D1AFFF 75%, #C59CFF 100%)' }}>
			{/* Background Clouds */}
			<div className="absolute inset-0">
				<div style={{
					position: 'absolute',
					top: '60px',
					left: '15%',
					width: '300px',
					height: '180px',
					background: 'white',
					borderRadius: '45% 55% 35% 65%',
					opacity: '0.3',
					transform: 'rotate(12deg)'
				}}></div>

				<div style={{
					position: 'absolute',
					bottom: '80px',
					right: '20%',
					width: '250px',
					height: '150px',
					background: 'white',
					borderRadius: '60% 40% 50% 50%',
					opacity: '0.25',
					transform: 'rotate(-8deg)'
				}}></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-6">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-5xl font-bold text-purple-800 mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
						Специальные предложения
					</h2>
					<p className="text-xl text-purple-700 max-w-2xl mx-auto">
						Экономьте на покупках качественных японских товаров для детей
					</p>
				</div>

				{/* Offers Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{offers.map((offer, index) => (
						<Card key={offer.id} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group hover:scale-105 bg-white">
							{/* Background Gradient */}
							<div className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

							<CardHeader className="relative">
								<div className="flex items-start justify-between">
									<div className={`p-3 rounded-xl bg-gradient-to-r ${offer.color} text-white shadow-lg`}>
										{getOfferIcon(index)}
									</div>
									<Badge variant="outline" className="bg-white/80 backdrop-blur-sm border-purple-200">
										<Clock className="w-3 h-3 mr-1" />
										Ограниченное время
									</Badge>
								</div>

								<CardTitle className="text-xl font-bold text-purple-800 mt-4">
									{offer.title}
								</CardTitle>
							</CardHeader>

							<CardContent className="relative space-y-4">
								<p className="text-purple-700 leading-relaxed">
									{offer.description}
								</p>

								{/* Code Display */}
								<div style={{
									background: 'linear-gradient(135deg, #F8F4FF 0%, #F0E6FF 100%)',
									borderRadius: '12px',
									padding: '16px',
									border: '2px dashed #A855F7'
								}}>
									<div className="text-center">
										<div className="text-sm text-purple-600 mb-1">Промокод:</div>
										<div className="text-lg font-bold text-purple-800 font-mono tracking-wider">
											{offer.code}
										</div>
									</div>
								</div>

								{/* Valid Until */}
								<div className="flex items-center justify-between text-sm text-purple-600 pt-2 border-t border-purple-100">
									<span>Действует до:</span>
									<span className="font-semibold">{offer.validUntil}</span>
								</div>

								{/* Action Button */}
								<Button
									onClick={() => onOrderClick(null, offer.code)}
									className={`w-full bg-gradient-to-r ${offer.color} hover:opacity-90 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
								>
									Воспользоваться предложением
								</Button>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Additional CTA */}
				<div className="text-center mt-16">
					<div style={{
						background: 'white',
						borderRadius: '35% 65% 45% 55%',
						padding: '48px',
						boxShadow: '0 25px 50px rgba(0,0,0,0.1)',
						maxWidth: '600px',
						margin: '0 auto',
						border: '1px solid rgba(168, 85, 247, 0.1)',
						transform: 'rotate(-1deg)'
					}}>
						<h3 className="text-2xl font-bold text-purple-800 mb-4">
							Не нашли подходящее предложение?
						</h3>
						<p className="text-purple-700 mb-6">
							Свяжитесь с нами, и мы подберем индивидуальные условия для вас
						</p>
						<Button
							onClick={openWhatsApp}
							size="lg"
							className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
						>
							Связаться с нами
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default YokoSunOffers;