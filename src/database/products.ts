const products = [{
    id: 1,
    title: 'Цепочка на шею с бабочкой',
    description: '',
    price: '1.600',
    actualPrice: 1600,
    category: 'Аксессуары',
    rate: 4.9,
    image: '/img/products/aksess%20(1).png',
  },
  {
    id: 2,
    title: 'Сумка багет через плечо',
    description: 'Сумка багет через плечо',
    price: '10.000',
    actualPrice: 10000,
    category: 'Аксессуары',
    rate: 4.7,
    image: '/img/products/restrest.png',
  },
  {
    id: 3,
    title: 'Очки имиджовые - чёрный, прозрачный',
    description: '',
    price: '4.000',
    actualPrice: 4000,
    category: 'Аксессуары',
    rate: 4.7,
    image: '/img/products/rest1.png',
  },
  {
    id: 4,
    title: 'Палитра теней для век Dark Retro',
    description: 'Насыщенные цвета теней для век Wild Rose, матовая жемчужно-готическая черно-красная контрастная дымчатая палитра',
    price: '1 700',
    actualPrice: 1700,
    category: 'Аксессуары',
    rate: 4.7,
    image: '/img/products/aksess%20(4).png',
  },
  {
    id: 5,
    title: 'Лоферы на платформе',
    description: 'Лоферы на платформе осенние на каблуке кожаные',
    price: '14.500',
    actualPrice: 14500,
    category: 'Обувь',
    rate: 4.6,
    sizes: '36, 37, 38, 39, 40, 41',
    image: '/img/products/foot%20(1).png',
  },
  {
    id: 6,
    title: 'Лоферы на платформе',
    description: 'Лоферы на платформе осенние на каблуке кожаные',
    price: '22.000',
    actualPrice: 22000,
    category: 'Обувь',
    rate: 4.6,
    sizes: '36, 37, 38, 39, 40, 41',
    image: '/img/products/foot%20(2).png',
  },
  {
    id: 7,
    title: 'Лоферы на платформе',
    description: 'Лоферы на платформе осенние на каблуке кожаные',
    price: '13.700',
    actualPrice: 13700,
    category: 'Обувь',
    rate: 4.6,
    sizes: '36, 37, 38, 39, 40, 41',
    image: '/img/products/foot%20(3).png',
  },
  {
    id: 8,
    title: 'Кружка с принтом Отель Хазбин Hazbin Hotel Чарли',
    description: 'Кружка с принтом Отель Хазбин Hazbin Hotel Чарли',
    price: '2.000',
    actualPrice: 2000,
    category: 'Кружки',
    rate: 4.2,
    image: '/img/products/kruzhka%20(1).png',
  },
  {
    id: 9,
    title: 'Кружка PREMIUM Кружка "Аластор", 300 мл',
    description: 'Кружка PREMIUM Кружка "Аластор", 300 мл, 1 шт',
    price: '2.500',
    actualPrice: 2500,
    category: 'Кружки',
    rate: 4.7,
    image: '/img/products/kruzhka%20(2).png',
  },
  {
    id: 10,
    title: 'Кружка с принтом Отель Хазбин Hazbin Hotel Эмили',
    description: 'Кружка с принтом Отель Хазбин Hazbin Hotel Эмили',
    price: '2.000',
    actualPrice: 2000,
    category: 'Кружки',
    rate: 4.2,
    image: '/img/products/kruzhka%20(3).png',
  },
  {
    "id": 12,
    "title": "Куртка зимняя короткая оверсайз дутая двусторонняя",
    "titleKaz": "Қысқы қысқа, оверсайз, екіжақты, үлпілдек куртка",
    "description": "Куртка зимняя короткая оверсайз дутая двусторонняя",
    "descriptionKaz": "Қысқы қысқа, оверсайз, екіжақты, үлпілдек куртка",
    "price": "22.000",
    "actualPrice": 22000,
    "category": "Одежда",
    "categoryKaz": "Киім",
    "rate": 4.7,
    "sizes": "M, L, 2XL",
    "image": "/img/products/odezhda%20(2).png",
    "idDoc": "VN2jX5aXMJHxTxv9brIM"
  },
  {
    "id": 13,
    "title": "Пиджак",
    "titleKaz": "Пиджак",
    "description": "Пиджак жакет укороченный твидовый розового цвета",
    "descriptionKaz": "Қызғылт түсті, қысқартылған твидті пиджак-жакет",
    "price": "24.500",
    "actualPrice": 24600,
    "category": "Одежда",
    "categoryKaz": "Киім",
    "rate": 4.9,
    "sizes": "Размеры: S, M, L, XL",
    "image": "/img/products/photo1.png",
    "idDoc": "Yv7sLBO8SflbKO1cm9cJ"
  },
  {
    "id": 14,
    "title": "Кардиган оверсайз укороченный в полоску",
    "titleKaz": "Жолақты, қысқартылған, оверсайз кардиган",
    "description": "",
    "descriptionKaz": "",
    "price": "9.000",
    "actualPrice": 9000,
    "category": "Одежда",
    "categoryKaz": "Киім",
    "rate": 4.9,
    "sizes": "42-48",
    "image": "/img/products/odezhda%20(4).png",
    "idDoc": "dOcweuTyELBOcAaVNVDb"
  },
  {
    "id": 15,
    "title": "Костюм брючный деловой двойка",
    "titleKaz": "Классикалық екі бөліктен тұратын шалбарлы костюм",
    "description": "Есть в бежевом, песочном; синим; розовом; сером; чёрном цвете",
    "descriptionKaz": "Беж, құмды, көк, қызғылт, сұр және қара түстерде бар",
    "price": "25.800",
    "actualPrice": 25800,
    "category": "Одежда",
    "categoryKaz": "Киім",
    "rate": 4.9,
    "sizes": "38, 40, 42, 44, 46",
    "image": "/img/products/odezhda%20(5).png",
    "idDoc": "YueSZeLjvO5oCl36Hn7r"
  },
  {
    "id": 16,
    "title": "Блузка",
    "titleKaz": "Көйлекше (блузка)",
    "description": "Нарядная, праздничная, офисная, белая.\nЕсть в чёрном, светло-бежевом, изумрудном цвете.",
    "descriptionKaz": "Мерекелік, сәнді, кеңселік, ақ түсті. Қара, ашық-беж және зүбәржат түстері де бар.",
    "price": "13.800",
    "actualPrice": 13800,
    "category": "Одежда",
    "categoryKaz": "Киім",
    "rate": 4.9,
    "sizes": "40, 42, 44, 46, 48, 50",
    "image": "/img/products/odezhda%20(6).png",
    "idDoc": "e7w4epohkYukoMsUiNZI"
  },
  {
    "id": 17,
    "title": "Брюки в стиле Old Money",
    "titleKaz": "Old Money стиліндегі шалбарлар",
    "description": "Брюки женские палаццо классические прямые, Есть в чёрном, чёрном матовым; темно-сером, графит; синим кобальте, темно-синим, серо-синим, сапфирово-синим, сигнальном синим; светло-сером цвете.",
    "descriptionKaz": "Классикалық түзу әйелдерге арналған палаццо шалбарлар. Қара, күңгірт қара, қою сұр, графит, кобальт көк, қою көк, сұр көк, сапфир көк, ашық сұр, сигнал көк түстерде бар.",
    "price": "15.000",
    "actualPrice": 15000,
    "category": "Одежда",
    "categoryKaz": "Киім",
    "rate": 4.9,
    "sizes": "34, 36, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68.\nXS, M, L.",
    "image": "/img/products/odezhda%20(7).png",
    "idDoc": "zkI3lHbPRpLEW1joMm4o"
  },
  {
    "id": 18,
    "title": "Наклейка на банковскую карту Hotel Hazbin",
    "titleKaz": "Hotel Hazbin банк картасына арналған жапсырма",
    "description": "",
    "descriptionKaz": "",
    "price": "1.800",
    "actualPrice": 1800,
    "category": "Другие",
    "categoryKaz": "Басқалар",
    "rate": 4.7,
    "image": "/img/products/other%20(1).png",
    "idDoc": "487DiFclLGJcd45LwpRP"
  },
  {
    "id": 19,
    "title": "Наклейка на банковскую карту Отель Хазбин, Аластор",
    "titleKaz": "Отель Хазбин, Аластор банк картасына арналған жапсырма",
    "description": "",
    "descriptionKaz": "",
    "price": "1.800",
    "actualPrice": 1800,
    "category": "Другие",
    "categoryKaz": "Басқалар",
    "rate": 4.7,
    "image": "/img/products/other%20(2).png",
    "idDoc": "3hMvBirJtrWpMQk05c6C"
  },
  {
    id: 20,
    title: 'Кроватка-трансформер 7в1 с антигрызками от завода Incanto',
    description: 'Супер цена 🔥 кроватка-трансформер 7в1 с антигрызками от завода Incanto\n',
    price: '50.000',
    actualPrice: 50000,
    category: 'Другие',
    rate: 4.7,
    image: '/img/products/other%20(3).png',
  },
  {
    id: 21,
    title: 'Накладные ногти',
    description: '24 шт. черных накладных ногтей с французским типом, 3D-бантики, наклеиваемые на ногти, глянцевые бежевые розоватые клеевые ногти с дизайном из цепочек со стразами, накладные ногти средней толщины для женщин и девочек',
    price: '512',
    actualPrice: 512,
    category: 'Другие',
    rate: 4.7,
    image: '/img/products/rest.png',
  },
  {
    id: 22,
    title: 'Набор из 2 Кукол Монстер Хай Дьюс Горгон и Клео де Нил ',
    description: 'Репродукция 2024 boo-riginal creeproduction g1 cleo de nile and deuce gorgon Monster High HRP86',
    price: '200.000',
    actualPrice: 200000,
    category: 'Другие',
    rate: 4.7,
    image: '/img/products/other%20(5).png',
  },
]

export default products;