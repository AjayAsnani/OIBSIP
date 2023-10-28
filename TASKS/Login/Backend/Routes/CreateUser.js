const express = require("express");
const router = express.Router();
const Users = require("../models/Users");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//ROUTES FOR SIGNUP
router.post(
  "/createuser",
  [
    body("email", "Invalid Email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "Invalid Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //To convert password into hash and save it in databse for security
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);

    try {
      await Users.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (err) {
      console.log(err);
      res.json({ success: false });
    }
  }
);

//ROUTES FOR LOGIN
router.post(
  "/loginuser",
  [
    body("email", "Invalid Email").isEmail(),

    body("password", "Invalid Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let userData = await Users.findOne({ email });
      //If email matches from the database the entire document of the matched email will be sent and stored in userData variable
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Invalid email! Try entering Correct email" });
      }
      //Compares the password which user is entering while login with the password which is got from database in userData variable
      const pwdCompare = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      if (!pwdCompare) {
        return res
          .status(400)
          .json({ errors: "Invalid password! Try entering Correct password" });
      }
      //Uses Id of the user to assign authtoken
      const data = {
        user: {
          id: userData.id,
        },
      };
      const jwtSecret = "Mynameisajayandiamanaspiringdeveloper";
      const authToken = jwt.sign(data, jwtSecret);
      return res.json({ success: true, authToken: authToken });
    } catch (err) {
      console.log(err);
      res.json({ success: false });
    }
  }
);

module.exports = router;
