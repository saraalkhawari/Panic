import React from "react";
import '../../App.css'
import background from '../Images/BGUpS.png'
import { Link } from "react-router-dom";
import PIForm from "../PIForm";



//Screening will display PI form
//then (Part A Q ) then(Part 5 Q) then(Part B Q)

// will pass the value of screening resaults throgh the pages

//IMPORTANT !!!
// will tarce the answers of the user and fitch them to an xcl file 

function Screening() {



    return (
        <>
            <div  >
                <img src={background} alt="background" className="background" />
                <div>Screening Page</div>
                <PIForm/>
                <Link to='Home'> Home </Link>
            </div>
        </>
    );
}

export default Screening; 