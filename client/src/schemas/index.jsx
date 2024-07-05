import * as Yup from "yup"

export const signUpSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("Please Enter name"),
    email:Yup.string().email().required("enter email"),
    password:Yup.string().min(6).required("enter your password"),
    confirm_password:Yup.string().required().oneOf([Yup.ref('password'), null] , "Password must match")
});