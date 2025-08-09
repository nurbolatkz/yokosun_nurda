import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ShoppingCart, Star, X } from 'lucide-react';
import { whatsappNumber } from '../mock';
import { useToast } from '../hooks/use-toast';
import { products_data } from '../content/data/products';

const EnhancedProductGrid = () => {
	const { toast } = useToast();
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [cart, setCart] = useState([]);

	const products = products_data;

	const addToCart = (productId, sizeIndex) => {
		const product = products.find(p => p.id === productId);
		const size = product.sizes[sizeIndex];

		const cartItem = {
			id: Date.now(),
			productId,
			productName: product.name,
			size: size.size,
			price: size.price,
			pieces: size.pieces,
			quantity: 1
		};

		setCart(prev => [...prev, cartItem]);

		toast({
			title: "Добавлено в корзину",
			description: `${product.name} (${size.size})`,
		});
	};

	const removeFromCart = (itemId) => {
		setCart(prev => prev.filter(item => item.id !== itemId));
	};

	const sendToWhatsApp = () => {
		if (cart.length === 0) {
			toast({
				title: "Корзина пуста",
				description: "Добавьте товары в корзину",
				variant: "destructive"
			});
			return;
		}

		const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

		const message = `
🛍️ *ЗАКАЗ YOKOSUN*

${cart.map(item =>
			`📦 ${item.productName}
📏 Размер: ${item.size}
🔢 Количество: ${item.quantity} шт.
💰 Цена: ${item.price.toLocaleString()} ₸`
		).join('\n\n')}

💰 *Итого: ${total.toLocaleString()} ₸*

_Заказ оформлен через сайт YokoSun_
    `.trim();

		const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
		window.open(whatsappUrl, '_blank');

		toast({
			title: "Заказ отправлен!",
			description: "Мы получили ваш заказ и скоро с вами свяжемся",
		});

		setCart([]);
	};

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

			<div className="max-w-7xl mx-auto px-4 md:px-6">
				<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-purple-800 mb-12 md:mb-16 lg:mb-20" style={{ fontFamily: 'Arial, sans-serif' }}>
					Продукция
				</h2>

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mb-12">
					{products.map((product) => (
						<div
							key={product.id}
							className="group cursor-pointer"
							style={{
								background: 'linear-gradient(135deg, #6B46C1 0%, #7C3AED 25%, #8B5CF6 50%, #A855F7 75%, #C084FC 100%)',
								borderRadius: '12px',
								padding: '12px',
								boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
								transition: 'all 0.3s ease',
								transform: 'translateY(0)'
							}}
							className="md:rounded-2xl md:p-6"
							onClick={() => setSelectedProduct(product)}
							onMouseEnter={(e) => {
								e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
								e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.25)';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.transform = 'translateY(0) scale(1)';
								e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
							}}
						>
							{/* ИСПРАВЛЕННЫЙ КОНТЕЙНЕР ДЛЯ ИЗОБРАЖЕНИЯ */}
							{/* Этот div теперь имеет фиксированное соотношение сторон, делая его высоту одинаковой */}
							<div className="bg-white rounded-lg md:rounded-xl p-3 md:p-6 mb-3 md:mb-6">
								{/* Внутренний div, который создает квадратную область */}
								<div className="relative w-full" style={{ paddingTop: '100%' }}>
									<img
										src={product.image}
										alt={product.name}
										className="absolute inset-0 w-full h-full object-contain"
									/>
								</div>
							</div>
							{/* КОНЕЦ ИСПРАВЛЕННОГО КОНТЕЙНЕРА */}
							<h3 className="font-bold text-white text-center leading-tight text-sm md:text-base lg:text-lg">
								{product.name}
							</h3>
						</div>
					))}
				</div>

				{/* Product Details Modal */}
				{selectedProduct && (
					<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
						<Card className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl border-0 mx-4">
							<div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6 relative">
								<Button
									onClick={() => setSelectedProduct(null)}
									variant="ghost"
									size="sm"
									className="absolute right-4 top-4 text-white hover:bg-white/20"
								>
									<X className="w-4 h-4" />
								</Button>

								<h2 className="text-2xl font-bold pr-12 mb-2">
									{selectedProduct.name}
								</h2>
								<p className="text-purple-100">
									Выберите размер и добавьте в корзину
								</p>
							</div>

							<CardContent className="p-4 md:p-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
									<div>
										<img
											src={selectedProduct.image}
											alt={selectedProduct.name}
											className="w-full h-48 md:h-80 object-contain bg-gray-50 rounded-lg"
										/>
									</div>

									<div>
										<h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Особенности:</h3>
										<div className="space-y-2 mb-4 md:mb-6">
											{selectedProduct.features.map((feature, index) => (
												<div key={index} className="flex items-center space-x-2">
													<Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current flex-shrink-0" />
													<span className="text-sm md:text-base text-gray-700">{feature}</span>
												</div>
											))}
										</div>
									</div>
								</div>

								<h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Размеры и цены:</h3>
								<div className="grid gap-3 md:gap-4">
									{selectedProduct.sizes.map((size, index) => (
										<div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 md:p-4 border rounded-lg hover:bg-gray-50 space-y-3 sm:space-y-0">
											<div className="flex-1">
												<div className="font-semibold text-sm md:text-base">{size.size}</div>
												<div className="text-xs md:text-sm text-gray-500">{size.pieces} шт. в упаковке</div>
											</div>
											<div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
												<div className="text-lg md:text-xl font-bold text-purple-600">
													{size.price.toLocaleString()} ₸
												</div>
												<Button
													onClick={() => addToCart(selectedProduct.id, index)}
													className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 w-full sm:w-auto text-sm md:text-base"
													size="sm"
												>
													<ShoppingCart className="w-3 h-3 md:w-4 md:h-4 mr-2" />
													В корзину
												</Button>
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</div>
				)}

				{/* Shopping Cart */}
				{cart.length > 0 && (
					<div className="fixed bottom-4 right-4 z-40">
						<Card className="w-72 sm:w-80 shadow-2xl border-0">
							<div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-3 md:p-4">
								<h3 className="font-bold flex items-center text-sm md:text-base">
									<ShoppingCart className="w-4 h-4 md:w-5 md:h-5 mr-2" />
									Корзина ({cart.length})
								</h3>
							</div>
							<CardContent className="p-3 md:p-4 max-h-48 md:max-h-60 overflow-y-auto">
								<div className="space-y-2 md:space-y-3">
									{cart.map((item) => (
										<div key={item.id} className="flex items-center justify-between text-xs md:text-sm">
											<div className="flex-1 min-w-0">
												<div className="font-medium truncate">{item.productName}</div>
												<div className="text-gray-500 text-xs">{item.size}</div>
											</div>
											<div className="flex items-center space-x-2 flex-shrink-0">
												<span className="font-bold text-xs md:text-sm">{item.price.toLocaleString()} ₸</span>
												<Button
													size="sm"
													variant="ghost"
													onClick={() => removeFromCart(item.id)}
													className="text-red-500 hover:text-red-700 p-1 h-6 w-6"
												>
													<X className="w-3 h-3" />
												</Button>
											</div>
										</div>
									))}
								</div>

								<div className="border-t pt-2 md:pt-3 mt-2 md:mt-3">
									<div className="flex justify-between font-bold text-base md:text-lg mb-2 md:mb-3">
										<span>Итого:</span>
										<span className="text-green-600">
											{cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()} ₸
										</span>
									</div>
									<Button
										onClick={sendToWhatsApp}
										className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-sm md:text-base py-2 md:py-3"
									>
										Заказать в WhatsApp
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				)}
			</div>
		</section>
	);
};

export default EnhancedProductGrid;