import classicBowlImage from "@/assets/classic-cornflakes-bowl.jpg";
import chickenImage from "@/assets/cornflakes-crusted-chicken.jpg";
import energyBarsImage from "@/assets/cornflakes-energy-bars.jpg";
import cookiesImage from "@/assets/cornflakes-cookies.jpg";
import sundaeImage from "@/assets/cornflakes-ice-cream-sundae.jpg";
import chocoMuffinsImage from "@/assets/choco-muffins.jpg";
import fruitRingsParfaitImage from "@/assets/fruit-rings-parfait.jpg";
import cocoaChocolateMilkImage from "@/assets/cocoa-chocolate-milk.jpg";
import chocoRicePuddingImage from "@/assets/choco-rice-pudding.jpg";

export const recipes = [
    {
      id: 1,
      titleAr: "طبق الكورن فليكس الكلاسيكي",
      timeAr: "٥ دقائق",
      ingredientsAr: ["٢ كوب كورن فليكس كيدو", "١ كوب حليب بارد", "١ موزة مقطعة", "٢ ملعقة كبيرة عسل", "١/٤ كوب توت مشكل"],
      instructionsAr: ["ضع الكورن فليكس في وعاء.", "أضف الحليب البارد حتى يغطي الكورن فليكس.", "أضف شرائح الموز والتوت.", "وزّع العسل فوق المكونات.", "قدّمه فورًا."],
      title: "Classic Cornflakes Bowl",
      description: "A simple breakfast bowl with banana, berries and a drizzle of honey",
      image: classicBowlImage,
      time: "5 mins",
      serves: 2,
      difficulty: "Easy",
      ingredients: [
        "2 cups Kiddo Cornflakes",
        "1 cup cold milk",
        "1 sliced banana",
        "2 tbsp honey",
        "1/4 cup mixed berries"
      ],
      instructions: [
        "Pour cornflakes into a bowl",
        "Add cold milk until cornflakes are covered",
        "Top with sliced banana and berries",
        "Drizzle honey on top",
        "Serve immediately and enjoy!"
      ],
      tags: ["Quick", "Healthy", "Kids Favorite"]
    },
    {
      id: 2,
      titleAr: "دجاج مقرمش بالكورن فليكس",
      timeAr: "٤٥ دقيقة",
      ingredientsAr: ["٤ صدور دجاج", "٣ أكواب كورن فليكس كيدو، مطحون", "٢ بيضة مخفوقة", "١/٢ كوب دقيق", "١ ملعقة صغيرة بابريكا", "ملح وفلفل حسب الذوق"],
      instructionsAr: ["سخّن الفرن إلى ١٩٠ درجة مئوية.", "اطحن الكورن فليكس في وعاء.", "جهّز ثلاثة أوعية للدقيق والبيض المخفوق والكورن فليكس المطحون.", "تبّل الدجاج بالملح والفلفل والبابريكا.", "غطّ الدجاج بالدقيق، ثم اغمره في البيض وغطّه بالكورن فليكس.", "اخبزه لمدة ٢٥–٣٠ دقيقة حتى يصبح ذهبيًا وينضج تمامًا."],
      title: "Cornflakes Crusted Chicken",
      description: "Crispy chicken pieces coated with crushed cornflakes for extra crunch",
      image: chickenImage,
      time: "45 mins",
      serves: 4,
      difficulty: "Medium",
      ingredients: [
        "4 chicken breasts",
        "3 cups Kiddo Cornflakes, crushed",
        "2 eggs, beaten",
        "1/2 cup flour",
        "1 tsp paprika",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Preheat oven to 375°F (190°C)",
        "Crush cornflakes in a bowl",
        "Set up breading station: flour, beaten eggs, crushed cornflakes",
        "Season chicken with salt, pepper, and paprika",
        "Dredge chicken in flour, dip in eggs, coat with cornflakes",
        "Bake for 25-30 minutes until golden and cooked through"
      ],
      tags: ["Dinner", "Family Meal", "Crispy"]
    },
    {
      id: 3,
      titleAr: "ألواح الكورن فليكس",
      timeAr: "٢٠ دقيقة + ساعتان تبريد",
      ingredientsAr: ["٣ أكواب كورن فليكس كيدو", "١/٢ كوب عسل", "١/٢ كوب زبدة فول سوداني", "١/٤ كوب توت بري مجفف", "١/٤ كوب لوز مفروم", "١ ملعقة صغيرة فانيليا"],
      instructionsAr: ["بطّن قالبًا بمقاس ٢٠ × ٢٠ سم بورق الخَبز.", "اخلط الكورن فليكس والتوت البري واللوز في وعاء كبير.", "سخّن العسل وزبدة الفول السوداني في قدر حتى يمتزجا.", "أضف الفانيليا إلى خليط العسل.", "اسكب الخليط على الكورن فليكس وقلّب جيدًا.", "اضغط الخليط في القالب وضعه في الثلاجة لمدة ساعتين.", "قطّعه إلى ألواح وقدّمه."],
      title: "Cornflakes Energy Bars",
      description: "Homemade energy bars packed with cornflakes, nuts, and dried fruits",
      image: energyBarsImage,
      time: "20 mins + 2 hrs chilling",
      serves: 8,
      difficulty: "Easy",
      ingredients: [
        "3 cups Kiddo Cornflakes",
        "1/2 cup honey",
        "1/2 cup peanut butter",
        "1/4 cup dried cranberries",
        "1/4 cup chopped almonds",
        "1 tsp vanilla extract"
      ],
      instructions: [
        "Line an 8x8 inch pan with parchment paper",
        "In a large bowl, mix cornflakes, cranberries, and almonds",
        "In a saucepan, warm honey and peanut butter until smooth",
        "Add vanilla to the honey mixture",
        "Pour over cornflakes mixture and stir well",
        "Press into prepared pan and refrigerate for 2 hours",
        "Cut into bars and serve"
      ],
      tags: ["Snack", "No-Bake", "Healthy"]
    },
    {
      "id": 4,
      "title": "Overnight Oats with Berries",
      "titleAr": "شوفان منقوع طوال الليل مع التوت",
      "description": "Whole-grain rolled oats soaked overnight with yogurt and chia, topped with strawberries and blueberries",
      "image": "/generated/recipes/overnight-oats-berries.webp",
      "time": "10 mins + 6 hrs chilling",
      "timeAr": "١٠ دقائق + ٦ ساعات تبريد",
      "serves": 2,
      "difficulty": "Easy",
      "ingredients": [
        "1 cup (90 g) whole-grain rolled oats",
        "1 cup (240 ml) milk",
        "1/2 cup (120 g) plain yogurt",
        "1 tbsp chia seeds",
        "1 tbsp honey",
        "1/2 cup sliced strawberries",
        "1/2 cup blueberries"
      ],
      "ingredientsAr": [
        "١ كوب (٩٠ غ) من رقائق الشوفان كاملة الحبة",
        "١ كوب (٢٤٠ مل) حليب",
        "١/٢ كوب (١٢٠ غ) زبادي سادة",
        "١ ملعقة كبيرة بذور شيا",
        "١ ملعقة كبيرة عسل",
        "١/٢ كوب فراولة مقطعة",
        "١/٢ كوب توت أزرق"
      ],
      "instructions": [
        "Stir the oats, milk, yogurt, chia seeds and honey together in a bowl until well combined.",
        "Divide between two clean jars, cover and refrigerate for at least 6 hours or overnight.",
        "Stir each jar before serving. Divide the strawberries and blueberries over the oats and serve cold."
      ],
      "instructionsAr": [
        "اخلط الشوفان والحليب والزبادي وبذور الشيا والعسل في وعاء حتى تمتزج جيدًا.",
        "وزّع الخليط في برطمانين نظيفين، وغطّهما وضعهما في الثلاجة لمدة ٦ ساعات على الأقل أو طوال الليل.",
        "قلّب الشوفان قبل التقديم، ثم وزّع الفراولة والتوت الأزرق فوقه وقدّمه باردًا."
      ],
      "tags": [
        "Breakfast",
        "Oats",
        "Make Ahead"
      ]
    },
    {
      id: 5,
      titleAr: "كوكيز الكورن فليكس",
      timeAr: "٣٠ دقيقة",
      ingredientsAr: ["٢ كوب كورن فليكس كيدو", "١ كوب زبدة طرية", "٣/٤ كوب سكر بني", "١/٢ كوب سكر أبيض", "١ بيضة", "١ و١/٢ كوب دقيق", "١ ملعقة صغيرة فانيليا"],
      instructionsAr: ["سخّن الفرن إلى ١٧٥ درجة مئوية.", "اخفق الزبدة والسكر البني والأبيض حتى يصبح الخليط خفيفًا.", "أضف البيضة والفانيليا واخفقهما.", "أضف الدقيق تدريجيًا.", "قلّب الكورن فليكس برفق داخل الخليط.", "وزّع ملاعق من الخليط على صينية الخَبز مع ترك مسافات.", "اخبز الكوكيز لمدة ١٠–١٢ دقيقة حتى يصبح ذهبيًا."],
      title: "Cornflakes Cookies",
      description: "Crispy and sweet cookies made with cornflakes for extra texture",
      image: cookiesImage,
      time: "30 mins",
      serves: 24,
      difficulty: "Medium",
      ingredients: [
        "2 cups Kiddo Cornflakes",
        "1 cup butter, softened",
        "3/4 cup brown sugar",
        "1/2 cup white sugar",
        "1 egg",
        "1 1/2 cups flour",
        "1 tsp vanilla extract"
      ],
      instructions: [
        "Preheat oven to 350°F (175°C)",
        "Cream butter and sugars until light and fluffy",
        "Beat in egg and vanilla",
        "Gradually mix in flour",
        "Fold in cornflakes",
        "Drop spoonfuls onto baking sheet",
        "Bake 10-12 minutes until golden"
      ],
      tags: ["Dessert", "Baking", "Sweet"]
    },
    {
      id: 6,
      titleAr: "آيس كريم بالكورن فليكس",
      timeAr: "٥ دقائق",
      ingredientsAr: ["٤ كرات آيس كريم بالفانيليا", "١ كوب كورن فليكس كيدو", "٢ ملعقة كبيرة صوص شوكولاتة", "٢ ملعقة كبيرة صوص كراميل", "كريمة مخفوقة", "كرز محفوظ للتزيين"],
      instructionsAr: ["ضع كرات الآيس كريم في الأوعية.", "وزّع الكورن فليكس فوق الآيس كريم.", "أضف صوص الشوكولاتة والكراميل.", "زيّن بالكريمة المخفوقة.", "أضف حبة كرز فوق كل وعاء.", "قدّمه فورًا."],
      title: "Cornflakes Ice Cream Sundae",
      description: "Delicious ice cream sundae with cornflakes for added crunch",
      image: sundaeImage,
      time: "5 mins",
      serves: 2,
      difficulty: "Easy",
      ingredients: [
        "4 scoops vanilla ice cream",
        "1 cup Kiddo Cornflakes",
        "2 tbsp chocolate syrup",
        "2 tbsp caramel sauce",
        "Whipped cream",
        "Maraschino cherries"
      ],
      instructions: [
        "Place ice cream scoops in bowls",
        "Sprinkle cornflakes generously over ice cream",
        "Drizzle with chocolate syrup and caramel sauce",
        "Top with whipped cream",
        "Garnish with a cherry",
        "Serve immediately"
      ],
      tags: ["Dessert", "Kids Favorite", "Cold Treat"]
    },
    {
      id: 7,
      titleAr: "مافن الشوكولاتة بتشوكو بوبس",
      timeAr: "٣٥ دقيقة",
      ingredientsAr: ["٢ كوب دقيق", "١/٢ كوب كاكاو بودرة", "١ كوب تشوكو بوبس كيدو", "١/٢ كوب سكر", "٢ بيضة", "١ كوب حليب", "١/٣ كوب زيت نباتي"],
      instructionsAr: ["سخّن الفرن إلى ١٩٠ درجة مئوية.", "اخلط المكونات الجافة في وعاء كبير.", "اخفق البيض والحليب والزيت في وعاء آخر.", "امزج المكونات السائلة والجافة.", "أضف تشوكو بوبس وقلّب برفق.", "وزّع الخليط في قوالب المافن واخبزه لمدة ١٨–٢٠ دقيقة."],
      title: "Choco Pops Chocolate Muffins",
      description: "Moist chocolate muffins with crunchy Choco Pops for extra fun",
      image: chocoMuffinsImage,
      time: "35 mins",
      serves: 12,
      difficulty: "Medium",
      ingredients: [
        "2 cups flour",
        "1/2 cup cocoa powder",
        "1 cup Kiddo Choco Pops",
        "1/2 cup sugar",
        "2 eggs",
        "1 cup milk",
        "1/3 cup vegetable oil"
      ],
      instructions: [
        "Preheat oven to 375°F (190°C)",
        "Mix dry ingredients in a large bowl",
        "Whisk eggs, milk, and oil in another bowl",
        "Combine wet and dry ingredients",
        "Fold in Choco Pops",
        "Fill muffin cups and bake 18-20 minutes"
      ],
      tags: ["Breakfast", "Chocolate", "Baking"]
    },
    {
      "id": 8,
      "title": "Apple Cinnamon Oat Biscuit Cheesecake Cups",
      "titleAr": "أكواب تشيز كيك ببسكويت الشوفان والتفاح والقرفة",
      "description": "Oat biscuit crumbs, a creamy cheesecake layer and tender cinnamon apples in individual dessert cups",
      "image": "/generated/recipes/apple-cinnamon-cheesecake-cups.webp",
      "time": "25 mins + 1 hr chilling",
      "timeAr": "٢٥ دقيقة + ساعة تبريد",
      "serves": 4,
      "difficulty": "Easy",
      "ingredients": [
        "120 g Kiddo Apple Cinnamon oat biscuits, finely crushed",
        "30 g unsalted butter, melted",
        "200 g cream cheese, softened",
        "150 g plain Greek yogurt",
        "2 tbsp powdered sugar",
        "1/2 tsp vanilla extract",
        "2 medium apples, peeled, cored and cut into small cubes",
        "1 tbsp brown sugar",
        "1/2 tsp ground cinnamon",
        "2 tbsp water"
      ],
      "ingredientsAr": [
        "١٢٠ غ بسكويت شوفان كيدو بالتفاح والقرفة، مطحون ناعمًا",
        "٣٠ غ زبدة غير مملحة، مذابة",
        "٢٠٠ غ جبن كريمي، بدرجة حرارة الغرفة",
        "١٥٠ غ زبادي يوناني سادة",
        "٢ ملعقة كبيرة سكر بودرة",
        "١/٢ ملعقة صغيرة فانيليا",
        "٢ تفاحة متوسطة، مقشرة ومنزوعة البذور ومقطعة إلى مكعبات صغيرة",
        "١ ملعقة كبيرة سكر بني",
        "١/٢ ملعقة صغيرة قرفة مطحونة",
        "٢ ملعقة كبيرة ماء"
      ],
      "instructions": [
        "Combine the crushed oat biscuits with the melted butter. Divide between four small dessert glasses and press lightly into the base.",
        "Place the diced apples, brown sugar, cinnamon and water in a small saucepan. Cook over medium-low heat for 8–10 minutes, stirring occasionally, until the apples are tender and most of the liquid has evaporated. Let cool completely.",
        "Beat the softened cream cheese, Greek yogurt, powdered sugar and vanilla until smooth. Spoon over the biscuit bases.",
        "Divide the cooled apples over the filling. Cover and refrigerate for at least 1 hour before serving."
      ],
      "instructionsAr": [
        "اخلط البسكويت المطحون مع الزبدة المذابة. وزّعه في أربعة أكواب حلويات صغيرة واضغط عليه برفق لتكوين القاعدة.",
        "ضع مكعبات التفاح والسكر البني والقرفة والماء في قدر صغير. اطهها على نار متوسطة إلى هادئة لمدة ٨–١٠ دقائق مع التقليب أحيانًا، حتى يطرى التفاح ويتبخر معظم السائل. اتركها تبرد تمامًا.",
        "اخفق الجبن الكريمي مع الزبادي اليوناني وسكر البودرة والفانيليا حتى يصبح الخليط ناعمًا، ثم وزّعه فوق قواعد البسكويت.",
        "وزّع التفاح البارد فوق الحشوة. غطّ الأكواب وضعها في الثلاجة لمدة ساعة على الأقل قبل التقديم."
      ],
      "tags": [
        "Dessert",
        "Oat Biscuits",
        "No-Bake"
      ]
    },
    {
      id: 9,
      titleAr: "بارفيه حلقات الفواكه",
      timeAr: "١٥ دقيقة",
      ingredientsAr: ["٢ كوب حلقات فواكه كيدو", "٢ كوب زبادي يوناني", "١ كوب توت مشكل", "١ موزة مقطعة", "٢ ملعقة كبيرة عسل", "١/٤ كوب جرانولا"],
      instructionsAr: ["اخلط الزبادي بالعسل.", "ضع طبقة من الزبادي في الأكواب.", "أضف طبقة من حلقات الفواكه.", "أضف الفاكهة الطازجة.", "كرّر الطبقات.", "وزّع الجرانولا فوقها وقدّمها."],
      title: "Fruit Rings Rainbow Parfait",
      description: "Colorful layered parfait with Fruit Rings and fresh fruits",
      image: fruitRingsParfaitImage,
      time: "15 mins",
      serves: 4,
      difficulty: "Easy",
      ingredients: [
        "2 cups Kiddo Fruit Rings",
        "2 cups Greek yogurt",
        "1 cup mixed berries",
        "1 banana, sliced",
        "2 tbsp honey",
        "1/4 cup granola"
      ],
      instructions: [
        "Mix yogurt with honey",
        "Layer yogurt in glasses",
        "Add a layer of Fruit Rings",
        "Add fresh fruits",
        "Repeat layers",
        "Top with granola and serve"
      ],
      tags: ["Breakfast", "Healthy", "Colorful"]
    },
    {
      id: 10,
      titleAr: "حليب الشوكولاتة بكوكوا سكوبس",
      timeAr: "٣ دقائق",
      ingredientsAr: ["٢ كوب حليب بارد", "٣ ملاعق كبيرة صوص شوكولاتة", "١ كوب كوكوا سكوبس كيدو", "كريمة مخفوقة", "شوكولاتة مبشورة"],
      instructionsAr: ["اخلط الحليب بصوص الشوكولاتة.", "اسكبه في أكواب طويلة.", "أضف كوكوا سكوبس فوق الحليب.", "أضف الكريمة المخفوقة.", "زيّن بالشوكولاتة المبشورة.", "قدّمه مع شفاطة."],
      title: "Cocoa Scoops Chocolate Milk",
      description: "Rich and creamy chocolate milk with floating Cocoa Scoops",
      image: cocoaChocolateMilkImage,
      time: "3 mins",
      serves: 2,
      difficulty: "Easy",
      ingredients: [
        "2 cups cold milk",
        "3 tbsp chocolate syrup",
        "1 cup Kiddo Cocoa Scoops",
        "Whipped cream",
        "Chocolate shavings"
      ],
      instructions: [
        "Mix milk and chocolate syrup",
        "Pour into tall glasses",
        "Add Cocoa Scoops to float on top",
        "Top with whipped cream",
        "Garnish with chocolate shavings",
        "Serve with a straw"
      ],
      tags: ["Drink", "Chocolate", "Quick"]
    },
    {
      id: 11,
      titleAr: "بودينغ الأرز بتشوكو رايس",
      timeAr: "٤٠ دقيقة",
      ingredientsAr: ["١ كوب أرز ياسمين", "٤ أكواب حليب", "١/٣ كوب سكر", "١ ملعقة صغيرة فانيليا", "١ كوب تشوكو رايس كيدو", "قرفة للتزيين"],
      instructionsAr: ["اطه الأرز في كوبين من الماء حتى يطرى.", "أضف الحليب والسكر واتركه على نار هادئة لمدة ٢٠ دقيقة.", "أضف الفانيليا وقلّب.", "اتركه يبرد قليلًا ثم أضف تشوكو رايس برفق.", "قدّمه دافئًا أو باردًا.", "رشّ القرفة فوقه قبل التقديم."],
      title: "Choco Rice Pudding",
      description: "Creamy rice pudding elevated with crunchy Choco Rice cereal",
      image: chocoRicePuddingImage,
      time: "40 mins",
      serves: 6,
      difficulty: "Medium",
      ingredients: [
        "1 cup jasmine rice",
        "4 cups milk",
        "1/3 cup sugar",
        "1 tsp vanilla",
        "1 cup Kiddo Choco Rice",
        "Cinnamon for dusting"
      ],
      instructions: [
        "Cook rice in 2 cups water until tender",
        "Add milk and sugar, simmer 20 minutes",
        "Stir in vanilla",
        "Cool slightly and fold in Choco Rice",
        "Serve warm or chilled",
        "Dust with cinnamon before serving"
      ],
      tags: ["Dessert", "Comfort Food", "Creamy"]
    },
    {
      "id": 12,
      "title": "Banana Oat Pancakes",
      "titleAr": "بان كيك بالموز والشوفان",
      "description": "Golden pancakes made with whole-grain oats and banana, finished with banana slices and honey",
      "image": "/generated/recipes/banana-oat-pancakes.webp",
      "time": "20 mins",
      "timeAr": "٢٠ دقيقة",
      "serves": 2,
      "difficulty": "Easy",
      "ingredients": [
        "1 cup (90 g) whole-grain rolled oats",
        "1 medium ripe banana",
        "2 large eggs",
        "1/4 cup (60 ml) milk",
        "1 tsp baking powder",
        "1/2 tsp ground cinnamon",
        "1 tsp vegetable oil, for the pan",
        "1 banana, sliced, for serving",
        "1 tbsp honey, for serving"
      ],
      "ingredientsAr": [
        "١ كوب (٩٠ غ) من رقائق الشوفان كاملة الحبة",
        "١ موزة متوسطة ناضجة",
        "٢ بيضة كبيرة",
        "١/٤ كوب (٦٠ مل) حليب",
        "١ ملعقة صغيرة بيكنج باودر",
        "١/٢ ملعقة صغيرة قرفة مطحونة",
        "١ ملعقة صغيرة زيت نباتي لدهن المقلاة",
        "١ موزة مقطعة للتقديم",
        "١ ملعقة كبيرة عسل للتقديم"
      ],
      "instructions": [
        "Pulse the oats in a blender until they resemble coarse flour. Add the ripe banana, eggs, milk, baking powder and cinnamon; blend until combined. Let the batter rest for 5 minutes.",
        "Heat a nonstick frying pan over medium-low heat and brush with a little of the oil. Pour about 1/4 cup of batter for each pancake, leaving space between them.",
        "Cook for 2–3 minutes until small bubbles appear and the edges look set. Flip carefully and cook for another 1–2 minutes until golden and cooked through. Repeat with the remaining batter and oil to make about 8 small pancakes.",
        "Divide the pancakes between two plates. Top with the sliced banana and drizzle with honey before serving."
      ],
      "instructionsAr": [
        "اطحن الشوفان في الخلاط حتى يشبه الدقيق الخشن. أضف الموزة الناضجة والبيض والحليب والبيكنج باودر والقرفة، واخلط حتى تمتزج المكونات. اترك الخليط يرتاح لمدة ٥ دقائق.",
        "سخّن مقلاة غير لاصقة على نار متوسطة إلى هادئة وادهنها بقليل من الزيت. اسكب نحو ١/٤ كوب من الخليط لكل قطعة بان كيك مع ترك مسافة بين القطع.",
        "اطهها لمدة ٢–٣ دقائق حتى تظهر فقاعات صغيرة وتتماسك الحواف، ثم اقلبها برفق واطهها لمدة ١–٢ دقيقة أخرى حتى تصبح ذهبية وناضجة من الداخل. كرّر مع باقي الخليط والزيت لتحصل على نحو ٨ قطع صغيرة.",
        "وزّع البان كيك على طبقين، وأضف شرائح الموز والعسل قبل التقديم."
      ],
      "tags": [
        "Breakfast",
        "Oats",
        "Pancakes"
      ]
    }
  ];


