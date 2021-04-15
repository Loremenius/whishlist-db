const fs = require('fs');
console.log('running data converter!');

const giftsString = `
|	Polaroid film	Color 600 film with colored frames. Can sometimes be found in the electronic departments of Target, Walmart, etc.	https://us.polaroid.com/products/color-600-instant-film-color-frames?quantity=1	f	31
|	clothes	A giftcard to Old Navy, Target, Sears, or Macy's would be great.		f	1
|	Star Wars  T-shirts	X-large	https://www.amazon.com/Star-Wars-Fetters-Mandalorian-Graphic/dp/B088KR74YZ/ref=sr_1_1_sspa?dchild=1&keywords=star+wars+shirts&qid=1605502056&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzQ1VGQkRDNVZOSkpLJmVuY3J5cHRlZElkPUEwNzYyMTU5UThQSThJTEs5RVZLJmVuY3J5cHRlZEFkSWQ9QTA5NDg1NjhRRTdPTlRVSkRTNjYmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl	f	16
|	Military Surplus 	Anything military, jackets, tops and pants. Go cheap. The website I put is pretty cool so look there but anywhere else online works too. I'm usually a Medium or Large (42-44") but I think either work. 	https://www.mikesmilitaria.com/	f	29
|	Dodger hoodie!!:)		http://mshop.mlb.com/product/index.jsp?productId=17406006	t	18
|	Thank you	Secret Santa, thank you very much for early Xmas gifts.		f	11
|	Gift Cards from Macys, Dillards or Kohls			f	15
|	MLB 2k			f	18
|	Fishing Lures	Nothing too crazy, bass jigs, spinners, crank baits, etc.\r\nAnything works! No live baits	http://www.basspro.com/Fishing-Baits-Lures-Lure-Kits/_/N-1z0uxam?cm_sp=EnchLureLKOct2013_RCATRT	t	29
|	Nike gift card			f	19
|	Lowes Gift card	Lowes DIY stores		f	16
|	itunes gift card 			t	19
|	Mad Hatter "Barbie" Doll	can be found at Toys R' Us		f	22
|	Book- If You See a Fairy Ring	can be found at Toys R' Us\r\n(Barrons Educational Series)		f	22
|	Star Wars Lego #6205 V- Wing Fighter			f	22
|	gift card to Borders			f	22
|	gift card to Target			f	22
|	Tiffany earrings		http://m.tiffany.com/Mobile/Shopping/Item.aspx?fromGrid=1&sku=23900564&mcat=148207&cid=288153	f	19
|	Nordstrom Gift Card			f	23
|	Amazon Gift Card			f	23
|	Black and white Nike windrunner	Size medium	http://m.ebay.com/itm/Nike-WindRunner-Jacket-Windbreaker-Hoodie-Black-White-Womens545909-011-/321918	f	19
|	NBA 2k13			f	18
|	Xbox Hard drive			f	18
|	Head covers	Golf Iron Head covers	https://www.amazon.com/10Pcs-Meshy-Covers-Cover-Wedges/dp/B071LC3C84/ref=sr_1_6?crid=3IRFEUX4P1BQX&dchild=1&keywords=golf+iron+covers&qid=1605501568&sprefix=golf+iron%2Caps%2C240&sr=8-6	f	16
|	A warm, safe & happy holiday	There is nothing more important to all of us than to know each year we find all of our family members in good health, in mind body and spirit. Merry Wishes and Happy New Years 		t	25
|	VISA gift card			f	25
|	iPod Touch			f	27
|	Magic Gravity Ball			t	27
|	Gift Card to Build-A-Bear			f	27
|	DS Games			t	27
|	Rotary Saw	Rotary saw	https://www.amazon.com/Ryobi-P531-18-Volt-Cordless-Included/dp/B01IU6JWAY/ref=sr_1_30?dchild=1&keywords=ryobi+saw&qid=1605501726&sr=8-30	f	16
|	Resin	Resin	https://www.amazon.com/ELEGOO-Washable-UV-Curing-Standard-Photopolymer/dp/B07X34Z9SC/ref=sxts_sxwds-bia-wc-drs1_0?cv_ct_cx=water+washable+resin&dchild=1&keywords=water+washable+resin&pd_rd_i=B07X34Z9SC&pd_rd_r=7ec43b43-8c18-4c5a-9e94-1c5c84340e1e&pd_rd_w=sBKmE&pd_rd_wg=Pqdyl&pf_rd_p=c33e4373-edb9-47f9-a7e6-5d3d6a7a4ad0&pf_rd_r=WXMV8Q21V3M6306DA68C&psc=1&qid=1605501990&sr=1-1-5e875a02-02b1-4426-9916-8a5c26cd5a14	f	16
|	Lamb of God Tshirt	Medium	https://shop.lamb-of-god.com/collections/apparel/products/camo-flag-tee?variant=32496977117269	f	29
|	Target or Walmart giftcard			f	8
|	Candles any scent in glass container			t	15
|	Nike shoes 	Size 9 and a half 	http://m.nike.com/us/en_us/pd/free-tr-5-flyknit-metallic-training-shoe/pid-10327592/pgid-11137007	f	19
|	Project Zed T-Shirt		https://na.merch.riotgames.com/en/clothing/project-zed-tee-unisex.html	f	1
|	Bath and Body Works\n Body Wash any flavor			f	8
|	ARIAT WORK BOOTS		http://www.sheplers.com/Ariat-Heritage-Roper-Cowboy-Boots/3132.pro?parentCategoryId=447&categoryId=2	f	18
|	Saw	RYOBI JS651L1 6.1 Amp Variable Speed Orbital Jigsaw With Speed Match	https://www.amazon.com/RYOBI-JS651L1-Variable-Orbital-Jigsaw/dp/B009DLK2D2/ref=sr_1_9?crid=8DY84XHNXL3Y&dchild=1&keywords=ryobi+jigsaw+cordless+18v&qid=1605501430&sprefix=ryobi+jig%2Caps%2C289&sr=8-9	t	16
|	Pantera Patches		https://www.amazon.com/Pantera-Vulgar-Display-Power-Official/dp/B00AERL8SC/ref=sr_1_4?dchild=1&keywords=Pantera+patch&qid=1606271755&sr=8-4\n	t	29
|	Pantera Patch		https://www.amazon.com/PANTERA-Thrash-MP28-applique-Patches/dp/B00QSHM4OY/ref=sxin_9_ac_d_pm?ac_md=2-0-VW5kZXIgJDk%3D-ac_d_pm&cv_ct_cx=Pantera+patch&dchild=1&keywords=Pantera+patch&pd_rd_i=B00QSHM4OY&pd_rd_r=12bc2434-f3ad-47fb-98c7-b1589612b959&pd_rd_w=9d0pn&pd_rd_wg=Hgj3A&pf_rd_p=68f25c26-6854-442e-9296-f746545e76bb&pf_rd_r=EWP27F8F3W2Q3ZGX8Q0V&psc=1&qid=1606271755&sr=1-1-22d05c05-1231-4126-b7c4-3e7a9c0027d0	t	29
|	Black Ops Ghost			t	18
|	Madden 25			f	18
|	Fujifilm - instax mini 8 instant film camera - pink		http://www.bestbuy.com/site/fujifilm-instax-mini-8-instant-film-camera-pink/1319394.p?id=12190488970	f	19
|	Gift Cards	Marshall’s, Goodwill, Amazon, JCPenney, Famous Footwear, Barnes & Noble		f	6
|	Reusable cotton swab	Any color	https://earthsider.com/products/zero-waste-reusable-swab?fbclid=PAAaY3dqtvnV0FFjd6uHYAXQbdXyfAKCd0KQWBltbQPo2rdL9B4kbydldxeCM&variant=30145632239697	f	10
|	Watch bands for Garmin Vivoactive 3	5 - Pack A	https://www.amazon.com/RuenTech-Replacement-Vivoactive-Vivomove-Silicone/dp/B07BF9D492/ref=sr_1_12?crid=30Q7W6I0XO1D0&dchild=1&keywords=garmin%2Bvivoactive%2B3%2Bwatch%2Bbands&qid=1609979067&sprefix=garmin%2Caps%2C219&sr=8-12&th=1	f	2
|	Callaway Yellow Golf Balls	prefer yellow	https://www.rockbottomgolf.com/balls/new-golf-balls/callaway-warbird-golf-balls/	f	16
|	LITHIUM BATTERIES 	RYOBE TWO BATTERY PACK\r\nAt home depot		f	30
|	SuperFight Blue deck expansion		http://store.skybound.com/products/the-blue-deck-original-box	f	1
|	Darkest Dungeon Displate	Wall Hanging	https://displate.com/displate/1760193	t	28
|	3D Printer PLA Filament 	Black or Natural...ThriftyMake or MH Build	https://www.matterhackers.com/store/c/1.75mm%20PLA%20Filament	f	16
|	LEVIES 36X30 BLUE AND BLACK		Any store	f	30
|	Ivory Ella Top	Black & White Tye Dye L/S\nWildfire Recovery L/S\nParade Oversize L/S\nOrchid Tye Dye Oversize L/S\nAll size Small	https://www.ivoryella.com/	t	9
|	Best Pantera Patch		https://www.amazon.com/Pantera-Cfh-Standard-Patch/dp/B00AERLBQQ/ref=sr_1_5?dchild=1&keywords=Pantera+patch&qid=1606271755&sr=8-5	t	29
|	LED Potion Desk Lamp		http://www.thinkgeek.com/product/imro/	f	1
|	Ryobi 18V Lithium Batteries	Just need the batteries--1 pack or 2 pack is fine	https://www.homedepot.com/p/Ryobi-18-Volt-ONE-Lithium-Ion-Compact-Lithium-Battery-Pack-1-5Ah-2-Pack-P109/203466922	f	16
|	Gift Cards	Visa | Nike | Dicks Sporting Goods | Xbox		f	20
|	"Grateful" Beaded Stretch Bracelet\nLITTLE WORDS PROJECT	white	https://www.nordstrom.com/s/little-words-project-grateful-beaded-stretch-bracelet/5461334	t	23
|	Miniature Market Gift card	gift card from miniaturemarket.com	https://www.miniaturemarket.com/giftcardaccount.html	t	16
|	Nike Adapt BB 2.0 ‘Nike Mag’	Size 10	https://goat.app.link/dtqzQFBo5bb	f	20
|	Echo Show 8	Charcoal color 		f	23
|	Sephora Gift Card	I’m a VIP so use my email address lcasias@gmail.com so I get points:)		f	23
|	Kate Spade New York Beanie cap	heather grey or black (@ Nordstrom) 	https://www.nordstrom.com/s/kate-spade-new-york-pointy-bow-beanie/5705507	f	23
|	Tory Burch enamel logo slider bracelet 	Tory Gold/Ivory or Tory Gold/black or Tory Gold/Red	https://www.nordstrom.com/s/tory-burch-enamel-logo-slider-bracelet/5475391	f	23
|	Beauty Blenders 	any color, best deal is at Nordstrom in a "electric feels" set... 	https://www.nordstrom.com/s/beautyblender-electric-feels-set-56-value/5600356	f	23
|	Long Pink Golf Tees			f	15
|	Knit Fingerless Gloves 	any color 	https://www.nordstrom.com/s/rebecca-minkoff-stripe-knit-fingerless-gloves/5713568	f	23
|	Flannel Pajamas	Men’s Small\nDark blue, dark green or black	https://m.jcpenney.com/p/stafford-mens-broadcloth-woven-long-sleeve-pajama-set/pp5004740606?pTmplType=regular&catId=SearchResults&searchTerm=mens+flannel+pajamas&productGridView=medium&urlState=gender%3Dmens%257Cunisex%2Badult&badge=onlyatjcp	f	6
|	Orange Blossom, Lilac & Jasmine Body Moisturizer		https://www.nordstrom.com/s/antica-farmacista-orange-blossom-lilac-jasmine-body-moisturizer/3014590	f	23
|	ANASTASIA #7B Duo Brush		https://www.nordstrom.com/s/anastasia-beverly-hills-7b-duo-brush/4617091	f	23
|	The Original MakeUp Eraser\n	any color but would love this special edition Treasure Box 7-Day Set	https://www.ulta.com/treasure-box-7-day-set?productId=pimprod2020867	f	23
|	Rosie Mini Bag from Brighton	Black & White	https://www.brighton.com/product/crossbodies/36956-198488/rosie-rosie-mini-camera-bag.html	f	23
|	Hydroflask- custom  	wide mouth 32 oz; cobalt strap; cobalt cap; watermelon bottle color; and colbalt boot.	https://www.hydroflask.com/my-hydro-wide-mouth?recipe=91747186	f	23
|	A Christmas Miracle 	I wish for Lily and Alex to love the game of golf we can always have quality time together outside playing (and drinking and gambling). 😬		t	24
|	Tinsel Town Nutcracker French Wire Earrings from Brighton 		https://www.brighton.com/product/earrings/36956-215441-215462/tinsel-town-tinsel-town-nutcracker-french-wire-earrings.html	f	23
|	Clothes	Shirts, hoodies, flannels, pants, workout clothes| Brands like Nike, Mentality.co, Battle, American Eagle, etc | Sizes: Hoodie: Medium, Shirts: Medium, Pants: Medium or 32x32, Size 10 Shoe		f	20
|	Golf Pride Golf grips	(10) MCC Align grips, standard size	https://store.golfpride.com/store/grips/prod680008/mcc-align	f	24
|	Lamb of God Patch		https://www.amazon.com/Jacket-Embroidered-Symbol-Costume-Prinya/dp/B00UXWFAL4/ref=sr_1_2?dchild=1&keywords=lamb+of+god+patch&qid=1606271941&sr=8-2	t	29
|	Hallmark Snoopy and Woodstock Ornament 			t	21
|	Pokemon nanoblocks	I already have Pikachu, Ghengar, Psyduck, Snorlax, and Cyndaquil. Can be found at Barnes and Nobles or other bookstores or hobby stores	https://nanoblockus.com/page/1/?s=pokemon	f	10
|	Okami teacup set		https://www.fangamer.com/collections/okami/products/okami-tea-cup-set	f	10
|	Tie Dyed T shirts long or short sleeves  XL			f	8
|	T-shirt	Medium	https://www.ninelineapparel.com/collections/veteran-inspired/products/mens-t-shirt-22-a-day?fbclid=IwAR3unVo447i2fnPPTT3_5r-fMHZPfLG7UxqowxvCwGGXy1qjO9V4reIIO_w	f	3
|	Ticket to Ride Japan and Italy	@ Dragon Hoard Games in Silverdale	https://www.daysofwonder.com/tickettoride/en/japan/	f	6
|	Dragon Age coaster set		https://sanshee.com/collections/dragon-age/products/dragon-age-inquisition-tarot-card-coaster-set-romance-series	f	10
|	Call of duty Cold War 		Game stop	f	12
|	The Seven Deadly Sins T-shirt 	Boar Hat T-shirt\r\nMedium (Army color)	https://www.redbubble.com/people/cornchip9/works/25337523-the-seven-deadly-sins-boar-hat-sign?cat_context=u-tees&grid_pos=33&p=t-shirt&rbs=6b389b73-6c9f-4f98-bebb-66b5dd6a4ae4&ref=shop_grid&style=mens&searchTerm=Seven%20deadly%20sins%20tshirt	f	6
|	Marshalls Gift Card			f	8
|	Starbucks gift card	I really like Starbucks!		f	8
|	PlayStation 5		Walmart.com	f	12
|	Horizonfit Treadmill 		https://www.horizonfitness.com/horizon-t101-treadmill?utm_source=cj&utm_medium=5126067&utm_campaign=horizonfitness.com&utm_term=&utm_content=Forbes+Media&cjevent=6e1f117b2f4d11eb825404eb0a24060e&irclickid=T6MR6PQ%3AYxyORPEwUx0Mo36HUkE13v0wEx2qRs0&irgwc=1&utm_source=impact&utm_medium=1201867&utm_campaign=Online%20Tracking%20Link&utm_term=&utm_content=Forbes%20Media	f	6
|	Geo Necklace		https://elizabethharlow.noondaycollection.com/shop/geo-necklace,-circle/	f	2
|	Parallel Ring		https://elizabethharlow.noondaycollection.com/shop/parallel-ring/	f	2
|	Soma Gift Card			f	23
|	Apples to Apples Party Box board game		https://www.amazon.com/Mattel-Games-Apples-Party-Box/dp/B00K12LGK0/ref=pd_lpo_21_t_0/139-6543559-5122044?_encoding=UTF8&pd_rd_i=B00K12LGK0&pd_rd_r=d9abe07f-3d68-423f-8248-22b89b24b0ec&pd_rd_w=7e4Wh&pd_rd_wg=wB2bb&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=36YER9ZYZ1BZM7BEH5MQ&psc=1&refRID=36YER9ZYZ1BZM7BEH5MQ 	f	23
|	Double walled insulated glasses/coffee mugs		https://www.amazon.com/dp/B01I0333I4/?coliid=I1TFLGGQE5TC8F&colid=2ULU6ZW49P1HW&psc=1&ref_=lv_ov_lig_dp_it	f	23
|	Hallmark snoopy ornament	Any		f	5
|	USATF Gear	Shirts (M), Hoodies (M), Pants/Shorts (M), Bags (Synch or Backpack)	https://team-usatf-store.myshopify.com/	f	20
|	Nintendo Switch wildcat bundle edition		Amazon.com	f	12
|	Gtracing Gaming Chair Racing Office Computer Ergonomic Video Game Chair Backrest and Seat Height Adjustable Swivel Recliner with Headrest and Lumbar Pillow Esports Chair (Red)		Amazon.com	t	12
|	Armani Code			f	21
|	Character boot socks	Pokemon, Star Wars, Scooby Do		f	21
|	Waterproof gloves	Small	https://www.amazon.com/KINGSBOM-Waterproof-Warm-Gloves-Thinsulate/dp/B07WQVP81P/ref=sr_1_4?dchild=1&keywords=womens+waterproof+touchscreen+gloves&psc=1&qid=1572751122&sr=8-4	f	6
|	Wall-e lounge pants	Medium	https://www.walmart.com/ip/MJC-Men-s-Disney-Pixar-Wall-E-Movie-Lounge-Pants/433192577?selected=true	f	6
|	Ancient Magus Bride Books	Series books 3-12	https://www.barnesandnoble.com/s/ancient+magus%27+bride+series?_requestid=1921831	t	6
|	Boba Fett Lego Slave Ship			f	21
|	Snoopy Christmas Tee	Adult size Small		f	21
|	Boys Goldtoe Athletic Crew Socks 	Large (White) 6-pair\nLarge (Black) 6-pair	https://www.amazon.com/Gold-Toe-Athletic-White-Large/dp/B07HDV56P3?ref_=ast_sto_dp&th=1&psc=1	f	6
|	Mario Kart Nintendo Switch			f	9
|	Hat (blue)		https://www.heatherbrownart.com/collections/hats/products/kailua-weekend-trucker-hat	f	2
|	Lego Star Wars	Obi Wan's Hut		t	13
|	Lego Minecraft	The Redstone Battle		t	13
|	Classic Ultra Mini Ugg Boot	Grey or Black\nSize 7.5		t	9
|	NF Leave Me Alone Lyric hoodie		https://nfrealmusicmerch.com/collections/sweatshirts/products/lyric-leave-me-alone-hoodie	f	12
|	Jade Rabbit Collectable Figurine 		https://bungiestore.com/collections/bungie-and-destiny-official-merchandise/products/preorder-jade-rabbit-figure	f	1
|	Legendary - Secret Wars Volume 2 Expansion		https://www.amazon.com/Legendary-Marvel-Secret-Deck-BuildingCard/dp/B015IWS61Y	f	1
|	Log Horizon Vol. 1-11 (light novel)		https://www.amazon.com/Log-Horizon-Vol-light-novel-ebook/dp/B083SC2CNV/ref=mp_s_a_1_3?dchild=1&keywords=log+horizon+light+novel+set&qid=1594240048&sprefix=log+horizon+&sr=8-3	f	6
|	Dungeon and Dragons Stickers from Redbubble	Just any that have cool designs or are ironic	Example:\nhttps://www.redbubble.com/i/sticker/Guess-I-ll-Die-by-Matte-Bat/26743673.EJUG5	f	28
|	Mandalorian t shirt	Adult size Small		f	21
|	Sharp vacuum cordless handheld wand		HSN	f	5
|	Origami 3 drawer rolling & iron station#698918 Want ONLY palm leaf design pls HSN			f	5
|	Graphic Design print		https://popchart.co/collections/design/products/a-stylistic-survey-of-graphic-design	t	31
|	Funkoverse: Back to the Future	2-pack		t	13
|	Funkoverse: Nightmare Before Christmas	4-pack		t	13
|	Lego DOTS	Pineapple Pencil Holder		t	13
|	Lego Nintendo Entertainment System			f	13
|	Lego Super Mario	Bowser's Castle Boss Battle		f	13
|	Lego Monkie Kid	Monkey King Warrior Mech		f	13
|	Lego Monkie Kid	Demon Bull King		f	13
|	Lego Monkie Kid	Pigsy's Food Truck		f	13
|	Lego Ninjago	Fire Stone Mech		f	13
|	Lego Batman	1989 Batmobile		f	13
|	Lego Batman	1989 Batwing		f	13
|	Lego Star Wars	The Razor Crest		f	13
|	Lego Spiderman	Venomosaurus Ambush		f	13
|	Lego Monkie Kid	Sandy's Speedboat		f	13
|	Lego Brick Headz	Frankenstein		f	13
|	Lego Brick Headz	Nutcracker		f	13
|	Lego	Christmas Wreath 2-in-1		f	13
|	Lego Super Mario	Any...		f	13
|	Gift Cards	Ross, Target, TJ Maxx, Visa, Marshalls, J.C. Penney		f	9
|	Canvas Platform Chuck Taylor Allstar 	Black or White\nSize 7.5		f	9
|	Island Map Bamboo Mug (13.5 oz. mug)		https://www.heatherbrownart.com/collections/cups-mugs-drinkware/products/island-map-bamboo-mug	f	2
|	Hallmark Christmas 2020 Wall-e Ornament		https://www.amazon.com/Hallmark-Keepsake-Christmas-Ornament-Disney/dp/B084CM34X7/ref=mp_s_a_1_9?dchild=1&keywords=wall-e&qid=1602645492&sr=8-9&th=1&psc=1	f	6
|	Birthdate candle	July 23	https://birthdate.co/products/july-twenty-thirds	f	31
|	Pop-up pencil case		https://notebooktherapy.com/products/tsuki-popup-pencil-case?utm_source=instagram.com&utm_medium=inpa&variant=31218114429043	f	31
|	Gift Cards	Barnes and Nobles, Amazon, Dutch Bros, Costco		f	31
|	Experience Tea Gift Certificate	$10 or $25	https://experience-tea.com/product/gift-certificates/	f	31
|	Animal Crossing plush	Flora the flamingo	https://www.gameard.com/products/animal-crossing-plush-doll-toy?variant=32477059350608	f	32
|	Pink monstera rug		https://shopzoki.com/product/pink-monstera-rug/	f	32
|	Birds of the world print		https://popchart.co/products/birds-of-the-world	f	32
|	Shturman Displate	Wall Hanging	https://displate.com/displate/1776215	t	28
|	PeaceKeeper Displate	Wall Hanging	https://displate.com/displate/1770361	t	28
|	Rocket Book Fusion	Reusable note taker	https://www.amazon.com/Rocketbook-Everlast-Fusion-Letter-Size/dp/B07RTN4F7D/ref=sr_1_2?dchild=1&keywords=rocketbook&qid=1606787414&sr=8-2	t	28
|	Wired headphones		Amazon.com	f	12
|	Star Wars: Jedi Fallen Order		Target.com	t	12
|	Sailor Moon Eternal Edition	Volume 7	https://www.amazon.com/Sailor-Moon-Eternal-Naoko-Takeuchi/dp/1632365944	t	31
|	Sailor Moon Eternal Edition	Volume 8	https://www.amazon.com/Sailor-Moon-Eternal-Naoko-Takeuchi/dp/1632365952	t	31
|	ALIENWARE M15 R3 GAMING LAPTOP\n\n		https://www.dell.com/en-us/shop/cty/pdp/spd/alienware-m15-r3-laptop	f	4
|	Acer Predator Gaming X34 Pbmiphzx Curved 34" UltraWide QHD Monitor with NVIDIA G-SYNC Technology (Display Port & HDMI Port),Black		Amazon.com	f	12
|	Bluetooth Audio Sunglasses		https://www.bose.com/en_us/products/frames/bose-frames-tenor.html#v=bose_frames_tenor_black	f	1
|	Reusable silicone bags	Complete set with 2 bags, 3 dishes, and 2 cups	https://www.savetheturtles.ca/collections/all-products/products/reusable-silicone-bags-1?variant=29460777402465	f	10
|	Potato toasty plush		https://www.smokonow.com/collections/warming-me-up/products/tayto-potato-toasty-plush	f	10
|	Got Your Six tee shirt	Size XS, black	https://shop.onlyhumanco.com/collections/adult/products/limited-edition-black-got-your-six-tee	f	10
|	Hollowknight Collector's Edition		https://www.fangamer.com/collections/hollow-knight/products/hollow-knight-switch-ps4-pc-collectors-edition-game	f	10
|	Totoro nesting dolls		https://www.bluefinbrands.com/totoro-nesting-dolls-6-piece-my-neighbor-totoro-ensky.html	f	10
|	Gift Cards	H&M, Playstation, Gamestop, Apple Store, Dutch Bros, Barnes and Nobles		f	10
|	Birkenstock Happy Lamb Footbed Sandal	Size 38, Khaki Wool	https://www.famousfootwear.com/Mobile/ProductDetail.aspx?p=54244	f	6
|	Super Mario 3-D Allstar Nintendo Switch			f	9
|	Sounders Henley Shirt	Medium	https://www.simplyseattle.com/products/seattle-sounders-oatmeal-womens-henley?_pos=7&_sid=7d02e1a6c&_ss=r&variant=32740523802709	f	6
|	MASTER CHIEF - HALO		https://www.funko.com/shop/details/video-games-halo-infinite-master-chief-pop	f	4
|	Thaya rose earrings		https://mythaya.com/collections/best-seller/products/thaya-s925-silver-thorn-blue-crystal-rose-design-black-stud-earrings-for-women-asymmetry-flower-earring-female-jewelry-gift	f	31
|	Heji Hedgehog rug		https://shopzoki.com/product/heji-hedgehog-rug/	f	31
|	Typography print		https://popchart.co/collections/design/products/alphabet-of-typography	f	31
|	Mario Aces Nintendo Switch			t	9
|	Cricut Maker	Any color would be fine :)	https://cricut.com/en_us/machines/cricut-maker.html	t	2
|	Sci-fi movie scratch off poster		https://trendiness.com/products/100-sci-fi-movies-scratch-off-poster#shopify-product-reviews	f	32
|	Washi tape	birds, flowers, bugs, beach, anything cute looking		f	32
|	Toucan soup can sticker		https://www.etsy.com/listing/825405184/toucan-soup-can-sticker?ref=shop_home_active_41	f	32
|	Nyanpan recipe cards		https://www.sugarbunnyshop.com/collections/stationery/products/nyanpan-cat-recipe-cards	f	32
|	Gift cards	Barnes and Nobles, Nintendo, Lush, H&M		f	32
|	Trekking Poles (105 cm for a 5'3" person)		https://www.rei.com/product/148630/rei-co-op-flash-folding-trekking-poles-pair	f	2
|	Anything you think I might like	I like D&D, Warhammer 40k (Necrons), Snowboarding, Fallout, and World of Warcraft		f	28
|	HE>i Hat		https://hegreaterthani.com/collections/headwear/products/hibiscus-trucker-hat-in-white-red-black	f	2
|	T Shirt. XL		https://hegreaterthani.com/collections/women/products/womens-point-tee-in-black?variant=33222459195455	f	2
|	T shirt. XL		https://hegreaterthani.com/collections/women/products/womens-anuenue-tee-in-indigo	f	2
|	Vice Pro golf balls	You can add a customized message on them if you like. Or just put my initials 	https://www.vicegolf.com/us/vice-golf-pro-white?gclid=EAIaIQobChMIgJf8rvrE7QIVvxOtBh1UBAWYEAAYASABEgJEWPD_BwE	t	24
|	Tiffany Pearl Elsa Peretti Mesh tassel Earrings 		https://www.tiffany.com/jewelry/earrings/elsa-peretti-mesh-tassel-earrings-31895715/	f	23
|	COOL NIGHTS\nShort Sleeve Sleepshirt from Soma 	XXL		t	23
|	T-shirt	Medium	https://rangerup.com/products/old-mans-club-treachery-t-shirt?variant=1454042382360	f	3
|	Sanrio/Naruto Mug		https://www.bigbadtoystore.com/Product/VariationDetails/153328x	f	6`;

let giftArr = giftsString.split("|");
console.log(giftArr);
giftArr.forEach(((giftString, index)=>{

    const stringArr = giftString.split(/\t|  /);

    let gift = {
      "name":"",
      "description":"",
      "gift_url":"",
      "purchased": false,
      "user_id":0,
    };

    if ( stringArr.length === 6 ){
        stringArr.forEach((item, index)=>{
        if(index === 1) gift.name = item;
        if(index === 2) gift.description = item;
        if(index === 3) gift.gift_url = item;
        if(index === 4) gift.purchased = item === 'f' ? false : true;
        if(index === 5) gift.user_id = parseInt(item);
      });
    }

    console.log('writing to file!');
    if (index ===0)fs.writeFileSync('data.txt', JSON.stringify(gift)+",\n");
    else fs.appendFileSync('data.txt', JSON.stringify(gift)+",\n");
}));

