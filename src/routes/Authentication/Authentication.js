import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";
import './Authentication.scss'


const Authentication = () => {
    return (
        <div className='container authentication'>
            <SignInForm/>
            <SignUpForm/>
        </div>
    );
};

export default Authentication;
