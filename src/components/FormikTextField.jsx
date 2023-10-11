import React, { useState } from "react";
import { Field, ErrorMessage, useField } from "formik/dist"

const FormikTextField = ({...props}) => {

    return(
        <div>
            <div className="inputBox">
                <Field {...props} />
                <label className=""> {props.label} </label>
                <div className="line"></div>
            </div>
            <ErrorMessage
                    className="error"
                    name={props.name}
                    component="div"
                />
        </div>
        
    )
} 

export default FormikTextField