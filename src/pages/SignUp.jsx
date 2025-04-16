import React, { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Box,
} from "@mui/material";
import TextFieldFormInput from "../components/atoms/TextFieldFormInput";
import validateForm from "../utils/validateForm";

const SignUp = () => {
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const allFieldsValid = () => {
    const identifiedErrors = validateForm(formInput);
    setErrors(identifiedErrors);
    if (Object.keys(identifiedErrors).length === 0) return true;
    else return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (allFieldsValid()) {
        //TODO: Add api call
    } else {
        //TODO: stop submission
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
            <Button type="submit" fullWidth sx={{ mt: 2 }}>
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignUp;
