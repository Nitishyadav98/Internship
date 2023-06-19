import Navbar from "../Components/Navbar";

function ErrorPage(){
    return <>
        <Navbar/>
        <div>
            <h1>Some Error has occurred</h1>
            <p>Could Not find the page</p>
        </div>
    </>
}

export default ErrorPage;