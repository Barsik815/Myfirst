import React from "react"
import s from "./../FormsControls/FormsControls.module.css"
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormsControls/FormsControls";
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
const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
    <div><Field type="text" placeholder={"Email"} name={"email"} component={Input}
                validate={[requiredField]}/></div>
    <div><Field type="password" placeholder={"password"} name={"password"} component={Input}
                validate={[requiredField]}/></div>
    <div><Field component={Input} name={"rememberMe"}type="checkbox"/>remember me</div>
    <div>
        {props.error && <div className={s.formSummeryError}>{props.error}</div>}
        <button>Login</button>
    </div>
</form>
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const mapStateToProps = (state)=>({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)