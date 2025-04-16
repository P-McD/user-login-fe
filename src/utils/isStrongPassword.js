function isStrongPassword(password) {
  if (password.length < 8 || !/\d/.test(password)) {
    return false;
  }
  return true;
}

export default isStrongPassword;
