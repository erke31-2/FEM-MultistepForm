export interface Plan{
    title: string;
    img: string;
    
    billing: {
        monthly: number;
        yearly: number
    }
}

const  plans:Plan[] = [
    {
        title: "Arcade",
        img: "/src/assets/images/icon-arcade.svg",
        billing: {
            monthly: 9,
            yearly: 90
        }
    },
    {
        title: "Advanced",
        img: "/src/assets/images/icon-advanced.svg",
        billing: {
            monthly: 12,
            yearly: 120
        }
    },
    {
        title: "Pro",
        img: "/src/assets/images/icon-pro.svg",
        billing: {
            monthly: 15,
            yearly: 150
        }
    },
]


export default plans