import { useNavigate}  from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();
    const authenticate=()=>{
        navigate('/dash')
        
    }
}