const foods = [
  {
    "name": "Nöt talg",
    "calories": 656,
    "protein": 71,
    "fat": 7,
    "carbs": 0
  },
  {
    "name": "Gris späck",
    "calories": 763,
    "protein": 85,
    "fat": 2.8,
    "carbs": 0
  },
  {
    "name": "Gris ister",
    "calories": 884,
    "protein": 100,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Kokosfett",
    "calories": 884,
    "protein": 100,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Matfettsblandning havssaltat fett 80% berikad typ Bregott",
    "calories": 712,
    "protein": 80,
    "fat": 0.5,
    "carbs": 0.5
  },
  {
    "name": "Matfettsblandning fett 60% berikad typ Bregott mellan",
    "calories": 534,
    "protein": 60,
    "fat": 0.4,
    "carbs": 0.5
  },
  {
    "name": "Flytande margarin fett 82% berikad typ Milda culinesse",
    "calories": 725,
    "protein": 82,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Hushållsmargarin fett 80% berikad typ Melba",
    "calories": 710,
    "protein": 80,
    "fat": 0.1,
    "carbs": 0.4
  },
  {
    "name": "Hushållsmargarin fett 80% berikad typ Milda",
    "calories": 712,
    "protein": 80,
    "fat": 0.5,
    "carbs": 0.5
  },
  {
    "name": "Lättmargarin fett 38% berikad typ Becel",
    "calories": 348,
    "protein": 38,
    "fat": 0,
    "carbs": 3
  },
  {
    "name": "Lättmargarin fett 40% berikad typ Lätt & lagom",
    "calories": 381,
    "protein": 40,
    "fat": 0.5,
    "carbs": 6.2
  },
  {
    "name": "Majonnäs fett 90% hemlagad",
    "calories": 782,
    "protein": 87.6,
    "fat": 1.5,
    "carbs": 0.4
  },
  {
    "name": "Sesamsås m. grädde",
    "calories": 361,
    "protein": 37.8,
    "fat": 2.3,
    "carbs": 3.9
  },
  {
    "name": "Gravlaxsås hovmästarsås hemlagad",
    "calories": 438,
    "protein": 42.4,
    "fat": 2.1,
    "carbs": 13.3
  },
  {
    "name": "Gravlaxsås kylvara",
    "calories": 555,
    "protein": 56,
    "fat": 1.6,
    "carbs": 13.1
  },
  {
    "name": "Remouladsås",
    "calories": 707,
    "protein": 78.7,
    "fat": 1.5,
    "carbs": 1.1
  },
  {
    "name": "Dressing vinägrett fett 45%",
    "calories": 406,
    "protein": 44.2,
    "fat": 0.7,
    "carbs": 2.9
  },
  {
    "name": "Smör fett 80%",
    "calories": 729,
    "protein": 82,
    "fat": 0.4,
    "carbs": 0.5
  },
  {
    "name": "Smör extrasaltat fett 80%",
    "calories": 728,
    "protein": 81.8,
    "fat": 0.6,
    "carbs": 0.5
  },
  {
    "name": "Smör osaltat fett 80%",
    "calories": 728,
    "protein": 81.8,
    "fat": 0.6,
    "carbs": 0.5
  },
  {
    "name": "Druvkärnolja",
    "calories": 884,
    "protein": 100,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Majsolja",
    "calories": 884,
    "protein": 100,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Olivolja",
    "calories": 884,
    "protein": 100,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Tistelolja",
    "calories": 884,
    "protein": 100,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Sesamolja",
    "calories": 884,
    "protein": 100,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Sojaolja",
    "calories": 884,
    "protein": 100,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Solrosolja",
    "calories": 884,
    "protein": 100,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Vetegroddsolja",
    "calories": 884,
    "protein": 100,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Dressing konserv. fett ca 25%",
    "calories": 262,
    "protein": 25,
    "fat": 0.5,
    "carbs": 9.7
  },
  {
    "name": "Dressing till sallad m. majonnäs fett ca 25% kylvara",
    "calories": 303,
    "protein": 25,
    "fat": 0.5,
    "carbs": 19.7
  },
  {
    "name": "Dressing fett 0%",
    "calories": 60,
    "protein": 0,
    "fat": 1.6,
    "carbs": 13.1
  },
  {
    "name": "Majonnäs fett 80%",
    "calories": 666,
    "protein": 72.4,
    "fat": 1.3,
    "carbs": 5
  },
  {
    "name": "Gurkmajonnäs gurksallad gatukök",
    "calories": 333,
    "protein": 32,
    "fat": 0.8,
    "carbs": 10.9
  },
  {
    "name": "Räkmajonnäs räksallad gatukök",
    "calories": 457,
    "protein": 48,
    "fat": 5.2,
    "carbs": 2.9
  },
  {
    "name": "Majonnäs lätt fett 30%",
    "calories": 323,
    "protein": 30.9,
    "fat": 1.5,
    "carbs": 10.7
  },
  {
    "name": "Mimosasallad",
    "calories": 147,
    "protein": 11.7,
    "fat": 0.8,
    "carbs": 9.1
  },
  {
    "name": "Rödbetssallad m. gräddfil hemlagad",
    "calories": 64,
    "protein": 1.9,
    "fat": 1.1,
    "carbs": 9.9
  },
  {
    "name": "Sallad m. skaldjur majonnäsdressing",
    "calories": 110,
    "protein": 8.5,
    "fat": 5.8,
    "carbs": 2.4
  },
  {
    "name": "Bearnaisesås hemlagad",
    "calories": 510,
    "protein": 55.9,
    "fat": 2.6,
    "carbs": 1.2
  },
  {
    "name": "Hollandaisesås hemlagad",
    "calories": 500,
    "protein": 54.8,
    "fat": 3,
    "carbs": 0.7
  },
  {
    "name": "Rhode Islandsås hemlagad",
    "calories": 356,
    "protein": 36.5,
    "fat": 1.8,
    "carbs": 6.3
  },
  {
    "name": "Dressing vinägrett fett 65%",
    "calories": 586,
    "protein": 65,
    "fat": 0.6,
    "carbs": 2.2
  },
  {
    "name": "Bearnaisesås tillagad frysvara el. pulver",
    "calories": 224,
    "protein": 21,
    "fat": 2.6,
    "carbs": 6.7
  },
  {
    "name": "Hollandaisesås tillagad frysvara el. pulver",
    "calories": 232,
    "protein": 22,
    "fat": 2.6,
    "carbs": 6.6
  },
  {
    "name": "Mesost fett ca 30%",
    "calories": 460,
    "protein": 29,
    "fat": 11,
    "carbs": 39
  },
  {
    "name": "Messmör fett 5% berikad",
    "calories": 260,
    "protein": 5,
    "fat": 7,
    "carbs": 46
  },
  {
    "name": "Messmör fett 2% berikad",
    "calories": 245,
    "protein": 2,
    "fat": 7,
    "carbs": 49
  },
  {
    "name": "Färskost cottage cheese naturell fett 4%",
    "calories": 100,
    "protein": 4.3,
    "fat": 13.4,
    "carbs": 1.9
  },
  {
    "name": "Färskost cottage cheese m. frukt fett 3%",
    "calories": 105,
    "protein": 2.8,
    "fat": 10.3,
    "carbs": 9.1
  },
  {
    "name": "Färskost cottage cheese m. grönsaker fett 3,5-5%",
    "calories": 94,
    "protein": 4.2,
    "fat": 12.2,
    "carbs": 0.9
  },
  {
    "name": "Färskost m. filmjölk fett ca 8%",
    "calories": 119,
    "protein": 8.4,
    "fat": 8,
    "carbs": 2.9
  },
  {
    "name": "Färskost m. filmjölk gräddfil fett ca 14% hemlagad",
    "calories": 178,
    "protein": 14.2,
    "fat": 9.7,
    "carbs": 3.1
  },
  {
    "name": "Kvarg färskost fett 1%",
    "calories": 75,
    "protein": 1,
    "fat": 12.7,
    "carbs": 3.6
  },
  {
    "name": "Kvarg färskost fett 10%",
    "calories": 152,
    "protein": 10,
    "fat": 12.7,
    "carbs": 2.9
  },
  {
    "name": "Ost hårdost fett 10%",
    "calories": 226,
    "protein": 10,
    "fat": 32.4,
    "carbs": 1.5
  },
  {
    "name": "Ost hårdost fett 23%",
    "calories": 325,
    "protein": 23,
    "fat": 29.2,
    "carbs": 0.8
  },
  {
    "name": "Ost hårdost fett 26%",
    "calories": 337,
    "protein": 26,
    "fat": 24.9,
    "carbs": 1.4
  },
  {
    "name": "Ost hårdost fett 38%",
    "calories": 420,
    "protein": 38.2,
    "fat": 19.2,
    "carbs": 1
  },
  {
    "name": "Vitmögelost camembert fett ca 22%",
    "calories": 280,
    "protein": 21.9,
    "fat": 19.3,
    "carbs": 1.9
  },
  {
    "name": "Ädelost blågrön mögelost fett 30%",
    "calories": 336,
    "protein": 28.2,
    "fat": 21.2,
    "carbs": 0.2
  },
  {
    "name": "Mjukost smältost fett 8%",
    "calories": 135,
    "protein": 7.1,
    "fat": 16,
    "carbs": 1.7
  },
  {
    "name": "Mjukost smältost fett 10%",
    "calories": 154,
    "protein": 10.1,
    "fat": 16,
    "carbs": 0
  },
  {
    "name": "Mjukost smältost fett ca 20%",
    "calories": 246,
    "protein": 20.8,
    "fat": 15.4,
    "carbs": 0
  },
  {
    "name": "Mjukost smältost fett ca 16%",
    "calories": 194,
    "protein": 14,
    "fat": 15.4,
    "carbs": 2
  },
  {
    "name": "Mjukost smältost fett 4%",
    "calories": 117,
    "protein": 4,
    "fat": 14.3,
    "carbs": 5.7
  },
  {
    "name": "Vitmögelost brie fett ca 38%",
    "calories": 374,
    "protein": 34.2,
    "fat": 15.6,
    "carbs": 1.9
  },
  {
    "name": "Ädelost grönmögelost fett 17%",
    "calories": 315,
    "protein": 20.8,
    "fat": 31.4,
    "carbs": 0.9
  },
  {
    "name": "Salladsost fett 22%",
    "calories": 272,
    "protein": 22.1,
    "fat": 16.7,
    "carbs": 2.1
  },
  {
    "name": "Ost hårdost fett 17%",
    "calories": 287,
    "protein": 17.7,
    "fat": 30.4,
    "carbs": 1.7
  },
  {
    "name": "Ost hårdost fett 28%",
    "calories": 358,
    "protein": 27.1,
    "fat": 26.2,
    "carbs": 3
  },
  {
    "name": "Ost hårdost fett 31%",
    "calories": 392,
    "protein": 31.2,
    "fat": 25.2,
    "carbs": 3.3
  },
  {
    "name": "Vitmögelost brie fett 30%",
    "calories": 348,
    "protein": 30.2,
    "fat": 17,
    "carbs": 2.8
  },
  {
    "name": "Ost halloumi rå fett 22%",
    "calories": 292,
    "protein": 21.9,
    "fat": 22.3,
    "carbs": 1.9
  },
  {
    "name": "Färskost fett 33%",
    "calories": 343,
    "protein": 33,
    "fat": 10.2,
    "carbs": 2.4
  },
  {
    "name": "Ädelost blågrön mögelost fett över 40%",
    "calories": 432,
    "protein": 42.1,
    "fat": 13.4,
    "carbs": 1.2
  },
  {
    "name": "Ost hårdost parmesan fett 30% typ Parmiggiano Reggiano",
    "calories": 428,
    "protein": 32.2,
    "fat": 31.1,
    "carbs": 4.2
  },
  {
    "name": "Färskost m. vitlök fett 35%",
    "calories": 340,
    "protein": 35,
    "fat": 4,
    "carbs": 3.5
  },
  {
    "name": "Vitmögelost camembert fett 11%",
    "calories": 185,
    "protein": 11,
    "fat": 21.4,
    "carbs": 0.2
  },
  {
    "name": "Färskost cream cheese fett 27%",
    "calories": 276,
    "protein": 27.3,
    "fat": 6.1,
    "carbs": 2.4
  },
  {
    "name": "Färskost cream cheese lätt fett 15%",
    "calories": 187,
    "protein": 16,
    "fat": 7.8,
    "carbs": 3.4
  },
  {
    "name": "Färskost cream cheese extra light fett 5%",
    "calories": 116,
    "protein": 5.3,
    "fat": 12.2,
    "carbs": 4.7
  },
  {
    "name": "Vitmögelost camembert friterad",
    "calories": 320,
    "protein": 21,
    "fat": 16.3,
    "carbs": 16.1
  },
  {
    "name": "Vitmögelost getost chèvre fett 25%",
    "calories": 345,
    "protein": 29,
    "fat": 20.6,
    "carbs": 1.4
  },
  {
    "name": "Bröstmjölk humanmjölk",
    "calories": 68,
    "protein": 3.1,
    "fat": 1.3,
    "carbs": 8.7
  },
  {
    "name": "Filmjölk fett 3% berikad",
    "calories": 57,
    "protein": 2.8,
    "fat": 3.3,
    "carbs": 4.6
  },
  {
    "name": "Kondenserad mjölk konserv. fett ca 8%",
    "calories": 136,
    "protein": 7.6,
    "fat": 6.8,
    "carbs": 10
  },
  {
    "name": "Kondenserad mjölk konserv. konc. m. socker fett ca 9%",
    "calories": 334,
    "protein": 8.2,
    "fat": 8.9,
    "carbs": 55.4
  },
  {
    "name": "Mjölkpulver fett 1%",
    "calories": 365,
    "protein": 0.8,
    "fat": 36.2,
    "carbs": 52
  },
  {
    "name": "Filmjölk långfil fett 3% berikad",
    "calories": 60,
    "protein": 3,
    "fat": 3.4,
    "carbs": 4.8
  },
  {
    "name": "Lättfil fett 0,5% berikad",
    "calories": 39,
    "protein": 0.5,
    "fat": 3.5,
    "carbs": 5
  },
  {
    "name": "Milkshake choklad jordgubb",
    "calories": 84,
    "protein": 3.6,
    "fat": 2,
    "carbs": 10.9
  },
  {
    "name": "Mjölk fett 3% berikad",
    "calories": 60,
    "protein": 3,
    "fat": 3.6,
    "carbs": 4.6
  },
  {
    "name": "Yoghurt naturell fett 3% berikad",
    "calories": 56,
    "protein": 2.7,
    "fat": 3.4,
    "carbs": 4.5
  },
  {
    "name": "Fruktyoghurt lätt fett 0,5% berikad",
    "calories": 76,
    "protein": 0.5,
    "fat": 3,
    "carbs": 14.3
  },
  {
    "name": "Mjölk fett 4,2% typ lantmjölk",
    "calories": 70,
    "protein": 4.2,
    "fat": 3.5,
    "carbs": 4.7
  },
  {
    "name": "Filmjölk A-fil fett 3% berikad",
    "calories": 60,
    "protein": 3,
    "fat": 3.4,
    "carbs": 4.8
  },
  {
    "name": "Mellanfil fett 1,5% berikad",
    "calories": 48,
    "protein": 1.5,
    "fat": 3.5,
    "carbs": 5
  },
  {
    "name": "Mjölkdryck jordgubb fett 1,5% berikad",
    "calories": 50,
    "protein": 1.7,
    "fat": 3.3,
    "carbs": 5.2
  },
  {
    "name": "Yoghurt naturell lätt fett 0,5% berikad",
    "calories": 39,
    "protein": 0.5,
    "fat": 3.6,
    "carbs": 5
  },
  {
    "name": "Fruktyoghurt fett 2%",
    "calories": 75,
    "protein": 1.7,
    "fat": 3,
    "carbs": 11.5
  },
  {
    "name": "Fruktyoghurt delikatessyoghurt fett 7%",
    "calories": 129,
    "protein": 7,
    "fat": 2.5,
    "carbs": 14
  },
  {
    "name": "Kefir fett 3% berikad",
    "calories": 60,
    "protein": 3,
    "fat": 3.4,
    "carbs": 4.8
  },
  {
    "name": "Yoghurt mild vanilj lätt fett 0,5% berikad",
    "calories": 59,
    "protein": 0.5,
    "fat": 4,
    "carbs": 9.4
  },
  {
    "name": "Yoghurt mild vanilj fett 2%",
    "calories": 70,
    "protein": 1.9,
    "fat": 3.2,
    "carbs": 9.9
  },
  {
    "name": "Mellanmjölk fett 1,5% berikad",
    "calories": 47,
    "protein": 1.5,
    "fat": 3.6,
    "carbs": 4.7
  },
  {
    "name": "Lättmjölk fett 0,5% berikad",
    "calories": 39,
    "protein": 0.5,
    "fat": 3.6,
    "carbs": 4.8
  },
  {
    "name": "Vassle flytande",
    "calories": 25,
    "protein": 0.1,
    "fat": 0.8,
    "carbs": 5.1
  },
  {
    "name": "Filbunke m. grädde",
    "calories": 75,
    "protein": 4.6,
    "fat": 3.6,
    "carbs": 4.7
  },
  {
    "name": "Varm choklad m. mjölk fett 3%",
    "calories": 77,
    "protein": 3.1,
    "fat": 3.8,
    "carbs": 8.3
  },
  {
    "name": "Varm choklad m. mjölk fett 1,5%",
    "calories": 64,
    "protein": 1.6,
    "fat": 3.8,
    "carbs": 8.4
  },
  {
    "name": "Varm choklad m. mjölk fett 0,5%",
    "calories": 56,
    "protein": 0.6,
    "fat": 3.8,
    "carbs": 8.5
  },
  {
    "name": "Smoothie m. yoghurt bär banan juice",
    "calories": 56,
    "protein": 1.1,
    "fat": 2.6,
    "carbs": 8.4
  },
  {
    "name": "Hårt bröd fullkorn råg fibrer 15,5% typ Husman",
    "calories": 354,
    "protein": 2.5,
    "fat": 10,
    "carbs": 64.4
  },
  {
    "name": "Hårt bröd fullkorn råg fibrer ca 18% typ Ryvita mörkt",
    "calories": 349,
    "protein": 2.5,
    "fat": 14.6,
    "carbs": 57.6
  },
  {
    "name": "Hårt bröd fullkorn vete m. vallmofrö fibrer 5,5%",
    "calories": 398,
    "protein": 7.1,
    "fat": 11.1,
    "carbs": 68.9
  },
  {
    "name": "Hårt bröd fullkorn råg fibrer 14,5% typ Vika",
    "calories": 345,
    "protein": 2.4,
    "fat": 9.6,
    "carbs": 63.3
  },
  {
    "name": "Hårt bröd fullkorn råg fibrer 16% typ Finn crisp",
    "calories": 348,
    "protein": 2,
    "fat": 11.1,
    "carbs": 62.8
  },
  {
    "name": "Hårt bröd fullkorn råg fibrer ca 15% typ flatbröd",
    "calories": 362,
    "protein": 2,
    "fat": 9.5,
    "carbs": 68
  },
  {
    "name": "Hårt bröd glutenfritt fibrer ca 7%",
    "calories": 346,
    "protein": 2,
    "fat": 6.3,
    "carbs": 71.1
  },
  {
    "name": "Hårt bröd fullkorn råg fibrer ca 13%",
    "calories": 353,
    "protein": 2.6,
    "fat": 9.3,
    "carbs": 65.7
  },
  {
    "name": "Hårt bröd fullkorn råg kli fibrer ca 15%",
    "calories": 349,
    "protein": 2.5,
    "fat": 9.5,
    "carbs": 63.9
  },
  {
    "name": "Hårt bröd fullkorn råg fibrer ca 14% typ rutknäcke",
    "calories": 356,
    "protein": 2.6,
    "fat": 10,
    "carbs": 65.3
  },
  {
    "name": "Hårt bröd fullkorn råg fibrer 15,5% typ brungräddat",
    "calories": 350,
    "protein": 2.4,
    "fat": 10,
    "carbs": 63.5
  },
  {
    "name": "Hårt bröd fullkorn råg fibrer ca 16% typ sport",
    "calories": 341,
    "protein": 1.9,
    "fat": 10,
    "carbs": 62.1
  },
  {
    "name": "Hårt bröd fullkorn råg m. sesamfrö vetekli vetegroddar fibrer 24%",
    "calories": 355,
    "protein": 8.2,
    "fat": 13,
    "carbs": 45.3
  },
  {
    "name": "Hårt bröd fullkorn råg fibrer 15,5% typ delikatess",
    "calories": 351,
    "protein": 2,
    "fat": 10,
    "carbs": 64.7
  },
  {
    "name": "Hårt bröd fullkorn havre vete råg m. mjölk fibrer 8%",
    "calories": 379,
    "protein": 6.8,
    "fat": 13,
    "carbs": 61.7
  },
  {
    "name": "Hårt bröd vete m. vallmofrö fibrer 6% typ frukost",
    "calories": 406,
    "protein": 8.5,
    "fat": 11,
    "carbs": 67.7
  },
  {
    "name": "Hårt bröd vete m. socker kanel fibrer ca 7%",
    "calories": 398,
    "protein": 7.8,
    "fat": 10,
    "carbs": 67.7
  },
  {
    "name": "Hårt bröd glutenfritt fibrer ca 3%",
    "calories": 385,
    "protein": 6.5,
    "fat": 10,
    "carbs": 69.1
  },
  {
    "name": "Hårt bröd fullkorn vete havre kli m. socker örtkryddor fibrer 10,5%",
    "calories": 390,
    "protein": 8.4,
    "fat": 12,
    "carbs": 60.9
  },
  {
    "name": "Bröd fullkorn korn fibrer 3%",
    "calories": 239,
    "protein": 5,
    "fat": 6.4,
    "carbs": 40.1
  },
  {
    "name": "Bröd vitt fullkorn graham typ scones",
    "calories": 285,
    "protein": 10.8,
    "fat": 6.3,
    "carbs": 38.1
  },
  {
    "name": "Bröd fullkorn råg fibrer ca 10% typ pumpernickel",
    "calories": 221,
    "protein": 1.6,
    "fat": 5.4,
    "carbs": 40.8
  },
  {
    "name": "Ströbröd malt hårt bröd fullkorn vete råg socker fibrer ca 5%",
    "calories": 402,
    "protein": 8.6,
    "fat": 10.3,
    "carbs": 65.6
  },
  {
    "name": "Hårt bröd fullkorn råg fibrer ca 14% typ normalgräddat",
    "calories": 349,
    "protein": 2,
    "fat": 9.1,
    "carbs": 66
  },
  {
    "name": "Hårt bröd fullkorn råg vete majs m. surdeg fibrer 15% typ spisbröd",
    "calories": 335,
    "protein": 1.8,
    "fat": 8.3,
    "carbs": 63.4
  },
  {
    "name": "Bröd vitt vete vatten fibrer ca 3,5% typ pitabröd",
    "calories": 274,
    "protein": 1.6,
    "fat": 8.6,
    "carbs": 53.6
  },
  {
    "name": "Korvbröd",
    "calories": 285,
    "protein": 4.1,
    "fat": 8.1,
    "carbs": 51.2
  },
  {
    "name": "Hårt bröd fullkorn råg fibrer ca 14% typ brungräddat",
    "calories": 354,
    "protein": 2.6,
    "fat": 9.1,
    "carbs": 65.5
  },
  {
    "name": "Bröd vitt osötat fibrer ca 2,5% typ italienskt",
    "calories": 256,
    "protein": 1.4,
    "fat": 8.6,
    "carbs": 50.2
  },
  {
    "name": "Bröd vitt vete fibrer ca 2,5% typ baguette",
    "calories": 270,
    "protein": 1.7,
    "fat": 8.5,
    "carbs": 53.2
  },
  {
    "name": "Bröd vitt fullkorn surdeg fibrer 4,4% bakad i butik typ grov baguette",
    "calories": 260,
    "protein": 1.2,
    "fat": 7.6,
    "carbs": 51.7
  },
  {
    "name": "Bröd vitt fibrer 3,5%",
    "calories": 284,
    "protein": 6.4,
    "fat": 8,
    "carbs": 46
  },
  {
    "name": "Bröd vitt mjölk fibrer ca 3% typ Hönökaka",
    "calories": 293,
    "protein": 3.1,
    "fat": 7.4,
    "carbs": 56.7
  },
  {
    "name": "Bröd vitt vete typ scones",
    "calories": 287,
    "protein": 11.1,
    "fat": 6.5,
    "carbs": 38.1
  },
  {
    "name": "Bröd vitt vete ojäst fibrer 3% typ chapati",
    "calories": 257,
    "protein": 5.3,
    "fat": 5.6,
    "carbs": 44.3
  },
  {
    "name": "Bröd fullkorn rågsikt fibrer ca 7% typ kavring",
    "calories": 270,
    "protein": 4.7,
    "fat": 5.5,
    "carbs": 47.3
  },
  {
    "name": "Bröd osötat rågsikt fibrer ca 3,5%",
    "calories": 261,
    "protein": 3.2,
    "fat": 8.4,
    "carbs": 47.3
  },
  {
    "name": "Bröd rågsikt fibrer ca 4%",
    "calories": 266,
    "protein": 2.3,
    "fat": 7.1,
    "carbs": 51.4
  },
  {
    "name": "Bröd fullkorn graham m. mjölk fibrer ca 5%",
    "calories": 279,
    "protein": 5.2,
    "fat": 8.9,
    "carbs": 46.1
  },
  {
    "name": "Bröd fullkorn råg typ rallarhalvor",
    "calories": 246,
    "protein": 2.1,
    "fat": 5.9,
    "carbs": 46.1
  },
  {
    "name": "Bröd fullkorn råg osötat fibrer ca 5%",
    "calories": 239,
    "protein": 1.6,
    "fat": 7.1,
    "carbs": 46.1
  },
  {
    "name": "Hårt bröd tunnbröd fullkorn vete råg korn havre",
    "calories": 353,
    "protein": 2.5,
    "fat": 10.1,
    "carbs": 68.9
  },
  {
    "name": "Bröd vitt mjukt m. mjölk fibrer ca 4% typ tunnbröd",
    "calories": 280,
    "protein": 3.1,
    "fat": 8,
    "carbs": 52.4
  },
  {
    "name": "Bröd fullkorn råg m. potatis fibrer ca 5% ",
    "calories": 258,
    "protein": 1.4,
    "fat": 5.7,
    "carbs": 52.4
  },
  {
    "name": "Bröd vitt vatten fibrer ca 3% typ ostfralla",
    "calories": 274,
    "protein": 3.4,
    "fat": 11.5,
    "carbs": 47.2
  },
  {
    "name": "Riskaka fullkorn solrosfrön majs fett 4% ",
    "calories": 394,
    "protein": 4.4,
    "fat": 7.9,
    "carbs": 77.4
  },
  {
    "name": "Riskaka fullkorn smaksatt fett 18% ",
    "calories": 461,
    "protein": 18.1,
    "fat": 7,
    "carbs": 65.8
  },
  {
    "name": "Bröd vitt glutenfritt",
    "calories": 238,
    "protein": 3.6,
    "fat": 1.8,
    "carbs": 47.3
  },
  {
    "name": "Bröd mörkt glutenfritt",
    "calories": 269,
    "protein": 6.8,
    "fat": 2.6,
    "carbs": 46.2
  },
  {
    "name": "Bröd vitt typ croissant fransk giffel",
    "calories": 363,
    "protein": 21.6,
    "fat": 5.1,
    "carbs": 36.4
  },
  {
    "name": "Potatis höst rå",
    "calories": 81,
    "protein": 0.1,
    "fat": 1.8,
    "carbs": 16.8
  },
  {
    "name": "Potatis höst kokt m. salt",
    "calories": 85,
    "protein": 0.1,
    "fat": 1.9,
    "carbs": 17.8
  },
  {
    "name": "Potatis m. skal bakad u. salt",
    "calories": 91,
    "protein": 0.1,
    "fat": 1.7,
    "carbs": 19.4
  },
  {
    "name": "Potatis m. skal bakad u. salt i aluminiumfolie ",
    "calories": 89,
    "protein": 0.6,
    "fat": 1.5,
    "carbs": 18.1
  },
  {
    "name": "Potatis tärnad frysvara",
    "calories": 81,
    "protein": 0.1,
    "fat": 1.7,
    "carbs": 17.3
  },
  {
    "name": "Färskpotatis kokt u. salt",
    "calories": 71,
    "protein": 0.1,
    "fat": 1.4,
    "carbs": 14.8
  },
  {
    "name": "Potatis konserv. u. lag",
    "calories": 60,
    "protein": 0.1,
    "fat": 1.3,
    "carbs": 12.2
  },
  {
    "name": "Klyftpotatis u. skal ugnsstekt m. rapsolja",
    "calories": 120,
    "protein": 1.6,
    "fat": 2.2,
    "carbs": 23.1
  },
  {
    "name": "Potatis råstekt",
    "calories": 141,
    "protein": 4.7,
    "fat": 2.2,
    "carbs": 20.7
  },
  {
    "name": "Potatis kokt stekt m. salt",
    "calories": 145,
    "protein": 4.7,
    "fat": 2.3,
    "carbs": 21.8
  },
  {
    "name": "Pommes frites friterad potatis värmd i ugn fett ca 7% frysvara",
    "calories": 216,
    "protein": 7.6,
    "fat": 3.2,
    "carbs": 32
  },
  {
    "name": "Pommes frites friterad potatis fett ca 11% frysvara",
    "calories": 243,
    "protein": 11.4,
    "fat": 3,
    "carbs": 30.6
  },
  {
    "name": "Pommes frites friterad potatis fett ca 17% tillagad på restaurang",
    "calories": 352,
    "protein": 17.5,
    "fat": 3.7,
    "carbs": 43.4
  },
  {
    "name": "Kroppkakor el. potatispalt m. fläsk",
    "calories": 169,
    "protein": 5.7,
    "fat": 5.7,
    "carbs": 22.8
  },
  {
    "name": "Sjömansbiff hemlagad",
    "calories": 90,
    "protein": 2.6,
    "fat": 6.8,
    "carbs": 9.2
  },
  {
    "name": "Lapskojs",
    "calories": 110,
    "protein": 4.1,
    "fat": 4.9,
    "carbs": 12.5
  },
  {
    "name": "Pitepalt",
    "calories": 180,
    "protein": 6,
    "fat": 4.8,
    "carbs": 25.1
  },
  {
    "name": "Bakad potatis m. kycklingcurryröra sallad",
    "calories": 156,
    "protein": 12.2,
    "fat": 3.3,
    "carbs": 7.1
  },
  {
    "name": "Pytt i panna tillagad frysvara",
    "calories": 196,
    "protein": 8.8,
    "fat": 4.5,
    "carbs": 23.3
  },
  {
    "name": "Sjömansbiff frysvara",
    "calories": 84,
    "protein": 2.3,
    "fat": 6.7,
    "carbs": 8.6
  },
  {
    "name": "Janssons frestelse",
    "calories": 161,
    "protein": 9.6,
    "fat": 3.6,
    "carbs": 14.2
  },
  {
    "name": "Laxpudding",
    "calories": 111,
    "protein": 4.1,
    "fat": 8.2,
    "carbs": 9.5
  },
  {
    "name": "Sillpudding",
    "calories": 125,
    "protein": 6.2,
    "fat": 7.6,
    "carbs": 9.1
  },
  {
    "name": "Bakad potatis m. skagenröra sallad",
    "calories": 159,
    "protein": 10.8,
    "fat": 3.1,
    "carbs": 11.2
  },
  {
    "name": "Potatissallad m. gräddfil majonnäs",
    "calories": 154,
    "protein": 9.7,
    "fat": 1.9,
    "carbs": 14.1
  },
  {
    "name": "Potatissoppa m. purjolök",
    "calories": 49,
    "protein": 1.8,
    "fat": 1,
    "carbs": 6.6
  },
  {
    "name": "Pytt i panna m. rotfrukt svamp veg.",
    "calories": 82,
    "protein": 3.1,
    "fat": 1.8,
    "carbs": 10
  },
  {
    "name": "Potatissallad m. vinägrettsås",
    "calories": 113,
    "protein": 4.8,
    "fat": 1.8,
    "carbs": 14.5
  },
  {
    "name": "Potatispalt",
    "calories": 141,
    "protein": 1.7,
    "fat": 4.8,
    "carbs": 23.8
  },
  {
    "name": "Potatis råstuvad hemlagad",
    "calories": 78,
    "protein": 1.2,
    "fat": 2.2,
    "carbs": 14
  },
  {
    "name": "Potatisgratäng m. mjölk kaffegrädde ost hemlagad",
    "calories": 139,
    "protein": 5.9,
    "fat": 5.7,
    "carbs": 15
  },
  {
    "name": "Raggmunk potatisplätt potatispannkaka hemlagad",
    "calories": 149,
    "protein": 5.5,
    "fat": 4.2,
    "carbs": 20
  },
  {
    "name": "Potatis stuvad",
    "calories": 95,
    "protein": 2.5,
    "fat": 2.8,
    "carbs": 14.4
  },
  {
    "name": "Potatisbullar stekta",
    "calories": 167,
    "protein": 6.3,
    "fat": 4,
    "carbs": 22.1
  },
  {
    "name": "Potatismos hemlagad",
    "calories": 87,
    "protein": 2,
    "fat": 2.3,
    "carbs": 14.1
  },
  {
    "name": "Potatisgratäng m. mjölk ost hemlagad",
    "calories": 106,
    "protein": 3.1,
    "fat": 5,
    "carbs": 13.5
  },
  {
    "name": "Potatisgratäng m. vispgrädde ost",
    "calories": 214,
    "protein": 15.9,
    "fat": 4.5,
    "carbs": 12.9
  },
  {
    "name": "Potatismos m. lättmjölk",
    "calories": 86,
    "protein": 1.9,
    "fat": 2.3,
    "carbs": 14.1
  },
  {
    "name": "Potatisgratäng m. lättmjölk ost mager hemlagad",
    "calories": 97,
    "protein": 1.9,
    "fat": 5.4,
    "carbs": 13.5
  },
  {
    "name": "Bakad potatis m. färskoströra paprika veg.",
    "calories": 93,
    "protein": 0.9,
    "fat": 4,
    "carbs": 15.8
  },
  {
    "name": "Schweizisk potatiskaka rösti värmd frysvara",
    "calories": 214,
    "protein": 11.4,
    "fat": 2.4,
    "carbs": 23.4
  },
  {
    "name": "Potatiskrokett värmd frysvara",
    "calories": 177,
    "protein": 7,
    "fat": 2.8,
    "carbs": 23.9
  },
  {
    "name": "Potatisgratäng m. grädde ost värmd frysvara",
    "calories": 158,
    "protein": 9.4,
    "fat": 4.6,
    "carbs": 13.2
  },
  {
    "name": "Grönsaksblandning m. morot palsternacka purjolök rotselleri frysvara",
    "calories": 36,
    "protein": 0.5,
    "fat": 1.2,
    "carbs": 5.3
  },
  {
    "name": "Jordärtskocka",
    "calories": 67,
    "protein": 0.4,
    "fat": 1.9,
    "carbs": 12.8
  },
  {
    "name": "Kålrot",
    "calories": 37,
    "protein": 0.1,
    "fat": 1.4,
    "carbs": 6.1
  },
  {
    "name": "Morot",
    "calories": 36,
    "protein": 0.2,
    "fat": 0.7,
    "carbs": 6.6
  },
  {
    "name": "Palsternacka",
    "calories": 71,
    "protein": 0.6,
    "fat": 1.7,
    "carbs": 12.6
  },
  {
    "name": "Pepparrot",
    "calories": 70,
    "protein": 0.3,
    "fat": 3.1,
    "carbs": 9.5
  },
  {
    "name": "Rotselleri",
    "calories": 32,
    "protein": 0.5,
    "fat": 1,
    "carbs": 4.4
  },
  {
    "name": "Rädisa",
    "calories": 11,
    "protein": 0.4,
    "fat": 0.7,
    "carbs": 0.7
  },
  {
    "name": "Rödbeta",
    "calories": 51,
    "protein": 0.1,
    "fat": 1.2,
    "carbs": 9.8
  },
  {
    "name": "Rättika",
    "calories": 18,
    "protein": 0.1,
    "fat": 1,
    "carbs": 2.5
  },
  {
    "name": "Rotpersilja",
    "calories": 61,
    "protein": 0.6,
    "fat": 2.3,
    "carbs": 10.7
  },
  {
    "name": "Majrova",
    "calories": 35,
    "protein": 0.3,
    "fat": 1.1,
    "carbs": 6
  },
  {
    "name": "Svartrot",
    "calories": 75,
    "protein": 0.4,
    "fat": 1.4,
    "carbs": 14.2
  },
  {
    "name": "Morot konserv. m. lag",
    "calories": 23,
    "protein": 0.2,
    "fat": 0.6,
    "carbs": 3.9
  },
  {
    "name": "Morot konserv. u. lag",
    "calories": 23,
    "protein": 0.2,
    "fat": 0.6,
    "carbs": 4
  },
  {
    "name": "Morotsjuice",
    "calories": 34,
    "protein": 0.4,
    "fat": 0.7,
    "carbs": 6.3
  },
  {
    "name": "Rotmos hemlagad",
    "calories": 52,
    "protein": 1.3,
    "fat": 1,
    "carbs": 8.2
  },
  {
    "name": "Jordärtskockssoppa veg. ",
    "calories": 76,
    "protein": 5.5,
    "fat": 1,
    "carbs": 4.7
  },
  {
    "name": "Morot kokt m. salt",
    "calories": 36,
    "protein": 0.2,
    "fat": 0.7,
    "carbs": 6.6
  },
  {
    "name": "Morot stuvad",
    "calories": 83,
    "protein": 4.9,
    "fat": 1.9,
    "carbs": 7.1
  },
  {
    "name": "Morotssoppa veg. ",
    "calories": 35,
    "protein": 1.5,
    "fat": 0.7,
    "carbs": 4.1
  },
  {
    "name": "Ärtsoppa m. morot veg. ",
    "calories": 69,
    "protein": 0.3,
    "fat": 4.3,
    "carbs": 10.8
  },
  {
    "name": "Jordärtskocka kokt m. salt",
    "calories": 67,
    "protein": 0.4,
    "fat": 1.9,
    "carbs": 12.7
  },
  {
    "name": "Rotfrukter stekta glacerade m. honung",
    "calories": 94,
    "protein": 4.7,
    "fat": 1.3,
    "carbs": 10.4
  },
  {
    "name": "Grönsaksbiff rotfruktsbiff stekt veg.",
    "calories": 115,
    "protein": 7.5,
    "fat": 6.1,
    "carbs": 5.1
  },
  {
    "name": "Rödbeta kokt u. salt",
    "calories": 51,
    "protein": 0.1,
    "fat": 1.2,
    "carbs": 9.8
  },
  {
    "name": "Borsjtj rödbetssoppa",
    "calories": 30,
    "protein": 1,
    "fat": 0.7,
    "carbs": 4
  },
  {
    "name": "Rödbeta inlagd u. lag",
    "calories": 58,
    "protein": 0.1,
    "fat": 1.3,
    "carbs": 12
  },
  {
    "name": "Avokado",
    "calories": 197,
    "protein": 19.6,
    "fat": 1.9,
    "carbs": 1.7
  },
  {
    "name": "Stjälkselleri",
    "calories": 19,
    "protein": 0.2,
    "fat": 1,
    "carbs": 2.3
  },
  {
    "name": "Blomkål",
    "calories": 24,
    "protein": 0.2,
    "fat": 1.9,
    "carbs": 2.6
  },
  {
    "name": "Blomkål frysvara",
    "calories": 24,
    "protein": 0.3,
    "fat": 2,
    "carbs": 2.3
  },
  {
    "name": "Bondbönor färska kokta u. salt",
    "calories": 102,
    "protein": 1,
    "fat": 9,
    "carbs": 9.7
  },
  {
    "name": "Broccoli",
    "calories": 40,
    "protein": 0.6,
    "fat": 4.3,
    "carbs": 2.3
  },
  {
    "name": "Broccoli frysvara",
    "calories": 24,
    "protein": 0.3,
    "fat": 2.4,
    "carbs": 1.8
  },
  {
    "name": "Brysselkål",
    "calories": 44,
    "protein": 0.3,
    "fat": 3.4,
    "carbs": 4.7
  },
  {
    "name": "Brysselkål frysvara",
    "calories": 41,
    "protein": 0.4,
    "fat": 3.8,
    "carbs": 3.4
  },
  {
    "name": "Mungbönsgroddar",
    "calories": 34,
    "protein": 0.4,
    "fat": 3,
    "carbs": 3.2
  },
  {
    "name": "Sojabönsgroddar",
    "calories": 146,
    "protein": 6.7,
    "fat": 13.1,
    "carbs": 7
  },
  {
    "name": "Gröna bönor",
    "calories": 27,
    "protein": 0.4,
    "fat": 2.1,
    "carbs": 2.1
  },
  {
    "name": "Gröna bönor frysvara",
    "calories": 35,
    "protein": 0.2,
    "fat": 2.2,
    "carbs": 4.5
  },
  {
    "name": "Champinjon",
    "calories": 27,
    "protein": 0.2,
    "fat": 2.4,
    "carbs": 2.7
  },
  {
    "name": "Friséesallat",
    "calories": 17,
    "protein": 0.2,
    "fat": 1.8,
    "carbs": 1
  },
  {
    "name": "Endivesallat",
    "calories": 14,
    "protein": 0.1,
    "fat": 1,
    "carbs": 1.1
  },
  {
    "name": "Fänkål",
    "calories": 28,
    "protein": 0.4,
    "fat": 2.8,
    "carbs": 1.8
  },
  {
    "name": "Grönkål",
    "calories": 40,
    "protein": 0.7,
    "fat": 3.4,
    "carbs": 3.2
  },
  {
    "name": "Grönkål frysvara",
    "calories": 30,
    "protein": 0.5,
    "fat": 2.7,
    "carbs": 2.3
  },
  {
    "name": "Gurka",
    "calories": 13,
    "protein": 0,
    "fat": 0.8,
    "carbs": 2.3
  },
  {
    "name": "Isbergssallat",
    "calories": 14,
    "protein": 0.1,
    "fat": 0.8,
    "carbs": 2.5
  },
  {
    "name": "Kronärtskocka",
    "calories": 52,
    "protein": 0.2,
    "fat": 2.7,
    "carbs": 7.3
  },
  {
    "name": "Kålrabbi",
    "calories": 29,
    "protein": 0.1,
    "fat": 1.7,
    "carbs": 4.4
  },
  {
    "name": "Lök gul",
    "calories": 39,
    "protein": 0.1,
    "fat": 1.2,
    "carbs": 7.3
  },
  {
    "name": "Majskolv",
    "calories": 125,
    "protein": 1.6,
    "fat": 3.9,
    "carbs": 22.1
  },
  {
    "name": "Majskolv frysvara",
    "calories": 111,
    "protein": 0.8,
    "fat": 3.3,
    "carbs": 21.5
  },
  {
    "name": "Majskorn frysvara",
    "calories": 99,
    "protein": 1.5,
    "fat": 3,
    "carbs": 15.6
  },
  {
    "name": "Mangold",
    "calories": 21,
    "protein": 0.2,
    "fat": 1.8,
    "carbs": 2.6
  },
  {
    "name": "Nässlor förvällda",
    "calories": 30,
    "protein": 0.7,
    "fat": 4.1,
    "carbs": 0.6
  },
  {
    "name": "Paprika grön",
    "calories": 18,
    "protein": 0.1,
    "fat": 0.5,
    "carbs": 3
  },
  {
    "name": "Paprika röd",
    "calories": 22,
    "protein": 0.2,
    "fat": 0.5,
    "carbs": 4.1
  },
  {
    "name": "Persilja blad",
    "calories": 78,
    "protein": 1.1,
    "fat": 5.6,
    "carbs": 9.4
  },
  {
    "name": "Pumpa",
    "calories": 26,
    "protein": 0.1,
    "fat": 1,
    "carbs": 4.4
  },
  {
    "name": "Purjolök",
    "calories": 30,
    "protein": 0.2,
    "fat": 1.6,
    "carbs": 4.1
  },
  {
    "name": "Rödkål",
    "calories": 31,
    "protein": 0.3,
    "fat": 1.1,
    "carbs": 4.7
  },
  {
    "name": "Savojkål",
    "calories": 28,
    "protein": 0.1,
    "fat": 2,
    "carbs": 3.6
  },
  {
    "name": "Salladskål",
    "calories": 21,
    "protein": 0.1,
    "fat": 1.3,
    "carbs": 2.7
  },
  {
    "name": "Sockerärtor",
    "calories": 37,
    "protein": 0.2,
    "fat": 3.4,
    "carbs": 4.3
  },
  {
    "name": "Spenat frysvara",
    "calories": 20,
    "protein": 0.6,
    "fat": 2.2,
    "carbs": 0.5
  },
  {
    "name": "Squash",
    "calories": 14,
    "protein": 0.1,
    "fat": 0,
    "carbs": 2.5
  },
  {
    "name": "Tomat",
    "calories": 18,
    "protein": 0.1,
    "fat": 0.8,
    "carbs": 2.6
  },
  {
    "name": "Tomat torkad m. olja",
    "calories": 190,
    "protein": 12.5,
    "fat": 5,
    "carbs": 8.7
  },
  {
    "name": "Trädgårdskrasse",
    "calories": 37,
    "protein": 0.7,
    "fat": 2.6,
    "carbs": 4.3
  },
  {
    "name": "Vattenkrasse",
    "calories": 15,
    "protein": 0.3,
    "fat": 1.9,
    "carbs": 0.5
  },
  {
    "name": "Vaxbönor",
    "calories": 32,
    "protein": 0.1,
    "fat": 1.8,
    "carbs": 4.7
  },
  {
    "name": "Vaxbönor frysvara",
    "calories": 29,
    "protein": 0.1,
    "fat": 1.8,
    "carbs": 3.8
  },
  {
    "name": "Vitkål",
    "calories": 30,
    "protein": 0.1,
    "fat": 1.1,
    "carbs": 4.7
  },
  {
    "name": "Vitlök",
    "calories": 128,
    "protein": 0.2,
    "fat": 6.8,
    "carbs": 21.9
  },
  {
    "name": "Aubergine",
    "calories": 19,
    "protein": 0.1,
    "fat": 1.1,
    "carbs": 2.2
  },
  {
    "name": "Gröna ärtor frysvara",
    "calories": 69,
    "protein": 0.4,
    "fat": 5.2,
    "carbs": 8.9
  },
  {
    "name": "Alfalfagroddar",
    "calories": 32,
    "protein": 0.7,
    "fat": 4,
    "carbs": 0.9
  },
  {
    "name": "Dill färsk",
    "calories": 58,
    "protein": 0.8,
    "fat": 3.7,
    "carbs": 7.4
  },
  {
    "name": "Gräslök",
    "calories": 28,
    "protein": 0.6,
    "fat": 2.8,
    "carbs": 1.7
  },
  {
    "name": "Basilika färsk",
    "calories": 25,
    "protein": 0.6,
    "fat": 2.5,
    "carbs": 0.4
  },
  {
    "name": "Chilipeppar färsk",
    "calories": 49,
    "protein": 0.7,
    "fat": 2.4,
    "carbs": 5.9
  },
  {
    "name": "Paprika gul",
    "calories": 24,
    "protein": 0.2,
    "fat": 0.5,
    "carbs": 4.3
  },
  {
    "name": "Paprika grön röd frysvara",
    "calories": 26,
    "protein": 0.4,
    "fat": 1,
    "carbs": 3
  },
  {
    "name": "Champinjon skivad frysvara",
    "calories": 19,
    "protein": 0.4,
    "fat": 2,
    "carbs": 0.8
  },
  {
    "name": "Linsgroddar",
    "calories": 125,
    "protein": 0.6,
    "fat": 9,
    "carbs": 19.1
  },
  {
    "name": "Lök gul frysvara",
    "calories": 28,
    "protein": 0,
    "fat": 1.5,
    "carbs": 4.1
  },
  {
    "name": "Grönsaksblandning m. ärtor bönor majs morot typ amerikansk frysvara",
    "calories": 68,
    "protein": 0.5,
    "fat": 3.3,
    "carbs": 11.1
  },
  {
    "name": "Grönsaksblandning m. ärtor bönor morot blomkål typ sommargrönsaker frysvara",
    "calories": 38,
    "protein": 0.5,
    "fat": 2.4,
    "carbs": 4.5
  },
  {
    "name": "Grönsaksblandning m. ärtor morot frysvara",
    "calories": 60,
    "protein": 0.5,
    "fat": 3.7,
    "carbs": 9
  },
  {
    "name": "Grönsaksblandning m. ärtor majs paprika frysvara",
    "calories": 66,
    "protein": 0.5,
    "fat": 4.2,
    "carbs": 8.7
  },
  {
    "name": "Sallad m. grönsallat gurka tomat u. dressing",
    "calories": 16,
    "protein": 0.1,
    "fat": 0.9,
    "carbs": 2.4
  },
  {
    "name": "Paprika grön gul röd",
    "calories": 22,
    "protein": 0.2,
    "fat": 0.5,
    "carbs": 4
  },
  {
    "name": "Bambuskott konserv. u. lag",
    "calories": 24,
    "protein": 0.2,
    "fat": 2.7,
    "carbs": 1.7
  },
  {
    "name": "Gröna bönor konserv. u. lag",
    "calories": 21,
    "protein": 0.1,
    "fat": 1.2,
    "carbs": 3
  },
  {
    "name": "Champinjon konserv. m. lag",
    "calories": 15,
    "protein": 0.1,
    "fat": 1.9,
    "carbs": 0.9
  },
  {
    "name": "Majskorn konserv. u. lag",
    "calories": 80,
    "protein": 1.5,
    "fat": 2.1,
    "carbs": 12.9
  },
  {
    "name": "Oliver gröna m. paprikafyllning avrunna",
    "calories": 128,
    "protein": 13.1,
    "fat": 0.6,
    "carbs": 1.1
  },
  {
    "name": "Oliver svarta m. olja avrunna",
    "calories": 142,
    "protein": 14.1,
    "fat": 0.8,
    "carbs": 1.8
  },
  {
    "name": "Grönsaksblandning el. pickels sockrad inlagd u. lag",
    "calories": 116,
    "protein": 0.1,
    "fat": 1.5,
    "carbs": 26.1
  },
  {
    "name": "Sparris vit konserv. u. lag",
    "calories": 15,
    "protein": 0.7,
    "fat": 0.9,
    "carbs": 0.5
  },
  {
    "name": "Sparrissoppa tillagad redd konserv. veg.",
    "calories": 35,
    "protein": 1.7,
    "fat": 0.9,
    "carbs": 3.7
  },
  {
    "name": "Surkål konserv. m. lag",
    "calories": 17,
    "protein": 0.2,
    "fat": 0.9,
    "carbs": 2
  },
  {
    "name": "Tomat hel konserv. m. lag",
    "calories": 25,
    "protein": 0.1,
    "fat": 1.1,
    "carbs": 4.4
  },
  {
    "name": "Tomatjuice konserv. drickf.",
    "calories": 18,
    "protein": 0.1,
    "fat": 0.8,
    "carbs": 2.7
  },
  {
    "name": "Tomatpuré konc. konserv.",
    "calories": 84,
    "protein": 0.2,
    "fat": 4.4,
    "carbs": 13.5
  },
  {
    "name": "Vaxbönor konserv. u. lag",
    "calories": 24,
    "protein": 0.3,
    "fat": 1.4,
    "carbs": 2.5
  },
  {
    "name": "Gröna ärtor konserv. m. lag",
    "calories": 63,
    "protein": 0.3,
    "fat": 3.5,
    "carbs": 10.5
  },
  {
    "name": "Gröna ärtor konserv. u. lag",
    "calories": 60,
    "protein": 0.4,
    "fat": 4.4,
    "carbs": 7.3
  },
  {
    "name": "Mungbönsgroddar konserv. u. lag",
    "calories": 16,
    "protein": 0.1,
    "fat": 1.4,
    "carbs": 0.8
  },
  {
    "name": "Sojabönsgroddar konserv. u. lag",
    "calories": 16,
    "protein": 0.2,
    "fat": 1.6,
    "carbs": 0.6
  },
  {
    "name": "Paprikasallad inlagd u. lag",
    "calories": 31,
    "protein": 0.4,
    "fat": 1,
    "carbs": 4.3
  },
  {
    "name": "Ajvar relish",
    "calories": 70,
    "protein": 3.5,
    "fat": 1.2,
    "carbs": 6.9
  },
  {
    "name": "Svamp konserv. u. lag",
    "calories": 23,
    "protein": 0.5,
    "fat": 2.5,
    "carbs": 0.9
  },
  {
    "name": "Kantarell konserv. u. lag",
    "calories": 36,
    "protein": 0.7,
    "fat": 1.4,
    "carbs": 4.8
  },
  {
    "name": "Syltlök inlagd",
    "calories": 83,
    "protein": 0.1,
    "fat": 0.9,
    "carbs": 18.7
  },
  {
    "name": "Tomater gröna syltade",
    "calories": 86,
    "protein": 0.2,
    "fat": 1.2,
    "carbs": 18.6
  },
  {
    "name": "Tomat krossad konserv. m. lag",
    "calories": 22,
    "protein": 0.2,
    "fat": 0.8,
    "carbs": 3.7
  },
  {
    "name": "Fefferoni konserv. inlagd",
    "calories": 19,
    "protein": 0.1,
    "fat": 0.7,
    "carbs": 1.7
  },
  {
    "name": "Wokgrönsaker Asiatiska wokade m. rapsolja",
    "calories": 49,
    "protein": 1.3,
    "fat": 1.4,
    "carbs": 5.7
  },
  {
    "name": "Wokgrönsaker Classic wokade m. rapsolja",
    "calories": 47,
    "protein": 1.6,
    "fat": 1.8,
    "carbs": 4.9
  },
  {
    "name": "Grönsaksblandning ärtor morot konserv. m. lag",
    "calories": 41,
    "protein": 0.3,
    "fat": 2.2,
    "carbs": 6.1
  },
  {
    "name": "Grönsaksjuice konserv. el. pastöriserad drickf.",
    "calories": 19,
    "protein": 0.1,
    "fat": 0.6,
    "carbs": 3.7
  },
  {
    "name": "Champinjon konserv. u. lag",
    "calories": 18,
    "protein": 0.3,
    "fat": 2.4,
    "carbs": 0.3
  },
  {
    "name": "Pumpasallad m. paprika inlagd sockrad u. lag",
    "calories": 64,
    "protein": 0.2,
    "fat": 0.9,
    "carbs": 13.5
  },
  {
    "name": "Grönsakssoppa klar veg. ",
    "calories": 23,
    "protein": 0.2,
    "fat": 0.9,
    "carbs": 3.9
  },
  {
    "name": "Spenatsoppa veg. hemlagad",
    "calories": 36,
    "protein": 2,
    "fat": 1.9,
    "carbs": 2.2
  },
  {
    "name": "Vitkål stuvad hemlagad",
    "calories": 69,
    "protein": 3.3,
    "fat": 2.3,
    "carbs": 6.8
  },
  {
    "name": "Blomkål gratinerad",
    "calories": 92,
    "protein": 4.9,
    "fat": 5.1,
    "carbs": 6.2
  },
  {
    "name": "Blomkål kokt m. salt",
    "calories": 24,
    "protein": 0.2,
    "fat": 1.9,
    "carbs": 2.6
  },
  {
    "name": "Blomkål stuvad",
    "calories": 60,
    "protein": 2.7,
    "fat": 2.9,
    "carbs": 5.4
  },
  {
    "name": "Gröna bönor stuvade",
    "calories": 57,
    "protein": 2.1,
    "fat": 2.4,
    "carbs": 5.8
  },
  {
    "name": "Grönkålssoppa",
    "calories": 32,
    "protein": 1.9,
    "fat": 1.2,
    "carbs": 2.1
  },
  {
    "name": "Grönsakssoppa redd ängamat veg. ",
    "calories": 49,
    "protein": 3,
    "fat": 2,
    "carbs": 2.9
  },
  {
    "name": "Grönsaksbiff stekt veg.",
    "calories": 117,
    "protein": 5.4,
    "fat": 4.7,
    "carbs": 10.3
  },
  {
    "name": "Grönsallat m. vinägrettsås",
    "calories": 130,
    "protein": 12.9,
    "fat": 1,
    "carbs": 2.5
  },
  {
    "name": "Sallad m. grönsallat gurka tomat vinägrettsås",
    "calories": 112,
    "protein": 11,
    "fat": 0.8,
    "carbs": 2.5
  },
  {
    "name": "Grönsallat m. gräddfilsås",
    "calories": 174,
    "protein": 17,
    "fat": 1.6,
    "carbs": 4.1
  },
  {
    "name": "Sallad m. grönsallat gurka tomat gräddfilsås",
    "calories": 158,
    "protein": 15.2,
    "fat": 1.5,
    "carbs": 3.9
  },
  {
    "name": "Sallad m. grönsallat gurka tomat paprika u. dressing",
    "calories": 17,
    "protein": 0.1,
    "fat": 0.8,
    "carbs": 2.6
  },
  {
    "name": "Gurka inlagd m. lag hemlagad",
    "calories": 42,
    "protein": 0,
    "fat": 0.7,
    "carbs": 9.6
  },
  {
    "name": "Lök stekt m. olja el. flytande margarin salt",
    "calories": 53,
    "protein": 1.2,
    "fat": 1.4,
    "carbs": 8.2
  },
  {
    "name": "Löksås",
    "calories": 115,
    "protein": 7.4,
    "fat": 1.1,
    "carbs": 10.7
  },
  {
    "name": "Lök gul kokt m. salt",
    "calories": 39,
    "protein": 0.1,
    "fat": 1.2,
    "carbs": 7.3
  },
  {
    "name": "Nässelsoppa",
    "calories": 38,
    "protein": 2.7,
    "fat": 1.3,
    "carbs": 1.7
  },
  {
    "name": "Paprika förvälld",
    "calories": 28,
    "protein": 0.2,
    "fat": 0.6,
    "carbs": 5
  },
  {
    "name": "Purjolök kokt m. salt",
    "calories": 30,
    "protein": 0.1,
    "fat": 1.6,
    "carbs": 4.1
  },
  {
    "name": "Rödkål tillagad",
    "calories": 61,
    "protein": 2.2,
    "fat": 0.8,
    "carbs": 8.3
  },
  {
    "name": "Sparris stuvad",
    "calories": 59,
    "protein": 2.7,
    "fat": 2.9,
    "carbs": 5
  },
  {
    "name": "Spenat fräst m. olja el. flytande margarin salt",
    "calories": 28,
    "protein": 1,
    "fat": 2.8,
    "carbs": 0.6
  },
  {
    "name": "Spenat stuvad",
    "calories": 54,
    "protein": 3.6,
    "fat": 2.5,
    "carbs": 2.2
  },
  {
    "name": "Champinjon stekt m. salt",
    "calories": 45,
    "protein": 1.5,
    "fat": 3,
    "carbs": 3.4
  },
  {
    "name": "Champinjon stuvad",
    "calories": 166,
    "protein": 14.3,
    "fat": 3.4,
    "carbs": 5.8
  },
  {
    "name": "Champinjonsås hemlagad",
    "calories": 129,
    "protein": 11.2,
    "fat": 2.1,
    "carbs": 4.7
  },
  {
    "name": "Tomatsallad m. vinägrett",
    "calories": 54,
    "protein": 4.2,
    "fat": 0.8,
    "carbs": 2.7
  },
  {
    "name": "Tomatsås italiensk",
    "calories": 93,
    "protein": 7.4,
    "fat": 1.1,
    "carbs": 4.9
  },
  {
    "name": "Tomatsalsa kall",
    "calories": 25,
    "protein": 0.2,
    "fat": 1.2,
    "carbs": 3.8
  },
  {
    "name": "Vitkålssoppa tillagad veg.",
    "calories": 32,
    "protein": 1.8,
    "fat": 0.8,
    "carbs": 2.6
  },
  {
    "name": "Vitkål kokt m. salt",
    "calories": 30,
    "protein": 0.1,
    "fat": 1.1,
    "carbs": 4.7
  },
  {
    "name": "Brunkål",
    "calories": 48,
    "protein": 1,
    "fat": 1.3,
    "carbs": 7
  },
  {
    "name": "Vitkålssallad pizzasallad",
    "calories": 88,
    "protein": 7.2,
    "fat": 0.9,
    "carbs": 4.1
  },
  {
    "name": "Vitkålssallad m. lingonsylt",
    "calories": 61,
    "protein": 0.1,
    "fat": 0.9,
    "carbs": 12.8
  },
  {
    "name": "Aubergine kokt m. salt",
    "calories": 24,
    "protein": 0.1,
    "fat": 1.4,
    "carbs": 2.8
  },
  {
    "name": "Aubergine stekt m. olja el. flytande margarin salt",
    "calories": 74,
    "protein": 6,
    "fat": 1.3,
    "carbs": 2.6
  },
  {
    "name": "Ärtor morot kokta m. salt",
    "calories": 52,
    "protein": 0.3,
    "fat": 2.9,
    "carbs": 7.7
  },
  {
    "name": "Ärtor morot stuvade",
    "calories": 67,
    "protein": 2.2,
    "fat": 2.9,
    "carbs": 7.8
  },
  {
    "name": "Ärtpurésoppa gröna ärtor tillagad veg. ",
    "calories": 50,
    "protein": 2.9,
    "fat": 1.4,
    "carbs": 3.1
  },
  {
    "name": "Gryta kikärtsgryta grönsaksgryta veg. ",
    "calories": 61,
    "protein": 1.9,
    "fat": 2.4,
    "carbs": 6.6
  },
  {
    "name": "Gratäng m. grönsaker rotfrukter veg.",
    "calories": 93,
    "protein": 4.4,
    "fat": 3.7,
    "carbs": 8.8
  },
  {
    "name": "Grönsakssoppa m. pasta tillagad pulver",
    "calories": 30,
    "protein": 0.8,
    "fat": 0.9,
    "carbs": 4.2
  },
  {
    "name": "Löksoppa fransk tillagad pulver m. vatten",
    "calories": 25,
    "protein": 0.2,
    "fat": 0.4,
    "carbs": 5.2
  },
  {
    "name": "Grönsakssoppa tillagad klar konserv.",
    "calories": 15,
    "protein": 0.1,
    "fat": 0.6,
    "carbs": 2.3
  },
  {
    "name": "Grönsakssoppa tillagad redd pulver m. vatten mjölk",
    "calories": 49,
    "protein": 2.2,
    "fat": 1.7,
    "carbs": 5.1
  },
  {
    "name": "Grönsakssoppa tillagad redd pulver",
    "calories": 45,
    "protein": 2.2,
    "fat": 0.5,
    "carbs": 5.3
  },
  {
    "name": "Gurka inlagd",
    "calories": 59,
    "protein": 0.7,
    "fat": 0.7,
    "carbs": 11.4
  },
  {
    "name": "Bostongurka",
    "calories": 78,
    "protein": 0.4,
    "fat": 1,
    "carbs": 16.6
  },
  {
    "name": "Gurka fermenterad u. lag",
    "calories": 9,
    "protein": 0,
    "fat": 1,
    "carbs": 1
  },
  {
    "name": "Saltgurka u. lag",
    "calories": 15,
    "protein": 0.2,
    "fat": 0.9,
    "carbs": 1.4
  },
  {
    "name": "Ättiksgurka u. lag",
    "calories": 43,
    "protein": 0.3,
    "fat": 0.9,
    "carbs": 8.2
  },
  {
    "name": "Kronärtskocka kokt",
    "calories": 52,
    "protein": 0.2,
    "fat": 2.8,
    "carbs": 9.4
  },
  {
    "name": "Champinjonsoppa tillagad pulver m. vatten mjölk",
    "calories": 56,
    "protein": 2.6,
    "fat": 1.6,
    "carbs": 6.5
  },
  {
    "name": "Champinjonsoppa tillagad redd m. mjölk konserv.",
    "calories": 64,
    "protein": 3.7,
    "fat": 2.2,
    "carbs": 5.5
  },
  {
    "name": "Majskolv kokt",
    "calories": 100,
    "protein": 1,
    "fat": 3.3,
    "carbs": 17.3
  },
  {
    "name": "Blomkålssoppa tillagad pulver m. vatten mjölk",
    "calories": 51,
    "protein": 2.2,
    "fat": 1.6,
    "carbs": 5.9
  },
  {
    "name": "Tomatsoppa tillagad pulver m. vatten",
    "calories": 32,
    "protein": 0.8,
    "fat": 1,
    "carbs": 4.6
  },
  {
    "name": "Tomatsoppa tillagad konserv. m. vatten mjölk",
    "calories": 45,
    "protein": 1.4,
    "fat": 1.2,
    "carbs": 6.3
  },
  {
    "name": "Sparrissoppa tillagad pulver m. vatten mjölk veg.",
    "calories": 50,
    "protein": 2.3,
    "fat": 1.4,
    "carbs": 5.9
  },
  {
    "name": "Rödkål konserv.",
    "calories": 72,
    "protein": 0.2,
    "fat": 1.5,
    "carbs": 15
  },
  {
    "name": "Champinjonsås tillagad pulver m. mjölk smör",
    "calories": 113,
    "protein": 7.5,
    "fat": 3.6,
    "carbs": 7.6
  },
  {
    "name": "Grönsaker blandade fermenterade",
    "calories": 15,
    "protein": 0.1,
    "fat": 1.2,
    "carbs": 1.1
  },
  {
    "name": "Grönsaksjuice fermenterad",
    "calories": 22,
    "protein": 0.1,
    "fat": 1.5,
    "carbs": 3.5
  },
  {
    "name": "Kåldolmar råa u. sås frysvara",
    "calories": 88,
    "protein": 5,
    "fat": 5,
    "carbs": 5.2
  },
  {
    "name": "Vitkålssoppa m. fläskkorv hemlagad",
    "calories": 47,
    "protein": 3.4,
    "fat": 2.2,
    "carbs": 1.6
  },
  {
    "name": "Minestronesoppa",
    "calories": 50,
    "protein": 2.1,
    "fat": 2,
    "carbs": 5.3
  },
  {
    "name": "Vitkålssoppa m. frikadeller",
    "calories": 60,
    "protein": 3.9,
    "fat": 3.1,
    "carbs": 2.8
  },
  {
    "name": "Gryta får i kål",
    "calories": 54,
    "protein": 1.8,
    "fat": 6.6,
    "carbs": 2.1
  },
  {
    "name": "Kåldolmar stekta hemlagade",
    "calories": 107,
    "protein": 5.7,
    "fat": 5.2,
    "carbs": 8
  },
  {
    "name": "Kålpudding",
    "calories": 117,
    "protein": 5.2,
    "fat": 7.3,
    "carbs": 9.6
  },
  {
    "name": "Sallad Caesarsallad el. kycklingsallad m. dressing",
    "calories": 301,
    "protein": 23.9,
    "fat": 12,
    "carbs": 9.6
  },
  {
    "name": "Moussaka ugnsstekt",
    "calories": 117,
    "protein": 7.7,
    "fat": 6.8,
    "carbs": 4.7
  },
  {
    "name": "Wokgrönsaker m. nudlar kyckling",
    "calories": 101,
    "protein": 4.6,
    "fat": 5.6,
    "carbs": 8.6
  },
  {
    "name": "Kycklingsallad m. ananas paprika vitlöksdressing",
    "calories": 75,
    "protein": 5.2,
    "fat": 4.4,
    "carbs": 2.4
  },
  {
    "name": "Granatäpple",
    "calories": 56,
    "protein": 0.6,
    "fat": 0.7,
    "carbs": 7
  },
  {
    "name": "Grapefrukt",
    "calories": 43,
    "protein": 0.5,
    "fat": 0.9,
    "carbs": 8.3
  },
  {
    "name": "Guava",
    "calories": 33,
    "protein": 0.1,
    "fat": 0.6,
    "carbs": 4.8
  },
  {
    "name": "Hallon",
    "calories": 34,
    "protein": 0.6,
    "fat": 1.2,
    "carbs": 4.1
  },
  {
    "name": "Hallon m. socker frysvara",
    "calories": 82,
    "protein": 0.2,
    "fat": 0.7,
    "carbs": 17.6
  },
  {
    "name": "Hjortron",
    "calories": 48,
    "protein": 1.1,
    "fat": 1.5,
    "carbs": 5.1
  },
  {
    "name": "Jordgubbar",
    "calories": 41,
    "protein": 0.2,
    "fat": 0.5,
    "carbs": 8.3
  },
  {
    "name": "Jordgubbar hela m. socker frysvara",
    "calories": 86,
    "protein": 0.1,
    "fat": 0.5,
    "carbs": 19.7
  },
  {
    "name": "Gratäng broccoligratäng veg. ",
    "calories": 100,
    "protein": 6.5,
    "fat": 6.2,
    "carbs": 3.4
  },
  {
    "name": "Sallad grekisk m. salladsost oliver",
    "calories": 87,
    "protein": 6.8,
    "fat": 2.7,
    "carbs": 3.2
  },
  {
    "name": "Grönsakssufflé",
    "calories": 118,
    "protein": 6.7,
    "fat": 7.2,
    "carbs": 6.6
  },
  {
    "name": "Gratäng grönsaksgratäng veg.",
    "calories": 88,
    "protein": 5,
    "fat": 4.1,
    "carbs": 5.8
  },
  {
    "name": "Grekisk sallad m. fetaost",
    "calories": 77,
    "protein": 6.1,
    "fat": 2.9,
    "carbs": 2
  },
  {
    "name": "Grönsaksbuljong pasta el. pulver storhushåll",
    "calories": 238,
    "protein": 8.8,
    "fat": 14.9,
    "carbs": 24.6
  },
  {
    "name": "Agar torkad",
    "calories": 165,
    "protein": 0.3,
    "fat": 0.2,
    "carbs": 2.6
  },
  {
    "name": "Mykoprotein färs bitar filé kylvara el. frysvara",
    "calories": 99,
    "protein": 1.8,
    "fat": 15.7,
    "carbs": 2.2
  },
  {
    "name": "Gratäng broccoligratäng m. skinka",
    "calories": 95,
    "protein": 4.5,
    "fat": 9.3,
    "carbs": 3.6
  },
  {
    "name": "Wokgrönsaker m. nudlar veg.",
    "calories": 81,
    "protein": 4.1,
    "fat": 1.7,
    "carbs": 8.1
  },
  {
    "name": "Pastej veg.",
    "calories": 249,
    "protein": 20,
    "fat": 7.6,
    "carbs": 9.1
  },
  {
    "name": "Grönsaksbuljong ätf.",
    "calories": 5,
    "protein": 0.2,
    "fat": 0.4,
    "carbs": 0.4
  },
  {
    "name": "Honungsmelon",
    "calories": 33,
    "protein": 0.1,
    "fat": 0.5,
    "carbs": 7
  },
  {
    "name": "Nätmelon",
    "calories": 37,
    "protein": 0.3,
    "fat": 0.9,
    "carbs": 7.1
  },
  {
    "name": "Rabarber tillagad u. socker",
    "calories": 12,
    "protein": 0.2,
    "fat": 0.4,
    "carbs": 0.4
  },
  {
    "name": "Vattenmelon",
    "calories": 34,
    "protein": 0,
    "fat": 0.6,
    "carbs": 7.5
  },
  {
    "name": "Ananas",
    "calories": 52,
    "protein": 0.1,
    "fat": 0.5,
    "carbs": 11.5
  },
  {
    "name": "Apelsin",
    "calories": 50,
    "protein": 0.2,
    "fat": 0.8,
    "carbs": 10.4
  },
  {
    "name": "Aprikos",
    "calories": 51,
    "protein": 0.4,
    "fat": 1.4,
    "carbs": 9.3
  },
  {
    "name": "Banan",
    "calories": 95,
    "protein": 0.1,
    "fat": 1.1,
    "carbs": 21.3
  },
  {
    "name": "Björnbär",
    "calories": 43,
    "protein": 0.2,
    "fat": 1.1,
    "carbs": 7.5
  },
  {
    "name": "Blåbär",
    "calories": 53,
    "protein": 0.8,
    "fat": 0.7,
    "carbs": 9.1
  },
  {
    "name": "Blåbär frysvara",
    "calories": 43,
    "protein": 0.5,
    "fat": 0.5,
    "carbs": 7.6
  },
  {
    "name": "Blåbär m. socker frysvara",
    "calories": 83,
    "protein": 0.1,
    "fat": 0.4,
    "carbs": 18.3
  },
  {
    "name": "Cherimoya",
    "calories": 84,
    "protein": 0.3,
    "fat": 1.2,
    "carbs": 17.7
  },
  {
    "name": "Citron",
    "calories": 50,
    "protein": 0.7,
    "fat": 0.9,
    "carbs": 7.6
  },
  {
    "name": "Småcitrus clementin mandarin tangerin satsumas",
    "calories": 54,
    "protein": 0.2,
    "fat": 0.8,
    "carbs": 11.4
  },
  {
    "name": "Fikon",
    "calories": 87,
    "protein": 0.4,
    "fat": 2,
    "carbs": 16.3
  },
  {
    "name": "Fläderbär",
    "calories": 67,
    "protein": 0.5,
    "fat": 0.7,
    "carbs": 11.4
  },
  {
    "name": "Jordgubbar skivade m. socker frysvara",
    "calories": 102,
    "protein": 0.1,
    "fat": 0.5,
    "carbs": 23.8
  },
  {
    "name": "Kaktusfikon",
    "calories": 39,
    "protein": 0.5,
    "fat": 0.7,
    "carbs": 6.7
  },
  {
    "name": "Kiwi grön",
    "calories": 55,
    "protein": 0.9,
    "fat": 0.8,
    "carbs": 9.6
  },
  {
    "name": "Krusbär",
    "calories": 38,
    "protein": 0.6,
    "fat": 0.8,
    "carbs": 5.7
  },
  {
    "name": "Physalis",
    "calories": 57,
    "protein": 0.6,
    "fat": 1.8,
    "carbs": 8.9
  },
  {
    "name": "Kumquat",
    "calories": 69,
    "protein": 0.7,
    "fat": 0.5,
    "carbs": 12.9
  },
  {
    "name": "Kvitten",
    "calories": 63,
    "protein": 0.1,
    "fat": 0.4,
    "carbs": 13.1
  },
  {
    "name": "Surkörsbär",
    "calories": 61,
    "protein": 0.1,
    "fat": 0.9,
    "carbs": 13.3
  },
  {
    "name": "Sötkörsbär",
    "calories": 69,
    "protein": 0.1,
    "fat": 1.1,
    "carbs": 14.7
  },
  {
    "name": "Lime",
    "calories": 47,
    "protein": 0.2,
    "fat": 0.7,
    "carbs": 10.3
  },
  {
    "name": "Lingon",
    "calories": 56,
    "protein": 0.7,
    "fat": 0.5,
    "carbs": 10.7
  },
  {
    "name": "Mango",
    "calories": 56,
    "protein": 0.6,
    "fat": 0.7,
    "carbs": 11.3
  },
  {
    "name": "Banan kokbanan",
    "calories": 136,
    "protein": 0.4,
    "fat": 1.3,
    "carbs": 30.4
  },
  {
    "name": "Nektarin",
    "calories": 53,
    "protein": 0.3,
    "fat": 0.9,
    "carbs": 10.9
  },
  {
    "name": "Papaya",
    "calories": 48,
    "protein": 0.6,
    "fat": 0.8,
    "carbs": 8.9
  },
  {
    "name": "Paradisäpple",
    "calories": 81,
    "protein": 0.3,
    "fat": 0.4,
    "carbs": 17.9
  },
  {
    "name": "Passionsfrukt",
    "calories": 87,
    "protein": 0.7,
    "fat": 2.2,
    "carbs": 12.9
  },
  {
    "name": "Persika nektarin",
    "calories": 43,
    "protein": 0.1,
    "fat": 0.7,
    "carbs": 8.6
  },
  {
    "name": "Sharon",
    "calories": 65,
    "protein": 0.2,
    "fat": 0.4,
    "carbs": 14.3
  },
  {
    "name": "Plommon",
    "calories": 47,
    "protein": 0,
    "fat": 0.5,
    "carbs": 10.2
  },
  {
    "name": "Päron",
    "calories": 54,
    "protein": 0.1,
    "fat": 0.3,
    "carbs": 11.5
  },
  {
    "name": "Tranbär",
    "calories": 46,
    "protein": 0.2,
    "fat": 0.4,
    "carbs": 8.9
  },
  {
    "name": "Vinbär röda",
    "calories": 48,
    "protein": 0.2,
    "fat": 1.2,
    "carbs": 8.7
  },
  {
    "name": "Vinbär svarta",
    "calories": 68,
    "protein": 1.1,
    "fat": 1.4,
    "carbs": 10.2
  },
  {
    "name": "Vindruvor",
    "calories": 70,
    "protein": 0.2,
    "fat": 0.6,
    "carbs": 15.6
  },
  {
    "name": "Äpple m. skal",
    "calories": 48,
    "protein": 0,
    "fat": 0,
    "carbs": 10.6
  },
  {
    "name": "Äpple u. skal ",
    "calories": 57,
    "protein": 0.1,
    "fat": 0,
    "carbs": 13.4
  },
  {
    "name": "Hallon frysvara",
    "calories": 38,
    "protein": 0.5,
    "fat": 1,
    "carbs": 5.4
  },
  {
    "name": "Björnbär frysvara",
    "calories": 58,
    "protein": 0.5,
    "fat": 1,
    "carbs": 8.8
  },
  {
    "name": "Björnbär m. socker frysvara",
    "calories": 69,
    "protein": 0.5,
    "fat": 1,
    "carbs": 12
  },
  {
    "name": "Jordgubbar frysvara",
    "calories": 33,
    "protein": 0.3,
    "fat": 0.5,
    "carbs": 6.4
  },
  {
    "name": "Hallon blåbär frysvara",
    "calories": 44,
    "protein": 0.7,
    "fat": 1,
    "carbs": 6.6
  },
  {
    "name": "Apelsinskal",
    "calories": 104,
    "protein": 0.2,
    "fat": 1.5,
    "carbs": 21.8
  },
  {
    "name": "Aprikos torkad",
    "calories": 190,
    "protein": 0.5,
    "fat": 2.2,
    "carbs": 41
  },
  {
    "name": "Banan torkad",
    "calories": 374,
    "protein": 1.8,
    "fat": 3.9,
    "carbs": 80.8
  },
  {
    "name": "Blåbär torkade",
    "calories": 303,
    "protein": 2.4,
    "fat": 1.7,
    "carbs": 63.8
  },
  {
    "name": "Citronskal",
    "calories": 64,
    "protein": 0.3,
    "fat": 1.5,
    "carbs": 11.9
  },
  {
    "name": "Dadlar torkade",
    "calories": 321,
    "protein": 0.6,
    "fat": 2.4,
    "carbs": 71.9
  },
  {
    "name": "Fikon torkade",
    "calories": 269,
    "protein": 1.2,
    "fat": 3.1,
    "carbs": 55.9
  },
  {
    "name": "Katrinplommon torkade",
    "calories": 219,
    "protein": 0.3,
    "fat": 2.3,
    "carbs": 48.6
  },
  {
    "name": "Nypon torkat u. frön",
    "calories": 328,
    "protein": 1.4,
    "fat": 3.7,
    "carbs": 68.4
  },
  {
    "name": "Nyponsoppapulver berikad",
    "calories": 384,
    "protein": 0.2,
    "fat": 0.7,
    "carbs": 91.1
  },
  {
    "name": "Persika torkad",
    "calories": 252,
    "protein": 0.8,
    "fat": 3.6,
    "carbs": 52.9
  },
  {
    "name": "Päron torkade",
    "calories": 282,
    "protein": 0.6,
    "fat": 1.9,
    "carbs": 63.4
  },
  {
    "name": "Russin",
    "calories": 285,
    "protein": 0.5,
    "fat": 1.9,
    "carbs": 64.4
  },
  {
    "name": "Äpple torkat",
    "calories": 257,
    "protein": 0.3,
    "fat": 0.9,
    "carbs": 57.2
  },
  {
    "name": "Frukt torkad",
    "calories": 266,
    "protein": 0.5,
    "fat": 3.3,
    "carbs": 56.8
  },
  {
    "name": "Papaya torkad",
    "calories": 263,
    "protein": 0.6,
    "fat": 3.4,
    "carbs": 57.6
  },
  {
    "name": "Ananas konserv. m. juice",
    "calories": 62,
    "protein": 0.1,
    "fat": 0.4,
    "carbs": 14.2
  },
  {
    "name": "Ananas konserv. m. sockerlag",
    "calories": 86,
    "protein": 0.1,
    "fat": 0.4,
    "carbs": 20.2
  },
  {
    "name": "Aprikos konserv. m. juice",
    "calories": 52,
    "protein": 0,
    "fat": 0.6,
    "carbs": 11.4
  },
  {
    "name": "Aprikos konserv. m. sockerlag",
    "calories": 118,
    "protein": 0.1,
    "fat": 0.5,
    "carbs": 27.7
  },
  {
    "name": "Körsbär surkörsbär konserv. m. sockerlag",
    "calories": 94,
    "protein": 0.1,
    "fat": 0.7,
    "carbs": 21.5
  },
  {
    "name": "Persika konserv. m. sockerlag",
    "calories": 83,
    "protein": 0.1,
    "fat": 0.4,
    "carbs": 19.5
  },
  {
    "name": "Plommon konserv. m. sockerlag",
    "calories": 94,
    "protein": 0.1,
    "fat": 0.4,
    "carbs": 21.8
  },
  {
    "name": "Päron konserv. m. lättsockrad lag",
    "calories": 60,
    "protein": 0,
    "fat": 0.2,
    "carbs": 13.8
  },
  {
    "name": "Päron konserv. m. sockerlag",
    "calories": 77,
    "protein": 0.1,
    "fat": 0.2,
    "carbs": 17.6
  },
  {
    "name": "Äpple konserv.",
    "calories": 69,
    "protein": 0.5,
    "fat": 0.2,
    "carbs": 14.9
  },
  {
    "name": "Grapefrukt konserv. m. lättsockrad lag",
    "calories": 63,
    "protein": 0.1,
    "fat": 0.6,
    "carbs": 14.6
  },
  {
    "name": "Fruktcocktail konserv. m. sockerlag",
    "calories": 81,
    "protein": 0,
    "fat": 0.4,
    "carbs": 18.9
  },
  {
    "name": "Mandarin konserv. m. lättsockrad lag",
    "calories": 65,
    "protein": 0.1,
    "fat": 0.4,
    "carbs": 14.6
  },
  {
    "name": "Mango konserv. m. sockerlag",
    "calories": 99,
    "protein": 0.1,
    "fat": 0.3,
    "carbs": 23.3
  },
  {
    "name": "Apelsinsallad",
    "calories": 107,
    "protein": 4.5,
    "fat": 1.6,
    "carbs": 14.1
  },
  {
    "name": "Frukt bär konserv. osötad el. sötningsm.",
    "calories": 35,
    "protein": 0.1,
    "fat": 0.4,
    "carbs": 7.6
  },
  {
    "name": "Fruktsallad",
    "calories": 56,
    "protein": 0.3,
    "fat": 0.6,
    "carbs": 11.8
  },
  {
    "name": "Apelsinjuice färskpressad",
    "calories": 48,
    "protein": 0.2,
    "fat": 0.7,
    "carbs": 10.6
  },
  {
    "name": "Apelsinjuice konc. frysvara",
    "calories": 165,
    "protein": 0.2,
    "fat": 2.4,
    "carbs": 37.5
  },
  {
    "name": "Apelsinjuice drickf.",
    "calories": 39,
    "protein": 0.1,
    "fat": 0.7,
    "carbs": 8.6
  },
  {
    "name": "Citronjuice färskpressad",
    "calories": 29,
    "protein": 0,
    "fat": 0.6,
    "carbs": 6.5
  },
  {
    "name": "Citronjuice konc. konserv.",
    "calories": 32,
    "protein": 0.3,
    "fat": 0.4,
    "carbs": 6.8
  },
  {
    "name": "Småcitrusjuice färskpressad",
    "calories": 44,
    "protein": 0.2,
    "fat": 0.5,
    "carbs": 9.9
  },
  {
    "name": "Grapefruktjuice färskpressad",
    "calories": 45,
    "protein": 0.1,
    "fat": 0.6,
    "carbs": 10.2
  },
  {
    "name": "Limejuice färskpressad",
    "calories": 40,
    "protein": 0.1,
    "fat": 0.4,
    "carbs": 9.1
  },
  {
    "name": "Risgrynsgröt lättmjölk fett ca 1%",
    "calories": 79,
    "protein": 1.3,
    "fat": 3.2,
    "carbs": 13.3
  },
  {
    "name": "Risgrynsgröt",
    "calories": 86,
    "protein": 2.1,
    "fat": 3.2,
    "carbs": 13.3
  },
  {
    "name": "Limejuice konc. konserv.",
    "calories": 28,
    "protein": 0.2,
    "fat": 0.2,
    "carbs": 6.2
  },
  {
    "name": "Druvjuice konserv. drickf.",
    "calories": 63,
    "protein": 0,
    "fat": 0.6,
    "carbs": 14.6
  },
  {
    "name": "Äppeljuice drickf.",
    "calories": 40,
    "protein": 0,
    "fat": 0.2,
    "carbs": 9.7
  },
  {
    "name": "Ananasjuice konserv. drickf.",
    "calories": 55,
    "protein": 0.1,
    "fat": 0.3,
    "carbs": 12.8
  },
  {
    "name": "Apelsinjuice pastöriserad drickf.",
    "calories": 43,
    "protein": 0.1,
    "fat": 0.6,
    "carbs": 9.8
  },
  {
    "name": "Juice",
    "calories": 40,
    "protein": 0.1,
    "fat": 0.6,
    "carbs": 8.9
  },
  {
    "name": "Aprikosnektar pastöriserad drickf.",
    "calories": 58,
    "protein": 0.1,
    "fat": 0.3,
    "carbs": 13.1
  },
  {
    "name": "Persikonektar pastöriserad drickf.",
    "calories": 55,
    "protein": 0,
    "fat": 0.3,
    "carbs": 13
  },
  {
    "name": "Katrinplommondryck konserv. drickf.",
    "calories": 70,
    "protein": 0,
    "fat": 0.6,
    "carbs": 15.5
  },
  {
    "name": "Havredryck choklad fett 1,5%  berikad",
    "calories": 71,
    "protein": 1.6,
    "fat": 1.2,
    "carbs": 12.3
  },
  {
    "name": "Bovetegröt m. russin",
    "calories": 106,
    "protein": 0.6,
    "fat": 2,
    "carbs": 22.2
  },
  {
    "name": "Grahamsgröt",
    "calories": 75,
    "protein": 0.4,
    "fat": 2.4,
    "carbs": 13.6
  },
  {
    "name": "Havregrynsgröt fullkorn",
    "calories": 66,
    "protein": 1.2,
    "fat": 1.7,
    "carbs": 11.3
  },
  {
    "name": "Molinogröt grahamsmjöl m. torkad frukt linfrö",
    "calories": 89,
    "protein": 2.5,
    "fat": 2.4,
    "carbs": 12.4
  },
  {
    "name": "Frukostflingor ris puffat rostat osötat",
    "calories": 383,
    "protein": 0.9,
    "fat": 6,
    "carbs": 86
  },
  {
    "name": "Rågkross ångprep. fullkorn",
    "calories": 326,
    "protein": 2.5,
    "fat": 9,
    "carbs": 57.2
  },
  {
    "name": "Kornmjölsgröt",
    "calories": 63,
    "protein": 0.6,
    "fat": 1.7,
    "carbs": 11.9
  },
  {
    "name": "Mannagrynsgröt",
    "calories": 79,
    "protein": 1.8,
    "fat": 4.3,
    "carbs": 11
  },
  {
    "name": "Kruskagröt fullkorn m. havregryn vetekli russin",
    "calories": 66,
    "protein": 0.8,
    "fat": 1.5,
    "carbs": 11.7
  },
  {
    "name": "Rågmjölsgröt",
    "calories": 75,
    "protein": 0.4,
    "fat": 1.9,
    "carbs": 13.6
  },
  {
    "name": "Stuvning vit",
    "calories": 101,
    "protein": 5.6,
    "fat": 4.4,
    "carbs": 8.2
  },
  {
    "name": "Välling fullkorn berikad",
    "calories": 70,
    "protein": 1.9,
    "fat": 3.6,
    "carbs": 9.2
  },
  {
    "name": "Havrevälling hemlagad",
    "calories": 78,
    "protein": 1.5,
    "fat": 2.9,
    "carbs": 12.7
  },
  {
    "name": "Mannagrynsvälling hemlagad",
    "calories": 68,
    "protein": 1.7,
    "fat": 3.8,
    "carbs": 9.1
  },
  {
    "name": "Välling berikad",
    "calories": 64,
    "protein": 1.7,
    "fat": 3.3,
    "carbs": 8.6
  },
  {
    "name": "Havredryck fett 1,5% berikad",
    "calories": 48,
    "protein": 1.5,
    "fat": 1,
    "carbs": 7.1
  },
  {
    "name": "Havregryn fullkorn",
    "calories": 375,
    "protein": 7,
    "fat": 9.5,
    "carbs": 64.1
  },
  {
    "name": "Fiberhavregryn fullkorn havre m. vetekli",
    "calories": 371,
    "protein": 7.3,
    "fat": 10,
    "carbs": 60.5
  },
  {
    "name": "Havrekli",
    "calories": 356,
    "protein": 7.4,
    "fat": 15.1,
    "carbs": 48.4
  },
  {
    "name": "Korngryn ångprep. fullkorn",
    "calories": 351,
    "protein": 3.1,
    "fat": 9.2,
    "carbs": 65.4
  },
  {
    "name": "Frukostflingor majs osötad berikad typ cornflakes",
    "calories": 380,
    "protein": 0.9,
    "fat": 8,
    "carbs": 82.5
  },
  {
    "name": "Vetekross ångprep. fullkorn",
    "calories": 328,
    "protein": 2,
    "fat": 10.2,
    "carbs": 61
  },
  {
    "name": "Vetegroddar",
    "calories": 349,
    "protein": 9.4,
    "fat": 27.5,
    "carbs": 31.4
  },
  {
    "name": "Vetekli",
    "calories": 277,
    "protein": 4.6,
    "fat": 14.9,
    "carbs": 25.5
  },
  {
    "name": "Frukostflingor vete fullkorn typ Weetabix",
    "calories": 366,
    "protein": 2.5,
    "fat": 11.3,
    "carbs": 68.4
  },
  {
    "name": "Kruskakli grovt vetekli",
    "calories": 269,
    "protein": 5,
    "fat": 12.7,
    "carbs": 24.9
  },
  {
    "name": "Frukostflingor flingblandning fullkorn typ basmüsli",
    "calories": 367,
    "protein": 4.1,
    "fat": 9.3,
    "carbs": 67.6
  },
  {
    "name": "Frukostflingor ris puffat m. socker berikad",
    "calories": 385,
    "protein": 1.2,
    "fat": 5.4,
    "carbs": 86.3
  },
  {
    "name": "Frukostflingor vetekli rostat m. kornmalt",
    "calories": 367,
    "protein": 3.6,
    "fat": 10.3,
    "carbs": 65.5
  },
  {
    "name": "Frukostflingor ris puffat rostat m. socker kakao",
    "calories": 393,
    "protein": 2.6,
    "fat": 4.6,
    "carbs": 85.2
  },
  {
    "name": "Frukostflingor müsli fullkorn m. frukt bär",
    "calories": 370,
    "protein": 6.6,
    "fat": 8.2,
    "carbs": 64.8
  },
  {
    "name": "Frukostflingor müsli flingblandning fullkorn m. frukt nötter socker el. honung",
    "calories": 369,
    "protein": 3.8,
    "fat": 8,
    "carbs": 70.6
  },
  {
    "name": "Frukostflingor vetekli fullkorn berikad",
    "calories": 364,
    "protein": 2.8,
    "fat": 9.9,
    "carbs": 66.8
  },
  {
    "name": "Frukostflingor fullkorn typ Specialflingor",
    "calories": 384,
    "protein": 2.2,
    "fat": 9,
    "carbs": 78.9
  },
  {
    "name": "Frukostflingor vete puffat m. honung berikad",
    "calories": 388,
    "protein": 3,
    "fat": 8.3,
    "carbs": 76.9
  },
  {
    "name": "Frukostflingor majs m. socker",
    "calories": 382,
    "protein": 0.9,
    "fat": 4.3,
    "carbs": 86.4
  },
  {
    "name": "Frukostflingor fullkorn m. socker berikad typ ringar",
    "calories": 379,
    "protein": 3.2,
    "fat": 7.7,
    "carbs": 75.5
  },
  {
    "name": "Fattiga riddare",
    "calories": 273,
    "protein": 13,
    "fat": 7.2,
    "carbs": 30.8
  },
  {
    "name": "Pannkaka tunn m. lättmjölk",
    "calories": 159,
    "protein": 6.3,
    "fat": 6.7,
    "carbs": 18
  },
  {
    "name": "Ugnspannkaka lättmjölk",
    "calories": 152,
    "protein": 7.2,
    "fat": 6.1,
    "carbs": 15.2
  },
  {
    "name": "Ugnspannkaka mellanmjölk",
    "calories": 159,
    "protein": 8,
    "fat": 6.1,
    "carbs": 15.2
  },
  {
    "name": "Våffla m. ägg",
    "calories": 248,
    "protein": 16.1,
    "fat": 5.2,
    "carbs": 20.2
  },
  {
    "name": "Våffla u. ägg",
    "calories": 322,
    "protein": 24.8,
    "fat": 3.3,
    "carbs": 21.4
  },
  {
    "name": "Fläskpannkaka",
    "calories": 198,
    "protein": 12.1,
    "fat": 7.6,
    "carbs": 14.5
  },
  {
    "name": "Räkcrêpe m. mellanmjölk vispgrädde fyllning 44% hemlagad",
    "calories": 149,
    "protein": 7.8,
    "fat": 8,
    "carbs": 11.3
  },
  {
    "name": "Räkcrêpe värmd fyllning 37% frysvara",
    "calories": 175,
    "protein": 8,
    "fat": 6.5,
    "carbs": 18.9
  },
  {
    "name": "Champinjoncrêpe m. mellanmjölk vispgrädde veg. hemlagad",
    "calories": 166,
    "protein": 9.9,
    "fat": 6.5,
    "carbs": 12.4
  },
  {
    "name": "Baguette m. salami brieost soltorkad tomat sallad",
    "calories": 240,
    "protein": 13.4,
    "fat": 9.3,
    "carbs": 19.7
  },
  {
    "name": "Ciabatta m. mozzarella soltorkad tomat sallad",
    "calories": 191,
    "protein": 5.9,
    "fat": 7.9,
    "carbs": 25.1
  },
  {
    "name": "Bagel m. rökt lax färskost sallad",
    "calories": 212,
    "protein": 7,
    "fat": 9,
    "carbs": 26.8
  },
  {
    "name": "Champinjoncrêpe värmd veg. frysvara",
    "calories": 163,
    "protein": 6.8,
    "fat": 5.4,
    "carbs": 19
  },
  {
    "name": "Crêpefyllning m. spenat färskost fetaost skinka",
    "calories": 130,
    "protein": 9.1,
    "fat": 10.3,
    "carbs": 1.7
  },
  {
    "name": "Crêpes pannkaka tunn fylld",
    "calories": 163,
    "protein": 11.8,
    "fat": 10.4,
    "carbs": 3.5
  },
  {
    "name": "Vårrulle värmd frysvara",
    "calories": 217,
    "protein": 10.8,
    "fat": 6.9,
    "carbs": 22.4
  },
  {
    "name": "Vårrulle värmd tillagad på restaurang",
    "calories": 316,
    "protein": 23.8,
    "fat": 6.6,
    "carbs": 18.7
  },
  {
    "name": "Deg matpaj gräddad",
    "calories": 445,
    "protein": 30.3,
    "fat": 4.6,
    "carbs": 38
  },
  {
    "name": "Pirog u. fyllning gräddad",
    "calories": 436,
    "protein": 29.9,
    "fat": 5.9,
    "carbs": 35.5
  },
  {
    "name": "Deg smulpaj gräddad",
    "calories": 481,
    "protein": 27.8,
    "fat": 4.7,
    "carbs": 52.2
  },
  {
    "name": "Paj m. köttfärs",
    "calories": 236,
    "protein": 15.6,
    "fat": 11.2,
    "carbs": 12.3
  },
  {
    "name": "Paj m. kyckling bacon",
    "calories": 225,
    "protein": 15.3,
    "fat": 9.3,
    "carbs": 11.9
  },
  {
    "name": "Pirog m. köttfärs",
    "calories": 243,
    "protein": 13.1,
    "fat": 9.6,
    "carbs": 19.9
  },
  {
    "name": "Pizza m. skinka champinjoner lök sardeller hemlagad",
    "calories": 209,
    "protein": 8.7,
    "fat": 9.4,
    "carbs": 22.2
  },
  {
    "name": "Paj m. köttfärs värmd frysvara",
    "calories": 344,
    "protein": 22.1,
    "fat": 9.9,
    "carbs": 26.1
  },
  {
    "name": "Pirog m. kött värmd frysvara",
    "calories": 295,
    "protein": 13.6,
    "fat": 8.8,
    "carbs": 33.5
  },
  {
    "name": "Pizza Capricciosa m. rökt skinka värmd kylvara el. frysvara",
    "calories": 248,
    "protein": 10.1,
    "fat": 11.5,
    "carbs": 27
  },
  {
    "name": "Pizza Capricciosa m. rökt skinka champinjon restaurang",
    "calories": 267,
    "protein": 13.4,
    "fat": 11,
    "carbs": 25
  },
  {
    "name": "Pizza Pepperoni m. rökt korv värmd frysvara",
    "calories": 235,
    "protein": 7.8,
    "fat": 9.1,
    "carbs": 30.5
  },
  {
    "name": "Pizza pan pizza m. rökt griskött värmd frysvara",
    "calories": 280,
    "protein": 13.2,
    "fat": 13.1,
    "carbs": 26.5
  },
  {
    "name": "Pizza pan pizza m. rökt griskött restaurang",
    "calories": 238,
    "protein": 9.2,
    "fat": 11.4,
    "carbs": 26.3
  },
  {
    "name": "Paj m. ost skinka värmd frysvara",
    "calories": 296,
    "protein": 18.7,
    "fat": 11.5,
    "carbs": 20.5
  },
  {
    "name": "Paj m. lax spenat",
    "calories": 178,
    "protein": 9.9,
    "fat": 8.3,
    "carbs": 13.5
  },
  {
    "name": "Pizza m. räkor musslor hemlagad",
    "calories": 237,
    "protein": 11.1,
    "fat": 10.7,
    "carbs": 22.6
  },
  {
    "name": "Vol-au-vent m. räkstuvning",
    "calories": 249,
    "protein": 14,
    "fat": 6.3,
    "carbs": 24
  },
  {
    "name": "Paj m. skaldjur värmd frysvara",
    "calories": 306,
    "protein": 19.6,
    "fat": 10.4,
    "carbs": 22
  },
  {
    "name": "Pizza Marinara m. skaldjur restaurang",
    "calories": 258,
    "protein": 12.7,
    "fat": 12.9,
    "carbs": 22.2
  },
  {
    "name": "Pizza veg. hemlagad",
    "calories": 179,
    "protein": 8,
    "fat": 6.4,
    "carbs": 19.1
  },
  {
    "name": "Pizza Margherita m. ost tomatsås hemlagad",
    "calories": 246,
    "protein": 10.5,
    "fat": 9,
    "carbs": 27.6
  },
  {
    "name": "Kycklingburgare m. bröd tillbehör",
    "calories": 228,
    "protein": 10.1,
    "fat": 10.7,
    "carbs": 22.8
  },
  {
    "name": "Fiskburgare m. bröd tillbehör",
    "calories": 280,
    "protein": 13.1,
    "fat": 12.4,
    "carbs": 27.3
  },
  {
    "name": "Baguette m. rostbiff potatissallad sallad",
    "calories": 197,
    "protein": 5.6,
    "fat": 6.6,
    "carbs": 28.4
  },
  {
    "name": "Baguette grov m. skaldjur tonfisk smögenröra sallad",
    "calories": 189,
    "protein": 6.1,
    "fat": 5.7,
    "carbs": 26.2
  },
  {
    "name": "Baguette grov m. ost skinka sallad lättmajonnäs",
    "calories": 184,
    "protein": 4.6,
    "fat": 7.7,
    "carbs": 25.9
  },
  {
    "name": "Bagel m. salami färskost sallad oliv",
    "calories": 166,
    "protein": 7.5,
    "fat": 5.9,
    "carbs": 17.2
  },
  {
    "name": "Sandwich m. räkor ägg sallad majonnäs",
    "calories": 295,
    "protein": 19.7,
    "fat": 7.3,
    "carbs": 21.6
  },
  {
    "name": "Sandwich m. rökt kalkon färskost soltorkad tomat sallad",
    "calories": 180,
    "protein": 5.3,
    "fat": 10.3,
    "carbs": 21.2
  },
  {
    "name": "Sandwich m. salami färskost sallad",
    "calories": 164,
    "protein": 6.4,
    "fat": 9.1,
    "carbs": 16.2
  },
  {
    "name": "Tunnbrödsrulle m. pastrami potatis sallad majonnäs",
    "calories": 159,
    "protein": 7.8,
    "fat": 5.4,
    "carbs": 15.6
  },
  {
    "name": "Wrap vetetortilla m. ris köttfärs majs ost",
    "calories": 142,
    "protein": 3.3,
    "fat": 7.9,
    "carbs": 19.3
  },
  {
    "name": "Wrap vetetortilla fajitas m. kyckling gräddfil sallad",
    "calories": 136,
    "protein": 7.1,
    "fat": 5.7,
    "carbs": 11.1
  },
  {
    "name": "Wrap vetetortilla enchilada m. köttfärs majschips ost sallad paprika tomat tomatsås",
    "calories": 170,
    "protein": 10.2,
    "fat": 6.7,
    "carbs": 11.7
  },
  {
    "name": "Falafel m. pitabröd sallad sesamsås pepperoni",
    "calories": 150,
    "protein": 5.7,
    "fat": 5.2,
    "carbs": 17.3
  },
  {
    "name": "Paj m. ost skinka mellanmjölk matlagningsgrädde hemlagad",
    "calories": 286,
    "protein": 19.8,
    "fat": 11.4,
    "carbs": 15
  },
  {
    "name": "Wrap vetetortilla m. fetaost oliver sallad vitlöksdressing",
    "calories": 175,
    "protein": 7.5,
    "fat": 5.1,
    "carbs": 20.1
  },
  {
    "name": "Matmuffins grov fullkorn m. getost fårost broccoli spenat soltorkade tomater",
    "calories": 292,
    "protein": 16,
    "fat": 9.5,
    "carbs": 26
  },
  {
    "name": "Pizzapålägg m. tomatsås skinka champinjoner hårdost",
    "calories": 153,
    "protein": 9.5,
    "fat": 10.8,
    "carbs": 5.3
  },
  {
    "name": "Paj m. ost skinka mellanmjölk hemlagad",
    "calories": 235,
    "protein": 15.6,
    "fat": 10,
    "carbs": 13.3
  },
  {
    "name": "Smörgåstårta el. landgång",
    "calories": 237,
    "protein": 15.5,
    "fat": 8.7,
    "carbs": 15.1
  },
  {
    "name": "Råris kokt m. salt",
    "calories": 107,
    "protein": 0.9,
    "fat": 2.5,
    "carbs": 21.3
  },
  {
    "name": "Rismjöl vitt",
    "calories": 358,
    "protein": 0.5,
    "fat": 5.8,
    "carbs": 80.2
  },
  {
    "name": "Risdiet flingor",
    "calories": 371,
    "protein": 1.1,
    "fat": 7,
    "carbs": 80.9
  },
  {
    "name": "Ris kinesiskt asiatiskt kokt u. salt tillagad på restaurang",
    "calories": 144,
    "protein": 1.2,
    "fat": 2.7,
    "carbs": 30.1
  },
  {
    "name": "Ris vildris okokt",
    "calories": 360,
    "protein": 1.1,
    "fat": 14.7,
    "carbs": 68.7
  },
  {
    "name": "Ris vildris kokt m. salt",
    "calories": 102,
    "protein": 0.3,
    "fat": 4,
    "carbs": 19.5
  },
  {
    "name": "Nudlar glasnudlar okokta",
    "calories": 350,
    "protein": 0.1,
    "fat": 0.2,
    "carbs": 85.6
  },
  {
    "name": "Vinbladsdolma m. ris konserv. veg.",
    "calories": 162,
    "protein": 11.3,
    "fat": 2.5,
    "carbs": 11.5
  },
  {
    "name": "Bovete hela el. krossade korn",
    "calories": 353,
    "protein": 2.5,
    "fat": 9.6,
    "carbs": 70
  },
  {
    "name": "Durra el. andra sorghumarter mjöl fullkorn",
    "calories": 351,
    "protein": 4.7,
    "fat": 10.3,
    "carbs": 61.4
  },
  {
    "name": "Hirs hela el. krossade korn fullkorn",
    "calories": 352,
    "protein": 2.9,
    "fat": 10.5,
    "carbs": 68.4
  },
  {
    "name": "Mannagryn",
    "calories": 351,
    "protein": 1.3,
    "fat": 10.1,
    "carbs": 72.1
  },
  {
    "name": "Bulgur",
    "calories": 353,
    "protein": 1.3,
    "fat": 12.3,
    "carbs": 68.2
  },
  {
    "name": "Bulgur kokt",
    "calories": 129,
    "protein": 1.2,
    "fat": 4.3,
    "carbs": 23.1
  },
  {
    "name": "Couscous",
    "calories": 361,
    "protein": 0.6,
    "fat": 12.8,
    "carbs": 72.4
  },
  {
    "name": "Couscous tillagad",
    "calories": 108,
    "protein": 0.2,
    "fat": 3.8,
    "carbs": 21.8
  },
  {
    "name": "Korngryn ångprep. fullkorn kokt m. salt",
    "calories": 80,
    "protein": 0.4,
    "fat": 1.8,
    "carbs": 13.6
  },
  {
    "name": "Hirs kokt m. salt fullkorn",
    "calories": 97,
    "protein": 0.8,
    "fat": 2.9,
    "carbs": 18.9
  },
  {
    "name": "Majsgryn polenta kokt m. salt",
    "calories": 68,
    "protein": 0.4,
    "fat": 1.7,
    "carbs": 13.4
  },
  {
    "name": "Apelsinris",
    "calories": 95,
    "protein": 3.7,
    "fat": 2,
    "carbs": 12.8
  },
  {
    "name": "Ris à la Malta m. grädde fett 40%",
    "calories": 132,
    "protein": 6.3,
    "fat": 2.9,
    "carbs": 15.6
  },
  {
    "name": "Risgrynskaka risgrynspudding",
    "calories": 142,
    "protein": 7.5,
    "fat": 4.1,
    "carbs": 14.5
  },
  {
    "name": "Rismål fett 6%",
    "calories": 154,
    "protein": 6.4,
    "fat": 2.8,
    "carbs": 20.8
  },
  {
    "name": "Rismål lätt fett 1,5%",
    "calories": 103,
    "protein": 1.5,
    "fat": 2.1,
    "carbs": 19.9
  },
  {
    "name": "Paella",
    "calories": 147,
    "protein": 6,
    "fat": 11,
    "carbs": 11.9
  },
  {
    "name": "Nudelsoppa m. risnudlar curry sesamolja",
    "calories": 52,
    "protein": 0.7,
    "fat": 0.7,
    "carbs": 10.3
  },
  {
    "name": "Pasta okokt",
    "calories": 358,
    "protein": 1.3,
    "fat": 11.9,
    "carbs": 71.5
  },
  {
    "name": "Pasta kokt u. salt",
    "calories": 128,
    "protein": 0.5,
    "fat": 4.2,
    "carbs": 25.8
  },
  {
    "name": "Pasta fullkorn okokt",
    "calories": 345,
    "protein": 1.5,
    "fat": 11,
    "carbs": 66.6
  },
  {
    "name": "Pasta färsk m. ägg kokt u. salt",
    "calories": 132,
    "protein": 1.6,
    "fat": 5.3,
    "carbs": 22.8
  },
  {
    "name": "Stuvade makaroner",
    "calories": 150,
    "protein": 3.5,
    "fat": 6.7,
    "carbs": 22.1
  },
  {
    "name": "Pastagratäng makaronipudding",
    "calories": 129,
    "protein": 4.6,
    "fat": 7.9,
    "carbs": 13.4
  },
  {
    "name": "Spagetti m. köttfärssås",
    "calories": 128,
    "protein": 3.3,
    "fat": 6.7,
    "carbs": 17
  },
  {
    "name": "Ravioli m. sås värmd frysvara el. konserv.",
    "calories": 106,
    "protein": 3.5,
    "fat": 3.8,
    "carbs": 14.7
  },
  {
    "name": "Tortellini m. kött kokt",
    "calories": 157,
    "protein": 4.3,
    "fat": 5.6,
    "carbs": 22.2
  },
  {
    "name": "Lasagne m. spenat chèvre veg. ",
    "calories": 144,
    "protein": 7.1,
    "fat": 6.7,
    "carbs": 12.1
  },
  {
    "name": "Pastagratäng makaronipudding veg.",
    "calories": 123,
    "protein": 3.9,
    "fat": 6.4,
    "carbs": 15
  },
  {
    "name": "Lasagne värmd frysvara",
    "calories": 140,
    "protein": 5.9,
    "fat": 6.6,
    "carbs": 14.4
  },
  {
    "name": "Nudlar äggnudlar okokta",
    "calories": 377,
    "protein": 4.2,
    "fat": 14,
    "carbs": 68.2
  },
  {
    "name": "Tortellini m. ostfyllning kokt",
    "calories": 186,
    "protein": 5.3,
    "fat": 7.2,
    "carbs": 25.7
  },
  {
    "name": "Nudelsoppa olika smaker kryddad",
    "calories": 81,
    "protein": 3.4,
    "fat": 1.9,
    "carbs": 9.4
  },
  {
    "name": "Bondbönor torkade",
    "calories": 318,
    "protein": 1.7,
    "fat": 25,
    "carbs": 41.9
  },
  {
    "name": "Bruna bönor torkade",
    "calories": 317,
    "protein": 1.5,
    "fat": 22,
    "carbs": 45.1
  },
  {
    "name": "Kidney bönor torkade",
    "calories": 326,
    "protein": 1.8,
    "fat": 19.9,
    "carbs": 48.6
  },
  {
    "name": "Röda bönor torkade kokta u. salt",
    "calories": 108,
    "protein": 0.5,
    "fat": 7.8,
    "carbs": 14.5
  },
  {
    "name": "Vita bönor torkade",
    "calories": 319,
    "protein": 1.6,
    "fat": 22,
    "carbs": 45.7
  },
  {
    "name": "Vita bönor torkade kokta u. salt",
    "calories": 108,
    "protein": 0.6,
    "fat": 7.8,
    "carbs": 14.2
  },
  {
    "name": "Kikärtor torkade",
    "calories": 331,
    "protein": 5.1,
    "fat": 18.8,
    "carbs": 39.6
  },
  {
    "name": "Mungbönor torkade kokta u. salt",
    "calories": 112,
    "protein": 0.7,
    "fat": 8.6,
    "carbs": 14.5
  },
  {
    "name": "Linser torkade",
    "calories": 339,
    "protein": 0.8,
    "fat": 24.4,
    "carbs": 52.5
  },
  {
    "name": "Mungbönor torkade",
    "calories": 322,
    "protein": 1.1,
    "fat": 22.5,
    "carbs": 46.1
  },
  {
    "name": "Sojabönor torkade",
    "calories": 410,
    "protein": 19.4,
    "fat": 37.8,
    "carbs": 10.2
  },
  {
    "name": "Sojabönor torkade kokta u. salt",
    "calories": 128,
    "protein": 5.7,
    "fat": 11,
    "carbs": 5.8
  },
  {
    "name": "Vignabönor svartögda bönor torkade",
    "calories": 336,
    "protein": 1.5,
    "fat": 23,
    "carbs": 52.1
  },
  {
    "name": "Vignabönor svartögda bönor torkade kokta u. salt",
    "calories": 69,
    "protein": 0.3,
    "fat": 5.1,
    "carbs": 9.1
  },
  {
    "name": "Gröna el. gula ärtor torkade",
    "calories": 317,
    "protein": 1,
    "fat": 21.5,
    "carbs": 49.2
  },
  {
    "name": "Ärtsoppa m. fläsk hemlagad",
    "calories": 85,
    "protein": 2.1,
    "fat": 6.4,
    "carbs": 8.9
  },
  {
    "name": "Gryta chili con carne",
    "calories": 103,
    "protein": 3.9,
    "fat": 7.5,
    "carbs": 7.8
  },
  {
    "name": "Ärtsoppa fläsk tillagad konserv. m. vatten",
    "calories": 85,
    "protein": 2.3,
    "fat": 6.1,
    "carbs": 7.1
  },
  {
    "name": "Vita bönor m. tomatsås konserv.",
    "calories": 95,
    "protein": 0.5,
    "fat": 5.1,
    "carbs": 15
  },
  {
    "name": "Bönsoppa vita bönor m. tomat veg. ",
    "calories": 51,
    "protein": 1.7,
    "fat": 2.5,
    "carbs": 4.9
  },
  {
    "name": "Linssoppa veg. ",
    "calories": 85,
    "protein": 0.3,
    "fat": 4.9,
    "carbs": 14.1
  },
  {
    "name": "Ärtsoppa veg.",
    "calories": 78,
    "protein": 0.3,
    "fat": 5.1,
    "carbs": 12
  },
  {
    "name": "Tofu fast",
    "calories": 70,
    "protein": 4.2,
    "fat": 6.6,
    "carbs": 1.2
  },
  {
    "name": "Sojamjöl fett ca 20%",
    "calories": 446,
    "protein": 23.5,
    "fat": 37,
    "carbs": 16
  },
  {
    "name": "Sojadryck",
    "calories": 34,
    "protein": 1.5,
    "fat": 3.1,
    "carbs": 1.9
  },
  {
    "name": "Miso sojabönspasta fermenterad",
    "calories": 208,
    "protein": 10.5,
    "fat": 9.7,
    "carbs": 15.5
  },
  {
    "name": "Sojasås",
    "calories": 57,
    "protein": 0,
    "fat": 7.5,
    "carbs": 6.6
  },
  {
    "name": "Sojasås söt",
    "calories": 193,
    "protein": 2.1,
    "fat": 4.3,
    "carbs": 38.5
  },
  {
    "name": "Korv veg. sojakorv konserv. fett 15%",
    "calories": 199,
    "protein": 15,
    "fat": 12,
    "carbs": 3.5
  },
  {
    "name": "Glass sojaglass mjölkfri fett 11%",
    "calories": 216,
    "protein": 11,
    "fat": 2.2,
    "carbs": 27
  },
  {
    "name": "Sojabönsbiff stekt",
    "calories": 180,
    "protein": 9.2,
    "fat": 7.2,
    "carbs": 15.6
  },
  {
    "name": "Korv veg. soja- och veteprotein tillagad typ grillkorv",
    "calories": 128,
    "protein": 1.7,
    "fat": 16.3,
    "carbs": 9.3
  },
  {
    "name": "Falafel kikärtsbiff friterad hemlagad",
    "calories": 158,
    "protein": 7.2,
    "fat": 6.8,
    "carbs": 11.6
  },
  {
    "name": "Lamm bog rå",
    "calories": 134,
    "protein": 5.9,
    "fat": 20.1,
    "carbs": 0
  },
  {
    "name": "Lamm kotlett rå",
    "calories": 230,
    "protein": 17.3,
    "fat": 19,
    "carbs": 0
  },
  {
    "name": "Lamm lägg rå",
    "calories": 137,
    "protein": 4.2,
    "fat": 24.5,
    "carbs": 0
  },
  {
    "name": "Lamm rygg el. hals rå",
    "calories": 177,
    "protein": 11.9,
    "fat": 17.6,
    "carbs": 0
  },
  {
    "name": "Lamm stek rå",
    "calories": 108,
    "protein": 2.6,
    "fat": 20.9,
    "carbs": 0
  },
  {
    "name": "Lamm färs rå fett 20%",
    "calories": 245,
    "protein": 19.7,
    "fat": 17.4,
    "carbs": 0
  },
  {
    "name": "Lamm tunnbringa rå",
    "calories": 184,
    "protein": 12.6,
    "fat": 17.8,
    "carbs": 0
  },
  {
    "name": "Lamm kotlett rå fett bortskuret",
    "calories": 103,
    "protein": 2.5,
    "fat": 20,
    "carbs": 0
  },
  {
    "name": "Hare kött rå",
    "calories": 115,
    "protein": 3.1,
    "fat": 21.5,
    "carbs": 0
  },
  {
    "name": "Hjort dovhjort bog rå",
    "calories": 106,
    "protein": 1.6,
    "fat": 22.5,
    "carbs": 0
  },
  {
    "name": "Hjort dovhjort stek rå",
    "calories": 98,
    "protein": 1,
    "fat": 22,
    "carbs": 0
  },
  {
    "name": "Hjort ryggbiff rå",
    "calories": 102,
    "protein": 1.2,
    "fat": 22.6,
    "carbs": 0
  },
  {
    "name": "Häst kött rå",
    "calories": 166,
    "protein": 10,
    "fat": 19,
    "carbs": 0
  },
  {
    "name": "Kalv bog rå",
    "calories": 106,
    "protein": 2.8,
    "fat": 19.9,
    "carbs": 0
  },
  {
    "name": "Kalv bringa rå",
    "calories": 186,
    "protein": 12.7,
    "fat": 18.1,
    "carbs": 0
  },
  {
    "name": "Kalv filé rå",
    "calories": 105,
    "protein": 2.7,
    "fat": 20,
    "carbs": 0
  },
  {
    "name": "Kalv fransyska rå",
    "calories": 108,
    "protein": 3.1,
    "fat": 19.9,
    "carbs": 0
  },
  {
    "name": "Kalv innanlår rå",
    "calories": 107,
    "protein": 2.5,
    "fat": 21,
    "carbs": 0
  },
  {
    "name": "Kalv kotlett rå",
    "calories": 122,
    "protein": 4.4,
    "fat": 20.5,
    "carbs": 0
  },
  {
    "name": "Kalv lägg rå",
    "calories": 98,
    "protein": 1.9,
    "fat": 20,
    "carbs": 0
  },
  {
    "name": "Kalv ytterlår rå",
    "calories": 117,
    "protein": 3.5,
    "fat": 21.2,
    "carbs": 0
  },
  {
    "name": "Kalv tunnbringa rå",
    "calories": 173,
    "protein": 11,
    "fat": 18.7,
    "carbs": 0
  },
  {
    "name": "Kalv högrev rå",
    "calories": 135,
    "protein": 6.4,
    "fat": 19.2,
    "carbs": 0
  },
  {
    "name": "Kanin kött rå",
    "calories": 125,
    "protein": 4,
    "fat": 22,
    "carbs": 0
  },
  {
    "name": "Nöt clubstek biff rå m. ben",
    "calories": 162,
    "protein": 9.3,
    "fat": 19.7,
    "carbs": 0
  },
  {
    "name": "Nöt ryggbiff rå",
    "calories": 123,
    "protein": 3.8,
    "fat": 21.8,
    "carbs": 0
  },
  {
    "name": "Nöt oxbringa rå",
    "calories": 205,
    "protein": 15.1,
    "fat": 17.6,
    "carbs": 0
  },
  {
    "name": "Nöt oxbringa rimmad rå",
    "calories": 205,
    "protein": 15.1,
    "fat": 17.6,
    "carbs": 0
  },
  {
    "name": "Nöt oxfilé rå",
    "calories": 124,
    "protein": 4.1,
    "fat": 21.7,
    "carbs": 0
  },
  {
    "name": "Nöt fransyska rå",
    "calories": 116,
    "protein": 3.5,
    "fat": 20.8,
    "carbs": 0
  },
  {
    "name": "Nöt färs rå fett 10%",
    "calories": 182,
    "protein": 11.3,
    "fat": 20.1,
    "carbs": 0
  },
  {
    "name": "Nöt högrev rå fett bortskuret",
    "calories": 145,
    "protein": 6.9,
    "fat": 20.6,
    "carbs": 0
  },
  {
    "name": "Nöt innanlår rå",
    "calories": 111,
    "protein": 1.6,
    "fat": 23.8,
    "carbs": 0
  },
  {
    "name": "Nöt lägg rå",
    "calories": 108,
    "protein": 2.8,
    "fat": 20.5,
    "carbs": 0
  },
  {
    "name": "Nöt bog el. märgpipa rå",
    "calories": 118,
    "protein": 3.7,
    "fat": 21,
    "carbs": 0
  },
  {
    "name": "Nöt rostbiff rå",
    "calories": 121,
    "protein": 3.2,
    "fat": 22.7,
    "carbs": 0
  },
  {
    "name": "Nöt rulle rimmad rå",
    "calories": 103,
    "protein": 1.8,
    "fat": 21.5,
    "carbs": 0
  },
  {
    "name": "Nöt ytterlår rå",
    "calories": 111,
    "protein": 2.8,
    "fat": 21.3,
    "carbs": 0
  },
  {
    "name": "Nöt entrecôte rå",
    "calories": 142,
    "protein": 6.1,
    "fat": 21.7,
    "carbs": 0
  },
  {
    "name": "Nöt grytbitar rå",
    "calories": 145,
    "protein": 6.9,
    "fat": 20.6,
    "carbs": 0
  },
  {
    "name": "Nöt kött hackebiff rå frysvara",
    "calories": 159,
    "protein": 8.8,
    "fat": 20,
    "carbs": 0
  },
  {
    "name": "Nöt färs rå fett 15%",
    "calories": 211,
    "protein": 15,
    "fat": 19.4,
    "carbs": 0
  },
  {
    "name": "Ren stek rå",
    "calories": 108,
    "protein": 1.8,
    "fat": 22.6,
    "carbs": 0
  },
  {
    "name": "Ren bog rå",
    "calories": 109,
    "protein": 1.6,
    "fat": 23.3,
    "carbs": 0
  },
  {
    "name": "Ren skav rå frysvara",
    "calories": 126,
    "protein": 4.9,
    "fat": 20.3,
    "carbs": 0
  },
  {
    "name": "Rådjur kött rå",
    "calories": 108,
    "protein": 1.2,
    "fat": 24,
    "carbs": 0
  },
  {
    "name": "Gris bog rå",
    "calories": 137,
    "protein": 7,
    "fat": 18.5,
    "carbs": 0
  },
  {
    "name": "Gris fläskfilé rå",
    "calories": 107,
    "protein": 2.6,
    "fat": 20.6,
    "carbs": 0
  },
  {
    "name": "Gris fläskkotlett rå fettkant 5 mm",
    "calories": 185,
    "protein": 12,
    "fat": 19.4,
    "carbs": 0
  },
  {
    "name": "Gris revbensspjäll rå",
    "calories": 193,
    "protein": 13.7,
    "fat": 17.7,
    "carbs": 0
  },
  {
    "name": "Gris fötter rå",
    "calories": 207,
    "protein": 12.6,
    "fat": 23.5,
    "carbs": 0
  },
  {
    "name": "Gris skinka julskinka rimmad rå fett ca 3%",
    "calories": 108,
    "protein": 3,
    "fat": 20.1,
    "carbs": 0
  },
  {
    "name": "Gris fläskben rå",
    "calories": 193,
    "protein": 13.7,
    "fat": 17.7,
    "carbs": 0
  },
  {
    "name": "Gris picnicbog rå",
    "calories": 121,
    "protein": 4.7,
    "fat": 19.5,
    "carbs": 0
  },
  {
    "name": "Gris grytbitar rå",
    "calories": 164,
    "protein": 9.7,
    "fat": 19.3,
    "carbs": 0
  },
  {
    "name": "Gris fläskkarré rå",
    "calories": 171,
    "protein": 11.2,
    "fat": 17.8,
    "carbs": 0
  },
  {
    "name": "Gris färs rå fett 20%",
    "calories": 242,
    "protein": 20,
    "fat": 16,
    "carbs": 0
  },
  {
    "name": "Gris bogbladsstek rå",
    "calories": 137,
    "protein": 7,
    "fat": 18.5,
    "carbs": 0
  },
  {
    "name": "Gris fläskkotlett rå fett bortskuret",
    "calories": 103,
    "protein": 1.7,
    "fat": 21.6,
    "carbs": 0
  },
  {
    "name": "Gris fläskkotlett rå fettkant 2 mm",
    "calories": 134,
    "protein": 6,
    "fat": 20,
    "carbs": 0
  },
  {
    "name": "Gris lägg putsad rå u. svål",
    "calories": 126,
    "protein": 5.2,
    "fat": 19.7,
    "carbs": 0
  },
  {
    "name": "Gris sidfläsk bit rå m. svål",
    "calories": 268,
    "protein": 22.4,
    "fat": 17.2,
    "carbs": 0
  },
  {
    "name": "Gris stekfläsk sida skiva rå m. svål",
    "calories": 252,
    "protein": 20.7,
    "fat": 17.1,
    "carbs": 0
  },
  {
    "name": "Gris flintastek rå m. svål",
    "calories": 191,
    "protein": 13,
    "fat": 18.8,
    "carbs": 0
  },
  {
    "name": "Gris skinka innanlår rå",
    "calories": 100,
    "protein": 1.8,
    "fat": 20.8,
    "carbs": 0
  },
  {
    "name": "Gris skinka fransyska rå",
    "calories": 101,
    "protein": 2.3,
    "fat": 19.8,
    "carbs": 0
  },
  {
    "name": "Gris skinka ytterlår rå",
    "calories": 123,
    "protein": 4.9,
    "fat": 19.7,
    "carbs": 0
  },
  {
    "name": "Gris sidfläsk el. stekfläsk skivor rimmat rå",
    "calories": 353,
    "protein": 34.6,
    "fat": 11.6,
    "carbs": 0
  },
  {
    "name": "Gris färs rå fett 8%",
    "calories": 144,
    "protein": 8,
    "fat": 18,
    "carbs": 0
  },
  {
    "name": "Älg skav rå frysvara",
    "calories": 123,
    "protein": 4.8,
    "fat": 19.8,
    "carbs": 0
  },
  {
    "name": "Nöt oxsvans rå fett bortskuret",
    "calories": 171,
    "protein": 10.1,
    "fat": 20,
    "carbs": 0
  },
  {
    "name": "Gris svål rå",
    "calories": 277,
    "protein": 20.5,
    "fat": 23.5,
    "carbs": 0
  },
  {
    "name": "Häst hamburgerkött rökt",
    "calories": 100,
    "protein": 1.7,
    "fat": 21,
    "carbs": 0
  },
  {
    "name": "Nöt saltkött rimmat kokt",
    "calories": 110,
    "protein": 2.1,
    "fat": 22.5,
    "carbs": 0
  },
  {
    "name": "Nöt kött rökt",
    "calories": 106,
    "protein": 2.8,
    "fat": 20,
    "carbs": 0
  },
  {
    "name": "Ren stek varmrökt",
    "calories": 123,
    "protein": 3.2,
    "fat": 23.1,
    "carbs": 0.1
  },
  {
    "name": "Ren kött torkat",
    "calories": 330,
    "protein": 17.6,
    "fat": 40,
    "carbs": 3
  },
  {
    "name": "Gris bacon rå",
    "calories": 344,
    "protein": 32.8,
    "fat": 13.4,
    "carbs": 0
  },
  {
    "name": "Gris bacon stekt",
    "calories": 412,
    "protein": 38.8,
    "fat": 17,
    "carbs": 0
  },
  {
    "name": "Gris bog konserv. gelé 6-8%",
    "calories": 116,
    "protein": 5.4,
    "fat": 16.6,
    "carbs": 0.2
  },
  {
    "name": "Gris kassler kotlettrad rökt",
    "calories": 106,
    "protein": 2.2,
    "fat": 20.7,
    "carbs": 0.5
  },
  {
    "name": "Gris skinka lufttorkad italiensk",
    "calories": 245,
    "protein": 12.4,
    "fat": 31.9,
    "carbs": 1.5
  },
  {
    "name": "Gris skinka rökt fett 6%",
    "calories": 138,
    "protein": 6,
    "fat": 21,
    "carbs": 0
  },
  {
    "name": "Gris skinka skivad rökt fett 1-3%",
    "calories": 99,
    "protein": 2.2,
    "fat": 18.4,
    "carbs": 1.3
  },
  {
    "name": "Gris sidfläsk rökt",
    "calories": 394,
    "protein": 37.5,
    "fat": 15.4,
    "carbs": 0
  },
  {
    "name": "Nöt kött konserv.",
    "calories": 218,
    "protein": 12.1,
    "fat": 27,
    "carbs": 0.4
  },
  {
    "name": "Nöt flankstek rå",
    "calories": 134,
    "protein": 5.1,
    "fat": 22,
    "carbs": 0
  },
  {
    "name": "Nöt ryggbiff stekt",
    "calories": 144,
    "protein": 4.5,
    "fat": 25.5,
    "carbs": 0
  },
  {
    "name": "Nöt entrecôte stekt",
    "calories": 165,
    "protein": 7.1,
    "fat": 25.2,
    "carbs": 0
  },
  {
    "name": "Gris bog stekt",
    "calories": 163,
    "protein": 8.3,
    "fat": 22,
    "carbs": 0
  },
  {
    "name": "Gris kött kokt m. salt",
    "calories": 179,
    "protein": 9.8,
    "fat": 22.7,
    "carbs": 0
  },
  {
    "name": "Gris fläskben kokt m. salt",
    "calories": 225,
    "protein": 15.9,
    "fat": 20.6,
    "carbs": 0
  },
  {
    "name": "Gris fläskfilé skiva stekt",
    "calories": 128,
    "protein": 3.1,
    "fat": 24.6,
    "carbs": 0
  },
  {
    "name": "Gris fläskkarré skiva stekt",
    "calories": 202,
    "protein": 13.2,
    "fat": 21,
    "carbs": 0
  },
  {
    "name": "Gris fläskkotlett stekt",
    "calories": 217,
    "protein": 14.1,
    "fat": 22.7,
    "carbs": 0
  },
  {
    "name": "Gris lägg kokt m. salt u. svål",
    "calories": 149,
    "protein": 6.2,
    "fat": 23.3,
    "carbs": 0
  },
  {
    "name": "Gris kött grillat",
    "calories": 179,
    "protein": 9.9,
    "fat": 22.7,
    "carbs": 0
  },
  {
    "name": "Rullsylta",
    "calories": 246,
    "protein": 19,
    "fat": 19.2,
    "carbs": 0
  },
  {
    "name": "Gris fötter kokta m. salt",
    "calories": 238,
    "protein": 14.5,
    "fat": 27,
    "carbs": 0
  },
  {
    "name": "Hare stek stekt",
    "calories": 141,
    "protein": 3.8,
    "fat": 26.4,
    "carbs": 0
  },
  {
    "name": "Kalv filé stekt",
    "calories": 123,
    "protein": 3.2,
    "fat": 23.5,
    "carbs": 0
  },
  {
    "name": "Kalv kotlett stekt",
    "calories": 143,
    "protein": 5.1,
    "fat": 24,
    "carbs": 0
  },
  {
    "name": "Kalv kött kokt m. salt",
    "calories": 186,
    "protein": 9.8,
    "fat": 24.1,
    "carbs": 0
  },
  {
    "name": "Kalv stek stekt",
    "calories": 126,
    "protein": 2.9,
    "fat": 24.6,
    "carbs": 0
  },
  {
    "name": "Lamm kotlett stekt",
    "calories": 231,
    "protein": 16.1,
    "fat": 22.1,
    "carbs": 0
  },
  {
    "name": "Lamm stek stekt",
    "calories": 119,
    "protein": 2.4,
    "fat": 24,
    "carbs": 0
  },
  {
    "name": "Nöt högrev kokt m. salt",
    "calories": 184,
    "protein": 8.8,
    "fat": 26.1,
    "carbs": 0
  },
  {
    "name": "Nöt stek el. grytstek kokt m. salt",
    "calories": 149,
    "protein": 4.5,
    "fat": 26.7,
    "carbs": 0
  },
  {
    "name": "Nöt oxbringa rimmad kokt u. salt",
    "calories": 252,
    "protein": 18.6,
    "fat": 21.6,
    "carbs": 0
  },
  {
    "name": "Oxrullad nöt stekt",
    "calories": 137,
    "protein": 3.8,
    "fat": 24.4,
    "carbs": 0.9
  },
  {
    "name": "Nöt rostbiff ugnsstekt",
    "calories": 141,
    "protein": 3.7,
    "fat": 26.4,
    "carbs": 0
  },
  {
    "name": "Gris revbensspjäll ugnsstekt grillat",
    "calories": 294,
    "protein": 24.4,
    "fat": 16.9,
    "carbs": 2.2
  },
  {
    "name": "Rådjur kött ugnsstekt",
    "calories": 132,
    "protein": 1.5,
    "fat": 29.4,
    "carbs": 0
  },
  {
    "name": "Ren kött kokt m. salt",
    "calories": 133,
    "protein": 2.1,
    "fat": 28.2,
    "carbs": 0
  },
  {
    "name": "Ren kött ugnsstekt",
    "calories": 132,
    "protein": 2.2,
    "fat": 27.7,
    "carbs": 0
  },
  {
    "name": "Älg stek ugnsstekt el. grillad",
    "calories": 132,
    "protein": 1.6,
    "fat": 27,
    "carbs": 1.8
  },
  {
    "name": "Gris fläskkarré tillagad u. sky",
    "calories": 224,
    "protein": 17.1,
    "fat": 18,
    "carbs": 0
  },
  {
    "name": "Gris skinkstek stekt u. sky frysvara",
    "calories": 164,
    "protein": 6.4,
    "fat": 26.5,
    "carbs": 0
  },
  {
    "name": "Nöt stek stekt u. sky frysvara",
    "calories": 135,
    "protein": 3.6,
    "fat": 25.5,
    "carbs": 0
  },
  {
    "name": "Nöt rostbiff tillagad ugnsrostad u. salt",
    "calories": 124,
    "protein": 3,
    "fat": 24,
    "carbs": 0
  },
  {
    "name": "Gris revbensspjäll tillagad u. sky",
    "calories": 283,
    "protein": 23.7,
    "fat": 18,
    "carbs": 0
  },
  {
    "name": "Gryta dillkött nöt m. sås",
    "calories": 114,
    "protein": 6.8,
    "fat": 8.2,
    "carbs": 4.9
  },
  {
    "name": "Biff stroganoff nöt",
    "calories": 150,
    "protein": 9.9,
    "fat": 13.1,
    "carbs": 1.9
  },
  {
    "name": "Rimmat sidfläsk el. stekfläsk stekt m. löksås",
    "calories": 199,
    "protein": 16.2,
    "fat": 6.5,
    "carbs": 7
  },
  {
    "name": "Rimmat sidfläsk panerat stekt",
    "calories": 373,
    "protein": 32,
    "fat": 14.1,
    "carbs": 7.8
  },
  {
    "name": "Fläskkotlett panerad stekt",
    "calories": 267,
    "protein": 18.1,
    "fat": 19.2,
    "carbs": 6.7
  },
  {
    "name": "Schnitzel gris stekt",
    "calories": 212,
    "protein": 10.2,
    "fat": 19.6,
    "carbs": 9.7
  },
  {
    "name": "Gryta gulasch nöt",
    "calories": 75,
    "protein": 2.8,
    "fat": 8.3,
    "carbs": 3.6
  },
  {
    "name": "Gryta osso buco kalvläggsgryta ",
    "calories": 85,
    "protein": 3.6,
    "fat": 7.9,
    "carbs": 4
  },
  {
    "name": "Köttsoppa nöt",
    "calories": 39,
    "protein": 1.1,
    "fat": 4.5,
    "carbs": 2.3
  },
  {
    "name": "Gryta lamm m. lök tomat",
    "calories": 100,
    "protein": 4.9,
    "fat": 8.4,
    "carbs": 3.7
  },
  {
    "name": "Pepparrotskött nöt m. lök morot sås",
    "calories": 134,
    "protein": 7.8,
    "fat": 13.7,
    "carbs": 2
  },
  {
    "name": "Renskav brynt m. matfett salt",
    "calories": 213,
    "protein": 13.8,
    "fat": 22.3,
    "carbs": 0
  },
  {
    "name": "Gryta renskavsgryta",
    "calories": 138,
    "protein": 7.6,
    "fat": 8.2,
    "carbs": 8.7
  },
  {
    "name": "Skinksås",
    "calories": 119,
    "protein": 6.6,
    "fat": 8.4,
    "carbs": 6.3
  },
  {
    "name": "Gryta kalops nöt hemlagad",
    "calories": 77,
    "protein": 3.8,
    "fat": 7.2,
    "carbs": 3
  },
  {
    "name": "Biff stroganoff nöt frysvara",
    "calories": 108,
    "protein": 4.4,
    "fat": 11.9,
    "carbs": 4.8
  },
  {
    "name": "Gryta dillkött nöt m. sås frysvara",
    "calories": 101,
    "protein": 5,
    "fat": 11,
    "carbs": 2.7
  },
  {
    "name": "Kinesisk rätt gris friterat m. grönsaker",
    "calories": 185,
    "protein": 9.4,
    "fat": 6.8,
    "carbs": 18
  },
  {
    "name": "Gryta chop suey fläskfilé tillagad på restaurang",
    "calories": 96,
    "protein": 5.7,
    "fat": 7.2,
    "carbs": 3.1
  },
  {
    "name": "Nasi Goreng gris tillagad på restaurang",
    "calories": 176,
    "protein": 7.2,
    "fat": 7.9,
    "carbs": 18.8
  },
  {
    "name": "Frikassé kalv frysvara",
    "calories": 126,
    "protein": 6.2,
    "fat": 14.8,
    "carbs": 2.5
  },
  {
    "name": "Gryta kalops nöt frysvara",
    "calories": 123,
    "protein": 6,
    "fat": 14.2,
    "carbs": 2.8
  },
  {
    "name": "Köttsoppa nöt tillagad konserv. m. vatten",
    "calories": 16,
    "protein": 0.4,
    "fat": 1.5,
    "carbs": 1
  },
  {
    "name": "Kycklingburgare rå fett ca 7% frysvara",
    "calories": 168,
    "protein": 7,
    "fat": 15,
    "carbs": 11
  },
  {
    "name": "Köttbullar kyckling stekta fett 12% frysvara",
    "calories": 224,
    "protein": 12,
    "fat": 16,
    "carbs": 13
  },
  {
    "name": "Hamburgare nöt rå frysvara",
    "calories": 221,
    "protein": 17.3,
    "fat": 14.7,
    "carbs": 2
  },
  {
    "name": "Köttbullar frysvara",
    "calories": 217,
    "protein": 15.6,
    "fat": 12.3,
    "carbs": 6.5
  },
  {
    "name": "Pannbiff rå frysvara",
    "calories": 204,
    "protein": 14.4,
    "fat": 13.2,
    "carbs": 5.6
  },
  {
    "name": "Burgare veg. soja- och veteprotein tillagad",
    "calories": 172,
    "protein": 7.7,
    "fat": 16.3,
    "carbs": 6.7
  },
  {
    "name": "Biff à la Lindström stekt hemlagad",
    "calories": 148,
    "protein": 8.1,
    "fat": 12.3,
    "carbs": 6.1
  },
  {
    "name": "Köttbullar blandfärs stekta hemlagade",
    "calories": 177,
    "protein": 10,
    "fat": 15.8,
    "carbs": 5.8
  },
  {
    "name": "Köttfärslimpa ugnsstekt hemlagad",
    "calories": 142,
    "protein": 7.7,
    "fat": 14,
    "carbs": 4
  },
  {
    "name": "Köttfärssås i gjutjärn hemlagad",
    "calories": 100,
    "protein": 5.1,
    "fat": 8.3,
    "carbs": 4.7
  },
  {
    "name": "Pannbiff gris stekt",
    "calories": 191,
    "protein": 12.7,
    "fat": 14.8,
    "carbs": 4.3
  },
  {
    "name": "Hamburgare nöt stekt fett 10%",
    "calories": 225,
    "protein": 14,
    "fat": 25,
    "carbs": 0
  },
  {
    "name": "Hamburgare nöt stekt fett 15%",
    "calories": 251,
    "protein": 17.5,
    "fat": 23.8,
    "carbs": 0
  },
  {
    "name": "Järpar blandfärs stekta",
    "calories": 204,
    "protein": 14.6,
    "fat": 13.1,
    "carbs": 5.1
  },
  {
    "name": "Frikadeller kalv",
    "calories": 153,
    "protein": 7,
    "fat": 17.6,
    "carbs": 4.5
  },
  {
    "name": "Wallenbergare kalv stekt",
    "calories": 245,
    "protein": 16.7,
    "fat": 16.7,
    "carbs": 6.9
  },
  {
    "name": "Köttfärssås nöt",
    "calories": 116,
    "protein": 6.5,
    "fat": 9.2,
    "carbs": 4.7
  },
  {
    "name": "Köttfärssoppa",
    "calories": 49,
    "protein": 2.2,
    "fat": 4.4,
    "carbs": 2.3
  },
  {
    "name": "Köttbullar nöt stekta",
    "calories": 171,
    "protein": 9.7,
    "fat": 16.6,
    "carbs": 4.1
  },
  {
    "name": "Köttbullar gris stekta",
    "calories": 183,
    "protein": 12.2,
    "fat": 14.3,
    "carbs": 4.1
  },
  {
    "name": "Köttfärssås gris",
    "calories": 136,
    "protein": 9.5,
    "fat": 7.6,
    "carbs": 4.7
  },
  {
    "name": "Nöt färs stekt tacokryddad hemlagad kryddning",
    "calories": 245,
    "protein": 16.9,
    "fat": 22.2,
    "carbs": 0.9
  },
  {
    "name": "Pannbiff lamm stekt",
    "calories": 215,
    "protein": 15.4,
    "fat": 15,
    "carbs": 4.2
  },
  {
    "name": "Köttfärslimpa gris ugnsstekt hemlagad",
    "calories": 183,
    "protein": 12.2,
    "fat": 14.2,
    "carbs": 4.2
  },
  {
    "name": "Köttfärslimpa blandfärs ugnsstekt hemlagad",
    "calories": 191,
    "protein": 12.6,
    "fat": 15,
    "carbs": 4.2
  },
  {
    "name": "Pannbiff nöt stekt",
    "calories": 178,
    "protein": 10.1,
    "fat": 17.3,
    "carbs": 4.3
  },
  {
    "name": "Pannbiff blandfärs stekt",
    "calories": 198,
    "protein": 13.1,
    "fat": 15.7,
    "carbs": 4.3
  },
  {
    "name": "Parisersmörgås",
    "calories": 184,
    "protein": 9.4,
    "fat": 11.4,
    "carbs": 12.7
  },
  {
    "name": "Pannbiff älg stekt",
    "calories": 113,
    "protein": 2.6,
    "fat": 17.9,
    "carbs": 4
  },
  {
    "name": "Köttfärssås älg",
    "calories": 82,
    "protein": 2.4,
    "fat": 9.9,
    "carbs": 4.6
  },
  {
    "name": "Taco tacoskal m. köttfärs grönsaker ost",
    "calories": 147,
    "protein": 9.8,
    "fat": 7.9,
    "carbs": 6.6
  },
  {
    "name": "Biff à la Lindström stekt frysvara",
    "calories": 192,
    "protein": 12.7,
    "fat": 12.8,
    "carbs": 5.8
  },
  {
    "name": "Gryta biff m. bambuskott tillagad på restaurang",
    "calories": 97,
    "protein": 5.8,
    "fat": 8.2,
    "carbs": 2.4
  },
  {
    "name": "Hamburgare nöt stekt frysvara",
    "calories": 260,
    "protein": 20.3,
    "fat": 14,
    "carbs": 5.4
  },
  {
    "name": "Kålpudding m. vitkål köttfärs",
    "calories": 96,
    "protein": 5,
    "fat": 6.6,
    "carbs": 5.7
  },
  {
    "name": "Köttfärssås frysvara el. konserv.",
    "calories": 101,
    "protein": 5.8,
    "fat": 6.1,
    "carbs": 5.7
  },
  {
    "name": "Kåldolmar stekta u. sås frysvara",
    "calories": 99,
    "protein": 5.9,
    "fat": 6,
    "carbs": 4.6
  },
  {
    "name": "Kåldolmar stekta värmda m. sås frysvara",
    "calories": 93,
    "protein": 5.1,
    "fat": 4.8,
    "carbs": 6.4
  },
  {
    "name": "Köttbullar stekta m. sås frysvara",
    "calories": 145,
    "protein": 10,
    "fat": 8,
    "carbs": 5.9
  },
  {
    "name": "Pannbiff stekt frysvara",
    "calories": 213,
    "protein": 14.1,
    "fat": 14,
    "carbs": 7.6
  },
  {
    "name": "Anka bröst rå",
    "calories": 119,
    "protein": 4.3,
    "fat": 19.9,
    "carbs": 0
  },
  {
    "name": "Anka rå m. skinn",
    "calories": 396,
    "protein": 39.5,
    "fat": 11.5,
    "carbs": 0
  },
  {
    "name": "Duva rå",
    "calories": 137,
    "protein": 7.5,
    "fat": 17.5,
    "carbs": 0
  },
  {
    "name": "Duva rå m. skinn",
    "calories": 287,
    "protein": 24,
    "fat": 18.5,
    "carbs": 0
  },
  {
    "name": "Fasan rå",
    "calories": 127,
    "protein": 3.6,
    "fat": 23.5,
    "carbs": 0
  },
  {
    "name": "Fasan rå m. skinn",
    "calories": 174,
    "protein": 9.3,
    "fat": 22.5,
    "carbs": 0
  },
  {
    "name": "Gås rå",
    "calories": 156,
    "protein": 7.1,
    "fat": 23,
    "carbs": 0
  },
  {
    "name": "Gås rå m. skinn",
    "calories": 362,
    "protein": 33.6,
    "fat": 15.9,
    "carbs": 0
  },
  {
    "name": "Höna rå",
    "calories": 141,
    "protein": 6.3,
    "fat": 21,
    "carbs": 0
  },
  {
    "name": "Höna rå m. skinn",
    "calories": 262,
    "protein": 21,
    "fat": 18.7,
    "carbs": 0
  },
  {
    "name": "Kalkon filé rå",
    "calories": 106,
    "protein": 0.9,
    "fat": 24.1,
    "carbs": 0
  },
  {
    "name": "Kalkon rå m. skinn",
    "calories": 126,
    "protein": 4.6,
    "fat": 21,
    "carbs": 0
  },
  {
    "name": "Kyckling kött rå u. skinn",
    "calories": 115,
    "protein": 3.1,
    "fat": 21.5,
    "carbs": 0
  },
  {
    "name": "Kyckling kött rå m. skinn",
    "calories": 170,
    "protein": 11,
    "fat": 18,
    "carbs": 0
  },
  {
    "name": "Kyckling bröstfilé rå m. skinn",
    "calories": 148,
    "protein": 6.9,
    "fat": 21.5,
    "carbs": 0
  },
  {
    "name": "Kyckling lår rå m. skinn",
    "calories": 196,
    "protein": 13.5,
    "fat": 18.9,
    "carbs": 0
  },
  {
    "name": "Kyckling vinge rå m. skinn",
    "calories": 186,
    "protein": 12.2,
    "fat": 19.2,
    "carbs": 0
  },
  {
    "name": "Ripa rå",
    "calories": 113,
    "protein": 2,
    "fat": 23.5,
    "carbs": 0
  },
  {
    "name": "Kyckling bröstfilé färsk stekt u. skinn",
    "calories": 116,
    "protein": 2.5,
    "fat": 23,
    "carbs": 0
  },
  {
    "name": "Kyckling ben rå m. skinn",
    "calories": 198,
    "protein": 13.5,
    "fat": 19.3,
    "carbs": 0
  },
  {
    "name": "Kyckling bröstfilé strimlad wokad u. skinn m. rapsolja",
    "calories": 164,
    "protein": 5,
    "fat": 29.4,
    "carbs": 0
  },
  {
    "name": "Kyckling bröstfilé rå u. skinn",
    "calories": 104,
    "protein": 1.2,
    "fat": 23.1,
    "carbs": 0
  },
  {
    "name": "Kyckling lår rå u. skinn",
    "calories": 114,
    "protein": 3.9,
    "fat": 19.6,
    "carbs": 0
  },
  {
    "name": "Kyckling delar marinerade m. skinn",
    "calories": 175,
    "protein": 12,
    "fat": 17,
    "carbs": 0
  },
  {
    "name": "Struts filé rå",
    "calories": 109,
    "protein": 1.7,
    "fat": 23,
    "carbs": 0
  },
  {
    "name": "Struts filé stekt",
    "calories": 170,
    "protein": 5.1,
    "fat": 30,
    "carbs": 0.6
  },
  {
    "name": "Kalkon kokt",
    "calories": 139,
    "protein": 5.6,
    "fat": 22,
    "carbs": 0
  },
  {
    "name": "Duva m. skinn stekt m. salt",
    "calories": 344,
    "protein": 28.7,
    "fat": 22.2,
    "carbs": 0
  },
  {
    "name": "Kyckling kokt m. salt",
    "calories": 171,
    "protein": 4.6,
    "fat": 32,
    "carbs": 0
  },
  {
    "name": "Kyckling grillad m. skinn",
    "calories": 214,
    "protein": 13.8,
    "fat": 22.6,
    "carbs": 0
  },
  {
    "name": "Fasan stekt m. skinn",
    "calories": 189,
    "protein": 8.1,
    "fat": 28.9,
    "carbs": 0
  },
  {
    "name": "Gås stekt m. skinn",
    "calories": 324,
    "protein": 24.7,
    "fat": 25.9,
    "carbs": 0
  },
  {
    "name": "Höna kokt m. salt",
    "calories": 206,
    "protein": 9.2,
    "fat": 30.7,
    "carbs": 0
  },
  {
    "name": "Kalkon stekt m. skinn",
    "calories": 161,
    "protein": 5.9,
    "fat": 26.8,
    "carbs": 0
  },
  {
    "name": "Kyckling bröstfilé m. skinn stekt m. salt",
    "calories": 187,
    "protein": 8.7,
    "fat": 27.1,
    "carbs": 0
  },
  {
    "name": "Ripa stekt",
    "calories": 144,
    "protein": 2.6,
    "fat": 30,
    "carbs": 0
  },
  {
    "name": "Kyckling kött kokt stekt grillat",
    "calories": 146,
    "protein": 5.8,
    "fat": 23.3,
    "carbs": 0
  },
  {
    "name": "Kalkon rökt",
    "calories": 133,
    "protein": 4,
    "fat": 24,
    "carbs": 0
  },
  {
    "name": "Kyckling marinerad grillad m. skinn",
    "calories": 167,
    "protein": 9.8,
    "fat": 19.7,
    "carbs": 0
  },
  {
    "name": "Kyckling friterad m. frityrsmet",
    "calories": 310,
    "protein": 21.9,
    "fat": 22.5,
    "carbs": 5.8
  },
  {
    "name": "Ostsufflé",
    "calories": 170,
    "protein": 11.1,
    "fat": 10.9,
    "carbs": 6.7
  },
  {
    "name": "Bondomelett",
    "calories": 122,
    "protein": 6.5,
    "fat": 6.7,
    "carbs": 8.8
  },
  {
    "name": "Braxen rå",
    "calories": 103,
    "protein": 4,
    "fat": 16.7,
    "carbs": 0
  },
  {
    "name": "Regnbågslax rå",
    "calories": 160,
    "protein": 9.6,
    "fat": 18.6,
    "carbs": 0
  },
  {
    "name": "Sej rå",
    "calories": 82,
    "protein": 0.5,
    "fat": 19.1,
    "carbs": 0
  },
  {
    "name": "Hälleflundra vild rå",
    "calories": 139,
    "protein": 8.6,
    "fat": 15.5,
    "carbs": 0
  },
  {
    "name": "Kycklingsoppa thailändsk",
    "calories": 70,
    "protein": 3.5,
    "fat": 7.8,
    "carbs": 1.5
  },
  {
    "name": "Kyckling nugget friterad tillagad på restaurang",
    "calories": 221,
    "protein": 10.4,
    "fat": 16.8,
    "carbs": 14.2
  },
  {
    "name": "Kycklingsoppa tillagad redd pulver m. vatten mjölk",
    "calories": 51,
    "protein": 2.4,
    "fat": 1.9,
    "carbs": 5.1
  },
  {
    "name": "Kycklingsoppa tillagad redd pulver m. vatten",
    "calories": 40,
    "protein": 1.3,
    "fat": 0.6,
    "carbs": 5.8
  },
  {
    "name": "Kalvbuljong pasta el. pulver storhushåll",
    "calories": 222,
    "protein": 8,
    "fat": 18.8,
    "carbs": 18.5
  },
  {
    "name": "Kalvbuljong pasta el. pulver lågsalt storhushåll",
    "calories": 292,
    "protein": 5.5,
    "fat": 25,
    "carbs": 35
  },
  {
    "name": "Köttbuljong pasta el. pulver storhushåll",
    "calories": 201,
    "protein": 5,
    "fat": 15.2,
    "carbs": 23.4
  },
  {
    "name": "Köttbuljong pasta el. pulver lågsalt storhushåll",
    "calories": 239,
    "protein": 4.5,
    "fat": 10,
    "carbs": 39
  },
  {
    "name": "Skinkbuljong pasta el. pulver storhushåll",
    "calories": 249,
    "protein": 13,
    "fat": 19.5,
    "carbs": 13.5
  },
  {
    "name": "Hönsbuljong pasta el. pulver lågsalt storhushåll",
    "calories": 320,
    "protein": 15,
    "fat": 14,
    "carbs": 32
  },
  {
    "name": "Hönsbuljong pasta el. pulver storhushåll",
    "calories": 238,
    "protein": 12.7,
    "fat": 14.7,
    "carbs": 16.2
  },
  {
    "name": "Köttbuljong pulver tärning",
    "calories": 128,
    "protein": 3,
    "fat": 20,
    "carbs": 5
  },
  {
    "name": "Köttbuljong konserv. ätf.",
    "calories": 7,
    "protein": 0.2,
    "fat": 1.2,
    "carbs": 0
  },
  {
    "name": "Gelatinblad el. gelatinpulver",
    "calories": 350,
    "protein": 0.1,
    "fat": 86,
    "carbs": 0
  },
  {
    "name": "Köttbuljong tärning ätf.",
    "calories": 4,
    "protein": 0.1,
    "fat": 0.3,
    "carbs": 0.5
  },
  {
    "name": "Köttbuljong ätf.",
    "calories": 8,
    "protein": 0.2,
    "fat": 0.4,
    "carbs": 1.2
  },
  {
    "name": "Hönsbuljong ätf.",
    "calories": 5,
    "protein": 0.3,
    "fat": 0.3,
    "carbs": 0.2
  },
  {
    "name": "Ägg rått",
    "calories": 137,
    "protein": 9.7,
    "fat": 12.2,
    "carbs": 0.4
  },
  {
    "name": "Äggula rå",
    "calories": 319,
    "protein": 28.6,
    "fat": 15.6,
    "carbs": 0.6
  },
  {
    "name": "Äggvita rå",
    "calories": 45,
    "protein": 0,
    "fat": 10.8,
    "carbs": 0.2
  },
  {
    "name": "Fransk omelett m. grädde",
    "calories": 237,
    "protein": 21.5,
    "fat": 10.5,
    "carbs": 1.2
  },
  {
    "name": "Fransk omelett m. vatten",
    "calories": 173,
    "protein": 14.8,
    "fat": 10.1,
    "carbs": 0.3
  },
  {
    "name": "Sufflé gräddad u. fyllning veg.",
    "calories": 171,
    "protein": 11.4,
    "fat": 11.2,
    "carbs": 5.9
  },
  {
    "name": "Äggakaka",
    "calories": 125,
    "protein": 6.4,
    "fat": 6.9,
    "carbs": 9.9
  },
  {
    "name": "Ägg stekt",
    "calories": 188,
    "protein": 15,
    "fat": 13.3,
    "carbs": 0.5
  },
  {
    "name": "Skinklåda m. mjölk ost",
    "calories": 93,
    "protein": 3.6,
    "fat": 7.3,
    "carbs": 7.2
  },
  {
    "name": "Torsksufflé",
    "calories": 128,
    "protein": 3.2,
    "fat": 20.2,
    "carbs": 4.5
  },
  {
    "name": "Kolja rå",
    "calories": 79,
    "protein": 0,
    "fat": 19.4,
    "carbs": 0
  },
  {
    "name": "Kummel rå",
    "calories": 71,
    "protein": 0.4,
    "fat": 16.5,
    "carbs": 0
  },
  {
    "name": "Siklöja rå",
    "calories": 135,
    "protein": 6.5,
    "fat": 19,
    "carbs": 0
  },
  {
    "name": "Sill rå",
    "calories": 148,
    "protein": 9,
    "fat": 16.7,
    "carbs": 0
  },
  {
    "name": "Flundra rå",
    "calories": 94,
    "protein": 2.2,
    "fat": 18.3,
    "carbs": 0
  },
  {
    "name": "Strömming rå",
    "calories": 108,
    "protein": 4,
    "fat": 18,
    "carbs": 0
  },
  {
    "name": "Röding rå",
    "calories": 151,
    "protein": 7.9,
    "fat": 19.9,
    "carbs": 0
  },
  {
    "name": "Torsk rå",
    "calories": 78,
    "protein": 0.5,
    "fat": 18.2,
    "carbs": 0
  },
  {
    "name": "Vitling rå",
    "calories": 80,
    "protein": 0.6,
    "fat": 18.3,
    "carbs": 0
  },
  {
    "name": "Ål rå",
    "calories": 369,
    "protein": 32.5,
    "fat": 17.3,
    "carbs": 2.8
  },
  {
    "name": "Öring odlad rå",
    "calories": 166,
    "protein": 10,
    "fat": 19,
    "carbs": 0
  },
  {
    "name": "Pinklax rå",
    "calories": 105,
    "protein": 2,
    "fat": 21.4,
    "carbs": 0
  },
  {
    "name": "Piggvar rå",
    "calories": 83,
    "protein": 1.7,
    "fat": 16.7,
    "carbs": 0
  },
  {
    "name": "Sik urtagen varmrökt",
    "calories": 132,
    "protein": 5,
    "fat": 21.8,
    "carbs": 0
  },
  {
    "name": "Abborre rå",
    "calories": 86,
    "protein": 0.6,
    "fat": 19.8,
    "carbs": 0
  },
  {
    "name": "Lax odlad Norge fjordlax rå",
    "calories": 210,
    "protein": 14.1,
    "fat": 20.2,
    "carbs": 0.7
  },
  {
    "name": "Öring Sverige rå",
    "calories": 115,
    "protein": 2.9,
    "fat": 22,
    "carbs": 0
  },
  {
    "name": "Lake rå",
    "calories": 71,
    "protein": 0.4,
    "fat": 16.5,
    "carbs": 0
  },
  {
    "name": "Rödspätta rå",
    "calories": 56,
    "protein": 0.6,
    "fat": 12.4,
    "carbs": 0
  },
  {
    "name": "Sik rå",
    "calories": 90,
    "protein": 0.6,
    "fat": 20.9,
    "carbs": 0
  },
  {
    "name": "Makrill rå",
    "calories": 290,
    "protein": 25,
    "fat": 17,
    "carbs": 0
  },
  {
    "name": "Regnbågslax odlad rå",
    "calories": 106,
    "protein": 3.5,
    "fat": 18.1,
    "carbs": 0.4
  },
  {
    "name": "Gädda rå",
    "calories": 84,
    "protein": 0.2,
    "fat": 20.2,
    "carbs": 0
  },
  {
    "name": "Gös rå",
    "calories": 84,
    "protein": 0.2,
    "fat": 20.2,
    "carbs": 0
  },
  {
    "name": "Ansjovis skarpsill konserv. ",
    "calories": 215,
    "protein": 13.1,
    "fat": 12.5,
    "carbs": 11.8
  },
  {
    "name": "Böckling varmrökt",
    "calories": 199,
    "protein": 12.8,
    "fat": 21.2,
    "carbs": 0
  },
  {
    "name": "Fisk torkad",
    "calories": 333,
    "protein": 1.4,
    "fat": 79,
    "carbs": 0
  },
  {
    "name": "Lax kallrökt",
    "calories": 173,
    "protein": 9.8,
    "fat": 20,
    "carbs": 1.3
  },
  {
    "name": "Sardeller konserv.",
    "calories": 170,
    "protein": 10.3,
    "fat": 19.2,
    "carbs": 0.3
  },
  {
    "name": "Sardiner i olja konserv.",
    "calories": 284,
    "protein": 21.1,
    "fat": 24,
    "carbs": 0
  },
  {
    "name": "Sardiner i tomatsås konserv.",
    "calories": 217,
    "protein": 14.8,
    "fat": 20.5,
    "carbs": 0.6
  },
  {
    "name": "Saltsill rå",
    "calories": 245,
    "protein": 19,
    "fat": 19,
    "carbs": 0
  },
  {
    "name": "Saltströmming rå",
    "calories": 162,
    "protein": 7.5,
    "fat": 23.5,
    "carbs": 0
  },
  {
    "name": "Tonfisk i olja konserv. avrunnen",
    "calories": 189,
    "protein": 9.9,
    "fat": 24.9,
    "carbs": 0
  },
  {
    "name": "Ål varmrökt rundrökt",
    "calories": 347,
    "protein": 30.5,
    "fat": 19.1,
    "carbs": 0
  },
  {
    "name": "Tonfisk i vatten konserv. avrunnen",
    "calories": 106,
    "protein": 1,
    "fat": 24.1,
    "carbs": 0
  },
  {
    "name": "Makrill urtagen varmrökt",
    "calories": 296,
    "protein": 24.5,
    "fat": 19.4,
    "carbs": 0
  },
  {
    "name": "Lutfisk rå frysvara",
    "calories": 28,
    "protein": 0.3,
    "fat": 6.3,
    "carbs": 0
  },
  {
    "name": "Sill matjessill konserv.",
    "calories": 210,
    "protein": 11.5,
    "fat": 9.5,
    "carbs": 17.1
  },
  {
    "name": "Marulk rå",
    "calories": 65,
    "protein": 0.1,
    "fat": 15.8,
    "carbs": 0
  },
  {
    "name": "Makrill filé i olja konserv.",
    "calories": 324,
    "protein": 28,
    "fat": 18.9,
    "carbs": 0
  },
  {
    "name": "Saltsill urvattnad konserv.",
    "calories": 208,
    "protein": 16,
    "fat": 16.5,
    "carbs": 0
  },
  {
    "name": "Lax gravad",
    "calories": 166,
    "protein": 8.7,
    "fat": 18.8,
    "carbs": 3.1
  },
  {
    "name": "Lax rimmad",
    "calories": 148,
    "protein": 8.1,
    "fat": 18.8,
    "carbs": 0
  },
  {
    "name": "Böckling dubbelfilé varmrökt",
    "calories": 261,
    "protein": 20.8,
    "fat": 19,
    "carbs": 0
  },
  {
    "name": "Lax varmrökt urtagen",
    "calories": 220,
    "protein": 14.8,
    "fat": 21.9,
    "carbs": 0.1
  },
  {
    "name": "Makrill filé varmrökt",
    "calories": 327,
    "protein": 27.7,
    "fat": 20.1,
    "carbs": 0
  },
  {
    "name": "Regnbågslax kallrökt",
    "calories": 190,
    "protein": 12.1,
    "fat": 20.4,
    "carbs": 0
  },
  {
    "name": "Regnbågslax urtagen varmrökt",
    "calories": 157,
    "protein": 7.7,
    "fat": 21.9,
    "carbs": 0
  },
  {
    "name": "Röding urtagen varmrökt",
    "calories": 163,
    "protein": 8.6,
    "fat": 21.4,
    "carbs": 0
  },
  {
    "name": "Ål varmrökt flatrökt",
    "calories": 428,
    "protein": 40.2,
    "fat": 17.8,
    "carbs": 0
  },
  {
    "name": "Fiskpinnar stekta",
    "calories": 223,
    "protein": 12.1,
    "fat": 11.7,
    "carbs": 16.8
  },
  {
    "name": "Makrill filé i tomatsås konserv.",
    "calories": 186,
    "protein": 13.9,
    "fat": 11.7,
    "carbs": 3.9
  },
  {
    "name": "Surströmming",
    "calories": 82,
    "protein": 3.9,
    "fat": 11.8,
    "carbs": 0
  },
  {
    "name": "Lutfisk kokt",
    "calories": 28,
    "protein": 0.5,
    "fat": 5.9,
    "carbs": 0
  },
  {
    "name": "Saltsill panerad stekt hemlagad",
    "calories": 289,
    "protein": 24.2,
    "fat": 14.1,
    "carbs": 4
  },
  {
    "name": "Strömmingsflundra panerad stekt hemlagad",
    "calories": 249,
    "protein": 19.2,
    "fat": 15.2,
    "carbs": 4.1
  },
  {
    "name": "Torsk filé panerad stekt hemlagad",
    "calories": 143,
    "protein": 6,
    "fat": 17.6,
    "carbs": 4.5
  },
  {
    "name": "Ål inkokt hemlagad",
    "calories": 382,
    "protein": 36,
    "fat": 15.8,
    "carbs": 0
  },
  {
    "name": "Ål ugnsstekt hemlagad",
    "calories": 437,
    "protein": 40.5,
    "fat": 16.1,
    "carbs": 3.2
  },
  {
    "name": "Abborre kokt m. salt",
    "calories": 140,
    "protein": 1,
    "fat": 32.3,
    "carbs": 0
  },
  {
    "name": "Abborre filé panerad stekt",
    "calories": 195,
    "protein": 8.8,
    "fat": 22.3,
    "carbs": 6.3
  },
  {
    "name": "Fisk friterad",
    "calories": 212,
    "protein": 11.2,
    "fat": 15.4,
    "carbs": 12
  },
  {
    "name": "Regnbågslax inkokt m. salt",
    "calories": 191,
    "protein": 11.5,
    "fat": 22.2,
    "carbs": 0
  },
  {
    "name": "Regnbågslax panerad stekt",
    "calories": 230,
    "protein": 14.6,
    "fat": 19.1,
    "carbs": 5.7
  },
  {
    "name": "Gädda kokt m. salt",
    "calories": 137,
    "protein": 0.4,
    "fat": 32.9,
    "carbs": 0
  },
  {
    "name": "Gädda panerad stekt",
    "calories": 193,
    "protein": 8.4,
    "fat": 22.6,
    "carbs": 6.3
  },
  {
    "name": "Hälleflundra kokt m. salt",
    "calories": 168,
    "protein": 10.3,
    "fat": 18.8,
    "carbs": 0
  },
  {
    "name": "Hälleflundra panerad stekt",
    "calories": 214,
    "protein": 13.9,
    "fat": 16.3,
    "carbs": 5.7
  },
  {
    "name": "Kolja kokt m. salt",
    "calories": 130,
    "protein": 0,
    "fat": 31.9,
    "carbs": 0
  },
  {
    "name": "Kolja panerad stekt m. salt",
    "calories": 189,
    "protein": 8.2,
    "fat": 21.9,
    "carbs": 6.3
  },
  {
    "name": "Lax stekt m. salt",
    "calories": 221,
    "protein": 13.5,
    "fat": 24.1,
    "carbs": 0.8
  },
  {
    "name": "Lax kokt m. salt",
    "calories": 246,
    "protein": 16.6,
    "fat": 23.7,
    "carbs": 0.8
  },
  {
    "name": "Makrill kokt m. salt",
    "calories": 332,
    "protein": 28.6,
    "fat": 19.4,
    "carbs": 0
  },
  {
    "name": "Makrill panerad stekt",
    "calories": 324,
    "protein": 25.9,
    "fat": 17.5,
    "carbs": 5.7
  },
  {
    "name": "Makrill stekt m. salt",
    "calories": 295,
    "protein": 24,
    "fat": 20.4,
    "carbs": 0
  },
  {
    "name": "Piggvar kokt m. salt",
    "calories": 137,
    "protein": 2.8,
    "fat": 27.6,
    "carbs": 0
  },
  {
    "name": "Rödspätta filé kokt m. salt",
    "calories": 97,
    "protein": 1,
    "fat": 21.5,
    "carbs": 0
  },
  {
    "name": "Rödspätta filé panerad stekt m. salt",
    "calories": 169,
    "protein": 9.1,
    "fat": 15.1,
    "carbs": 6.5
  },
  {
    "name": "Rödspätta filé stekt m. salt",
    "calories": 79,
    "protein": 0.9,
    "fat": 17.6,
    "carbs": 0
  },
  {
    "name": "Sik kokt m. salt",
    "calories": 145,
    "protein": 1,
    "fat": 33.7,
    "carbs": 0
  },
  {
    "name": "Sik panerad stekt",
    "calories": 198,
    "protein": 8.8,
    "fat": 23.3,
    "carbs": 6.3
  },
  {
    "name": "Saltsill kokt",
    "calories": 246,
    "protein": 19,
    "fat": 19.5,
    "carbs": 0
  },
  {
    "name": "Sill panerad stekt m. salt",
    "calories": 219,
    "protein": 13.7,
    "fat": 17.4,
    "carbs": 6
  },
  {
    "name": "Strömming kokt m. salt",
    "calories": 131,
    "protein": 4.9,
    "fat": 21.8,
    "carbs": 0
  },
  {
    "name": "Ättikströmming",
    "calories": 220,
    "protein": 15.2,
    "fat": 12.2,
    "carbs": 8.4
  },
  {
    "name": "Kräftströmming",
    "calories": 104,
    "protein": 3.7,
    "fat": 16.5,
    "carbs": 1
  },
  {
    "name": "Strömming filé stekt m. salt",
    "calories": 122,
    "protein": 3.9,
    "fat": 21.6,
    "carbs": 0
  },
  {
    "name": "Tonfisk stekt m. salt",
    "calories": 128,
    "protein": 0.8,
    "fat": 29.2,
    "carbs": 0.7
  },
  {
    "name": "Torsk filé kokt m. salt",
    "calories": 130,
    "protein": 0.8,
    "fat": 30.3,
    "carbs": 0
  },
  {
    "name": "Torsk panerad stekt",
    "calories": 189,
    "protein": 8.8,
    "fat": 20.8,
    "carbs": 6.3
  },
  {
    "name": "Torsk stekt",
    "calories": 108,
    "protein": 0.7,
    "fat": 25.2,
    "carbs": 0
  },
  {
    "name": "Vitling kokt m. salt",
    "calories": 132,
    "protein": 1,
    "fat": 30.2,
    "carbs": 0
  },
  {
    "name": "Vitling filé panerad stekt",
    "calories": 190,
    "protein": 8.9,
    "fat": 20.8,
    "carbs": 6.3
  },
  {
    "name": "Fisk varmrökt",
    "calories": 226,
    "protein": 15.5,
    "fat": 21.7,
    "carbs": 0.1
  },
  {
    "name": "Fiskbullar konserv. u. buljong",
    "calories": 72,
    "protein": 2.3,
    "fat": 6.9,
    "carbs": 5.8
  },
  {
    "name": "Fiskbullar m. hummersås konserv. tillagad",
    "calories": 88,
    "protein": 4.4,
    "fat": 4.8,
    "carbs": 7.4
  },
  {
    "name": "Laxpastej lättrökt",
    "calories": 355,
    "protein": 30,
    "fat": 12,
    "carbs": 10
  },
  {
    "name": "Böcklingpastej",
    "calories": 364,
    "protein": 31,
    "fat": 13,
    "carbs": 9
  },
  {
    "name": "Fiskpudding m. ris hemlagad",
    "calories": 114,
    "protein": 5.6,
    "fat": 11.4,
    "carbs": 4.5
  },
  {
    "name": "Fiskgratäng u. potatismos hemlagad",
    "calories": 114,
    "protein": 5.6,
    "fat": 11.4,
    "carbs": 4.5
  },
  {
    "name": "Böcklinglåda m. äggstanning",
    "calories": 158,
    "protein": 9.8,
    "fat": 15.4,
    "carbs": 2.1
  },
  {
    "name": "Fiskbullar panerade stekta",
    "calories": 164,
    "protein": 10.5,
    "fat": 5.7,
    "carbs": 11.5
  },
  {
    "name": "Fisksoppa bouillabaisse",
    "calories": 71,
    "protein": 3.2,
    "fat": 8.5,
    "carbs": 1.5
  },
  {
    "name": "Fiskpaté m. räkor",
    "calories": 205,
    "protein": 14.5,
    "fat": 15.6,
    "carbs": 3.4
  },
  {
    "name": "Fiskfärs kokt",
    "calories": 115,
    "protein": 2,
    "fat": 15.5,
    "carbs": 8.5
  },
  {
    "name": "Fiskgratäng m. dillsås",
    "calories": 153,
    "protein": 10.1,
    "fat": 10.2,
    "carbs": 5.3
  },
  {
    "name": "Fiskgratäng m. räkor u. potatismos",
    "calories": 142,
    "protein": 8.7,
    "fat": 11.3,
    "carbs": 4.6
  },
  {
    "name": "Laxmousse",
    "calories": 232,
    "protein": 19.8,
    "fat": 11.3,
    "carbs": 2.5
  },
  {
    "name": "Sillbullar",
    "calories": 193,
    "protein": 11,
    "fat": 9,
    "carbs": 13.7
  },
  {
    "name": "Sillsallad",
    "calories": 94,
    "protein": 3.5,
    "fat": 4.3,
    "carbs": 10.3
  },
  {
    "name": "Sushi nigiri m. lax",
    "calories": 184,
    "protein": 5.9,
    "fat": 9.8,
    "carbs": 22.3
  },
  {
    "name": "Sushi nigiri m. hälleflundra",
    "calories": 157,
    "protein": 3.3,
    "fat": 7.3,
    "carbs": 23.6
  },
  {
    "name": "Sushi nigiri m. tonfisk",
    "calories": 147,
    "protein": 0.4,
    "fat": 8.1,
    "carbs": 26.6
  },
  {
    "name": "Sushi rulle m. crabfish gurka",
    "calories": 147,
    "protein": 0.4,
    "fat": 4.4,
    "carbs": 30.2
  },
  {
    "name": "Sallad m. tonfisk potatis bönor tomat sallad u. dressing",
    "calories": 97,
    "protein": 4,
    "fat": 8.7,
    "carbs": 5.9
  },
  {
    "name": "Fisk m. mandel ströbröd frysvara",
    "calories": 177,
    "protein": 11,
    "fat": 14,
    "carbs": 5.3
  },
  {
    "name": "Fiskgratäng m. potatismos dillsås tillagad frysvara",
    "calories": 126,
    "protein": 4.5,
    "fat": 7.9,
    "carbs": 12.6
  },
  {
    "name": "Laxpaté",
    "calories": 221,
    "protein": 18.1,
    "fat": 13.1,
    "carbs": 0.9
  },
  {
    "name": "Fiskgratäng m. potatismos räksås tillagad frysvara",
    "calories": 111,
    "protein": 4,
    "fat": 7.6,
    "carbs": 10.4
  },
  {
    "name": "Fiskrom torsk sill rå",
    "calories": 120,
    "protein": 2.3,
    "fat": 24.5,
    "carbs": 0
  },
  {
    "name": "Påläggskaviar orökt",
    "calories": 187,
    "protein": 3.3,
    "fat": 15.3,
    "carbs": 23.6
  },
  {
    "name": "Påläggskaviar original",
    "calories": 414,
    "protein": 35.8,
    "fat": 8.8,
    "carbs": 15.2
  },
  {
    "name": "Påläggskaviar lätt",
    "calories": 270,
    "protein": 15.8,
    "fat": 9,
    "carbs": 23
  },
  {
    "name": "Stenbitsrom",
    "calories": 84,
    "protein": 3.4,
    "fat": 10.6,
    "carbs": 2.5
  },
  {
    "name": "Löjrom saltad",
    "calories": 126,
    "protein": 2.3,
    "fat": 24.5,
    "carbs": 1.5
  },
  {
    "name": "Bläckfisk rå",
    "calories": 83,
    "protein": 1.7,
    "fat": 15.4,
    "carbs": 1.4
  },
  {
    "name": "Blåmussla kokt m. vin avrunnen",
    "calories": 113,
    "protein": 3.3,
    "fat": 18.5,
    "carbs": 2.3
  },
  {
    "name": "Ostron",
    "calories": 55,
    "protein": 2.4,
    "fat": 9.3,
    "carbs": 0
  },
  {
    "name": "Snigel vinbergssnäcka",
    "calories": 87,
    "protein": 1.4,
    "fat": 16.1,
    "carbs": 2.2
  },
  {
    "name": "Groda lår rått frysvara",
    "calories": 69,
    "protein": 0.3,
    "fat": 16.4,
    "carbs": 0
  },
  {
    "name": "Mussla konserv. m. lag",
    "calories": 51,
    "protein": 0.7,
    "fat": 7.9,
    "carbs": 3.1
  },
  {
    "name": "Mussla konserv. u. lag",
    "calories": 108,
    "protein": 2.3,
    "fat": 16.9,
    "carbs": 4.7
  },
  {
    "name": "Ostron konserv. m. lag",
    "calories": 58,
    "protein": 2.2,
    "fat": 9.5,
    "carbs": 0
  },
  {
    "name": "Krabba Blå krabba kokt",
    "calories": 83,
    "protein": 1.1,
    "fat": 18,
    "carbs": 0
  },
  {
    "name": "Hummer kokt",
    "calories": 85,
    "protein": 0.9,
    "fat": 19,
    "carbs": 0
  },
  {
    "name": "Kräfta kokt",
    "calories": 71,
    "protein": 0.8,
    "fat": 15.6,
    "carbs": 0.2
  },
  {
    "name": "Räka kokt",
    "calories": 77,
    "protein": 0.6,
    "fat": 17.6,
    "carbs": 0
  },
  {
    "name": "Hummer kokt el. konserv.",
    "calories": 90,
    "protein": 1.5,
    "fat": 18.7,
    "carbs": 0.1
  },
  {
    "name": "Krabba kokt",
    "calories": 125,
    "protein": 4,
    "fat": 19.7,
    "carbs": 2.2
  },
  {
    "name": "Krabba konserv.",
    "calories": 98,
    "protein": 2.5,
    "fat": 17.4,
    "carbs": 1.3
  },
  {
    "name": "Räka konserv. m. lag",
    "calories": 77,
    "protein": 0.8,
    "fat": 16.2,
    "carbs": 1
  },
  {
    "name": "Räka konserv. u. lag",
    "calories": 73,
    "protein": 0.3,
    "fat": 16.2,
    "carbs": 1.2
  },
  {
    "name": "Havskräfta kokt",
    "calories": 78,
    "protein": 0.9,
    "fat": 17.2,
    "carbs": 0
  },
  {
    "name": "Räka friterad",
    "calories": 287,
    "protein": 14.8,
    "fat": 10.6,
    "carbs": 27.8
  },
  {
    "name": "Räka friterad tillagad på restaurang",
    "calories": 387,
    "protein": 29.1,
    "fat": 6.9,
    "carbs": 24.7
  },
  {
    "name": "Bläckfisk friterad panerad",
    "calories": 292,
    "protein": 17.4,
    "fat": 18.6,
    "carbs": 15.2
  },
  {
    "name": "Bläckfisk friterad panerad tillagad på restaurang",
    "calories": 280,
    "protein": 17.8,
    "fat": 11.2,
    "carbs": 19.1
  },
  {
    "name": "Sallad m. räkor sparris tomat champinjoner ägg",
    "calories": 70,
    "protein": 4.3,
    "fat": 6.2,
    "carbs": 1.4
  },
  {
    "name": "Räka stuvad",
    "calories": 129,
    "protein": 9.5,
    "fat": 6.8,
    "carbs": 4.2
  },
  {
    "name": "Räksoppa ätf.",
    "calories": 82,
    "protein": 5.6,
    "fat": 4.8,
    "carbs": 2.7
  },
  {
    "name": "Västkustsallad m. musslor räkor champinjon dressing hemlagad",
    "calories": 102,
    "protein": 7.2,
    "fat": 6.2,
    "carbs": 2.6
  },
  {
    "name": "Västkustsallad m. musslor räkor champinjon hemlagad",
    "calories": 49,
    "protein": 0.9,
    "fat": 7.2,
    "carbs": 2.3
  },
  {
    "name": "Medelhavssallad m. tonfisk skaldjur majonnäsdressing sallad tomat",
    "calories": 126,
    "protein": 9.5,
    "fat": 7.4,
    "carbs": 2.5
  },
  {
    "name": "Skaldjurspaté",
    "calories": 151,
    "protein": 10.2,
    "fat": 11.7,
    "carbs": 2.3
  },
  {
    "name": "Räksoppa tillagad pulver m. vatten mjölk",
    "calories": 51,
    "protein": 2.1,
    "fat": 2.1,
    "carbs": 5.8
  },
  {
    "name": "Fiskbuljong pasta el. pulver storhushåll",
    "calories": 216,
    "protein": 4.9,
    "fat": 25,
    "carbs": 17.5
  },
  {
    "name": "Fiskbuljong pasta el. pulver lågsalt storhushåll",
    "calories": 267,
    "protein": 3.5,
    "fat": 35,
    "carbs": 23
  },
  {
    "name": "Fisk och skaldjurssås tillagad pulver m. mjölk vatten smör typ Smögen",
    "calories": 112,
    "protein": 7.6,
    "fat": 2.7,
    "carbs": 8.2
  },
  {
    "name": "Fiskbuljong ätf.",
    "calories": 4,
    "protein": 0.2,
    "fat": 0.3,
    "carbs": 0.3
  },
  {
    "name": "Gris blod rått",
    "calories": 73,
    "protein": 0.4,
    "fat": 16.6,
    "carbs": 0.4
  },
  {
    "name": "Nöt blod rått",
    "calories": 70,
    "protein": 0.4,
    "fat": 16.4,
    "carbs": 0
  },
  {
    "name": "Hårt bröd blodbröd fullkorn",
    "calories": 366,
    "protein": 1.9,
    "fat": 17.7,
    "carbs": 65.5
  },
  {
    "name": "Blodpudding blodkorv fett 19%",
    "calories": 301,
    "protein": 19,
    "fat": 10.6,
    "carbs": 21
  },
  {
    "name": "Blodpalt",
    "calories": 170,
    "protein": 4.2,
    "fat": 8.6,
    "carbs": 21.9
  },
  {
    "name": "Blodpudding blodkorv fett 14%",
    "calories": 254,
    "protein": 14,
    "fat": 11,
    "carbs": 20
  },
  {
    "name": "Blodbröd paltbröd frysvara",
    "calories": 286,
    "protein": 2.8,
    "fat": 14.4,
    "carbs": 47.8
  },
  {
    "name": "Blodpudding blodkorv fett 10%",
    "calories": 202,
    "protein": 9,
    "fat": 12,
    "carbs": 17.3
  },
  {
    "name": "Blodpudding blodkorv stekt fett 13%",
    "calories": 261,
    "protein": 14.4,
    "fat": 11.3,
    "carbs": 20.5
  },
  {
    "name": "Blodpudding blodkorv stekt fett 8%",
    "calories": 208,
    "protein": 9.3,
    "fat": 12.4,
    "carbs": 17.8
  },
  {
    "name": "Blodbröd paltbröd kokt m. salt",
    "calories": 112,
    "protein": 1.1,
    "fat": 5.6,
    "carbs": 18.6
  },
  {
    "name": "Lamm bräss rå",
    "calories": 131,
    "protein": 7.8,
    "fat": 15.3,
    "carbs": 0
  },
  {
    "name": "Lamm hjärta rå",
    "calories": 119,
    "protein": 5.6,
    "fat": 17.1,
    "carbs": 0
  },
  {
    "name": "Lamm lever rå",
    "calories": 149,
    "protein": 5.3,
    "fat": 22,
    "carbs": 3.2
  },
  {
    "name": "Lamm njure rå",
    "calories": 96,
    "protein": 3.4,
    "fat": 16.2,
    "carbs": 0
  },
  {
    "name": "Lamm tunga rå",
    "calories": 191,
    "protein": 14.6,
    "fat": 15.3,
    "carbs": 0
  },
  {
    "name": "Kalv bräss rå",
    "calories": 96,
    "protein": 3.1,
    "fat": 16.9,
    "carbs": 0
  },
  {
    "name": "Kalv lever rå",
    "calories": 119,
    "protein": 3.3,
    "fat": 19.4,
    "carbs": 2.8
  },
  {
    "name": "Kalv njure rå",
    "calories": 116,
    "protein": 5.8,
    "fat": 15.3,
    "carbs": 0.7
  },
  {
    "name": "Kalv tunga rå",
    "calories": 152,
    "protein": 9.8,
    "fat": 16.2,
    "carbs": 0
  },
  {
    "name": "Nöt kalv hjärta",
    "calories": 138,
    "protein": 8,
    "fat": 16.6,
    "carbs": 0
  },
  {
    "name": "Nöt lever rå",
    "calories": 127,
    "protein": 3.1,
    "fat": 20,
    "carbs": 4.4
  },
  {
    "name": "Nöt njure rå",
    "calories": 113,
    "protein": 5.1,
    "fat": 15.8,
    "carbs": 0.9
  },
  {
    "name": "Nöt oxtunga rå",
    "calories": 176,
    "protein": 12.4,
    "fat": 16.2,
    "carbs": 0
  },
  {
    "name": "Gris hjärta rå",
    "calories": 119,
    "protein": 5.9,
    "fat": 16.5,
    "carbs": 0
  },
  {
    "name": "Gris lever rå",
    "calories": 132,
    "protein": 3.4,
    "fat": 22,
    "carbs": 3
  },
  {
    "name": "Gris njure rå",
    "calories": 103,
    "protein": 3.8,
    "fat": 16.7,
    "carbs": 0.3
  },
  {
    "name": "Gris tunga rå",
    "calories": 167,
    "protein": 11.1,
    "fat": 16.5,
    "carbs": 0.4
  },
  {
    "name": "Kyckling hjärta rå",
    "calories": 147,
    "protein": 9.3,
    "fat": 15.6,
    "carbs": 0.3
  },
  {
    "name": "Kyckling lever rå",
    "calories": 115,
    "protein": 3.8,
    "fat": 19.4,
    "carbs": 0.7
  },
  {
    "name": "Kyckling mage rå",
    "calories": 111,
    "protein": 4.2,
    "fat": 18.2,
    "carbs": 0
  },
  {
    "name": "Ren lever rå",
    "calories": 129,
    "protein": 3.7,
    "fat": 22,
    "carbs": 1.8
  },
  {
    "name": "Nöt oxtunga rimmad rå",
    "calories": 220,
    "protein": 17.5,
    "fat": 15.7,
    "carbs": 0.4
  },
  {
    "name": "Kyckling lever stekt",
    "calories": 149,
    "protein": 4.9,
    "fat": 25.2,
    "carbs": 0.9
  },
  {
    "name": "Nöt lever panerad stekt",
    "calories": 212,
    "protein": 8,
    "fat": 22.9,
    "carbs": 11.5
  },
  {
    "name": "Nöt lever stekt m. salt",
    "calories": 178,
    "protein": 6.2,
    "fat": 24.8,
    "carbs": 5.5
  },
  {
    "name": "Nöt oxtunga rimmad kokt",
    "calories": 292,
    "protein": 24,
    "fat": 19.5,
    "carbs": 0
  },
  {
    "name": "Lever stuvad hemlagad",
    "calories": 140,
    "protein": 7.5,
    "fat": 11.4,
    "carbs": 6.6
  },
  {
    "name": "Gryta m. kalvhjärta grönsaker",
    "calories": 86,
    "protein": 4.7,
    "fat": 6.8,
    "carbs": 3.5
  },
  {
    "name": "Korvkaka",
    "calories": 118,
    "protein": 3,
    "fat": 6.9,
    "carbs": 15.1
  },
  {
    "name": "Leversauté kyckling",
    "calories": 140,
    "protein": 9.2,
    "fat": 10.6,
    "carbs": 3.5
  },
  {
    "name": "Gryta levergryta nöt",
    "calories": 151,
    "protein": 8.3,
    "fat": 12,
    "carbs": 6.7
  },
  {
    "name": "Njursauté",
    "calories": 127,
    "protein": 8.4,
    "fat": 9.1,
    "carbs": 3.3
  },
  {
    "name": "Leverbiff mald lever stekt frysvara",
    "calories": 223,
    "protein": 14.4,
    "fat": 15.2,
    "carbs": 8.1
  },
  {
    "name": "Gryta levergryta m. grönsaker frysvara",
    "calories": 103,
    "protein": 4.4,
    "fat": 8.1,
    "carbs": 7
  },
  {
    "name": "Gåsleverpastej konserv. rökt",
    "calories": 454,
    "protein": 44,
    "fat": 11.4,
    "carbs": 4.6
  },
  {
    "name": "Leverpalt",
    "calories": 225,
    "protein": 9.9,
    "fat": 9.9,
    "carbs": 22.8
  },
  {
    "name": "Njurpalt",
    "calories": 153,
    "protein": 1.7,
    "fat": 8.3,
    "carbs": 24.6
  },
  {
    "name": "Leverbiff mald lever rå frysvara",
    "calories": 211,
    "protein": 14.5,
    "fat": 13,
    "carbs": 7
  },
  {
    "name": "Leverpastej bredbar fett ca 24%",
    "calories": 292,
    "protein": 24.5,
    "fat": 9.5,
    "carbs": 9
  },
  {
    "name": "Leverpastej skivbar fett ca 22% ",
    "calories": 278,
    "protein": 21.6,
    "fat": 11.9,
    "carbs": 9.5
  },
  {
    "name": "Leverpastej skivbar fett 14%",
    "calories": 212,
    "protein": 14,
    "fat": 12,
    "carbs": 9.8
  },
  {
    "name": "Leverpastej bredbar fett ca 10%",
    "calories": 183,
    "protein": 9,
    "fat": 12,
    "carbs": 13.5
  },
  {
    "name": "Leverpastej bredbar fett 3-3,5%",
    "calories": 132,
    "protein": 3.6,
    "fat": 10.6,
    "carbs": 12.9
  },
  {
    "name": "Leverbiff mald lever stekt hemlagad",
    "calories": 146,
    "protein": 6.4,
    "fat": 12.8,
    "carbs": 8.9
  },
  {
    "name": "Paté älgfärs kycklinglever",
    "calories": 172,
    "protein": 11.2,
    "fat": 14,
    "carbs": 3.6
  },
  {
    "name": "Lantpaté",
    "calories": 402,
    "protein": 37.4,
    "fat": 12.1,
    "carbs": 4.7
  },
  {
    "name": "Grönpepparpaté",
    "calories": 299,
    "protein": 26,
    "fat": 15.2,
    "carbs": 1.1
  },
  {
    "name": "Korv kycklingkorv mager",
    "calories": 155,
    "protein": 9.1,
    "fat": 11.5,
    "carbs": 6.5
  },
  {
    "name": "Korv kycklingkorv halal",
    "calories": 203,
    "protein": 15.5,
    "fat": 12.2,
    "carbs": 3.5
  },
  {
    "name": "Korv falukorv fett 19% kött 58%",
    "calories": 254,
    "protein": 19.3,
    "fat": 12.7,
    "carbs": 7.9
  },
  {
    "name": "Korv falukorv kött 58%",
    "calories": 240,
    "protein": 20.6,
    "fat": 9.1,
    "carbs": 5.1
  },
  {
    "name": "Korv fläskkorv kokt kött 48%",
    "calories": 234,
    "protein": 20.5,
    "fat": 9.1,
    "carbs": 3.8
  },
  {
    "name": "Korv frukostkorv fett 23% kött 52%",
    "calories": 257,
    "protein": 23,
    "fat": 9.9,
    "carbs": 3.2
  },
  {
    "name": "Påläggskorv medvurst fett 23%",
    "calories": 256,
    "protein": 22.5,
    "fat": 9.9,
    "carbs": 4.1
  },
  {
    "name": "Påläggskorv medvurst rökt fett 35%",
    "calories": 386,
    "protein": 34.6,
    "fat": 14.2,
    "carbs": 5.4
  },
  {
    "name": "Påläggskorv salami rökt",
    "calories": 430,
    "protein": 41.2,
    "fat": 16.1,
    "carbs": 0.2
  },
  {
    "name": "Korv varmkorv kött 51-54%",
    "calories": 274,
    "protein": 21.5,
    "fat": 12.1,
    "carbs": 8.5
  },
  {
    "name": "Korv varmkorv kokt kött ca 53%",
    "calories": 273,
    "protein": 22.6,
    "fat": 9.9,
    "carbs": 7.8
  },
  {
    "name": "Korv wienerkorv kött 73%",
    "calories": 259,
    "protein": 23,
    "fat": 9.8,
    "carbs": 3.9
  },
  {
    "name": "Korv grillkorv kött 32-35%",
    "calories": 215,
    "protein": 15,
    "fat": 11,
    "carbs": 9.2
  },
  {
    "name": "Korv isterband fermenterad kött 59%",
    "calories": 278,
    "protein": 24,
    "fat": 11,
    "carbs": 4.6
  },
  {
    "name": "Korv middagskorv fett ca 15%  kött 52%",
    "calories": 189,
    "protein": 14.4,
    "fat": 9.5,
    "carbs": 5.7
  },
  {
    "name": "Korv wienerkorv mager kött 73%",
    "calories": 196,
    "protein": 15,
    "fat": 10,
    "carbs": 5.7
  },
  {
    "name": "Korv chorizo stekt kött 73%",
    "calories": 286,
    "protein": 23.8,
    "fat": 14.3,
    "carbs": 4.1
  },
  {
    "name": "Korv kabanoss stekt kött 80%",
    "calories": 372,
    "protein": 33,
    "fat": 18.4,
    "carbs": 1.2
  },
  {
    "name": "Korv prinskorv kött 61%",
    "calories": 268,
    "protein": 24,
    "fat": 10,
    "carbs": 3.8
  },
  {
    "name": "Korv salsiccia rå kött 73%",
    "calories": 270,
    "protein": 18.3,
    "fat": 21.8,
    "carbs": 4.7
  },
  {
    "name": "Korv salsiccia stekt u. fett kött 73%",
    "calories": 299,
    "protein": 20.2,
    "fat": 21.8,
    "carbs": 7.7
  },
  {
    "name": "Korv värmlandskorv rå kött 45%",
    "calories": 231,
    "protein": 19.1,
    "fat": 6.1,
    "carbs": 8.9
  },
  {
    "name": "Korv värmlandskorv kokt kött 45%",
    "calories": 223,
    "protein": 18.2,
    "fat": 6.5,
    "carbs": 8.5
  },
  {
    "name": "Gris bacon stekt mager",
    "calories": 142,
    "protein": 3.1,
    "fat": 26.6,
    "carbs": 1.4
  },
  {
    "name": "Gris bacon rå mager",
    "calories": 114,
    "protein": 3.5,
    "fat": 19.4,
    "carbs": 1
  },
  {
    "name": "Korv frukostkorv kokt fett 23% kött 52%",
    "calories": 272,
    "protein": 24.3,
    "fat": 10.5,
    "carbs": 3.4
  },
  {
    "name": "Korv falukorv stekt fett 19% kött 58%",
    "calories": 268,
    "protein": 20.3,
    "fat": 13.4,
    "carbs": 8.3
  },
  {
    "name": "Korv falukorv skivad kokt",
    "calories": 254,
    "protein": 21.8,
    "fat": 9.6,
    "carbs": 5.4
  },
  {
    "name": "Korv frukostkorv stekt",
    "calories": 272,
    "protein": 24.3,
    "fat": 10.5,
    "carbs": 3.4
  },
  {
    "name": "Korv isterband fermenterad stekt kött 59%",
    "calories": 293,
    "protein": 25.3,
    "fat": 11.6,
    "carbs": 4.8
  },
  {
    "name": "Korv varmkorv kokt",
    "calories": 273,
    "protein": 22.6,
    "fat": 9.9,
    "carbs": 7.8
  },
  {
    "name": "Korv varmkorv stekt",
    "calories": 288,
    "protein": 22.6,
    "fat": 12.7,
    "carbs": 8.9
  },
  {
    "name": "Korv wienerkorv stekt",
    "calories": 274,
    "protein": 24.3,
    "fat": 10.4,
    "carbs": 4.1
  },
  {
    "name": "Korv falukorv ugnsstekt",
    "calories": 205,
    "protein": 15.9,
    "fat": 9,
    "carbs": 6.3
  },
  {
    "name": "Korv wienerkorv kokt",
    "calories": 274,
    "protein": 24.3,
    "fat": 10.4,
    "carbs": 4.1
  },
  {
    "name": "Pölsa stekt värmd",
    "calories": 235,
    "protein": 14.2,
    "fat": 17.5,
    "carbs": 9
  },
  {
    "name": "Pölsa",
    "calories": 188,
    "protein": 11.3,
    "fat": 14,
    "carbs": 7.2
  },
  {
    "name": "Korv stroganoff hemlagad i gjutjärnsstekpanna",
    "calories": 242,
    "protein": 20.5,
    "fat": 7.2,
    "carbs": 7.5
  },
  {
    "name": "Gryta korvgryta m. chorizo rotfrukter",
    "calories": 121,
    "protein": 8.7,
    "fat": 5.2,
    "carbs": 5.2
  },
  {
    "name": "Tunnbrödrulle m. korv potatismos räk- gurksallad",
    "calories": 186,
    "protein": 11.2,
    "fat": 4.5,
    "carbs": 16.3
  },
  {
    "name": "Kalvsylta",
    "calories": 100,
    "protein": 5.7,
    "fat": 12,
    "carbs": 0.1
  },
  {
    "name": "Pressylta",
    "calories": 305,
    "protein": 26.5,
    "fat": 17.5,
    "carbs": 0
  },
  {
    "name": "Hushållssylta",
    "calories": 143,
    "protein": 10.6,
    "fat": 11.9,
    "carbs": 0.3
  },
  {
    "name": "Cashewnötter rostade u. salt",
    "calories": 597,
    "protein": 48.7,
    "fat": 18,
    "carbs": 19.1
  },
  {
    "name": "Hasselnötter",
    "calories": 658,
    "protein": 64.6,
    "fat": 13.2,
    "carbs": 0.5
  },
  {
    "name": "Jordnötssmör",
    "calories": 615,
    "protein": 51,
    "fat": 22.6,
    "carbs": 14.3
  },
  {
    "name": "Jordnötter torkade",
    "calories": 586,
    "protein": 49,
    "fat": 25.7,
    "carbs": 8.2
  },
  {
    "name": "Jordnötter rostade",
    "calories": 605,
    "protein": 51.3,
    "fat": 22.4,
    "carbs": 9.3
  },
  {
    "name": "Jordnötter rostade saltade",
    "calories": 605,
    "protein": 51.3,
    "fat": 22.4,
    "carbs": 9.3
  },
  {
    "name": "Kastanjer",
    "calories": 201,
    "protein": 2.2,
    "fat": 2.4,
    "carbs": 39
  },
  {
    "name": "Kokosflingor",
    "calories": 690,
    "protein": 67.2,
    "fat": 6.2,
    "carbs": 13.1
  },
  {
    "name": "Kokosnöt",
    "calories": 352,
    "protein": 33.5,
    "fat": 3.4,
    "carbs": 6.1
  },
  {
    "name": "Kokosmjölk fett ca 6%",
    "calories": 80,
    "protein": 7.1,
    "fat": 0.6,
    "carbs": 3
  },
  {
    "name": "Linfrö hela",
    "calories": 522,
    "protein": 43.8,
    "fat": 18.7,
    "carbs": 0
  },
  {
    "name": "Paranötter",
    "calories": 683,
    "protein": 67.8,
    "fat": 14.2,
    "carbs": 0
  },
  {
    "name": "Pekannötter",
    "calories": 714,
    "protein": 73.3,
    "fat": 8.5,
    "carbs": 1.5
  },
  {
    "name": "Pistaschnötter u. salt",
    "calories": 555,
    "protein": 42.5,
    "fat": 23.4,
    "carbs": 15.8
  },
  {
    "name": "Pumpafrö",
    "calories": 573,
    "protein": 48,
    "fat": 29.8,
    "carbs": 2.4
  },
  {
    "name": "Sesamfrö m. skal",
    "calories": 606,
    "protein": 54.8,
    "fat": 19.9,
    "carbs": 4.4
  },
  {
    "name": "Sesamfrö u. skal",
    "calories": 644,
    "protein": 59.7,
    "fat": 20.9,
    "carbs": 2.7
  },
  {
    "name": "Solrosfrö",
    "calories": 618,
    "protein": 56.1,
    "fat": 20.6,
    "carbs": 3.9
  },
  {
    "name": "Sötmandel",
    "calories": 592,
    "protein": 53.2,
    "fat": 20.7,
    "carbs": 0.5
  },
  {
    "name": "Valnötter",
    "calories": 680,
    "protein": 64.8,
    "fat": 13.8,
    "carbs": 8.3
  },
  {
    "name": "Kastanjer rostade",
    "calories": 230,
    "protein": 2.2,
    "fat": 3.2,
    "carbs": 45
  },
  {
    "name": "Kikärtor snacks torkade m. salt",
    "calories": 376,
    "protein": 6.6,
    "fat": 23.3,
    "carbs": 47.8
  },
  {
    "name": "Jordnötsbågar jordnötsringar",
    "calories": 488,
    "protein": 25,
    "fat": 11.4,
    "carbs": 51.4
  },
  {
    "name": "Chips majs tortilla ",
    "calories": 461,
    "protein": 17.9,
    "fat": 7.1,
    "carbs": 63.6
  },
  {
    "name": "Ostbågar",
    "calories": 550,
    "protein": 35.5,
    "fat": 8.5,
    "carbs": 48.2
  },
  {
    "name": "Chips potatis m. havssalt",
    "calories": 523,
    "protein": 31.5,
    "fat": 5.2,
    "carbs": 52.4
  },
  {
    "name": "Salta pinnar",
    "calories": 391,
    "protein": 5.6,
    "fat": 11.5,
    "carbs": 69.6
  },
  {
    "name": "Popcorn mikropopcorn poppade fett ca 22%",
    "calories": 440,
    "protein": 16.9,
    "fat": 9.6,
    "carbs": 55.9
  },
  {
    "name": "Chips potatis smaksatta fett ca 33%",
    "calories": 526,
    "protein": 32.6,
    "fat": 5.9,
    "carbs": 50
  },
  {
    "name": "Chips potatis light fett 25%",
    "calories": 495,
    "protein": 24.3,
    "fat": 4.1,
    "carbs": 63
  },
  {
    "name": "Japanmix blandade snacks m. inbakade nötter riscracker",
    "calories": 403,
    "protein": 5.6,
    "fat": 9.4,
    "carbs": 75.5
  },
  {
    "name": "Kokosmjölk fett ca 24%",
    "calories": 239,
    "protein": 24,
    "fat": 2.3,
    "carbs": 3.5
  },
  {
    "name": "Vatten kokosvatten",
    "calories": 18,
    "protein": 0,
    "fat": 0,
    "carbs": 4.5
  },
  {
    "name": "Sesamdryck vattenextrakt av frön m. skal",
    "calories": 68,
    "protein": 6.4,
    "fat": 1.8,
    "carbs": 0.6
  },
  {
    "name": "Sesamdryck vattenextrakt av frön u. skal",
    "calories": 72,
    "protein": 6.4,
    "fat": 2.2,
    "carbs": 1.4
  },
  {
    "name": "Sött vetebröd kanelbulle hembakad",
    "calories": 321,
    "protein": 12.3,
    "fat": 5.8,
    "carbs": 45.5
  },
  {
    "name": "Skorpor råg",
    "calories": 379,
    "protein": 10.8,
    "fat": 9,
    "carbs": 51.9
  },
  {
    "name": "Skorpor vete osötade",
    "calories": 476,
    "protein": 18.2,
    "fat": 9.9,
    "carbs": 66.2
  },
  {
    "name": "Sött vetebröd",
    "calories": 356,
    "protein": 10.9,
    "fat": 8.2,
    "carbs": 54.4
  },
  {
    "name": "Sött vetebröd slätt",
    "calories": 329,
    "protein": 9.5,
    "fat": 8.7,
    "carbs": 50.3
  },
  {
    "name": "Sött vetebröd sötat m. fruktsocker",
    "calories": 289,
    "protein": 8,
    "fat": 7.2,
    "carbs": 45.6
  },
  {
    "name": "Vetebröd osötat",
    "calories": 286,
    "protein": 7.8,
    "fat": 7.6,
    "carbs": 44.6
  },
  {
    "name": "Sött vetebröd m. fyllning bulle längd",
    "calories": 350,
    "protein": 10.3,
    "fat": 6.5,
    "carbs": 56.1
  },
  {
    "name": "Skorpor vete",
    "calories": 419,
    "protein": 9.2,
    "fat": 10.3,
    "carbs": 70.7
  },
  {
    "name": "Skorpor fullkorn osötade",
    "calories": 387,
    "protein": 6.2,
    "fat": 12.9,
    "carbs": 64.1
  },
  {
    "name": "Mandelkubb",
    "calories": 397,
    "protein": 13.6,
    "fat": 6.1,
    "carbs": 61.3
  },
  {
    "name": "Munk u. fyllning",
    "calories": 425,
    "protein": 25.8,
    "fat": 5,
    "carbs": 42.7
  },
  {
    "name": "Munk fylld m. äppelmos vaniljkräm",
    "calories": 313,
    "protein": 13.2,
    "fat": 5.9,
    "carbs": 41.4
  },
  {
    "name": "Wienerbröd m. vaniljkräm sylt florsocker",
    "calories": 456,
    "protein": 27.3,
    "fat": 6.4,
    "carbs": 45.4
  },
  {
    "name": "Sött vetebröd bakpulver",
    "calories": 315,
    "protein": 11.8,
    "fat": 5.5,
    "carbs": 45.5
  },
  {
    "name": "Sött vetebröd saffransbröd hembakad",
    "calories": 290,
    "protein": 8.4,
    "fat": 5.9,
    "carbs": 46.3
  },
  {
    "name": "Kex cream crackers",
    "calories": 484,
    "protein": 22.5,
    "fat": 7.8,
    "carbs": 60.3
  },
  {
    "name": "Kex rån m. cremefyllning smaksatt",
    "calories": 538,
    "protein": 29.9,
    "fat": 4,
    "carbs": 62.3
  },
  {
    "name": "Kex havrekex fullkorn",
    "calories": 470,
    "protein": 20.6,
    "fat": 8.8,
    "carbs": 59.1
  },
  {
    "name": "Kex Mariekex",
    "calories": 449,
    "protein": 12.8,
    "fat": 6.6,
    "carbs": 74.7
  },
  {
    "name": "Kex mördegskex",
    "calories": 480,
    "protein": 18.4,
    "fat": 5.4,
    "carbs": 71.8
  },
  {
    "name": "Kex m. syltfyllning",
    "calories": 474,
    "protein": 18.9,
    "fat": 4,
    "carbs": 70.9
  },
  {
    "name": "Kex m. nougatfyllning",
    "calories": 490,
    "protein": 23.2,
    "fat": 5.6,
    "carbs": 62.6
  },
  {
    "name": "Maräng m. choklad",
    "calories": 389,
    "protein": 0.7,
    "fat": 3.2,
    "carbs": 91
  },
  {
    "name": "Småkakor olika sorter",
    "calories": 492,
    "protein": 21.4,
    "fat": 4.7,
    "carbs": 68.8
  },
  {
    "name": "Jitterbugg m. mördeg maräng",
    "calories": 515,
    "protein": 30.5,
    "fat": 6.7,
    "carbs": 52.8
  },
  {
    "name": "Cookie amerikansk m. choklad",
    "calories": 486,
    "protein": 22.9,
    "fat": 5.2,
    "carbs": 63.3
  },
  {
    "name": "Kex smörgåskex",
    "calories": 462,
    "protein": 18.1,
    "fat": 7,
    "carbs": 63.1
  },
  {
    "name": "Pepparkaka",
    "calories": 453,
    "protein": 15.4,
    "fat": 4.9,
    "carbs": 72.1
  },
  {
    "name": "Spettekaka",
    "calories": 427,
    "protein": 9.8,
    "fat": 11.8,
    "carbs": 71.4
  },
  {
    "name": "Maräng",
    "calories": 395,
    "protein": 0,
    "fat": 1.9,
    "carbs": 95.3
  },
  {
    "name": "Kex m. fyllning",
    "calories": 489,
    "protein": 24.5,
    "fat": 5.4,
    "carbs": 60.7
  },
  {
    "name": "Kex ostkex",
    "calories": 492,
    "protein": 25.3,
    "fat": 10.1,
    "carbs": 54.1
  },
  {
    "name": "Kex salta",
    "calories": 509,
    "protein": 27,
    "fat": 8.7,
    "carbs": 55.3
  },
  {
    "name": "Kex salta m. mjölk",
    "calories": 512,
    "protein": 27.2,
    "fat": 7.7,
    "carbs": 57.6
  },
  {
    "name": "Kex u. socker",
    "calories": 444,
    "protein": 12,
    "fat": 6,
    "carbs": 76.1
  },
  {
    "name": "Pepparkaka u. socker",
    "calories": 504,
    "protein": 24,
    "fat": 8,
    "carbs": 63.2
  },
  {
    "name": "Kex smörgåsrån",
    "calories": 400,
    "protein": 4.9,
    "fat": 8.8,
    "carbs": 75.8
  },
  {
    "name": "Glasstrut våffla ofylld",
    "calories": 416,
    "protein": 6.4,
    "fat": 6.3,
    "carbs": 80.8
  },
  {
    "name": "Småkakor u. socker",
    "calories": 546,
    "protein": 33,
    "fat": 7,
    "carbs": 54.6
  },
  {
    "name": "Mandelbiskvi",
    "calories": 399,
    "protein": 22.6,
    "fat": 10,
    "carbs": 35.2
  },
  {
    "name": "Deg mördeg gräddad",
    "calories": 503,
    "protein": 34.1,
    "fat": 4.7,
    "carbs": 44.1
  },
  {
    "name": "Deg smördeg gräddad",
    "calories": 429,
    "protein": 20.8,
    "fat": 5.6,
    "carbs": 53.8
  },
  {
    "name": "Deg smördeg frysvara",
    "calories": 395,
    "protein": 27.5,
    "fat": 5,
    "carbs": 31.8
  },
  {
    "name": "Deg filodeg kylvara el. frysvara",
    "calories": 289,
    "protein": 1.9,
    "fat": 8,
    "carbs": 57.9
  },
  {
    "name": "Gräddtårta",
    "calories": 294,
    "protein": 19,
    "fat": 3,
    "carbs": 27.7
  },
  {
    "name": "Toscabit m. mazarinmassa mandel choklad",
    "calories": 487,
    "protein": 31.4,
    "fat": 6.6,
    "carbs": 42.6
  },
  {
    "name": "Bärtårta m. grädde vaniljkräm sylt gele",
    "calories": 245,
    "protein": 11,
    "fat": 3.2,
    "carbs": 31.4
  },
  {
    "name": "Prinsesstårta m. grädde vaniljkräm hallonsylt marsipan",
    "calories": 295,
    "protein": 13.8,
    "fat": 4.3,
    "carbs": 37.3
  },
  {
    "name": "Chokladtårta Sachertårta",
    "calories": 443,
    "protein": 25.3,
    "fat": 5.6,
    "carbs": 46.8
  },
  {
    "name": "Napoleonbakelse m. grädde vaniljkräm hallonsylt glasyr",
    "calories": 349,
    "protein": 20.6,
    "fat": 3.2,
    "carbs": 37.2
  },
  {
    "name": "Frukttårta m. hallonsylt vaniljkräm mandelmassa frukt gele",
    "calories": 249,
    "protein": 7.5,
    "fat": 5.1,
    "carbs": 37.4
  },
  {
    "name": "Chokladbiskvi m. mandelbotten smörkräm choklad",
    "calories": 494,
    "protein": 28.6,
    "fat": 5.6,
    "carbs": 50.9
  },
  {
    "name": "Mazariner m. mördegsbotten mazarinfyllning glasyr",
    "calories": 436,
    "protein": 20.6,
    "fat": 6.7,
    "carbs": 55
  },
  {
    "name": "Mjuk kaka drömtårta chokladrulltårta",
    "calories": 390,
    "protein": 16.5,
    "fat": 6.1,
    "carbs": 53.2
  },
  {
    "name": "Mjuk kaka rulltårta m. sylt",
    "calories": 380,
    "protein": 14.9,
    "fat": 3,
    "carbs": 57.4
  },
  {
    "name": "Punschrulle",
    "calories": 453,
    "protein": 20.2,
    "fat": 5,
    "carbs": 61.2
  },
  {
    "name": "Chokladboll",
    "calories": 508,
    "protein": 31.5,
    "fat": 4.9,
    "carbs": 49.1
  },
  {
    "name": "Gräddtårta m. jordgubb banan hemlagad",
    "calories": 209,
    "protein": 11.7,
    "fat": 3,
    "carbs": 22
  },
  {
    "name": "Potatisbakelse m. vaniljkräm smörkräm marsipan",
    "calories": 405,
    "protein": 16.8,
    "fat": 4.8,
    "carbs": 56.8
  },
  {
    "name": "Äppelkaka m. ströbröd",
    "calories": 219,
    "protein": 10.8,
    "fat": 1.3,
    "carbs": 27.6
  },
  {
    "name": "Mjuk kaka drömtårta chokladrulltårta hemlagad",
    "calories": 355,
    "protein": 17.6,
    "fat": 5.3,
    "carbs": 43
  },
  {
    "name": "Semla vetebulle fylld m. mandelmassa vispad grädde",
    "calories": 333,
    "protein": 16.3,
    "fat": 5.4,
    "carbs": 39.7
  },
  {
    "name": "Mjuk kaka chokladruta m. chokladglasyr riven kokos",
    "calories": 420,
    "protein": 23.2,
    "fat": 4.2,
    "carbs": 47.7
  },
  {
    "name": "Mjuk kaka ambrosiakaka sockerkaka m. glasyr",
    "calories": 377,
    "protein": 16.2,
    "fat": 3.5,
    "carbs": 53.8
  },
  {
    "name": "Arraksboll",
    "calories": 445,
    "protein": 21.8,
    "fat": 3.2,
    "carbs": 58
  },
  {
    "name": "Petit-choux u. fyllning",
    "calories": 201,
    "protein": 11.7,
    "fat": 5.9,
    "carbs": 17.9
  },
  {
    "name": "Semla vetebulle fylld m. mandelmassa vispad grädde hemlagad",
    "calories": 294,
    "protein": 13,
    "fat": 6.1,
    "carbs": 36.8
  },
  {
    "name": "Mjuk kaka fransk äppelkaka",
    "calories": 233,
    "protein": 15.2,
    "fat": 3,
    "carbs": 19.5
  },
  {
    "name": "Mjuk kaka toscakaka",
    "calories": 401,
    "protein": 21.4,
    "fat": 6.8,
    "carbs": 43.5
  },
  {
    "name": "Mjuk kaka chokladkaka",
    "calories": 339,
    "protein": 17.2,
    "fat": 5.3,
    "carbs": 39.7
  },
  {
    "name": "Muffins amerikansk",
    "calories": 431,
    "protein": 24.2,
    "fat": 5.8,
    "carbs": 46.8
  },
  {
    "name": "Mjuk kaka sockerkaka pepparkaka",
    "calories": 374,
    "protein": 14.1,
    "fat": 3.9,
    "carbs": 56
  },
  {
    "name": "Mjuk kaka tårtbotten",
    "calories": 301,
    "protein": 4.2,
    "fat": 5.9,
    "carbs": 58.7
  },
  {
    "name": "Mjuk kaka sockerkaka fin",
    "calories": 397,
    "protein": 20.5,
    "fat": 4.3,
    "carbs": 48.3
  },
  {
    "name": "Mjuk kaka pepparkaka",
    "calories": 334,
    "protein": 14.7,
    "fat": 4.6,
    "carbs": 45.3
  },
  {
    "name": "Mjuk kaka nötkaka",
    "calories": 441,
    "protein": 30.6,
    "fat": 9.5,
    "carbs": 29.4
  },
  {
    "name": "Mjuk kaka sockerkaka fin mager",
    "calories": 292,
    "protein": 8.3,
    "fat": 4.3,
    "carbs": 49
  },
  {
    "name": "Mjuk kaka sockerkaka saftig",
    "calories": 319,
    "protein": 9.1,
    "fat": 5.2,
    "carbs": 52.9
  },
  {
    "name": "Kex digestive fullkorn 23%",
    "calories": 476,
    "protein": 19.8,
    "fat": 6.4,
    "carbs": 66.1
  },
  {
    "name": "Mjuk kaka fruktkaka",
    "calories": 387,
    "protein": 21.1,
    "fat": 5,
    "carbs": 42.9
  },
  {
    "name": "Glass gräddglass fett 12%",
    "calories": 196,
    "protein": 9.2,
    "fat": 3.2,
    "carbs": 25.1
  },
  {
    "name": "Glass vaniljsmak fett ca 8%",
    "calories": 177,
    "protein": 6.5,
    "fat": 2.5,
    "carbs": 27
  },
  {
    "name": "Glass fett ca 10%",
    "calories": 193,
    "protein": 9.7,
    "fat": 3.3,
    "carbs": 23.1
  },
  {
    "name": "Glass glasstrut fett ca 15%",
    "calories": 271,
    "protein": 15.3,
    "fat": 4,
    "carbs": 29.2
  },
  {
    "name": "Glass lättglass m. sötningsm. fett ca 6%",
    "calories": 139,
    "protein": 5.7,
    "fat": 4.3,
    "carbs": 17.5
  },
  {
    "name": "Glass glasstrut våffla m. vaniljglass daimbitar chokladöverdrag",
    "calories": 345,
    "protein": 20.8,
    "fat": 3.7,
    "carbs": 35.1
  },
  {
    "name": "Glass vaniljglass m. chokladkex",
    "calories": 266,
    "protein": 10.4,
    "fat": 4.7,
    "carbs": 37.4
  },
  {
    "name": "Glass gräddglass fett 15%",
    "calories": 222,
    "protein": 14.4,
    "fat": 3.7,
    "carbs": 19.6
  },
  {
    "name": "Glass fett 12%",
    "calories": 200,
    "protein": 12,
    "fat": 3.8,
    "carbs": 19.3
  },
  {
    "name": "Glass lättglass fett ca 5%",
    "calories": 167,
    "protein": 4.7,
    "fat": 4.3,
    "carbs": 26.6
  },
  {
    "name": "Glass glasspinne fett ca 25%",
    "calories": 348,
    "protein": 25.3,
    "fat": 4.6,
    "carbs": 26
  },
  {
    "name": "Glass glasspinne m. kakaoöverdrag fett 20%",
    "calories": 307,
    "protein": 20.1,
    "fat": 3.8,
    "carbs": 28
  },
  {
    "name": "Glass glasspinne el. split m. isöverdrag fett ca 6%",
    "calories": 150,
    "protein": 6,
    "fat": 1.7,
    "carbs": 22.3
  },
  {
    "name": "Glass glasstrut fett ca 10%",
    "calories": 244,
    "protein": 10.3,
    "fat": 3.6,
    "carbs": 34
  },
  {
    "name": "Glass mjukglass bägare",
    "calories": 154,
    "protein": 7,
    "fat": 3.1,
    "carbs": 19.7
  },
  {
    "name": "Glass glasstårta fett 17%",
    "calories": 261,
    "protein": 17,
    "fat": 4.4,
    "carbs": 22.2
  },
  {
    "name": "Glass m. maräng fett 10%",
    "calories": 234,
    "protein": 12.8,
    "fat": 4,
    "carbs": 25.8
  },
  {
    "name": "Glass havreglass m. vanilji fett 13%",
    "calories": 218,
    "protein": 12.6,
    "fat": 0.5,
    "carbs": 25.3
  },
  {
    "name": "Glass parfait m. bär",
    "calories": 239,
    "protein": 21.4,
    "fat": 2.4,
    "carbs": 9.2
  },
  {
    "name": "Matlagningsbas m. havre fett 13%",
    "calories": 145,
    "protein": 12.8,
    "fat": 0.7,
    "carbs": 6.7
  },
  {
    "name": "Gräddfil fett 12%",
    "calories": 128,
    "protein": 11.5,
    "fat": 2.5,
    "carbs": 4
  },
  {
    "name": "Kaffegrädde fett 12%",
    "calories": 137,
    "protein": 12,
    "fat": 3.1,
    "carbs": 4.4
  },
  {
    "name": "Vispgrädde fett 40%",
    "calories": 374,
    "protein": 40,
    "fat": 2.1,
    "carbs": 3
  },
  {
    "name": "Mellangrädde fett 27%",
    "calories": 264,
    "protein": 27,
    "fat": 2.6,
    "carbs": 3.6
  },
  {
    "name": "Matlagningsgrädde fett 15%",
    "calories": 162,
    "protein": 15,
    "fat": 3,
    "carbs": 4.2
  },
  {
    "name": "Crème fraiche fett 34%",
    "calories": 323,
    "protein": 34,
    "fat": 2.3,
    "carbs": 3.3
  },
  {
    "name": "Gräddersättning pulver fett 35%",
    "calories": 556,
    "protein": 35.5,
    "fat": 4.8,
    "carbs": 54.9
  },
  {
    "name": "Gräddfilssås m. kryddgrönt",
    "calories": 118,
    "protein": 10.2,
    "fat": 2.6,
    "carbs": 4.2
  },
  {
    "name": "Gräddfilssås fett 9%",
    "calories": 83,
    "protein": 5,
    "fat": 2.6,
    "carbs": 6.6
  },
  {
    "name": "Gräddfilssås m. crème fraiche",
    "calories": 139,
    "protein": 11.6,
    "fat": 2.4,
    "carbs": 6.2
  },
  {
    "name": "Rabarberkräm",
    "calories": 57,
    "protein": 0.1,
    "fat": 0.2,
    "carbs": 12.7
  },
  {
    "name": "Rabarbersoppa",
    "calories": 52,
    "protein": 0.1,
    "fat": 0.2,
    "carbs": 11.7
  },
  {
    "name": "Apelsinsoppa",
    "calories": 46,
    "protein": 0.1,
    "fat": 0.4,
    "carbs": 10.6
  },
  {
    "name": "Blåbärssoppa hemlagad",
    "calories": 47,
    "protein": 0.3,
    "fat": 0.2,
    "carbs": 10.4
  },
  {
    "name": "Svartvinbärskräm",
    "calories": 69,
    "protein": 0.4,
    "fat": 0.5,
    "carbs": 14.7
  },
  {
    "name": "Äppelkompott",
    "calories": 65,
    "protein": 0,
    "fat": 0,
    "carbs": 15
  },
  {
    "name": "Äppelkräm",
    "calories": 60,
    "protein": 0,
    "fat": 0,
    "carbs": 13.9
  },
  {
    "name": "Äppelsoppa",
    "calories": 49,
    "protein": 0,
    "fat": 0,
    "carbs": 11.2
  },
  {
    "name": "Kräm m. bär el. frukt",
    "calories": 64,
    "protein": 0.2,
    "fat": 0.2,
    "carbs": 14.4
  },
  {
    "name": "Pajfyllning bär m. socker",
    "calories": 107,
    "protein": 0.4,
    "fat": 0.8,
    "carbs": 23.5
  },
  {
    "name": "Saftkräm",
    "calories": 116,
    "protein": 0,
    "fat": 0,
    "carbs": 28.4
  },
  {
    "name": "Saftsoppa",
    "calories": 86,
    "protein": 0,
    "fat": 0,
    "carbs": 21.1
  },
  {
    "name": "Saftsås",
    "calories": 117,
    "protein": 0,
    "fat": 0,
    "carbs": 28.8
  },
  {
    "name": "Fruktdryck blåbär berikad",
    "calories": 48,
    "protein": 0.1,
    "fat": 0.8,
    "carbs": 10.6
  },
  {
    "name": "Fruktsoppa pastöriserad ätf. blandad torkad frukt berikad",
    "calories": 54,
    "protein": 0,
    "fat": 0.2,
    "carbs": 12.9
  },
  {
    "name": "Nyponsoppa ätf. pastöriserad el. pulver berikad ",
    "calories": 52,
    "protein": 0.1,
    "fat": 0.2,
    "carbs": 12.1
  },
  {
    "name": "Nyponsoppa ätf. pulver osötad berikad",
    "calories": 20,
    "protein": 0.1,
    "fat": 0.2,
    "carbs": 4.3
  },
  {
    "name": "Mjuk kaka m. katrinplommon",
    "calories": 172,
    "protein": 5.2,
    "fat": 5.4,
    "carbs": 24.2
  },
  {
    "name": "Kalvdans m. mjölkpulver ägg",
    "calories": 120,
    "protein": 3.5,
    "fat": 9,
    "carbs": 12.9
  },
  {
    "name": "Ostkaka m. cottage cheese",
    "calories": 168,
    "protein": 9.3,
    "fat": 10.1,
    "carbs": 10.5
  },
  {
    "name": "Marängsviss hovdessert",
    "calories": 354,
    "protein": 20,
    "fat": 4.5,
    "carbs": 37.4
  },
  {
    "name": "Brylépudding",
    "calories": 129,
    "protein": 3.3,
    "fat": 4.9,
    "carbs": 19.6
  },
  {
    "name": "Vaniljsås m. mellanmjölk matlagningsgrädde vispgrädde hemlagad",
    "calories": 192,
    "protein": 14.6,
    "fat": 3.8,
    "carbs": 11.8
  },
  {
    "name": "Chokladpudding",
    "calories": 126,
    "protein": 3,
    "fat": 4.8,
    "carbs": 19
  },
  {
    "name": "Chokladpudding m. vispad grädde fett 40%",
    "calories": 172,
    "protein": 9.8,
    "fat": 4.3,
    "carbs": 16.1
  },
  {
    "name": "Chokladmousse",
    "calories": 297,
    "protein": 17.8,
    "fat": 5.8,
    "carbs": 28.7
  },
  {
    "name": "Fromage apelsin el. citron hemlagad",
    "calories": 276,
    "protein": 20.4,
    "fat": 5.3,
    "carbs": 18.2
  },
  {
    "name": "Glassås choklad hemlagad",
    "calories": 249,
    "protein": 4.1,
    "fat": 4.5,
    "carbs": 44.8
  },
  {
    "name": "Glassås kolasås",
    "calories": 288,
    "protein": 18.3,
    "fat": 2.3,
    "carbs": 28.6
  },
  {
    "name": "Vaniljpudding",
    "calories": 154,
    "protein": 8.4,
    "fat": 3.7,
    "carbs": 15.9
  },
  {
    "name": "Vaniljsås m. grädde mjölk",
    "calories": 302,
    "protein": 27.7,
    "fat": 3.4,
    "carbs": 10.5
  },
  {
    "name": "Ostkaka lätt osötad fett 3%",
    "calories": 111,
    "protein": 3,
    "fat": 12,
    "carbs": 8.6
  },
  {
    "name": "Fromage citron",
    "calories": 173,
    "protein": 11,
    "fat": 2.4,
    "carbs": 16.2
  },
  {
    "name": "Vaniljsås m. havre fett 11%",
    "calories": 154,
    "protein": 9.6,
    "fat": 0.6,
    "carbs": 16.1
  },
  {
    "name": "Vaniljsås tillagad pulver m. mjölk",
    "calories": 106,
    "protein": 3.2,
    "fat": 3.1,
    "carbs": 16.1
  },
  {
    "name": "Glassås choklad",
    "calories": 352,
    "protein": 5.5,
    "fat": 3.1,
    "carbs": 69.5
  },
  {
    "name": "Glassås frukt",
    "calories": 316,
    "protein": 0,
    "fat": 0.1,
    "carbs": 77.8
  },
  {
    "name": "Rabarberpaj",
    "calories": 274,
    "protein": 13.3,
    "fat": 2.6,
    "carbs": 34.6
  },
  {
    "name": "Äppelpaj m. lock",
    "calories": 286,
    "protein": 15.7,
    "fat": 3,
    "carbs": 32.3
  },
  {
    "name": "Cheesecake m. digestivebotten bär fryst",
    "calories": 262,
    "protein": 19.7,
    "fat": 4.1,
    "carbs": 17
  },
  {
    "name": "Cheesecake m. digestivebotten",
    "calories": 291,
    "protein": 21.2,
    "fat": 5.4,
    "carbs": 19.9
  },
  {
    "name": "Mannagrynskaka mannagrynspudding",
    "calories": 104,
    "protein": 2.4,
    "fat": 4.9,
    "carbs": 15.2
  },
  {
    "name": "Äppelsmulpaj",
    "calories": 241,
    "protein": 10.9,
    "fat": 1.8,
    "carbs": 32.5
  },
  {
    "name": "Katrinplommonsufflé",
    "calories": 62,
    "protein": 0.2,
    "fat": 1.9,
    "carbs": 12.4
  },
  {
    "name": "Äppelpaj friterad",
    "calories": 303,
    "protein": 16.6,
    "fat": 2.6,
    "carbs": 35.1
  },
  {
    "name": "Banan friterad",
    "calories": 176,
    "protein": 6,
    "fat": 2.2,
    "carbs": 27.3
  },
  {
    "name": "Äpple ugnsstekt m. olja el. flytande margarin socker mandelmassa valnötter",
    "calories": 320,
    "protein": 23.2,
    "fat": 3.1,
    "carbs": 23.3
  },
  {
    "name": "Banan friterad m. glass tillagad på restaurang",
    "calories": 253,
    "protein": 13.2,
    "fat": 2.4,
    "carbs": 30.3
  },
  {
    "name": "Apelsinmarmelad",
    "calories": 233,
    "protein": 0,
    "fat": 0.2,
    "carbs": 56.9
  },
  {
    "name": "Gelé röda vinbär",
    "calories": 280,
    "protein": 0,
    "fat": 0.2,
    "carbs": 68.4
  },
  {
    "name": "Gelé svarta vinbär",
    "calories": 265,
    "protein": 0,
    "fat": 0.2,
    "carbs": 64.7
  },
  {
    "name": "Apelsinmarmelad lättsockrad lag",
    "calories": 185,
    "protein": 0.1,
    "fat": 0.5,
    "carbs": 44.5
  },
  {
    "name": "Marmelad olika smaker",
    "calories": 238,
    "protein": 0.1,
    "fat": 0.3,
    "carbs": 57.7
  },
  {
    "name": "Lingonsylt",
    "calories": 148,
    "protein": 0.2,
    "fat": 0.2,
    "carbs": 35.3
  },
  {
    "name": "Lingonsylt sötningsm.",
    "calories": 43,
    "protein": 0.4,
    "fat": 0.4,
    "carbs": 8.8
  },
  {
    "name": "Jordgubbssylt",
    "calories": 171,
    "protein": 0.1,
    "fat": 0.2,
    "carbs": 41.1
  },
  {
    "name": "Björnbärssylt",
    "calories": 174,
    "protein": 0.1,
    "fat": 0.2,
    "carbs": 41.2
  },
  {
    "name": "Blåbärssylt",
    "calories": 148,
    "protein": 0.3,
    "fat": 0.2,
    "carbs": 34.9
  },
  {
    "name": "Hallonsylt",
    "calories": 184,
    "protein": 0.2,
    "fat": 0.4,
    "carbs": 43.6
  },
  {
    "name": "Hjortronsylt",
    "calories": 181,
    "protein": 0.3,
    "fat": 0.5,
    "carbs": 42
  },
  {
    "name": "Krusbärssylt",
    "calories": 163,
    "protein": 0.2,
    "fat": 0.3,
    "carbs": 38.5
  },
  {
    "name": "Körsbärssylt",
    "calories": 181,
    "protein": 0.3,
    "fat": 0.7,
    "carbs": 42.6
  },
  {
    "name": "Äppelmos",
    "calories": 233,
    "protein": 0,
    "fat": 0.2,
    "carbs": 56.9
  },
  {
    "name": "Äppelmos lättsockrad",
    "calories": 128,
    "protein": 0,
    "fat": 0.2,
    "carbs": 30.9
  },
  {
    "name": "Äppelmos osötad el. sötningsm.",
    "calories": 48,
    "protein": 0,
    "fat": 0.2,
    "carbs": 11.3
  },
  {
    "name": "Cumberlandsås",
    "calories": 214,
    "protein": 0.3,
    "fat": 0.6,
    "carbs": 48
  },
  {
    "name": "Apelsinsaft konc. berikad",
    "calories": 194,
    "protein": 0,
    "fat": 0.3,
    "carbs": 47.5
  },
  {
    "name": "Apelsinsaft drickf. berikad",
    "calories": 30,
    "protein": 0,
    "fat": 0,
    "carbs": 7.5
  },
  {
    "name": "Saft lättsockrad konc.",
    "calories": 213,
    "protein": 0,
    "fat": 0,
    "carbs": 52.4
  },
  {
    "name": "Måltidsdryck drickf.",
    "calories": 36,
    "protein": 0,
    "fat": 0,
    "carbs": 8.8
  },
  {
    "name": "Saft konc.",
    "calories": 213,
    "protein": 0,
    "fat": 0,
    "carbs": 52.4
  },
  {
    "name": "Saft drickf.",
    "calories": 36,
    "protein": 0,
    "fat": 0,
    "carbs": 8.8
  },
  {
    "name": "Svartvinbärssaft konc. berikad",
    "calories": 174,
    "protein": 0,
    "fat": 0.4,
    "carbs": 42.3
  },
  {
    "name": "Saft sötningsm. konc.",
    "calories": 93,
    "protein": 0,
    "fat": 0.5,
    "carbs": 22.5
  },
  {
    "name": "Fruktdryck u. kolsyra",
    "calories": 48,
    "protein": 0,
    "fat": 0,
    "carbs": 11.9
  },
  {
    "name": "Läsk",
    "calories": 36,
    "protein": 0,
    "fat": 0,
    "carbs": 8.8
  },
  {
    "name": "Läsk cola",
    "calories": 43,
    "protein": 0,
    "fat": 0,
    "carbs": 10.5
  },
  {
    "name": "Läsk light",
    "calories": 1,
    "protein": 0,
    "fat": 0,
    "carbs": 0.3
  },
  {
    "name": "Läsk cola light",
    "calories": 0,
    "protein": 0,
    "fat": 0,
    "carbs": 0.1
  },
  {
    "name": "Sportdryck drickf.",
    "calories": 29,
    "protein": 0,
    "fat": 0,
    "carbs": 7.2
  },
  {
    "name": "Saft sötningsm. drickf.",
    "calories": 9,
    "protein": 0,
    "fat": 0,
    "carbs": 2.2
  },
  {
    "name": "Hallonsaft drickf.",
    "calories": 37,
    "protein": 0,
    "fat": 0,
    "carbs": 9
  },
  {
    "name": "Svartvinbärssaft drickf. berikad",
    "calories": 32,
    "protein": 0,
    "fat": 0,
    "carbs": 8
  },
  {
    "name": "Lingondricka drickf. berikad",
    "calories": 28,
    "protein": 0,
    "fat": 0,
    "carbs": 7
  },
  {
    "name": "Äppeldricka drickf. berikad",
    "calories": 32,
    "protein": 0,
    "fat": 0,
    "carbs": 7.9
  },
  {
    "name": "Saft sötningsm. drickf. berikad",
    "calories": 17,
    "protein": 0,
    "fat": 0,
    "carbs": 4.2
  },
  {
    "name": "Glass isglass",
    "calories": 95,
    "protein": 0,
    "fat": 0.1,
    "carbs": 23.2
  },
  {
    "name": "Glass sorbet",
    "calories": 132,
    "protein": 0.6,
    "fat": 0.8,
    "carbs": 30.5
  },
  {
    "name": "Glass isglass saftis",
    "calories": 97,
    "protein": 1.5,
    "fat": 0,
    "carbs": 20.5
  },
  {
    "name": "Chokladdryck m. vatten",
    "calories": 47,
    "protein": 0.3,
    "fat": 3.1,
    "carbs": 7.6
  },
  {
    "name": "Chokladdryck drickf.",
    "calories": 68,
    "protein": 1.5,
    "fat": 3.5,
    "carbs": 9.8
  },
  {
    "name": "Mjölkchoklad m. hackade hasselnötter",
    "calories": 545,
    "protein": 31.8,
    "fat": 8.7,
    "carbs": 55.6
  },
  {
    "name": "Mjölkchoklad fylld m. mandelkrokant",
    "calories": 539,
    "protein": 31.1,
    "fat": 4.1,
    "carbs": 60.1
  },
  {
    "name": "Mjölkchoklad m. mjuk kolafyllning",
    "calories": 484,
    "protein": 23.4,
    "fat": 4.5,
    "carbs": 62.6
  },
  {
    "name": "Kex m. mjölkchokladöverdrag",
    "calories": 521,
    "protein": 28.6,
    "fat": 6.1,
    "carbs": 58.7
  },
  {
    "name": "Kex m. kola mjölkchokladöverdrag",
    "calories": 494,
    "protein": 23.6,
    "fat": 5,
    "carbs": 64.1
  },
  {
    "name": "Mjuk nougat m. kolasås jordnötter mjölkchokladöverdrag",
    "calories": 507,
    "protein": 28.2,
    "fat": 7.6,
    "carbs": 54.4
  },
  {
    "name": "Mjuk chokladmaräng m. kola mjölkchokladöverdrag",
    "calories": 442,
    "protein": 15.3,
    "fat": 4.2,
    "carbs": 70.7
  },
  {
    "name": "Choklad chokladpraliner",
    "calories": 547,
    "protein": 33.7,
    "fat": 7.4,
    "carbs": 53.7
  },
  {
    "name": "Chokladpralin",
    "calories": 540,
    "protein": 33.5,
    "fat": 6.6,
    "carbs": 53.3
  },
  {
    "name": "Mjuk kokos m. mjölkchokladöverdrag",
    "calories": 478,
    "protein": 25.7,
    "fat": 3.6,
    "carbs": 56.1
  },
  {
    "name": "Nötkräm chokladkräm",
    "calories": 542,
    "protein": 32.5,
    "fat": 5.5,
    "carbs": 55.4
  },
  {
    "name": "Mjölkchoklad m. sötningsm.",
    "calories": 577,
    "protein": 39,
    "fat": 10,
    "carbs": 46.9
  },
  {
    "name": "Gelékgodis",
    "calories": 350,
    "protein": 0,
    "fat": 4.7,
    "carbs": 81.3
  },
  {
    "name": "Karameller",
    "calories": 395,
    "protein": 0,
    "fat": 0,
    "carbs": 97.2
  },
  {
    "name": "Kola",
    "calories": 456,
    "protein": 18,
    "fat": 4.1,
    "carbs": 68.9
  },
  {
    "name": "Marmeladkonfekt",
    "calories": 336,
    "protein": 0,
    "fat": 0,
    "carbs": 82.6
  },
  {
    "name": "Skumgodis",
    "calories": 350,
    "protein": 0,
    "fat": 4.7,
    "carbs": 81.3
  },
  {
    "name": "Polkagris",
    "calories": 399,
    "protein": 0,
    "fat": 0,
    "carbs": 98.1
  },
  {
    "name": "Tuggummi",
    "calories": 378,
    "protein": 0,
    "fat": 0.4,
    "carbs": 92.7
  },
  {
    "name": "Klubba chokladkola karamell",
    "calories": 436,
    "protein": 11.1,
    "fat": 2.5,
    "carbs": 80.6
  },
  {
    "name": "Chokladkola mörk m. chokladöverdrag",
    "calories": 470,
    "protein": 18.2,
    "fat": 4.3,
    "carbs": 71.7
  },
  {
    "name": "Kex rån m. chokladfyllning",
    "calories": 500,
    "protein": 24.6,
    "fat": 9.7,
    "carbs": 58.5
  },
  {
    "name": "Fruktkola",
    "calories": 394,
    "protein": 0,
    "fat": 0.7,
    "carbs": 96.3
  },
  {
    "name": "Skumboll m. chokladöverdrag kokos",
    "calories": 412,
    "protein": 20,
    "fat": 5,
    "carbs": 52.6
  },
  {
    "name": "Skumboll m. chokladöverdrag",
    "calories": 396,
    "protein": 15,
    "fat": 5,
    "carbs": 59.6
  },
  {
    "name": "Bar energibar m. choklad nötter",
    "calories": 419,
    "protein": 11.2,
    "fat": 7.1,
    "carbs": 69.6
  },
  {
    "name": "Karameller sockerfria",
    "calories": 169,
    "protein": 0.5,
    "fat": 6.1,
    "carbs": 5.6
  },
  {
    "name": "Tuggummi sockerfritt",
    "calories": 153,
    "protein": 0,
    "fat": 0.6,
    "carbs": 86.1
  },
  {
    "name": "Kakaopulver fett 20-22%",
    "calories": 394,
    "protein": 21.5,
    "fat": 23.5,
    "carbs": 10.6
  },
  {
    "name": "Chokladdryckspulver m. socker fett 2,5%",
    "calories": 402,
    "protein": 2.9,
    "fat": 5.1,
    "carbs": 87.7
  },
  {
    "name": "Chokladboll hemlagad",
    "calories": 450,
    "protein": 24.5,
    "fat": 3.5,
    "carbs": 52.4
  },
  {
    "name": "Måltidsersättning pulver chokladsmak berikad",
    "calories": 376,
    "protein": 9,
    "fat": 35,
    "carbs": 32.6
  },
  {
    "name": "Socker",
    "calories": 405,
    "protein": 0,
    "fat": 0,
    "carbs": 99.6
  },
  {
    "name": "Brun farin",
    "calories": 388,
    "protein": 0,
    "fat": 0,
    "carbs": 95.5
  },
  {
    "name": "Ljus sirap",
    "calories": 323,
    "protein": 0,
    "fat": 0,
    "carbs": 79.6
  },
  {
    "name": "Honung",
    "calories": 332,
    "protein": 0,
    "fat": 0.3,
    "carbs": 81.5
  },
  {
    "name": "Druvsocker",
    "calories": 370,
    "protein": 0,
    "fat": 0,
    "carbs": 91.1
  },
  {
    "name": "Fruktsocker",
    "calories": 373,
    "protein": 0,
    "fat": 0,
    "carbs": 91.7
  },
  {
    "name": "Sorbitol m. sackarin",
    "calories": 235,
    "protein": 0,
    "fat": 0,
    "carbs": 98.5
  },
  {
    "name": "Svagdricka vol. % 2,3",
    "calories": 29,
    "protein": 0,
    "fat": 0.2,
    "carbs": 3.8
  },
  {
    "name": "Öl lättöl vol. % 2,3",
    "calories": 29,
    "protein": 0,
    "fat": 0.2,
    "carbs": 3.8
  },
  {
    "name": "Öl pilsner folköl vol. % 3,5",
    "calories": 40,
    "protein": 0,
    "fat": 0.4,
    "carbs": 4.6
  },
  {
    "name": "Cider vol. % 1",
    "calories": 47,
    "protein": 0,
    "fat": 0,
    "carbs": 10.1
  },
  {
    "name": "Vin vitt vol. % 1",
    "calories": 17,
    "protein": 0,
    "fat": 0,
    "carbs": 2.8
  },
  {
    "name": "Vin rött el. rosé vol. % 1",
    "calories": 17,
    "protein": 0,
    "fat": 0,
    "carbs": 2.8
  },
  {
    "name": "Öl starköl el. exportöl vol. % 5,4",
    "calories": 42,
    "protein": 0,
    "fat": 0,
    "carbs": 3
  },
  {
    "name": "Vin rött vol. % 14",
    "calories": 79,
    "protein": 0,
    "fat": 0,
    "carbs": 1
  },
  {
    "name": "Vin vitt vol. % 12",
    "calories": 70,
    "protein": 0,
    "fat": 0,
    "carbs": 1
  },
  {
    "name": "Vin vitt el. rhenvin vol. % 10",
    "calories": 71,
    "protein": 0,
    "fat": 0.1,
    "carbs": 3.8
  },
  {
    "name": "Glögg vin vol. % 10",
    "calories": 124,
    "protein": 0,
    "fat": 0,
    "carbs": 17
  },
  {
    "name": "Starkvin vol. % 18 typ Madeira",
    "calories": 129,
    "protein": 0,
    "fat": 0,
    "carbs": 7.9
  },
  {
    "name": "Starkvin vitt rött vol. % 20 typ Portvin",
    "calories": 150,
    "protein": 0,
    "fat": 0,
    "carbs": 9.5
  },
  {
    "name": "Starkvin halvtorr vol. % 17 typ Sherry",
    "calories": 125,
    "protein": 0,
    "fat": 0,
    "carbs": 3.4
  },
  {
    "name": "Glögg starkvin vol. % 16",
    "calories": 179,
    "protein": 0,
    "fat": 0,
    "carbs": 22.3
  },
  {
    "name": "Brännvin renat el. vodka vol. % 40",
    "calories": 222,
    "protein": 0,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Likör söt vol. % 24",
    "calories": 266,
    "protein": 0,
    "fat": 0,
    "carbs": 33
  },
  {
    "name": "Likör Kaptenlöjtnant vol. % 38",
    "calories": 321,
    "protein": 0,
    "fat": 0,
    "carbs": 27
  },
  {
    "name": "Konjak el. brandy vol. % 40",
    "calories": 225,
    "protein": 0,
    "fat": 0,
    "carbs": 0.8
  },
  {
    "name": "Punsch vol. % 26",
    "calories": 244,
    "protein": 0,
    "fat": 0,
    "carbs": 26
  },
  {
    "name": "Rom vol. % 40",
    "calories": 223,
    "protein": 0,
    "fat": 0,
    "carbs": 0.3
  },
  {
    "name": "Brännvin kryddat vol. % 40 ",
    "calories": 226,
    "protein": 0,
    "fat": 0,
    "carbs": 1.1
  },
  {
    "name": "Gin vol. % 40",
    "calories": 222,
    "protein": 0,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Whisky vol. % 40",
    "calories": 222,
    "protein": 0,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Likör mindre söt vol. % 24",
    "calories": 232,
    "protein": 0,
    "fat": 0,
    "carbs": 24.7
  },
  {
    "name": "Kaffedrink Irish coffee m.whiskey vispad grädde",
    "calories": 80,
    "protein": 2.7,
    "fat": 0.1,
    "carbs": 4.2
  },
  {
    "name": "Bovetemjöl",
    "calories": 361,
    "protein": 3.6,
    "fat": 13.5,
    "carbs": 65.1
  },
  {
    "name": "Havremust pulver",
    "calories": 361,
    "protein": 7.2,
    "fat": 14,
    "carbs": 54.4
  },
  {
    "name": "Kornmjöl fullkorn",
    "calories": 341,
    "protein": 3,
    "fat": 9.2,
    "carbs": 64.7
  },
  {
    "name": "Majsmjöl gult u. groddar",
    "calories": 354,
    "protein": 3.4,
    "fat": 6,
    "carbs": 71.5
  },
  {
    "name": "Rågmjöl fullkorn",
    "calories": 325,
    "protein": 1.7,
    "fat": 8.1,
    "carbs": 59.3
  },
  {
    "name": "Vetemjöl fullkorn grahamsmjöl",
    "calories": 336,
    "protein": 2,
    "fat": 10.7,
    "carbs": 61
  },
  {
    "name": "Vetediet berikad",
    "calories": 388,
    "protein": 8.5,
    "fat": 19,
    "carbs": 53.5
  },
  {
    "name": "Vetemjöl bagerivetemjöl",
    "calories": 348,
    "protein": 1.6,
    "fat": 10.6,
    "carbs": 70.2
  },
  {
    "name": "Vetemjöl",
    "calories": 352,
    "protein": 1.9,
    "fat": 8.5,
    "carbs": 72.4
  },
  {
    "name": "Majsstärkelse",
    "calories": 362,
    "protein": 0.7,
    "fat": 0,
    "carbs": 87.5
  },
  {
    "name": "Potatismjöl",
    "calories": 346,
    "protein": 0.4,
    "fat": 0,
    "carbs": 84.3
  },
  {
    "name": "Samarinpulver",
    "calories": 0,
    "protein": 0,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Samarin drickf.",
    "calories": 0,
    "protein": 0,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Vatten sodavatten",
    "calories": 0,
    "protein": 0,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Vatten vichyvatten",
    "calories": 0,
    "protein": 0,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Vatten mineralvatten",
    "calories": 0,
    "protein": 0,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Vatten kranvatten",
    "calories": 0,
    "protein": 0,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Snabbkaffe pulver",
    "calories": 305,
    "protein": 0.9,
    "fat": 22.5,
    "carbs": 38.6
  },
  {
    "name": "Snabbkaffe drickf.",
    "calories": 2,
    "protein": 0,
    "fat": 0.1,
    "carbs": 0.4
  },
  {
    "name": "Kaffe bryggt",
    "calories": 2,
    "protein": 0,
    "fat": 0,
    "carbs": 0.5
  },
  {
    "name": "Kaffe espresso bryggt drickf.",
    "calories": 9,
    "protein": 0.2,
    "fat": 0.1,
    "carbs": 1.7
  },
  {
    "name": "Snabbkaffe koffeinfritt drickf.",
    "calories": 2,
    "protein": 0,
    "fat": 0.2,
    "carbs": 0.3
  },
  {
    "name": "Tepulver",
    "calories": 309,
    "protein": 0.4,
    "fat": 11.7,
    "carbs": 61.8
  },
  {
    "name": "Te bryggt",
    "calories": 0,
    "protein": 0,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Örtte drickf.",
    "calories": 1,
    "protein": 0,
    "fat": 0,
    "carbs": 0.3
  },
  {
    "name": "Nyponte drickf. m. svarta vinbär",
    "calories": 3,
    "protein": 0,
    "fat": 0,
    "carbs": 0.7
  },
  {
    "name": "Ättiksprit ättiksyra 12%",
    "calories": 49,
    "protein": 0,
    "fat": 0,
    "carbs": 12
  },
  {
    "name": "Vinäger ättiksyra 7%",
    "calories": 30,
    "protein": 0,
    "fat": 0.4,
    "carbs": 7
  },
  {
    "name": "Äppelcidervinäger ättiksyra 7%",
    "calories": 30,
    "protein": 0,
    "fat": 0.4,
    "carbs": 7
  },
  {
    "name": "Chilisås tomat",
    "calories": 81,
    "protein": 0.5,
    "fat": 1.5,
    "carbs": 16.7
  },
  {
    "name": "Ketchup",
    "calories": 91,
    "protein": 0.5,
    "fat": 1,
    "carbs": 18.5
  },
  {
    "name": "Engelsk brown sauce HP-sås",
    "calories": 107,
    "protein": 0,
    "fat": 1.1,
    "carbs": 25.2
  },
  {
    "name": "Grillsås",
    "calories": 100,
    "protein": 6.9,
    "fat": 1.5,
    "carbs": 8
  },
  {
    "name": "Senap svensk",
    "calories": 173,
    "protein": 6.8,
    "fat": 4.5,
    "carbs": 23.1
  },
  {
    "name": "Senap fransk",
    "calories": 93,
    "protein": 5,
    "fat": 6,
    "carbs": 5.3
  },
  {
    "name": "Sötsur sås",
    "calories": 96,
    "protein": 0,
    "fat": 0.2,
    "carbs": 23.3
  },
  {
    "name": "Salt m. jod",
    "calories": 0,
    "protein": 0,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Salt mineralsalt",
    "calories": 0,
    "protein": 0,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Salt havssalt u. jod",
    "calories": 0,
    "protein": 0,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Salt örtsalt",
    "calories": 18,
    "protein": 0.1,
    "fat": 0.9,
    "carbs": 2.7
  },
  {
    "name": "Jäst färsk",
    "calories": 110,
    "protein": 0.4,
    "fat": 12.1,
    "carbs": 14.1
  },
  {
    "name": "Jäst torkad",
    "calories": 360,
    "protein": 1.6,
    "fat": 37,
    "carbs": 48.1
  },
  {
    "name": "Bakpulver",
    "calories": 174,
    "protein": 0,
    "fat": 0.1,
    "carbs": 42.4
  },
  {
    "name": "Béchamelsås m. lättmjölk grädde",
    "calories": 108,
    "protein": 6.4,
    "fat": 4.3,
    "carbs": 8.2
  },
  {
    "name": "Ljus sås m. mjölk",
    "calories": 109,
    "protein": 5.8,
    "fat": 4.8,
    "carbs": 9.3
  },
  {
    "name": "Ljus sås m. buljong grädde",
    "calories": 101,
    "protein": 8.5,
    "fat": 1.3,
    "carbs": 4.9
  },
  {
    "name": "Béchamelsås",
    "calories": 122,
    "protein": 8,
    "fat": 4.3,
    "carbs": 8.1
  },
  {
    "name": "Gratängsås u. ost hemlagad",
    "calories": 121,
    "protein": 8.8,
    "fat": 3.9,
    "carbs": 6.5
  },
  {
    "name": "Ljus sås m. grädde",
    "calories": 105,
    "protein": 9,
    "fat": 1.3,
    "carbs": 4.9
  },
  {
    "name": "Ostsås",
    "calories": 154,
    "protein": 10.6,
    "fat": 7.3,
    "carbs": 7.3
  },
  {
    "name": "Ostsås m. ädelost",
    "calories": 164,
    "protein": 12.3,
    "fat": 6.9,
    "carbs": 6.6
  },
  {
    "name": "Ostsås till moussaka",
    "calories": 131,
    "protein": 7.4,
    "fat": 8.8,
    "carbs": 7.4
  },
  {
    "name": "Brunsås m. mjölk",
    "calories": 139,
    "protein": 8.1,
    "fat": 4.5,
    "carbs": 11.8
  },
  {
    "name": "Sky",
    "calories": 29,
    "protein": 2.7,
    "fat": 1.2,
    "carbs": 0
  },
  {
    "name": "Brunsås m. buljong grädde",
    "calories": 110,
    "protein": 8.5,
    "fat": 1.3,
    "carbs": 7.3
  },
  {
    "name": "Brunsås m. buljong",
    "calories": 93,
    "protein": 6.5,
    "fat": 1.1,
    "carbs": 7.5
  },
  {
    "name": "Currysås hemlagad",
    "calories": 99,
    "protein": 8.4,
    "fat": 1.4,
    "carbs": 4.6
  },
  {
    "name": "Brunsås m. kaffegrädde",
    "calories": 98,
    "protein": 7.1,
    "fat": 1.3,
    "carbs": 7.4
  },
  {
    "name": "Korintsås",
    "calories": 70,
    "protein": 3,
    "fat": 0.8,
    "carbs": 9.6
  },
  {
    "name": "Brunsås tillagad pulver m. mjölk vatten",
    "calories": 56,
    "protein": 2,
    "fat": 2.2,
    "carbs": 7.1
  },
  {
    "name": "Gräddsås tillagad pulver m. mjölk vatten smör",
    "calories": 117,
    "protein": 8.4,
    "fat": 2.7,
    "carbs": 7.6
  },
  {
    "name": "Tomatsås kryddstark",
    "calories": 54,
    "protein": 2.6,
    "fat": 1.1,
    "carbs": 5.8
  },
  {
    "name": "Dillsås",
    "calories": 106,
    "protein": 7.8,
    "fat": 1.4,
    "carbs": 7.5
  },
  {
    "name": "Äggsås m. persilja",
    "calories": 110,
    "protein": 8.9,
    "fat": 3.5,
    "carbs": 4.1
  },
  {
    "name": "Pesto hemlagad",
    "calories": 545,
    "protein": 55,
    "fat": 10.6,
    "carbs": 1.9
  },
  {
    "name": "Pesto m. basilika pinjenötter cashewnötter",
    "calories": 581,
    "protein": 57.1,
    "fat": 4.2,
    "carbs": 12.6
  },
  {
    "name": "Dippmix pulver olika smaker",
    "calories": 307,
    "protein": 1.1,
    "fat": 11.4,
    "carbs": 59.3
  },
  {
    "name": "Sweet chilisås",
    "calories": 207,
    "protein": 2.9,
    "fat": 0.8,
    "carbs": 43.4
  },
  {
    "name": "Pastasås m. tomat örtkryddor",
    "calories": 106,
    "protein": 4.4,
    "fat": 1.9,
    "carbs": 13.1
  },
  {
    "name": "Pastasås m. basilika",
    "calories": 51,
    "protein": 2.1,
    "fat": 1.6,
    "carbs": 5.3
  },
  {
    "name": "Sötsur sås m. grönsaker konserv.",
    "calories": 107,
    "protein": 2.5,
    "fat": 0.4,
    "carbs": 20.1
  },
  {
    "name": "Orientalisk sås m. grönsaker konserv.",
    "calories": 90,
    "protein": 4.8,
    "fat": 1.1,
    "carbs": 10.1
  },
  {
    "name": "Teriyakisås",
    "calories": 110,
    "protein": 0.8,
    "fat": 3.2,
    "carbs": 22.2
  },
  {
    "name": "Frukostflingor müsli fullkorn m. frukt",
    "calories": 374,
    "protein": 4.5,
    "fat": 8.2,
    "carbs": 69.9
  },
  {
    "name": "Frukostflingor müsli fullkorn m. bär",
    "calories": 366,
    "protein": 3.5,
    "fat": 8.6,
    "carbs": 68.9
  },
  {
    "name": "Frukostflingor müsli fullkorn m. socker frukt nötter",
    "calories": 455,
    "protein": 17.1,
    "fat": 9.9,
    "carbs": 61.2
  },
  {
    "name": "Frukostflingor crunchy fullkorn m. socker russin kokos",
    "calories": 450,
    "protein": 16.3,
    "fat": 7,
    "carbs": 65.5
  },
  {
    "name": "Frukostflingor crunchy naturell m. socker",
    "calories": 461,
    "protein": 17.7,
    "fat": 7.4,
    "carbs": 64.8
  },
  {
    "name": "Frukostflingor müsli fullkorn m. socker frukt kokos",
    "calories": 412,
    "protein": 10.9,
    "fat": 6.5,
    "carbs": 67.6
  },
  {
    "name": "Frukostflingor müsli fullkorn m. socker frukt bär",
    "calories": 466,
    "protein": 18.4,
    "fat": 7.4,
    "carbs": 64.4
  },
  {
    "name": "Frukostflingor müsli flingblandning fullkorn m. frukt nötter  ",
    "calories": 378,
    "protein": 6.1,
    "fat": 9.4,
    "carbs": 66.1
  },
  {
    "name": "Frukostflingor müsli fullkorn m. frukt banan",
    "calories": 381,
    "protein": 7,
    "fat": 8.2,
    "carbs": 65.2
  },
  {
    "name": "Surimi fisk",
    "calories": 105,
    "protein": 0.7,
    "fat": 0.8,
    "carbs": 23.5
  },
  {
    "name": "Matlagningsbas fett 15%",
    "calories": 155,
    "protein": 15.3,
    "fat": 2,
    "carbs": 3
  },
  {
    "name": "Matlagningsbas fett 7%",
    "calories": 89,
    "protein": 7.1,
    "fat": 1.1,
    "carbs": 5.4
  },
  {
    "name": "Vispgrädde ersättningsprod. mjölk olja fett 20%",
    "calories": 206,
    "protein": 19.7,
    "fat": 2.8,
    "carbs": 5
  },
  {
    "name": "Kaffegrädde ersättningsprod. mjölk olja fett 10%",
    "calories": 118,
    "protein": 9.9,
    "fat": 3,
    "carbs": 4.4
  },
  {
    "name": "Vaniljvisp fett 12%",
    "calories": 202,
    "protein": 12.1,
    "fat": 4.4,
    "carbs": 19.1
  },
  {
    "name": "Crème fraiche smaksatt fett 13%",
    "calories": 156,
    "protein": 13.2,
    "fat": 2.9,
    "carbs": 6.7
  },
  {
    "name": "Crème fraiche smaksatt fett 28%",
    "calories": 275,
    "protein": 28.1,
    "fat": 2,
    "carbs": 4.4
  },
  {
    "name": "Mini fraiche fett 5%",
    "calories": 84,
    "protein": 5.2,
    "fat": 3.8,
    "carbs": 5.7
  },
  {
    "name": "Filmjölk naturell fett 4,2%",
    "calories": 68,
    "protein": 4.1,
    "fat": 3.5,
    "carbs": 4.2
  },
  {
    "name": "Vit choklad",
    "calories": 547,
    "protein": 31.2,
    "fat": 5.1,
    "carbs": 61.6
  },
  {
    "name": "Mörk choklad kakao ≥ 70%",
    "calories": 572,
    "protein": 37,
    "fat": 9.7,
    "carbs": 50.7
  },
  {
    "name": "Mörk choklad kakao < 70%",
    "calories": 536,
    "protein": 28.8,
    "fat": 6.3,
    "carbs": 63.1
  },
  {
    "name": "Bakchoklad mörk",
    "calories": 556,
    "protein": 32.8,
    "fat": 5.6,
    "carbs": 59.8
  },
  {
    "name": "Mjölkchoklad",
    "calories": 535,
    "protein": 30.8,
    "fat": 5.2,
    "carbs": 58.1
  },
  {
    "name": "Kebabkött frysvara",
    "calories": 248,
    "protein": 18.6,
    "fat": 14.3,
    "carbs": 6.2
  },
  {
    "name": "Ris avorio okokt",
    "calories": 358,
    "protein": 1.3,
    "fat": 6.7,
    "carbs": 78.1
  },
  {
    "name": "Lök rostad ",
    "calories": 607,
    "protein": 48.5,
    "fat": 6.4,
    "carbs": 35
  },
  {
    "name": "Glass glasspinne m. frukt  mjölk fett 5,5%",
    "calories": 166,
    "protein": 5.6,
    "fat": 3.3,
    "carbs": 25.5
  },
  {
    "name": "Glass glasspinne fett 10%",
    "calories": 199,
    "protein": 10.2,
    "fat": 4.1,
    "carbs": 22.6
  },
  {
    "name": "Bar m. fiber havre vete naturell",
    "calories": 446,
    "protein": 20.8,
    "fat": 6.9,
    "carbs": 49.9
  },
  {
    "name": "Knäckemacka vete olika fyllningar",
    "calories": 487,
    "protein": 25,
    "fat": 11.7,
    "carbs": 52.1
  },
  {
    "name": "Knäckemacka fullkorn råg olika fyllningar",
    "calories": 471,
    "protein": 24.5,
    "fat": 12.6,
    "carbs": 45.9
  },
  {
    "name": "Falafel kikärtskroketter frysvara",
    "calories": 231,
    "protein": 11.3,
    "fat": 8.1,
    "carbs": 21.2
  },
  {
    "name": "Pytt i panna m. sojaprotein veg.",
    "calories": 127,
    "protein": 3.6,
    "fat": 5.6,
    "carbs": 16.3
  },
  {
    "name": "Korv veg. soja- och veteprotein kylvara el. frysvara typ grillkorv",
    "calories": 120,
    "protein": 1.6,
    "fat": 15.3,
    "carbs": 8.7
  },
  {
    "name": "Soja- och veteprotein bullar kylvara el. frysvara",
    "calories": 179,
    "protein": 7.3,
    "fat": 16.7,
    "carbs": 9
  },
  {
    "name": "Sojaprotein färs kylvara el. frysvara",
    "calories": 167,
    "protein": 8.6,
    "fat": 15.2,
    "carbs": 4.8
  },
  {
    "name": "Veteprotein grytbitar",
    "calories": 232,
    "protein": 9.1,
    "fat": 27.4,
    "carbs": 9.9
  },
  {
    "name": "Matlagningsbas m. soja fett 17%",
    "calories": 188,
    "protein": 17.5,
    "fat": 2.9,
    "carbs": 5.2
  },
  {
    "name": "Bar müslibar fullkorn m. röd frukt berikad",
    "calories": 393,
    "protein": 4.4,
    "fat": 8.4,
    "carbs": 77.9
  },
  {
    "name": "Bar müslibar m. choklad berikad",
    "calories": 398,
    "protein": 6.5,
    "fat": 8.1,
    "carbs": 73.2
  },
  {
    "name": "Jordnötssås",
    "calories": 281,
    "protein": 24.2,
    "fat": 6.3,
    "carbs": 8.5
  },
  {
    "name": "Coleslaw hemlagad",
    "calories": 88,
    "protein": 5.9,
    "fat": 0.9,
    "carbs": 6.9
  },
  {
    "name": "Löksås m. grädde",
    "calories": 151,
    "protein": 11.1,
    "fat": 1.5,
    "carbs": 11.1
  },
  {
    "name": "Nudlar äggnudlar kokta m. salt",
    "calories": 130,
    "protein": 1.4,
    "fat": 4.8,
    "carbs": 23.5
  },
  {
    "name": "Nässlor stuvade",
    "calories": 62,
    "protein": 3.7,
    "fat": 4.1,
    "carbs": 2.3
  },
  {
    "name": "Kantarell stuvad",
    "calories": 169,
    "protein": 14.3,
    "fat": 3.5,
    "carbs": 6
  },
  {
    "name": "Gryta ratatouille veg.",
    "calories": 51,
    "protein": 2.3,
    "fat": 1,
    "carbs": 5.8
  },
  {
    "name": "Potatisgratäng m. matlagningsgrädde ost hemlagad",
    "calories": 143,
    "protein": 7.4,
    "fat": 4.8,
    "carbs": 13.4
  },
  {
    "name": "Sjömansbiff",
    "calories": 97,
    "protein": 2.8,
    "fat": 6.8,
    "carbs": 10.4
  },
  {
    "name": "Gryta kreolsk gryta",
    "calories": 175,
    "protein": 12.5,
    "fat": 10.7,
    "carbs": 4.8
  },
  {
    "name": "Flygande Jakob kyckling m. bacon jordnötter banan",
    "calories": 156,
    "protein": 8.2,
    "fat": 13.9,
    "carbs": 6.3
  },
  {
    "name": "Korv prinskorv stekt kött 61%",
    "calories": 283,
    "protein": 25.4,
    "fat": 10.6,
    "carbs": 4
  },
  {
    "name": "Skinkröra kall",
    "calories": 141,
    "protein": 11.1,
    "fat": 7.6,
    "carbs": 2.7
  },
  {
    "name": "Hamburgare blandfärs stekt",
    "calories": 260,
    "protein": 19.2,
    "fat": 22.3,
    "carbs": 0
  },
  {
    "name": "Köttfärssås blandfärs",
    "calories": 97,
    "protein": 5.9,
    "fat": 6,
    "carbs": 4.6
  },
  {
    "name": "Nöt färs fett 10% stekt m. salt",
    "calories": 226,
    "protein": 13.9,
    "fat": 25,
    "carbs": 0.2
  },
  {
    "name": "Nöt el. gris kött stekt",
    "calories": 171,
    "protein": 8.6,
    "fat": 23.5,
    "carbs": 0
  },
  {
    "name": "Carbonara pastasås",
    "calories": 290,
    "protein": 24.2,
    "fat": 17.2,
    "carbs": 1.7
  },
  {
    "name": "Skagenröra hemlagad",
    "calories": 161,
    "protein": 11.6,
    "fat": 12.6,
    "carbs": 1.9
  },
  {
    "name": "Fisksoppa m. rotfrukter",
    "calories": 73,
    "protein": 3.2,
    "fat": 6.3,
    "carbs": 3.9
  },
  {
    "name": "Tonfiskröra hemlagad",
    "calories": 182,
    "protein": 13,
    "fat": 13.3,
    "carbs": 3
  },
  {
    "name": "Havregrynsgröt fullkorn fiberhavregryn",
    "calories": 68,
    "protein": 1.3,
    "fat": 1.8,
    "carbs": 11.2
  },
  {
    "name": "Havregrynsgröt kokt m. mjölk",
    "calories": 89,
    "protein": 2.3,
    "fat": 4.1,
    "carbs": 12.2
  },
  {
    "name": "Nudlar glasnudlar kokta m. salt",
    "calories": 134,
    "protein": 0,
    "fat": 0.1,
    "carbs": 32.9
  },
  {
    "name": "Gröt",
    "calories": 69,
    "protein": 1.4,
    "fat": 2,
    "carbs": 11.4
  },
  {
    "name": "Morotskaka",
    "calories": 386,
    "protein": 21.7,
    "fat": 4,
    "carbs": 43.2
  },
  {
    "name": "Pannkaka tunn m. sojadryck havredryck",
    "calories": 150,
    "protein": 6.5,
    "fat": 4.8,
    "carbs": 17.6
  },
  {
    "name": "Paj m. broccoli skinka",
    "calories": 206,
    "protein": 13.7,
    "fat": 7.8,
    "carbs": 12.4
  },
  {
    "name": "Pizza m. kebabkött hemlagad",
    "calories": 168,
    "protein": 7.3,
    "fat": 6.2,
    "carbs": 18.4
  },
  {
    "name": "Pizza Hawaii m. skinka ananas restaurang",
    "calories": 300,
    "protein": 16.3,
    "fat": 16.1,
    "carbs": 20.7
  },
  {
    "name": "Ostsås m. skinka hemlagad",
    "calories": 143,
    "protein": 8.6,
    "fat": 10.3,
    "carbs": 5.9
  },
  {
    "name": "Tzatziki",
    "calories": 75,
    "protein": 5.5,
    "fat": 2.4,
    "carbs": 4.2
  },
  {
    "name": "Ris à la malta m. lättmjölk mellangrädde fett 27%",
    "calories": 115,
    "protein": 4.1,
    "fat": 3,
    "carbs": 16.2
  },
  {
    "name": "Rödkålssallad m. äpple",
    "calories": 81,
    "protein": 0.1,
    "fat": 0.5,
    "carbs": 18.3
  },
  {
    "name": "Champinjon stekt u. fett",
    "calories": 35,
    "protein": 0.3,
    "fat": 3.1,
    "carbs": 3.5
  },
  {
    "name": "Palsternacka kokt m. salt",
    "calories": 71,
    "protein": 0.6,
    "fat": 1.7,
    "carbs": 12.5
  },
  {
    "name": "Gratängsås m. ost hemlagad",
    "calories": 138,
    "protein": 9.9,
    "fat": 5.9,
    "carbs": 6.5
  },
  {
    "name": "Fänkål kokt m. salt",
    "calories": 28,
    "protein": 0.4,
    "fat": 2.8,
    "carbs": 1.8
  },
  {
    "name": "Kroppkakor el. potatispalt m. fläsk hemlagad",
    "calories": 156,
    "protein": 6.1,
    "fat": 4.6,
    "carbs": 19.7
  },
  {
    "name": "Currysås m. lätt crème fraiche hemlagad",
    "calories": 84,
    "protein": 6.3,
    "fat": 1.1,
    "carbs": 5.5
  },
  {
    "name": "Korv stroganoff mager korv fett 15% grädde fett 15%",
    "calories": 186,
    "protein": 14.7,
    "fat": 7.2,
    "carbs": 6.3
  },
  {
    "name": "Ostkaka fett 7%",
    "calories": 172,
    "protein": 7,
    "fat": 10.4,
    "carbs": 16.6
  },
  {
    "name": "Rapsolja",
    "calories": 884,
    "protein": 100,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Matfettsblandning fett 75% berikad typ Bregott",
    "calories": 667,
    "protein": 75,
    "fat": 0.5,
    "carbs": 0.5
  },
  {
    "name": "Lättmargarin fett 40% berikad typ Lätta",
    "calories": 368,
    "protein": 40,
    "fat": 0.5,
    "carbs": 3
  },
  {
    "name": "Äggröra",
    "calories": 196,
    "protein": 16.4,
    "fat": 11.7,
    "carbs": 1
  },
  {
    "name": "Ägg kokt",
    "calories": 137,
    "protein": 9.7,
    "fat": 12.2,
    "carbs": 0.4
  },
  {
    "name": "Aloe vera juice naturell",
    "calories": 3,
    "protein": 0.1,
    "fat": 0,
    "carbs": 0.5
  },
  {
    "name": "Aloe vera juice m. grönt te",
    "calories": 30,
    "protein": 0.4,
    "fat": 0,
    "carbs": 6.5
  },
  {
    "name": "Aloe vera-dryck m. tranbär äpple",
    "calories": 39,
    "protein": 0.2,
    "fat": 0,
    "carbs": 9.1
  },
  {
    "name": "Aloe vera-dryck naturell",
    "calories": 19,
    "protein": 0.1,
    "fat": 0,
    "carbs": 4.4
  },
  {
    "name": "Toscaglasyr",
    "calories": 522,
    "protein": 39.6,
    "fat": 9.3,
    "carbs": 29.6
  },
  {
    "name": "Pasta makaroner spagetti okokt glutenfri",
    "calories": 362,
    "protein": 1.3,
    "fat": 7.3,
    "carbs": 77.6
  },
  {
    "name": "Pasta fusilli lasagneplattor okokt glutenfri",
    "calories": 361,
    "protein": 1.4,
    "fat": 7.4,
    "carbs": 76.9
  },
  {
    "name": "Pepparkaka glutenfri",
    "calories": 460,
    "protein": 16.2,
    "fat": 1.5,
    "carbs": 75.6
  },
  {
    "name": "Kex digestive fullkorn glutenfri",
    "calories": 462,
    "protein": 16.1,
    "fat": 1.9,
    "carbs": 75.3
  },
  {
    "name": "Hårt bröd glutenfritt fibrer ca 7,5% berikad typ grovknäcke",
    "calories": 372,
    "protein": 2.3,
    "fat": 2.9,
    "carbs": 79.9
  },
  {
    "name": "Pasta tagliatelle m. ägg okokt glutenfri",
    "calories": 384,
    "protein": 4.5,
    "fat": 2.6,
    "carbs": 82.1
  },
  {
    "name": "Pasta okokt majs 100% glutenfri",
    "calories": 366,
    "protein": 1.8,
    "fat": 6.9,
    "carbs": 77.7
  },
  {
    "name": "Bearnaisesås fett 8%",
    "calories": 112,
    "protein": 8,
    "fat": 2.3,
    "carbs": 7.7
  },
  {
    "name": "Klassisk gräddsås fett 6%",
    "calories": 88,
    "protein": 5.8,
    "fat": 2,
    "carbs": 7.1
  },
  {
    "name": "Ostsås fett 8%",
    "calories": 118,
    "protein": 7.6,
    "fat": 4.7,
    "carbs": 7.9
  },
  {
    "name": "Bearnaisesås fett ca 40%",
    "calories": 342,
    "protein": 35.5,
    "fat": 1,
    "carbs": 5.9
  },
  {
    "name": "Rödvinssås fett 1,5%",
    "calories": 65,
    "protein": 1.2,
    "fat": 1.2,
    "carbs": 12.1
  },
  {
    "name": "Kebabsås vit fett 30%",
    "calories": 300,
    "protein": 30.8,
    "fat": 1.7,
    "carbs": 5
  },
  {
    "name": "Svampsås fett 8,5%",
    "calories": 119,
    "protein": 8.7,
    "fat": 2.7,
    "carbs": 7.6
  },
  {
    "name": "Korv varmkorv mager fett 7%",
    "calories": 170,
    "protein": 9.9,
    "fat": 12,
    "carbs": 7.6
  },
  {
    "name": "Korv chorizo mager fett 9%",
    "calories": 160,
    "protein": 9,
    "fat": 14.4,
    "carbs": 4.8
  },
  {
    "name": "Korv middagskorv fett ca 9% kött ca 55 %",
    "calories": 131,
    "protein": 7,
    "fat": 10.1,
    "carbs": 6
  },
  {
    "name": "Påläggskorv salami mager",
    "calories": 174,
    "protein": 8,
    "fat": 24.4,
    "carbs": 1.1
  },
  {
    "name": "Mintplattor m. mörkchokladöverdrag",
    "calories": 448,
    "protein": 16.3,
    "fat": 3.7,
    "carbs": 69
  },
  {
    "name": "Ost mozzarella fett 18%",
    "calories": 214,
    "protein": 16.6,
    "fat": 15.6,
    "carbs": 0.8
  },
  {
    "name": "Ingefära färsk",
    "calories": 63,
    "protein": 0.8,
    "fat": 2.2,
    "carbs": 9
  },
  {
    "name": "Kebabkött restaurang",
    "calories": 302,
    "protein": 22.9,
    "fat": 18.7,
    "carbs": 4.9
  },
  {
    "name": "Fruktdryck nypon blåbär berikad",
    "calories": 48,
    "protein": 0.1,
    "fat": 0.8,
    "carbs": 10.6
  },
  {
    "name": "Energidryck berikad",
    "calories": 39,
    "protein": 0,
    "fat": 0,
    "carbs": 9.6
  },
  {
    "name": "Öl alkoholfri",
    "calories": 15,
    "protein": 0,
    "fat": 0.4,
    "carbs": 3.1
  },
  {
    "name": "Kanel",
    "calories": 255,
    "protein": 3.5,
    "fat": 3.6,
    "carbs": 26.5
  },
  {
    "name": "Flytande margarin mjölkfri fett 80% berikad typ Carlshamn",
    "calories": 707,
    "protein": 80,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Bordsmargarin mjölkfri fett 70% berikad typ Carlshamn",
    "calories": 619,
    "protein": 70,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Hushållsmargarin mjölkfri fett 80% berikad typ Carlshamn",
    "calories": 707,
    "protein": 80,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Småkaka mördeg typ somalisk icun",
    "calories": 472,
    "protein": 24.9,
    "fat": 4.3,
    "carbs": 57
  },
  {
    "name": "Lamm rygg el. hals kokt m. salt",
    "calories": 217,
    "protein": 14.6,
    "fat": 21.6,
    "carbs": 0
  },
  {
    "name": "Tilapia rå",
    "calories": 87,
    "protein": 1.6,
    "fat": 17.9,
    "carbs": 0
  },
  {
    "name": "Lättmargarin fett 28% berikad typ Mini Lätta",
    "calories": 272,
    "protein": 28,
    "fat": 2,
    "carbs": 4
  },
  {
    "name": "Flytande margarin fett 79% berikad typ Becel",
    "calories": 727,
    "protein": 82,
    "fat": 0,
    "carbs": 0.5
  },
  {
    "name": "Ris basmati okokt",
    "calories": 359,
    "protein": 1,
    "fat": 9.2,
    "carbs": 76.7
  },
  {
    "name": "Ris jasmin okokt",
    "calories": 354,
    "protein": 0.7,
    "fat": 7.5,
    "carbs": 78.2
  },
  {
    "name": "Ris råris långkornigt okokt fullkorn",
    "calories": 365,
    "protein": 3,
    "fat": 9.4,
    "carbs": 71.9
  },
  {
    "name": "Ris grötris snabb okokt",
    "calories": 364,
    "protein": 0.6,
    "fat": 6.4,
    "carbs": 81.3
  },
  {
    "name": "Ris långkornigt okokt",
    "calories": 352,
    "protein": 0.7,
    "fat": 7.8,
    "carbs": 76.9
  },
  {
    "name": "Ris långkornigt parboiled okokt",
    "calories": 362,
    "protein": 1.2,
    "fat": 7.7,
    "carbs": 78
  },
  {
    "name": "Ris snabbris okokt salt 1%",
    "calories": 361,
    "protein": 0.2,
    "fat": 7.9,
    "carbs": 79.7
  },
  {
    "name": "Ris snabbris okokt",
    "calories": 365,
    "protein": 0.7,
    "fat": 8.5,
    "carbs": 78.5
  },
  {
    "name": "Ris grötris rundkornigt okokt",
    "calories": 361,
    "protein": 0.8,
    "fat": 6.4,
    "carbs": 80.2
  },
  {
    "name": "Bordsmargarin fett 70% berikad typ Becel Gold",
    "calories": 623,
    "protein": 70,
    "fat": 0.4,
    "carbs": 0.5
  },
  {
    "name": "Blandfärs rå nöt 70% gris 30%",
    "calories": 201,
    "protein": 14.1,
    "fat": 18.8,
    "carbs": 0
  },
  {
    "name": "Blandfärs rå nöt 50% gris 50% ",
    "calories": 213,
    "protein": 15.8,
    "fat": 18,
    "carbs": 0
  },
  {
    "name": "Kebab m. bröd sallad sås",
    "calories": 216,
    "protein": 12,
    "fat": 7.8,
    "carbs": 18.8
  },
  {
    "name": "Kebabtallrik m. pommes frites",
    "calories": 254,
    "protein": 16.6,
    "fat": 6.4,
    "carbs": 19.2
  },
  {
    "name": "Korv m. mos ketchup senap bostongurka",
    "calories": 103,
    "protein": 4.2,
    "fat": 3.1,
    "carbs": 12.4
  },
  {
    "name": "Korv m. bröd ketchup senap",
    "calories": 259,
    "protein": 14.7,
    "fat": 8.5,
    "carbs": 22.4
  },
  {
    "name": "Hamburgare dubbel m. bröd ost inlagd gurka tillagad på restaurang",
    "calories": 260,
    "protein": 13.9,
    "fat": 16.8,
    "carbs": 16.3
  },
  {
    "name": "Hamburgare 90 g m. bröd tillbehör tillagad på restaurang",
    "calories": 249,
    "protein": 14.4,
    "fat": 11.9,
    "carbs": 17.5
  },
  {
    "name": "Hamburgare m. bröd ost tillagad på restaurang",
    "calories": 259,
    "protein": 11.8,
    "fat": 14.2,
    "carbs": 22.9
  },
  {
    "name": "Ris basmati kokt m. salt",
    "calories": 121,
    "protein": 0.3,
    "fat": 3.1,
    "carbs": 25.9
  },
  {
    "name": "Ris jasmin kokt m. salt",
    "calories": 113,
    "protein": 0.2,
    "fat": 2.4,
    "carbs": 25
  },
  {
    "name": "Ris långkornigt kokt m. salt",
    "calories": 113,
    "protein": 0.2,
    "fat": 2.5,
    "carbs": 24.6
  },
  {
    "name": "Ris långkornigt parboiled kokt m. salt",
    "calories": 129,
    "protein": 0.4,
    "fat": 2.8,
    "carbs": 27.9
  },
  {
    "name": "Ris råris långkornigt kokt m. salt fullkorn",
    "calories": 138,
    "protein": 1.1,
    "fat": 3.6,
    "carbs": 27.3
  },
  {
    "name": "Ris snabbris kokt salt 1%",
    "calories": 103,
    "protein": 0.1,
    "fat": 2.3,
    "carbs": 22.8
  },
  {
    "name": "Ris snabbris kokt m. salt",
    "calories": 111,
    "protein": 0.2,
    "fat": 2.6,
    "carbs": 24
  },
  {
    "name": "Pasta tagliatelle m. ägg kokt m. salt glutenfri",
    "calories": 159,
    "protein": 1.9,
    "fat": 1.1,
    "carbs": 34
  },
  {
    "name": "Pasta makaroner spagetti kokt m. salt glutenfri",
    "calories": 153,
    "protein": 0.5,
    "fat": 3.1,
    "carbs": 32.8
  },
  {
    "name": "Pasta kokt m. salt majs 100% glutenfri",
    "calories": 155,
    "protein": 0.8,
    "fat": 2.9,
    "carbs": 33
  },
  {
    "name": "Lasagne blandfärs",
    "calories": 129,
    "protein": 6.1,
    "fat": 6.6,
    "carbs": 11.5
  },
  {
    "name": "Gröna ärtor kokta m. salt frysvara",
    "calories": 69,
    "protein": 0.4,
    "fat": 5.2,
    "carbs": 8.9
  },
  {
    "name": "Gryta kalops älg",
    "calories": 69,
    "protein": 2.2,
    "fat": 8.2,
    "carbs": 3.6
  },
  {
    "name": "Älg högrev rå",
    "calories": 113,
    "protein": 2.3,
    "fat": 22.5,
    "carbs": 0.2
  },
  {
    "name": "Älg ryggbiff rå",
    "calories": 106,
    "protein": 1.1,
    "fat": 23.6,
    "carbs": 0
  },
  {
    "name": "Tacoskal",
    "calories": 481,
    "protein": 23.5,
    "fat": 5.5,
    "carbs": 59.9
  },
  {
    "name": "Romansallat",
    "calories": 16,
    "protein": 0.2,
    "fat": 1.9,
    "carbs": 0.9
  },
  {
    "name": "Ruccolasallat",
    "calories": 21,
    "protein": 0.4,
    "fat": 3.6,
    "carbs": 0
  },
  {
    "name": "Okra kokt u. salt",
    "calories": 25,
    "protein": 0.2,
    "fat": 1.8,
    "carbs": 2.5
  },
  {
    "name": "Litchi",
    "calories": 55,
    "protein": 0.3,
    "fat": 1,
    "carbs": 11.4
  },
  {
    "name": "Carambole stjärnfrukt",
    "calories": 30,
    "protein": 0.4,
    "fat": 0.8,
    "carbs": 4.5
  },
  {
    "name": "Blomkål stekt el. wokad",
    "calories": 71,
    "protein": 4.8,
    "fat": 2.5,
    "carbs": 3.4
  },
  {
    "name": "Broccoli stekt el. wokad",
    "calories": 91,
    "protein": 5.2,
    "fat": 5.5,
    "carbs": 3
  },
  {
    "name": "Morot stekt el. wokad",
    "calories": 103,
    "protein": 6.9,
    "fat": 0.9,
    "carbs": 8.3
  },
  {
    "name": "Palsternacka stekt el. wokad ",
    "calories": 119,
    "protein": 4.1,
    "fat": 2.2,
    "carbs": 15.9
  },
  {
    "name": "Paprika stekt el. wokad ",
    "calories": 78,
    "protein": 5.8,
    "fat": 0.7,
    "carbs": 5.1
  },
  {
    "name": "Purjolök stekt el. wokad",
    "calories": 79,
    "protein": 4.7,
    "fat": 2.1,
    "carbs": 5.3
  },
  {
    "name": "Rotselleri stekt el. wokad",
    "calories": 81,
    "protein": 5.1,
    "fat": 1.3,
    "carbs": 5.7
  },
  {
    "name": "Rödbeta stekt el. wokad ",
    "calories": 96,
    "protein": 3.5,
    "fat": 1.5,
    "carbs": 12.6
  },
  {
    "name": "Kål stekt el. wokad",
    "calories": 73,
    "protein": 3.8,
    "fat": 2.2,
    "carbs": 5.7
  },
  {
    "name": "Blandfärs stekt tacokryddad",
    "calories": 215,
    "protein": 14.9,
    "fat": 17.6,
    "carbs": 2.6
  },
  {
    "name": "Sojaprotein färs stekt tacokryddad",
    "calories": 212,
    "protein": 9,
    "fat": 17.9,
    "carbs": 11.7
  },
  {
    "name": "Potatisgratäng kylvara",
    "calories": 115,
    "protein": 6.8,
    "fat": 2,
    "carbs": 10.5
  },
  {
    "name": "Ugnsrostade grönsaker rotfrukter",
    "calories": 61,
    "protein": 2.7,
    "fat": 1.1,
    "carbs": 6.7
  },
  {
    "name": "Lasagne m. mykoprotein",
    "calories": 126,
    "protein": 4.8,
    "fat": 7.3,
    "carbs": 12.2
  },
  {
    "name": "Kyckling färs stekt tacokryddad",
    "calories": 146,
    "protein": 5.6,
    "fat": 20.6,
    "carbs": 2.7
  },
  {
    "name": "Sushi veg.",
    "calories": 158,
    "protein": 2.2,
    "fat": 2.6,
    "carbs": 30.9
  },
  {
    "name": "Pannkaka tunn hemlagad",
    "calories": 135,
    "protein": 6.3,
    "fat": 5.5,
    "carbs": 13.7
  },
  {
    "name": "Grönsaksblandning m. ärtor bönor morot blomkål typ sommargrönsaker frysvara kokt m. salt",
    "calories": 38,
    "protein": 0.5,
    "fat": 2.4,
    "carbs": 4.5
  },
  {
    "name": "Grönsaksblandning ärter morot frysvara kokt m. salt",
    "calories": 60,
    "protein": 0.5,
    "fat": 3.7,
    "carbs": 9
  },
  {
    "name": "Rismål m. sylt",
    "calories": 129,
    "protein": 3.3,
    "fat": 2.9,
    "carbs": 21.6
  },
  {
    "name": "Rismål m. sylt u. socker m. sötningsm.",
    "calories": 95,
    "protein": 3.2,
    "fat": 3.2,
    "carbs": 13.1
  },
  {
    "name": "Nöt innanlår stekt",
    "calories": 130,
    "protein": 1.9,
    "fat": 27.8,
    "carbs": 0
  },
  {
    "name": "Älgbiff stekt",
    "calories": 124,
    "protein": 1.3,
    "fat": 27.6,
    "carbs": 0
  },
  {
    "name": "Kycklinggryta m. grädde/crème fraiche",
    "calories": 120,
    "protein": 7.9,
    "fat": 8.8,
    "carbs": 3
  },
  {
    "name": "Salt u. jod",
    "calories": 0,
    "protein": 0,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Tiramisu",
    "calories": 232,
    "protein": 12.6,
    "fat": 6,
    "carbs": 21
  },
  {
    "name": "Blåbärspaj",
    "calories": 320,
    "protein": 17.7,
    "fat": 2.9,
    "carbs": 36.1
  },
  {
    "name": "Ost halloumi stekt eller grillad",
    "calories": 308,
    "protein": 23.1,
    "fat": 23.6,
    "carbs": 2
  },
  {
    "name": "Köttgryta m. grädde/crème fraiche",
    "calories": 134,
    "protein": 7.6,
    "fat": 13.4,
    "carbs": 2.8
  },
  {
    "name": "Vilt färs stekt tacokryddad",
    "calories": 130,
    "protein": 3.8,
    "fat": 21,
    "carbs": 2.5
  },
  {
    "name": "Lamm färs stekt tacokryddad",
    "calories": 251,
    "protein": 19.6,
    "fat": 16.1,
    "carbs": 2.6
  },
  {
    "name": "Köttfärs stekt tacokryddad",
    "calories": 210,
    "protein": 14.4,
    "fat": 17.4,
    "carbs": 2.6
  },
  {
    "name": "Vit fisk panerad och stekt",
    "calories": 193,
    "protein": 10.2,
    "fat": 17.5,
    "carbs": 7.6
  },
  {
    "name": "Gryta fisk skaldjur m. grädde/crème fraiche",
    "calories": 107,
    "protein": 5.3,
    "fat": 11.7,
    "carbs": 2.2
  },
  {
    "name": "Fiskgratäng m. grönsaker",
    "calories": 88,
    "protein": 4.5,
    "fat": 8.4,
    "carbs": 3.1
  },
  {
    "name": "Godisklubba ",
    "calories": 395,
    "protein": 0,
    "fat": 3,
    "carbs": 94.2
  },
  {
    "name": "Gräddsås",
    "calories": 253,
    "protein": 23.8,
    "fat": 2.2,
    "carbs": 8.3
  },
  {
    "name": "Skaldjurssås",
    "calories": 106,
    "protein": 7.1,
    "fat": 6.4,
    "carbs": 4.2
  },
  {
    "name": "Dressing hamburgerdressing",
    "calories": 542,
    "protein": 56,
    "fat": 1.3,
    "carbs": 10.1
  },
  {
    "name": "Gulaschsoppa",
    "calories": 62,
    "protein": 2.3,
    "fat": 4.5,
    "carbs": 5.1
  },
  {
    "name": "Fisksoppa skaldjurssoppa u. vin",
    "calories": 51,
    "protein": 1.6,
    "fat": 5.7,
    "carbs": 2.8
  },
  {
    "name": "Pannacotta",
    "calories": 241,
    "protein": 20.5,
    "fat": 3,
    "carbs": 11.8
  },
  {
    "name": "Paj m. ost",
    "calories": 271,
    "protein": 18.3,
    "fat": 11,
    "carbs": 15.6
  },
  {
    "name": "Paj m. grönsaker",
    "calories": 211,
    "protein": 15.3,
    "fat": 6.4,
    "carbs": 11.5
  },
  {
    "name": "Sill inlagd m. gräddfilssås",
    "calories": 290,
    "protein": 23.2,
    "fat": 5.3,
    "carbs": 15.6
  },
  {
    "name": "Sill inlagd m. senapssås",
    "calories": 239,
    "protein": 18,
    "fat": 5.2,
    "carbs": 14.5
  },
  {
    "name": "Hummus kikärtsröra",
    "calories": 306,
    "protein": 26.5,
    "fat": 5.8,
    "carbs": 8.3
  },
  {
    "name": "Muffins hembakad",
    "calories": 347,
    "protein": 17,
    "fat": 3.9,
    "carbs": 44
  },
  {
    "name": "Chokladmuffins hembakad",
    "calories": 416,
    "protein": 17.5,
    "fat": 4.8,
    "carbs": 58.5
  },
  {
    "name": "Sesamkakor sesamkex",
    "calories": 532,
    "protein": 35.6,
    "fat": 12.5,
    "carbs": 38.1
  },
  {
    "name": "Brända mandlar",
    "calories": 507,
    "protein": 29.1,
    "fat": 11.3,
    "carbs": 45.4
  },
  {
    "name": "Chilinötter",
    "calories": 516,
    "protein": 32.3,
    "fat": 16.6,
    "carbs": 36.5
  },
  {
    "name": "Pinjefrö",
    "calories": 697,
    "protein": 66.8,
    "fat": 14.8,
    "carbs": 8.9
  },
  {
    "name": "Bulgur kokt m. salt",
    "calories": 128,
    "protein": 0.5,
    "fat": 4.5,
    "carbs": 24.7
  },
  {
    "name": "Nötter blandade rostade m. salt",
    "calories": 609,
    "protein": 53,
    "fat": 19.7,
    "carbs": 9.3
  },
  {
    "name": "Nötter blandade naturella",
    "calories": 629,
    "protein": 57.2,
    "fat": 16.6,
    "carbs": 7.7
  },
  {
    "name": "Korv ren rå",
    "calories": 252,
    "protein": 18.8,
    "fat": 17.2,
    "carbs": 4
  },
  {
    "name": "Lingonsylt lättsockrad",
    "calories": 111,
    "protein": 0.2,
    "fat": 0.3,
    "carbs": 26
  },
  {
    "name": "Korv lamm rå",
    "calories": 255,
    "protein": 19.3,
    "fat": 15.9,
    "carbs": 4.8
  },
  {
    "name": "Kvarg naturell fett 0,2%",
    "calories": 64,
    "protein": 0.2,
    "fat": 10,
    "carbs": 5.2
  },
  {
    "name": "Brödkrutonger ",
    "calories": 415,
    "protein": 6.6,
    "fat": 11.9,
    "carbs": 73.5
  },
  {
    "name": "Nötter blandade m. frukt bär",
    "calories": 504,
    "protein": 34,
    "fat": 14.5,
    "carbs": 31.1
  },
  {
    "name": "Nötter blandade kanderade",
    "calories": 564,
    "protein": 41.5,
    "fat": 16.2,
    "carbs": 27.7
  },
  {
    "name": "Baklava ",
    "calories": 410,
    "protein": 21.2,
    "fat": 5.5,
    "carbs": 47.4
  },
  {
    "name": "Jordgubbssylt lättsockrad ",
    "calories": 120,
    "protein": 0.2,
    "fat": 0.2,
    "carbs": 28.3
  },
  {
    "name": "Nöt oxfilé stekt",
    "calories": 145,
    "protein": 4.8,
    "fat": 25.4,
    "carbs": 0
  },
  {
    "name": "Älg färs rå",
    "calories": 106,
    "protein": 1.6,
    "fat": 22.6,
    "carbs": 0
  },
  {
    "name": "Älg ytterlår",
    "calories": 108,
    "protein": 1.3,
    "fat": 22.1,
    "carbs": 1.5
  },
  {
    "name": "Chips potatis naturell",
    "calories": 506,
    "protein": 27.9,
    "fat": 5.6,
    "carbs": 55.6
  },
  {
    "name": "Linfröolja",
    "calories": 884,
    "protein": 100,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Frukostflingor havre fullkorn typ Havrefras",
    "calories": 385,
    "protein": 6.9,
    "fat": 12,
    "carbs": 61.8
  },
  {
    "name": "Barnmat klämmis m. yoghurt banan jordgubb konserv.",
    "calories": 78,
    "protein": 1.1,
    "fat": 1.7,
    "carbs": 14.4
  },
  {
    "name": "Sill inlagd olika smaker",
    "calories": 245,
    "protein": 14,
    "fat": 9.8,
    "carbs": 20
  },
  {
    "name": "Quinoa röd kokt m. salt",
    "calories": 140,
    "protein": 2.4,
    "fat": 4.4,
    "carbs": 21.7
  },
  {
    "name": "Bananchips ",
    "calories": 506,
    "protein": 28.1,
    "fat": 1.9,
    "carbs": 59.1
  },
  {
    "name": "Bulgur kokt u. salt fullkorn",
    "calories": 113,
    "protein": 0.6,
    "fat": 4.1,
    "carbs": 20.7
  },
  {
    "name": "Äppelkaka hembakad typ Fyriskaka",
    "calories": 297,
    "protein": 14.5,
    "fat": 3,
    "carbs": 38
  },
  {
    "name": "Kladdkaka",
    "calories": 413,
    "protein": 17.1,
    "fat": 4.7,
    "carbs": 58.7
  },
  {
    "name": "Kyckling bröstfilé kokt u. skinn",
    "calories": 156,
    "protein": 1.8,
    "fat": 34.6,
    "carbs": 0
  },
  {
    "name": "Tahini",
    "calories": 625,
    "protein": 57.2,
    "fat": 20.4,
    "carbs": 3.6
  },
  {
    "name": "Järpar fläskfärs stekta",
    "calories": 200,
    "protein": 14.3,
    "fat": 12.4,
    "carbs": 5.3
  },
  {
    "name": "Gris färs stekt tacokryddad",
    "calories": 221,
    "protein": 16.3,
    "fat": 15.9,
    "carbs": 2.6
  },
  {
    "name": "Nöt färs stekt tacokryddad",
    "calories": 200,
    "protein": 12.7,
    "fat": 18.8,
    "carbs": 2.6
  },
  {
    "name": "Blandfärs stekt m. salt",
    "calories": 241,
    "protein": 16.5,
    "fat": 23.3,
    "carbs": 0
  },
  {
    "name": "Gris färs stekt m. salt fett 15%",
    "calories": 250,
    "protein": 18.5,
    "fat": 21.1,
    "carbs": 0
  },
  {
    "name": "Lamm färs stekt m. salt",
    "calories": 286,
    "protein": 22.7,
    "fat": 21.1,
    "carbs": 0
  },
  {
    "name": "Älg färs stekt m. salt",
    "calories": 129,
    "protein": 1.9,
    "fat": 27.6,
    "carbs": 0
  },
  {
    "name": "Gris hamburgare färsspett hemlagad",
    "calories": 247,
    "protein": 18.3,
    "fat": 20.9,
    "carbs": 0
  },
  {
    "name": "Mykoprotein färs stekt tacokryddad",
    "calories": 155,
    "protein": 5.2,
    "fat": 17.9,
    "carbs": 5.7
  },
  {
    "name": "Sojadryck berikad",
    "calories": 37,
    "protein": 1.5,
    "fat": 2.6,
    "carbs": 3.2
  },
  {
    "name": "Lasagne m. sojafärs",
    "calories": 135,
    "protein": 5.9,
    "fat": 7.1,
    "carbs": 12.6
  },
  {
    "name": "Soygurt smaksatt eko. berikad",
    "calories": 77,
    "protein": 2,
    "fat": 3.4,
    "carbs": 10.7
  },
  {
    "name": "Saftglögg",
    "calories": 27,
    "protein": 0,
    "fat": 0.1,
    "carbs": 6.6
  },
  {
    "name": "Couscous kokt m. salt fullkorn",
    "calories": 144,
    "protein": 0.9,
    "fat": 4.7,
    "carbs": 27
  },
  {
    "name": "Pasta kokt m. salt",
    "calories": 139,
    "protein": 0.6,
    "fat": 4.6,
    "carbs": 27.5
  },
  {
    "name": "Vita bönor torkade kokta m. salt",
    "calories": 112,
    "protein": 0.9,
    "fat": 8.8,
    "carbs": 11
  },
  {
    "name": "Stora vita bönor konserv. u. lag",
    "calories": 107,
    "protein": 0.8,
    "fat": 6.9,
    "carbs": 14.6
  },
  {
    "name": "Kikärtor torkade kokta m. salt",
    "calories": 133,
    "protein": 2.9,
    "fat": 8.1,
    "carbs": 12.6
  },
  {
    "name": "Sötpotatis rå",
    "calories": 71,
    "protein": 0.4,
    "fat": 1.6,
    "carbs": 12.9
  },
  {
    "name": "Sötpotatis ugnsstekt m. olja salt",
    "calories": 118,
    "protein": 3.8,
    "fat": 2,
    "carbs": 16.2
  },
  {
    "name": "Sötpotatis kokt m. salt",
    "calories": 93,
    "protein": 0.5,
    "fat": 2.1,
    "carbs": 16.9
  },
  {
    "name": "Dinkelmjöl fullkorn",
    "calories": 353,
    "protein": 3.3,
    "fat": 11.9,
    "carbs": 63.5
  },
  {
    "name": "Bröd rågsikt fibrer ca 7%",
    "calories": 233,
    "protein": 2.8,
    "fat": 6.8,
    "carbs": 41.8
  },
  {
    "name": "Bröd vitt fibrer ca 5% typ formfranska",
    "calories": 249,
    "protein": 3,
    "fat": 8.6,
    "carbs": 44
  },
  {
    "name": "Hårt bröd fullkorn råg fibrer ca 19% typ Rågi",
    "calories": 338,
    "protein": 1.7,
    "fat": 8.8,
    "carbs": 61.8
  },
  {
    "name": "Bröd fullkorn vete råg fibrer ca 6%",
    "calories": 256,
    "protein": 4,
    "fat": 7.4,
    "carbs": 42.6
  },
  {
    "name": "Bröd vitt fibrer ca 5% typ limpa",
    "calories": 261,
    "protein": 2.8,
    "fat": 7.5,
    "carbs": 47.7
  },
  {
    "name": "Bröd fullkorn råg fibrer ca 7%",
    "calories": 226,
    "protein": 2.3,
    "fat": 9.3,
    "carbs": 38.3
  },
  {
    "name": "Korvbröd grovt",
    "calories": 264,
    "protein": 4.9,
    "fat": 9.3,
    "carbs": 42.4
  },
  {
    "name": "Lax odlad Norge fjordlax rå över disk",
    "calories": 203,
    "protein": 13.4,
    "fat": 20,
    "carbs": 0.7
  },
  {
    "name": "Kikärtor konserv. u. lag",
    "calories": 128,
    "protein": 2.5,
    "fat": 7.5,
    "carbs": 15.7
  },
  {
    "name": "Kidneybönor röda bönor konserv. u. lag",
    "calories": 110,
    "protein": 0.7,
    "fat": 8.8,
    "carbs": 13.4
  },
  {
    "name": "Svarta bönor konserv. u. lag",
    "calories": 111,
    "protein": 1,
    "fat": 8.1,
    "carbs": 13.8
  },
  {
    "name": "Hamburgerbröd",
    "calories": 290,
    "protein": 6.8,
    "fat": 8,
    "carbs": 47
  },
  {
    "name": "Bröd vitt mjölk fibrer ca 4% typ tekaka",
    "calories": 285,
    "protein": 4.1,
    "fat": 8.1,
    "carbs": 51.2
  },
  {
    "name": "Bruna bönor rullpack kylvara",
    "calories": 95,
    "protein": 0.5,
    "fat": 4.4,
    "carbs": 15
  },
  {
    "name": "Gröna linser torkade kokta m. salt",
    "calories": 127,
    "protein": 0.7,
    "fat": 9.4,
    "carbs": 15.9
  },
  {
    "name": "Röda linser torkade kokta m. salt",
    "calories": 125,
    "protein": 0.6,
    "fat": 10.6,
    "carbs": 14.6
  },
  {
    "name": "Röda linser konserv. u. lag",
    "calories": 89,
    "protein": 0.5,
    "fat": 6.9,
    "carbs": 11.9
  },
  {
    "name": "Gröna linser konserv. u. lag",
    "calories": 92,
    "protein": 0.6,
    "fat": 6.2,
    "carbs": 13.1
  },
  {
    "name": "Hamburgerbröd grovt",
    "calories": 263,
    "protein": 5,
    "fat": 7.5,
    "carbs": 43
  },
  {
    "name": "Pasta kokt m. salt fullkorn>50%",
    "calories": 161,
    "protein": 1,
    "fat": 5.8,
    "carbs": 29.9
  },
  {
    "name": "Ägg rått eko.",
    "calories": 141,
    "protein": 10.1,
    "fat": 12.4,
    "carbs": 0.4
  },
  {
    "name": "Äggula rå eko.",
    "calories": 327,
    "protein": 29.2,
    "fat": 16.2,
    "carbs": 0.6
  },
  {
    "name": "Dinkel speltvete kokt m. salt",
    "calories": 135,
    "protein": 1.3,
    "fat": 4.6,
    "carbs": 24.4
  },
  {
    "name": "Muffins m. frukt bär",
    "calories": 352,
    "protein": 17,
    "fat": 4,
    "carbs": 45
  },
  {
    "name": "Kycklingröra hemlagad",
    "calories": 85,
    "protein": 3,
    "fat": 10.3,
    "carbs": 3.6
  },
  {
    "name": "Smoothie m. frukt bär u. mjölk",
    "calories": 51,
    "protein": 0.2,
    "fat": 0.7,
    "carbs": 11
  },
  {
    "name": "Råkostsallad m. morot äpple paprika purjolök",
    "calories": 38,
    "protein": 0.2,
    "fat": 0.7,
    "carbs": 7.4
  },
  {
    "name": "Grönsaker rotfrukter stekta wokade",
    "calories": 81,
    "protein": 4.8,
    "fat": 1.4,
    "carbs": 6.8
  },
  {
    "name": "Rödbetssallad kylvara",
    "calories": 256,
    "protein": 22.8,
    "fat": 1.3,
    "carbs": 11.7
  },
  {
    "name": "Potatissallad kylvara",
    "calories": 236,
    "protein": 20,
    "fat": 1.6,
    "carbs": 12.4
  },
  {
    "name": "Skagenröra m. majonnäs kylvara",
    "calories": 405,
    "protein": 40.1,
    "fat": 5.4,
    "carbs": 6.8
  },
  {
    "name": "Kålrot stekt el. wokad",
    "calories": 79,
    "protein": 3.5,
    "fat": 1.8,
    "carbs": 8
  },
  {
    "name": "Mördegskaka",
    "calories": 503,
    "protein": 32.8,
    "fat": 4.6,
    "carbs": 46.9
  },
  {
    "name": "Huvudsallat",
    "calories": 16,
    "protein": 0.6,
    "fat": 0.9,
    "carbs": 1.2
  },
  {
    "name": "Majskrokar",
    "calories": 410,
    "protein": 3.6,
    "fat": 8.9,
    "carbs": 84.2
  },
  {
    "name": "Wasabi pasta",
    "calories": 280,
    "protein": 10.9,
    "fat": 2.2,
    "carbs": 40
  },
  {
    "name": "Frukt torkad m. socker",
    "calories": 338,
    "protein": 0,
    "fat": 0,
    "carbs": 81.3
  },
  {
    "name": "Korvgryta m. grönsaker",
    "calories": 125,
    "protein": 9.3,
    "fat": 4.4,
    "carbs": 5.6
  },
  {
    "name": "Vattenkastanj rå",
    "calories": 100,
    "protein": 0.4,
    "fat": 0.9,
    "carbs": 21.5
  },
  {
    "name": "Tranbär torkade",
    "calories": 309,
    "protein": 0.6,
    "fat": 0,
    "carbs": 72.1
  },
  {
    "name": "Mâchesallat",
    "calories": 19,
    "protein": 0.2,
    "fat": 2.6,
    "carbs": 0.8
  },
  {
    "name": "Hampafröolja",
    "calories": 883,
    "protein": 99.9,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Hushållsmargarin mjölkfri fett 80% berikad typ Milda",
    "calories": 707,
    "protein": 80,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Lättmargarin fett 40% berikad typ Coop",
    "calories": 358,
    "protein": 40,
    "fat": 0.5,
    "carbs": 0.5
  },
  {
    "name": "Bordsmargarin fett 60% berikad typ Ica Basic",
    "calories": 535,
    "protein": 60,
    "fat": 0.5,
    "carbs": 0.5
  },
  {
    "name": "Hushållsmargarin fett 80% berikad typ ICA",
    "calories": 710,
    "protein": 80,
    "fat": 0.2,
    "carbs": 0.3
  },
  {
    "name": "Nudlar kokta m. kryddor",
    "calories": 102,
    "protein": 4.3,
    "fat": 2.4,
    "carbs": 11.8
  },
  {
    "name": "Grislever stekt m. salt",
    "calories": 184,
    "protein": 6.6,
    "fat": 27.1,
    "carbs": 3.7
  },
  {
    "name": "Lammlever stekt m. salt",
    "calories": 203,
    "protein": 8.8,
    "fat": 26.9,
    "carbs": 3.9
  },
  {
    "name": "Renlever stekt m. salt",
    "calories": 181,
    "protein": 6.9,
    "fat": 27.2,
    "carbs": 2.2
  },
  {
    "name": "Potatis Hasselbackspotatis bakad",
    "calories": 164,
    "protein": 6.6,
    "fat": 2.5,
    "carbs": 22
  },
  {
    "name": "Palmolja",
    "calories": 884,
    "protein": 100,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Ägg stekt eko.",
    "calories": 193,
    "protein": 15.4,
    "fat": 13.5,
    "carbs": 0.5
  },
  {
    "name": "Ägg kokt eko.",
    "calories": 141,
    "protein": 10.1,
    "fat": 12.4,
    "carbs": 0.4
  },
  {
    "name": "Crème fraichesås m. örtkryddor",
    "calories": 160,
    "protein": 14.7,
    "fat": 3,
    "carbs": 4.3
  },
  {
    "name": "Majskolv stekt grillad",
    "calories": 117,
    "protein": 1.2,
    "fat": 3.9,
    "carbs": 20.3
  },
  {
    "name": "Nudelwok m. kött grönsaker",
    "calories": 107,
    "protein": 3.4,
    "fat": 7.8,
    "carbs": 10.4
  },
  {
    "name": "Färs stekt m. salt",
    "calories": 226,
    "protein": 15.2,
    "fat": 22.5,
    "carbs": 0.1
  },
  {
    "name": "Lax panerad stekt m. salt",
    "calories": 255,
    "protein": 17.5,
    "fat": 18.8,
    "carbs": 5.7
  },
  {
    "name": "Pangasiusmal rå",
    "calories": 63,
    "protein": 1.1,
    "fat": 13.1,
    "carbs": 0
  },
  {
    "name": "Kokosbaserad bit berikad som alternativ till ost",
    "calories": 265,
    "protein": 21,
    "fat": 0,
    "carbs": 18.1
  },
  {
    "name": "Potatis Solist rå",
    "calories": 63,
    "protein": 0.1,
    "fat": 1,
    "carbs": 13.6
  },
  {
    "name": "Potatis Swift rå",
    "calories": 53,
    "protein": 0.1,
    "fat": 1.1,
    "carbs": 11
  },
  {
    "name": "Potatis Solist kokt m. salt",
    "calories": 77,
    "protein": 0.1,
    "fat": 1.4,
    "carbs": 16.4
  },
  {
    "name": "Potatis Swift kokt m. salt",
    "calories": 62,
    "protein": 0.1,
    "fat": 1.5,
    "carbs": 12.5
  },
  {
    "name": "Potatis Asterix rå",
    "calories": 74,
    "protein": 0.1,
    "fat": 1.8,
    "carbs": 14.7
  },
  {
    "name": "Nudlar risnudlar okokta",
    "calories": 360,
    "protein": 0.6,
    "fat": 3.4,
    "carbs": 83.2
  },
  {
    "name": "Nudlar risnudlar kokta",
    "calories": 108,
    "protein": 0.2,
    "fat": 0.9,
    "carbs": 24.9
  },
  {
    "name": "Havtorn",
    "calories": 65,
    "protein": 3.2,
    "fat": 1.5,
    "carbs": 5.7
  },
  {
    "name": "Potatis rå",
    "calories": 79,
    "protein": 0.1,
    "fat": 1.7,
    "carbs": 16.4
  },
  {
    "name": "Potatis kokt m. salt",
    "calories": 83,
    "protein": 0.1,
    "fat": 1.8,
    "carbs": 17.5
  },
  {
    "name": "Grönkålssallad",
    "calories": 129,
    "protein": 7.9,
    "fat": 1.9,
    "carbs": 11.4
  },
  {
    "name": "Kålrotslåda",
    "calories": 105,
    "protein": 6.2,
    "fat": 1.9,
    "carbs": 9
  },
  {
    "name": "Potatis färsk kokt m. salt",
    "calories": 71,
    "protein": 0.1,
    "fat": 1.4,
    "carbs": 14.8
  },
  {
    "name": "Potatis färsk rå",
    "calories": 59,
    "protein": 0.1,
    "fat": 1.1,
    "carbs": 12.5
  },
  {
    "name": "Potatis Inova rå",
    "calories": 66,
    "protein": 0.1,
    "fat": 1.9,
    "carbs": 13.1
  },
  {
    "name": "Potatis King Edward rå",
    "calories": 83,
    "protein": 0.1,
    "fat": 1.8,
    "carbs": 17.7
  },
  {
    "name": "Potatis mandelpotatis rå",
    "calories": 89,
    "protein": 0.1,
    "fat": 2.2,
    "carbs": 18.1
  },
  {
    "name": "Potatis kokt m. salt tillagad i storhushåll",
    "calories": 76,
    "protein": 0.1,
    "fat": 1.7,
    "carbs": 15.8
  },
  {
    "name": "Potatis Asterix kokt m. salt",
    "calories": 81,
    "protein": 0.1,
    "fat": 1.9,
    "carbs": 16.7
  },
  {
    "name": "Potatis Inova kokt m. salt",
    "calories": 74,
    "protein": 0.1,
    "fat": 1.8,
    "carbs": 15.2
  },
  {
    "name": "Potatis King Edward kokt m. salt",
    "calories": 84,
    "protein": 0.1,
    "fat": 1.8,
    "carbs": 17.8
  },
  {
    "name": "Potatis mandelpotatis kokt m. salt",
    "calories": 101,
    "protein": 0.1,
    "fat": 2.4,
    "carbs": 21.1
  },
  {
    "name": "Gratäng broccoligratäng m. cottage cheese tomat veg.",
    "calories": 92,
    "protein": 4.8,
    "fat": 9.2,
    "carbs": 2.4
  },
  {
    "name": "Gris färs rå fett 15%",
    "calories": 202,
    "protein": 15.1,
    "fat": 16.8,
    "carbs": 0
  },
  {
    "name": "Hoki rå",
    "calories": 72,
    "protein": 0.5,
    "fat": 16.6,
    "carbs": 0
  },
  {
    "name": "Aronia slånaronia",
    "calories": 48,
    "protein": 0.1,
    "fat": 0.7,
    "carbs": 8.3
  },
  {
    "name": "Vinbär vita",
    "calories": 54,
    "protein": 0.2,
    "fat": 1.4,
    "carbs": 9.5
  },
  {
    "name": "Ris rundkornigt kokt m. salt",
    "calories": 129,
    "protein": 0.3,
    "fat": 2.3,
    "carbs": 28.6
  },
  {
    "name": "Pilgrimsmussla",
    "calories": 43,
    "protein": 0.5,
    "fat": 9.5,
    "carbs": 0
  },
  {
    "name": "Laxbullar tillagade m. sås",
    "calories": 114,
    "protein": 7.2,
    "fat": 5.2,
    "carbs": 7.2
  },
  {
    "name": "Fiskpinnar ugnsstekta",
    "calories": 207,
    "protein": 9.1,
    "fat": 12.3,
    "carbs": 19
  },
  {
    "name": "Skarpsill",
    "calories": 152,
    "protein": 9,
    "fat": 17.6,
    "carbs": 0
  },
  {
    "name": "Sill inlagd u. lag",
    "calories": 235,
    "protein": 12,
    "fat": 9.8,
    "carbs": 21.9
  },
  {
    "name": "Sill höstsill inlagd u. lag",
    "calories": 247,
    "protein": 12,
    "fat": 11.7,
    "carbs": 23.1
  },
  {
    "name": "Sill inlagd senapssill u. sås",
    "calories": 251,
    "protein": 17.8,
    "fat": 7.8,
    "carbs": 15.2
  },
  {
    "name": "Kapkummel rå",
    "calories": 73,
    "protein": 0.6,
    "fat": 16.6,
    "carbs": 0
  },
  {
    "name": "Guldsparid rå",
    "calories": 177,
    "protein": 11.4,
    "fat": 18.9,
    "carbs": 0
  },
  {
    "name": "Havsabborre rå",
    "calories": 134,
    "protein": 6.2,
    "fat": 19.5,
    "carbs": 0
  },
  {
    "name": "Alaska pollock rå",
    "calories": 76,
    "protein": 0.5,
    "fat": 17.6,
    "carbs": 0
  },
  {
    "name": "Guldsparid grillad m. salt",
    "calories": 191,
    "protein": 12.3,
    "fat": 20.4,
    "carbs": 0
  },
  {
    "name": "Havsabborre grillad m. salt",
    "calories": 146,
    "protein": 6.7,
    "fat": 21.2,
    "carbs": 0
  },
  {
    "name": "Olivolja extra jungfruolja",
    "calories": 884,
    "protein": 100,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Rapsolja kallpressad",
    "calories": 884,
    "protein": 100,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Flytande matfettsblandning fett 80% berikad typ Arla smör- och rapsolja",
    "calories": 711,
    "protein": 80,
    "fat": 0.5,
    "carbs": 0.3
  },
  {
    "name": "Matfettsblandning fett 43% berikad typ Bregott mindre",
    "calories": 403,
    "protein": 43,
    "fat": 0.5,
    "carbs": 5
  },
  {
    "name": "Pastasås m. tonfisk curry",
    "calories": 80,
    "protein": 3.6,
    "fat": 7.9,
    "carbs": 3.6
  },
  {
    "name": "Tomat körsbärstomat röd",
    "calories": 25,
    "protein": 0.1,
    "fat": 0.8,
    "carbs": 4.4
  },
  {
    "name": "Tomat torkad m. olja avrunnen",
    "calories": 167,
    "protein": 1.5,
    "fat": 9.4,
    "carbs": 23.3
  },
  {
    "name": "Broccoli kokt u. salt frysvara",
    "calories": 26,
    "protein": 0.3,
    "fat": 2.4,
    "carbs": 2
  },
  {
    "name": "Spenat färsk",
    "calories": 24,
    "protein": 0.4,
    "fat": 3.3,
    "carbs": 0.8
  },
  {
    "name": "Mangold röd småbladig färsk",
    "calories": 16,
    "protein": 0.5,
    "fat": 2.1,
    "carbs": 0
  },
  {
    "name": "Kruksallat",
    "calories": 13,
    "protein": 0.2,
    "fat": 1.9,
    "carbs": 0
  },
  {
    "name": "Lök röd",
    "calories": 46,
    "protein": 0.1,
    "fat": 1.2,
    "carbs": 9
  },
  {
    "name": "Kantarell gul rå",
    "calories": 24,
    "protein": 0.3,
    "fat": 1.7,
    "carbs": 2
  },
  {
    "name": "Hjort kronhjort kött rå",
    "calories": 108,
    "protein": 2,
    "fat": 22.3,
    "carbs": 0
  },
  {
    "name": "Hjort dovhjort färs rå",
    "calories": 134,
    "protein": 5.1,
    "fat": 21.8,
    "carbs": 0
  },
  {
    "name": "Ren kött kallrökt rå",
    "calories": 132,
    "protein": 2.7,
    "fat": 26.2,
    "carbs": 0.5
  },
  {
    "name": "Hjort skav rå",
    "calories": 128,
    "protein": 6.3,
    "fat": 17.9,
    "carbs": 0
  },
  {
    "name": "Korv hjort rå",
    "calories": 230,
    "protein": 17.6,
    "fat": 17,
    "carbs": 1.4
  },
  {
    "name": "Vildsvin bog rå",
    "calories": 104,
    "protein": 1.4,
    "fat": 22.6,
    "carbs": 0
  },
  {
    "name": "Vildsvin filé rå",
    "calories": 111,
    "protein": 1.8,
    "fat": 23.3,
    "carbs": 0
  },
  {
    "name": "Rådjur stek rå",
    "calories": 106,
    "protein": 1.1,
    "fat": 23.6,
    "carbs": 0
  },
  {
    "name": "Vildsvin stek rå",
    "calories": 105,
    "protein": 1.3,
    "fat": 23,
    "carbs": 0
  },
  {
    "name": "Korv kycklingkorv",
    "calories": 197,
    "protein": 13.6,
    "fat": 9.4,
    "carbs": 9.6
  },
  {
    "name": "Vildsvin kött rå",
    "calories": 107,
    "protein": 1.5,
    "fat": 23,
    "carbs": 0
  },
  {
    "name": "Rådjur bog rå",
    "calories": 111,
    "protein": 1.4,
    "fat": 24.3,
    "carbs": 0
  },
  {
    "name": "Ren kött rå",
    "calories": 109,
    "protein": 1.7,
    "fat": 23.1,
    "carbs": 0
  },
  {
    "name": "Nöt kött rå",
    "calories": 128,
    "protein": 4.2,
    "fat": 22.2,
    "carbs": 0
  },
  {
    "name": "Lamm kött rå",
    "calories": 164,
    "protein": 9.4,
    "fat": 19.9,
    "carbs": 0
  },
  {
    "name": "Lamm grytbitar rå",
    "calories": 134,
    "protein": 5.9,
    "fat": 20.1,
    "carbs": 0
  },
  {
    "name": "Bordsmargarin fett 80% berikad typ Flora original",
    "calories": 708,
    "protein": 80,
    "fat": 0.2,
    "carbs": 0
  },
  {
    "name": "Flytande matfettsblandning fett 80% berikad typ Ica raps- och smörolja",
    "calories": 710,
    "protein": 80,
    "fat": 0.2,
    "carbs": 0.3
  },
  {
    "name": "Potatis höst kokt u. salt",
    "calories": 85,
    "protein": 0.1,
    "fat": 1.9,
    "carbs": 17.8
  },
  {
    "name": "Julmust påskmust",
    "calories": 34,
    "protein": 0,
    "fat": 0,
    "carbs": 8.3
  },
  {
    "name": "Slush drickf.",
    "calories": 41,
    "protein": 0,
    "fat": 0,
    "carbs": 10.2
  },
  {
    "name": "Mandeldryck berikad",
    "calories": 26,
    "protein": 1.3,
    "fat": 0,
    "carbs": 3.5
  },
  {
    "name": "Alkoläsk kolsyrad dryck vol. % 4-5",
    "calories": 52,
    "protein": 0,
    "fat": 0,
    "carbs": 5.9
  },
  {
    "name": "Potatis kokt u. salt",
    "calories": 83,
    "protein": 0.1,
    "fat": 1.8,
    "carbs": 17.5
  },
  {
    "name": "Lasagne m. svarta bönor veg. ",
    "calories": 134,
    "protein": 9.6,
    "fat": 4.3,
    "carbs": 7.1
  },
  {
    "name": "Tranbärsdryck drickf. berikad",
    "calories": 39,
    "protein": 0,
    "fat": 0.2,
    "carbs": 9.4
  },
  {
    "name": "Barngröt ätf. flerkorn m. frukt berikad",
    "calories": 105,
    "protein": 4.2,
    "fat": 3.8,
    "carbs": 12.2
  },
  {
    "name": "Barngröt ätf. m. fullkorn frukt bär berikad",
    "calories": 105,
    "protein": 4.1,
    "fat": 3.8,
    "carbs": 12.4
  },
  {
    "name": "Barngröt ätf. m. frukt berikad",
    "calories": 105,
    "protein": 4,
    "fat": 3.5,
    "carbs": 13.1
  },
  {
    "name": "Barngröt ätf. ris mjölkfri berikad",
    "calories": 93,
    "protein": 2.2,
    "fat": 3.2,
    "carbs": 14.6
  },
  {
    "name": "Barngröt ätf. m. fullkorn frukt müsli berikad",
    "calories": 66,
    "protein": 1.5,
    "fat": 2.5,
    "carbs": 10
  },
  {
    "name": "Barngröt ätf. m. yoghurt frukt berikad",
    "calories": 90,
    "protein": 2.1,
    "fat": 3.5,
    "carbs": 13.4
  },
  {
    "name": "Barngröt ätf. havre m. frukt berikad",
    "calories": 77,
    "protein": 1.9,
    "fat": 3.2,
    "carbs": 11.3
  },
  {
    "name": "Barngröt ätf. havre naturell berikad",
    "calories": 97,
    "protein": 2.6,
    "fat": 4.2,
    "carbs": 13.3
  },
  {
    "name": "Barngröt ätf. havre m. frukt bär berikad",
    "calories": 91,
    "protein": 2.2,
    "fat": 3.8,
    "carbs": 13.3
  },
  {
    "name": "Pepparsås",
    "calories": 224,
    "protein": 21.2,
    "fat": 1.9,
    "carbs": 6.6
  },
  {
    "name": "Saffransris",
    "calories": 116,
    "protein": 2,
    "fat": 2.3,
    "carbs": 21.9
  },
  {
    "name": "Ljus sås till fiskgratäng",
    "calories": 198,
    "protein": 17.2,
    "fat": 3.7,
    "carbs": 7.4
  },
  {
    "name": "Gris kött rå",
    "calories": 155,
    "protein": 8.7,
    "fat": 19.2,
    "carbs": 0
  },
  {
    "name": "Gratäng zucchinigratäng m. kalvfärs",
    "calories": 118,
    "protein": 8.8,
    "fat": 6.1,
    "carbs": 3.1
  },
  {
    "name": "Toast m. ost skinka",
    "calories": 282,
    "protein": 14,
    "fat": 15.2,
    "carbs": 22.8
  },
  {
    "name": "Naturgodis olika sorter",
    "calories": 518,
    "protein": 28.8,
    "fat": 6.6,
    "carbs": 56.8
  },
  {
    "name": "Pastagratäng m. kyckling",
    "calories": 172,
    "protein": 11.8,
    "fat": 7.6,
    "carbs": 8.6
  },
  {
    "name": "Tomatsås till pizza hemlagad",
    "calories": 100,
    "protein": 6.8,
    "fat": 1.4,
    "carbs": 7.7
  },
  {
    "name": "Minimjölk fett < 0,1% berikad",
    "calories": 35,
    "protein": 0,
    "fat": 3.6,
    "carbs": 4.8
  },
  {
    "name": "Örtagårdssås m. gräddfil",
    "calories": 283,
    "protein": 28.4,
    "fat": 2.5,
    "carbs": 5
  },
  {
    "name": "Köttfärssås Bolognese m. nötfärs bacon",
    "calories": 110,
    "protein": 7.1,
    "fat": 7.5,
    "carbs": 3
  },
  {
    "name": "Aioli",
    "calories": 762,
    "protein": 84.8,
    "fat": 1.6,
    "carbs": 1.1
  },
  {
    "name": "Guacamole",
    "calories": 139,
    "protein": 13.1,
    "fat": 1.6,
    "carbs": 2.4
  },
  {
    "name": "Pasta carbonara m. pasta fläsk grädde",
    "calories": 189,
    "protein": 8.3,
    "fat": 8.7,
    "carbs": 19.3
  },
  {
    "name": "Brownie",
    "calories": 464,
    "protein": 28.4,
    "fat": 6.4,
    "carbs": 44
  },
  {
    "name": "Fisk m. apelsin chili ugnsstekt",
    "calories": 197,
    "protein": 12.8,
    "fat": 17,
    "carbs": 3.4
  },
  {
    "name": "Pulled pork gris m. marinad tillagad",
    "calories": 172,
    "protein": 8.3,
    "fat": 18.5,
    "carbs": 5.3
  },
  {
    "name": "Tropisk juice drickf.",
    "calories": 44,
    "protein": 0,
    "fat": 0.2,
    "carbs": 10.5
  },
  {
    "name": "Sojabönor färska förvällda u. skal",
    "calories": 130,
    "protein": 6.4,
    "fat": 10.9,
    "carbs": 4.9
  },
  {
    "name": "Sparris grön kokt m. salt",
    "calories": 22,
    "protein": 0.2,
    "fat": 1.9,
    "carbs": 1.8
  },
  {
    "name": "Kålrot kokt",
    "calories": 34,
    "protein": 0.1,
    "fat": 1.3,
    "carbs": 5
  },
  {
    "name": "Brysselkål kokt",
    "calories": 41,
    "protein": 0,
    "fat": 2.6,
    "carbs": 5.5
  },
  {
    "name": "Rotselleri kokt",
    "calories": 25,
    "protein": 0.5,
    "fat": 1,
    "carbs": 2.7
  },
  {
    "name": "Gula ärtor kokta m. salt",
    "calories": 128,
    "protein": 0.6,
    "fat": 8.4,
    "carbs": 16.4
  },
  {
    "name": "Bruna bönor torkade kokta m. salt",
    "calories": 137,
    "protein": 0.9,
    "fat": 8.8,
    "carbs": 16.8
  },
  {
    "name": "Gråärtor kokta m. salt",
    "calories": 130,
    "protein": 0.5,
    "fat": 10.2,
    "carbs": 16.6
  },
  {
    "name": "Åkerbönor torkade kokta m. salt",
    "calories": 134,
    "protein": 0.5,
    "fat": 10.2,
    "carbs": 18.4
  },
  {
    "name": "Äpple Aroma rött",
    "calories": 46,
    "protein": 0,
    "fat": 0,
    "carbs": 10.2
  },
  {
    "name": "Äpple Ingrid Marie rött",
    "calories": 49,
    "protein": 0,
    "fat": 0,
    "carbs": 11
  },
  {
    "name": "Äpple Frida",
    "calories": 56,
    "protein": 0,
    "fat": 0,
    "carbs": 12.6
  },
  {
    "name": "Äpple Golden delicious Granny Smith grönt",
    "calories": 43,
    "protein": 0,
    "fat": 0,
    "carbs": 9.4
  },
  {
    "name": "Kyckling pulled chicken tillagad m. marinad",
    "calories": 133,
    "protein": 5.4,
    "fat": 19.6,
    "carbs": 0.9
  },
  {
    "name": "Tacosås",
    "calories": 32,
    "protein": 0,
    "fat": 1.9,
    "carbs": 5.1
  },
  {
    "name": "Hälleflundra odlad Atlanten rå",
    "calories": 102,
    "protein": 2.4,
    "fat": 20,
    "carbs": 0
  },
  {
    "name": "Korngryn kokt u. salt",
    "calories": 82,
    "protein": 0.7,
    "fat": 2.1,
    "carbs": 15.2
  },
  {
    "name": "Julmust light",
    "calories": 0,
    "protein": 0,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Havregurt naturell fett 2,2% berikad",
    "calories": 76,
    "protein": 2.4,
    "fat": 1.5,
    "carbs": 11.7
  },
  {
    "name": "Fraiche m. havre veg. fett 15% berikad",
    "calories": 185,
    "protein": 15.7,
    "fat": 0.8,
    "carbs": 10.1
  },
  {
    "name": "Havrebaserat bredbart pålägg naturell",
    "calories": 231,
    "protein": 19.6,
    "fat": 2.9,
    "carbs": 10.9
  },
  {
    "name": "Havredryck m. apelsin mango",
    "calories": 55,
    "protein": 0.5,
    "fat": 0.7,
    "carbs": 11.3
  },
  {
    "name": "Korv grillkorv grillad kött 32-35%",
    "calories": 229,
    "protein": 16.3,
    "fat": 7.6,
    "carbs": 12.8
  },
  {
    "name": "Korv falukorv tillagad kött 58%",
    "calories": 267,
    "protein": 23.7,
    "fat": 8.7,
    "carbs": 5.4
  },
  {
    "name": "Korv bratwurst tillagad kryddig kött 73-75%",
    "calories": 267,
    "protein": 22.7,
    "fat": 11.5,
    "carbs": 4.5
  },
  {
    "name": "Blodpudding blodkorv tillagad",
    "calories": 218,
    "protein": 9.4,
    "fat": 8.6,
    "carbs": 23
  },
  {
    "name": "Gris sidfläsk el. stekfläsk rimmat stekt",
    "calories": 385,
    "protein": 38.3,
    "fat": 11.4,
    "carbs": 0.1
  },
  {
    "name": "Korv kabanoss tillagad kryddig kött 90%",
    "calories": 292,
    "protein": 24.8,
    "fat": 16,
    "carbs": 1.4
  },
  {
    "name": "Kryddblandning taco",
    "calories": 284,
    "protein": 3.6,
    "fat": 5.6,
    "carbs": 50.9
  },
  {
    "name": "Bröd vitt vetetortilla",
    "calories": 306,
    "protein": 4.8,
    "fat": 8.4,
    "carbs": 55.5
  },
  {
    "name": "Gris färs tillagad u. salt",
    "calories": 241,
    "protein": 19.9,
    "fat": 16,
    "carbs": 0
  },
  {
    "name": "Te fermenterat m. socker",
    "calories": 17,
    "protein": 0,
    "fat": 0,
    "carbs": 2.2
  },
  {
    "name": "Gris skinka innanlår tillagad",
    "calories": 117,
    "protein": 3.8,
    "fat": 20.5,
    "carbs": 0
  },
  {
    "name": "Gris skinkstek tillagad u. salt",
    "calories": 126,
    "protein": 5.1,
    "fat": 20,
    "carbs": 0
  },
  {
    "name": "Gris ytterfilé tillagad",
    "calories": 120,
    "protein": 5.8,
    "fat": 17,
    "carbs": 0
  },
  {
    "name": "Gris fläskkotlett tillagad",
    "calories": 133,
    "protein": 6,
    "fat": 19.6,
    "carbs": 0
  },
  {
    "name": "Gris fläskfilé tillagad",
    "calories": 118,
    "protein": 4.1,
    "fat": 20,
    "carbs": 0
  },
  {
    "name": "Nöt kalv lever tillagad",
    "calories": 150,
    "protein": 3.5,
    "fat": 20,
    "carbs": 9.3
  },
  {
    "name": "Kyckling lever ugnsstekt",
    "calories": 124,
    "protein": 4.6,
    "fat": 16,
    "carbs": 4.5
  },
  {
    "name": "Gris lever tillagad",
    "calories": 142,
    "protein": 3.2,
    "fat": 22,
    "carbs": 6
  },
  {
    "name": "Kalkon rökt tunna skivor",
    "calories": 98,
    "protein": 2.1,
    "fat": 18.3,
    "carbs": 1.1
  },
  {
    "name": "Korv veg. soja- och veteprotein tillagad typ middagskorv",
    "calories": 252,
    "protein": 15.3,
    "fat": 14,
    "carbs": 14.1
  },
  {
    "name": "Gratäng m. korv rotfrukt",
    "calories": 191,
    "protein": 14.6,
    "fat": 5.5,
    "carbs": 9.1
  },
  {
    "name": "Pastasås m. lax crème fraiche grädde dill",
    "calories": 266,
    "protein": 23.3,
    "fat": 12,
    "carbs": 2.6
  },
  {
    "name": "Cashewnötter rostade m. salt",
    "calories": 597,
    "protein": 48.7,
    "fat": 18,
    "carbs": 19.1
  },
  {
    "name": "Gris kassler tillagad",
    "calories": 148,
    "protein": 8.2,
    "fat": 18.6,
    "carbs": 0
  },
  {
    "name": "Kyckling bröstfilé tillagad u. skinn frysvara",
    "calories": 98,
    "protein": 2,
    "fat": 19.7,
    "carbs": 0
  },
  {
    "name": "Drickyoghurt smaksatt fett ca 1%",
    "calories": 59,
    "protein": 0.8,
    "fat": 2.8,
    "carbs": 10.1
  },
  {
    "name": "Ost hårdost eko. fett 28%",
    "calories": 352,
    "protein": 27,
    "fat": 25.2,
    "carbs": 2.7
  },
  {
    "name": "Vaniljsås ätf.",
    "calories": 109,
    "protein": 3.9,
    "fat": 3,
    "carbs": 15.3
  },
  {
    "name": "Yoghurt naturell eko. fett 3% berikad",
    "calories": 56,
    "protein": 2.7,
    "fat": 3.2,
    "carbs": 4.7
  },
  {
    "name": "Pannkaka tunn helfabrikat",
    "calories": 186,
    "protein": 5.8,
    "fat": 6.5,
    "carbs": 25.9
  },
  {
    "name": "Hårt bröd fullkorn råg fiber ca 20% typ sport ",
    "calories": 352,
    "protein": 3.3,
    "fat": 8.6,
    "carbs": 64
  },
  {
    "name": "Bröd vitt grovt m. nyckelhål typ formfranska",
    "calories": 260,
    "protein": 4.2,
    "fat": 8.6,
    "carbs": 43.8
  },
  {
    "name": "Bröd vitt typ levain",
    "calories": 249,
    "protein": 1.4,
    "fat": 7.5,
    "carbs": 49.5
  },
  {
    "name": "Frukostflingor müsli vete havre råg korn fullkorn m. frukt nötter fröer",
    "calories": 445,
    "protein": 20.1,
    "fat": 15.2,
    "carbs": 47.2
  },
  {
    "name": "Mandelmjöl",
    "calories": 610,
    "protein": 53.1,
    "fat": 22.4,
    "carbs": 7.4
  },
  {
    "name": "Filmjölk eko. fett 3% berikad",
    "calories": 57,
    "protein": 2.9,
    "fat": 3.3,
    "carbs": 4.5
  },
  {
    "name": "Kvarg drickf. olika smaker",
    "calories": 42,
    "protein": 0.2,
    "fat": 5.4,
    "carbs": 4.6
  },
  {
    "name": "Kvarg smaksatt sötningsm.",
    "calories": 64,
    "protein": 0.2,
    "fat": 10,
    "carbs": 5.2
  },
  {
    "name": "Kvarg smaksatt m. socker",
    "calories": 64,
    "protein": 0.2,
    "fat": 10,
    "carbs": 5.2
  },
  {
    "name": "Drickyoghurt smaksatt fett ca 1% socker ca 8%",
    "calories": 59,
    "protein": 0.8,
    "fat": 2.8,
    "carbs": 10.1
  },
  {
    "name": "Drickyoghurt smaksatt fett ca 1% socker ca 11%",
    "calories": 59,
    "protein": 0.8,
    "fat": 2.8,
    "carbs": 10.1
  },
  {
    "name": "Frukostflingor fullkorn berikad typ Specialflingor",
    "calories": 384,
    "protein": 2.2,
    "fat": 9.2,
    "carbs": 78.7
  },
  {
    "name": "Yoghurt naturell fett 10%",
    "calories": 109,
    "protein": 8.3,
    "fat": 3.6,
    "carbs": 5.2
  },
  {
    "name": "Pizza m. köttfärs frysvara",
    "calories": 218,
    "protein": 6.6,
    "fat": 10.3,
    "carbs": 27.7
  },
  {
    "name": "Pizza m. köttstek frysvara",
    "calories": 215,
    "protein": 5.3,
    "fat": 11.9,
    "carbs": 28.2
  },
  {
    "name": "Pizza m. tomat mozzarella veg. frysvara",
    "calories": 269,
    "protein": 12.5,
    "fat": 11,
    "carbs": 26.8
  },
  {
    "name": "Noni fruktpuré",
    "calories": 36,
    "protein": 0.1,
    "fat": 0.6,
    "carbs": 7.2
  },
  {
    "name": "Fisk Bordelaise",
    "calories": 116,
    "protein": 3.9,
    "fat": 14.8,
    "carbs": 5.2
  },
  {
    "name": "Ostkräm",
    "calories": 613,
    "protein": 65.1,
    "fat": 7.9,
    "carbs": 1.3
  },
  {
    "name": "Äppeljuice konc.",
    "calories": 164,
    "protein": 0.1,
    "fat": 3.8,
    "carbs": 36.3
  },
  {
    "name": "Matvete kokt m. salt",
    "calories": 178,
    "protein": 0.7,
    "fat": 4.5,
    "carbs": 33.5
  },
  {
    "name": "Mathavre kokt m. salt",
    "calories": 199,
    "protein": 3,
    "fat": 5.8,
    "carbs": 33.1
  },
  {
    "name": "Psylliumfröskal",
    "calories": 199,
    "protein": 0.5,
    "fat": 1.2,
    "carbs": 10
  },
  {
    "name": "Chiafrö",
    "calories": 448,
    "protein": 33.9,
    "fat": 19.4,
    "carbs": 0
  },
  {
    "name": "Hampafrö m. skal",
    "calories": 443,
    "protein": 32.9,
    "fat": 20.9,
    "carbs": 0
  },
  {
    "name": "Hampafrö u. skal",
    "calories": 609,
    "protein": 53.6,
    "fat": 28,
    "carbs": 2.6
  },
  {
    "name": "Vallmofrö",
    "calories": 534,
    "protein": 45.9,
    "fat": 17.9,
    "carbs": 4.8
  },
  {
    "name": "Senap sötstark",
    "calories": 271,
    "protein": 6.4,
    "fat": 3.7,
    "carbs": 48.9
  },
  {
    "name": "Kokosolja",
    "calories": 881,
    "protein": 99.3,
    "fat": 0,
    "carbs": 0.7
  },
  {
    "name": "Majonnäs m. sojabönolja fett 80%",
    "calories": 677,
    "protein": 74.7,
    "fat": 1.3,
    "carbs": 2.7
  },
  {
    "name": "Majonnäs m. solrosolja fett 80%",
    "calories": 656,
    "protein": 70.3,
    "fat": 1.3,
    "carbs": 7.1
  },
  {
    "name": "Kräfta kräftstjärtar konserv. u. lag",
    "calories": 71,
    "protein": 0.4,
    "fat": 15.6,
    "carbs": 0.8
  },
  {
    "name": "Sikrom Nordamerikansk",
    "calories": 185,
    "protein": 9.1,
    "fat": 20,
    "carbs": 5.7
  },
  {
    "name": "Påläggskaviar m. färskost",
    "calories": 288,
    "protein": 23,
    "fat": 5.9,
    "carbs": 13.8
  },
  {
    "name": "Tångkaviar röd",
    "calories": 10,
    "protein": 0.2,
    "fat": 0.3,
    "carbs": 0.4
  },
  {
    "name": "Tångkaviar påläggskaviar",
    "calories": 299,
    "protein": 25.8,
    "fat": 0.7,
    "carbs": 16.4
  },
  {
    "name": "Lax vildfångad Sverige rå",
    "calories": 188,
    "protein": 10.4,
    "fat": 22.5,
    "carbs": 1.1
  },
  {
    "name": "Lax odlad Norge fjordlax rå frysvara",
    "calories": 217,
    "protein": 15.1,
    "fat": 19.4,
    "carbs": 1.2
  },
  {
    "name": "Lax odlad Norge fjordlax rå förpackad",
    "calories": 210,
    "protein": 13.9,
    "fat": 21.2,
    "carbs": 0.3
  },
  {
    "name": "Välling för barn pulver fullkorn osötad berikad",
    "calories": 425,
    "protein": 13.8,
    "fat": 14.9,
    "carbs": 59.1
  },
  {
    "name": "Välling för barn pulver havre osötad berikad",
    "calories": 460,
    "protein": 18,
    "fat": 14.5,
    "carbs": 59.6
  },
  {
    "name": "Välling för barn pulver majs osötad berikad",
    "calories": 463,
    "protein": 18.7,
    "fat": 13.8,
    "carbs": 59.4
  },
  {
    "name": "Välling för barn pulver havre mjölkfri osötad berikad",
    "calories": 415,
    "protein": 11.2,
    "fat": 10.8,
    "carbs": 65.6
  },
  {
    "name": "Barngröt pulver havre m. banan äpple mjölkfri osötad berikad",
    "calories": 423,
    "protein": 10.6,
    "fat": 13.2,
    "carbs": 66.4
  },
  {
    "name": "Barngröt pulver naturell fullkorn osötad berikad",
    "calories": 449,
    "protein": 16,
    "fat": 15.9,
    "carbs": 58.7
  },
  {
    "name": "Barnmat pasta couscous m. kyckling konserv.",
    "calories": 78,
    "protein": 2.8,
    "fat": 4.2,
    "carbs": 8
  },
  {
    "name": "Barnmat spagetti m. köttfärssås konserv.",
    "calories": 70,
    "protein": 2.7,
    "fat": 3.6,
    "carbs": 6.8
  },
  {
    "name": "Barnmat potatis m. nötköttsgryta konserv.",
    "calories": 79,
    "protein": 3.3,
    "fat": 3,
    "carbs": 8.4
  },
  {
    "name": "Barnmat pastagratäng m. fläskkött konserv.",
    "calories": 79,
    "protein": 2.5,
    "fat": 6.5,
    "carbs": 7.6
  },
  {
    "name": "Barnmat fiskgryta konserv.",
    "calories": 80,
    "protein": 3.3,
    "fat": 3.4,
    "carbs": 8.4
  },
  {
    "name": "Barnmat lasagne pastagratäng veg. m. grönsaker konserv.",
    "calories": 86,
    "protein": 3.2,
    "fat": 3.4,
    "carbs": 9.7
  },
  {
    "name": "Barnmat frukt bär m. yoghurt konserv.",
    "calories": 77,
    "protein": 1.2,
    "fat": 1.8,
    "carbs": 13.9
  },
  {
    "name": "Barnmat frukt bär m. yoghurt konserv. berikad",
    "calories": 77,
    "protein": 1.2,
    "fat": 1.8,
    "carbs": 13.9
  },
  {
    "name": "Fruktstång fruktgodis",
    "calories": 384,
    "protein": 6.9,
    "fat": 2.1,
    "carbs": 75.8
  },
  {
    "name": "Fruktstång fruktgodis berikad",
    "calories": 384,
    "protein": 6.9,
    "fat": 2.1,
    "carbs": 75.8
  },
  {
    "name": "Barnmat klämmis m. gröt päron mango havre hirs konserv.",
    "calories": 77,
    "protein": 0.5,
    "fat": 1.4,
    "carbs": 15.3
  },
  {
    "name": "Välling för barn drickf. fullkorn osötad berikad",
    "calories": 59,
    "protein": 1.9,
    "fat": 2.1,
    "carbs": 8.1
  },
  {
    "name": "Välling för barn drickf. mild havre osötad berikad",
    "calories": 63,
    "protein": 2.5,
    "fat": 2,
    "carbs": 8.2
  },
  {
    "name": "Välling för barn drickf. majs osötad berikad",
    "calories": 70,
    "protein": 2.8,
    "fat": 2.1,
    "carbs": 9
  },
  {
    "name": "Välling för barn drickf. havre mjölkfri osötad berikad",
    "calories": 57,
    "protein": 1.5,
    "fat": 1.5,
    "carbs": 9
  },
  {
    "name": "Barngröt ätf. havre m. banan äpple mjölkfri osötad berikad",
    "calories": 98,
    "protein": 2.4,
    "fat": 3,
    "carbs": 15.3
  },
  {
    "name": "Barngröt ätf. naturell fullkorn osötad berikad",
    "calories": 104,
    "protein": 3.7,
    "fat": 3.7,
    "carbs": 13.5
  },
  {
    "name": "Sojaprotein bitar kylvara el. frysvara typ Tzay®",
    "calories": 161,
    "protein": 5.4,
    "fat": 16.4,
    "carbs": 9.3
  },
  {
    "name": "Sojaprotein bitar frysvara typ Oumph®",
    "calories": 91,
    "protein": 0.5,
    "fat": 18.6,
    "carbs": 0
  },
  {
    "name": "Havreprotein pulled havre strimlor kylvara el. frysvara",
    "calories": 203,
    "protein": 4,
    "fat": 30.4,
    "carbs": 9
  },
  {
    "name": "Sojaprotein färs kylvara el. frysvara berikad",
    "calories": 167,
    "protein": 8.6,
    "fat": 15.2,
    "carbs": 4.8
  },
  {
    "name": "Soja- och veteprotein färs frysvara",
    "calories": 162,
    "protein": 3,
    "fat": 18.6,
    "carbs": 11.9
  },
  {
    "name": "Sojaprotein bullar kylvara el. frysvara",
    "calories": 179,
    "protein": 10.4,
    "fat": 13.6,
    "carbs": 5.5
  },
  {
    "name": "Mykoprotein bullar frysvara",
    "calories": 123,
    "protein": 3.3,
    "fat": 13.3,
    "carbs": 8.3
  },
  {
    "name": "Mykoprotein nugget kylvara el. frysvara",
    "calories": 194,
    "protein": 8,
    "fat": 11.3,
    "carbs": 17
  },
  {
    "name": "Sojaprotein nugget kylvara el. frysvara",
    "calories": 214,
    "protein": 10.6,
    "fat": 11.3,
    "carbs": 15.8
  },
  {
    "name": "Soja- och veteprotein nugget kylvara el. frysvara",
    "calories": 237,
    "protein": 11.4,
    "fat": 18.6,
    "carbs": 13.5
  },
  {
    "name": "Soja- och veteprotein nugget kylvara el. frysvara berikad",
    "calories": 237,
    "protein": 11.4,
    "fat": 18.6,
    "carbs": 13.5
  },
  {
    "name": "Soja- och veteprotein bitar som alternativ till bacon kylvara el. frysvara",
    "calories": 211,
    "protein": 11.8,
    "fat": 18.4,
    "carbs": 6.3
  },
  {
    "name": "Soja- och veteprotein schnitzel kylvara el. frysvara",
    "calories": 239,
    "protein": 12.8,
    "fat": 12.9,
    "carbs": 16.3
  },
  {
    "name": "Soja- och veteprotein schnitzel kylvara el. frysvara berikad",
    "calories": 239,
    "protein": 12.8,
    "fat": 12.9,
    "carbs": 16.3
  },
  {
    "name": "Mykoprotein schnitzel kylvara el. frysvara",
    "calories": 243,
    "protein": 12.8,
    "fat": 12.4,
    "carbs": 18.4
  },
  {
    "name": "Mykoprotein färs bitar filé stekt",
    "calories": 105,
    "protein": 1.9,
    "fat": 16.7,
    "carbs": 2.3
  },
  {
    "name": "Falafel kikärtskroketter stekta",
    "calories": 257,
    "protein": 12.6,
    "fat": 9,
    "carbs": 23.6
  },
  {
    "name": "Falafel kikärtskroketter ugnsstekta",
    "calories": 285,
    "protein": 13.9,
    "fat": 10,
    "carbs": 26.1
  },
  {
    "name": "Soja- och veteprotein bullar stekta",
    "calories": 204,
    "protein": 8.3,
    "fat": 19,
    "carbs": 10.3
  },
  {
    "name": "Soja- och veteprotein bullar ugnsstekta",
    "calories": 216,
    "protein": 8.8,
    "fat": 20.1,
    "carbs": 10.8
  },
  {
    "name": "Sojaprotein färs stekt",
    "calories": 252,
    "protein": 13,
    "fat": 22.9,
    "carbs": 7.2
  },
  {
    "name": "Sojaprotein bitar stekta typ Tzay®",
    "calories": 169,
    "protein": 5.7,
    "fat": 17.2,
    "carbs": 9.8
  },
  {
    "name": "Sojaprotein bitar stekta typ Oumph®",
    "calories": 97,
    "protein": 0.5,
    "fat": 19.8,
    "carbs": 0
  },
  {
    "name": "Havreprotein pulled havre strimlor stekt",
    "calories": 277,
    "protein": 5.5,
    "fat": 41.5,
    "carbs": 12.3
  },
  {
    "name": "Sojaprotein färs stekt berikad",
    "calories": 252,
    "protein": 13,
    "fat": 22.9,
    "carbs": 7.2
  },
  {
    "name": "Soja- och veteprotein färs stekt",
    "calories": 234,
    "protein": 4.3,
    "fat": 26.8,
    "carbs": 17.2
  },
  {
    "name": "Ärtprotein färs stekt",
    "calories": 272,
    "protein": 8.9,
    "fat": 38,
    "carbs": 8.1
  },
  {
    "name": "Sojaprotein bullar stekta",
    "calories": 206,
    "protein": 12,
    "fat": 15.7,
    "carbs": 6.3
  },
  {
    "name": "Sojaprotein bullar ugnsstekta",
    "calories": 219,
    "protein": 12.7,
    "fat": 16.7,
    "carbs": 6.7
  },
  {
    "name": "Mykoprotein bullar stekta",
    "calories": 144,
    "protein": 3.9,
    "fat": 15.6,
    "carbs": 9.7
  },
  {
    "name": "Mykoprotein nugget stekt",
    "calories": 229,
    "protein": 12.5,
    "fat": 10.9,
    "carbs": 16.4
  },
  {
    "name": "Mykoprotein nugget ugnsstekt",
    "calories": 196,
    "protein": 8.1,
    "fat": 11.4,
    "carbs": 17.2
  },
  {
    "name": "Sojaprotein nugget stekt",
    "calories": 248,
    "protein": 15,
    "fat": 10.9,
    "carbs": 15.2
  },
  {
    "name": "Sojaprotein nugget ugnsstekt",
    "calories": 216,
    "protein": 10.7,
    "fat": 11.4,
    "carbs": 16
  },
  {
    "name": "Soja- och veteprotein nugget stekt",
    "calories": 270,
    "protein": 15.8,
    "fat": 17.9,
    "carbs": 13
  },
  {
    "name": "Soja- och veteprotein nugget ugnsstekt",
    "calories": 239,
    "protein": 11.5,
    "fat": 18.8,
    "carbs": 13.6
  },
  {
    "name": "Soja- och veteprotein nugget stekt berikad",
    "calories": 270,
    "protein": 15.8,
    "fat": 17.9,
    "carbs": 13
  },
  {
    "name": "Soja- och veteprotein nugget ugnsstekt berikad",
    "calories": 239,
    "protein": 11.5,
    "fat": 18.8,
    "carbs": 13.6
  },
  {
    "name": "Soja- och veteprotein baconimitation stekt",
    "calories": 238,
    "protein": 13.3,
    "fat": 20.7,
    "carbs": 7.1
  },
  {
    "name": "Soja- och veteprotein schnitzel stekt",
    "calories": 272,
    "protein": 17.1,
    "fat": 12.4,
    "carbs": 15.7
  },
  {
    "name": "Soja- och veteprotein schnitzel ugnsstekt",
    "calories": 241,
    "protein": 12.9,
    "fat": 13,
    "carbs": 16.5
  },
  {
    "name": "Soja- och veteprotein schnitzel stekt berikad",
    "calories": 272,
    "protein": 17.1,
    "fat": 12.4,
    "carbs": 15.7
  },
  {
    "name": "Soja- och veteprotein schnitzel ugnsstekt berikad",
    "calories": 266,
    "protein": 14.3,
    "fat": 14.4,
    "carbs": 18.2
  },
  {
    "name": "Mykoprotein schnitzel ugnsstekt",
    "calories": 276,
    "protein": 17.1,
    "fat": 11.9,
    "carbs": 17.7
  },
  {
    "name": "Äggstanning",
    "calories": 88,
    "protein": 5.1,
    "fat": 7.3,
    "carbs": 3.3
  },
  {
    "name": "Jams kokt u. salt",
    "calories": 124,
    "protein": 0.2,
    "fat": 1.6,
    "carbs": 27.4
  },
  {
    "name": "Vindruvor gröna",
    "calories": 67,
    "protein": 0.2,
    "fat": 0.7,
    "carbs": 14.7
  },
  {
    "name": "Vindruvor röda",
    "calories": 72,
    "protein": 0.1,
    "fat": 0.6,
    "carbs": 16.4
  },
  {
    "name": "Dressing hamburgerdressing lätt fett 28 %",
    "calories": 273,
    "protein": 27.2,
    "fat": 0.9,
    "carbs": 7
  },
  {
    "name": "Majonnäs äggfri",
    "calories": 484,
    "protein": 54.3,
    "fat": 0.2,
    "carbs": 0.6
  },
  {
    "name": "Sås mango curry m. majonnäs kylvara",
    "calories": 540,
    "protein": 54.4,
    "fat": 1,
    "carbs": 13.5
  },
  {
    "name": "Ostsås m. kalkon",
    "calories": 143,
    "protein": 8.8,
    "fat": 10.1,
    "carbs": 6
  },
  {
    "name": "Lasagne m. zucchini aubergine nötfärs",
    "calories": 110,
    "protein": 6.7,
    "fat": 9.1,
    "carbs": 2.8
  },
  {
    "name": "Karlssons frestelse m. nötfärs",
    "calories": 144,
    "protein": 7.2,
    "fat": 7.6,
    "carbs": 11.5
  },
  {
    "name": "Lasagne nötfärs",
    "calories": 137,
    "protein": 6.3,
    "fat": 7.9,
    "carbs": 11.5
  },
  {
    "name": "Skinkfrestelse m. grädde",
    "calories": 174,
    "protein": 11.7,
    "fat": 5.9,
    "carbs": 10.6
  },
  {
    "name": "Lök stekt m. flytande matfett",
    "calories": 54,
    "protein": 1.2,
    "fat": 1.4,
    "carbs": 8.3
  },
  {
    "name": "Tzatziki m. morot",
    "calories": 83,
    "protein": 5.4,
    "fat": 1.9,
    "carbs": 6
  },
  {
    "name": "Mango currysås hemlagad",
    "calories": 130,
    "protein": 10.1,
    "fat": 1.1,
    "carbs": 8.5
  },
  {
    "name": "Kycklingpanna m. citron örter crème fraiche",
    "calories": 156,
    "protein": 7.4,
    "fat": 18.1,
    "carbs": 4.2
  },
  {
    "name": "Cowboysoppa m. potatis köttfärs",
    "calories": 110,
    "protein": 6.1,
    "fat": 6.7,
    "carbs": 6.7
  },
  {
    "name": "Fransk bondsoppa m. fläsk rotfrukter",
    "calories": 58,
    "protein": 2.3,
    "fat": 2.2,
    "carbs": 6.1
  },
  {
    "name": "Kycklingpanna m. lime honung crème fraiche",
    "calories": 183,
    "protein": 13.2,
    "fat": 13,
    "carbs": 3.3
  },
  {
    "name": "Hedvigsoppa m. vitkål nötfärs morot",
    "calories": 59,
    "protein": 2.7,
    "fat": 5.3,
    "carbs": 2.8
  },
  {
    "name": "Nikkaluoktasoppa m. vitkål nötfärs",
    "calories": 63,
    "protein": 3.8,
    "fat": 5.4,
    "carbs": 1.6
  },
  {
    "name": "Mexicanasoppa m. kyckling majs",
    "calories": 42,
    "protein": 0.5,
    "fat": 2.4,
    "carbs": 6.4
  },
  {
    "name": "Kycklingpanna m. oliv basilika citron grädde",
    "calories": 155,
    "protein": 11,
    "fat": 12.1,
    "carbs": 1.9
  },
  {
    "name": "Färsruta m. fetaost ugnsstekt",
    "calories": 222,
    "protein": 15,
    "fat": 20.4,
    "carbs": 1.5
  },
  {
    "name": "Fisk cornflakesfisk panerad ugnsstekt",
    "calories": 160,
    "protein": 6.8,
    "fat": 17.7,
    "carbs": 6.7
  },
  {
    "name": "Gryta fiskgryta m. torsk kokosmjölk curry",
    "calories": 180,
    "protein": 13.4,
    "fat": 10.8,
    "carbs": 3.7
  },
  {
    "name": "Rödbetshummus",
    "calories": 174,
    "protein": 11.8,
    "fat": 4.5,
    "carbs": 9.7
  },
  {
    "name": "Ajvaryoghurt",
    "calories": 100,
    "protein": 7.2,
    "fat": 3.1,
    "carbs": 5.4
  },
  {
    "name": "Karl-Alfredsås m. yoghurt spenat",
    "calories": 195,
    "protein": 18.8,
    "fat": 2.7,
    "carbs": 4.3
  },
  {
    "name": "Chili- och mangosås",
    "calories": 112,
    "protein": 7.7,
    "fat": 1.3,
    "carbs": 9
  },
  {
    "name": "Fisk mager m. fänkål tomat crème fraiche ångkokt",
    "calories": 115,
    "protein": 7.1,
    "fat": 11.4,
    "carbs": 1.2
  },
  {
    "name": "Bondomelett m. bönor",
    "calories": 113,
    "protein": 5.3,
    "fat": 6.5,
    "carbs": 8.8
  },
  {
    "name": "Grönsaksbiff Caribbean stekt",
    "calories": 201,
    "protein": 8.2,
    "fat": 3.9,
    "carbs": 26
  },
  {
    "name": "Gräddsås m. persilja",
    "calories": 150,
    "protein": 14.1,
    "fat": 1.8,
    "carbs": 4.4
  },
  {
    "name": "Köttfärs- och grönsaksbiff stekt",
    "calories": 162,
    "protein": 6.9,
    "fat": 14.6,
    "carbs": 8.4
  },
  {
    "name": "Grönsaksbiff broccolibiff stekt veg.",
    "calories": 271,
    "protein": 15.9,
    "fat": 7.3,
    "carbs": 24.1
  },
  {
    "name": "Gryta kycklinggryta m. bönor kakao ",
    "calories": 95,
    "protein": 3.3,
    "fat": 11,
    "carbs": 4.1
  },
  {
    "name": "Fisk Björkeby m. ströbröd smör persilja ugnsstekt",
    "calories": 258,
    "protein": 15.3,
    "fat": 17.8,
    "carbs": 11.5
  },
  {
    "name": "Fisk m. soltorkad tomat persilja vitlök",
    "calories": 230,
    "protein": 12.3,
    "fat": 17.8,
    "carbs": 11
  },
  {
    "name": "Gratäng djungelgratäng m. kyckling banan mango chutney crème fraiche",
    "calories": 218,
    "protein": 16.1,
    "fat": 11.1,
    "carbs": 7.3
  },
  {
    "name": "Mango chutney",
    "calories": 112,
    "protein": 0.3,
    "fat": 0.6,
    "carbs": 25.7
  },
  {
    "name": "Gratäng m. kassler ananas ost",
    "calories": 129,
    "protein": 4.3,
    "fat": 18.2,
    "carbs": 3.9
  },
  {
    "name": "Gryta fiskgryta brasiliansk fiskgryta m. kokosmjölk krossad tomat paprika",
    "calories": 135,
    "protein": 9.2,
    "fat": 8.6,
    "carbs": 4.1
  },
  {
    "name": "Gryta mormors kycklinggryta m. svamp",
    "calories": 118,
    "protein": 6.8,
    "fat": 11.2,
    "carbs": 2.9
  },
  {
    "name": "Gryta köttgryta m. fransk senap pepparrot gräddfil",
    "calories": 111,
    "protein": 5.1,
    "fat": 12.1,
    "carbs": 2.9
  },
  {
    "name": "Gryta fisk m. crème fraiche curry apelsin",
    "calories": 119,
    "protein": 5.4,
    "fat": 13.8,
    "carbs": 3.5
  },
  {
    "name": "Korv falukorv ugnsstekt m. ajvar",
    "calories": 220,
    "protein": 18.6,
    "fat": 8.1,
    "carbs": 5.4
  },
  {
    "name": "Gryta kyckling tikka masala",
    "calories": 121,
    "protein": 3.3,
    "fat": 20.2,
    "carbs": 2.4
  },
  {
    "name": "Senapskräm",
    "calories": 268,
    "protein": 22.7,
    "fat": 2.6,
    "carbs": 13.8
  },
  {
    "name": "Köttfärslåda",
    "calories": 124,
    "protein": 6.3,
    "fat": 8.8,
    "carbs": 7.6
  },
  {
    "name": "Gryta mykoprotein m. lätt crème fraiche bambuskott haricot verts paprika veg.",
    "calories": 81,
    "protein": 4.4,
    "fat": 5,
    "carbs": 4.6
  },
  {
    "name": "Gryta mykoprotein tikka masala veg.",
    "calories": 103,
    "protein": 3.3,
    "fat": 12.4,
    "carbs": 3.7
  },
  {
    "name": "Gryta mykoprotein m. fransk senap pepparrot gräddfil veg.",
    "calories": 92,
    "protein": 4,
    "fat": 8.2,
    "carbs": 3.2
  },
  {
    "name": "Grönsaksburgare stekt veg.",
    "calories": 228,
    "protein": 12.1,
    "fat": 3.7,
    "carbs": 24.4
  },
  {
    "name": "Grönsaksbiff rödbetsbiff stekt veg.",
    "calories": 108,
    "protein": 4.6,
    "fat": 4.5,
    "carbs": 11.1
  },
  {
    "name": "Grönsaksbiff morotsbiff stekt veg.",
    "calories": 107,
    "protein": 4.8,
    "fat": 3.7,
    "carbs": 11.2
  },
  {
    "name": "Grönsaksbiff zucchinibiff m. ost stekt veg.",
    "calories": 208,
    "protein": 12.6,
    "fat": 7.9,
    "carbs": 15
  },
  {
    "name": "Grönsaksbiff ärt- och kålrotsbiff stekt veg. kylvara",
    "calories": 171,
    "protein": 6.5,
    "fat": 6.5,
    "carbs": 17.6
  },
  {
    "name": "Grönsaksbiff kikärtsbiff stekt veg. hemlagad",
    "calories": 210,
    "protein": 9.6,
    "fat": 8.8,
    "carbs": 17.1
  },
  {
    "name": "Gryta chili sin carne m. zucchini paprika veg.",
    "calories": 74,
    "protein": 1.7,
    "fat": 3.6,
    "carbs": 9.2
  },
  {
    "name": "Gryta chili sin carne m. mykoprotein veg.",
    "calories": 91,
    "protein": 2.2,
    "fat": 6.9,
    "carbs": 8.6
  },
  {
    "name": "Gryta chili con soja veg.",
    "calories": 104,
    "protein": 3.5,
    "fat": 6.8,
    "carbs": 9
  },
  {
    "name": "Mykoproteinfärssås veg. ",
    "calories": 90,
    "protein": 3,
    "fat": 8.1,
    "carbs": 6
  },
  {
    "name": "Gryta böngryta provencale m. potatis rotselleri vitt vin crème fraiche veg.",
    "calories": 98,
    "protein": 4,
    "fat": 3.6,
    "carbs": 10.1
  },
  {
    "name": "Gryta halloumigryta m. linser veg.",
    "calories": 147,
    "protein": 8.8,
    "fat": 7.7,
    "carbs": 7.9
  },
  {
    "name": "Halloumi stroganoff veg.",
    "calories": 255,
    "protein": 19.6,
    "fat": 15.8,
    "carbs": 3.9
  },
  {
    "name": "Gryta halloumigryta m. aubergine veg.",
    "calories": 118,
    "protein": 7.7,
    "fat": 7.5,
    "carbs": 4.1
  },
  {
    "name": "Gryta mykoprotein m. grönsaker veg.",
    "calories": 58,
    "protein": 2,
    "fat": 4.7,
    "carbs": 3.9
  },
  {
    "name": "Gryta kalops m. mykoprotein veg.",
    "calories": 41,
    "protein": 1.5,
    "fat": 2.6,
    "carbs": 3.8
  },
  {
    "name": "Gryta indonesisk kycklinggryta m. mango chutney",
    "calories": 179,
    "protein": 12.2,
    "fat": 11.2,
    "carbs": 6
  },
  {
    "name": "Gryta mykoprotein indonesisk gryta m. mango chutney veg.",
    "calories": 145,
    "protein": 8.6,
    "fat": 8.3,
    "carbs": 7.2
  },
  {
    "name": "Gryta mykoprotein m. persika veg.",
    "calories": 143,
    "protein": 9.4,
    "fat": 7.2,
    "carbs": 6.2
  },
  {
    "name": "Bön stroganoff veg.",
    "calories": 129,
    "protein": 5.7,
    "fat": 6,
    "carbs": 11.1
  },
  {
    "name": "Gryta m. gröna linser rotfrukter kokosmjölk veg.",
    "calories": 81,
    "protein": 4.5,
    "fat": 2.4,
    "carbs": 6.2
  },
  {
    "name": "Gryta gulasch m. bönor veg.",
    "calories": 60,
    "protein": 1.8,
    "fat": 2.5,
    "carbs": 7.2
  },
  {
    "name": "Grönsaker ugnsstekta",
    "calories": 24,
    "protein": 0.2,
    "fat": 0.7,
    "carbs": 3.7
  },
  {
    "name": "Majssås",
    "calories": 98,
    "protein": 7.2,
    "fat": 2.1,
    "carbs": 5.7
  },
  {
    "name": "Gryta kikärtsgryta m. aprikos blandade grönsaker veg.",
    "calories": 62,
    "protein": 2.5,
    "fat": 1.8,
    "carbs": 7.3
  },
  {
    "name": "Svamp stroganoff veg.",
    "calories": 92,
    "protein": 6.2,
    "fat": 3.1,
    "carbs": 4.9
  },
  {
    "name": "Broccolisås",
    "calories": 137,
    "protein": 12.4,
    "fat": 4,
    "carbs": 2.4
  },
  {
    "name": "Gryta indisk lammgryta",
    "calories": 114,
    "protein": 6.8,
    "fat": 9.4,
    "carbs": 3.5
  },
  {
    "name": "Sojafärssås veg.",
    "calories": 117,
    "protein": 5.8,
    "fat": 7.7,
    "carbs": 7
  },
  {
    "name": "Sojafärssås m. linser veg.",
    "calories": 112,
    "protein": 4.9,
    "fat": 7.5,
    "carbs": 7.8
  },
  {
    "name": "Tikka masala m. potatis grönsaker veg.",
    "calories": 107,
    "protein": 6.2,
    "fat": 2.8,
    "carbs": 8.9
  },
  {
    "name": "Medelhavssås m. grädde soltorkad tomat",
    "calories": 281,
    "protein": 26.6,
    "fat": 3.8,
    "carbs": 6.7
  },
  {
    "name": "Sås m. grädde soltorkad tomat basilika vitlök",
    "calories": 198,
    "protein": 16.1,
    "fat": 4.4,
    "carbs": 8.3
  },
  {
    "name": "Gryta currygryta m. grönsaker veg.",
    "calories": 104,
    "protein": 8.2,
    "fat": 1.8,
    "carbs": 5.2
  },
  {
    "name": "Pasta carbonara m. pasta sojabönor veg.",
    "calories": 151,
    "protein": 8.3,
    "fat": 5.2,
    "carbs": 13.2
  },
  {
    "name": "Lasagne m. linser veg.",
    "calories": 136,
    "protein": 9.5,
    "fat": 4.6,
    "carbs": 7.2
  },
  {
    "name": "Lasagne m. grönsaker veg. ",
    "calories": 129,
    "protein": 4,
    "fat": 4.6,
    "carbs": 17.8
  },
  {
    "name": "Grönsaksbas grönsakspasta",
    "calories": 84,
    "protein": 5.4,
    "fat": 1,
    "carbs": 6.8
  },
  {
    "name": "Tomatsås m. grädde",
    "calories": 134,
    "protein": 12.4,
    "fat": 1.4,
    "carbs": 4.3
  },
  {
    "name": "Morotssås",
    "calories": 68,
    "protein": 4.3,
    "fat": 1.5,
    "carbs": 5.3
  },
  {
    "name": "Ajvar- och spenatsås",
    "calories": 131,
    "protein": 7.8,
    "fat": 7,
    "carbs": 7.2
  },
  {
    "name": "Paprika grillad",
    "calories": 32,
    "protein": 0.3,
    "fat": 0.7,
    "carbs": 5.8
  },
  {
    "name": "Lasagne m. cottage cheese veg. ",
    "calories": 101,
    "protein": 4.5,
    "fat": 6.1,
    "carbs": 8.6
  },
  {
    "name": "Paj m. fetaost sötpotatis veg.",
    "calories": 247,
    "protein": 19.4,
    "fat": 7.8,
    "carbs": 9.8
  },
  {
    "name": "Grynblandning havre råg vete korn kokt m. salt",
    "calories": 133,
    "protein": 1.2,
    "fat": 3.6,
    "carbs": 23.4
  },
  {
    "name": "Soppa m. kokosmjölk blomkål potatis spenat veg.",
    "calories": 225,
    "protein": 21,
    "fat": 2.9,
    "carbs": 5.8
  },
  {
    "name": "Sötpotatissoppa m. linser chili kokosmjölk veg.",
    "calories": 108,
    "protein": 7.2,
    "fat": 2.4,
    "carbs": 7.3
  },
  {
    "name": "Rysk kålsoppa veg.",
    "calories": 48,
    "protein": 2.9,
    "fat": 0.9,
    "carbs": 3.7
  },
  {
    "name": "Vegestronesoppa veg.",
    "calories": 39,
    "protein": 1,
    "fat": 1.3,
    "carbs": 5.5
  },
  {
    "name": "Gratäng m. mykoprotein ananas veg. ",
    "calories": 115,
    "protein": 3.4,
    "fat": 12.4,
    "carbs": 6.6
  },
  {
    "name": "Pumpasoppa veg.",
    "calories": 32,
    "protein": 1.1,
    "fat": 0.7,
    "carbs": 4.4
  },
  {
    "name": "Gryta chiligryta m. bönor linser sojakorv veg.",
    "calories": 107,
    "protein": 3.2,
    "fat": 6,
    "carbs": 10.9
  },
  {
    "name": "Lasagne m. skinka",
    "calories": 119,
    "protein": 4.2,
    "fat": 8,
    "carbs": 11.7
  },
  {
    "name": "Pastasås m. kyckling paprika",
    "calories": 164,
    "protein": 12.5,
    "fat": 11.5,
    "carbs": 1.6
  },
  {
    "name": "Pastagratäng Rossini m. kycklingfärs ananas paprika squash tomat purjolök",
    "calories": 169,
    "protein": 10.8,
    "fat": 8.1,
    "carbs": 9.6
  },
  {
    "name": "Köttfärssås Vivaldi nöt m. squash majs paprika rödlök ost",
    "calories": 109,
    "protein": 5.9,
    "fat": 8.1,
    "carbs": 5.3
  },
  {
    "name": "Chiapudding",
    "calories": 111,
    "protein": 5,
    "fat": 3.2,
    "carbs": 11
  },
  {
    "name": "Korv stroganoff hemlagad",
    "calories": 253,
    "protein": 23,
    "fat": 6.3,
    "carbs": 5.7
  },
  {
    "name": "Lasagne hemlagad",
    "calories": 126,
    "protein": 5,
    "fat": 7.4,
    "carbs": 12.1
  },
  {
    "name": "Pizza Funghi m. champinjoner restaurang",
    "calories": 292,
    "protein": 16.1,
    "fat": 14.9,
    "carbs": 20.4
  },
  {
    "name": "Havremjöl fullkorn",
    "calories": 352,
    "protein": 4.4,
    "fat": 11.3,
    "carbs": 59.2
  },
  {
    "name": "Vitlökssås m. örter hemlagad",
    "calories": 407,
    "protein": 43,
    "fat": 2,
    "carbs": 4.2
  },
  {
    "name": "Öring Sverige höst rå ",
    "calories": 175,
    "protein": 9.2,
    "fat": 21.2,
    "carbs": 1.7
  },
  {
    "name": "Taco tortilla m. köttfärs grönsaker ost",
    "calories": 151,
    "protein": 8.1,
    "fat": 8.1,
    "carbs": 11
  },
  {
    "name": "Kornflingor ångprep. fullkorn",
    "calories": 351,
    "protein": 3.1,
    "fat": 9.2,
    "carbs": 65.4
  },
  {
    "name": "Rågflingor ångprep. fullkorn",
    "calories": 323,
    "protein": 1.5,
    "fat": 9.2,
    "carbs": 61.1
  },
  {
    "name": "Veteflingor ångprep. fullkorn",
    "calories": 328,
    "protein": 2,
    "fat": 10.2,
    "carbs": 61
  },
  {
    "name": "Dinkelmjöl",
    "calories": 355,
    "protein": 1.7,
    "fat": 12,
    "carbs": 69.3
  },
  {
    "name": "Grönsaksbiff jordnötsbiff tillagad veg.",
    "calories": 237,
    "protein": 14.1,
    "fat": 7.8,
    "carbs": 17.4
  },
  {
    "name": "Vitlökssås fetthalt ca 10%",
    "calories": 135,
    "protein": 11.9,
    "fat": 1.8,
    "carbs": 5.5
  },
  {
    "name": "Vetemjöl durum",
    "calories": 352,
    "protein": 1.6,
    "fat": 12.2,
    "carbs": 67.9
  },
  {
    "name": "Mjölblandning vete korn råg havre",
    "calories": 346,
    "protein": 2.2,
    "fat": 8.7,
    "carbs": 68.4
  },
  {
    "name": "Mjölblandning rågsikt",
    "calories": 356,
    "protein": 1.4,
    "fat": 8.6,
    "carbs": 71.8
  },
  {
    "name": "Varm choklad m. veg. dryck fett ca 1,5%",
    "calories": 61,
    "protein": 1.6,
    "fat": 1.5,
    "carbs": 9.6
  },
  {
    "name": "Pizza Vesuvio m. skinka restaurang",
    "calories": 297,
    "protein": 16,
    "fat": 17,
    "carbs": 19.9
  },
  {
    "name": "Pizza Capricciosa m. skinka champinjoner restaurang",
    "calories": 295,
    "protein": 16,
    "fat": 16,
    "carbs": 20.2
  },
  {
    "name": "Pizza m. kött restaurang",
    "calories": 298,
    "protein": 17.1,
    "fat": 15.4,
    "carbs": 19.3
  },
  {
    "name": "Pizza Bussola m. skinka räkor restaurang",
    "calories": 297,
    "protein": 16,
    "fat": 17,
    "carbs": 19.9
  },
  {
    "name": "Pizza m. köttfärs restaurang",
    "calories": 293,
    "protein": 16.2,
    "fat": 15.4,
    "carbs": 19.8
  },
  {
    "name": "Pizza m. ost restaurang",
    "calories": 328,
    "protein": 19.7,
    "fat": 16.5,
    "carbs": 19.8
  },
  {
    "name": "Rapsolja berikad",
    "calories": 884,
    "protein": 100,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Muskotnöt malen",
    "calories": 484,
    "protein": 36.5,
    "fat": 5.3,
    "carbs": 28.6
  },
  {
    "name": "Durra el. andra sorghumarter mjöl",
    "calories": 353,
    "protein": 2.6,
    "fat": 9.5,
    "carbs": 69.7
  },
  {
    "name": "Amarant mjöl",
    "calories": 352,
    "protein": 6,
    "fat": 15,
    "carbs": 55.2
  },
  {
    "name": "Kiwi gul",
    "calories": 72,
    "protein": 0.3,
    "fat": 0.6,
    "carbs": 15.9
  },
  {
    "name": "Sojasås shoyu",
    "calories": 72,
    "protein": 0,
    "fat": 7.7,
    "carbs": 10.1
  },
  {
    "name": "Pizzadeg tillagad hemlagad",
    "calories": 240,
    "protein": 5,
    "fat": 5.4,
    "carbs": 41.3
  },
  {
    "name": "Insalata Caprese",
    "calories": 146,
    "protein": 12.8,
    "fat": 5.8,
    "carbs": 1.8
  },
  {
    "name": "Waldorfsallad",
    "calories": 118,
    "protein": 9.1,
    "fat": 2.1,
    "carbs": 5.8
  },
  {
    "name": "Jordnötter m. chokladöverdrag",
    "calories": 514,
    "protein": 26.9,
    "fat": 8.1,
    "carbs": 57.9
  },
  {
    "name": "Chokladkex m. vaniljfyllning",
    "calories": 465,
    "protein": 19.8,
    "fat": 4.6,
    "carbs": 65.3
  },
  {
    "name": "Risotto m. kyckling spenat",
    "calories": 114,
    "protein": 4.2,
    "fat": 5.6,
    "carbs": 12.4
  },
  {
    "name": "Pannkaka tunn u. mjölk ägg",
    "calories": 154,
    "protein": 6,
    "fat": 3.9,
    "carbs": 20.3
  },
  {
    "name": "Bröd rågsikt fibrer ca 4% typ rågkaka",
    "calories": 264,
    "protein": 2.7,
    "fat": 7.3,
    "carbs": 48.9
  },
  {
    "name": "Sött vetebröd kanelbulle gräddad kylvara frysvara el. butiksbakad",
    "calories": 345,
    "protein": 11.3,
    "fat": 6.7,
    "carbs": 51.7
  },
  {
    "name": "Bröd fröbröd fullkorn vete råg",
    "calories": 270,
    "protein": 5.9,
    "fat": 8.7,
    "carbs": 41
  },
  {
    "name": "Pizza m. tomatsås ost restaurang",
    "calories": 328,
    "protein": 18.2,
    "fat": 16.5,
    "carbs": 22.9
  },
  {
    "name": "Pizzadeg tillagad kylvara",
    "calories": 335,
    "protein": 4.7,
    "fat": 9.5,
    "carbs": 60.8
  },
  {
    "name": "Pommes frites smaksatta tillagad frysvara",
    "calories": 207,
    "protein": 9,
    "fat": 3.2,
    "carbs": 26.1
  },
  {
    "name": "Frukostflingor vete puffat m. choklad",
    "calories": 382,
    "protein": 3.4,
    "fat": 8.4,
    "carbs": 73.1
  },
  {
    "name": "Frukostflingor granola m. frukt nötter",
    "calories": 436,
    "protein": 19.5,
    "fat": 11.4,
    "carbs": 46
  },
  {
    "name": "Frukostflingor granola m. kakao hallon",
    "calories": 408,
    "protein": 15.8,
    "fat": 8.8,
    "carbs": 47.8
  },
  {
    "name": "Majskaka smaksatt ost",
    "calories": 446,
    "protein": 14.3,
    "fat": 6.8,
    "carbs": 70.5
  },
  {
    "name": "Linskaka smaksatt",
    "calories": 418,
    "protein": 11.6,
    "fat": 15.9,
    "carbs": 58.7
  },
  {
    "name": "Kex bokstavskex fullkorn",
    "calories": 410,
    "protein": 11.2,
    "fat": 7.5,
    "carbs": 62.3
  },
  {
    "name": "Pepparkaksdeg kylvara",
    "calories": 383,
    "protein": 13.4,
    "fat": 4.6,
    "carbs": 58.8
  },
  {
    "name": "Bröd vitt croissant gräddad kylvara frysvara el. butiksbakad",
    "calories": 339,
    "protein": 18.4,
    "fat": 7.4,
    "carbs": 34.5
  },
  {
    "name": "Pommes frites smaksatta frysvara",
    "calories": 168,
    "protein": 7.3,
    "fat": 2.6,
    "carbs": 21.1
  },
  {
    "name": "Frukostflingor majs typ cornflakes",
    "calories": 376,
    "protein": 1.2,
    "fat": 7,
    "carbs": 80
  },
  {
    "name": "Ris sushiris kokt",
    "calories": 173,
    "protein": 0.4,
    "fat": 2.8,
    "carbs": 38.3
  },
  {
    "name": "Nudlar äggnudlar kokta u. salt",
    "calories": 121,
    "protein": 0.8,
    "fat": 4.2,
    "carbs": 22.8
  },
  {
    "name": "Havregurt hallon berikad",
    "calories": 82,
    "protein": 1.7,
    "fat": 0.9,
    "carbs": 15.3
  },
  {
    "name": "Havregurt blåbär hallon berikad",
    "calories": 83,
    "protein": 1.8,
    "fat": 0.8,
    "carbs": 15.2
  },
  {
    "name": "Havregurt jordgubb berikad",
    "calories": 76,
    "protein": 1.8,
    "fat": 0.9,
    "carbs": 13.3
  },
  {
    "name": "Havregurt vanilj berikad",
    "calories": 84,
    "protein": 2,
    "fat": 0.9,
    "carbs": 15
  },
  {
    "name": "Havredryck fett 1,5% eko. berikad",
    "calories": 48,
    "protein": 1.5,
    "fat": 0.9,
    "carbs": 7.2
  },
  {
    "name": "Havredryck fett 0,5 % eko. berikad",
    "calories": 39,
    "protein": 0.5,
    "fat": 0.9,
    "carbs": 7.3
  },
  {
    "name": "Havregurt naturell fett 11 % berikad",
    "calories": 152,
    "protein": 10.5,
    "fat": 2.8,
    "carbs": 11.3
  },
  {
    "name": "Glass havreglass chokladfudge",
    "calories": 235,
    "protein": 9.5,
    "fat": 1,
    "carbs": 35.5
  },
  {
    "name": "Glass havreglass karamell hasselnöt",
    "calories": 245,
    "protein": 13.9,
    "fat": 1.4,
    "carbs": 28.2
  },
  {
    "name": "Glass havreglass karamell vanilj",
    "calories": 210,
    "protein": 9.6,
    "fat": 0.5,
    "carbs": 29.9
  },
  {
    "name": "Havrebaserat bredbart pålägg tomat basilika",
    "calories": 215,
    "protein": 17.6,
    "fat": 2.9,
    "carbs": 11.2
  },
  {
    "name": "Havrebaserat bredbart pålägg vitlök gurka",
    "calories": 207,
    "protein": 17.1,
    "fat": 2.7,
    "carbs": 10.7
  },
  {
    "name": "Havredryck choklad fett 2,5 % berikad",
    "calories": 71,
    "protein": 2.4,
    "fat": 1.3,
    "carbs": 10.5
  },
  {
    "name": "Havregurt smaksatt berikad",
    "calories": 81,
    "protein": 1.8,
    "fat": 0.9,
    "carbs": 14.7
  },
  {
    "name": "Havredryck fett 3,0% berikad",
    "calories": 60,
    "protein": 3,
    "fat": 1,
    "carbs": 6.6
  },
  {
    "name": "Glass havreglass smaksatt",
    "calories": 230,
    "protein": 11,
    "fat": 1,
    "carbs": 31.2
  },
  {
    "name": "Havrebaserat bredbart pålägg smaksatt",
    "calories": 211,
    "protein": 17.4,
    "fat": 2.8,
    "carbs": 11
  },
  {
    "name": "Kex bokstavskex fullkorn berikad",
    "calories": 410,
    "protein": 11.2,
    "fat": 7.5,
    "carbs": 62.3
  },
  {
    "name": "Vitlökssås fetthalt ≥ 40%",
    "calories": 509,
    "protein": 54.1,
    "fat": 1.8,
    "carbs": 5.7
  },
  {
    "name": "Sött vetebröd saffransbröd",
    "calories": 317,
    "protein": 8,
    "fat": 7.5,
    "carbs": 51.5
  },
  {
    "name": "Pommes frites klyftpotatis frysvara",
    "calories": 158,
    "protein": 5.6,
    "fat": 2.4,
    "carbs": 22.3
  },
  {
    "name": "Sojaprotein kebab frysvara typ Oumph®",
    "calories": 136,
    "protein": 3.8,
    "fat": 17.4,
    "carbs": 4.6
  },
  {
    "name": "Sojaprotein pulled sojaprotein frysvara typ Oumph®",
    "calories": 117,
    "protein": 0.5,
    "fat": 12.1,
    "carbs": 13.4
  },
  {
    "name": "Sojaprotein bitar m. timjan vitlök frysvara typ Oumph®",
    "calories": 127,
    "protein": 3,
    "fat": 17.7,
    "carbs": 4.2
  },
  {
    "name": "Rismål u. sylt",
    "calories": 118,
    "protein": 4.1,
    "fat": 3.6,
    "carbs": 16.7
  },
  {
    "name": "Rismål u. sylt u. socker m. sötningsm.",
    "calories": 100,
    "protein": 4,
    "fat": 3.9,
    "carbs": 12.1
  },
  {
    "name": "Chips linser smaksatta fett 17%",
    "calories": 455,
    "protein": 19.1,
    "fat": 13,
    "carbs": 53.6
  },
  {
    "name": "Linsbågar fett 28%",
    "calories": 511,
    "protein": 30.8,
    "fat": 15.8,
    "carbs": 40.3
  },
  {
    "name": "Frukostflingor ris glutenfri berikad typ Specialflingor",
    "calories": 384,
    "protein": 0.7,
    "fat": 5.9,
    "carbs": 86.5
  },
  {
    "name": "Frukostflingor granola glutenfri",
    "calories": 432,
    "protein": 20.3,
    "fat": 9.1,
    "carbs": 44.5
  },
  {
    "name": "Frukostflingor majs glutenfri berikad",
    "calories": 369,
    "protein": 0.2,
    "fat": 7.4,
    "carbs": 81.3
  },
  {
    "name": "Mjölblandning ljus glutenfri",
    "calories": 336,
    "protein": 0,
    "fat": 2.8,
    "carbs": 75
  },
  {
    "name": "Bovetemjöl grovt",
    "calories": 360,
    "protein": 3.7,
    "fat": 17.7,
    "carbs": 60.2
  },
  {
    "name": "Teffmjöl",
    "calories": 344,
    "protein": 2.3,
    "fat": 10.3,
    "carbs": 65.3
  },
  {
    "name": "Våffelmix glutenfri",
    "calories": 390,
    "protein": 1.3,
    "fat": 5.4,
    "carbs": 87.7
  },
  {
    "name": "Våffla glutenfri",
    "calories": 216,
    "protein": 9.9,
    "fat": 1.9,
    "carbs": 29.8
  },
  {
    "name": "Majsgryn polenta",
    "calories": 345,
    "protein": 2.1,
    "fat": 8.6,
    "carbs": 68.3
  },
  {
    "name": "Bröd surdegsbröd glutenfritt",
    "calories": 192,
    "protein": 2.5,
    "fat": 3.4,
    "carbs": 35.1
  },
  {
    "name": "Bröd vitt tortilla glutenfritt",
    "calories": 252,
    "protein": 4.3,
    "fat": 6.4,
    "carbs": 41.1
  },
  {
    "name": "Hårt bröd m. chiafrö glutenfritt fibrer ca 10%",
    "calories": 363,
    "protein": 2.3,
    "fat": 4.4,
    "carbs": 75
  },
  {
    "name": "Hårt bröd m. sesamfrö glutenfritt fibrer ca 9%",
    "calories": 407,
    "protein": 11.2,
    "fat": 6.1,
    "carbs": 65.2
  },
  {
    "name": "Bröd vitt osötat glutenfritt fibrer ca 7% typ ciabatta",
    "calories": 295,
    "protein": 7.2,
    "fat": 6,
    "carbs": 47.8
  },
  {
    "name": "Sockerbetsfiber",
    "calories": 203,
    "protein": 2.3,
    "fat": 8.3,
    "carbs": 0
  },
  {
    "name": "Kex salta glutenfritt",
    "calories": 446,
    "protein": 13,
    "fat": 2.6,
    "carbs": 78
  },
  {
    "name": "Chokladkaka chocolate chip cookie glutenfri",
    "calories": 507,
    "protein": 26.4,
    "fat": 2.8,
    "carbs": 63.3
  },
  {
    "name": "Korv veg. sojaprotein kylvara el. frysvara typ grillkorv",
    "calories": 176,
    "protein": 11.6,
    "fat": 12,
    "carbs": 3.4
  },
  {
    "name": "Korv veg. solrosprotein kylvara el. frysvara typ grillkorv",
    "calories": 142,
    "protein": 10.5,
    "fat": 5.3,
    "carbs": 6.7
  },
  {
    "name": "Korv veg. solros- och ärtprotein kylvara el. frysvara typ grillkorv",
    "calories": 174,
    "protein": 12.6,
    "fat": 4.7,
    "carbs": 8.2
  },
  {
    "name": "Korv veg. grönsaker kylvara el. frysvara typ grillkorv",
    "calories": 160,
    "protein": 7.4,
    "fat": 7.1,
    "carbs": 14.7
  },
  {
    "name": "Korv veg. sojaprotein tillagad kylvara el. frysvara typ grillkorv",
    "calories": 186,
    "protein": 12.2,
    "fat": 12.7,
    "carbs": 3.6
  },
  {
    "name": "Korv veg. solrosprotein tillagad kylvara el. frysvara typ grillkorv",
    "calories": 151,
    "protein": 11.2,
    "fat": 5.6,
    "carbs": 7.1
  },
  {
    "name": "Korv veg. solros- och ärtprotein tillagad kylvara el. frysvara typ grillkorv",
    "calories": 184,
    "protein": 13.3,
    "fat": 5,
    "carbs": 8.7
  },
  {
    "name": "Korv veg. tillagad kylvara el. frysvara typ grillkorv",
    "calories": 162,
    "protein": 9.6,
    "fat": 9.9,
    "carbs": 7.2
  },
  {
    "name": "Korv veg. grönsaker tillagad kylvara el. frysvara typ grillkorv",
    "calories": 170,
    "protein": 7.9,
    "fat": 7.5,
    "carbs": 15.6
  },
  {
    "name": "Burgare veg. potatis linser bönor majs kylvara el. frysvara",
    "calories": 230,
    "protein": 9.9,
    "fat": 7.8,
    "carbs": 24
  },
  {
    "name": "Burgare veg. potatis linser bönor majs stekt kylvara el. frysvara",
    "calories": 270,
    "protein": 11.6,
    "fat": 9.1,
    "carbs": 28.1
  },
  {
    "name": "Ärtprotein färs kylvara el. frysvara",
    "calories": 190,
    "protein": 6.2,
    "fat": 26.6,
    "carbs": 5.6
  },
  {
    "name": "Sojadryck osötad berikad",
    "calories": 33,
    "protein": 1.3,
    "fat": 3.4,
    "carbs": 1.7
  },
  {
    "name": "Mandeldryck osötad berikad",
    "calories": 15,
    "protein": 1.2,
    "fat": 0,
    "carbs": 1
  },
  {
    "name": "Kokosnötdryck ",
    "calories": 18,
    "protein": 0,
    "fat": 0,
    "carbs": 4.4
  },
  {
    "name": "Mörk choklad kakao 70%",
    "calories": 581,
    "protein": 43.9,
    "fat": 8.4,
    "carbs": 34
  },
  {
    "name": "Mörk choklad kakao 85%",
    "calories": 592,
    "protein": 48.6,
    "fat": 11.1,
    "carbs": 22.3
  },
  {
    "name": "Pommes frites klyftpotatis tillagad frysvara",
    "calories": 196,
    "protein": 7,
    "fat": 3,
    "carbs": 27.7
  },
  {
    "name": "Sojaprotein kebab stekt frysvara typ Oumph®",
    "calories": 97,
    "protein": 0.5,
    "fat": 19.8,
    "carbs": 0
  },
  {
    "name": "Sojaprotein pulled sojaprotein stekt frysvara typ Oumph®",
    "calories": 97,
    "protein": 0.5,
    "fat": 19.8,
    "carbs": 0
  },
  {
    "name": "Sojaprotein bitar m. timjan vitlök stekta frysvara typ Oumph®",
    "calories": 97,
    "protein": 0.5,
    "fat": 19.8,
    "carbs": 0
  },
  {
    "name": "Pommes frites klyftpotatis friterad frysvara",
    "calories": 244,
    "protein": 13.4,
    "fat": 2.8,
    "carbs": 25.8
  },
  {
    "name": "Bulgur kokt m. tomat buljong olja",
    "calories": 129,
    "protein": 5.4,
    "fat": 3.1,
    "carbs": 15.6
  },
  {
    "name": "Munk friterad m. socker typ somalisk bur saliid",
    "calories": 324,
    "protein": 13.7,
    "fat": 6.3,
    "carbs": 42.7
  },
  {
    "name": "Majsdessert m. socker typ somalisk xalwo",
    "calories": 326,
    "protein": 18.7,
    "fat": 0,
    "carbs": 39.4
  },
  {
    "name": "Sött vetebröd dadelkrans m. fyllning",
    "calories": 301,
    "protein": 6.3,
    "fat": 5.5,
    "carbs": 53
  },
  {
    "name": "Mannagrynspudding m. socker typ syrisk mamonia",
    "calories": 75,
    "protein": 0.7,
    "fat": 1.2,
    "carbs": 15.6
  },
  {
    "name": "Gryta auberginegryta veg. typ tapsi",
    "calories": 42,
    "protein": 1.3,
    "fat": 1.2,
    "carbs": 5.3
  },
  {
    "name": "Mannagrynskaka fylld m. dadlar nötter typ mamoul",
    "calories": 226,
    "protein": 10.5,
    "fat": 3.5,
    "carbs": 28.6
  },
  {
    "name": "Sesamkaka m. socker olja typ somalisk sisin ",
    "calories": 547,
    "protein": 35.2,
    "fat": 11.8,
    "carbs": 43.5
  },
  {
    "name": "Gryta m. kött kyckling typ tapsi",
    "calories": 223,
    "protein": 15,
    "fat": 21.3,
    "carbs": 0.8
  },
  {
    "name": "Fatteh veg.",
    "calories": 143,
    "protein": 7.1,
    "fat": 5.2,
    "carbs": 12.8
  },
  {
    "name": "Fatteh m. kyckling",
    "calories": 119,
    "protein": 4.6,
    "fat": 7.6,
    "carbs": 10.3
  },
  {
    "name": "Börek m. spenat fetaost veg.",
    "calories": 206,
    "protein": 12.1,
    "fat": 7.6,
    "carbs": 15.8
  },
  {
    "name": "Börek m. köttfärs",
    "calories": 222,
    "protein": 10.1,
    "fat": 9.7,
    "carbs": 22.2
  },
  {
    "name": "Pizza orientalisk",
    "calories": 208,
    "protein": 6.7,
    "fat": 9.2,
    "carbs": 26.6
  },
  {
    "name": "Pirog m. kött ugnsstekt typ sambusa",
    "calories": 230,
    "protein": 10.5,
    "fat": 7.8,
    "carbs": 25.1
  },
  {
    "name": "Pirog m. spenat ugnsstekt veg. typ sambusa",
    "calories": 197,
    "protein": 9.3,
    "fat": 4.1,
    "carbs": 23.2
  },
  {
    "name": "Pirog m. ost ugnsstekt typ sambusa",
    "calories": 281,
    "protein": 14,
    "fat": 10.2,
    "carbs": 27.8
  },
  {
    "name": "Pirog m. grönsaker friterad veg. typ sambusa",
    "calories": 228,
    "protein": 11,
    "fat": 4.3,
    "carbs": 26.7
  },
  {
    "name": "Dolma veg.",
    "calories": 93,
    "protein": 3.1,
    "fat": 2.5,
    "carbs": 12.5
  },
  {
    "name": "Grön chilisås typ basbaas cagaar",
    "calories": 46,
    "protein": 0.3,
    "fat": 1.4,
    "carbs": 8.2
  },
  {
    "name": "Yoghurtdryck typ ayran",
    "calories": 28,
    "protein": 1.4,
    "fat": 1.7,
    "carbs": 2.3
  },
  {
    "name": "Bröd vitt mjukt typ chapati",
    "calories": 258,
    "protein": 7.6,
    "fat": 4.3,
    "carbs": 41.8
  },
  {
    "name": "Gryta köttgryta typ suqaar",
    "calories": 92,
    "protein": 5.3,
    "fat": 7.3,
    "carbs": 3
  },
  {
    "name": "Kebab m. lamm hemlagad",
    "calories": 209,
    "protein": 14.9,
    "fat": 16.8,
    "carbs": 1.8
  },
  {
    "name": "Mannagrynskaka m. sirap yoghurt typ basbousa",
    "calories": 325,
    "protein": 14.4,
    "fat": 4,
    "carbs": 44.1
  },
  {
    "name": "Biryani ris m. kyckling lammkött grönsaker",
    "calories": 167,
    "protein": 5.7,
    "fat": 7.8,
    "carbs": 20.1
  },
  {
    "name": "Yoghurtsås m. tahini citron",
    "calories": 110,
    "protein": 8.1,
    "fat": 4.2,
    "carbs": 5
  },
  {
    "name": "Potatisgratäng kylvara tillagad",
    "calories": 120,
    "protein": 7.1,
    "fat": 2.1,
    "carbs": 10.9
  },
  {
    "name": "Kakaobönor",
    "calories": 576,
    "protein": 51.9,
    "fat": 12.6,
    "carbs": 0
  },
  {
    "name": "Choklad ljus vegansk",
    "calories": 557,
    "protein": 35.8,
    "fat": 3.3,
    "carbs": 53.4
  },
  {
    "name": "Gelégodis u. gelatin",
    "calories": 327,
    "protein": 0,
    "fat": 0.6,
    "carbs": 79.2
  },
  {
    "name": "Mango torkad",
    "calories": 296,
    "protein": 0.9,
    "fat": 2.6,
    "carbs": 64
  },
  {
    "name": "Gojibär torkade",
    "calories": 279,
    "protein": 2.4,
    "fat": 11.2,
    "carbs": 47.2
  },
  {
    "name": "Glykossirap",
    "calories": 324,
    "protein": 0,
    "fat": 0,
    "carbs": 79.8
  },
  {
    "name": "Näringsjäst",
    "calories": 332,
    "protein": 5.2,
    "fat": 46.6,
    "carbs": 12.6
  },
  {
    "name": "Havreris kokt m. salt",
    "calories": 170,
    "protein": 2.7,
    "fat": 5.6,
    "carbs": 28.5
  },
  {
    "name": "Lakritsgodis",
    "calories": 350,
    "protein": 0.2,
    "fat": 5.1,
    "carbs": 80.1
  },
  {
    "name": "Hirs kokt m. salt",
    "calories": 96,
    "protein": 0.6,
    "fat": 2.7,
    "carbs": 19
  },
  {
    "name": "Kokosbaserad bit riven fett ca 20% som alternativ till ost",
    "calories": 274,
    "protein": 22,
    "fat": 0,
    "carbs": 18
  },
  {
    "name": "Kokosbaserad bit fett ca 20% som alternativ till ost",
    "calories": 282,
    "protein": 22,
    "fat": 0,
    "carbs": 20.4
  },
  {
    "name": "Korv kryddkorv kött ca 75%",
    "calories": 244,
    "protein": 20.6,
    "fat": 11.8,
    "carbs": 3.4
  },
  {
    "name": "Dippsås m. gräddfil dippmix",
    "calories": 142,
    "protein": 10.7,
    "fat": 3.2,
    "carbs": 8.2
  },
  {
    "name": "Snabbkaffe koffeinfritt pulver",
    "calories": 304,
    "protein": 1,
    "fat": 22.5,
    "carbs": 38.1
  },
  {
    "name": "Mullbär",
    "calories": 56,
    "protein": 0.4,
    "fat": 1.2,
    "carbs": 10.5
  },
  {
    "name": "Te fermenterat m. fruktjuice",
    "calories": 12,
    "protein": 0,
    "fat": 0,
    "carbs": 1.8
  },
  {
    "name": "Te fermenterat m. sötningsm.",
    "calories": 8,
    "protein": 0,
    "fat": 0,
    "carbs": 2
  },
  {
    "name": "Färskost ricotta fett ca 10%",
    "calories": 146,
    "protein": 10.9,
    "fat": 10.2,
    "carbs": 2
  },
  {
    "name": "Wasabirot",
    "calories": 104,
    "protein": 0.6,
    "fat": 4.8,
    "carbs": 15.8
  },
  {
    "name": "Macadamianötter",
    "calories": 740,
    "protein": 75.8,
    "fat": 7.9,
    "carbs": 5.2
  },
  {
    "name": "Quinoa okokt",
    "calories": 356,
    "protein": 6.1,
    "fat": 14.4,
    "carbs": 56.8
  },
  {
    "name": "Quinoamjöl",
    "calories": 343,
    "protein": 5.6,
    "fat": 14.4,
    "carbs": 52.5
  },
  {
    "name": "Tempeh",
    "calories": 207,
    "protein": 10.8,
    "fat": 18.6,
    "carbs": 8.2
  },
  {
    "name": "Arrowrotmjöl",
    "calories": 354,
    "protein": 0.2,
    "fat": 1,
    "carbs": 85.2
  },
  {
    "name": "Vinblad konserv.",
    "calories": 61,
    "protein": 2,
    "fat": 4.3,
    "carbs": 1.8
  },
  {
    "name": "Hampamjöl avfettat",
    "calories": 298,
    "protein": 11.1,
    "fat": 22.3,
    "carbs": 3.8
  },
  {
    "name": "Kakaosmör",
    "calories": 884,
    "protein": 100,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Röd pepparsås",
    "calories": 60,
    "protein": 0.8,
    "fat": 12.9,
    "carbs": 0
  },
  {
    "name": "Shiitakesvamp",
    "calories": 18,
    "protein": 0.3,
    "fat": 1.8,
    "carbs": 0.5
  },
  {
    "name": "Ostronskivling",
    "calories": 26,
    "protein": 0.4,
    "fat": 2,
    "carbs": 2.6
  },
  {
    "name": "Blåbär amerikanska",
    "calories": 54,
    "protein": 0.4,
    "fat": 0.3,
    "carbs": 10.6
  },
  {
    "name": "Odon",
    "calories": 42,
    "protein": 0.7,
    "fat": 0.4,
    "carbs": 7.2
  },
  {
    "name": "Rönnbär",
    "calories": 80,
    "protein": 1.2,
    "fat": 1.1,
    "carbs": 12.9
  },
  {
    "name": "Aronia svart",
    "calories": 53,
    "protein": 0.6,
    "fat": 0.4,
    "carbs": 8.9
  },
  {
    "name": "Aronia torkad pulver",
    "calories": 277,
    "protein": 2.4,
    "fat": 5.1,
    "carbs": 34.7
  },
  {
    "name": "Rågkli",
    "calories": 278,
    "protein": 4.3,
    "fat": 14,
    "carbs": 26.7
  },
  {
    "name": "Ärtskott",
    "calories": 23,
    "protein": 0.4,
    "fat": 3.3,
    "carbs": 0.6
  },
  {
    "name": "Kakaopulver fett 10-15%",
    "calories": 368,
    "protein": 14.4,
    "fat": 21.2,
    "carbs": 24.8
  },
  {
    "name": "Korv kryddkorv kött ca 75% stekt",
    "calories": 258,
    "protein": 21.8,
    "fat": 12.5,
    "carbs": 3.6
  },
  {
    "name": "Köttbullar stekta frysvara",
    "calories": 264,
    "protein": 18.8,
    "fat": 15.2,
    "carbs": 8
  },
  {
    "name": "Korv falukorv fett ca 22 % kött 58% stekt",
    "calories": 254,
    "protein": 21.8,
    "fat": 9.6,
    "carbs": 5.4
  },
  {
    "name": "Frityrolja",
    "calories": 884,
    "protein": 100,
    "fat": 0,
    "carbs": 0
  },
  {
    "name": "Fruktyoghurt fett 2% berikad",
    "calories": 75,
    "protein": 1.7,
    "fat": 3,
    "carbs": 11.5
  },
  {
    "name": "Fruktyoghurt fett 2,5% berikad",
    "calories": 79,
    "protein": 2,
    "fat": 2.9,
    "carbs": 11.8
  },
  {
    "name": "Mjuk kaka tårtbotten glutenfri",
    "calories": 311,
    "protein": 3.3,
    "fat": 4,
    "carbs": 65.3
  },
  {
    "name": "Soygurt smaksatt osötad berikad",
    "calories": 53,
    "protein": 2.2,
    "fat": 3.2,
    "carbs": 4.5
  },
  {
    "name": "Soygurt naturell eko. berikad",
    "calories": 60,
    "protein": 2.6,
    "fat": 4,
    "carbs": 4.6
  },
  {
    "name": "Crème fraiche fett 32%",
    "calories": 312,
    "protein": 33.6,
    "fat": 2,
    "carbs": 1.6
  },
  {
    "name": "Crème fraiche laktosfri fett 32-34%",
    "calories": 312,
    "protein": 33.6,
    "fat": 2,
    "carbs": 1.6
  },
  {
    "name": "Crème fraiche lätt fett 13%",
    "calories": 138,
    "protein": 11.9,
    "fat": 2.9,
    "carbs": 5.2
  },
  {
    "name": "Crème fraiche lätt laktosfri fett 13%",
    "calories": 138,
    "protein": 11.9,
    "fat": 2.9,
    "carbs": 5.2
  },
  {
    "name": "Ädelost blågrön mögelost fett ca 35%",
    "calories": 372,
    "protein": 34,
    "fat": 16.7,
    "carbs": 0.9
  },
  {
    "name": "Ost hårdost parmesan fett 29% typ Grana Padano",
    "calories": 382,
    "protein": 26.9,
    "fat": 31.8,
    "carbs": 3.8
  },
  {
    "name": "Soygurt naturell berikad Ca vitD B12 folsyra riboflavin",
    "calories": 56,
    "protein": 2.3,
    "fat": 3.6,
    "carbs": 4.3
  },
  {
    "name": "Soygurt naturell berikad Ca vitD B12",
    "calories": 56,
    "protein": 2.3,
    "fat": 3.6,
    "carbs": 4.3
  },
  {
    "name": "Yoghurt smaksatt m. sötningsm. fett 0% typ grekisk yoghurt",
    "calories": 59,
    "protein": 0.1,
    "fat": 9.1,
    "carbs": 5.1
  },
  {
    "name": "Yoghurt mild honung fett 2% berikad",
    "calories": 70,
    "protein": 1.9,
    "fat": 3.2,
    "carbs": 9.9
  },
  {
    "name": "Yoghurt mild vanilj fett 2,7% berikad",
    "calories": 77,
    "protein": 2.6,
    "fat": 2.9,
    "carbs": 10.4
  },
  {
    "name": "Yoghurt naturell lätt laktosfri fett ca 0,4% berikad",
    "calories": 39,
    "protein": 0.5,
    "fat": 3.6,
    "carbs": 5
  },
  {
    "name": "Gris skinka bog konserv.",
    "calories": 140,
    "protein": 8,
    "fat": 17,
    "carbs": 0
  },
  {
    "name": "Fruktyoghurt lätt m. socker fett 0,1%",
    "calories": 50,
    "protein": 0.1,
    "fat": 2.9,
    "carbs": 8.8
  },
  {
    "name": "Fruktyoghurt lätt m. sötningsm. fett 0,1% berikad",
    "calories": 50,
    "protein": 0.1,
    "fat": 2.9,
    "carbs": 8.8
  },
  {
    "name": "Fruktyoghurt lättsötad fett 1,5% berikad",
    "calories": 60,
    "protein": 0.8,
    "fat": 3.4,
    "carbs": 9.2
  },
  {
    "name": "Nöt färs m. morot blomkål rå",
    "calories": 106,
    "protein": 5.8,
    "fat": 10.7,
    "carbs": 2.3
  },
  {
    "name": "Tonfisk gulfenad rå",
    "calories": 95,
    "protein": 0.6,
    "fat": 21.7,
    "carbs": 0.5
  },
  {
    "name": "Rödbetssallad m. creme fraiche kylvara",
    "calories": 209,
    "protein": 16.6,
    "fat": 1.3,
    "carbs": 13.6
  },
  {
    "name": "Rödbetssallad u. ägg kylvara",
    "calories": 222,
    "protein": 19.7,
    "fat": 0.8,
    "carbs": 10.5
  },
  {
    "name": "Schnitzel kalv stekt",
    "calories": 211,
    "protein": 10.1,
    "fat": 19.9,
    "carbs": 9.6
  },
  {
    "name": "Kanelbulle glutenfri",
    "calories": 340,
    "protein": 15.2,
    "fat": 2.6,
    "carbs": 47.5
  },
  {
    "name": "Muffins glutenfri",
    "calories": 333,
    "protein": 14.7,
    "fat": 5.5,
    "carbs": 43.6
  },
  {
    "name": "Kladdkaka glutenfri",
    "calories": 395,
    "protein": 20.4,
    "fat": 6.1,
    "carbs": 45
  },
  {
    "name": "Småkakor glutenfria hembakade",
    "calories": 425,
    "protein": 19.9,
    "fat": 2.7,
    "carbs": 57.8
  },
  {
    "name": "Krabba vitt kött kokt",
    "calories": 86,
    "protein": 0.3,
    "fat": 20.5,
    "carbs": 0
  },
  {
    "name": "Krabba brunt kött kokt",
    "calories": 163,
    "protein": 7.8,
    "fat": 18.8,
    "carbs": 4.4
  },
  {
    "name": "Kex m. kola rispuffar mjölkchokladöverdrag",
    "calories": 499,
    "protein": 25.8,
    "fat": 5.2,
    "carbs": 60.7
  },
  {
    "name": "Maltkulor m. mjölkchokladöverdrag",
    "calories": 498,
    "protein": 23.3,
    "fat": 7.6,
    "carbs": 63.5
  },
  {
    "name": "Nöt färs m. ärtprotein",
    "calories": 190,
    "protein": 10.5,
    "fat": 21.9,
    "carbs": 1.7
  },
  {
    "name": "Savoiardikex",
    "calories": 323,
    "protein": 3.3,
    "fat": 6.5,
    "carbs": 65.2
  },
  {
    "name": "Fruktdryck m. kolsyra",
    "calories": 22,
    "protein": 0,
    "fat": 0.5,
    "carbs": 4.8
  },
  {
    "name": "Mörk choklad kakao <70% m. nötter frukt",
    "calories": 536,
    "protein": 30.2,
    "fat": 6.9,
    "carbs": 59
  },
  {
    "name": "Mandelmassa",
    "calories": 435,
    "protein": 25,
    "fat": 9.7,
    "carbs": 38.9
  },
  {
    "name": "Naturgodis nötter m. vit choklad",
    "calories": 565,
    "protein": 38.2,
    "fat": 9.4,
    "carbs": 44.5
  },
  {
    "name": "Broccoli kokt m. salt frysvara",
    "calories": 26,
    "protein": 0.3,
    "fat": 2.4,
    "carbs": 2
  },
  {
    "name": "Naturgodis frukt m. vit choklad ",
    "calories": 493,
    "protein": 23.3,
    "fat": 5,
    "carbs": 65.4
  },
  {
    "name": "Naturgodis lakrits m. vit choklad",
    "calories": 481,
    "protein": 21,
    "fat": 5.2,
    "carbs": 67.3
  },
  {
    "name": "Naturgodis frukt m. mjölkchoklad",
    "calories": 519,
    "protein": 27.9,
    "fat": 4.6,
    "carbs": 61
  },
  {
    "name": "Naturgodis lakrits m. mjölkchoklad",
    "calories": 482,
    "protein": 22.4,
    "fat": 5,
    "carbs": 64
  },
  {
    "name": "Naturgodis nötter m. mjölkchoklad",
    "calories": 562,
    "protein": 39.2,
    "fat": 10.1,
    "carbs": 39.7
  },
  {
    "name": "Pyttipanna hemlagad",
    "calories": 138,
    "protein": 5.5,
    "fat": 5.9,
    "carbs": 15.1
  },
  {
    "name": "Räkchips friterade",
    "calories": 508,
    "protein": 26.6,
    "fat": 3.1,
    "carbs": 63.6
  },
  {
    "name": "Potatissallad u. ägg kylvara",
    "calories": 221,
    "protein": 18.8,
    "fat": 1.4,
    "carbs": 11.6
  },
  {
    "name": "Sellerikål pak choi",
    "calories": 19,
    "protein": 0.2,
    "fat": 1.4,
    "carbs": 1.8
  },
  {
    "name": "Koriander blad",
    "calories": 37,
    "protein": 0.7,
    "fat": 3.5,
    "carbs": 1.9
  },
  {
    "name": "Grönmynta blad",
    "calories": 46,
    "protein": 0.6,
    "fat": 4.7,
    "carbs": 2.4
  },
  {
    "name": "Kardemumma torkad",
    "calories": 292,
    "protein": 2.8,
    "fat": 6.7,
    "carbs": 48
  },
  {
    "name": "Kryddnejlika torkad malen",
    "calories": 240,
    "protein": 8.4,
    "fat": 5.9,
    "carbs": 18.7
  },
  {
    "name": "Koriander frö torkad",
    "calories": 336,
    "protein": 17.5,
    "fat": 10.7,
    "carbs": 13
  },
  {
    "name": "Gurkmeja torkad",
    "calories": 316,
    "protein": 5,
    "fat": 7.7,
    "carbs": 49.2
  },
  {
    "name": "Spiskummin frö torkad",
    "calories": 354,
    "protein": 16.6,
    "fat": 13.9,
    "carbs": 22.6
  },
  {
    "name": "Paneer",
    "calories": 258,
    "protein": 14.8,
    "fat": 18.9,
    "carbs": 12.4
  },
  {
    "name": "Linssoppa m. coucous veg.",
    "calories": 49,
    "protein": 1.3,
    "fat": 2.2,
    "carbs": 6.1
  },
  {
    "name": "Pannkaka tunn m. vatten",
    "calories": 119,
    "protein": 5,
    "fat": 3.7,
    "carbs": 14.3
  },
  {
    "name": "Mörk choklad kakao 70% m. frukt nötter",
    "calories": 571,
    "protein": 42.7,
    "fat": 8.2,
    "carbs": 34.3
  },
  {
    "name": "Knäck",
    "calories": 463,
    "protein": 22.3,
    "fat": 2.5,
    "carbs": 62.5
  },
  {
    "name": "Potatismos pulver",
    "calories": 344,
    "protein": 1.5,
    "fat": 9.1,
    "carbs": 68
  },
  {
    "name": "Potatismos pulver tillagat",
    "calories": 64,
    "protein": 0.3,
    "fat": 1.7,
    "carbs": 12.7
  },
  {
    "name": "Mörk choklad m. sötningsm.",
    "calories": 581,
    "protein": 43.9,
    "fat": 8.4,
    "carbs": 34
  },
  {
    "name": "Kola hemlagad",
    "calories": 470,
    "protein": 22.7,
    "fat": 1.1,
    "carbs": 65.4
  },
  {
    "name": "Tomatsås till pizza konserv.",
    "calories": 49,
    "protein": 1.5,
    "fat": 1.5,
    "carbs": 6
  },
  {
    "name": "Drottningsylt lättsockrad",
    "calories": 126,
    "protein": 0.4,
    "fat": 0.5,
    "carbs": 28.9
  },
  {
    "name": "Drottningsylt",
    "calories": 182,
    "protein": 0.4,
    "fat": 0.5,
    "carbs": 42.6
  },
  {
    "name": "Hallonsylt lättsockrad",
    "calories": 121,
    "protein": 0,
    "fat": 0.4,
    "carbs": 29
  },
  {
    "name": "Ketchup lättsötad",
    "calories": 72,
    "protein": 0.2,
    "fat": 2.5,
    "carbs": 13.7
  },
  {
    "name": "Ketchup m. sötningsm.",
    "calories": 47,
    "protein": 0.2,
    "fat": 2,
    "carbs": 8.3
  },
  {
    "name": "Karameller gräddkarameller",
    "calories": 432,
    "protein": 12.8,
    "fat": 1.3,
    "carbs": 77
  },
  {
    "name": "Saft lättsockrad drickf.",
    "calories": 28,
    "protein": 0,
    "fat": 0,
    "carbs": 6.8
  },
  {
    "name": "Vitmögelost smaksatt fett ca 38 % ",
    "calories": 371,
    "protein": 33.6,
    "fat": 15.5,
    "carbs": 2.4
  },
  {
    "name": "Fruktyoghurt fett 3,6% berikad",
    "calories": 91,
    "protein": 3.7,
    "fat": 3,
    "carbs": 11.5
  },
  {
    "name": "Chips vete m. baconsmak",
    "calories": 461,
    "protein": 23.7,
    "fat": 6.2,
    "carbs": 54.4
  }
];