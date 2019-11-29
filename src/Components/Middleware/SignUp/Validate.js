export const validateEmail = emailField => {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(emailField) === false) {
    return false;
  }

  return true;
};

export const checkForEmpty = value => {
  try {
    if (!value.trim()) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log("Unappropraite value in checkForEmpty : ", err);
  }
};

export const validateUsername = value => {
  let format = /[!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]+/;
  try {
    if (!value.trim()) {
      return true;
    } else {
      if (!format.test(value)) {
        return true;
      } else {
        return false;
      }
    }
  } catch (err) {
    console.log("Unappropraite value in checkUsername : ", err);
  }
};
