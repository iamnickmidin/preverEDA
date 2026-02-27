export type Food = {
  name: string;
  category: string;
  tags: string[];
  photos: string[];
};

export const foods = [
  {
    name: "Пицца Маргарита",
    category: "итальянская",
    tags: ["сыр", "томат", "пшеничное"],
    photos: [
      "https://images.unsplash.com/photo-1548365328-9f547f9ecda7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Суши Лосось",
    category: "японская",
    tags: ["рыба", "рис", "соевый соус"],
    photos: [
      "https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Рамен",
    category: "японская",
    tags: ["бульон", "лапша", "умами"],
    photos: [
      "https://images.unsplash.com/photo-1604908176997-431c495da9b2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1548940740-204726a19be3?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Буррито",
    category: "мексиканская",
    tags: ["острое", "фасоль", "сыр"],
    photos: [
      "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Тако с курицей",
    category: "мексиканская",
    tags: ["курица", "острое", "кукуруза"],
    photos: [
      "https://images.unsplash.com/photo-1604908177225-6c3e4ab0cbae?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Пад Тай",
    category: "тайская",
    tags: ["лапша", "кисло-сладкое", "арахис"],
    photos: [
      "https://images.unsplash.com/photo-1603079841036-2297f9a9e1bb?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Фо Бо",
    category: "вьетнамская",
    tags: ["бульон", "говядина", "зелень"],
    photos: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Греческий салат",
    category: "средиземноморская",
    tags: ["свежие", "сыр", "оливки"],
    photos: [
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Цезарь",
    category: "европейская",
    tags: ["курица", "сыр", "соус"],
    photos: [
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Стейк",
    category: "европейская",
    tags: ["говядина", "гриль", "сочное"],
    photos: [
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Бургер",
    category: "американская",
    tags: ["говядина", "булка", "сыр"],
    photos: [
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Паста карбонара",
    category: "итальянская",
    tags: ["сливочное", "бекон", "сыр"],
    photos: [
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Пельмени",
    category: "русская",
    tags: ["мясо", "тесто", "вареное"],
    photos: [
      "https://images.unsplash.com/photo-1608039829574-1d2df57f80b1?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Борщ",
    category: "русская",
    tags: ["свекла", "кислое", "суп"],
    photos: [
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Омлет",
    category: "завтрак",
    tags: ["яйца", "мягкое", "сыр"],
    photos: [
      "https://images.unsplash.com/photo-1495214783159-3503fd1b572d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Овсянка",
    category: "завтрак",
    tags: ["зерно", "мягкое", "полезное"],
    photos: [
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Шакшука",
    category: "ближневосточная",
    tags: ["томат", "яйца", "острое"],
    photos: [
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Фалафель",
    category: "ближневосточная",
    tags: ["нут", "хрустящее", "специи"],
    photos: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Хумус",
    category: "ближневосточная",
    tags: ["нут", "паста", "кремовое"],
    photos: [
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Сырники",
    category: "десерт",
    tags: ["творог", "сладкое", "мягкое"],
    photos: [
      "https://images.unsplash.com/photo-1505253216365-94c319f1b467?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Блины",
    category: "русская",
    tags: ["сладкое", "тесто", "масло"],
    photos: [
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Круассан",
    category: "французская",
    tags: ["слойка", "масло", "тесто"],
    photos: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Том Ям",
    category: "тайская",
    tags: ["острое", "кислое", "креветки"],
    photos: [
      "https://images.unsplash.com/photo-1604908176997-431c495da9b2?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Куриное карри",
    category: "индийская",
    tags: ["острое", "соус", "курица"],
    photos: [
      "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Дал",
    category: "индийская",
    tags: ["чечевица", "специи", "вегетарианское"],
    photos: [
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Ризотто",
    category: "итальянская",
    tags: ["рис", "сливочное", "сыр"],
    photos: [
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Севиче",
    category: "латино",
    tags: ["рыба", "кислое", "цитрус"],
    photos: [
      "https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Паэлья",
    category: "испанская",
    tags: ["рис", "морепродукты", "шафран"],
    photos: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Кебаб",
    category: "турецкая",
    tags: ["мясо", "гриль", "специи"],
    photos: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Оливье",
    category: "русская",
    tags: ["майонез", "овощи", "мягкое"],
    photos: [
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Рататуй",
    category: "французская",
    tags: ["овощи", "тушеное", "томаты"],
    photos: [
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Лазанья",
    category: "итальянская",
    tags: ["сыр", "томат", "мясо"],
    photos: [
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Салат с киноа",
    category: "здоровое",
    tags: ["киноа", "свежие", "легкое"],
    photos: [
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Боул с лососем",
    category: "здоровое",
    tags: ["рыба", "рис", "овощи"],
    photos: [
      "https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Тыквенный суп",
    category: "европейская",
    tags: ["тыква", "кремовое", "мягкое"],
    photos: [
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Шоколадный фондан",
    category: "десерт",
    tags: ["шоколад", "сладкое", "теплое"],
    photos: [
      "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Мороженое",
    category: "десерт",
    tags: ["сладкое", "холодное", "молочное"],
    photos: [
      "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Гуакамоле",
    category: "мексиканская",
    tags: ["авокадо", "свежее", "кремовое"],
    photos: [
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Поке",
    category: "гавайская",
    tags: ["рыба", "рис", "соевый соус"],
    photos: [
      "https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=900&q=80"
    ]
  }
];
