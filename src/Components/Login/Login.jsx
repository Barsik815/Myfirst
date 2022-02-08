import React from "react"
import s from "./../FormsControls/FormsControls.module.css"
import {reduxForm} from "redux-form";
import {createField, Input} from "../FormsControls/FormsControls";
import {requiredField} from "../../Utils/Validators/validator";
import {connect} from "react-redux";
import {login} from "../../Redux/AuthReducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const onSubmit = (formData) =>{
    props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth) {return <Redirect to={"/profile"}/>}
    return <div>
        <h1>Login page</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const LoginForm = ({handleSubmit,error }) => {
    return <form onSubmit={handleSubmit}>
        {createField("text", "Email", "email", Input, [requiredField] )}
        {createField("password", "Password", "password", Input, [requiredField] )}
        {createField("checkbox", "", "rememberMe", Input, [], "remember me" )}
    <div>
        {error && <div className={s.formSummeryError}>{error}</div>}
        <button>Login</button>
    </div>
</form>
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const mapStateToProps = (state)=>({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)