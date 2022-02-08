import React from "react";
import s from "./FormsControls.module.css";
import {Field} from "redux-form";

const FormControl = ({meta: {touched, error}, children}) => {
    let hasError = touched && error;
    return <div className={s.formControl + " " + (hasError ? s.error : "")}>
        <div>
            {children}
        </div>
        <div>{hasError && <span>{error}</span>}</div>
    </div>
}
export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea{...input} {...restProps}/></FormControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl{...props}><input {...input} {...restProps}/></FormControl>
}
export const createField = (type, placeholder, name, component, validators, text) => {
    return <div><Field type={type} placeholder={placeholder} name={name} component={component}
                       validate={validators}/>{text}</div>
}

