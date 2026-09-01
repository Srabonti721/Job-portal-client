import { Lottie } from "lottie-react";
import { use } from "react";
import lottiesRegister from "../../assets/lotties/Register.json";
import { AuthContext } from "../../context/AuthProvider";
import SocialLogin from "../Shared/SocialLogin";
const Regsiter = () => {
    const { createUser } = use(AuthContext);
    

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // firebase authentication
        createUser(email ,password)
        .then(result=>{
            console.log(result.user);
            
        })
        .catch(error=>{
            console.log(error);
            
        })

    };
    return (
        <div className="hero bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie
                        src={lottiesRegister}
                        style={{ width: "300px" }}
                        loop={true}
                        autoplay
                    ></Lottie>
                </div>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset py-8">
                                <h1 className="text-5xl font-bold text-center text-green-300">
                                    Register now!
                                </h1>
                                <label className="label">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    className="input w-full "
                                    placeholder="Email"
                                />
                                <label className="label">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    className="input w-full"
                                    placeholder="Password"
                                />
                                <div>
                                    <a className="link link-hover">
                                        Forgot password?
                                    </a>
                                </div>
                                <button className="btn btn-neutral mt-4">
                                    Register
                                </button>
                            </fieldset>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Regsiter;
