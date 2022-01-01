exports.returnError = (res, err) => {
  return res.json({
    status: 500,
    message: err && err.sqlMessage ? err.sqlMessage : "Something went wrong",
    data: [],
  });
};
