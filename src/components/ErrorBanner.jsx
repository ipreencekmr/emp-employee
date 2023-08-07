import React from "react";
import PropTypes from "prop-types";

export const ErrorBanner = ({ title, message }) => {
    return ( 
        <div className="alert alert-danger alert-dismissible fade show m-2" 
            role="alert">
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

ErrorBanner.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string
};

ErrorBanner.defaultProps = {
    title: "Error",
    message: "Something went wrong! Please try again"
};