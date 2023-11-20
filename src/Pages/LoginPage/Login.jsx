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
import "./login.css";
import logo from "../../assets/jntuk.png";
import LoginTextfield from "./TextFiled.jsx";
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

const Login = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState(false);
  

  const formik = useFormik({
    initialValues: {
      password: "",
      username: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required(`${t("Please Enter Password")}`),
      username: Yup.string().required(`${t("Please Enter Username")}`),
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
    navigate("/otp");
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
          <img src={logo} width="95px" height="90px" alt="Logo" />
          <Typography color={"#214C55"} fontSize={"1.2rem"} fontWeight={"bold"}>
            Online Evaluation
          </Typography>
          <Typography
            className="mb-4"
            color={"#45AEAE"}
            fontSize={"1.1rem"}
            fontWeight={"bold"}
          >
            Valuters Portal
          </Typography>
        </div>
        <form
          autoComplete="none"
          onSubmit={formik.handleSubmit}
          style={{ width: "100%" }}
        >
          {/* <input
          type="text"
          name="username"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`username ${formik.touched.username && formik.errors.username ? 'mb-1':'mb-4'}`}
          placeholder="Username/Email ID"
          autoComplete="off"
        /> */}
          <LoginTextfield
            value={formik.values.email}
            fullWidth
            style={{ width: "100%" }}
            name="username"
            onChange={formik.handleChange}
            autoComplete="off"
            error={formik.touched.username && formik.errors.username}
            onBlur={formik.handleBlur}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={userImage} width={"15px"} height={"15px"} />
                </InputAdornment>
              ),
            }}
            className={`${
              formik.touched.username && formik.errors.username
                ? "mb-1 w-100"
                : "mb-4 w-100"
            }`}
            placeholder="Username/Email ID"
          />
          {formik.touched.username && formik.errors.username && (
            <FormHelperText className={`${classes.helperText} mb-1`}>
              {formik.touched.username && formik.errors.username}
            </FormHelperText>
          )}
          {/* <input type="password" name='password' className="password mb-1"  value={formik.values.password}
                onChange={formik.handleChange}
                
                onBlur={formik.handleBlur} placeholder="Password" autoComplete="off"/> */}
          <LoginTextfield
            fullWidth
            style={{ width: "100%" }}
            error={formik.touched.password && formik.errors.password}
            type="password"
            name="password"
            className="mb-1"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Password"
            autoComplete="off"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={passImage} width={"15px"} height={"15px"} />
                </InputAdornment>
              ),
            }}
          />
          {formik.touched.password && formik.errors.password && (
            <FormHelperText className={classes.helperText}>
              {formik.touched.password && formik.errors.password}
            </FormHelperText>
          )}
          <div className="remember mb-5">
            {/* <div className="d-flex align-items-center">
              <label className="label">
                Remember
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div> */}
            <div className="forgot">
              <Button
                variant="text"
                style={{
                  color: "#45AEAE",
                  textTransform: "none",
                  padding: 0,
                  marginTop: "-2px",
                }}
                onClick={()=>{
                  navigate('/forgotpassword')
                }}
              >
                Forgot Password?
              </Button>
            </div>
          </div>
          <div
            style={{ fontSize: "14px" }}
            className="d-flex justify-content-center mb-4"
          >
            <Button
              variant="text"
              style={{
                color: "#45AEAE",
                textTransform: "none",
                padding: 0,
                marginTop: "-2px",
              }}
              onClick={()=>{
                navigate('/registration')
              }}
            >
              Register here,{" "}
            </Button>{" "}
            if not registered yet
          </div>
          <button className="btn btn-app" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
