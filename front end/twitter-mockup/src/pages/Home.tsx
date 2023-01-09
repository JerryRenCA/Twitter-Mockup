import React from "react";
import tw from "tailwind-styled-components";
import NavSidebar from "../components/Shared/NavSidebar/NavSidebar";
import RightAside from "../components/Shared/RightAside/RightAside";
import HomeContent from "../components/Home/HomeContent";

const Container = tw.div``;

const Home = () => {
  return (
    <Container>
      <NavSidebar/>
      <HomeContent />
      <RightAside />
    </Container>
  );
};
export default Home;
