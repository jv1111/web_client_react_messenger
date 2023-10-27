
const apiErrorHandler = (error) => {
    console.log(error);
    if(error.response.status == 500) return { systemError: true, message: "Something went wrong" };
    if(error.response) return error.response.data
}

export {
    apiErrorHandler
}