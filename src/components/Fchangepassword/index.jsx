import { useState, useCallback, useEffect } from "react";
// import LoadingSpinner from "../../components/Common/Spinner";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../utils/constants";
import { toast } from "react-toastify";
import {
  Box,
  CircularProgress,
  TextField,
  Typography,
  FilledInput,
  FormControl,
  FormControlLabel,
  Radio,
  Button,
  FormHelperText,
  InputAdornment,
  IconButton,
  Switch,
  Stack,
  Backdrop,
} from "@mui/material";
import axios from "axios";
import { styled } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Heart from "../../components/Common/Heart";
import { useSelector, useDispatch } from "react-redux";
import { setVal } from "../../store/slices/app.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "../../Pages/LoginPage/login.css";
import logo from "../../assets/jntuk.png";
import LoginTextfield from "../../Pages/LoginPage/TextFiled.jsx";
import userImage from "../../assets/user-solid@2x.png";
import passImage from "../../assets/key-solid.png";
const useStyles = makeStyles(() => ({
  noBorder: {
    border: "none",
    borderRadius: "5px",
  },
  label: {
    fontSize: "10px",
  },
  helperText: {
    // Your styles for the helper text
    color: "#d32f2f",
    marginLeft: "0.2rem",
    marginBottom: "-0.4rem",
  },
}));
const CustomTextField = styled(TextField)({
  boxShadow: "0px 0px 3px 2px rgba(0, 0, 0, 0.1)",
  borderRadius: "5px",
  "& .MuiTypography-root": {
    // marginTop: '-1rem'
  },
});

const Fchangepassword = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState(false);
  

  const formik = useFormik({
    initialValues: {
      password: "",
      repassword:"",
      
    },
    validationSchema: Yup.object({
      
        password: Yup.string().required(`${t("Please Enter Password")}`),
        repassword: Yup.string().required(`${t("Please Enter Re-Password")}`),
       
    }),
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        handleSubmit();
        setSubmitting(false);
      }, 10);
    },
  });
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(process.env.REACT_APP_API_KEY)
  useEffect(() => {
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("login");
  }, []);

  const handleSubmit = () => {
    toast.success("Your password has been changed successfully")
    navigate("/");
    //   if(formik.values.email && formik.values.password){
    //     sessionStorage.setItem('name',formik.values.email)
    //     setLoad(true)
    //   axios.post('/api/user/auth/token',{
    //     emailAddress: formik.values.email,
    //     password:formik.values.password
    //   }).then(res=>{
    //     const data = JSON.stringify(res.data)
    //       sessionStorage?.setItem('login',data)
    //     if(res?.data?.data?.accessToken?.length){
    //       navigate('/dashboard')
    //     }
    //   }).catch(err=>{
    //     toast.error(err?.response?.data?.error?.message)
    //     setLoad(false)
    //   })
    // }
    // else{

    // }
  };
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleChange = (e) => {
    setLang(e.target.checked);
    if (e.target.checked === false) {
      i18next.changeLanguage("en");
    }
    if (e.target.checked === true) {
      i18next.changeLanguage("fr");
    }
    sessionStorage.setItem("lang", e.target.checked);
  };
  useEffect(() => {
    const lang = sessionStorage.getItem("lang");
    if (lang != null && lang != undefined) {
      if (lang === false) {
        i18next.changeLanguage("en");
      }
      if (lang === true) {
        i18next.changeLanguage("fr");
      }
      setLang(lang === "true" ? true : false);
      // console.log(lang)
    }
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const Loader = () => {
    return (
      <Backdrop open={true}>
        <Heart />
      </Backdrop>
    );
  };
  const [load, setLoad] = useState(false);
  const isLoading = load;
  return (
    <div className="backImg container-fluid">
      <div className="page p-4 rounded-4">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <Typography
            className="mb-4"
            color={"#45AEAE"}
            fontSize={"1.1rem"}
            fontWeight={"bold"}
          >
            Change Your Password
          </Typography>
        </div>
        <form
          autoComplete="none"
          onSubmit={formik.handleSubmit}
          style={{ width: "100%" }}
        >











         
          <LoginTextfield
            value={formik.values.email}
            fullWidth
            style={{ width: "100%" }}
            name="password"
            onChange={formik.handleChange}
            autoComplete="off"
            error={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
            
            className={`${
              formik.touched.password && formik.errors.password
                ? "mb-1 w-100"
                : "mb-4 w-100"
            }`}
            placeholder="Password"
          />
          {formik.touched.password && formik.errors.password && (
            <FormHelperText className={`${classes.helperText} mb-1`}>
              {formik.touched.password && formik.errors.password}
            </FormHelperText>
          )}




<LoginTextfield
            value={formik.values.email}
            fullWidth
            style={{ width: "100%" }}
            name="repassword"
            onChange={formik.handleChange}
            autoComplete="off"
            error={formik.touched.repassword && formik.errors.repassword}
            onBlur={formik.handleBlur}
            
            className={`${
              formik.touched.repassword && formik.errors.repassword
                ? "mb-1 w-100"
                : "mb-4 w-100"
            }`}
            placeholder="Re-password"
          />
          {formik.touched.repassword && formik.errors.repassword && (
            <FormHelperText className={`${classes.helperText} mb-1`}>
              {formik.touched.repassword && formik.errors.repassword}
            </FormHelperText>
          )}
          
          
          
          <div
            style={{ fontSize: "14px" }}
            className="d-flex justify-content-center mb-4"
          >
            
          </div>
          <button className="btn btn-app" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Fchangepassword;
