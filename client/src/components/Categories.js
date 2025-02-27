import React from "react";
import './Categories.css';
import furnitureImage from "../images/furniture.jpg"
import techImage from "../images/tech.jpg"
import clothingImage from "../images/clothing.jpg"
import jewelryImage from  "../images/jewelry.jpg"

const Categories = () => {
    return (

        <div className="categoryboxes">

            <div>
                <h3>Furniture</h3>
                <img src={furnitureImage} />
            </div>
            <div>
                <h3>Tech</h3>
                <img src={techImage} />
            </div>
            <div>
                <h3>Clothing</h3>
                <img src={clothingImage} />
            </div>
            <div>
                <h3>Jewelry</h3>   
                <img src={jewelryImage} />
            </div>
        </div>
    )
}

export default Categories;