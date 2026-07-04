const properties = [

{
    id: 1,
    name: "Watamu Ocean Villa",
    category: "Villa",
    location: "Watamu",
    county: "Kilifi",
    price: 8500,
    rating: 4.9,
    reviews: 214,
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    featured: true,
    favourite: true,
    instantBook: true,
    discount: 20,

    gallery: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],

    amenities: [
        "WiFi",
        "Swimming Pool",
        "Kitchen",
        "Beachfront",
        "Parking",
        "Air Conditioning",
        "Breakfast"
    ],

    description:
        "Luxury beachfront villa overlooking the Indian Ocean with a private pool, chef services and modern interiors.",

    host: {
        name: "James Mwangi",
        joined: "2019",
        rating: 4.9
    }
},

{
    id: 2,
    name: "Temple Point Resort",
    category: "Resort",
    location: "Watamu",
    county: "Kilifi",
    price: 11200,
    rating: 4.8,
    reviews: 188,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    featured: true,
    favourite: false,
    instantBook: true,
    discount: 15,

    gallery: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],

    amenities: [
        "WiFi",
        "Restaurant",
        "Pool",
        "Spa",
        "Parking"
    ],

    description:
        "Elegant oceanfront resort offering luxury rooms, fine dining and unforgettable sunsets.",

    host: {
        name: "Temple Point",
        joined: "2018",
        rating: 4.8
    }
},

{
    id: 3,
    name: "Swahili Beach Resort",
    category: "Hotel",
    location: "Diani",
    county: "Kwale",
    price: 14500,
    rating: 4.9,
    reviews: 463,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    featured: true,
    favourite: true,
    instantBook: true,
    discount: 10,

    gallery: [
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    ],

    amenities: [
        "Pool",
        "Spa",
        "WiFi",
        "Beachfront",
        "Gym",
        "Restaurant"
    ],

    description:
        "Award-winning beachfront resort featuring multiple swimming pools and world-class hospitality.",

    host: {
        name: "Swahili Beach",
        joined: "2017",
        rating: 4.9
    }
},

{
    id: 4,
    name: "Acacia Premier Hotel",
    category: "Hotel",
    location: "Kisumu",
    county: "Kisumu",
    price: 9800,
    rating: 4.8,
    reviews: 312,
    guests: 3,
    bedrooms: 1,
    bathrooms: 1,
    featured: true,
    favourite: true,
    instantBook: true,
    discount: 12,

    gallery: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],

    amenities: [
        "WiFi",
        "Restaurant",
        "Pool",
        "Gym",
        "Airport Shuttle"
    ],

    description:
        "Premium city hotel in Kisumu offering panoramic lake views and executive accommodation.",

    host: {
        name: "Acacia Hotels",
        joined: "2016",
        rating: 4.8
    }
},
{
    id: 5,
    name: "Villa Rosa Kempinski",
    category: "Hotel",
    location: "Nairobi",
    county: "Nairobi",
    price: 21000,
    rating: 5.0,
    reviews: 702,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    featured: true,
    favourite: true,
    instantBook: true,
    discount: 5,

    gallery: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    ],

    amenities: [
        "Luxury Spa",
        "Gym",
        "WiFi",
        "Restaurant",
        "Conference Rooms",
        "Pool"
    ],

    description:
        "Five-star luxury hotel in Nairobi offering premium suites, fine dining and exceptional service.",

    host: {
        name: "Kempinski",
        joined: "2015",
        rating: 5.0
    }
},

{
    id: 6,
    name: "Leopard Beach Resort",
    category: "Resort",
    location: "Diani",
    county: "Kwale",
    price: 16800,
    rating: 4.9,
    reviews: 418,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    featured: true,
    favourite: true,
    instantBook: true,
    discount: 15,

    gallery: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],

    amenities: [
        "Pool",
        "Spa",
        "Beachfront",
        "WiFi",
        "Restaurant",
        "Gym"
    ],

    description:
        "Luxury beachfront resort offering world-class hospitality.",

    host: {
        name: "Leopard Beach",
        joined: "2018",
        rating: 4.9
    }
},

