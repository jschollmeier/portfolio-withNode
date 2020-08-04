"use strict";
const nodemailer = require("nodemailer");

require('dotenv').config();

// async..await is not allowed in global scope, must use a wrapper
//sendMessage:(name, email, message) => 
   module.exports = function(app)
       {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  

  // create reusable transporter object using the default SMTP transport
  app.post("/api/email", async function(req, res){
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.email, // generated ethereal user
      pass: process.env.password, // generated ethereal password
    },
    tls: {
        rejectUnauthorized: false
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'Portfolio Contact Form <basketballsuperstar55@gmail.com>' , // sender address '"Me 👻" <someotheremail@gmail.com>'
    to: "jschollmeier@gmail.com", // list of receivers
    subject: req.body.name, // Subject line
    text: req.body.message +"\n\n\nfrom: "+ req.body.email, // plain text body
    html: req.body.message, // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

}) 

}

