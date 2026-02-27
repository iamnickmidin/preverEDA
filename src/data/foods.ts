export type Food = {
  name: string;
  category: string;
  tags: string[];
  photos: string[];
};

export const foods = [
  {
    name: "Борщ",
    category: "русская",
    tags: ["суп", "свёкла", "капуста", "сметана", "свекла", "кислое"],
    photos: [
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Пельмени",
    category: "русская",
    tags: ["основное", "тесто", "фарш", "сметана", "мясо", "вареное"],
    photos: [
      "https://images.unsplash.com/photo-1608039829574-1d2df57f80b1?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Блины",
    category: "русская",
    tags: ["выпечка", "мука", "молоко", "яйцо", "сладкое", "тесто", "масло"],
    photos: [
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Сырники",
    category: "русская",
    tags: ["десерт", "творог", "яйцо", "сметана", "сладкое", "мягкое"],
    photos: [
      "https://images.unsplash.com/photo-1505253216365-94c319f1b467?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Бефстроганов",
    category: "русская",
    tags: ["основное", "говядина", "сливочный соус", "лук"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%91%D0%B5%D1%84%D1%81%D1%82%D1%80%D0%BE%D0%B3%D0%B0%D0%BD%D0%BE%D0%B2&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%91%D0%B5%D1%84%D1%81%D1%82%D1%80%D0%BE%D0%B3%D0%B0%D0%BD%D0%BE%D0%B2"
    ]
  },
  {
    name: "Щи",
    category: "русская",
    tags: ["суп", "капуста", "бульон", "сметана"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A9%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A9%D0%B8"
    ]
  },
  {
    name: "Окрошка",
    category: "русская",
    tags: ["холодный суп", "кефир/квас", "огурец", "картофель"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9E%D0%BA%D1%80%D0%BE%D1%88%D0%BA%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9E%D0%BA%D1%80%D0%BE%D1%88%D0%BA%D0%B0"
    ]
  },
  {
    name: "Солянка",
    category: "русская",
    tags: ["суп", "копчёности", "солёные огурцы", "лимон"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A1%D0%BE%D0%BB%D1%8F%D0%BD%D0%BA%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A1%D0%BE%D0%BB%D1%8F%D0%BD%D0%BA%D0%B0"
    ]
  },
  {
    name: "Голубцы",
    category: "русская",
    tags: ["основное", "капуста", "фарш", "рис"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%93%D0%BE%D0%BB%D1%83%D0%B1%D1%86%D1%8B&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%93%D0%BE%D0%BB%D1%83%D0%B1%D1%86%D1%8B"
    ]
  },
  {
    name: "Вареники",
    category: "русская",
    tags: ["основное", "тесто", "начинка", "сметана"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%92%D0%B0%D1%80%D0%B5%D0%BD%D0%B8%D0%BA%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%92%D0%B0%D1%80%D0%B5%D0%BD%D0%B8%D0%BA%D0%B8"
    ]
  },
  {
    name: "Салат Оливье",
    category: "русская",
    tags: ["салат", "картофель", "колбаса/курица", "майонез", "овощи", "мягкое"],
    photos: [
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Винегрет",
    category: "русская",
    tags: ["салат", "свёкла", "картофель", "солёные огурцы"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%92%D0%B8%D0%BD%D0%B5%D0%B3%D1%80%D0%B5%D1%82&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%92%D0%B8%D0%BD%D0%B5%D0%B3%D1%80%D0%B5%D1%82"
    ]
  },
  {
    name: "Селёдка под шубой",
    category: "русская",
    tags: ["салат", "сельдь", "свёкла", "майонез"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A1%D0%B5%D0%BB%D1%91%D0%B4%D0%BA%D0%B0%20%D0%BF%D0%BE%D0%B4%20%D1%88%D1%83%D0%B1%D0%BE%D0%B9&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A1%D0%B5%D0%BB%D1%91%D0%B4%D0%BA%D0%B0%20%D0%BF%D0%BE%D0%B4%20%D1%88%D1%83%D0%B1%D0%BE%D0%B9"
    ]
  },
  {
    name: "Пирожки",
    category: "русская",
    tags: ["выпечка", "тесто", "начинка", "печь/жарка"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9F%D0%B8%D1%80%D0%BE%D0%B6%D0%BA%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9F%D0%B8%D1%80%D0%BE%D0%B6%D0%BA%D0%B8"
    ]
  },
  {
    name: "Кулебяка",
    category: "русская",
    tags: ["выпечка", "дрожжевое тесто", "рыба/мясо", "рис"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9A%D1%83%D0%BB%D0%B5%D0%B1%D1%8F%D0%BA%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9A%D1%83%D0%BB%D0%B5%D0%B1%D1%8F%D0%BA%D0%B0"
    ]
  },
  {
    name: "Расстегай",
    category: "русская",
    tags: ["выпечка", "тесто", "рыба", "бульон"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A0%D0%B0%D1%81%D1%81%D1%82%D0%B5%D0%B3%D0%B0%D0%B9&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A0%D0%B0%D1%81%D1%81%D1%82%D0%B5%D0%B3%D0%B0%D0%B9"
    ]
  },
  {
    name: "Шашлык",
    category: "русская",
    tags: ["гриль", "мясо", "маринад", "лук"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A8%D0%B0%D1%88%D0%BB%D1%8B%D0%BA&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A8%D0%B0%D1%88%D0%BB%D1%8B%D0%BA"
    ]
  },
  {
    name: "Холодец",
    category: "русская",
    tags: ["закуска", "мясо", "желатин/коллаген", "чеснок"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A5%D0%BE%D0%BB%D0%BE%D0%B4%D0%B5%D1%86&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A5%D0%BE%D0%BB%D0%BE%D0%B4%D0%B5%D1%86"
    ]
  },
  {
    name: "Уха",
    category: "русская",
    tags: ["суп", "рыба", "картофель", "зелень"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A3%D1%85%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A3%D1%85%D0%B0"
    ]
  },
  {
    name: "Каша (гречневая/овсяная)",
    category: "русская",
    tags: ["завтрак", "крупа", "молоко/вода", "масло"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9A%D0%B0%D1%88%D0%B0%20%28%D0%B3%D1%80%D0%B5%D1%87%D0%BD%D0%B5%D0%B2%D0%B0%D1%8F/%D0%BE%D0%B2%D1%81%D1%8F%D0%BD%D0%B0%D1%8F%29&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9A%D0%B0%D1%88%D0%B0%20%28%D0%B3%D1%80%D0%B5%D1%87%D0%BD%D0%B5%D0%B2%D0%B0%D1%8F/%D0%BE%D0%B2%D1%81%D1%8F%D0%BD%D0%B0%D1%8F%29"
    ]
  },
  {
    name: "Котлеты по-киевски",
    category: "русская",
    tags: ["основное", "курица", "сливочное масло", "панировка"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9A%D0%BE%D1%82%D0%BB%D0%B5%D1%82%D1%8B%20%D0%BF%D0%BE-%D0%BA%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9A%D0%BE%D1%82%D0%BB%D0%B5%D1%82%D1%8B%20%D0%BF%D0%BE-%D0%BA%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B8"
    ]
  },
  {
    name: "Медовик",
    category: "русская",
    tags: ["десерт", "мёд", "коржи", "сметанный крем"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9C%D0%B5%D0%B4%D0%BE%D0%B2%D0%B8%D0%BA&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9C%D0%B5%D0%B4%D0%BE%D0%B2%D0%B8%D0%BA"
    ]
  },
  {
    name: "Пряники",
    category: "русская",
    tags: ["десерт", "мёд", "пряности", "глазурь"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9F%D1%80%D1%8F%D0%BD%D0%B8%D0%BA%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9F%D1%80%D1%8F%D0%BD%D0%B8%D0%BA%D0%B8"
    ]
  },
  {
    name: "Пасха творожная",
    category: "русская",
    tags: ["десерт", "творог", "сливки", "изюм"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9F%D0%B0%D1%81%D1%85%D0%B0%20%D1%82%D0%B2%D0%BE%D1%80%D0%BE%D0%B6%D0%BD%D0%B0%D1%8F&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9F%D0%B0%D1%81%D1%85%D0%B0%20%D1%82%D0%B2%D0%BE%D1%80%D0%BE%D0%B6%D0%BD%D0%B0%D1%8F"
    ]
  },
  {
    name: "Торт Наполеон",
    category: "русская",
    tags: ["десерт", "слоёное тесто", "заварной крем", "ваниль"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A2%D0%BE%D1%80%D1%82%20%D0%9D%D0%B0%D0%BF%D0%BE%D0%BB%D0%B5%D0%BE%D0%BD&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A2%D0%BE%D1%80%D1%82%20%D0%9D%D0%B0%D0%BF%D0%BE%D0%BB%D0%B5%D0%BE%D0%BD"
    ]
  },
  {
    name: "Кимчи",
    category: "корейская",
    tags: ["закуска", "пекинская капуста", "кочуджан", "ферментация"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9A%D0%B8%D0%BC%D1%87%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9A%D0%B8%D0%BC%D1%87%D0%B8"
    ]
  },
  {
    name: "Бибимбап",
    category: "корейская",
    tags: ["основное", "рис", "овощи", "кочуджан"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%91%D0%B8%D0%B1%D0%B8%D0%BC%D0%B1%D0%B0%D0%BF&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%91%D0%B8%D0%B1%D0%B8%D0%BC%D0%B1%D0%B0%D0%BF"
    ]
  },
  {
    name: "Пулькоги",
    category: "корейская",
    tags: ["основное", "говядина", "соевый соус", "кунжут"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9F%D1%83%D0%BB%D1%8C%D0%BA%D0%BE%D0%B3%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9F%D1%83%D0%BB%D1%8C%D0%BA%D0%BE%D0%B3%D0%B8"
    ]
  },
  {
    name: "Кальби (ребрышки)",
    category: "корейская",
    tags: ["гриль", "ребрышки", "соевый маринад", "чеснок"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9A%D0%B0%D0%BB%D1%8C%D0%B1%D0%B8%20%28%D1%80%D0%B5%D0%B1%D1%80%D1%8B%D1%88%D0%BA%D0%B8%29&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9A%D0%B0%D0%BB%D1%8C%D0%B1%D0%B8%20%28%D1%80%D0%B5%D0%B1%D1%80%D1%8B%D1%88%D0%BA%D0%B8%29"
    ]
  },
  {
    name: "Самгёпсаль",
    category: "корейская",
    tags: ["гриль", "свиная грудинка", "салатные листья", "соусы"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A1%D0%B0%D0%BC%D0%B3%D1%91%D0%BF%D1%81%D0%B0%D0%BB%D1%8C&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A1%D0%B0%D0%BC%D0%B3%D1%91%D0%BF%D1%81%D0%B0%D0%BB%D1%8C"
    ]
  },
  {
    name: "Ттокпокки",
    category: "корейская",
    tags: ["уличная еда", "рисовые клецки", "кочуджан", "острое"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A2%D1%82%D0%BE%D0%BA%D0%BF%D0%BE%D0%BA%D0%BA%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A2%D1%82%D0%BE%D0%BA%D0%BF%D0%BE%D0%BA%D0%BA%D0%B8"
    ]
  },
  {
    name: "Чапчхэ",
    category: "корейская",
    tags: ["гарнир", "стеклянная лапша", "овощи", "соевый соус"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A7%D0%B0%D0%BF%D1%87%D1%85%D1%8D&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A7%D0%B0%D0%BF%D1%87%D1%85%D1%8D"
    ]
  },
  {
    name: "Сундубу-ччигэ",
    category: "корейская",
    tags: ["суп/рагу", "мягкий тофу", "кочуджан", "морепродукты/мясо"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A1%D1%83%D0%BD%D0%B4%D1%83%D0%B1%D1%83-%D1%87%D1%87%D0%B8%D0%B3%D1%8D&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A1%D1%83%D0%BD%D0%B4%D1%83%D0%B1%D1%83-%D1%87%D1%87%D0%B8%D0%B3%D1%8D"
    ]
  },
  {
    name: "Кимчи-ччигэ",
    category: "корейская",
    tags: ["суп/рагу", "кимчи", "тофу", "свинина"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9A%D0%B8%D0%BC%D1%87%D0%B8-%D1%87%D1%87%D0%B8%D0%B3%D1%8D&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9A%D0%B8%D0%BC%D1%87%D0%B8-%D1%87%D1%87%D0%B8%D0%B3%D1%8D"
    ]
  },
  {
    name: "Твендян-ччигэ",
    category: "корейская",
    tags: ["суп/рагу", "твенджан", "тофу", "овощи"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A2%D0%B2%D0%B5%D0%BD%D0%B4%D1%8F%D0%BD-%D1%87%D1%87%D0%B8%D0%B3%D1%8D&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A2%D0%B2%D0%B5%D0%BD%D0%B4%D1%8F%D0%BD-%D1%87%D1%87%D0%B8%D0%B3%D1%8D"
    ]
  },
  {
    name: "Самгетхан (куриный суп)",
    category: "корейская",
    tags: ["суп", "курица", "женьшень", "рис"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A1%D0%B0%D0%BC%D0%B3%D0%B5%D1%82%D1%85%D0%B0%D0%BD%20%28%D0%BA%D1%83%D1%80%D0%B8%D0%BD%D1%8B%D0%B9%20%D1%81%D1%83%D0%BF%29&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A1%D0%B0%D0%BC%D0%B3%D0%B5%D1%82%D1%85%D0%B0%D0%BD%20%28%D0%BA%D1%83%D1%80%D0%B8%D0%BD%D1%8B%D0%B9%20%D1%81%D1%83%D0%BF%29"
    ]
  },
  {
    name: "Кимбап",
    category: "корейская",
    tags: ["роллы", "рис", "нори", "овощи/ветчина"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9A%D0%B8%D0%BC%D0%B1%D0%B0%D0%BF&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9A%D0%B8%D0%BC%D0%B1%D0%B0%D0%BF"
    ]
  },
  {
    name: "Манду (корейские пельмени)",
    category: "корейская",
    tags: ["пельмени", "тесто", "фарш", "пар/жарка"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9C%D0%B0%D0%BD%D0%B4%D1%83%20%28%D0%BA%D0%BE%D1%80%D0%B5%D0%B9%D1%81%D0%BA%D0%B8%D0%B5%20%D0%BF%D0%B5%D0%BB%D1%8C%D0%BC%D0%B5%D0%BD%D0%B8%29&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9C%D0%B0%D0%BD%D0%B4%D1%83%20%28%D0%BA%D0%BE%D1%80%D0%B5%D0%B9%D1%81%D0%BA%D0%B8%D0%B5%20%D0%BF%D0%B5%D0%BB%D1%8C%D0%BC%D0%B5%D0%BD%D0%B8%29"
    ]
  },
  {
    name: "Наэнмён",
    category: "корейская",
    tags: ["лапша", "холодное", "гречневая лапша", "бульон"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9D%D0%B0%D1%8D%D0%BD%D0%BC%D1%91%D0%BD&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9D%D0%B0%D1%8D%D0%BD%D0%BC%D1%91%D0%BD"
    ]
  },
  {
    name: "Хэмуль паджон",
    category: "корейская",
    tags: ["блин", "морепродукты", "лук", "тесто"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A5%D1%8D%D0%BC%D1%83%D0%BB%D1%8C%20%D0%BF%D0%B0%D0%B4%D0%B6%D0%BE%D0%BD&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A5%D1%8D%D0%BC%D1%83%D0%BB%D1%8C%20%D0%BF%D0%B0%D0%B4%D0%B6%D0%BE%D0%BD"
    ]
  },
  {
    name: "Паджон (луковые блины)",
    category: "корейская",
    tags: ["блин", "зелёный лук", "тесто", "соус"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9F%D0%B0%D0%B4%D0%B6%D0%BE%D0%BD%20%28%D0%BB%D1%83%D0%BA%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%B1%D0%BB%D0%B8%D0%BD%D1%8B%29&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9F%D0%B0%D0%B4%D0%B6%D0%BE%D0%BD%20%28%D0%BB%D1%83%D0%BA%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%B1%D0%BB%D0%B8%D0%BD%D1%8B%29"
    ]
  },
  {
    name: "Поссам",
    category: "корейская",
    tags: ["закуска", "свинина", "листья салата", "кимчи"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9F%D0%BE%D1%81%D1%81%D0%B0%D0%BC&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9F%D0%BE%D1%81%D1%81%D0%B0%D0%BC"
    ]
  },
  {
    name: "Даккальби",
    category: "корейская",
    tags: ["основное", "курица", "кочуджан", "овощи"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%94%D0%B0%D0%BA%D0%BA%D0%B0%D0%BB%D1%8C%D0%B1%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%94%D0%B0%D0%BA%D0%BA%D0%B0%D0%BB%D1%8C%D0%B1%D0%B8"
    ]
  },
  {
    name: "Чхикен (корейская жареная курица)",
    category: "корейская",
    tags: ["фастфуд", "курица", "фритюр", "соус"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A7%D1%85%D0%B8%D0%BA%D0%B5%D0%BD%20%28%D0%BA%D0%BE%D1%80%D0%B5%D0%B9%D1%81%D0%BA%D0%B0%D1%8F%20%D0%B6%D0%B0%D1%80%D0%B5%D0%BD%D0%B0%D1%8F%20%D0%BA%D1%83%D1%80%D0%B8%D1%86%D0%B0%29&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A7%D1%85%D0%B8%D0%BA%D0%B5%D0%BD%20%28%D0%BA%D0%BE%D1%80%D0%B5%D0%B9%D1%81%D0%BA%D0%B0%D1%8F%20%D0%B6%D0%B0%D1%80%D0%B5%D0%BD%D0%B0%D1%8F%20%D0%BA%D1%83%D1%80%D0%B8%D1%86%D0%B0%29"
    ]
  },
  {
    name: "Пибим куксу",
    category: "корейская",
    tags: ["лапша", "острое", "кочуджан", "овощи"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9F%D0%B8%D0%B1%D0%B8%D0%BC%20%D0%BA%D1%83%D0%BA%D1%81%D1%83&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9F%D0%B8%D0%B1%D0%B8%D0%BC%20%D0%BA%D1%83%D0%BA%D1%81%D1%83"
    ]
  },
  {
    name: "Чжачжанмён",
    category: "корейская",
    tags: ["лапша", "соус", "чёрная фасоль", "свинина"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A7%D0%B6%D0%B0%D1%87%D0%B6%D0%B0%D0%BD%D0%BC%D1%91%D0%BD&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A7%D0%B6%D0%B0%D1%87%D0%B6%D0%B0%D0%BD%D0%BC%D1%91%D0%BD"
    ]
  },
  {
    name: "Чжамппон",
    category: "корейская",
    tags: ["суп-лапша", "морепродукты", "острое", "бульон"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A7%D0%B6%D0%B0%D0%BC%D0%BF%D0%BF%D0%BE%D0%BD&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A7%D0%B6%D0%B0%D0%BC%D0%BF%D0%BF%D0%BE%D0%BD"
    ]
  },
  {
    name: "Ттоккук (суп с рисовыми клецками)",
    category: "корейская",
    tags: ["суп", "рисовые клецки", "бульон", "яйцо"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A2%D1%82%D0%BE%D0%BA%D0%BA%D1%83%D0%BA%20%28%D1%81%D1%83%D0%BF%20%D1%81%20%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D1%8B%D0%BC%D0%B8%20%D0%BA%D0%BB%D0%B5%D1%86%D0%BA%D0%B0%D0%BC%D0%B8%29&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A2%D1%82%D0%BE%D0%BA%D0%BA%D1%83%D0%BA%20%28%D1%81%D1%83%D0%BF%20%D1%81%20%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D1%8B%D0%BC%D0%B8%20%D0%BA%D0%BB%D0%B5%D1%86%D0%BA%D0%B0%D0%BC%D0%B8%29"
    ]
  },
  {
    name: "Кимчи-боккымбап (жареный рис)",
    category: "корейская",
    tags: ["жареный рис", "кимчи", "яйцо", "кунжут"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9A%D0%B8%D0%BC%D1%87%D0%B8-%D0%B1%D0%BE%D0%BA%D0%BA%D1%8B%D0%BC%D0%B1%D0%B0%D0%BF%20%28%D0%B6%D0%B0%D1%80%D0%B5%D0%BD%D1%8B%D0%B9%20%D1%80%D0%B8%D1%81%29&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9A%D0%B8%D0%BC%D1%87%D0%B8-%D0%B1%D0%BE%D0%BA%D0%BA%D1%8B%D0%BC%D0%B1%D0%B0%D0%BF%20%28%D0%B6%D0%B0%D1%80%D0%B5%D0%BD%D1%8B%D0%B9%20%D1%80%D0%B8%D1%81%29"
    ]
  },
  {
    name: "Банчхан (набор закусок)",
    category: "корейская",
    tags: ["закуски", "овощи", "ферментация", "разнообразие"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%91%D0%B0%D0%BD%D1%87%D1%85%D0%B0%D0%BD%20%28%D0%BD%D0%B0%D0%B1%D0%BE%D1%80%20%D0%B7%D0%B0%D0%BA%D1%83%D1%81%D0%BE%D0%BA%29&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%91%D0%B0%D0%BD%D1%87%D1%85%D0%B0%D0%BD%20%28%D0%BD%D0%B0%D0%B1%D0%BE%D1%80%20%D0%B7%D0%B0%D0%BA%D1%83%D1%81%D0%BE%D0%BA%29"
    ]
  },
  {
    name: "Суши",
    category: "японская",
    tags: ["морепродукты", "рис", "нори", "соевый соус"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A1%D1%83%D1%88%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A1%D1%83%D1%88%D0%B8"
    ]
  },
  {
    name: "Сашими",
    category: "японская",
    tags: ["рыба", "сырая", "васаби", "соевый соус"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A1%D0%B0%D1%88%D0%B8%D0%BC%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A1%D0%B0%D1%88%D0%B8%D0%BC%D0%B8"
    ]
  },
  {
    name: "Рамен",
    category: "японская",
    tags: ["суп-лапша", "бульон", "лапша", "умами"],
    photos: [
      "https://images.unsplash.com/photo-1604908176997-431c495da9b2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1548940740-204726a19be3?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Удон",
    category: "японская",
    tags: ["лапша", "пшеничная", "бульон", "соус"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A3%D0%B4%D0%BE%D0%BD&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A3%D0%B4%D0%BE%D0%BD"
    ]
  },
  {
    name: "Соба",
    category: "японская",
    tags: ["лапша", "гречневая", "соус", "холодное/горячее"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A1%D0%BE%D0%B1%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A1%D0%BE%D0%B1%D0%B0"
    ]
  },
  {
    name: "Темпура",
    category: "японская",
    tags: ["жарка", "кляр", "креветки/овощи", "соус"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A2%D0%B5%D0%BC%D0%BF%D1%83%D1%80%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A2%D0%B5%D0%BC%D0%BF%D1%83%D1%80%D0%B0"
    ]
  },
  {
    name: "Тонкацу",
    category: "японская",
    tags: ["основное", "свинина", "панировка", "соус тонкацу"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A2%D0%BE%D0%BD%D0%BA%D0%B0%D1%86%D1%83&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A2%D0%BE%D0%BD%D0%BA%D0%B0%D1%86%D1%83"
    ]
  },
  {
    name: "Окономияки",
    category: "японская",
    tags: ["блин", "капуста", "соус", "майонез"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9E%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D1%8F%D0%BA%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9E%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D1%8F%D0%BA%D0%B8"
    ]
  },
  {
    name: "Такояки",
    category: "японская",
    tags: ["уличная еда", "осьминог", "тесто", "соус"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A2%D0%B0%D0%BA%D0%BE%D1%8F%D0%BA%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A2%D0%B0%D0%BA%D0%BE%D1%8F%D0%BA%D0%B8"
    ]
  },
  {
    name: "Якитори",
    category: "японская",
    tags: ["гриль", "курица", "шпажки", "соус тарэ"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%AF%D0%BA%D0%B8%D1%82%D0%BE%D1%80%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%AF%D0%BA%D0%B8%D1%82%D0%BE%D1%80%D0%B8"
    ]
  },
  {
    name: "Сукияки",
    category: "японская",
    tags: ["горячее", "говядина", "соевый соус", "овощи"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A1%D1%83%D0%BA%D0%B8%D1%8F%D0%BA%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A1%D1%83%D0%BA%D0%B8%D1%8F%D0%BA%D0%B8"
    ]
  },
  {
    name: "Сябу-сябу",
    category: "японская",
    tags: ["хот-пот", "тонко нарезанное мясо", "бульон", "соусы"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A1%D1%8F%D0%B1%D1%83-%D1%81%D1%8F%D0%B1%D1%83&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A1%D1%8F%D0%B1%D1%83-%D1%81%D1%8F%D0%B1%D1%83"
    ]
  },
  {
    name: "Гёдза",
    category: "японская",
    tags: ["пельмени", "тесто", "фарш", "жарка"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%93%D1%91%D0%B4%D0%B7%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%93%D1%91%D0%B4%D0%B7%D0%B0"
    ]
  },
  {
    name: "Онигири",
    category: "японская",
    tags: ["закуска", "рис", "нори", "начинка"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9E%D0%BD%D0%B8%D0%B3%D0%B8%D1%80%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9E%D0%BD%D0%B8%D0%B3%D0%B8%D1%80%D0%B8"
    ]
  },
  {
    name: "Мисо-суп",
    category: "японская",
    tags: ["суп", "мисо", "тофу", "водоросли"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9C%D0%B8%D1%81%D0%BE-%D1%81%D1%83%D0%BF&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9C%D0%B8%D1%81%D0%BE-%D1%81%D1%83%D0%BF"
    ]
  },
  {
    name: "Карри-райс (японское карри)",
    category: "японская",
    tags: ["основное", "рис", "карри", "соус"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9A%D0%B0%D1%80%D1%80%D0%B8-%D1%80%D0%B0%D0%B9%D1%81%20%28%D1%8F%D0%BF%D0%BE%D0%BD%D1%81%D0%BA%D0%BE%D0%B5%20%D0%BA%D0%B0%D1%80%D1%80%D0%B8%29&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9A%D0%B0%D1%80%D1%80%D0%B8-%D1%80%D0%B0%D0%B9%D1%81%20%28%D1%8F%D0%BF%D0%BE%D0%BD%D1%81%D0%BA%D0%BE%D0%B5%20%D0%BA%D0%B0%D1%80%D1%80%D0%B8%29"
    ]
  },
  {
    name: "Кацудон",
    category: "японская",
    tags: ["дон", "рис", "тонкацу", "яйцо"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9A%D0%B0%D1%86%D1%83%D0%B4%D0%BE%D0%BD&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9A%D0%B0%D1%86%D1%83%D0%B4%D0%BE%D0%BD"
    ]
  },
  {
    name: "Оякодон",
    category: "японская",
    tags: ["дон", "рис", "курица", "яйцо"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9E%D1%8F%D0%BA%D0%BE%D0%B4%D0%BE%D0%BD&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9E%D1%8F%D0%BA%D0%BE%D0%B4%D0%BE%D0%BD"
    ]
  },
  {
    name: "Унаги кабаяки",
    category: "японская",
    tags: ["рыба", "угорь", "соус кабаяки", "рис"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A3%D0%BD%D0%B0%D0%B3%D0%B8%20%D0%BA%D0%B0%D0%B1%D0%B0%D1%8F%D0%BA%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A3%D0%BD%D0%B0%D0%B3%D0%B8%20%D0%BA%D0%B0%D0%B1%D0%B0%D1%8F%D0%BA%D0%B8"
    ]
  },
  {
    name: "Караагэ",
    category: "японская",
    tags: ["фритюр", "курица", "соевый маринад", "имбирь"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9A%D0%B0%D1%80%D0%B0%D0%B0%D0%B3%D1%8D&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9A%D0%B0%D1%80%D0%B0%D0%B0%D0%B3%D1%8D"
    ]
  },
  {
    name: "Тамагояки (яичный омлет)",
    category: "японская",
    tags: ["закуска", "яйцо", "сладко-солёное", "ролл-омлет"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A2%D0%B0%D0%BC%D0%B0%D0%B3%D0%BE%D1%8F%D0%BA%D0%B8%20%28%D1%8F%D0%B8%D1%87%D0%BD%D1%8B%D0%B9%20%D0%BE%D0%BC%D0%BB%D0%B5%D1%82%29&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A2%D0%B0%D0%BC%D0%B0%D0%B3%D0%BE%D1%8F%D0%BA%D0%B8%20%28%D1%8F%D0%B8%D1%87%D0%BD%D1%8B%D0%B9%20%D0%BE%D0%BC%D0%BB%D0%B5%D1%82%29"
    ]
  },
  {
    name: "Тяуанмуши",
    category: "японская",
    tags: ["закуска", "яичный заварной", "даши", "грибы"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A2%D1%8F%D1%83%D0%B0%D0%BD%D0%BC%D1%83%D1%88%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A2%D1%8F%D1%83%D0%B0%D0%BD%D0%BC%D1%83%D1%88%D0%B8"
    ]
  },
  {
    name: "Натто",
    category: "японская",
    tags: ["закуска", "ферментированные соевые бобы", "рис", "соус"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9D%D0%B0%D1%82%D1%82%D0%BE&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9D%D0%B0%D1%82%D1%82%D0%BE"
    ]
  },
  {
    name: "Моти",
    category: "японская",
    tags: ["десерт", "клейкий рис", "сладкая начинка", "текстура"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9C%D0%BE%D1%82%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9C%D0%BE%D1%82%D0%B8"
    ]
  },
  {
    name: "Данго",
    category: "японская",
    tags: ["десерт", "рисовая мука", "шпажки", "соус"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%94%D0%B0%D0%BD%D0%B3%D0%BE&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%94%D0%B0%D0%BD%D0%B3%D0%BE"
    ]
  },
  {
    name: "Пицца Маргарита",
    category: "итальянская",
    tags: ["пицца", "тесто", "моцарелла", "томат", "сыр", "пшеничное"],
    photos: [
      "https://images.unsplash.com/photo-1548365328-9f547f9ecda7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Пицца Пепперони",
    category: "итальянская",
    tags: ["пицца", "пепперони", "сыр", "томат"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9F%D0%B8%D1%86%D1%86%D0%B0%20%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9F%D0%B8%D1%86%D1%86%D0%B0%20%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8"
    ]
  },
  {
    name: "Лазанья",
    category: "итальянская",
    tags: ["паста", "фарш", "томатный соус", "сыр", "томат", "мясо"],
    photos: [
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Паста карбонара",
    category: "итальянская",
    tags: ["паста", "бекон/гуанчиале", "яйцо", "пармезан", "сливочное", "бекон", "сыр"],
    photos: [
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Паста болоньезе",
    category: "итальянская",
    tags: ["паста", "мясной соус", "томат", "лук"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9F%D0%B0%D1%81%D1%82%D0%B0%20%D0%B1%D0%BE%D0%BB%D0%BE%D0%BD%D1%8C%D0%B5%D0%B7%D0%B5&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9F%D0%B0%D1%81%D1%82%D0%B0%20%D0%B1%D0%BE%D0%BB%D0%BE%D0%BD%D1%8C%D0%B5%D0%B7%D0%B5"
    ]
  },
  {
    name: "Ризотто",
    category: "итальянская",
    tags: ["рис", "бульон", "пармезан", "сливочное масло", "сливочное", "сыр"],
    photos: [
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Ньокки",
    category: "итальянская",
    tags: ["клёцки", "картофель", "мука", "соус"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9D%D1%8C%D0%BE%D0%BA%D0%BA%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9D%D1%8C%D0%BE%D0%BA%D0%BA%D0%B8"
    ]
  },
  {
    name: "Паста песто",
    category: "итальянская",
    tags: ["паста", "базилик", "кедровые орехи", "пармезан"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9F%D0%B0%D1%81%D1%82%D0%B0%20%D0%BF%D0%B5%D1%81%D1%82%D0%BE&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9F%D0%B0%D1%81%D1%82%D0%B0%20%D0%BF%D0%B5%D1%81%D1%82%D0%BE"
    ]
  },
  {
    name: "Минестроне",
    category: "итальянская",
    tags: ["суп", "овощи", "бобовые", "паста"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9C%D0%B8%D0%BD%D0%B5%D1%81%D1%82%D1%80%D0%BE%D0%BD%D0%B5&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9C%D0%B8%D0%BD%D0%B5%D1%81%D1%82%D1%80%D0%BE%D0%BD%D0%B5"
    ]
  },
  {
    name: "Тирамису",
    category: "итальянская",
    tags: ["десерт", "маскарпоне", "кофе", "савоярди"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A2%D0%B8%D1%80%D0%B0%D0%BC%D0%B8%D1%81%D1%83&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A2%D0%B8%D1%80%D0%B0%D0%BC%D0%B8%D1%81%D1%83"
    ]
  },
  {
    name: "Джелато",
    category: "итальянская",
    tags: ["десерт", "молоко", "сливки", "заморозка"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%94%D0%B6%D0%B5%D0%BB%D0%B0%D1%82%D0%BE&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%94%D0%B6%D0%B5%D0%BB%D0%B0%D1%82%D0%BE"
    ]
  },
  {
    name: "Фокачча",
    category: "итальянская",
    tags: ["выпечка", "дрожжевое тесто", "оливковое масло", "розмарин"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A4%D0%BE%D0%BA%D0%B0%D1%87%D1%87%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A4%D0%BE%D0%BA%D0%B0%D1%87%D1%87%D0%B0"
    ]
  },
  {
    name: "Паэлья",
    category: "испанская",
    tags: ["рис", "шафран", "морепродукты/курица", "овощи", "морепродукты"],
    photos: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Тортилья де пататас",
    category: "испанская",
    tags: ["омлет", "картофель", "яйца", "лук"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A2%D0%BE%D1%80%D1%82%D0%B8%D0%BB%D1%8C%D1%8F%20%D0%B4%D0%B5%20%D0%BF%D0%B0%D1%82%D0%B0%D1%82%D0%B0%D1%81&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A2%D0%BE%D1%80%D1%82%D0%B8%D0%BB%D1%8C%D1%8F%20%D0%B4%D0%B5%20%D0%BF%D0%B0%D1%82%D0%B0%D1%82%D0%B0%D1%81"
    ]
  },
  {
    name: "Гаспачо",
    category: "испанская",
    tags: ["холодный суп", "томаты", "огурец", "перец"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%93%D0%B0%D1%81%D0%BF%D0%B0%D1%87%D0%BE&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%93%D0%B0%D1%81%D0%BF%D0%B0%D1%87%D0%BE"
    ]
  },
  {
    name: "Крокеты",
    category: "испанская",
    tags: ["закуска", "бешамель", "панировка", "жарка"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9A%D1%80%D0%BE%D0%BA%D0%B5%D1%82%D1%8B&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9A%D1%80%D0%BE%D0%BA%D0%B5%D1%82%D1%8B"
    ]
  },
  {
    name: "Пататас бравас",
    category: "испанская",
    tags: ["закуска", "картофель", "острый соус", "жарка"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9F%D0%B0%D1%82%D0%B0%D1%82%D0%B0%D1%81%20%D0%B1%D1%80%D0%B0%D0%B2%D0%B0%D1%81&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9F%D0%B0%D1%82%D0%B0%D1%82%D0%B0%D1%81%20%D0%B1%D1%80%D0%B0%D0%B2%D0%B0%D1%81"
    ]
  },
  {
    name: "Бакальяу (солёная треска)",
    category: "португальская",
    tags: ["рыба", "треска", "соль", "оливковое масло"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D1%8C%D1%8F%D1%83%20%28%D1%81%D0%BE%D0%BB%D1%91%D0%BD%D0%B0%D1%8F%20%D1%82%D1%80%D0%B5%D1%81%D0%BA%D0%B0%29&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D1%8C%D1%8F%D1%83%20%28%D1%81%D0%BE%D0%BB%D1%91%D0%BD%D0%B0%D1%8F%20%D1%82%D1%80%D0%B5%D1%81%D0%BA%D0%B0%29"
    ]
  },
  {
    name: "Пастель де ната",
    category: "португальская",
    tags: ["десерт", "слоёное тесто", "яичный крем", "корица"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9F%D0%B0%D1%81%D1%82%D0%B5%D0%BB%D1%8C%20%D0%B4%D0%B5%20%D0%BD%D0%B0%D1%82%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9F%D0%B0%D1%81%D1%82%D0%B5%D0%BB%D1%8C%20%D0%B4%D0%B5%20%D0%BD%D0%B0%D1%82%D0%B0"
    ]
  },
  {
    name: "Круассан",
    category: "французская",
    tags: ["выпечка", "слоёное тесто", "масло", "хрустящее", "слойка", "тесто"],
    photos: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Киш лорен",
    category: "французская",
    tags: ["пирог", "яйца", "сливки", "бекон"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9A%D0%B8%D1%88%20%D0%BB%D0%BE%D1%80%D0%B5%D0%BD&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9A%D0%B8%D1%88%20%D0%BB%D0%BE%D1%80%D0%B5%D0%BD"
    ]
  },
  {
    name: "Рататуй",
    category: "французская",
    tags: ["овощи", "баклажан", "кабачок", "томат", "тушеное", "томаты"],
    photos: [
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Буйабес",
    category: "французская",
    tags: ["суп", "рыба", "морепродукты", "шафран"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%91%D1%83%D0%B9%D0%B0%D0%B1%D0%B5%D1%81&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%91%D1%83%D0%B9%D0%B0%D0%B1%D0%B5%D1%81"
    ]
  },
  {
    name: "Бёф бургиньон",
    category: "французская",
    tags: ["тушение", "говядина", "красное вино", "грибы"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%91%D1%91%D1%84%20%D0%B1%D1%83%D1%80%D0%B3%D0%B8%D0%BD%D1%8C%D0%BE%D0%BD&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%91%D1%91%D1%84%20%D0%B1%D1%83%D1%80%D0%B3%D0%B8%D0%BD%D1%8C%D0%BE%D0%BD"
    ]
  },
  {
    name: "Кок-о-ван",
    category: "французская",
    tags: ["тушение", "курица", "вино", "грибы"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9A%D0%BE%D0%BA-%D0%BE-%D0%B2%D0%B0%D0%BD&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9A%D0%BE%D0%BA-%D0%BE-%D0%B2%D0%B0%D0%BD"
    ]
  },
  {
    name: "Французский луковый суп",
    category: "французская",
    tags: ["суп", "лук", "бульон", "сыр"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D1%83%D0%B7%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BB%D1%83%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9%20%D1%81%D1%83%D0%BF&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D1%83%D0%B7%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BB%D1%83%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9%20%D1%81%D1%83%D0%BF"
    ]
  },
  {
    name: "Крем-брюле",
    category: "французская",
    tags: ["десерт", "сливки", "ваниль", "карамель"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9A%D1%80%D0%B5%D0%BC-%D0%B1%D1%80%D1%8E%D0%BB%D0%B5&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9A%D1%80%D0%B5%D0%BC-%D0%B1%D1%80%D1%8E%D0%BB%D0%B5"
    ]
  },
  {
    name: "Крепы (блинчики)",
    category: "французская",
    tags: ["выпечка", "мука", "молоко", "тонкие"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9A%D1%80%D0%B5%D0%BF%D1%8B%20%28%D0%B1%D0%BB%D0%B8%D0%BD%D1%87%D0%B8%D0%BA%D0%B8%29&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9A%D1%80%D0%B5%D0%BF%D1%8B%20%28%D0%B1%D0%BB%D0%B8%D0%BD%D1%87%D0%B8%D0%BA%D0%B8%29"
    ]
  },
  {
    name: "Макаронс",
    category: "французская",
    tags: ["десерт", "миндальная мука", "меренга", "крем"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9C%D0%B0%D0%BA%D0%B0%D1%80%D0%BE%D0%BD%D1%81&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9C%D0%B0%D0%BA%D0%B0%D1%80%D0%BE%D0%BD%D1%81"
    ]
  },
  {
    name: "Шницель",
    category: "немецкая/австрийская",
    tags: ["основное", "мясо", "панировка", "жарка"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A8%D0%BD%D0%B8%D1%86%D0%B5%D0%BB%D1%8C&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A8%D0%BD%D0%B8%D1%86%D0%B5%D0%BB%D1%8C"
    ]
  },
  {
    name: "Братвурст",
    category: "немецкая/австрийская",
    tags: ["колбаски", "свинина", "специи", "гриль"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%91%D1%80%D0%B0%D1%82%D0%B2%D1%83%D1%80%D1%81%D1%82&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%91%D1%80%D0%B0%D1%82%D0%B2%D1%83%D1%80%D1%81%D1%82"
    ]
  },
  {
    name: "Гуляш",
    category: "венгерская",
    tags: ["рагу", "говядина", "паприка", "лук"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%93%D1%83%D0%BB%D1%8F%D1%88&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%93%D1%83%D0%BB%D1%8F%D1%88"
    ]
  },
  {
    name: "Вареники с картофелем (вост.-европ.)",
    category: "международная",
    tags: ["основное", "тесто", "картофель", "сметана"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%92%D0%B0%D1%80%D0%B5%D0%BD%D0%B8%D0%BA%D0%B8%20%D1%81%20%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D1%84%D0%B5%D0%BB%D0%B5%D0%BC%20%28%D0%B2%D0%BE%D1%81%D1%82.-%D0%B5%D0%B2%D1%80%D0%BE%D0%BF.%29&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%92%D0%B0%D1%80%D0%B5%D0%BD%D0%B8%D0%BA%D0%B8%20%D1%81%20%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D1%84%D0%B5%D0%BB%D0%B5%D0%BC%20%28%D0%B2%D0%BE%D1%81%D1%82.-%D0%B5%D0%B2%D1%80%D0%BE%D0%BF.%29"
    ]
  },
  {
    name: "Фиш-энд-чипс",
    category: "британская",
    tags: ["фастфуд", "рыба", "картофель фри", "кляр"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A4%D0%B8%D1%88-%D1%8D%D0%BD%D0%B4-%D1%87%D0%B8%D0%BF%D1%81&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A4%D0%B8%D1%88-%D1%8D%D0%BD%D0%B4-%D1%87%D0%B8%D0%BF%D1%81"
    ]
  },
  {
    name: "Пастуший пирог",
    category: "британская",
    tags: ["запеканка", "фарш", "картофельное пюре", "соус"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9F%D0%B0%D1%81%D1%82%D1%83%D1%88%D0%B8%D0%B9%20%D0%BF%D0%B8%D1%80%D0%BE%D0%B3&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9F%D0%B0%D1%81%D1%82%D1%83%D1%88%D0%B8%D0%B9%20%D0%BF%D0%B8%D1%80%D0%BE%D0%B3"
    ]
  },
  {
    name: "Ростбиф",
    category: "британская",
    tags: ["мясо", "говядина", "запекание", "соус"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A0%D0%BE%D1%81%D1%82%D0%B1%D0%B8%D1%84&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A0%D0%BE%D1%81%D1%82%D0%B1%D0%B8%D1%84"
    ]
  },
  {
    name: "Йоркширский пудинг",
    category: "британская",
    tags: ["выпечка", "тесто", "яйца", "к мясу"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%99%D0%BE%D1%80%D0%BA%D1%88%D0%B8%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%83%D0%B4%D0%B8%D0%BD%D0%B3&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%99%D0%BE%D1%80%D0%BA%D1%88%D0%B8%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%83%D0%B4%D0%B8%D0%BD%D0%B3"
    ]
  },
  {
    name: "Ирландское рагу",
    category: "ирландская",
    tags: ["рагу", "баранина", "картофель", "морковь"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%98%D1%80%D0%BB%D0%B0%D0%BD%D0%B4%D1%81%D0%BA%D0%BE%D0%B5%20%D1%80%D0%B0%D0%B3%D1%83&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%98%D1%80%D0%BB%D0%B0%D0%BD%D0%B4%D1%81%D0%BA%D0%BE%D0%B5%20%D1%80%D0%B0%D0%B3%D1%83"
    ]
  },
  {
    name: "Бургер",
    category: "американская",
    tags: ["фастфуд", "котлета", "булочка", "соус", "говядина", "булка", "сыр"],
    photos: [
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Хот-дог",
    category: "американская",
    tags: ["фастфуд", "сосиска", "булочка", "горчица/кетчуп"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A5%D0%BE%D1%82-%D0%B4%D0%BE%D0%B3&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A5%D0%BE%D1%82-%D0%B4%D0%BE%D0%B3"
    ]
  },
  {
    name: "Жареная курица",
    category: "американская",
    tags: ["фритюр", "курица", "панировка", "специи"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%96%D0%B0%D1%80%D0%B5%D0%BD%D0%B0%D1%8F%20%D0%BA%D1%83%D1%80%D0%B8%D1%86%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%96%D0%B0%D1%80%D0%B5%D0%BD%D0%B0%D1%8F%20%D0%BA%D1%83%D1%80%D0%B8%D1%86%D0%B0"
    ]
  },
  {
    name: "Барбекю-ребрышки",
    category: "американская",
    tags: ["барбекю", "свиные ребра", "соус", "гриль"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%91%D0%B0%D1%80%D0%B1%D0%B5%D0%BA%D1%8E-%D1%80%D0%B5%D0%B1%D1%80%D1%8B%D1%88%D0%BA%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%91%D0%B0%D1%80%D0%B1%D0%B5%D0%BA%D1%8E-%D1%80%D0%B5%D0%B1%D1%80%D1%8B%D1%88%D0%BA%D0%B8"
    ]
  },
  {
    name: "Крылышки Баффало",
    category: "американская",
    tags: ["закуска", "куриные крылышки", "острый соус", "фритюр"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9A%D1%80%D1%8B%D0%BB%D1%8B%D1%88%D0%BA%D0%B8%20%D0%91%D0%B0%D1%84%D1%84%D0%B0%D0%BB%D0%BE&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9A%D1%80%D1%8B%D0%BB%D1%8B%D1%88%D0%BA%D0%B8%20%D0%91%D0%B0%D1%84%D1%84%D0%B0%D0%BB%D0%BE"
    ]
  },
  {
    name: "Мак-н-чиз",
    category: "американская",
    tags: ["паста", "сырный соус", "молоко", "запекание"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9C%D0%B0%D0%BA-%D0%BD-%D1%87%D0%B8%D0%B7&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9C%D0%B0%D0%BA-%D0%BD-%D1%87%D0%B8%D0%B7"
    ]
  },
  {
    name: "Клэм-чаудер",
    category: "американская",
    tags: ["суп", "молоко/сливки", "моллюски", "картофель"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9A%D0%BB%D1%8D%D0%BC-%D1%87%D0%B0%D1%83%D0%B4%D0%B5%D1%80&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9A%D0%BB%D1%8D%D0%BC-%D1%87%D0%B0%D1%83%D0%B4%D0%B5%D1%80"
    ]
  },
  {
    name: "Панкейки",
    category: "американская",
    tags: ["завтрак", "мука", "молоко", "сироп"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9F%D0%B0%D0%BD%D0%BA%D0%B5%D0%B9%D0%BA%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9F%D0%B0%D0%BD%D0%BA%D0%B5%D0%B9%D0%BA%D0%B8"
    ]
  },
  {
    name: "Чизкейк",
    category: "американская",
    tags: ["десерт", "сливочный сыр", "печенье", "выпечка"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A7%D0%B8%D0%B7%D0%BA%D0%B5%D0%B9%D0%BA&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A7%D0%B8%D0%B7%D0%BA%D0%B5%D0%B9%D0%BA"
    ]
  },
  {
    name: "Яблочный пирог",
    category: "американская",
    tags: ["десерт", "яблоки", "тесто", "корица"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%AF%D0%B1%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D0%B9%20%D0%BF%D0%B8%D1%80%D0%BE%D0%B3&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%AF%D0%B1%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D0%B9%20%D0%BF%D0%B8%D1%80%D0%BE%D0%B3"
    ]
  },
  {
    name: "Путин (Канада)",
    category: "канадская",
    tags: ["фастфуд", "картофель фри", "сыр", "подливка"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9F%D1%83%D1%82%D0%B8%D0%BD%20%28%D0%9A%D0%B0%D0%BD%D0%B0%D0%B4%D0%B0%29&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9F%D1%83%D1%82%D0%B8%D0%BD%20%28%D0%9A%D0%B0%D0%BD%D0%B0%D0%B4%D0%B0%29"
    ]
  },
  {
    name: "Тако",
    category: "мексиканская",
    tags: ["уличная еда", "тортилья", "начинка", "сальса"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A2%D0%B0%D0%BA%D0%BE&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A2%D0%B0%D0%BA%D0%BE"
    ]
  },
  {
    name: "Буррито",
    category: "мексиканская",
    tags: ["уличная еда", "тортилья", "рис/бобы", "мясо", "острое", "фасоль", "сыр"],
    photos: [
      "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Кесадилья",
    category: "мексиканская",
    tags: ["закуска", "тортилья", "сыр", "жарка"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9A%D0%B5%D1%81%D0%B0%D0%B4%D0%B8%D0%BB%D1%8C%D1%8F&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9A%D0%B5%D1%81%D0%B0%D0%B4%D0%B8%D0%BB%D1%8C%D1%8F"
    ]
  },
  {
    name: "Энчилада",
    category: "мексиканская",
    tags: ["основное", "тортилья", "соус", "запекание"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%AD%D0%BD%D1%87%D0%B8%D0%BB%D0%B0%D0%B4%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%AD%D0%BD%D1%87%D0%B8%D0%BB%D0%B0%D0%B4%D0%B0"
    ]
  },
  {
    name: "Гуакамоле",
    category: "мексиканская",
    tags: ["соус", "авокадо", "лайм", "кинза", "свежее", "кремовое"],
    photos: [
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Начос",
    category: "мексиканская",
    tags: ["закуска", "чипсы", "сыр", "сальса"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9D%D0%B0%D1%87%D0%BE%D1%81&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9D%D0%B0%D1%87%D0%BE%D1%81"
    ]
  },
  {
    name: "Тамалес",
    category: "мексиканская",
    tags: ["основное", "кукурузное тесто", "начинка", "листья"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A2%D0%B0%D0%BC%D0%B0%D0%BB%D0%B5%D1%81&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A2%D0%B0%D0%BC%D0%B0%D0%BB%D0%B5%D1%81"
    ]
  },
  {
    name: "Позоле",
    category: "мексиканская",
    tags: ["суп", "кукуруза", "свинина/курица", "чили"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9F%D0%BE%D0%B7%D0%BE%D0%BB%D0%B5&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9F%D0%BE%D0%B7%D0%BE%D0%BB%D0%B5"
    ]
  },
  {
    name: "Чили кон карне",
    category: "техасско-мексиканская",
    tags: ["рагу", "говядина", "фасоль", "чили"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A7%D0%B8%D0%BB%D0%B8%20%D0%BA%D0%BE%D0%BD%20%D0%BA%D0%B0%D1%80%D0%BD%D0%B5&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A7%D0%B8%D0%BB%D0%B8%20%D0%BA%D0%BE%D0%BD%20%D0%BA%D0%B0%D1%80%D0%BD%D0%B5"
    ]
  },
  {
    name: "Севиче",
    category: "перуанская",
    tags: ["закуска", "рыба", "лайм", "лук", "кислое", "цитрус"],
    photos: [
      "https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Арепас",
    category: "венесуэльская/колумбийская",
    tags: ["лепёшки", "кукурузная мука", "начинка", "жарка"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%90%D1%80%D0%B5%D0%BF%D0%B0%D1%81&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%90%D1%80%D0%B5%D0%BF%D0%B0%D1%81"
    ]
  },
  {
    name: "Эмпанадас",
    category: "латиноамериканская",
    tags: ["выпечка", "тесто", "начинка", "печь/жарка"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%AD%D0%BC%D0%BF%D0%B0%D0%BD%D0%B0%D0%B4%D0%B0%D1%81&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%AD%D0%BC%D0%BF%D0%B0%D0%BD%D0%B0%D0%B4%D0%B0%D1%81"
    ]
  },
  {
    name: "Фейжоада",
    category: "бразильская",
    tags: ["рагу", "чёрная фасоль", "свинина", "рис"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A4%D0%B5%D0%B9%D0%B6%D0%BE%D0%B0%D0%B4%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A4%D0%B5%D0%B9%D0%B6%D0%BE%D0%B0%D0%B4%D0%B0"
    ]
  },
  {
    name: "Чурраско",
    category: "южноамериканская",
    tags: ["гриль", "говядина", "крупная соль", "огонь"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A7%D1%83%D1%80%D1%80%D0%B0%D1%81%D0%BA%D0%BE&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A7%D1%83%D1%80%D1%80%D0%B0%D1%81%D0%BA%D0%BE"
    ]
  },
  {
    name: "Асаду (Аргентина)",
    category: "аргентинская",
    tags: ["гриль", "говядина", "дым", "соусы"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%90%D1%81%D0%B0%D0%B4%D1%83%20%28%D0%90%D1%80%D0%B3%D0%B5%D0%BD%D1%82%D0%B8%D0%BD%D0%B0%29&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%90%D1%81%D0%B0%D0%B4%D1%83%20%28%D0%90%D1%80%D0%B3%D0%B5%D0%BD%D1%82%D0%B8%D0%BD%D0%B0%29"
    ]
  },
  {
    name: "Димсам",
    category: "китайская",
    tags: ["закуски", "пар", "пельмени", "соусы"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%94%D0%B8%D0%BC%D1%81%D0%B0%D0%BC&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%94%D0%B8%D0%BC%D1%81%D0%B0%D0%BC"
    ]
  },
  {
    name: "Пекинская утка",
    category: "китайская",
    tags: ["основное", "утка", "хрустящая кожа", "лепёшки"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9F%D0%B5%D0%BA%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D1%83%D1%82%D0%BA%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9F%D0%B5%D0%BA%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D1%83%D1%82%D0%BA%D0%B0"
    ]
  },
  {
    name: "Сяолунбао",
    category: "китайская",
    tags: ["пельмени", "бульон внутри", "тесто", "свинина"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A1%D1%8F%D0%BE%D0%BB%D1%83%D0%BD%D0%B1%D0%B0%D0%BE&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A1%D1%8F%D0%BE%D0%BB%D1%83%D0%BD%D0%B1%D0%B0%D0%BE"
    ]
  },
  {
    name: "Жареный рис",
    category: "китайская",
    tags: ["рис", "овощи", "яйцо", "соевый соус"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%96%D0%B0%D1%80%D0%B5%D0%BD%D1%8B%D0%B9%20%D1%80%D0%B8%D1%81&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%96%D0%B0%D1%80%D0%B5%D0%BD%D1%8B%D0%B9%20%D1%80%D0%B8%D1%81"
    ]
  },
  {
    name: "Чоу мейн",
    category: "китайская",
    tags: ["лапша", "жарка", "овощи", "соевый соус"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A7%D0%BE%D1%83%20%D0%BC%D0%B5%D0%B9%D0%BD&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A7%D0%BE%D1%83%20%D0%BC%D0%B5%D0%B9%D0%BD"
    ]
  },
  {
    name: "Кунг-пао курица",
    category: "китайская",
    tags: ["основное", "курица", "арахис", "остро-сладкое"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9A%D1%83%D0%BD%D0%B3-%D0%BF%D0%B0%D0%BE%20%D0%BA%D1%83%D1%80%D0%B8%D1%86%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9A%D1%83%D0%BD%D0%B3-%D0%BF%D0%B0%D0%BE%20%D0%BA%D1%83%D1%80%D0%B8%D1%86%D0%B0"
    ]
  },
  {
    name: "Ма-по тофу",
    category: "китайская",
    tags: ["основное", "тофу", "острое", "сычуань"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9C%D0%B0-%D0%BF%D0%BE%20%D1%82%D0%BE%D1%84%D1%83&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9C%D0%B0-%D0%BF%D0%BE%20%D1%82%D0%BE%D1%84%D1%83"
    ]
  },
  {
    name: "Хот-пот",
    category: "китайская",
    tags: ["хот-пот", "бульон", "мясо/овощи", "варка"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A5%D0%BE%D1%82-%D0%BF%D0%BE%D1%82&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A5%D0%BE%D1%82-%D0%BF%D0%BE%D1%82"
    ]
  },
  {
    name: "Сладко-кислая свинина",
    category: "китайская",
    tags: ["основное", "свинина", "кисло-сладкий соус", "ананас"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A1%D0%BB%D0%B0%D0%B4%D0%BA%D0%BE-%D0%BA%D0%B8%D1%81%D0%BB%D0%B0%D1%8F%20%D1%81%D0%B2%D0%B8%D0%BD%D0%B8%D0%BD%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A1%D0%BB%D0%B0%D0%B4%D0%BA%D0%BE-%D0%BA%D0%B8%D1%81%D0%BB%D0%B0%D1%8F%20%D1%81%D0%B2%D0%B8%D0%BD%D0%B8%D0%BD%D0%B0"
    ]
  },
  {
    name: "Спринг-роллы",
    category: "китайская",
    tags: ["закуска", "рисовая бумага", "овощи", "соус"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A1%D0%BF%D1%80%D0%B8%D0%BD%D0%B3-%D1%80%D0%BE%D0%BB%D0%BB%D1%8B&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A1%D0%BF%D1%80%D0%B8%D0%BD%D0%B3-%D1%80%D0%BE%D0%BB%D0%BB%D1%8B"
    ]
  },
  {
    name: "Фо бо",
    category: "вьетнамская",
    tags: ["суп", "говяжий бульон", "рисовая лапша", "зелень", "бульон", "говядина"],
    photos: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Бань ми",
    category: "вьетнамская",
    tags: ["сэндвич", "багет", "мясо/паштет", "овощи"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%91%D0%B0%D0%BD%D1%8C%20%D0%BC%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%91%D0%B0%D0%BD%D1%8C%20%D0%BC%D0%B8"
    ]
  },
  {
    name: "Бун ча",
    category: "вьетнамская",
    tags: ["лапша", "свинина на гриле", "рисовая лапша", "соус"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%91%D1%83%D0%BD%20%D1%87%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%91%D1%83%D0%BD%20%D1%87%D0%B0"
    ]
  },
  {
    name: "Пад тай",
    category: "тайская",
    tags: ["лапша", "рисовая лапша", "тамаринд", "арахис", "кисло-сладкое"],
    photos: [
      "https://images.unsplash.com/photo-1603079841036-2297f9a9e1bb?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Том ям",
    category: "тайская",
    tags: ["суп", "креветки", "лемонграсс", "лайм", "острое", "кислое"],
    photos: [
      "https://images.unsplash.com/photo-1604908176997-431c495da9b2?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Зелёное карри",
    category: "тайская",
    tags: ["карри", "кокосовое молоко", "зелёная паста", "курица"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%97%D0%B5%D0%BB%D1%91%D0%BD%D0%BE%D0%B5%20%D0%BA%D0%B0%D1%80%D1%80%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%97%D0%B5%D0%BB%D1%91%D0%BD%D0%BE%D0%B5%20%D0%BA%D0%B0%D1%80%D1%80%D0%B8"
    ]
  },
  {
    name: "Сом там",
    category: "тайская",
    tags: ["салат", "папайя", "лайм", "чили"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A1%D0%BE%D0%BC%20%D1%82%D0%B0%D0%BC&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A1%D0%BE%D0%BC%20%D1%82%D0%B0%D0%BC"
    ]
  },
  {
    name: "Манго с липким рисом",
    category: "тайская",
    tags: ["десерт", "манго", "клейкий рис", "кокосовое молоко"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9C%D0%B0%D0%BD%D0%B3%D0%BE%20%D1%81%20%D0%BB%D0%B8%D0%BF%D0%BA%D0%B8%D0%BC%20%D1%80%D0%B8%D1%81%D0%BE%D0%BC&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9C%D0%B0%D0%BD%D0%B3%D0%BE%20%D1%81%20%D0%BB%D0%B8%D0%BF%D0%BA%D0%B8%D0%BC%20%D1%80%D0%B8%D1%81%D0%BE%D0%BC"
    ]
  },
  {
    name: "Лакса",
    category: "малайзийская/сингапурская",
    tags: ["суп-лапша", "кокос", "карри", "морепродукты"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9B%D0%B0%D0%BA%D1%81%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9B%D0%B0%D0%BA%D1%81%D0%B0"
    ]
  },
  {
    name: "Хайнаньская курица с рисом",
    category: "сингапурская/китайская",
    tags: ["основное", "курица", "рис", "имбирь"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A5%D0%B0%D0%B9%D0%BD%D0%B0%D0%BD%D1%8C%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BA%D1%83%D1%80%D0%B8%D1%86%D0%B0%20%D1%81%20%D1%80%D0%B8%D1%81%D0%BE%D0%BC&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A5%D0%B0%D0%B9%D0%BD%D0%B0%D0%BD%D1%8C%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BA%D1%83%D1%80%D0%B8%D1%86%D0%B0%20%D1%81%20%D1%80%D0%B8%D1%81%D0%BE%D0%BC"
    ]
  },
  {
    name: "Чили-краб",
    category: "сингапурская",
    tags: ["морепродукты", "краб", "чили", "соус"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A7%D0%B8%D0%BB%D0%B8-%D0%BA%D1%80%D0%B0%D0%B1&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A7%D0%B8%D0%BB%D0%B8-%D0%BA%D1%80%D0%B0%D0%B1"
    ]
  },
  {
    name: "Наси лемак",
    category: "малайзийская",
    tags: ["основное", "рис", "кокосовое молоко", "самбал"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9D%D0%B0%D1%81%D0%B8%20%D0%BB%D0%B5%D0%BC%D0%B0%D0%BA&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9D%D0%B0%D1%81%D0%B8%20%D0%BB%D0%B5%D0%BC%D0%B0%D0%BA"
    ]
  },
  {
    name: "Наси горенг",
    category: "индонезийская",
    tags: ["жареный рис", "соевый соус", "яйцо", "специи"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9D%D0%B0%D1%81%D0%B8%20%D0%B3%D0%BE%D1%80%D0%B5%D0%BD%D0%B3&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9D%D0%B0%D1%81%D0%B8%20%D0%B3%D0%BE%D1%80%D0%B5%D0%BD%D0%B3"
    ]
  },
  {
    name: "Ми горенг",
    category: "индонезийская",
    tags: ["лапша", "жарка", "соус", "овощи"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9C%D0%B8%20%D0%B3%D0%BE%D1%80%D0%B5%D0%BD%D0%B3&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9C%D0%B8%20%D0%B3%D0%BE%D1%80%D0%B5%D0%BD%D0%B3"
    ]
  },
  {
    name: "Сатай",
    category: "юго-восточная азиатская",
    tags: ["гриль", "шашлычки", "арахисовый соус", "специи"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A1%D0%B0%D1%82%D0%B0%D0%B9&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A1%D0%B0%D1%82%D0%B0%D0%B9"
    ]
  },
  {
    name: "Ренданг",
    category: "индонезийская",
    tags: ["тушение", "говядина", "кокос", "специи"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A0%D0%B5%D0%BD%D0%B4%D0%B0%D0%BD%D0%B3&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A0%D0%B5%D0%BD%D0%B4%D0%B0%D0%BD%D0%B3"
    ]
  },
  {
    name: "Баттер чикен",
    category: "индийская",
    tags: ["карри", "курица", "сливочное масло", "томат"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%91%D0%B0%D1%82%D1%82%D0%B5%D1%80%20%D1%87%D0%B8%D0%BA%D0%B5%D0%BD&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%91%D0%B0%D1%82%D1%82%D0%B5%D1%80%20%D1%87%D0%B8%D0%BA%D0%B5%D0%BD"
    ]
  },
  {
    name: "Чикен тикка масала",
    category: "индийская",
    tags: ["карри", "курица", "томатный соус", "специи"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A7%D0%B8%D0%BA%D0%B5%D0%BD%20%D1%82%D0%B8%D0%BA%D0%BA%D0%B0%20%D0%BC%D0%B0%D1%81%D0%B0%D0%BB%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A7%D0%B8%D0%BA%D0%B5%D0%BD%20%D1%82%D0%B8%D0%BA%D0%BA%D0%B0%20%D0%BC%D0%B0%D1%81%D0%B0%D0%BB%D0%B0"
    ]
  },
  {
    name: "Бирьяни",
    category: "индийская",
    tags: ["рис", "специи", "мясо", "шафран"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%91%D0%B8%D1%80%D1%8C%D1%8F%D0%BD%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%91%D0%B8%D1%80%D1%8C%D1%8F%D0%BD%D0%B8"
    ]
  },
  {
    name: "Самоса",
    category: "индийская",
    tags: ["закуска", "тесто", "картофель/горох", "специи"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A1%D0%B0%D0%BC%D0%BE%D1%81%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A1%D0%B0%D0%BC%D0%BE%D1%81%D0%B0"
    ]
  },
  {
    name: "Доса",
    category: "индийская",
    tags: ["лепёшка", "рис+чечевица", "ферментация", "хрустящая"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%94%D0%BE%D1%81%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%94%D0%BE%D1%81%D0%B0"
    ]
  },
  {
    name: "Наан",
    category: "индийская",
    tags: ["хлеб", "мука", "печь", "дрожжи"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9D%D0%B0%D0%B0%D0%BD&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9D%D0%B0%D0%B0%D0%BD"
    ]
  },
  {
    name: "Дхал",
    category: "индийская",
    tags: ["бобовые", "чечевица", "специи", "тушение"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%94%D1%85%D0%B0%D0%BB&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%94%D1%85%D0%B0%D0%BB"
    ]
  },
  {
    name: "Чана масала",
    category: "индийская",
    tags: ["карри", "нут", "томат", "специи"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A7%D0%B0%D0%BD%D0%B0%20%D0%BC%D0%B0%D1%81%D0%B0%D0%BB%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A7%D0%B0%D0%BD%D0%B0%20%D0%BC%D0%B0%D1%81%D0%B0%D0%BB%D0%B0"
    ]
  },
  {
    name: "Палак панир",
    category: "индийская",
    tags: ["карри", "шпинат", "панир", "специи"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9F%D0%B0%D0%BB%D0%B0%D0%BA%20%D0%BF%D0%B0%D0%BD%D0%B8%D1%80&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9F%D0%B0%D0%BB%D0%B0%D0%BA%20%D0%BF%D0%B0%D0%BD%D0%B8%D1%80"
    ]
  },
  {
    name: "Курица тандури",
    category: "индийская",
    tags: ["гриль", "курица", "йогурт", "специи"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9A%D1%83%D1%80%D0%B8%D1%86%D0%B0%20%D1%82%D0%B0%D0%BD%D0%B4%D1%83%D1%80%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9A%D1%83%D1%80%D0%B8%D1%86%D0%B0%20%D1%82%D0%B0%D0%BD%D0%B4%D1%83%D1%80%D0%B8"
    ]
  },
  {
    name: "Шаурма",
    category: "ближневосточная",
    tags: ["уличная еда", "лаваш", "мясо", "соус"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A8%D0%B0%D1%83%D1%80%D0%BC%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A8%D0%B0%D1%83%D1%80%D0%BC%D0%B0"
    ]
  },
  {
    name: "Фалафель",
    category: "ближневосточная",
    tags: ["закуска", "нут", "фритюр", "специи", "хрустящее"],
    photos: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Хумус",
    category: "ближневосточная",
    tags: ["закуска", "нут", "тахини", "оливковое масло", "паста", "кремовое"],
    photos: [
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Табуле",
    category: "ближневосточная",
    tags: ["салат", "булгур", "петрушка", "лимон"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A2%D0%B0%D0%B1%D1%83%D0%BB%D0%B5&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A2%D0%B0%D0%B1%D1%83%D0%BB%D0%B5"
    ]
  },
  {
    name: "Баба-гануш",
    category: "ближневосточная",
    tags: ["закуска", "баклажан", "тахини", "чеснок"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%91%D0%B0%D0%B1%D0%B0-%D0%B3%D0%B0%D0%BD%D1%83%D1%88&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%91%D0%B0%D0%B1%D0%B0-%D0%B3%D0%B0%D0%BD%D1%83%D1%88"
    ]
  },
  {
    name: "Шакшука",
    category: "ближневосточная",
    tags: ["завтрак", "яйца", "томатный соус", "специи", "томат", "острое"],
    photos: [
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    name: "Кускус",
    category: "североафриканская",
    tags: ["гарнир", "кускус", "овощи", "специи"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9A%D1%83%D1%81%D0%BA%D1%83%D1%81&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9A%D1%83%D1%81%D0%BA%D1%83%D1%81"
    ]
  },
  {
    name: "Тажин",
    category: "североафриканская",
    tags: ["тушение", "мясо/овощи", "специи", "сухофрукты"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A2%D0%B0%D0%B6%D0%B8%D0%BD&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A2%D0%B0%D0%B6%D0%B8%D0%BD"
    ]
  },
  {
    name: "Фаттуш",
    category: "ближневосточная",
    tags: ["салат", "овощи", "пита", "сумах"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A4%D0%B0%D1%82%D1%82%D1%83%D1%88&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A4%D0%B0%D1%82%D1%82%D1%83%D1%88"
    ]
  },
  {
    name: "Хачапури",
    category: "грузинская",
    tags: ["выпечка", "сыр", "тесто", "яйцо"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A5%D0%B0%D1%87%D0%B0%D0%BF%D1%83%D1%80%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A5%D0%B0%D1%87%D0%B0%D0%BF%D1%83%D1%80%D0%B8"
    ]
  },
  {
    name: "Хинкали",
    category: "грузинская",
    tags: ["пельмени", "тесто", "фарш", "бульон"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A5%D0%B8%D0%BD%D0%BA%D0%B0%D0%BB%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A5%D0%B8%D0%BD%D0%BA%D0%B0%D0%BB%D0%B8"
    ]
  },
  {
    name: "Долма",
    category: "кавказская/турецкая",
    tags: ["закуска", "виноградные листья", "рис", "фарш"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%94%D0%BE%D0%BB%D0%BC%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%94%D0%BE%D0%BB%D0%BC%D0%B0"
    ]
  },
  {
    name: "Суп харчо",
    category: "грузинская/кавказская",
    tags: ["суп", "говядина", "ткемали", "рис"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A1%D1%83%D0%BF%20%D1%85%D0%B0%D1%80%D1%87%D0%BE&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A1%D1%83%D0%BF%20%D1%85%D0%B0%D1%80%D1%87%D0%BE"
    ]
  },
  {
    name: "Плов (узбекский)",
    category: "среднеазиатская",
    tags: ["рис", "мясо", "морковь", "специи"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9F%D0%BB%D0%BE%D0%B2%20%28%D1%83%D0%B7%D0%B1%D0%B5%D0%BA%D1%81%D0%BA%D0%B8%D0%B9%29&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9F%D0%BB%D0%BE%D0%B2%20%28%D1%83%D0%B7%D0%B1%D0%B5%D0%BA%D1%81%D0%BA%D0%B8%D0%B9%29"
    ]
  },
  {
    name: "Манты",
    category: "среднеазиатская",
    tags: ["пельмени", "тесто", "мясо", "пар"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9C%D0%B0%D0%BD%D1%82%D1%8B&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9C%D0%B0%D0%BD%D1%82%D1%8B"
    ]
  },
  {
    name: "Самса",
    category: "среднеазиатская",
    tags: ["выпечка", "слоёное тесто", "мясо", "лук"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A1%D0%B0%D0%BC%D1%81%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A1%D0%B0%D0%BC%D1%81%D0%B0"
    ]
  },
  {
    name: "Гирос",
    category: "греческая",
    tags: ["уличная еда", "пита", "мясо", "цацики"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%93%D0%B8%D1%80%D0%BE%D1%81&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%93%D0%B8%D1%80%D0%BE%D1%81"
    ]
  },
  {
    name: "Сувлаки",
    category: "греческая",
    tags: ["гриль", "шашлычки", "свинина/курица", "пита"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A1%D1%83%D0%B2%D0%BB%D0%B0%D0%BA%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A1%D1%83%D0%B2%D0%BB%D0%B0%D0%BA%D0%B8"
    ]
  },
  {
    name: "Мусака",
    category: "греческая",
    tags: ["запеканка", "баклажан", "фарш", "бешамель"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9C%D1%83%D1%81%D0%B0%D0%BA%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9C%D1%83%D1%81%D0%B0%D0%BA%D0%B0"
    ]
  },
  {
    name: "Цацики",
    category: "греческая",
    tags: ["соус", "йогурт", "огурец", "чеснок"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%A6%D0%B0%D1%86%D0%B8%D0%BA%D0%B8&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%A6%D0%B0%D1%86%D0%B8%D0%BA%D0%B8"
    ]
  },
  {
    name: "Баклава",
    category: "турецкая/восточная",
    tags: ["десерт", "фило", "орехи", "мёд"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%91%D0%B0%D0%BA%D0%BB%D0%B0%D0%B2%D0%B0&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%91%D0%B0%D0%BA%D0%BB%D0%B0%D0%B2%D0%B0"
    ]
  },
  {
    name: "Джоллоф-райс",
    category: "западноафриканская",
    tags: ["рис", "томат", "специи", "перец"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%94%D0%B6%D0%BE%D0%BB%D0%BB%D0%BE%D1%84-%D1%80%D0%B0%D0%B9%D1%81&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%94%D0%B6%D0%BE%D0%BB%D0%BB%D0%BE%D1%84-%D1%80%D0%B0%D0%B9%D1%81"
    ]
  },
  {
    name: "Мит-пай (Австралия/НЗ)",
    category: "австралийская/новозеландская",
    tags: ["пирог", "фарш", "тесто", "соус"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9C%D0%B8%D1%82-%D0%BF%D0%B0%D0%B9%20%28%D0%90%D0%B2%D1%81%D1%82%D1%80%D0%B0%D0%BB%D0%B8%D1%8F/%D0%9D%D0%97%29&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9C%D0%B8%D1%82-%D0%BF%D0%B0%D0%B9%20%28%D0%90%D0%B2%D1%81%D1%82%D1%80%D0%B0%D0%BB%D0%B8%D1%8F/%D0%9D%D0%97%29"
    ]
  },
  {
    name: "Павлова (десерт)",
    category: "австралийская/новозеландская",
    tags: ["десерт", "меренга", "сливки", "фрукты"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D0%B0%20%28%D0%B4%D0%B5%D1%81%D0%B5%D1%80%D1%82%29&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D0%B0%20%28%D0%B4%D0%B5%D1%81%D0%B5%D1%80%D1%82%29"
    ]
  },
  {
    name: "Донат",
    category: "американская",
    tags: ["десерт", "дрожжевое тесто", "жарка", "глазурь"],
    photos: [
      "https://commons.wikimedia.org/w/index.php?search=%D0%94%D0%BE%D0%BD%D0%B0%D1%82&title=Special:MediaSearch&type=image",
      "https://source.unsplash.com/900x600/?%D0%94%D0%BE%D0%BD%D0%B0%D1%82"
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
    name: "Куриное карри",
    category: "индийская",
    tags: ["острое", "соус", "курица"],
    photos: [
      "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?auto=format&fit=crop&w=900&q=80"
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
    name: "Поке",
    category: "гавайская",
    tags: ["рыба", "рис", "соевый соус"],
    photos: [
      "https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=900&q=80"
    ]
  }
];
