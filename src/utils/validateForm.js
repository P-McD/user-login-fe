import isStrongPassword from "./isStrongPassword";

function validateForm(formInput) {
  const errors = {};
  if (!formInput.firstName.trim()) errors.firstName = "First name is required";
  if (!formInput.lastName.trim()) errors.lastName = "Last name is required";
  if (!formInput.emailAddress.includes("@") || !formInput.emailAddress.includes("."))
    errors.emailAddress = "Valid email address is required";
  if (!isStrongPassword(formInput.password)) {
    errors.password =
      "Passwords should be at least 8 characters long and contain a number";
  }
  if (formInput.password !== formInput.confirmPassword){
    errors.confirmPassword = "Passwords do not match"
  }
  return errors;
}

export default validateForm;
