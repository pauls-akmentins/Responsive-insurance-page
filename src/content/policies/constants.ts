import { PoliciesCard } from "./types";
import CardIcon1 from "../../assets/svg/CardIcon1.svg";
import CardIcon2 from "../../assets/svg/CardIcon2.svg";
import CardIcon3 from "../../assets/svg/CardIcon3.svg";
import CardIcon4 from "../../assets/svg/CardIcon4.svg";

export const firstPageHierarchy: string[] = ["Home", "Policies"];

export const policies: PoliciesCard[] = [
  {
    title: "Home Insurance",
    subTitle: "Address",
    subTitleContent: "Example Road 7, Stockholm",
    imgSrc: CardIcon1,
    isInteractionActive: false,
  },
  {
    title: "Car Insurance",
    subTitle: "Car Make and Model",
    subTitleContent: "Peugeot 206 XR 5D 1,4",
    imgSrc: CardIcon2,
    isInteractionActive: true,
  },
  {
    title: "Pet Insurance",
    subTitle: "Pet Name",
    subTitleContent: "John Doe",
    imgSrc: CardIcon3,
    isInteractionActive: false,
  },
  {
    title: "Health Insurance",
    subTitle: "Person",
    subTitleContent: "John Doe",
    imgSrc: CardIcon4,
    isInteractionActive: false,
  },
];
