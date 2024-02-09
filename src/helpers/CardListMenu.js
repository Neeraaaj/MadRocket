import { FaUserAlt, FaListAlt, FaBolt } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import {
  GiCardAceClubs,
} from "react-icons/gi";
import { TbTopologyStarRing3 } from "react-icons/tb";
import { BiLogoDiscordAlt, BiSolidJoystick } from "react-icons/bi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaBehance, FaFacebook, FaLinkedin  } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { FaBurn } from "react-icons/fa";
import { GiProfit } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";


export const CardMenus = [
    {
      title: "Sports",
      submenu: true,
      Icon: MdAnalytics,
      subMenuItems: [
        { title: "Amount Burn", Icon: FaBurn },
        { title: "Profit Percentage", Icon: GiProfit },
      ],
    },
    {
      title: "Casino",
      Icon: GiCardAceClubs,
      spacing: true,
    },
    {
      title: "Slot Games",
      Icon: TbTopologyStarRing3,
    },
    {
      title: "Account",
      Icon: MdAccountCircle,
    },
    {
      title: "Mini Games",
      Icon: FaBolt,
    },
    {
      title: "Betting History",
      Icon: FaListAlt,
    },
    {
      title: "Community",
      Icon: FaUserAlt,
      spacing: true,
      submenu: true,
      subMenuItems: [
        { title: "Discord", Icon: BiLogoDiscordAlt },
        { title: "Linked In", Icon: FaLinkedin },
        { title: "Facebook", Icon: FaFacebook },
        { title: "Behnace", Icon: FaBehance },
      ],
    },
    {
      title: "Events List",
      Icon: FaUserCheck,
    },
    {
      title: "Customer Services",
      Icon: RiCustomerService2Fill,
    },
  ];

