import * as Yup from "yup";
export const SignInSchema = Yup.object({
    email: Yup.string().email().required("Please enter Email"),
    password:Yup.string().required("Please Enter Your Password")
  });
  