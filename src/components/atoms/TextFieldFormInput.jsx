import { TextField } from "@mui/material";
import React from "react";
import { startCase } from "lodash";

function TextFieldFormInput({ formInput, setFormInput, fieldName, errors }) {
  const handleFormInputChange = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  const fieldLabel = startCase(fieldName);

  return (
    <TextField
      key={fieldName}
      label={fieldLabel}
      name={fieldName}
      fullWidth
      margin="normal"
      value={formInput[fieldName]}
      onChange={handleFormInputChange}
      error={!!errors[fieldName]}
      helperText={errors[fieldName]}
    />
  );
}

export default TextFieldFormInput;
