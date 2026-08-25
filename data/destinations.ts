export type Destination = {
    id: string;
    name: string;
    country: string;
    category: "india" | "international";
    image: string;
    description: string;
    price: number;
};

export const destinations: Destination[] = [
    {
        id: "kerala",
        name: "Kerala",
        country: "India",
        category: "india",
        image: "/images/kerala.jpg",
        description:
            "Experience tranquil backwaters, lush hills, beautiful beaches and authentic Kerala culture.",
        price: 24999,
    },
    {
        id: "himachal-pradesh",
        name: "Himachal Pradesh",
        country: "India",
        category: "india",
        image: "/images/himachal.jpg",
        description:
            "Explore Himalayan valleys, charming mountain towns and breathtaking landscapes.",
        price: 22999,
    },
    {
        id: "ladakh",
        name: "Ladakh",
        country: "India",
        category: "india",
        image: "/images/ladakh.jpg",
        description:
            "Discover dramatic mountains, high-altitude lakes, monasteries and unforgettable road trips.",
        price: 29999,
    },
    {
        id: "andaman",
        name: "Andaman",
        country: "India",
        category: "india",
        image: "/images/andaman.jpg",
        description:
            "Relax on pristine beaches and explore coral reefs and tropical island landscapes.",
        price: 27999,
    },
    {
        id: "goa",
        name: "Goa",
        country: "India",
        category: "india",
        image: "/images/goa.jpg",
        description:
            "Enjoy beautiful beaches, Portuguese heritage, local cuisine and relaxed coastal experiences.",
        price: 19999,
    },
    {
        id: "kenya",
        name: "Kenya",
        country: "Kenya",
        category: "international",
        image: "/images/kenya.jpg",
        description:
            "Experience incredible wildlife safaris and witness the beauty of the Masai Mara.",
        price: 119999,
    },
    {
        id: "vietnam",
        name: "Vietnam",
        country: "Vietnam",
        category: "international",
        image: "/images/vietnam.jpg",
        description:
            "Explore vibrant cities, ancient culture, delicious food and spectacular Ha Long Bay.",
        price: 89999,
    },
    {
        id: "tanzania",
        name: "Tanzania",
        country: "Tanzania",
        category: "international",
        image: "/images/tanzania.jpg",
        description:
            "Discover the Serengeti, spectacular wildlife and unforgettable African landscapes.",
        price: 129999,
    },
    {
        id: "iceland",
        name: "Iceland",
        country: "Iceland",
        category: "international",
        image: "/images/iceland.jpg",
        description:
            "Experience waterfalls, glaciers, volcanoes and dramatic Nordic landscapes.",
        price: 149999,
    },
    {
        id: "sri-lanka",
        name: "Sri Lanka",
        country: "Sri Lanka",
        category: "international",
        image: "/images/sri-lanka.jpg",
        description:
            "Discover tea plantations, tropical beaches, wildlife and rich island heritage.",
        price: 69999,
    },
];