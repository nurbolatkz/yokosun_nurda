// Products data for YokoSun website
import comfort from '../img/comfort.png'; //  осылый 1ш3 импорт жасаау керек екен
import premium from '../img/premium.jpg';
import eco from '../img/eco.jpg';
import adult from '../img/adult.jpg';
import vklad from '../img/vklad.jpg';
import pelen from '../img/pelen.png';
import wipes from '../img/wipes.png';
import toilet from '../img/toilet.jpg';
import sticks from '../img/sticks.png';
import xim from '../img/xim.jpg';
export const products_data = [
	{
		id: 1,
		name: "Детские подгузники YokoSun Comfort",
		image: comfort,
		category: "Подгузники",
		sizes: [
			{ size: "Подгузники YokoSun Comfort, NB (2-5 кг)", price: 3900, pieces: 34 },
			{ size: "Подгузники YokoSun Comfort, S (до 6 кг)", price: 7300, pieces: 82 },
			{ size: "Подгузники YokoSun Comfort, М (5-10 кг)", price: 7300, pieces: 62 },
			{ size: "Подгузники YokoSun Comfort, L (9-13 кг)", price: 7300, pieces: 54 },
			{ size: "Подгузники YokoSun Comfort, XL (12-20 кг)", price: 7300, pieces: 42 },
			{ size: "Подгузники-трусики YokoSun Comfort, M (6-10 кг)", price: 7300, pieces: 58 },
			{ size: "Подгузники-трусики YokoSun Comfort, L (9-14 кг)", price: 7300, pieces: 44 },
			{ size: "Подгузники-трусики YokoSun Comfort, XL (12-20 кг)", price: 7300, pieces: 38 },
			{ size: "Подгузники-трусики YokoSun Comfort, XXL (15-23 кг)", price: 7300, pieces: 28 },
			{ size: "Подгузники YokoSun Comfort Mini, S (до 6 кг)", price: 3900, pieces: 26 },
			{ size: "Подгузники YokoSun Comfort Mini, M (5-10 кг)", price: 3900, pieces: 22 },
			{ size: "Подгузники YokoSun Comfort Mini, L (9-13 кг)", price: 3900, pieces: 20 },
			{ size: "Подгузники-трусики YokoSun Comfort Mini, M (6-10 кг)", price: 3900, pieces: 20 },
			{ size: "Подгузники-трусики YokoSun Comfort Mini, L (9-14 кг)", price: 3900, pieces: 18 },
			{ size: "Подгузники-трусики YokoSun Comfort Mini, XL (12-20 кг)", price: 3900, pieces: 16 }
		],
		features: ["Японское качество", "12-часовая защита", "Гипоаллергенные", "Дышащий материал"]
	},
	{
		id: 2,
		name: "Детские подгузники YokoSun Premium",
		image: premium,
		category: "Premium",
		sizes: [
			{ size: "Подгузники YokoSun Premium, NB (0-5 кг)", price: 4800, pieces: 36 },
			{ size: "Подгузники YokoSun Premium, S (3-6 кг)", price: 8800, pieces: 72 },
			{ size: "Подгузники YokoSun Premium, M (5-10 кг)", price: 8800, pieces: 62 },
			{ size: "Подгузники YokoSun Premium, L (9-13 кг)", price: 8800, pieces: 54 },
			{ size: "Подгузники-трусики YokoSun Premium, M (6-10 кг)", price: 8800, pieces: 56 },
			{ size: "Подгузники-трусики YokoSun Premium, L (9-14 кг)", price: 8800, pieces: 44 },
			{ size: "Подгузники-трусики YokoSun Premium, XL (12-20 кг)", price: 8800, pieces: 38 },
			{ size: "Подгузники-трусики YokoSun Premium, XXL (15-23 кг)", price: 8800, pieces: 28 }
		],
		features: ["Премиум качество", "Супер впитывание", "Экстра мягкость", "Анатомическая форма"]
	},
	{
		id: 3,
		name: "Детские подгузники YokoSun Eco",
		image: eco,
		category: "Eco",
		sizes: [
			{ size: "Подгузники YokoSun Eco, S (3- 6 кг)", price: 6400, pieces: 70 },
			{ size: "Подгузники YokoSun Eco, М (5-10 кг)", price: 6400, pieces: 60 },
			{ size: "Подгузники YokoSun Eco, L (9-14 кг)", price: 6400, pieces: 50 },
			{ size: "Подгузники-трусики YokoSun Eco, М (6-10 кг)", price: 6400, pieces: 48 },
			{ size: "Подгузники-трусики YokoSun Eco, L (9-14 кг)", price: 6400, pieces: 44 },
			{ size: "Подгузники-трусики YokoSun Eco, XL (12-20 кг)", price: 6400, pieces: 38 },
			{ size: "Подгузники-трусики YokoSun Eco, XXL (15-23 кг)", price: 6400, pieces: 32 },
			{ size: "Подгузники-трусики YokoSun Eco, XXXL (20-30 кг)", price: 6400, pieces: 24 },
			{ size: "Подгузники-трусики YokoSun Eco Mini, М (6-10 кг)", price: 2400, pieces: 14 },
			{ size: "Подгузники-трусики YokoSun Eco Mini, L (9-14 кг)", price: 2400, pieces: 12 },
			{ size: "Подгузники-трусики YokoSun Eco Mini, XL (12-20 кг)", price: 2400, pieces: 10 }
		],
		features: ["Эко-материалы", "Биоразлагаемые", "Натуральные компоненты", "Гипоаллергенные"]
	},
	{
		id: 4,
		name: "Подгузники YokoSun для взрослых",
		image: adult,
		category: "Для взрослых",
		sizes: [
			{ size: "Подгузники-трусики для взрослых YokoSun SoftCare, М", price: 4800, pieces: 10 },
			{ size: "Подгузники-трусики для взрослых YokoSun SoftCare, L", price: 4800, pieces: 10 },
			{ size: "Подгузники-трусики для взрослых YokoSun SoftCare, XL", price: 4800, pieces: 10 },
			{ size: "Подгузники YokoSun SoftCare для взрослых, М", price: 4800, pieces: 10 },
			{ size: "Подгузники YokoSun SoftCare для взрослых, L", price: 4800, pieces: 10 },
			{ size: "Подгузники YokoSun SoftCare для взрослых, XL", price: 4800, pieces: 10 }
		],
		features: ["Для взрослых", "Максимальная защита", "Незаметность", "Комфорт"]
	},
	{
		id: 5,
		name: "Вкладыши для груди YokoSun",
		image: vklad,
		category: "Вкладыши",
		sizes: [
			{ size: "Вкладыши для груди YokoSun", price: 3600, pieces: 60 },
			{ size: "Вкладыши для груди YokoSun", price: 2500, pieces: 30 }
		],
		features: ["Для кормящих мам", "Дышащие", "Гипоаллергенные", "Удобные"]
	},
	{
		id: 6,
		name: "Одноразовые пеленки YokoSun",
		image: pelen,
		category: "Пеленки",
		sizes: [
			{ size: "Детские одноразовые пеленки YokoSun 60*90, L", price: 3600, pieces: 10 },
			{ size: "Детские одноразовые пеленки YokoSun 50*50, M", price: 2500, pieces: 10 }
		],
		features: ["Водонепроницаемые", "Впитывающие", "Мягкие", "Удобные"]
	},
	{
		id: 7,
		name: "Влажные салфетки YokoSun",
		image: wipes,
		category: "Салфетки",
		sizes: [
			{ size: "Детские влажные салфетки YokoSun", price: 350, pieces: 18 },
			{ size: "Детские влажные салфетки YokoSun", price: 1100, pieces: 64 },
			{ size: "Детские влажные салфетки YokoSun", price: 1600, pieces: 120 },
			{ size: "Влажные гигиенические салфетки детские YokoSun Eco", price: 1100, pieces: 100 },
			{ size: "Влажные гигиенические салфетки YokoSun для всей семьи", price: 1000, pieces: 54 },
			{ size: "Влажные гигиенические салфетки YokoSun для всей семьи", price: 1400, pieces: 108 },
			{ size: "Детские влажные салфетки YokoSun Premium)", price: 1600, pieces: 62 },
			{ size: "Универсальные детские влажные салфетки YokoSun", price: 1600, pieces: 64 }
		],
		features: ["99% воды", "Без спирта", "Гипоаллергенные", "Мягкие"]
	},
	{
		id: 8,
		name: "Влажная туалетная бумага YokoSun",
		image: toilet,
		category: "Туалетная бумага",
		sizes: [
			{ size: "Влажная биоразлагаемая детская туалетная бумага YokoSun", price: 900, pieces: 42 },
			{ size: "Влажная биоразлагаемая детская туалетная бумага YokoSun", price: 1000, pieces: 68 },
			{ size: "Влажная биоразлагаемая туалетная бумага для взрослых YokoSun", price: 1100, pieces: 78 }
		],
		features: ["Смываемые", "Деликатные", "С натуральными экстрактами", "Биоразлагаемые"]
	},
	{
		id: 9,
		name: "Ватно-бумажная продукция",
		image: sticks,
		category: "Уход",
		sizes: [
			{ size: "Экологичные ватные палочки YokoSun для детей, с ограничителем", price: 650, pieces: 55 },
			{ size: "Экологичные ватные палочки YokoSun для детей, с ограничителем", price: 800, pieces: 100 },
			{ size: "Экологичные ватные палочки YokoSun для всей семьи", price: 650, pieces: 200 },
			{ size: "Туалетная бумага YokoSun, трехслойная, 40 м / рулон", price: 400, pieces: 1 },
			{ size: "Бумажные гигиенические салфетки YokoSun детские", price: 1200, pieces: 200 },
			{ size: "Бумажные салфетки крем-эффект YokoSun,", price: 1200, pieces: 120 }
		],
		features: ["Натуральные компоненты", "Без слез", "Гипоаллергенные", "Дерматологически протестированы"]
	},
	{
		id: 10,
		name: "Средства для стирки и мытья посуды",
		image: xim,
		category: "Средства для стирки",
		sizes: [
			{ size: "Гель для мытья посуды YokoSun, Алоэ вера, 500 мл", price: 1250, pieces: 1 },
			{ size: "Гель для мытья посуды YokoSun, Арбуз, 500 мл", price: 1250, pieces: 1 },
			{ size: "Гель для мытья посуды YokoSun, Лимон, 500 мл", price: 1250, pieces: 1 },
			{ size: "Гель для мытья посуды YokoSun, Яблоко, 500 мл", price: 1250, pieces: 1 },
			{ size: "Гель для мытья посуды YokoSun, Алоэ Вера, 1 л", price: 2500, pieces: 1 },
			{ size: "Гель для мытья посуды YokoSun, Яблоко, 1 л", price: 2500, pieces: 1 },
			{ size: "Гель для мытья посуды YokoSun, Лимон, 1 л", price: 2500, pieces: 1 },
			{ size: "Гель для мытья посуды YokoSun, Арбуз, 1 л", price: 2500, pieces: 1 },
			{ size: "Гель для мытья посуды YokoSun, Арбуз, 5 л", price: 7700, pieces: 1 },
			{ size: "Таблетки для посудомоечной машины YokoSun, 30 шт", price: 3600, pieces: 1 },
			{ size: "Таблетки для посудомоечной машины YokoSun, 60 шт", price: 6700, pieces: 1 },
			{ size: "Таблетки для посудомоечной машины YokoSun, 100 шт", price: 9100, pieces: 1 },
			{ size: "Таблетки для посудомоечной машины YokoSun бесфосфатные, 30 шт", price: 3900, pieces: 1 },
			{ size: "Таблетки для посудомоечной машины YokoSun бесфосфатные, 60 шт", price: 7300, pieces: 1 },
			{ size: "Таблетки для посудомоечной машины YokoSun бесфосфатные, 100 шт", price: 9900, pieces: 1 },
			{ size: "Соль для посудомоечной машины YokoSun, 1 кг", price: 1600, pieces: 1 },
			{ size: "Соль для посудомоечной машины YokoSun, 1.8 кг", price: 1900, pieces: 1 },
			{ size: "Порошок для посудомоечной машины YokoSun, 1 кг", price: 3600, pieces: 1 },
			{ size: "Таблетки для посудомоечной машины YokoSun, 30 шт", price: 3600, pieces: 1 },
			{ size: "Таблетки для посудомоечной машины YokoSun, 60 шт", price: 6700, pieces: 1 },
			{ size: "Таблетки для посудомоечной машины YokoSun, 100 шт", price: 9100, pieces: 1 },
			{ size: "Гель для стирки YokoSun, Цветущий крокус, 5.1 л", price: 7900, pieces: 1 },
			{ size: "Гель для стирки YokoSun, Весенная сакура, 5.1 л", price: 7900, pieces: 1 },
			{ size: "Гель для стирки YokoSun, Японский органический хлопок, 5.1 л", price: 7900, pieces: 1 },
			{ size: "Гель для стирки YokoSun, Горный эдельвейс, 5.1 л", price: 7900, pieces: 1 },
			{ size: "Гель для стирки YokoSun, Цветущий крокус, 2.1 л", price: 4300, pieces: 1 },
			{ size: "Гель для стирки YokoSun, Весенная сакура, 2.1 л", price: 4300, pieces: 1 },
			{ size: "Гель для стирки YokoSun, Японский органический хлопок, 2.1 л", price: 4300, pieces: 1 },
			{ size: "Гель для стирки YokoSun, Горный эдельвейс, 2.1 л", price: 4300, pieces: 1 },
			{ size: "Гель для стирки YokoSun, Цветущий крокус, 1 л", price: 2500, pieces: 1 },
			{ size: "Гель для стирки YokoSun, Весенная сакура, 1 л", price: 2500, pieces: 1 },
			{ size: "Гель для стирки YokoSun, Японский органический хлопок, 1 л", price: 2500, pieces: 1 },
			{ size: "Гель для стирки YokoSun, Горный эдельвейс, 1 л", price: 2500, pieces: 1 },
			{ size: "Гель для стирки YokoSun, Цветущий крокус, 5 л", price: 7700, pieces: 1 },
			{ size: "Гель для стирки YokoSun, Весенная сакура, 5 л", price: 7700, pieces: 1 },
			{ size: "Кондиционер - ополаскиватель YokoSun, для всей семьи, Горный эдельвейс, 1 л", price: 3900, pieces: 1 },
			{ size: "Кондиционер - ополаскиватель YokoSun, для детского белья, Без аромата, 1 л", price: 3900, pieces: 1 },
			{ size: "Отбеливатель пятновыводитель экспресс-эффект YokoSun, 1 кг", price: 3600, pieces: 1 },
			{ size: "Отбеливатель пятновыводитель экспресс-эффект YokoSun, 1 кг", price: 3600, pieces: 1 },
			{ size: "Отбеливатель пятновыводитель экспресс-эффект YokoSun, 0.5 кг", price: 2600, pieces: 1 },
			{ size: "Жидкий отбеливатель пятновыводитель экспресс-эффект YokoSun, 1 л", price: 2600, pieces: 1 },
			{ size: "Гель-концентрат для чистки унитазов YokoSun, 500 мл", price: 2300, pieces: 1 },
			{ size: "Средство для уборки детских комнат YokoSun, 500 мл", price: 2300, pieces: 1 },
			{ size: "Чистящее средство для ванных комнат и сантехники YokoSun, 500 мл", price: 2300, pieces: 1 },
			{ size: "Универсальное чистящее средство для уборки дома YokoSun, 500 мл", price: 2300, pieces: 1 },
			{ size: "Чистящее средство для стекол, пластика, хромированных поверхностей  YokoSun, 500 мл", price: 2300, pieces: 1 },
			{ size: "Жироудалитель YokoSun, 500 мл", price: 2300, pieces: 1 },
			{ size: "Гель для мытья полов YokoSun, 1л", price: 2300, pieces: 1 },
			{ size: "Гель для мытья полов YokoSun, 5л", price: 7700, pieces: 1 },
		],
		features: ["Безопасные", "Гипоаллергенные", "Эффективные", "Экологичные"]
	}
];