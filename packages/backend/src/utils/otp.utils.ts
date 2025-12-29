import nodemailer from "nodemailer"

// Define the sendEmail function with appropriate types
export const sendEmail = async (email: string, otp: string): Promise<void> => {
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'nextjsraushan@gmail.com',
        pass: 'slid palj fvuq uttq', // Consider using environment variables for sensitive information
      },
    });

    let mailOptions = {
      from: '"EduMerge" <nextjsraushan@gmail.com>',
      to: email,
      subject: 'Your OTP Code',
      html: `This is your OTP code: ${otp}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response); // Optional: log email send response

  } catch (error:any) {
    console.error('Error sending OTP email:', error.message);
  }
};

// Define the generateOtp function with appropriate types
export const generateOtp = (otp_len: number): string => {
  const digit = '0123456789';
  let otp = '';

  for (let i = 0; i < otp_len; i++) {
    otp += digit[Math.floor(Math.random() * 10)];
  }
  return otp;
};
