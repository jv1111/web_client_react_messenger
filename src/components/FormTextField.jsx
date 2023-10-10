import React from "react";

const FormTextField = (props) => {
    //{...props} = all props
    return(
        <div className="inputBox">
            <input type="text" required="required" {...props} />
            <label className="inputLabel">{props.label}</label>
            <div className="line"></div>
        </div>
    )
}

export default FormTextField