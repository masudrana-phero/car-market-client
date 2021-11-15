import React from "react";
import Appbar from "../../Shared/Appbar/Appbar";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import HomeService from "../HomeService/HomeService";
import Review from "../Review/Review";

const Home = () => {
  return (
    <>
      <Appbar></Appbar>
      <Banner></Banner>
      <HomeService></HomeService>
      <Review></Review>
      <Footer></Footer>
    </>
  );
};

export default Home;
