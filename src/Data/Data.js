// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/profile.png";
import img2 from "../imgs/profile2.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilUsersAlt,
    heading: "Employers",
  },
  {
    icon: UilUsersAlt,
    heading: "Students",
  },
  {
    icon: UilClipboardAlt,
    heading: 'Reports'
  },
  {
    icon: UilClipboardAlt,
    heading: 'Reviews'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Users",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 58,
    value: "1,000",
    png: UilUsersAlt,
    series: [
      {
        name: "Users",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Employers",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 50,
    value: "325",
    png: UilUsersAlt,
    series: [
      {
        name: "Employers",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Students",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "675",
    png: UilUsersAlt,
    series: [
      {
        name: "Students",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img2,
    name: "Sasuke Uchiha",
    noti: "has joined the hanapp community as a employer.",
    time: "25 seconds ago",
  },
  {
    img: img1,
    name: "Hinata Hyuga",
    noti: "has joined the hanapp community as a student job seeker.",
    time: "30 minutes ago",
  },
  {
    img: img1,
    name: "Naruto Uzumaki",
    noti: "has joined the hanapp community as a student job seeker.",
    time: "2 hours ago",
  },
  {
    img: img2,
    name: "Madara Uchiha",
    noti: "has joined the hanapp community as a employer.",
    time: "2 hours ago",
  },
  
  
];
