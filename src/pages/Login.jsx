import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { postLoginHandler } from "../api";
import TextFieldFormInput from "../components/atoms/TextFieldFormInput";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginFormInput, setLoginFormInput] = useState({
    emailAddress: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [invalidCredentialError, setInvalidCredentialError] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const fieldsOnForm = ["emailAddress", "password"];
  const navigate = useNavigate();

  function emailAndPasswordProvided() {
    const foundErrors = {};
    if (!loginFormInput.emailAddress.trim())
      foundErrors.emailAddress = "Please provide your email address";
    if (!loginFormInput.password.trim())
      foundErrors.password = "Please provide your password";

    setErrors(foundErrors);
    return Object.keys(errors).length === 0;
  }

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setSubmitDisabled(true);
    if (emailAndPasswordProvided()) {
      postLoginHandler(loginFormInput)
        .then(() => {
          setLoginFormInput({
            emailAddress: "",
            password: "",
          });

          navigate("/welcome");
        })
        .catch((err) => {
          console.log(err);
          setInvalidCredentialError(true);
          setSubmitDisabled(false);
        });
    } else {
      setSubmitDisabled(false);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      minWidth="100vw"
      bgcolor="#f5f5f5"
    >
      <Card sx={{ width: 400, boxShadow: 6 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Log in to your account
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            {fieldsOnForm.map((fieldName) => {
              return (
                <div key={fieldName}>
                  <TextFieldFormInput
                    formInput={loginFormInput}
                    setFormInput={setLoginFormInput}
                    fieldName={fieldName}
                    errors={errors}
                  ></TextFieldFormInput>
                </div>
              );
            })}
            {invalidCredentialError && (
              <Alert severity="error">Incorrect username or password.</Alert>
            )}
            <Button
              type="submit"
              disabled={!!submitDisabled}
              fullWidth
              sx={{ mt: 2 }}
            >
              Log In
            </Button>
          </form>
          <br />
          <div>
            Don't have an account?{" "}
            <Link
              href="/register"
              underline="hover"
              aria-label="Register a new account"
            >
              Sign up.
            </Link>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;
