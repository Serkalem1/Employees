import { useNavigate } from "react-router"

export default function Header(props) {
    const navigate = useNavigate()
    return (
        <div style={{ textAlign: "center", display:"flex", alignItems: "center" }}>
            
            {window.location.pathname !== '/' &&
                <div  onClick={()=>{
                navigate('/')
            }}
            style={{paddingRight: "20px", paddingLeft: "10px", fontSize: "20px", fontWeight: "800", cursor:"pointer"}}>
                {"<"}
            </div>
            }

            <div style={{}}>
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}