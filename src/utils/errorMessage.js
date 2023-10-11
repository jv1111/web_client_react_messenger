const showErrorMessage = (response, setErrorMessage) => {
    if(response.response){
        setErrorMessage(response.response.data.error)
    }else{
        setErrorMessage(response.message)
    }
    setTimeout(()=>{
        setErrorMessage("");
    }, 2000);
}

export default showErrorMessage;