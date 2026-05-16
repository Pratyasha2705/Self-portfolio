require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.post("/send", async (req, res) => {

  try {

    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Message from ${name}`,
      text: `
Name: ${name}

Email: ${email}

Message:
${message}
      `
    });

    res.status(200).send("Message Sent");

  } catch (error) {

    console.log("MAIL ERROR:", error);

    res.status(500).send("Error sending mail");
  }

});

app.listen(3000, () => {
  console.log("Server Running on port 3000");
});