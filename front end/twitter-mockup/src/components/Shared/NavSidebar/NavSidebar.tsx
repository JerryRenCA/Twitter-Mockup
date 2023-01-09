import React from "react";
import tw from "tailwind-styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import StarsOutlinedIcon from "@mui/icons-material/StarsOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";


import NavLine, { T_NavLine } from "./components/NavLine";
import MoreButton from "./components/MoreButton";
// types
type T_NavItem = {};
//React Module Data
const navLines: T_NavLine[] = new Array(8);
navLines[0] = { icon: TwitterIcon, name: "", link: "/home" };
navLines[1] = { icon: HomeIcon, name: "Home", link: "/home" };
navLines[2] = { icon: ExploreIcon, name: "Explore", link: "/home" };
navLines[3] = {
  icon: NotificationsNoneIcon,
  name: "Notification",
  link: "/home",
  noticeNumber: 111,
};
navLines[4] = { icon: EmailOutlinedIcon, name: "Messages", link: "/home" };
navLines[5] = {
  icon: BookmarkBorderOutlinedIcon,
  name: "Bookmarks",
  link: "/home",
};
navLines[6] = {
  icon: StarsOutlinedIcon,
  name: "Twitter Blue",
  link: "/home",
};
navLines[7] = { icon: Person2OutlinedIcon, name: "Profile", link: "/home" };

//Styled components
const Container = tw.div` w-20 md:w-60 `;
//React Module
const NavSidebar = () => {
  const Button = tw.button` bg-pink-700 py-2 text-xl rounded-3xl mt-4 hover:bg-pink-800 w-full`;
  return (
    <Container>
      {navLines.map((item,id) => (
        <NavLine key={id} data={item} />
      ))}
      <MoreButton/>
      <Button>Tweet</Button>
    </Container>
  );
};
export default NavSidebar;
