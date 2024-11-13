import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const Jumbotron = (props) => {
	
	return (
    <div className="jumbotron">
        <h1 className="display-4">{props.title}</h1>
        <hr className="my-4"/>
            <p>{props.description}</p>
            <p className="lead">
             <a className="btn btn-primary btn-lg" href={props.buttonUrl} role="button">{props.buttonLabel}</a>
            </p>
    </div>
	);
};
Jumbotron.propTypes = {
	title: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,

	
};


export default Jumbotron;