const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  getAllUser,
  getUserById,
  deleteUserById,
  updateUserById,
  blockUser,
  unBlockUser,
  updateAdmin,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword
} = require("../controller/userController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

// Dang ky
router.post("/register", createUser);

// forgot password
router.post("/forgot-password-token", forgotPasswordToken);

// reset Password
router.put("/reset-password/:token", resetPassword);

// update password
router.put("/password", authMiddleware, updatePassword)

// login
router.post("/login", loginUser);

// get All User
router.get("/all-users", getAllUser);

// refreshToken
router.get("/refresh", handleRefreshToken);

// logout
router.get("/logout", logout);
// get User by id
router.get("/:id", authMiddleware, isAdmin, getUserById);

// update User by id
router.put("/:id", updateUserById);

// delete User by id
router.delete("/:id", deleteUserById);

// Update Admin info
router.put("/edit-user", authMiddleware, updateAdmin);

// Block User
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unBlockUser);

module.exports = router;
