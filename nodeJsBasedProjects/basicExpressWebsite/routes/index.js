var express = require('express')
var nodemailer = require('nodemailer')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.post('/contact/send', function(req, res, next) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'abc@gmail.com',
      pass: 'qwertyuiop'
    }
  })
  var mailOptions = {
    from: 'Neel Ratn <abc@gmail.com>',
    to: 'abcd@gmail.com',
    subject: 'Website submission',
    text: 'You have a submission with following details... Name:' +req.body.name+ 'Email:' +req.body.email+'Message:'+ req.body.message,
    html: '<p>You have a submission with following details...</p>'
  }
  transporter.sendMail(mailOptions, (err, info)=>{
    if(err){
      console.log(err)
      res.redirect('/')
    }else{
      console.log('Message Sent: '+info.response);
    }

  })

});


module.exports = router

