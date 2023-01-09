import React, { useEffect, useRef } from "react";
import tw from "tailwind-styled-components";
import { T_NavLine } from "./NavLine";
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import MoreButtonPopupExpandButton, {
  T_Props,
} from "./MoreButtonPopupExpandButton";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import OnDeviceTrainingOutlinedIcon from "@mui/icons-material/OnDeviceTrainingOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ConnectedTvOutlinedIcon from "@mui/icons-material/ConnectedTvOutlined";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";
//Module data
const navLines: T_NavLine[] = new Array(3);
navLines[0] = { icon: TopicOutlinedIcon, name: "Topics", link: "/home" };
navLines[1] = { icon: ListAltOutlinedIcon, name: "Lists", link: "/home" };
navLines[2] = {
  icon: GroupOutlinedIcon,
  name: "Twitter Circle",
  link: "/home",
};
const expandList: T_Props[] = new Array(3);
expandList[0] = {
  title: "Creator Studio",
  subItems: [
    {
      icon: NewspaperOutlinedIcon,
      name: "Newsletters",
      link: "#",
    },
    {
      icon: AnalyticsOutlinedIcon,
      name: "Analytics",
      link: "#",
    },
  ],
};
expandList[1] = {
  title: "Professional Tools",
  subItems: [
    {
      icon: RocketLaunchOutlinedIcon,
      name: "Professional Home",
      link: "#",
    },
    {
      icon: LaunchOutlinedIcon,
      name: "Twitter Ads",
      link: "#",
    },
    {
      icon: OnDeviceTrainingOutlinedIcon,
      name: "Monetization",
      link: "#",
    },
  ],
};
expandList[2] = {
  title: "Settings and Support",
  subItems: [
    {
      icon: SettingsOutlinedIcon,
      name: "Settings and privacy",
      link: "#",
    },
    {
      icon: HelpOutlineOutlinedIcon,
      name: "Help Center",
      link: "#",
    },
    {
      icon: ConnectedTvOutlinedIcon,
      name: "Display",
      link: "#",
    },
    {
      icon: KeyboardAltOutlinedIcon,
      name: "Keyboard shortcuts",
      link: "#",
    },
  ],
};
//Styled components
const Container = tw.div` absolute z-2 top-[-340%] left-[-8%]  bg-black shadow-md border-[1px] border-gray-800
 shadow-gray-600 rounded-2xl overflow-hidden w-72`;

//Module
const MoreButtonPopup = () => {

  return (
    <Container >
      {navLines.map((item, id) => (
        <div key={id} className="p-3 text-lg hover:bg-gray-800">
          <a href={item.link}>
            <item.icon />
            <span className="px-2">{item.name}</span>
          </a>
        </div>
      ))}
      <hr className="w-5/6 bg-gray-800 h-[1px] mx-auto border-none" />
      {expandList.map((item, id) => (
        <MoreButtonPopupExpandButton
          key={id}
          title={item.title}
          subItems={item.subItems}
        />
      ))}
    </Container>
  );
};
export default MoreButtonPopup;
