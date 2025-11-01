import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const click = () => {
        var loginDetails = axios.post('http://localhost:3000', { "name": name, "password": password })

        loginDetails.then((data) => {
            if (data.data == true) {
                console.log("login Success")
                navigate("/success")
            }
            else {
                console.log("login failed")
                navigate("/fail")
            }
        })
    }

    return (
        <section className="flex flex-col h-screen justify-center items-center bg-[#101828]">
            <h1 className='text-yellow-600 text-3xl font-bold mb-14'>Backend Integration</h1>
            <div className="w-full max-w-sm bg-[#1E2939] rounded-lg shadow-lg shadow-white/5 border border-gray-500">
                <div className="px-6 py-4">

                    <h3 className="mt-3 text-xl font-medium text-center text-white">Welcome Back</h3>

                    <p className="mt-1 text-center text-gray-400">Login or create account</p>

                    <div>
                        <div className="w-full mt-4">
                            <input
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white outline-none rounded-lg " type="text" placeholder="kabilan"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="w-full mt-4">
                            <input
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white outline-none rounded-lg " type="text" placeholder="123"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="text-center mt-4">
                            <button
                                className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                onClick={click}
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login