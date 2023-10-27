const showErrorMessage = (message, setErrorMessage) => {
    setErrorMessage(message)
    setTimeout(()=>{
        setErrorMessage("");
    }, 2000);
}

export default showErrorMessage;