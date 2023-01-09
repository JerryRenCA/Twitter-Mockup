import React, { useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import MoreButtonPopup from "./MoreButtonPopup";

//Styled Components
const Wrapper = tw.div`hover:bg-gray-800 hover:rounded-2xl cursor-pointer px-4 py-2 ml-3 relative`;
const MoreButton = () => {
  const [isShowPopup,setIsShowPopup] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  function useOutsideAlerter(ref: React.RefObject<any>) {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsShowPopup(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(divRef);
  const handlePopup=()=>{setIsShowPopup(true)}
  return (
      <Wrapper>
        <div className="text-2xl" onClick={handlePopup}>
          <MoreHorizOutlinedIcon fontSize="inherit"/>
          <span className="pl-5 hidden md:inline">More</span>
        </div>
        {isShowPopup && (<div ref={divRef}><MoreButtonPopup /></div>)}
      </Wrapper>
  );
};
export default MoreButton;
