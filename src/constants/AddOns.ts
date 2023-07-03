export interface AddOn {
  title: string;
  description: string;
  billing: {
    monthly: number;
    yearly: number;
  };
}

const addOns: AddOn[] = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    billing: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    billing: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    billing: {
      monthly: 2,
      yearly: 20,
    },
  },
];

export default addOns;
