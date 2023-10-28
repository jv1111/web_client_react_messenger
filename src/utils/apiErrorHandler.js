
const apiErrorHandler = (error) => {
    console.log(error);
    if(error.response.status == 500) return {
        error: "Something went wrong", 
        systemError: true,
    };
    if(error.response) return error.response.data
}

export {
    apiErrorHandler
}