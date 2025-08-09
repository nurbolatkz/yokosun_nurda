import React from 'react';
import { MapPin, ShoppingCart, Truck, Store, Phone, Star, ChevronRight } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Фиксим стандартные иконки Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
	iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const WhereToBuy = () => {
	// Наши филиалы
	const branches = [
		{
			id: 1,
			name: "Фирменный магазин YokoSun (Алматы)",
			address: "г. Алматы, ул. Гоголя 58",
			phone: "+7 (727) 123 45 67",
			hours: "10:00 - 20:00",
			coords: [43.2507, 76.9454]
		},
		{
			id: 2,
			name: "Фирменный магазин YokoSun (Нур-Султан)",
			address: "г. Нур-Султан, ул. Кенесары 34",
			phone: "+7 (717) 234 56 78",
			hours: "10:00 - 20:00",
			coords: [51.1282, 71.4307]
		}
	];

	// Наши дистрибьюторы
	const distributors = [
		{
			id: 3,
			name: "Сеть магазинов 'BabyLand'",
			cities: ["Алматы", "Нур-Султан", "Шымкент", "Актау"],
			phone: "+7 (727) 345 67 89",
			coords: [43.2567, 76.9286]
		},
		{
			id: 4,
			name: "Аптечная сеть 'Айболит'",
			cities: ["Алматы", "Караганда", "Павлодар"],
			phone: "+7 (727) 456 78 90",
			coords: [43.2389, 76.8897]
		},
		{
			id: 5,
			name: "Интернет-магазин 'YokoSun.kz'",
			cities: ["По всему Казахстану"],
			phone: "+7 (775) 209 54 04",
			isOnline: true
		}
	];

	// Все точки для карты
	const allLocations = [...branches, ...distributors.filter(d => d.coords)];

	return (
		<div className="py-16 md:py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
			<div className="container mx-auto px-4 md:px-6">
				{/* Заголовок */}
				<div className="text-center mb-12 md:mb-16">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-900 mb-4">
						Где купить наши товары
					</h2>
					<p className="text-lg md:text-xl text-purple-600 max-w-3xl mx-auto">
						Наши продукты доступны в фирменных магазинах и у партнеров по всему Казахстану
					</p>
				</div>

				{/* Контент */}
				<div className="space-y-12">
					{/* Наши филиалы */}
					<div>
						<div className="flex items-center mb-6">
							<div className="bg-gradient-to-r from-purple-600 to-pink-500 p-2 rounded-lg mr-4">
								<Star className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-2xl font-bold text-purple-900">Наши фирменные магазины</h3>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{branches.map((branch) => (
								<div key={branch.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-purple-500">
									<div className="flex justify-between items-start mb-4">
										<h4 className="text-xl font-bold text-purple-800 flex items-center">
											{branch.name}
											<span className="ml-2 bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
												Фирменный
											</span>
										</h4>
										<button className="text-purple-600 hover:text-purple-800">
											<ChevronRight className="w-5 h-5" />
										</button>
									</div>

									<div className="space-y-3">
										<div className="flex items-start">
											<MapPin className="w-5 h-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
											<span className="text-purple-700">{branch.address}</span>
										</div>
										<div className="flex items-center">
											<Phone className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" />
											<span className="text-purple-700">{branch.phone}</span>
										</div>
										<div className="flex items-center">
											<svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
											<span className="text-purple-700">Часы работы: {branch.hours}</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Наши дистрибьюторы */}
					<div>
						<div className="flex items-center mb-6">
							<div className="bg-gradient-to-r from-indigo-600 to-purple-500 p-2 rounded-lg mr-4">
								<Store className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-2xl font-bold text-purple-900">Наши дистрибьюторы</h3>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{distributors.map((distributor) => (
								<div key={distributor.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
									<div className="flex items-center mb-4">
										<div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-lg mr-3">
											{distributor.isOnline ? (
												<ShoppingCart className="w-6 h-6 text-white" />
											) : (
												<Store className="w-6 h-6 text-white" />
											)}
										</div>
										<h4 className="text-lg font-bold text-purple-800">{distributor.name}</h4>
									</div>

									<div className="space-y-3">
										<div className="flex items-start">
											<MapPin className="w-5 h-5 text-indigo-500 mt-0.5 mr-2 flex-shrink-0" />
											<div>
												<span className="text-purple-700">Города:</span>
												<div className="flex flex-wrap gap-1 mt-1">
													{distributor.cities.map((city, i) => (
														<span key={i} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
															{city}
														</span>
													))}
												</div>
											</div>
										</div>

										<div className="flex items-center">
											<Phone className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0" />
											<span className="text-purple-700">{distributor.phone}</span>
										</div>

										{distributor.isOnline && (
											<div className="flex items-center">
												<svg className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
												</svg>
												<span className="text-purple-700">Онлайн заказы</span>
											</div>
										)}
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Карта */}
					<div className="bg-white rounded-xl overflow-hidden shadow-xl">
						<div className="p-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
							<div className="flex items-center">
								<Truck className="w-8 h-8 mr-3" />
								<h3 className="text-xl font-bold">Карта наших магазинов и партнеров</h3>
							</div>
						</div>

						<div className="h-96 w-full">
							<MapContainer
								center={[48.0196, 66.9237]} // Центр Казахстана
								zoom={5}
								style={{ height: '100%', width: '100%' }}
							>
								<TileLayer
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
								/>

								{allLocations.map((location) => (
									<Marker key={location.id} position={location.coords}>
										<Popup>
											<div className="font-bold text-purple-800">{location.name}</div>
											<div className="text-gray-600">{location.address || location.cities.join(', ')}</div>
											<div className="text-gray-600 mt-1">{location.phone}</div>
										</Popup>
									</Marker>
								))}
							</MapContainer>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhereToBuy;