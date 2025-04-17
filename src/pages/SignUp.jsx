import React, { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Box,
  Link,
} from "@mui/material";
import TextFieldFormInput from "../components/atoms/TextFieldFormInput";
import validateForm from "../utils/validateForm";
import { postRegistrationHandler } from "../api";

function SignUp() {
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const allFieldsValid = () => {
    const identifiedErrors = validateForm(formInput);
    setErrors(identifiedErrors);
    if (Object.keys(identifiedErrors).length === 0) return true;
    else return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitDisabled(true);
    if (allFieldsValid()) {
      postRegistrationHandler(formInput)
        .then(() => {
          setFormInput({
            firstName: "",
            lastName: "",
            emailAddress: "",
            password: "",
            confirmPassword: "",
          });
          console.log("success");
          setSubmitDisabled(false);
        })
        .catch((err) => {
          console.log(err);
          setSubmitDisabled(false);
        });
    } else {
      setSubmitDisabled(false);
    }
  };
  const fieldsOnForm = [
    "firstName",
    "lastName",
    "emailAddress",
    "password",
    "confirmPassword",
  ];

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
            Register your account
          </Typography>
          <form onSubmit={handleSubmit}>
            {fieldsOnForm.map((fieldName) => {
              return (
                <div key={fieldName}>
                  <TextFieldFormInput
                    formInput={formInput}
                    setFormInput={setFormInput}
                    fieldName={fieldName}
                    errors={errors}
                  ></TextFieldFormInput>
                </div>
              );
            })}
            <Button
              type="submit"
              disabled={!!submitDisabled}
              fullWidth
              sx={{ mt: 2 }}
            >
              Register
            </Button>
          </form>
          <div>
            Already have an account?{" "}
            <Link
              href="/login"
              underline="hover"
              aria-label="Sign in to your account"
            >
              Sign in.
            </Link>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}

export default SignUp;
