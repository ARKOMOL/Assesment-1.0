import {useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';


import Spinner from '../Spinner/Spinner';
import auth from '../../Shared/Firebase/Firebase.init';

const Login = () => {
  const[user] = useAuthState(auth)

   
    const navigate =useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';



    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);



    if (gLoading) {
    return <Spinner/>
}



  
    if (user) {
        navigate(from,{replace:true})
    }
 
    return (
        <div>
        <div className='login-container '>
            <div>
                <h2 className='form-title text-center text-4xl'>Login</h2>
                
        
                <p>
                    New to Dentist Ace? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
               
                <button className='hover:bg-sky-700' onClick={()=> signInWithGoogle()}> Google</button>
                {/* <button  onClick={()=> signInWithFacebook()}> Facebook</button> */}
                   
            </div>
        </div>
        <ToastContainer/>
     
        </div>
    );
};

export default Login;