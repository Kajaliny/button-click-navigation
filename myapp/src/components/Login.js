import { useNavigate}  from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();
    const authenticate=()=>{
        navigate('/dash')

    }
    return(
        <div>
            <h1> Login here</h1>
            
            Username : <input type="text" /> <br/>
            Password : <input type="password" /><br/> <br/> 
            <button onClick={authenticate}> Login</button> 
            
        </div>
    );
}