{
    id: 7,
    name: "Sarova Whitesands",
    category: "Hotel",
    location: "Mombasa",
    county: "Mombasa",
    price: 13400,
    rating: 4.8,
    reviews: 507,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    featured: true,
    favourite: true,
    instantBook: true,
    discount: 10,

    gallery: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
    ],

    amenities: [
        "Beachfront",
        "Pool",
        "WiFi",
        "Restaurant",
        "Gym"
    ],

    description:
        "Award-winning beach hotel overlooking the Indian Ocean.",

    host: {
        name: "Sarova",
        joined: "2016",
        rating: 4.8
    }
},

{
    id: 8,
    name: "Voyager Beach Resort",
    category: "Resort",
    location: "Mombasa",
    county: "Mombasa",
    price: 11800,
    rating: 4.7,
    reviews: 332,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    featured: false,
    favourite: true,
    instantBook: true,
    discount: 12,

    gallery: [
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    ],

    amenities: [
        "Pool",
        "Kids Club",
        "Restaurant",
        "WiFi",
        "Parking"
    ],

    description:
        "Family-friendly beachfront resort in Nyali.",

    host: {
        name: "Voyager",
        joined: "2017",
        rating: 4.7
    }
},
{
    id: 9,
    name: "Enashipai Resort",
    category: "Resort",
    location: "Naivasha",
    county: "Nakuru",
    price: 12700,
    rating: 4.9,
    reviews: 241,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    featured: true,
    favourite: true,
    instantBook: true,
    discount: 8,

    gallery: [
        "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],

    amenities: [
        "Spa",
        "Pool",
        "Lake View",
        "WiFi",
        "Restaurant"
    ],

    description:
        "Luxury resort overlooking Lake Naivasha.",

    host: {
        name: "Enashipai",
        joined: "2018",
        rating: 4.9
    }
},

{
    id: 10,
    name: "Mara Serena Safari Lodge",
    category: "Safari Lodge",
    location: "Maasai Mara",
    county: "Narok",
    price: 23500,
    rating: 5.0,
    reviews: 615,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    featured: true,
    favourite: true,
    instantBook: true,
    discount: 5,

    gallery: [
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],

    amenities: [
        "Game Drives",
        "Restaurant",
        "Pool",
        "WiFi",
        "Bar"
    ],

    description:
        "Luxury safari lodge overlooking the Maasai Mara reserve.",

    host: {
        name: "Serena Hotels",
        joined: "2015",
        rating: 5.0
    }
},

{
    id: 11,
    name: "Lamu House",
    category: "Villa",
    location: "Lamu",
    county: "Lamu",
    price: 9800,
    rating: 4.8,
    reviews: 104,
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    featured: false,
    favourite: true,
    instantBook: true,
    discount: 18,

    gallery: [
        "https://images.unsplash.com/photo-1464890100898-a385f744067f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],

    amenities: [
        "WiFi",
        "Kitchen",
        "Pool",
        "Rooftop",
        "Breakfast"
    ],

    description:
        "Traditional Swahili villa in the heart of Lamu Old Town.",

    host: {
        name: "Ahmed Ali",
        joined: "2020",
        rating: 4.8
    }
},

{
    id: 12,
    name: "Fairmont Mount Kenya Safari Club",
    category: "Luxury Hotel",
    location: "Nanyuki",
    county: "Laikipia",
    price: 28900,
    rating: 5.0,
    reviews: 396,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    featured: true,
    favourite: true,
    instantBook: true,
    discount: 7,

    gallery: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],

    amenities: [
        "Golf",
        "Spa",
        "Pool",
        "Restaurant",
        "WiFi",
        "Horse Riding"
    ],

    description:
        "One of Kenya's finest luxury safari hotels with views of Mount Kenya.",

    host: {
        name: "Fairmont",
        joined: "2014",
        rating: 5.0
    }
}

];

export default properties;