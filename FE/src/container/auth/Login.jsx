import { useFormik }  from "formik";
import * as Yup from 'yup';
import {Link, useNavigate} from 'react-router-dom';
import { actLogin } from "./module/action";
import { useDispatch,useSelector } from "react-redux";


const Login = (values) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues : {
      username : "",
      password : ""
    },
    validationSchema : Yup.object({
      username : Yup.string().required("Bắt buộc").min(4, "Tên người dùng phải hơn 4 kí tự"),
      password : Yup.string().required("Bắt buộc").matches( /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/, "Mật khẩu phải trên 8 kí tự, bao  gồm chữ in hoa và kí tự đặc biệt")
    }),
    onSubmit: (values) => {
      window.alert("Dang nhap thanh cong");
      console.log(values.username);
    },   
    LogintReducer()
  });
  

  
  return (
    <div className="border-[1px] w-[80%] mx-auto mt-5">
            <h2 className="text-center">Login</h2>
        <form onSubmit={formik.handleSubmit} className="flex flex-col px-3  ">
        <label className="font-semibold text-[14px]"> Your name </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          placeholder="Enter your name"
          className="border-[1px] placeholder-slate-400 p-2 placeholder:text-sm"
        />
        {formik.errors.name && (
          <p className="text-red-500 text-[10px] italic"> {formik.errors.username} </p>
        )}
         <label className="font-semibold text-[14px]"> Password </label>
        <input
          type="text"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Enter your password"
          className="border-[1px] placeholder-slate-400 p-2 placeholder:text-sm"
        />
        {formik.errors.password && (
          <p className="text-red-500 text-[10px] italic"> {formik.errors.password} </p>
        )} 
        <button type="submit" className="w-1/3 bg-blue-500 text-white py-2 mx-auto mb-3 rounded-2xl hover:bg-blue-400" on>LOGIN</button>
       
        <div>
          <Link to='/signup'>Signup</Link>
        </div>
        </form>

    </div>
  )
}
export default Login