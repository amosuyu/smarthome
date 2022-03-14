import { useFormik } from "formik";
import * as Yup from 'yup';




const SignupForm = () => {

  const formik = useFormik ({
    initialValues : {
      username : "",
      email : "",
      password : "",
      confirmedPassword  : ""
    },
    validationSchema : Yup.object ({
      name : Yup.string().required("Bắt buộc").min(4, "Tên người dùng phải hơn 4 kí tự"),
      email : Yup.string().required("Bắt buộc").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Email không hợp lệ"),
      password : Yup.string().required("Bắt buộc").matches( /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/, "Mật khẩu phải trên 8 kí tự, bao  gồm chữ in hoa và kí tự đặc biệt"),
      confirmedPassword : Yup.string().required("Bắt buộc").oneOf([Yup.ref("password"), null, "Mật khẩu không khớp, vui lòng nhập lại"])
    }),
    onSubmit : (values) =>{
      window.alert("Đăng kí thành công ")
      console.log(values)
    }
  })
  return (
    <section className="border-2 mx-auto w-[80%] mt-5">
      <h1 className="text-center">Sign Up</h1>
      <form className="flex flex-col  px-3 gap-2" onSubmit={formik.handleSubmit}>
        <label className="font-semibold text-[14px]"> Your name </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Enter your name"
          className="border-[1px] placeholder-slate-400 p-2 placeholder:text-sm"
        />
        {formik.errors.name && (
          <p className="text-red-500 text-[10px] italic"> {formik.errors.name} </p>
        )}
        <label className="font-semibold text-[14px]"> Email address </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter your email"
          className="border-[1px] placeholder-slate-400 p-2 placeholder:text-sm"
        />
        {formik.errors.email && (
          <p className="text-red-500 text-[10px] italic"> {formik.errors.email} </p>
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
        <label className="font-semibold text-[14px]"> Confirm Password </label>
        <input
          type="text"
          id="confirmedPassword"
          name="confirmedPassword"
          value={formik.values.confirmedPassword}
          onChange={formik.handleChange}
          placeholder="Confirm your password"
          className="border-[1px] placeholder-slate-400 p-2 placeholder:text-sm"
        />
        {formik.errors.confirmedPassword && (
          <p className="text-red-500 text-[10px] italic"> {formik.errors.confirmedPassword} </p>
        )}
        <button type="submit" className="py-2  mt-3 w-1/2 mx-auto rounded-xl text-white hover:bg-blue-700 bg-blue-500 mb-4"> Continue </button>
      </form>
    </section>
    )

}

export default SignupForm