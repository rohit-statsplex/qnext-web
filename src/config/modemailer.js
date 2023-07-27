import nodemailer from "nodemailer";

const user = process.env.EMAIL
const pass = process.env.EMAIL_PASS

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
      user: user,
      pass
    }
  });
  
  export const mailOptions = {
    from:user,
    to:user
  }