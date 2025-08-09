import React from 'react';
import { Phone, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import logoyoko from '../content/img/yokosun.png';
import cat from '../content/img/cat.png';
import cat2 from '../content/img/cqaz.png';
import allprod from '../content/img/allprod.png';

const OriginalHeader = ({ onCallbackClick }) => {
	// Анимационные варианты для элементов
	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut"
			}
		}
	};

	// Варианты анимации для облаков на фоне
	const cloudVariants = {
		float: {
			y: [0, -20, 0],
			x: [0, 15, 0],
			transition: {
				duration: 15,
				repeat: Infinity,
				ease: "easeInOut"
			}
		}
	};

	// Варианты анимации для изображения котика
	const catVariants = {
		float: {
			y: [0, -15, 0],
			rotate: [-1, 1, -1],
			transition: {
				duration: 8,
				repeat: Infinity,
				ease: "easeInOut"
			}
		}
	};

	return (
		<div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-pink-50 to-pink-100">
			{/* Анимированные облака на фоне */}
			{[...Array(8)].map((_, i) => (
				<motion.div
					key={i}
					className={`absolute bg-white rounded-full opacity-70 ${i % 2 === 0 ? 'blur-sm' : 'blur'}`}
					style={{
						width: `${100 + Math.random() * 100}px`,
						height: `${50 + Math.random() * 50}px`,
						top: `${10 + Math.random() * 70}%`,
						left: `${Math.random() * 90}%`,
						borderRadius: '50%'
					}}
					variants={cloudVariants}
					animate="float"
					transition={{
						duration: 20 + Math.random() * 20,
						delay: Math.random() * 5
					}}
				/>
			))}

			{/* Основное содержимое страницы */}
			<div className="relative z-10 container mx-auto px-4 md:px-6 py-6 md:py-8 flex flex-col min-h-screen">
				{/* Навигационная панель с логотипом и меню */}
				<motion.nav
					className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 space-y-4 md:space-y-0"
					initial="hidden"
					animate="visible"
					variants={{
						visible: {
							transition: {
								staggerChildren: 0.1,
								delayChildren: 0.3
							}
						}
					}}
				>
					<motion.div className="flex items-center" variants={fadeInUp}>
						<img
							src={cat2}
							alt="YokoSun"
							className="h-32 md:h-40 w-auto object-contain"
						/>
					</motion.div>
					<motion.div className="flex items-center" variants={fadeInUp}>
						<img
							src={logoyoko}
							alt="YokoSun"
							className="h-28 md:h-35 w-auto object-contain"
						/>
					</motion.div>

					{/* Основное меню навигации */}
					<motion.div
						className="hidden md:flex space-x-6 lg:space-x-8"
						variants={fadeInUp}
					>
						<a
							href="#products"
							className="relative px-3 py-2 text-lg font-semibold text-gray-700 hover:text-pink-600 transition-colors group"
						>
							Продукция
							<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
						</a>
						<a
							href="#reviews"
							className="relative px-3 py-2 text-lg font-semibold text-gray-700 hover:text-pink-600 transition-colors group"
						>
							Отзывы
							<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
						</a>
						<a
							href="#where-buy"
							className="relative px-3 py-2 text-lg font-semibold text-gray-700 hover:text-pink-600 transition-colors group"
						>
							Где купить?
							<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
						</a>
						<a
							href="#partner"
							className="relative px-3 py-2 text-lg font-semibold text-gray-700 hover:text-pink-600 transition-colors group"
						>
							Стать партнером
							<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
						</a>
					</motion.div>

					{/* Блок контактов с Instagram ссылкой */}
					<motion.div
						className="flex flex-col items-center md:items-end space-y-2"
						variants={fadeInUp}
					>
						<div className="flex flex-col items-center md:items-end space-y-1">
							<div className="flex items-center space-x-2 text-gray-700 font-medium text-base md:text-lg">
								<Phone className="w-5 h-5 text-pink-600" />
								<span>+7 (708) 888 30 00</span>
							</div>
							<div className="flex items-center space-x-2 text-gray-700 font-medium text-base md:text-lg">
								<Phone className="w-5 h-5 text-pink-600" />
								<span>+7 (700) 026 40 70</span>
							</div>
						</div>

						<motion.a
							href="https://www.instagram.com/yokosun.kz/"
							target="_blank"
							rel="noopener noreferrer"
							className="mt-2 px-6 py-2.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-lg hover:bg-gradient-to-r hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all font-semibold text-base shadow-md flex items-center justify-center space-x-2"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Instagram className="w-5 h-5" />
							<span>Мы в Instagram</span>
						</motion.a>
					</motion.div>
				</motion.nav>

				{/* Основной контент страницы */}
				<div className="flex-grow flex flex-col lg:flex-row items-center justify-between my-8 lg:my-16 space-y-16 lg:space-y-0">
					{/* Блок с изображением cat.png слева */}
					<motion.div
						className="hidden lg:flex items-center justify-start flex-1 max-w-md"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<motion.img
							src={cat}
							alt="YokoSun подгузники"
							className="w-full h-auto object-contain max-h-[300px]"
							variants={catVariants}
							animate="float"
						/>
					</motion.div>

					{/* Текстовый блок с описанием */}
					<motion.div
						className="flex-1 text-center lg:text-left max-w-xl"
						initial="hidden"
						animate="visible"
						variants={{
							visible: {
								transition: {
									staggerChildren: 0.1,
									delayChildren: 0.5
								}
							}
						}}
					>
						<motion.h1
							className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 leading-tight"
							variants={fadeInUp}
						>
							Японские подгузники<br />
							<span className="text-pink-600">премиум качества</span>
						</motion.h1>

						<motion.div
							className="space-y-6 text-gray-600 text-base md:text-lg font-medium mb-10"
							variants={fadeInUp}
						>
							<motion.p className="flex items-start" variants={fadeInUp}>
								<span className="mr-3 text-pink-500 text-xl">✓</span>
								<span>Гипоаллергенные материалы для нежной кожи малыша</span>
							</motion.p>
							<motion.p className="flex items-start" variants={fadeInUp}>
								<span className="mr-3 text-pink-500 text-xl">✓</span>
								<span>Высокая впитываемость и надежная защита</span>
							</motion.p>
							<motion.p className="flex items-start" variants={fadeInUp}>
								<span className="mr-3 text-pink-500 text-xl">✓</span>
								<span>Дышащая структура для комфорта ребенка</span>
							</motion.p>
						</motion.div>

						{/* Блок с кнопками действий */}
						<motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" variants={fadeInUp}>
							<motion.button
								className="relative px-8 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors font-medium shadow-md group"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => window.location.href = '#products'}
							>
								Купить сейчас
								<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
							</motion.button>
							<motion.button
								className="px-8 py-3 border border-pink-600 text-pink-600 rounded-md hover:bg-pink-50 transition-colors font-medium"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Подробнее
							</motion.button>
						</motion.div>
					</motion.div>

					{/* Блок с изображением allprod.png справа */}
					<motion.div
						className="flex-1 flex justify-center max-w-md mt-8 lg:mt-0"
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<img
							src={allprod}
							alt="Все продукты YokoSun"
							className="w-full h-auto object-contain max-h-[400px]"
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default OriginalHeader;