const isValidEmail = (val) => {
  const regEx =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return regEx.test(String(val).toLowerCase());
};

const validateEmail = (val, setEmailErr) => {
  if (val === "") {
    setEmailErr("");
  } else if (isValidEmail(val)) {
    setEmailErr("");
  } else {
    setEmailErr("invalid e-mail type");
  }
};

const validatePassword = (val, setPassErr) => {
  if (val.length < 7) {
    setPassErr("password must be 7 characters");
  } else {
    setPassErr("");
  }
};

const validates = {
  isValidEmail,
  validateEmail,
  validatePassword,
};

export default validates;
