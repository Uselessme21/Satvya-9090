const express = require('express')
const UserModel = require('../model/user.model')
const userrouter = express.Router()
const env= require('dotenv').config();
const nodemailer = require('nodemailer');
   

userrouter.post("/book", async(req, res) => {
  
  try {
    
  
    const { name , email , phone, location,Enquiry } = req.body;
    // let status='Pending'
    const userExist = await UserModel.findOne({ email });
    console.log(userExist)
    if (userExist && userExist.status=='Pending' ) {
      return res.status(401).send({ msg:"Your Request is under process"});
    }
      const newUser = new UserModel({ name, email , phone , location, Enquiry});
      const userData = await newUser.save();
    
    if (userData) {
      sendverificationmail(name, email, userData._id, phone, location, Enquiry)
      res.status(200).json({ msg: "Registration successful", userData });
    } else {
      res.status(402).json({ msg: "Registration failed" });
    }
  } catch (error) {
     res.send({ msg: "Something went wrong",error:error.message });
  }

});





let sendverificationmail = async (name, email,id,phone,location,Enquiry) => {
    try {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "thedreamerone0021@gmail.com",
          pass: process.env.googlepassword,
        },
      });
      let usermail = {
        
        to: email,
        subject: "Consultation request sent Successfully",
        html: `
        <p>Hi <h3>${name}</h3>,</p>
        <p>Your ${Enquiry} request has been sent successfully.</p>
        <p>Your provided phone number: ${phone}</p>
        <p>Your provided location: ${location}</p>
        <h5>Your request Id: ${id}</h5>
        <h2>Thanks for reaching out to us. We will call you soon.</h2>
        <button>Check Out our Plans</button>
      `,
      };
      let Managermail = {
        // from: "",
        to: Manager,
        subject: "New Consultation request arrived",
        html: `
        <p>
          <h3>${name}</h3><br>
          sent a new consultation request. Please reach out to them at:
          <br>Email: ${email}
          <br>Phone: ${phone}
        </p>
        <h2>Request ID: ${id}</h2>
        
      `,
      };
      transporter.sendMail(usermail, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      transporter.sendMail(Managermail, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    } catch (error) {
      console.log(error);
    }
};


userrouter.post("/query", async(req, res) => {
  
  try {
    const { name , email , phone, city, enquiry_type } = req.body;
    let status='Pending'
    const userExist = await UserModel.findOne({ email });
    console.log(userExist)
    if (userExist && userExist.status=='Pending' ) {
      return res.status(401).send({ msg:"User Already Registered"});
    }
      const newUser = new UserModel({ name, email, phone , status, city, enquiry_type});
      const userData = await newUser.save();
    

    if (userData) {
      sendquerymail(name, email, userData._id, phone, city, enquiry_type)
      res.status(200).json({ msg: "Registration successful", userData });
    } else {
      res.status(401).json({ msg: "Registration failed" });
    }
  } catch (error) {
     res.send({ msg: "Something went wrong",error:error.message });
  }

});

// 
let sendquerymail = async (name, email,id,phone,city, enquiry_type) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "thedreamerone0021@gmail.com",
        pass: process.env.googlepassword,
      },
    });
    let usermail = {
      
      to: email,
      subject: "Consultation request sent Successfully",
      html: `<p>Hi<h3> ${name} </h3><br>thank you for Your Consultation request is sent successfully,
      Your provided phone number ${phone} and your provided location is ${city}.</p>
      <h5>Your request Id is= ${id}</h5>
      <h2> Thanks for reaching us, We will call you soon. </h2>
      <button>check Out our Plans</button>`,
    };
    let Managermail = {
      // from: "",
      to: 'thedreamerone0021@gmail.com',
      subject: "New Consultation request sent",
      html: `<p> <h3>${name}</h3> <br> sent a new consultation request reach out to him at ${email} or call at ${phone}</p>
      <h2>request Id is = ${id}</h2>
      `,
    };
    transporter.sendMail(usermail, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    transporter.sendMail(Managermail, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    console.log(error);
  }
};


module.exports = userrouter