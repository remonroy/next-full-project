exports.errorHandler = (data, res, code = 400) => {
  res.status(code).json({
    errorType: true,
    errorMessage: data,
  });
};
exports.responseHandler = (data, res, code = 200) => {
  res.status(code).json({
    errorType: false,
    user: data,
  });
};

exports.validHandler = (fields) => {
  for (let key in fields) {
    if (fields[key].trim() === "") {
      throw `Enter your ${key}`;
    }
  }
};

exports.userValidation = (user) => {
  if (user.password !== user.confirmPassword) {
    throw "confirmPassword Doesn't Match";
  }
};
