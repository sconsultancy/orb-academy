import express from "express";
import nodemailer from "nodemailer";
const router = express.Router();

const auth = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: "sconsultancygroup21@gmail.com",
    pass: process.env.GMAIL_PASS,
  },
});

router.post("/api/callback", (req, res) => {
  const auth = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
      user: "sconsultancygroup21@gmail.com",
      pass: process.env.GMAIL_PASS,
    },
  });

  const reciever = {
    from: "sconsultancygroup21@gmail.com",
    to: "ashutoshsharma9865@gmail.com",
    subject: "Email home",
    text: ` <h1>this is from wizerSkills</h1>
    <p>
    Name:${req.body.name}
    </p>
    <p>
    Number:${req.body.number}
    </p><p>
    Country:${req.body.country}
    </p><p>
    email:${req.body.email}
    </p>
    `,
  };

  auth.sendMail(reciever, (error, emailResponse) => {
    if (error) {
      throw error;
    }
    console.log("success");
    res.end();
  });

  res.send({ message: "Email sent" });
});

router.post("/api/email", (req, res) => {
  const auth = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
      user: "sconsultancygroup21@gmail.com",
      pass: process.env.GMAIL_PASS,
    },
  });

  const reciever = {
    from: "sconsultancygroup21@gmail.com",
    to: "ashutoshsharma9865@gmail.com",
    subject: "Email home",
    text: ` <h1>this is from wizerSkills</h1>
       
        email:${req.body.email}
        
        `,
  };

  auth.sendMail(reciever, (error, emailResponse) => {
    if (error) {
      throw error;
    }
    console.log("success");
    res.end();
  });

  res.send({ message: "Email sent" });
});

export default router;
