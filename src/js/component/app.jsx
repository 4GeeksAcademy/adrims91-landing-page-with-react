import React from "react";
import Cards from "./Cards";
import Jumbotron from "./Jumbotron";
import NavBar from "./NavBar";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <div className="container">
        <NavBar
          items={[
            { label: "Home", url: "#", extraClass: "text-white" },
            { label: "About", url: "#", extraClass: "text-white-50" },
            { label: "Services", url: "#", extraClass: "text-white-50" },
            { label: "Contact", url: "#", extraClass: "text-white-50" },
          ]}
          brand={"Start Bootstrap"}
          brandUrl={"#"}
        />
        <Jumbotron
          heading={"A Warn Welcome!"}
          lead={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, ducimus sequi? Laudantium fugit aliquid laborum quis quidem doloribus, explicabo, quasi beatae, molestiae aliquam veniam delectus unde quaerat voluptatem ipsum itaque."
          }
          button={"Call to action!"}
        />
        <div className="row row-cols-12 row-cols-md-5 text-center justify-content-between">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
        <Footer
          paragraph={'Copyright @ Your Website 2019'} 
        />
      </div>
    </>
  );
};

export default App;
