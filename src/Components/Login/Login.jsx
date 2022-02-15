import React, {useEffect} from "react"
import s from "./../FormsControls/FormsControls.module.css"
import {reduxForm} from "redux-form";
import {createField, Input} from "../FormsControls/FormsControls";
import {requiredField} from "../../Utils/Validators/validator";
import {connect} from "react-redux";
import {login} from "../../Redux/AuthReducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login page</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return <form onSubmit={handleSubmit}>
        {createField("text", "Email", "email", Input, [requiredField])}
        {createField("password", "Password", "password", Input, [requiredField])}
        {createField("checkbox", "", "rememberMe", Input, [], "remember me")}
        {captchaUrl && <img src={captchaUrl} alt={""}/>}
        {captchaUrl && createField("text", "Captcha", "captcha", Input, [requiredField])}
        <div>
            {error && <div className={s.formSummeryError}>{error}</div>}
            <button>Login</button>
        </div>
    </form>
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)