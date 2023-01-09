import React, { useState } from "react";
import tw from "tailwind-styled-components";
import NavLine, { T_NavLine } from "./NavLine";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
//Module types
export type T_Props = {
  title: string;
  subItems: T_NavLine[];
};
//Styled Components
const Container = tw.div``;
const Wrapper = tw.div``;
const SubHeader = tw.div`text-lg flex justify-between p-3 hover:bg-gray-900`;
const SubBody = tw.div``;

const MoreButtonPopupExpandButton = ({ title, subItems }: T_Props) => {
  const [isOpen,setIsOpen]=useState(true)

  const iconStyle=isOpen?"text-white rotate-180":"text-red-900 ";
  const listItemStyle=isOpen?"h-0":""
  const handleExpand=()=>{setIsOpen(!isOpen)}
  return (
    <Container>
      <Wrapper>
        <SubHeader onClick={handleExpand} >
          <span>{title}</span>
          <div className={" ease-in-out duration-500 transition "+iconStyle}>
          <KeyboardArrowUpOutlinedIcon />
          </div>
        </SubHeader>
        <SubBody className={"bg-red-900 overflow-hidden  ease-in-out duration-500 transition "+listItemStyle}>
          {subItems.map((item, id) => (
            <div key={id} className="p-3 text-md hover:bg-gray-800">
              <a href={item.link}>
                <item.icon />
                <span className="px-2">{item.name}</span>
              </a>
            </div>
          ))}
        </SubBody>
      </Wrapper>
    </Container>
  );
};
export default MoreButtonPopupExpandButton;
