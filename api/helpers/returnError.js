exports.returnError = (res, err) => {
  return res.status(500).json({
    status: 500,
    message: err && err.sqlMessage ? err.sqlMessage : "Something went wrong",
    data: [],
  });
};
