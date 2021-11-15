import React from "react";
import Appbar from "../../Shared/Appbar/Appbar";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import HomeService from "../HomeService/HomeService";
import Review from "../Review/Review";
import './Home.css';

const Home = () => {
  return (
    <div className="bg-color">
      <Appbar></Appbar>
      <Banner></Banner>
      <HomeService></HomeService>
      <Review></Review>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
