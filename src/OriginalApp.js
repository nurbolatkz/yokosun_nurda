import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OriginalHeader from "./components/OriginalHeader";
import DiaperFeatures from "./components/DiaperFeatures";
import EnhancedProductGrid from "./components/EnhancedProductGrid";
import YokoSunVideoSection from "./components/YokoSunVideoSection";
import YokoSunOffers from "./components/YokoSunOffers";
import YokoSunTestimonials from "./components/YokoSunTestimonials";
import WhereToBuy from "./components/WhereToBuy";
import BecomePartner from "./components/BecomePartner";
import CallbackModal from "./components/CallbackModal";
import OrderForm from "./components/OrderForm";
import { Toaster } from "./components/ui/toaster";
import { MessageCircle, Phone, Mail, MapPin, Clock, Star, MessageSquare } from "lucide-react";
import { whatsappNumber, companyInfo } from "./mock";
import cat from './content/img/catlogo.png';

const YokoSunFooter = () => {
	const handleWhatsAppClick = () => {
		const cleanNumber = whatsappNumber.replace(/\D/g, '');
		window.open(`https://wa.me/${cleanNumber}`, '_blank');
	};

	const handleTelegramClick = () => {
		// Используем полный номер с кодом страны
		window.open(`https://t.me/+${whatsappNumber.replace(/\D/g, '')}`, '_blank');
	};

	return (
		<footer className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4B0082 0%, #6B46C1 25%, #7C3AED 50%, #8B5CF6 75%, #A855F7 100%)' }}>
			{/* Background Clouds */}
			<div className="absolute inset-0">
				<div style={{
					position: 'absolute',
					top: '40px',
					left: '10%',
					width: '200px',
					height: '120px',
					background: 'white',
					borderRadius: '60% 40% 50% 50%',
					opacity: '0.1',
					transform: 'rotate(15deg)'
				}}></div>

				<div style={{
					position: 'absolute',
					bottom: '60px',
					right: '15%',
					width: '180px',
					height: '100px',
					background: 'white',
					borderRadius: '40% 60% 30% 70%',
					opacity: '0.08',
					transform: 'rotate(-12deg)'
				}}></div>
			</div>

			<div className="relative z-10 text-white py-16">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Company Info */}
						<div className="space-y-4">
							<div className="flex items-center space-x-3">
								<img
									src={cat}
									alt="YokoSun"
									className="h-12 md:h-16 w-auto object-contain"
								/>
							</div>
							<p className="text-purple-200 text-sm leading-relaxed">
								Официальный дистрибьютор японских детских товаров премиум-класса в Казахстане
							</p>
						</div>

						{/* Contact Info */}
						<div className="space-y-4">
							<h3 className="text-lg font-semibold">Контакты</h3>
							<div className="space-y-3">
								<div
									className="flex items-center space-x-3 transition-all duration-200 hover:scale-105 hover:text-green-300 cursor-pointer active:scale-95"
									onClick={handleWhatsAppClick}
								>
									<MessageCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
									<span className="text-sm">WhatsApp</span>
								</div>
								<div
									className="flex items-center space-x-3 transition-all duration-200 hover:scale-105 hover:text-blue-300 cursor-pointer active:scale-95"
									onClick={handleTelegramClick}
								>
									<MessageSquare className="w-5 h-5 text-blue-400 flex-shrink-0" />
									<span className="text-sm">Telegram</span>
								</div>
								<div className="flex items-center space-x-3">
									<Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
									<span className="text-sm">+7 (708) 888 30 00</span>
								</div>
								<div className="flex items-center space-x-3">
									<Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
									<span className="text-sm">+7 (700) 026 40 70</span>
								</div>
								<div className="flex items-center space-x-3">
									<Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
									<span className="text-sm">info@yokosun.kz</span>
								</div>
							</div>
						</div>

						{/* Working Hours */}
						<div className="space-y-4">
							<h3 className="text-lg font-semibold">Часы работы</h3>
							<div className="space-y-3">
								<div className="flex items-center space-x-3">
									<Clock className="w-5 h-5 text-yellow-400 flex-shrink-0" />
									<div className="text-sm">
										<div>Пн-Пт: 9:00 - 18:00</div>
										<div>Сб-Вс: 10:00 - 16:00</div>
									</div>
								</div>
								<div className="flex items-center space-x-3">
									<MapPin className="w-5 h-5 text-purple-400 flex-shrink-0" />
									<span className="text-sm">Доставка по всему Казахстану</span>
								</div>
							</div>
						</div>

						{/* Quality Guarantee */}
						<div className="space-y-4">
							<h3 className="text-lg font-semibold">Гарантии качества</h3>
							<div className="space-y-2">
								<div className="flex items-start space-x-2">
									<Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
									<span className="text-sm">Рекомендовано педиатрами мира</span>
								</div>
								<div className="flex items-start space-x-2">
									<Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
									<span className="text-sm">Сертифицированные товары</span>
								</div>
								<div className="flex items-start space-x-2">
									<Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
									<span className="text-sm">Быстрая доставка</span>
								</div>
								<div className="flex items-start space-x-2">
									<Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
									<span className="text-sm">Гарантия качества</span>
								</div>
							</div>
						</div>
					</div>

					{/* Bottom Bar */}
					<div className="border-t border-purple-400 mt-12 pt-8">
						<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
							<div className="text-sm text-purple-200">
								© 2025 CAT Qazaqstan. Все права защищены.
							</div>
							<div className="flex space-x-6 text-sm text-purple-200">
								<a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
								<a href="#" className="hover:text-white transition-colors">Условия использования</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

const OriginalHome = () => {
	const [callbackModalOpen, setCallbackModalOpen] = useState(false);
	const [orderFormOpen, setOrderFormOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [promoCode, setPromoCode] = useState('');

	const handleOrderClick = (product = null, promo = '') => {
		setSelectedProduct(product);
		setPromoCode(promo);
		setOrderFormOpen(true);
	};

	return (
		<div className="min-h-screen">
			<OriginalHeader onCallbackClick={() => setCallbackModalOpen(true)} />
			<DiaperFeatures />
			<div id="products">
				<EnhancedProductGrid />
			</div>

			<YokoSunVideoSection />
			<YokoSunOffers onOrderClick={handleOrderClick} />
			<div id="reviews">
				<YokoSunTestimonials />
			</div>

			<div id="where-buy">
				<WhereToBuy />
			</div>

			<div id="partner">
				<BecomePartner />
			</div>
			<YokoSunFooter />

			<CallbackModal
				isOpen={callbackModalOpen}
				onClose={() => setCallbackModalOpen(false)}
			/>

			<OrderForm
				isOpen={orderFormOpen}
				onClose={() => setOrderFormOpen(false)}
				selectedProduct={selectedProduct}
				promoCode={promoCode}
			/>

			<Toaster />
		</div>
	);
};

function OriginalApp() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<OriginalHome />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default OriginalApp;