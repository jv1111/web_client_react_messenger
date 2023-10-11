import * as yup from "yup"

const UserValidationSchema = yup.object().shape({

    //those strings are the error message
    username: yup.string()
        .min(3, "Username must be at least 3 characters long")
        .required("Username is requred"),

    email: yup.string()
        .email("Invalid email address")
        .required("Email is required"),

    password: yup.string()
        .min(8, "Password must be at least 8 characters long")
        .matches(/[A-Z]/, 'Password must contain at least one uppercase')
        .matches(/[a-z]/, 'Password must contain at least one lowercase')
        .matches(/(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]/, 'Password must be alphanumeric')
        .required("Password is required")
})

export default UserValidationSchema