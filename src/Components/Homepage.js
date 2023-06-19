import { useNavigate } from "react-router-dom";

const HomePage = () =>{

const navigate = useNavigate();

const navigateHandler = ()=>{
    navigate('/about')
}

    return (
        <div className="w-screen bg-gray-500 min-h-screen">
            <div className="py-5 px-5 mx-1 flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md fond-bold text-3xl py-9 px1 h-6">iMeet Technology</div>
            {/* <button onClick={navigateHandler}>Navigate</button> */}
            <div className="flex h-80 bg-white-500 text-5xl items-center justify-center">Internship Program</div>
        </div>
    )
}

export default HomePage;