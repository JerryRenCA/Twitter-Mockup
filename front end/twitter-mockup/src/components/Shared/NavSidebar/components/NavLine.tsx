import React from "react";
import tw from "tailwind-styled-components";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

// React Module Types
export type T_NavLine = {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  name: string;
  link: string;
  noticeNumber?: number;
};
// Styled Components
interface divProps {
  $fs: string | undefined;
}
const Container = tw.div` w-20 md:w-60  p-2 text-2xl`;
const Wrapper = tw.div`hover:bg-gray-900 hover:rounded-2xl py-1 cursor-pointer px-4`;
const NotiNumber = tw.span`text-red-800 absolute text-[10px] left-6 top-[-8px] font-bold`;
// React Module
const NavLine = ({ data }: { data: T_NavLine }) => {
  let showNotice;
  if (data.noticeNumber)
    showNotice = data.noticeNumber > 99 ? "99" : data.noticeNumber?.toString();
  return (
    <Container>
      <Wrapper>
        <a href={data.link}>
          <div className="inline relative text-3xl">
            <data.icon fontSize={"inherit"} className="hover:text-black" titleAccess={data.name}/>
            {<NotiNumber>{showNotice}</NotiNumber>}
          </div>
          <span className="pl-4 hidden md:inline">{data.name}</span>
        </a>
      </Wrapper>
    </Container>
  );
};
export default NavLine;
