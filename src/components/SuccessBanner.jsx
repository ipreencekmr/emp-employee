import React from "react";
import PropTypes from "prop-types";

export const SuccessBanner = ({ title, message }) => {
    return (
        <div className="alert alert-success alert-dismissible fade show m-2" role="alert">
            <h4 className="alert-heading">{title}!</h4>
            <p>{message}</p>
            <button 
                type="button" 
                className="btn-close" 
                data-bs-dismiss="alert" 
                aria-label="Close"></button>
        </div>
    )
};

SuccessBanner.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string
};

SuccessBanner.defaultProps = {
    title: "Success",
    message: "You have successfully updated record"
};