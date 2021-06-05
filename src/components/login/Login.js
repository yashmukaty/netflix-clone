import Nav from '../nav/Nav';
import LoginForm from './LoginForm';

function Login(){
    return(
        <div className="main">
            {/* Nav */}
            <Nav />
            {/* End Nav */}
            {/* Login Form */}
            <LoginForm />
            {/* End Login Form */}
            </div>
    );
}
export default Login;