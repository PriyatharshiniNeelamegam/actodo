import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props) {
    const navigate = useNavigate()
    const users = props.users
    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()
    const [ruser, setRuser] = useState()
    
    function Checkuser() {
        var userfound=false
        users.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {
                console.log("Login Successfull")
                userfound=true
                navigate("/landing",{state:{users:eusername}})
            }
            if(userfound===true){
                console.log("Login failed")
                setRuser(false)
            }
        }
        )

    }
    function handleUInput(evt) {
        setEusername(evt.target.value)
    }
    function handlePInput(evt) {
        setEpassword(evt.target.value)
    }
    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {ruser ? <p>I help you manage your activities after you login:)</p> : <p className="text-red-400">Please signup before you login</p>}
                <div className="flex flex-col gap-2 my-2">
                    <input type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="username" onChange={handleUInput} />
                    <input type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="password" onChange={handlePInput} />

                    <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={Checkuser}>Login</button>
                    <p>Don't you have an account?<Link to={"/signup"} className="underline">Signup</Link></p>
                </div>
            </div>
        </div>)
}
export default Login