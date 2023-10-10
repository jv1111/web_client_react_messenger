const showErrorMessage = (errorMessage, setErrorMessage) => {
    setErrorMessage(errorMessage);
    setTimeout(()=>{
        setErrorMessage("");
    }, 2000);
}

export default showErrorMessage;