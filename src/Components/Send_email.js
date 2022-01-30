export default function sendEmail(from, to, subject, message) {
  window.Email.send({
    SecureToken: process.env.REACT_APP_SMTP_SECURE_TOKEN,
    To: to,
    From: from,
    Subject: subject,
    Body: message,
  });
}
