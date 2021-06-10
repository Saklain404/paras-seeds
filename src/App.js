import React from "react";
import "./App.css";
import Header from "./Screen/Header";
import ServiceCard from "./Components/ServiceCard";
import { Row, Col,} from "antd";
import Vardhan from "./assets/img/Vardhan.jpeg";
import Rani from "./assets/img/Rani.jpeg";
import Suri from "./assets/img/Suri.jpeg";
import Chamatkar from "./assets/img/Chamatkar.jpeg";
import Maharaja from "./assets/img/Maharaja.jpeg";
import Laxmi from "./assets/img/Laxmi.jpeg";
import Riya from "./assets/img/Riya.jpeg";
import Ananya from "./assets/img/Ananya.jpeg";
import Gautam from "./assets/img/Gautam.jpeg";
import Avtar from "./assets/img/Avtar.jpeg";
import DhariKing from "./assets/img/DhariKing.jpeg";
import Paras6242 from "./assets/img/Paras6242.jpeg";
import Paras1057 from "./assets/img/Paras1057.jpeg";
import Footer from "./Screen/Footer";

const App = () => {
  const products = [
    {
      image: Vardhan,
      name: "Hybrid F1 Tomato Vardhan",
      weight: "10gm",
      price: "₹1280",
      seeding: "15 Dec to 15 feb",
      cutting: "60 to 65 Days",
    },
    {
      image: Rani,
      name: "Rani Ridge Gourd F1 Hybrid",
      weight: "50gm",
      price: "₹700",
      seeding: "15 Dec to 16 march",
      cutting: "35 to 35 Days",
    },
    {
      image: Suri,
      name: "Suri Ridge Gourd F1 Hybrid",
      weight: "50gm",
      price: "₹500",
      seeding: "15 Dec to 16 March",
      cutting: "35 to 40 Days",
    },
    {
      image: Chamatkar,
      name: "Chamatkar Cucumber F1 Hybrid",
      weight: "10gm",
      price: "₹250",
      seeding: "15 Nov to 15 feb",
      cutting: "35 to 40 Days",
    },
    {
      image: Maharaja,
      name: "Cucumber F1 Maharaja",
      weight: "10gm",
      price: "₹260",
      seeding: "15 Nov to 15 feb",
      cutting: "35 to 40 Days",
    },
    {
      image: Laxmi,
      name: "Hybrid F1 Cauliflower Laxmi",
      weight: "10gm",
      price: "₹400",
      seeding: "15 June to 15 July",
      cutting: "55 to 60 Days",
    },
    {
      image: Riya,
      name: "Hybrid F1 Cauliflower Riya",
      weight: "10gm",
      price: "₹450",
      seeding: "15 June to 15 july",
      cutting: "55 to 60 Days",
    },
    {
      image: Ananya,
      name: "Hybrid F1 Cauliflower Ananya",
      weight: "10gm",
      price: "₹620",
      seeding: "15 July to 15 Aug",
      cutting: "70 to 75 Days",
    },
    {
      image: Gautam,
      name: "String Beans F1 Gautam",
      weight: "100gm",
      price: "₹280",
      seeding: "15 Feb to 15 Sep",
      cutting: "30 to 35 Days",
    },
    {
      image: Avtar,
      name: "F1 Bitter Gourd Avtar",
      weight: "50gm",
      price: "₹570",
      seeding: "15 Dec to 18 March",
      cutting: "45 to 55 Days",
    },
    {
      image: DhariKing,
      name: "Bottle Gourd F1 Dhari King",
      weight: "50gm",
      price: "₹420",
      seeding: "10 Feb to 15 Aug",
      cutting: "40 to 50 Days",
    },

    {
      image: Paras6242,
      name: "Paras 6242 Tomato F1 Hybrid",
      weight: "10gm",
      price: "₹1720",
      seeding: "15 Dec to 15 feb",
      cutting: "60 to 65 Days",
    },
    {
      image: Paras1057,
      name: "Paras 1057 Tomato F1 Hybrid",
      weight: "10gm",
      price: "₹1650",
      seeding: "15 Dec to 15 feb",
      cutting: "60 to 65 Days",
    },
  ];

  return (
    <div className="App">
      <Header />
      <p className="cmpny-name">Paras Seeds pvt. Ltd</p>
      <Row className="justification">
        {products.map((item, index) => (
          <Col 
          className="justification"
            {...{md: 12 , lg: 8, xl:8, xxl:6 }}
            
          >
            <ServiceCard {...item} key={index.toString()} />  
            {/* mapping */}
          </Col>
        ))}
      </Row>
      <Footer/>
    </div>
  );
};

export default App;
