


const sgMail = require('@sendgrid/mail');
const { response } = require('express');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


   module.exports = function(app)
       {
  
  app.post("/api/email", function(req, res){
    
    

    // using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs


const msg = {
  to: 'jschollmeier@gmail.com',
  from: 'basketballsuperstar55@gmail.com',
  subject: 'New Portfolio Contact form Message From: ' +req.body.name,
  text: req.body.message + " \n\n\n from: " +req.body.email,
  
};
sgMail
  .send(msg)
  .then(() => {
    
  })
  .catch(error => {
    // Log friendly error
    console.error(error);

    if (error.response) {
      // Extract error msg
      const {message, code, response} = error;

      // Extract response msg
      const {headers, body} = response;

      console.error(body);
    }
  });
  res.json(msg);
}) 

}



