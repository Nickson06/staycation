// ==========================================
// STAYHUB EXPERIENCES DATABASE
// PART 1 (1 - 10)
// ==========================================

const experiences = [

{
    id: 1,

    title: "Maasai Mara Big Five Safari",

    category: "Safari",

    location: "Maasai Mara",

    county: "Narok",

    price: 16500,

    duration: "Full Day",

    rating: 4.9,

    reviews: 428,

    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80",

    gallery: [
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80"
    ],

    host: "Mara Adventure Safaris",

    featured: true,

    trending: true,

    instantBook: true,

    description:
    "Spend the day exploring the world-famous Maasai Mara while searching for the Big Five with experienced safari guides.",

    includes:[
        "Transport",
        "Lunch",
        "Professional Guide",
        "Park Fees"
    ],

    highlights:[
        "Big Five",
        "Game Drives",
        "Photography Stops",
        "Luxury Safari Van"
    ]
},

{
    id:2,

    title:"Nairobi National Park Safari",

    category:"Safari",

    location:"Nairobi",

    county:"Nairobi",

    price:6800,

    duration:"Half Day",

    rating:4.8,

    reviews:286,

    image:"https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80",

    gallery:[
        "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80"
    ],

    host:"City Safari Tours",

    featured:true,

    trending:false,

    instantBook:true,

    description:
    "Discover lions, giraffes and rhinos just minutes from Nairobi's city centre.",

    includes:[
        "Transport",
        "Guide",
        "Bottled Water"
    ],

    highlights:[
        "Morning Game Drive",
        "Wildlife Photography",
        "City Skyline Views"
    ]
},

{
    id:3,

    title:"Diani Sunset Dhow Cruise",

    category:"Boat Tour",

    location:"Diani",

    county:"Kwale",

    price:5200,

    duration:"3 Hours",

    rating:4.9,

    reviews:195,

    image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",

    gallery:[
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1200&q=80"
    ],

    host:"Diani Ocean Adventures",

    featured:true,

    trending:true,

    instantBook:true,

    description:
    "Sail on a traditional dhow while enjoying breathtaking sunset views over the Indian Ocean.",

    includes:[
        "Boat Ride",
        "Snacks",
        "Soft Drinks"
    ],

    highlights:[
        "Sunset Cruise",
        "Ocean Views",
        "Romantic Experience"
    ]
},

{
    id:4,

    title:"Watamu Dolphin Tour",

    category:"Boat Tour",

    location:"Watamu",

    county:"Kilifi",

    price:7600,

    duration:"Half Day",

    rating:4.8,

    reviews:224,

    image:"https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",

    gallery:[
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80"
    ],

    host:"Watamu Marine Tours",

    featured:true,

    trending:false,

    instantBook:true,

    description:
    "Enjoy dolphin spotting and snorkelling inside the beautiful Watamu Marine National Park.",

    includes:[
        "Boat",
        "Guide",
        "Snorkelling Gear"
    ],

    highlights:[
        "Dolphins",
        "Coral Reefs",
        "Marine Park"
    ]
},

{
    id:5,

    title:"Lake Naivasha Boat Safari",

    category:"Boat Tour",

    location:"Naivasha",

    county:"Nakuru",

    price:4200,

    duration:"2 Hours",

    rating:4.7,

    reviews:318,

    image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",

    gallery:[
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
    ],

    host:"Naivasha Lake Tours",

    featured:false,

    trending:true,

    instantBook:true,

    description:
    "Cruise among hippos and hundreds of bird species on the beautiful Lake Naivasha.",

    includes:[
        "Boat Ride",
        "Guide",
        "Life Jackets"
    ],

    highlights:[
        "Hippos",
        "Bird Watching",
        "Scenic Views"
    ]
},

{
    id:6,

    title:"Kisumu Sunset Cruise",

    category:"Boat Tour",

    location:"Kisumu",

    county:"Kisumu",

    price:3800,

    duration:"2 Hours",

    rating:4.7,

    reviews:172,

    image:"https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=1200&q=80",

    gallery:[
        "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],

    host:"Lake Victoria Cruises",

    featured:false,

    trending:true,

    instantBook:true,

    description:"Enjoy a relaxing evening cruise on Africa's largest lake with spectacular sunsets.",

    includes:[
        "Boat",
        "Refreshments",
        "Guide"
    ],

    highlights:[
        "Sunset",
        "Lake Victoria",
        "Photography"
    ]
},

{
    id:7,

    title:"Lamu Old Town Walking Tour",

    category:"Cultural Tour",

    location:"Lamu",

    county:"Lamu",

    price:2800,

    duration:"3 Hours",

    rating:4.9,

    reviews:133,

    image:"https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Lamu Heritage Walks",

    featured:true,

    trending:false,

    instantBook:true,

    description:"Explore the UNESCO World Heritage streets, Swahili architecture and local markets.",

    includes:[
        "Guide",
        "Museum Entry"
    ],

    highlights:[
        "UNESCO Site",
        "Culture",
        "History"
    ]
},

{
    id:8,

    title:"Mount Kenya Nature Hike",

    category:"Hiking",

    location:"Nanyuki",

    county:"Laikipia",

    price:6200,

    duration:"Full Day",

    rating:4.8,

    reviews:261,

    image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Mountain Adventures",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Experience breathtaking trails around Mount Kenya with certified hiking guides.",

    includes:[
        "Guide",
        "Lunch",
        "Transport"
    ],

    highlights:[
        "Mountain Views",
        "Nature",
        "Photography"
    ]
},

{
    id:9,

    title:"Hell's Gate Cycling Adventure",

    category:"Cycling",

    location:"Hell's Gate",

    county:"Nakuru",

    price:3500,

    duration:"4 Hours",

    rating:4.8,

    reviews:309,

    image:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Adventure Kenya",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Cycle through one of Kenya's most scenic national parks alongside zebras and giraffes.",

    includes:[
        "Bike",
        "Helmet",
        "Guide"
    ],

    highlights:[
        "Cycling",
        "Wildlife",
        "Gorges"
    ]
},

{
    id:10,

    title:"Amboseli Elephant Safari",

    category:"Safari",

    location:"Amboseli",

    county:"Kajiado",

    price:14500,

    duration:"Full Day",

    rating:5.0,

    reviews:517,

    image:"https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Amboseli Explorer",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Witness giant elephant herds beneath the majestic Mount Kilimanjaro.",

    includes:[
        "Transport",
        "Lunch",
        "Guide",
        "Park Fees"
    ],

    highlights:[
        "Elephants",
        "Mt. Kilimanjaro",
        "Big Game"
    ]
},
{
    id:11,

    title:"Karura Forest Nature Walk",

    category:"Nature Walk",

    location:"Nairobi",

    county:"Nairobi",

    price:1800,

    duration:"3 Hours",

    rating:4.8,

    reviews:205,

    image:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",

    gallery:[
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&q=80"
    ],

    host:"Karura Eco Tours",

    featured:false,

    trending:true,

    instantBook:true,

    description:"Escape the city and enjoy waterfalls, caves and peaceful forest trails.",

    includes:[
        "Guide",
        "Entrance Fee",
        "Water"
    ],

    highlights:[
        "Waterfalls",
        "Nature Trails",
        "Photography"
    ]
},

{
    id:12,

    title:"Nairobi Street Food Tour",

    category:"Food Tour",

    location:"Nairobi",

    county:"Nairobi",

    price:3200,

    duration:"4 Hours",

    rating:4.9,

    reviews:187,

    image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Taste Nairobi",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Discover authentic Kenyan cuisine from local restaurants and street vendors.",

    includes:[
        "Food Samples",
        "Guide",
        "Soft Drinks"
    ],

    highlights:[
        "Nyama Choma",
        "Ugali",
        "Local Culture"
    ]
},

{
    id:13,

    title:"Giraffe Centre Experience",

    category:"Wildlife",

    location:"Nairobi",

    county:"Nairobi",

    price:2500,

    duration:"2 Hours",

    rating:4.9,

    reviews:422,

    image:"https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Wild Kenya Tours",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Meet and feed endangered Rothschild giraffes while learning conservation efforts.",

    includes:[
        "Entrance",
        "Guide"
    ],

    highlights:[
        "Feed Giraffes",
        "Photography",
        "Conservation"
    ]
},

{
    id:14,

    title:"David Sheldrick Elephant Orphanage",

    category:"Wildlife",

    location:"Nairobi",

    county:"Nairobi",

    price:2900,

    duration:"2 Hours",

    rating:5.0,

    reviews:318,

    image:"https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Elephant Rescue Tours",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Watch rescued baby elephants during feeding time and learn their inspiring stories.",

    includes:[
        "Guide",
        "Entry"
    ],

    highlights:[
        "Baby Elephants",
        "Education",
        "Photography"
    ]
},

{
    id:15,

    title:"Diani Kite Surfing Lesson",

    category:"Adventure",

    location:"Diani",

    county:"Kwale",

    price:8500,

    duration:"Half Day",

    rating:4.8,

    reviews:146,

    image:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Diani Watersports",

    featured:true,

    trending:false,

    instantBook:true,

    description:"Learn kite surfing from certified instructors on one of Africa's best beaches.",

    includes:[
        "Equipment",
        "Instructor",
        "Safety Gear"
    ],

    highlights:[
        "Indian Ocean",
        "Adventure",
        "Beach"
    ]
},

{
    id:16,

    title:"Watamu Deep Sea Fishing",

    category:"Fishing",

    location:"Watamu",

    county:"Kilifi",

    price:12500,

    duration:"Full Day",

    rating:4.8,

    reviews:114,

    image:"https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Blue Ocean Fishing",

    featured:false,

    trending:true,

    instantBook:true,

    description:"Enjoy a thrilling fishing adventure targeting marlin, tuna and sailfish.",

    includes:[
        "Boat",
        "Fishing Gear",
        "Captain"
    ],

    highlights:[
        "Deep Sea",
        "Professional Crew",
        "Big Catch"
    ]
},

{
    id:17,

    title:"Lake Victoria Fishing Village Tour",

    category:"Cultural Tour",

    location:"Kisumu",

    county:"Kisumu",

    price:2600,

    duration:"Half Day",

    rating:4.7,

    reviews:91,

    image:"https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Kisumu Heritage",

    featured:false,

    trending:false,

    instantBook:true,

    description:"Visit traditional fishing villages and experience life around Lake Victoria.",

    includes:[
        "Guide",
        "Boat Ride"
    ],

    highlights:[
        "Fishing Culture",
        "Local Food",
        "Village Tour"
    ]
},

{
    id:18,

    title:"Ngong Hills Hiking Adventure",

    category:"Hiking",

    location:"Ngong Hills",

    county:"Kajiado",

    price:2800,

    duration:"5 Hours",

    rating:4.8,

    reviews:264,

    image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Hike Kenya",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Conquer the scenic Ngong Hills while enjoying panoramic views of the Rift Valley.",

    includes:[
        "Guide",
        "Water"
    ],

    highlights:[
        "Wind Turbines",
        "Photography",
        "Fitness"
    ]
},

{
    id:19,

    title:"Ol Pejeta Rhino Sanctuary Safari",

    category:"Safari",

    location:"Nanyuki",

    county:"Laikipia",

    price:13800,

    duration:"Full Day",

    rating:4.9,

    reviews:288,

    image:"https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Ol Pejeta Adventures",

    featured:true,

    trending:true,

    instantBook:true,

    description:"See endangered black rhinos, chimpanzees and many other wildlife species.",

    includes:[
        "Transport",
        "Park Entry",
        "Guide",
        "Lunch"
    ],

    highlights:[
        "Rhinos",
        "Chimpanzees",
        "Game Drive"
    ]
},

{
    id:20,

    title:"Lamu Sunset Dhow Experience",

    category:"Boat Tour",

    location:"Lamu",

    county:"Lamu",

    price:5400,

    duration:"3 Hours",

    rating:4.9,

    reviews:156,

    image:"https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Lamu Sailing Tours",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Sail through the Lamu archipelago on a traditional dhow as the sun sets over the Indian Ocean.",

    includes:[
        "Dhow Cruise",
        "Snacks",
        "Guide"
    ],

    highlights:[
        "Sunset",
        "Traditional Dhow",
        "Island Views"
    ]
},
{
    id:21,

    title:"Lake Nakuru Flamingo Safari",

    category:"Safari",

    location:"Lake Nakuru",

    county:"Nakuru",

    price:11200,

    duration:"Full Day",

    rating:4.9,

    reviews:362,

    image:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Rift Valley Safaris",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Explore Lake Nakuru National Park, famous for flamingos, rhinos and breathtaking landscapes.",

    includes:[
        "Transport",
        "Park Entry",
        "Lunch",
        "Professional Guide"
    ],

    highlights:[
        "Flamingos",
        "White Rhinos",
        "Baboon Cliff"
    ]
},

{
    id:22,

    title:"Lake Bogoria Flamingo Experience",

    category:"Nature Walk",

    location:"Lake Bogoria",

    county:"Baringo",

    price:6800,

    duration:"Full Day",

    rating:4.8,

    reviews:151,

    image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Bogoria Eco Tours",

    featured:false,

    trending:true,

    instantBook:true,

    description:"Visit steaming hot springs and thousands of flamingos at the spectacular Lake Bogoria.",

    includes:[
        "Guide",
        "Transport",
        "Lunch"
    ],

    highlights:[
        "Hot Springs",
        "Flamingos",
        "Nature"
    ]
},

{
    id:23,

    title:"Kakamega Rainforest Adventure",

    category:"Nature Walk",

    location:"Kakamega",

    county:"Kakamega",

    price:3500,

    duration:"Half Day",

    rating:4.8,

    reviews:204,

    image:"https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Kakamega Eco Adventures",

    featured:true,

    trending:false,

    instantBook:true,

    description:"Walk through Kenya's only tropical rainforest while spotting rare birds and monkeys.",

    includes:[
        "Guide",
        "Forest Entry"
    ],

    highlights:[
        "Rainforest",
        "Bird Watching",
        "Waterfalls"
    ]
},

{
    id:24,

    title:"Samburu Wildlife Safari",

    category:"Safari",

    location:"Samburu",

    county:"Samburu",

    price:15800,

    duration:"Full Day",

    rating:4.9,

    reviews:274,

    image:"https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Northern Kenya Safaris",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Experience the unique wildlife of Samburu including Grevy's zebras and reticulated giraffes.",

    includes:[
        "Transport",
        "Lunch",
        "Guide",
        "Park Entry"
    ],

    highlights:[
        "Grevy Zebra",
        "Elephants",
        "Game Drive"
    ]
},

{
    id:25,

    title:"Tsavo East Safari Adventure",

    category:"Safari",

    location:"Tsavo East",

    county:"Taita Taveta",

    price:14800,

    duration:"Full Day",

    rating:4.9,

    reviews:318,

    image:"https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Tsavo Explorer",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Discover Kenya's largest national park, home to the famous red elephants.",

    includes:[
        "Transport",
        "Lunch",
        "Guide",
        "Park Entry"
    ],

    highlights:[
        "Red Elephants",
        "Lions",
        "Game Drive"
    ]
},

{
    id:26,

    title:"Tsavo West Explorer",

    category:"Safari",

    location:"Tsavo West",

    county:"Taita Taveta",

    price:15200,

    duration:"Full Day",

    rating:4.8,

    reviews:241,

    image:"https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Safari Kingdom",

    featured:true,

    trending:false,

    instantBook:true,

    description:"Visit Mzima Springs, volcanic landscapes and abundant wildlife in Tsavo West.",

    includes:[
        "Transport",
        "Lunch",
        "Guide"
    ],

    highlights:[
        "Mzima Springs",
        "Hippos",
        "Scenic Views"
    ]
},

{
    id:27,

    title:"Aberdare Waterfalls Trail",

    category:"Hiking",

    location:"Aberdare",

    county:"Nyeri",

    price:5900,

    duration:"Full Day",

    rating:4.8,

    reviews:176,

    image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Aberdare Adventures",

    featured:false,

    trending:true,

    instantBook:true,

    description:"Explore lush forests, waterfalls and mountain scenery inside Aberdare National Park.",

    includes:[
        "Guide",
        "Lunch",
        "Transport"
    ],

    highlights:[
        "Waterfalls",
        "Forest Trails",
        "Wildlife"
    ]
},

{
    id:28,

    title:"Ruma National Park Safari",

    category:"Safari",

    location:"Ruma National Park",

    county:"Homa Bay",

    price:9800,

    duration:"Full Day",

    rating:4.7,

    reviews:102,

    image:"https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Western Kenya Safaris",

    featured:false,

    trending:false,

    instantBook:true,

    description:"Discover Kenya's hidden safari gem, famous for roan antelopes and peaceful game drives.",

    includes:[
        "Guide",
        "Lunch",
        "Transport"
    ],

    highlights:[
        "Roan Antelope",
        "Birdlife",
        "Photography"
    ]
},

{
    id:29,

    title:"Saiwa Swamp Bird Watching",

    category:"Bird Watching",

    location:"Saiwa Swamp",

    county:"Trans Nzoia",

    price:3200,

    duration:"4 Hours",

    rating:4.8,

    reviews:83,

    image:"https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Birding Kenya",

    featured:false,

    trending:false,

    instantBook:true,

    description:"Spot rare bird species and the endangered sitatunga antelope in Kenya's smallest national park.",

    includes:[
        "Guide",
        "Binoculars"
    ],

    highlights:[
        "Rare Birds",
        "Nature Trails",
        "Photography"
    ]
},

{
    id:30,

    title:"Menengai Crater Hiking Tour",

    category:"Hiking",

    location:"Menengai",

    county:"Nakuru",

    price:2600,

    duration:"Half Day",

    rating:4.8,

    reviews:194,

    image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Menengai Adventures",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Hike one of Africa's largest volcanic calderas and enjoy panoramic views of the Great Rift Valley.",

    includes:[
        "Guide",
        "Water",
        "Entrance Fee"
    ],

    highlights:[
        "Volcanic Crater",
        "Sunrise Views",
        "Photography"
    ]
},
{
    id:31,

    title:"Kiambu Coffee Farm Experience",

    category:"Coffee Tour",

    location:"Kiambu",

    county:"Kiambu",

    price:2800,

    duration:"3 Hours",

    rating:4.8,

    reviews:186,

    image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Kiambu Coffee Estate",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Walk through a working coffee farm and learn how Kenyan coffee is grown, harvested and roasted before enjoying a tasting session.",

    includes:[
        "Farm Tour",
        "Coffee Tasting",
        "Professional Guide"
    ],

    highlights:[
        "Coffee Picking",
        "Roasting Demo",
        "Fresh Coffee"
    ]
},

{
    id:32,

    title:"Kericho Tea Plantation Tour",

    category:"Tea Farm Tour",

    location:"Kericho",

    county:"Kericho",

    price:3200,

    duration:"Half Day",

    rating:4.9,

    reviews:172,

    image:"https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Kericho Tea Estates",

    featured:true,

    trending:false,

    instantBook:true,

    description:"Explore Kenya's lush tea plantations and witness the journey from leaf to cup.",

    includes:[
        "Tea Tasting",
        "Farm Tour",
        "Guide"
    ],

    highlights:[
        "Tea Factory",
        "Tea Picking",
        "Scenic Hills"
    ]
},

{
    id:33,

    title:"Kenyan Cooking Class",

    category:"Cooking Class",

    location:"Nairobi",

    county:"Nairobi",

    price:4500,

    duration:"4 Hours",

    rating:4.9,

    reviews:241,

    image:"https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Taste of Kenya",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Learn to prepare authentic Kenyan dishes like Ugali, Nyama Choma, Chapati and Sukuma Wiki.",

    includes:[
        "Ingredients",
        "Recipe Book",
        "Lunch"
    ],

    highlights:[
        "Cook Local Meals",
        "Chef Guidance",
        "Take Recipes Home"
    ]
},

{
    id:34,

    title:"Nairobi National Museum Tour",

    category:"Museum",

    location:"Nairobi",

    county:"Nairobi",

    price:1800,

    duration:"2 Hours",

    rating:4.7,

    reviews:196,

    image:"https://images.unsplash.com/photo-1566127992631-137a642a90f4?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Museum Guides Kenya",

    featured:false,

    trending:false,

    instantBook:true,

    description:"Explore Kenya's rich history, archaeology, wildlife and cultural heritage.",

    includes:[
        "Museum Entry",
        "Professional Guide"
    ],

    highlights:[
        "History",
        "Culture",
        "Fossils"
    ]
},

{
    id:35,

    title:"Karura Forest Cycling Adventure",

    category:"Cycling",

    location:"Karura Forest",

    county:"Nairobi",

    price:2500,

    duration:"3 Hours",

    rating:4.8,

    reviews:208,

    image:"https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Karura Bike Tours",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Ride through beautiful forest trails, waterfalls and caves inside Karura Forest.",

    includes:[
        "Mountain Bike",
        "Helmet",
        "Guide"
    ],

    highlights:[
        "Forest Trails",
        "Waterfall",
        "Cycling"
    ]
},

{
    id:36,

    title:"Horse Riding in Nanyuki",

    category:"Horse Riding",

    location:"Nanyuki",

    county:"Laikipia",

    price:7200,

    duration:"2 Hours",

    rating:4.9,

    reviews:149,

    image:"https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Equator Horse Ranch",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Ride through scenic ranches with breathtaking views of Mount Kenya.",

    includes:[
        "Horse",
        "Instructor",
        "Safety Gear"
    ],

    highlights:[
        "Mount Kenya Views",
        "Horse Riding",
        "Photography"
    ]
},

{
    id:37,

    title:"Diani Quad Bike Adventure",

    category:"Quad Biking",

    location:"Diani",

    county:"Kwale",

    price:6500,

    duration:"2 Hours",

    rating:4.8,

    reviews:167,

    image:"https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Diani Adventure Club",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Explore coastal trails and villages on an exciting quad biking adventure.",

    includes:[
        "Quad Bike",
        "Helmet",
        "Guide"
    ],

    highlights:[
        "Beach Trails",
        "Adventure",
        "Village Tour"
    ]
},

{
    id:38,

    title:"Maasai Mara Hot Air Balloon Safari",

    category:"Hot Air Balloon",

    location:"Maasai Mara",

    county:"Narok",

    price:48000,

    duration:"4 Hours",

    rating:5.0,

    reviews:392,

    image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Sky Safari Kenya",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Float above the Maasai Mara at sunrise before enjoying a champagne bush breakfast.",

    includes:[
        "Balloon Flight",
        "Breakfast",
        "Transfers"
    ],

    highlights:[
        "Sunrise",
        "Luxury Experience",
        "Wildlife Views"
    ]
},

{
    id:39,

    title:"Amboseli Night Game Drive",

    category:"Safari",

    location:"Amboseli",

    county:"Kajiado",

    price:12500,

    duration:"Night Tour",

    rating:4.9,

    reviews:181,

    image:"https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Night Safari Kenya",

    featured:true,

    trending:false,

    instantBook:true,

    description:"Discover Kenya's nocturnal wildlife with experienced guides under the African night sky.",

    includes:[
        "Safari Vehicle",
        "Guide",
        "Dinner"
    ],

    highlights:[
        "Night Wildlife",
        "Stars",
        "Photography"
    ]
},

{
    id:40,

    title:"Naivasha Vineyard Wine Tasting",

    category:"Wine Tasting",

    location:"Naivasha",

    county:"Nakuru",

    price:5600,

    duration:"3 Hours",

    rating:4.8,

    reviews:139,

    image:"https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Rift Valley Vineyards",

    featured:false,

    trending:true,

    instantBook:true,

    description:"Sample locally produced wines while overlooking the beautiful Great Rift Valley.",

    includes:[
        "Wine Tasting",
        "Cheese Platter",
        "Estate Tour"
    ],

    highlights:[
        "Local Wines",
        "Scenic Views",
        "Relaxing Atmosphere"
    ]
},
{
    id:41,

    title:"Mount Kenya Sunrise Trek",

    category:"Hiking",

    location:"Mount Kenya",

    county:"Nyeri",

    price:18500,

    duration:"2 Days",

    rating:5.0,

    reviews:298,

    image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Peak Adventures Kenya",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Watch an unforgettable sunrise from the slopes of Africa's second-highest mountain.",

    includes:[
        "Professional Guide",
        "Camping Equipment",
        "Meals",
        "Park Fees"
    ],

    highlights:[
        "Sunrise",
        "Mountain Trek",
        "Camping"
    ]
},

{
    id:42,

    title:"Diani Beach Horse Ride",

    category:"Horse Riding",

    location:"Diani",

    county:"Kwale",

    price:4800,

    duration:"2 Hours",

    rating:4.9,

    reviews:184,

    image:"https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Diani Beach Stables",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Ride along the white sandy beaches of Diani during sunrise or sunset.",

    includes:[
        "Horse",
        "Instructor",
        "Safety Gear"
    ],

    highlights:[
        "Beach Ride",
        "Sunset",
        "Photography"
    ]
},

{
    id:43,

    title:"Watamu Snorkeling Adventure",

    category:"Snorkeling",

    location:"Watamu",

    county:"Kilifi",

    price:6200,

    duration:"Half Day",

    rating:4.9,

    reviews:263,

    image:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Watamu Marine Adventures",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Explore vibrant coral reefs and tropical marine life in Watamu Marine Park.",

    includes:[
        "Boat",
        "Snorkeling Gear",
        "Guide"
    ],

    highlights:[
        "Coral Reefs",
        "Marine Life",
        "Crystal Waters"
    ]
},

{
    id:44,

    title:"Mombasa Old Town Heritage Walk",

    category:"City Tour",

    location:"Mombasa",

    county:"Mombasa",

    price:2300,

    duration:"3 Hours",

    rating:4.8,

    reviews:211,

    image:"https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Mombasa Heritage Tours",

    featured:false,

    trending:true,

    instantBook:true,

    description:"Walk through centuries of Swahili history while exploring narrow streets and ancient buildings.",

    includes:[
        "Guide",
        "Refreshments"
    ],

    highlights:[
        "Old Town",
        "Culture",
        "Architecture"
    ]
},

{
    id:45,

    title:"Fort Jesus Guided Tour",

    category:"Museum",

    location:"Mombasa",

    county:"Mombasa",

    price:1800,

    duration:"2 Hours",

    rating:4.8,

    reviews:337,

    image:"https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Kenya Heritage Guides",

    featured:true,

    trending:false,

    instantBook:true,

    description:"Visit the iconic Fort Jesus and discover over 400 years of East African history.",

    includes:[
        "Museum Entry",
        "Guide"
    ],

    highlights:[
        "UNESCO Site",
        "History",
        "Museum"
    ]
},

{
    id:46,

    title:"Kisumu Hippo Point Sunset Tour",

    category:"Nature Walk",

    location:"Kisumu",

    county:"Kisumu",

    price:2500,

    duration:"2 Hours",

    rating:4.7,

    reviews:126,

    image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Lake Victoria Eco Tours",

    featured:false,

    trending:true,

    instantBook:true,

    description:"Watch spectacular sunsets over Lake Victoria while spotting hippos and native birds.",

    includes:[
        "Guide",
        "Refreshments"
    ],

    highlights:[
        "Lake Victoria",
        "Hippos",
        "Sunset"
    ]
},

{
    id:47,

    title:"Naivasha Crescent Island Walking Safari",

    category:"Wildlife",

    location:"Naivasha",

    county:"Nakuru",

    price:5400,

    duration:"Half Day",

    rating:4.9,

    reviews:284,

    image:"https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Naivasha Wildlife Tours",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Walk safely among giraffes, zebras and antelopes on the famous Crescent Island.",

    includes:[
        "Boat Transfer",
        "Guide",
        "Park Entry"
    ],

    highlights:[
        "Walking Safari",
        "Wildlife",
        "Photography"
    ]
},

{
    id:48,

    title:"Nairobi Rooftop Nightlife Experience",

    category:"Nightlife",

    location:"Nairobi",

    county:"Nairobi",

    price:3900,

    duration:"5 Hours",

    rating:4.8,

    reviews:219,

    image:"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Nairobi After Dark",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Experience Nairobi's vibrant nightlife with rooftop lounges, live music and city views.",

    includes:[
        "Guide",
        "VIP Entry"
    ],

    highlights:[
        "Nightlife",
        "Live Music",
        "Skyline"
    ]
},

{
    id:49,

    title:"Spa & Wellness Retreat",

    category:"Wellness",

    location:"Naivasha",

    county:"Nakuru",

    price:9800,

    duration:"Full Day",

    rating:4.9,

    reviews:173,

    image:"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Serenity Spa Kenya",

    featured:true,

    trending:false,

    instantBook:true,

    description:"Relax with massages, yoga sessions and natural wellness treatments overlooking Lake Naivasha.",

    includes:[
        "Massage",
        "Lunch",
        "Yoga Session"
    ],

    highlights:[
        "Luxury Spa",
        "Wellness",
        "Relaxation"
    ]
},

{
    id:50,

    title:"Family Fun Day at Nairobi Safari Walk",

    category:"Family Fun",

    location:"Nairobi",

    county:"Nairobi",

    price:2200,

    duration:"Half Day",

    rating:4.8,

    reviews:302,

    image:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Safari Walk Kenya",

    featured:true,

    trending:true,

    instantBook:true,

    description:"A perfect family day out featuring wildlife, educational exhibits and interactive activities for children.",

    includes:[
        "Entry Ticket",
        "Guide"
    ],

    highlights:[
        "Family Friendly",
        "Wildlife",
        "Kids Activities"
    ]
},
{
    id:51,

    title:"Luxury Glamping in Maasai Mara",

    category:"Luxury",

    location:"Maasai Mara",

    county:"Narok",

    price:28500,

    duration:"2 Days",

    rating:5.0,

    reviews:214,

    image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Mara Luxury Camps",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Enjoy luxury tented accommodation with gourmet dining, evening campfires and breathtaking wildlife views.",

    includes:[
        "Luxury Tent",
        "Meals",
        "Game Drive",
        "Campfire"
    ],

    highlights:[
        "Luxury Camping",
        "Bush Dinner",
        "Big Five"
    ]
},

{
    id:52,

    title:"Watamu Scuba Diving Adventure",

    category:"Diving",

    location:"Watamu",

    county:"Kilifi",

    price:9800,

    duration:"Half Day",

    rating:4.9,

    reviews:196,

    image:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Blue Ocean Divers",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Dive into the crystal-clear waters of Watamu Marine Park and discover vibrant coral reefs and tropical fish.",

    includes:[
        "Diving Equipment",
        "Instructor",
        "Boat Ride"
    ],

    highlights:[
        "Scuba Diving",
        "Marine Park",
        "Coral Reefs"
    ]
},

{
    id:53,

    title:"Romantic Beach Dinner in Diani",

    category:"Romantic",

    location:"Diani",

    county:"Kwale",

    price:11500,

    duration:"3 Hours",

    rating:5.0,

    reviews:287,

    image:"https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Diani Romance Experiences",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Enjoy a private candle-lit dinner on the beach complete with live music and ocean views.",

    includes:[
        "Private Table",
        "Three Course Dinner",
        "Live Music"
    ],

    highlights:[
        "Beach Dinner",
        "Sunset",
        "Romantic Setup"
    ]
},

{
    id:54,

    title:"Nairobi Photography Walk",

    category:"Photography",

    location:"Nairobi",

    county:"Nairobi",

    price:3600,

    duration:"4 Hours",

    rating:4.8,

    reviews:143,

    image:"https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Lens Kenya",

    featured:false,

    trending:true,

    instantBook:true,

    description:"Capture Nairobi's architecture, street life and hidden gems with a professional photographer.",

    includes:[
        "Photography Guide",
        "Editing Tips"
    ],

    highlights:[
        "Street Photography",
        "Architecture",
        "Creative Tour"
    ]
},

{
    id:55,

    title:"Mount Longonot Crater Hike",

    category:"Hiking",

    location:"Naivasha",

    county:"Nakuru",

    price:3900,

    duration:"Full Day",

    rating:4.9,

    reviews:329,

    image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Rift Valley Adventures",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Climb the extinct volcano and walk around its massive crater with stunning Rift Valley views.",

    includes:[
        "Guide",
        "Park Entry",
        "Water"
    ],

    highlights:[
        "Volcano",
        "Crater Rim",
        "Nature"
    ]
},

{
    id:56,

    title:"Mombasa Glass Bottom Boat Tour",

    category:"Boat Tour",

    location:"Mombasa",

    county:"Mombasa",

    price:4200,

    duration:"3 Hours",

    rating:4.8,

    reviews:178,

    image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Coastal Marine Tours",

    featured:true,

    trending:false,

    instantBook:true,

    description:"View colorful marine life through a glass-bottom boat without getting into the water.",

    includes:[
        "Boat Ride",
        "Guide",
        "Life Jacket"
    ],

    highlights:[
        "Marine Life",
        "Glass Bottom Boat",
        "Family Friendly"
    ]
},

{
    id:57,

    title:"Rusinga Island Cultural Experience",

    category:"Village Experience",

    location:"Rusinga Island",

    county:"Homa Bay",

    price:3400,

    duration:"Half Day",

    rating:4.8,

    reviews:109,

    image:"https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Lake Victoria Heritage",

    featured:false,

    trending:false,

    instantBook:true,

    description:"Experience Luo traditions, storytelling, music and local cuisine on beautiful Rusinga Island.",

    includes:[
        "Village Tour",
        "Traditional Lunch"
    ],

    highlights:[
        "Culture",
        "Music",
        "Local Food"
    ]
},

{
    id:58,

    title:"Star Gazing Camp in Amboseli",

    category:"Camping",

    location:"Amboseli",

    county:"Kajiado",

    price:9200,

    duration:"Overnight",

    rating:4.9,

    reviews:162,

    image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Wild Sky Camps",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Sleep beneath millions of stars with professional astronomy guides in the Amboseli wilderness.",

    includes:[
        "Tent",
        "Dinner",
        "Breakfast",
        "Telescope"
    ],

    highlights:[
        "Night Sky",
        "Camping",
        "Campfire"
    ]
},

{
    id:59,

    title:"Helicopter Scenic Flight",

    category:"Adventure",

    location:"Nanyuki",

    county:"Laikipia",

    price:48500,

    duration:"1 Hour",

    rating:5.0,

    reviews:91,

    image:"https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Sky Kenya Aviation",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Enjoy breathtaking aerial views of Mount Kenya, wildlife conservancies and the Great Rift Valley.",

    includes:[
        "Helicopter Flight",
        "Pilot",
        "Safety Briefing"
    ],

    highlights:[
        "Luxury",
        "Aerial Views",
        "Photography"
    ]
},

{
    id:60,

    title:"Corporate Team Building Adventure",

    category:"Adventure",

    location:"Naivasha",

    county:"Nakuru",

    price:6500,

    duration:"Full Day",

    rating:4.8,

    reviews:173,

    image:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Adventure Works Kenya",

    featured:true,

    trending:false,

    instantBook:true,

    description:"A fun-filled day of obstacle courses, leadership games and outdoor activities designed for teams.",

    includes:[
        "Facilitators",
        "Lunch",
        "Equipment"
    ],

    highlights:[
        "Team Building",
        "Leadership",
        "Outdoor Games"
    ]
},
{
    id:61,
    title:"Lake Baringo Canoe Adventure",
    category:"Canoeing",
    location:"Lake Baringo",
    county:"Baringo",
    price:3800,
    duration:"3 Hours",
    rating:4.8,
    reviews:124,
    image:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    gallery:[],
    host:"Baringo Adventures",
    featured:false,
    trending:true,
    instantBook:true,
    description:"Paddle across the calm waters of Lake Baringo while spotting birds and crocodiles.",
    includes:["Canoe","Life Jacket","Guide"],
    highlights:["Bird Watching","Nature","Lake Views"]
},

{
    id:62,
    title:"Hell's Gate Rock Climbing",
    category:"Adventure",
    location:"Hell's Gate",
    county:"Nakuru",
    price:5400,
    duration:"Half Day",
    rating:4.8,
    reviews:173,
    image:"https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1200&q=80",
    gallery:[],
    host:"Climb Kenya",
    featured:true,
    trending:true,
    instantBook:true,
    description:"Challenge yourself with guided rock climbing inside Hell's Gate National Park.",
    includes:["Equipment","Instructor","Safety Gear"],
    highlights:["Rock Climbing","Adventure","Scenic Views"]
},

{
    id:63,
    title:"Kerio Valley Paragliding",
    category:"Adventure",
    location:"Kerio Valley",
    county:"Elgeyo Marakwet",
    price:13500,
    duration:"2 Hours",
    rating:4.9,
    reviews:88,
    image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    gallery:[],
    host:"Sky High Kenya",
    featured:true,
    trending:true,
    instantBook:true,
    description:"Soar above the spectacular Kerio Valley with certified paragliding instructors.",
    includes:["Flight","Instructor","Equipment"],
    highlights:["Paragliding","Aerial Views","Photography"]
},

{
    id:64,
    title:"Karen Blixen Museum Tour",
    category:"Museum",
    location:"Karen",
    county:"Nairobi",
    price:1800,
    duration:"2 Hours",
    rating:4.7,
    reviews:233,
    image:"https://images.unsplash.com/photo-1566127992631-137a642a90f4?auto=format&fit=crop&w=1200&q=80",
    gallery:[],
    host:"Historic Kenya",
    featured:false,
    trending:false,
    instantBook:true,
    description:"Visit the former home of Karen Blixen and discover Kenya's colonial history.",
    includes:["Entry","Guide"],
    highlights:["History","Museum","Culture"]
},

{
    id:65,
    title:"Nairobi Art & Graffiti Tour",
    category:"Art Workshop",
    location:"Nairobi",
    county:"Nairobi",
    price:2900,
    duration:"3 Hours",
    rating:4.8,
    reviews:146,
    image:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
    gallery:[],
    host:"Creative Nairobi",
    featured:true,
    trending:true,
    instantBook:true,
    description:"Explore Nairobi's colorful street art and vibrant creative spaces.",
    includes:["Guide","Refreshments"],
    highlights:["Street Art","Photography","Culture"]
},

{
    id:66,
    title:"Pottery & Ceramics Workshop",
    category:"Art Workshop",
    location:"Nairobi",
    county:"Nairobi",
    price:4200,
    duration:"4 Hours",
    rating:4.9,
    reviews:101,
    image:"https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    gallery:[],
    host:"Clay Studio Kenya",
    featured:false,
    trending:true,
    instantBook:true,
    description:"Create your own handmade pottery with experienced ceramic artists.",
    includes:["Materials","Instructor"],
    highlights:["Pottery","Creativity","Souvenir"]
},

{
    id:67,
    title:"Traditional Maasai Village Visit",
    category:"Village Experience",
    location:"Maasai Mara",
    county:"Narok",
    price:3500,
    duration:"3 Hours",
    rating:4.9,
    reviews:298,
    image:"https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
    gallery:[],
    host:"Maasai Community Tours",
    featured:true,
    trending:true,
    instantBook:true,
    description:"Experience Maasai traditions, dances, homes and authentic cultural storytelling.",
    includes:["Guide","Cultural Performance"],
    highlights:["Culture","Dance","Local Community"]
},

{
    id:68,
    title:"Lake Elementaita Bird Safari",
    category:"Bird Watching",
    location:"Elementaita",
    county:"Nakuru",
    price:4100,
    duration:"Half Day",
    rating:4.8,
    reviews:134,
    image:"https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1200&q=80",
    gallery:[],
    host:"Birding Kenya",
    featured:false,
    trending:false,
    instantBook:true,
    description:"Observe flamingos, pelicans and over 400 bird species around Lake Elementaita.",
    includes:["Guide","Binoculars"],
    highlights:["Bird Watching","Photography","Nature"]
},

{
    id:69,
    title:"Yoga Retreat by Lake Naivasha",
    category:"Yoga",
    location:"Naivasha",
    county:"Nakuru",
    price:7600,
    duration:"Full Day",
    rating:4.9,
    reviews:167,
    image:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    gallery:[],
    host:"Zen Kenya",
    featured:true,
    trending:true,
    instantBook:true,
    description:"Reconnect with nature through yoga, meditation and healthy cuisine.",
    includes:["Yoga","Lunch","Meditation"],
    highlights:["Relaxation","Wellness","Nature"]
},

{
    id:70,
    title:"Mombasa Sunset Kayaking",
    category:"Kayaking",
    location:"Mombasa",
    county:"Mombasa",
    price:4600,
    duration:"2 Hours",
    rating:4.8,
    reviews:142,
    image:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    gallery:[],
    host:"Coastal Adventures",
    featured:true,
    trending:true,
    instantBook:true,
    description:"Paddle through calm coastal waters while watching the sunset.",
    includes:["Kayak","Guide","Life Jacket"],
    highlights:["Sunset","Ocean","Adventure"]
},

{
    id:71,
    title:"Nairobi Escape Room Challenge",
    category:"Family Fun",
    location:"Nairobi",
    county:"Nairobi",
    price:2500,
    duration:"90 Minutes",
    rating:4.8,
    reviews:198,
    image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    gallery:[],
    host:"Escape Kenya",
    featured:true,
    trending:true,
    instantBook:true,
    description:"Solve puzzles and escape themed rooms with friends or family.",
    includes:["Game Entry"],
    highlights:["Puzzles","Teamwork","Indoor Fun"]
},

{
    id:72,
    title:"Go Kart Racing Experience",
    category:"Adventure",
    location:"Nairobi",
    county:"Nairobi",
    price:3900,
    duration:"1 Hour",
    rating:4.8,
    reviews:214,
    image:"https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
    gallery:[],
    host:"Kart Kenya",
    featured:true,
    trending:true,
    instantBook:true,
    description:"Race high-performance go-karts on a professional outdoor track.",
    includes:["Kart","Helmet"],
    highlights:["Speed","Competition","Family Fun"]
},

{
    id:73,
    title:"Ziplining at Kereita Forest",
    category:"Ziplining",
    location:"Kereita",
    county:"Kiambu",
    price:5500,
    duration:"3 Hours",
    rating:4.9,
    reviews:318,
    image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    gallery:[],
    host:"The Forest Kenya",
    featured:true,
    trending:true,
    instantBook:true,
    description:"Fly above the forest canopy on East Africa's longest zipline.",
    includes:["Equipment","Instructor"],
    highlights:["Zipline","Forest","Adventure"]
},

{
    id:74,
    title:"Coffee & Brunch Cycling Tour",
    category:"Cycling",
    location:"Limuru",
    county:"Kiambu",
    price:4200,
    duration:"4 Hours",
    rating:4.8,
    reviews:122,
    image:"https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80",
    gallery:[],
    host:"Cycle Kenya",
    featured:false,
    trending:true,
    instantBook:true,
    description:"Cycle through tea farms before enjoying a gourmet countryside brunch.",
    includes:["Bike","Brunch","Guide"],
    highlights:["Cycling","Coffee","Tea Farms"]
},

{
    id:75,
    title:"Lamu Swahili Cooking Experience",
    category:"Cooking Class",
    location:"Lamu",
    county:"Lamu",
    price:4300,
    duration:"4 Hours",
    rating:4.9,
    reviews:158,
    image:"https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80",
    gallery:[],
    host:"Taste Lamu",
    featured:true,
    trending:false,
    instantBook:true,
    description:"Cook authentic Swahili dishes using traditional recipes and spices.",
    includes:["Ingredients","Lunch","Recipe Book"],
    highlights:["Cooking","Culture","Food"]
},

{
    id:76,
    title:"Lake Turkana Desert Expedition",
    category:"Adventure",
    location:"Lake Turkana",
    county:"Marsabit",
    price:32500,
    duration:"3 Days",
    rating:4.9,
    reviews:74,
    image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    gallery:[],
    host:"Northern Expeditions",
    featured:true,
    trending:true,
    instantBook:false,
    description:"Journey across Kenya's northern frontier to the Jade Sea and volcanic landscapes.",
    includes:["Camping","Meals","Guide","Transport"],
    highlights:["Desert","Adventure","Lake Turkana"]
},

{
    id:77,
    title:"Christmas Lights Nairobi Tour",
    category:"Festival",
    location:"Nairobi",
    county:"Nairobi",
    price:2200,
    duration:"2 Hours",
    rating:4.8,
    reviews:87,
    image:"https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1200&q=80",
    gallery:[],
    host:"Festive Kenya",
    featured:false,
    trending:false,
    instantBook:true,
    description:"Seasonal guided tour of Nairobi's best Christmas decorations and festive markets.",
    includes:["Guide","Hot Chocolate"],
    highlights:["Christmas","Lights","Family"]
},

{
    id:78,
    title:"Nairobi Farmers Market Experience",
    category:"Food Tour",
    location:"Nairobi",
    county:"Nairobi",
    price:2100,
    duration:"3 Hours",
    rating:4.7,
    reviews:146,
    image:"https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80",
    gallery:[],
    host:"Local Taste Kenya",
    featured:false,
    trending:true,
    instantBook:true,
    description:"Meet local farmers, sample organic foods and shop for handmade products.",
    includes:["Guide","Food Samples"],
    highlights:["Organic Food","Markets","Culture"]
},

{
    id:79,
    title:"Diani Beach Bonfire Party",
    category:"Nightlife",
    location:"Diani",
    county:"Kwale",
    price:4800,
    duration:"Evening",
    rating:4.9,
    reviews:201,
    image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    gallery:[],
    host:"Coastal Nights",
    featured:true,
    trending:true,
    instantBook:true,
    description:"Enjoy live music, beach games and a bonfire under the stars.",
    includes:["BBQ","Live Music","Drinks"],
    highlights:["Beach Party","Bonfire","Sunset"]
},

{
    id:80,
    title:"Kenyan Cultural Festival Experience",

    category:"Festival",

    location:"Nairobi",

    county:"Nairobi",

    price:5900,

    duration:"Full Day",

    rating:5.0,

    reviews:356,

    image:"https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=1200&q=80",

    gallery:[],

    host:"Kenya Cultural Experiences",

    featured:true,

    trending:true,

    instantBook:true,

    description:"Celebrate Kenya's rich diversity through traditional music, dance, food, fashion, crafts and storytelling from communities across the country.",

    includes:[
        "Festival Entry",
        "Traditional Lunch",
        "Live Performances",
        "Cultural Guide"
    ],

    highlights:[
        "Music & Dance",
        "Traditional Cuisine",
        "Handmade Crafts",
        "Cultural Performances"
    ]
}

];