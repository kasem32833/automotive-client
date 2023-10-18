import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { NavLink } from "react-router-dom";



const Register = () => {

    
  const handleRegister = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value;
    const password = form.password.value;
    console.log( email, password);
    createUserWithEmailAndPassword(auth, email, password)
    .then(result=>{
        console.log(result.user)
    })
    .catch(error=>{
        console.log(error.message)
    })
  };


  return (
    <div>
      
      <div className="hero min-h-screen bg-neutral-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit = {handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                <p>If You already have an account please <NavLink to='/login' className="px-2 py-1 bg-black rounded-md text-white">Login</NavLink></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
