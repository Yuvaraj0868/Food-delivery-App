import React, { useState } from "react";
import "./Home.css"
import Header from "../../Components/Header/Header";
import Exploremenu from "../../Components/Exploremenu/Exploremenu";
import FoodDisplay from "../../Components/Fooddisplay/Fooddisplay";
import Appdownload from "../../Components/MobileApp/Appdownload";
const Home=()=>{

    const [category,setCategory]=useState("All")
    return(
        <div>
            <Header/>
            <Exploremenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category}/>
            <Appdownload/>
        </div>
    )
}
export default Home;