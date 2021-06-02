import React from 'react'
import './ServiceCard.css';
import { Card, } from 'antd';


 const ServicesCard = ({ image, name, weight, price, seeding, cutting }) => {
    return (
        <div id="serviceCardPath" className='cardd'>
            <Card  className="card" >
                <div className="image">
                    <img  className="card-image" src={image} alt="images" />
                
                </div >
                <h2 className="product-name">  {name }</h2> 
                <div className="details">
                <h3 className="price">Price : {price}</h3>
                <h4 className="weight">Weight: {weight}</h4> 
                <p className="seeding">Time of Seeding: {seeding}</p>
                <p className="cutting">Time of Cutting: {cutting}</p>
                </div>
               
            </Card>
        </div>
    )
}
export default ServicesCard;

