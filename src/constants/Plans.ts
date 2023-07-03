import arcadeIcon from "../assets//images/icon-arcade.svg"
import advancedIcon from "../assets/images/icon-advanced.svg"
import proIcon from "../assets/images/icon-pro.svg"
export interface Plan {
  title: string;
  img: string;

  billing: {
    monthly: number;
    yearly: number;
  };
}

const plans: Plan[] = [
  {
    title: "Arcade",
    img: arcadeIcon,
    billing: {
      monthly: 9,
      yearly: 90,
    },
  },
  {
    title: "Advanced",
    img: advancedIcon,
    billing: {
      monthly: 12,
      yearly: 120,
    },
  },
  {
    title: "Pro",
    img: proIcon,
    billing: {
      monthly: 15,
      yearly: 150,
    },
  },
];

export default plans;
