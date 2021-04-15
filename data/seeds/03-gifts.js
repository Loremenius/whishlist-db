exports.seed = function(knex) {
    // Inserts seed entries
    return knex('gift').insert([
    {"name":"Parallel Ring","description":"","gift_url":"https://elizabethharlow.noondaycollection.com/shop/parallel-ring/","purchased":false,"user_id":2},
    {"name":"Soma Gift Card","description":"","gift_url":"","purchased":false,"user_id":23},
    {"name":"Apples to Apples Party Box board game","description":"","gift_url":"https://www.amazon.com/Mattel-Games-Apples-Party-Box/dp/B00K12LGK0/ref=pd_lpo_21_t_0/139-6543559-5122044?_encoding=UTF8&pd_rd_i=B00K12LGK0&pd_rd_r=d9abe07f-3d68-423f-8248-22b89b24b0ec&pd_rd_w=7e4Wh&pd_rd_wg=wB2bb&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=36YER9ZYZ1BZM7BEH5MQ&psc=1&refRID=36YER9ZYZ1BZM7BEH5MQ ","purchased":false,"user_id":23},
    {"name":"Double walled insulated glasses/coffee mugs","description":"","gift_url":"https://www.amazon.com/dp/B01I0333I4/?coliid=I1TFLGGQE5TC8F&colid=2ULU6ZW49P1HW&psc=1&ref_=lv_ov_lig_dp_it","purchased":false,"user_id":23},
    {"name":"Hallmark snoopy ornament","description":"Any","gift_url":"","purchased":false,"user_id":5},
    {"name":"USATF Gear","description":"Shirts (M), Hoodies (M), Pants/Shorts (M), Bags (Synch or Backpack)","gift_url":"https://team-usatf-store.myshopify.com/","purchased":false,"user_id":20},
    {"name":"Nintendo Switch wildcat bundle edition","description":"","gift_url":"Amazon.com","purchased":false,"user_id":12},
    {"name":"Gtracing Gaming Chair Racing Office Computer Ergonomic Video Game Chair Backrest and Seat Height Adjustable Swivel Recliner with Headrest and Lumbar Pillow Esports Chair (Red)","description":"","gift_url":"Amazon.com","purchased":true,"user_id":12},
    {"name":"Armani Code","description":"","gift_url":"","purchased":false,"user_id":21},
    {"name":"Character boot socks","description":"Pokemon, Star Wars, Scooby Do","gift_url":"","purchased":false,"user_id":21},
    {"name":"Waterproof gloves","description":"Small","gift_url":"https://www.amazon.com/KINGSBOM-Waterproof-Warm-Gloves-Thinsulate/dp/B07WQVP81P/ref=sr_1_4?dchild=1&keywords=womens+waterproof+touchscreen+gloves&psc=1&qid=1572751122&sr=8-4","purchased":false,"user_id":6},
    {"name":"Wall-e lounge pants","description":"Medium","gift_url":"https://www.walmart.com/ip/MJC-Men-s-Disney-Pixar-Wall-E-Movie-Lounge-Pants/433192577?selected=true","purchased":false,"user_id":6},
    {"name":"Ancient Magus Bride Books","description":"Series books 3-12","gift_url":"https://www.barnesandnoble.com/s/ancient+magus%27+bride+series?_requestid=1921831","purchased":true,"user_id":6},
    {"name":"Boba Fett Lego Slave Ship","description":"","gift_url":"","purchased":false,"user_id":21},
    {"name":"Snoopy Christmas Tee","description":"Adult size Small","gift_url":"","purchased":false,"user_id":21},
    {"name":"Boys Goldtoe Athletic Crew Socks ","description":"Large (White) 6-pair\nLarge (Black) 6-pair","gift_url":"https://www.amazon.com/Gold-Toe-Athletic-White-Large/dp/B07HDV56P3?ref_=ast_sto_dp&th=1&psc=1","purchased":false,"user_id":6},
    {"name":"Mario Kart Nintendo Switch","description":"","gift_url":"","purchased":false,"user_id":9},
    {"name":"Hat (blue)","description":"","gift_url":"https://www.heatherbrownart.com/collections/hats/products/kailua-weekend-trucker-hat","purchased":false,"user_id":2},
    {"name":"Lego Star Wars","description":"Obi Wan's Hut","gift_url":"","purchased":true,"user_id":13},
    {"name":"Lego Minecraft","description":"The Redstone Battle","gift_url":"","purchased":true,"user_id":13},
    {"name":"Classic Ultra Mini Ugg Boot","description":"Grey or Black\nSize 7.5","gift_url":"","purchased":true,"user_id":9},
    {"name":"NF Leave Me Alone Lyric hoodie","description":"","gift_url":"https://nfrealmusicmerch.com/collections/sweatshirts/products/lyric-leave-me-alone-hoodie","purchased":false,"user_id":12},
    {"name":"Jade Rabbit Collectable Figurine ","description":"","gift_url":"https://bungiestore.com/collections/bungie-and-destiny-official-merchandise/products/preorder-jade-rabbit-figure","purchased":false,"user_id":1},
    {"name":"Legendary - Secret Wars Volume 2 Expansion","description":"","gift_url":"https://www.amazon.com/Legendary-Marvel-Secret-Deck-BuildingCard/dp/B015IWS61Y","purchased":false,"user_id":1},
    {"name":"Log Horizon Vol. 1-11 (light novel)","description":"","gift_url":"https://www.amazon.com/Log-Horizon-Vol-light-novel-ebook/dp/B083SC2CNV/ref=mp_s_a_1_3?dchild=1&keywords=log+horizon+light+novel+set&qid=1594240048&sprefix=log+horizon+&sr=8-3","purchased":false,"user_id":6},
    {"name":"Dungeon and Dragons Stickers from Redbubble","description":"Just any that have cool designs or are ironic","gift_url":"Example:\nhttps://www.redbubble.com/i/sticker/Guess-I-ll-Die-by-Matte-Bat/26743673.EJUG5","purchased":false,"user_id":28},
    {"name":"Mandalorian t shirt","description":"Adult size Small","gift_url":"","purchased":false,"user_id":21},
    {"name":"Sharp vacuum cordless handheld wand","description":"","gift_url":"HSN","purchased":false,"user_id":5},
    {"name":"Origami 3 drawer rolling & iron station#698918 Want ONLY palm leaf design pls HSN","description":"","gift_url":"","purchased":false,"user_id":5},
    {"name":"Graphic Design print","description":"","gift_url":"https://popchart.co/collections/design/products/a-stylistic-survey-of-graphic-design","purchased":true,"user_id":31},
    {"name":"Funkoverse: Back to the Future","description":"2-pack","gift_url":"","purchased":true,"user_id":13},
    {"name":"Funkoverse: Nightmare Before Christmas","description":"4-pack","gift_url":"","purchased":true,"user_id":13},
    {"name":"Lego DOTS","description":"Pineapple Pencil Holder","gift_url":"","purchased":true,"user_id":13},
    {"name":"Lego Nintendo Entertainment System","description":"","gift_url":"","purchased":false,"user_id":13},
    {"name":"Lego Super Mario","description":"Bowser's Castle Boss Battle","gift_url":"","purchased":false,"user_id":13},
    {"name":"Lego Monkie Kid","description":"Monkey King Warrior Mech","gift_url":"","purchased":false,"user_id":13},
    {"name":"Lego Monkie Kid","description":"Demon Bull King","gift_url":"","purchased":false,"user_id":13},
    {"name":"Lego Monkie Kid","description":"Pigsy's Food Truck","gift_url":"","purchased":false,"user_id":13},
    {"name":"Lego Ninjago","description":"Fire Stone Mech","gift_url":"","purchased":false,"user_id":13},
    {"name":"Lego Batman","description":"1989 Batmobile","gift_url":"","purchased":false,"user_id":13},
    {"name":"Lego Batman","description":"1989 Batwing","gift_url":"","purchased":false,"user_id":13},
    {"name":"Lego Star Wars","description":"The Razor Crest","gift_url":"","purchased":false,"user_id":13},
    {"name":"Lego Spiderman","description":"Venomosaurus Ambush","gift_url":"","purchased":false,"user_id":13},
    {"name":"Lego Monkie Kid","description":"Sandy's Speedboat","gift_url":"","purchased":false,"user_id":13},
    {"name":"Lego Brick Headz","description":"Frankenstein","gift_url":"","purchased":false,"user_id":13},
    {"name":"Lego Brick Headz","description":"Nutcracker","gift_url":"","purchased":false,"user_id":13},
    {"name":"Lego","description":"Christmas Wreath 2-in-1","gift_url":"","purchased":false,"user_id":13},
    {"name":"Lego Super Mario","description":"Any...","gift_url":"","purchased":false,"user_id":13},
    {"name":"Gift Cards","description":"Ross, Target, TJ Maxx, Visa, Marshalls, J.C. Penney","gift_url":"","purchased":false,"user_id":9},
    {"name":"Canvas Platform Chuck Taylor Allstar ","description":"Black or White\nSize 7.5","gift_url":"","purchased":false,"user_id":9},
    {"name":"Island Map Bamboo Mug (13.5 oz. mug)","description":"","gift_url":"https://www.heatherbrownart.com/collections/cups-mugs-drinkware/products/island-map-bamboo-mug","purchased":false,"user_id":2},
    {"name":"Hallmark Christmas 2020 Wall-e Ornament","description":"","gift_url":"https://www.amazon.com/Hallmark-Keepsake-Christmas-Ornament-Disney/dp/B084CM34X7/ref=mp_s_a_1_9?dchild=1&keywords=wall-e&qid=1602645492&sr=8-9&th=1&psc=1","purchased":false,"user_id":6},
    {"name":"Birthdate candle","description":"July 23","gift_url":"https://birthdate.co/products/july-twenty-thirds","purchased":false,"user_id":31},
    {"name":"Pop-up pencil case","description":"","gift_url":"https://notebooktherapy.com/products/tsuki-popup-pencil-case?utm_source=instagram.com&utm_medium=inpa&variant=31218114429043","purchased":false,"user_id":31},
    {"name":"Gift Cards","description":"Barnes and Nobles, Amazon, Dutch Bros, Costco","gift_url":"","purchased":false,"user_id":31},
    {"name":"Experience Tea Gift Certificate","description":"$10 or $25","gift_url":"https://experience-tea.com/product/gift-certificates/","purchased":false,"user_id":31},
    {"name":"Animal Crossing plush","description":"Flora the flamingo","gift_url":"https://www.gameard.com/products/animal-crossing-plush-doll-toy?variant=32477059350608","purchased":false,"user_id":32},
    {"name":"Pink monstera rug","description":"","gift_url":"https://shopzoki.com/product/pink-monstera-rug/","purchased":false,"user_id":32},
    {"name":"Birds of the world print","description":"","gift_url":"https://popchart.co/products/birds-of-the-world","purchased":false,"user_id":32},
    {"name":"Shturman Displate","description":"Wall Hanging","gift_url":"https://displate.com/displate/1776215","purchased":true,"user_id":28},
    {"name":"PeaceKeeper Displate","description":"Wall Hanging","gift_url":"https://displate.com/displate/1770361","purchased":true,"user_id":28},
    {"name":"Rocket Book Fusion","description":"Reusable note taker","gift_url":"https://www.amazon.com/Rocketbook-Everlast-Fusion-Letter-Size/dp/B07RTN4F7D/ref=sr_1_2?dchild=1&keywords=rocketbook&qid=1606787414&sr=8-2","purchased":true,"user_id":28},
    {"name":"Wired headphones","description":"","gift_url":"Amazon.com","purchased":false,"user_id":12},
    {"name":"Star Wars: Jedi Fallen Order","description":"","gift_url":"Target.com","purchased":true,"user_id":12},
    {"name":"Sailor Moon Eternal Edition","description":"Volume 7","gift_url":"https://www.amazon.com/Sailor-Moon-Eternal-Naoko-Takeuchi/dp/1632365944","purchased":true,"user_id":31},
  ])
  };