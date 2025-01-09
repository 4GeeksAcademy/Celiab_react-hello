import React from "react";
import BootstrapCard from "./card";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Footer from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
   
    <div className="container-fluid " >
      {/* NAVBAR */}
      {/* <div> */}
        <Navbar 
		name="Bootstrap"
		firstSelector="Home"
		secondSelector="About"
		thirdSelector="Services"
		fourthSelector="Contact"
		/>
      {/* </div> */}

      {/* JUMBOTRON */}
      <div className="p-4 mt-5">
        <Jumbotron
    title= {"A Warm Welcome!"}
    description= {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
	  buttonUrl= {"https://en.wikipedia.org/wiki/Lorem_ipsum"}
	  buttonLabel= {"Call to Action"}/>
      </div>

      {/* CARDS */}
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <BootstrapCard
              title={"Card Title"}
              imageUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" }
              description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
              buttonUrl={"https://en.wikipedia.org/wiki/Lorem_ipsum"}
              buttonLabel={"Go to wikipedia"}
            />
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3">
            <BootstrapCard
              title={"Card Title"}
              imageUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"}
              description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
              buttonUrl={"https://en.wikipedia.org/wiki/Lorem_ipsum"}
              buttonLabel={"Go to wikipedia"}
            />
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3">
            <BootstrapCard
              title={"Card Title"}
              imageUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"}
              description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
              buttonUrl={"https://en.wikipedia.org/wiki/Lorem_ipsum"}
              buttonLabel={"Go to wikipedia"}
            />
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3">
            <BootstrapCard
              title={"Card Title"}
              imageUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"}
              description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
              buttonUrl={"https://en.wikipedia.org/wiki/Lorem_ipsum"}
              buttonLabel={"Go to wikipedia"}
            />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div>
        <Footer
        info="Copyright 2022"/>
      </div>
    </div>
  );
};

export default Home;
