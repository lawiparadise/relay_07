const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth");
const authMiddleware = require("../middleware/is-auth");

// var multer = require('multer'); // express에 multer모듈 적용 (for 파일업로드)
// var upload = multer({ dest: 'uploads/' })

// router.get("/", authController.getHome);
router.get("/", authMiddleware.isLogin, authController.getHome);

// router.post("/login", authController.postLogin);
router.post("/login", authMiddleware.isLogin, authController.postLogin);

// router.post("/signup", authController.postSignup);
router.post("/signup", authMiddleware.isLogin, authController.postSignup);

router.post(
  "/updateProfile",
  authMiddleware.isLogin,
  authController.editThumbnail
);
// router.post("/logout", authController.postLogout);
router.post("/logout", authController.postLogout);

module.exports = router;
