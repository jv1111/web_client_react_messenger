import React from "react";
import {Navigate, Outlet} from "react-router-dom"

const ProtectedRoute = ({
    isAllowed,
    redirectPath
}) => {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace/>
    }
    return <Outlet /> // Renders the child components inside the parent route.
}

export default ProtectedRoute