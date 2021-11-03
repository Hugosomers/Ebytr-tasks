const verifyEmptyTaskData = (req, res, next) => {
  const {
    author, title, description, status,
  } = req.body;

  if (!author || !title || !description || !status) {
    return res.status(400).json({
      err: true,
      status: 400,
      message: 'All fields must be filled',
    });
  }

  return next();
};

module.exports = {
  verifyEmptyTaskData,
};
