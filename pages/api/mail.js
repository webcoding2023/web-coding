// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);
export default function handler(req, res) {
  const body = JSON.parse(req.body);
  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}\r\n
  `;

  const data = {
    to: 'admin@wecoding.info',
    from: 'admin@webcoding.info',
    subject: 'New Message from web',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  };
  mail.send(data);
  res.status(200).json({ status: 'OK' });
}
