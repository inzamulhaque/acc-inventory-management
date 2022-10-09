const auth = async (req, res, next, ...roles) => {
  const userRole = req.user.role;
  if (!roles.includes(userRole)) {
    return res.status(403).json({
      status: "fail",
      error: "You are not authorized to access this",
    });
  }

  next();
};

module.exports = auth;

// const auth = async (...roles) => {
//   return (req, res, next) => {
//     console.log(roles);
//     const userRole = req.user.role;
//     if (!roles.includes(userRole)) {
//       return res.status(403).json({
//         status: "fail",
//         error: "You are not authorized to access this",
//       });
//     }

//     next();
//   };
// };

// module.exports = auth;

// const auth = async (...roles) => {
//   const authMiddleware = (req, res, next) => {
//     const userRole = req.user.role;
//     if (!roles.includes(userRole)) {
//       return res.status(403).json({
//         status: "fail",
//         error: "You are not authorized to access this",
//       });
//     }

//     next();
//   };
//   return authMiddleware;
// };

// module.exports = auth;
