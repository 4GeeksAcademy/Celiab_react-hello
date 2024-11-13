import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const Footer = (props) => {
	
	return (
        
        <footer className="bg-dark text-white text-lg-start fixed-bottom ">
 
        <div className= "text text-center pt-1">
            <p>{props.info}</p> 
           
        </div>
 
        </footer>
    
	);
};
Footer.propTypes = {
	info: PropType.string,
	
	
};


export default Footer;