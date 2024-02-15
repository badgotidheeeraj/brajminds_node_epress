var express = require("express");
const User = require("./users");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/thankyou", function (req, res, next) {
  res.render("inde", {
    title: "for contacting us, we will get in touch with you soon...",
  });
});

router.get("/admin", async function (req, res, next) {
  try {
    const dataFetch = await User.find(); // Correct method name is 'findAll' instead of 'findall'
    res.render("admin", { title: "brajminds", database: dataFetch,"datacount":await User.countDocuments() });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).render("error");
  }
});

router.post("/", async function (req, res) {
  var formData = {
    name: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    content: req.body.content,
  };

  try {
    const newlyCreatedForm = await User.create(formData);
    console.log("Form created successfully:", newlyCreatedForm);
    res.redirect("/thankyou");
  } catch (error) {
    console.error("Error creating form:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
