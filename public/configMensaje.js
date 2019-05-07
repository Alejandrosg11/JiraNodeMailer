const nodemailer = require('nodemailer');
module.exports = (formulario) => {
 var transporter = nodemailer.createTransport({
   service: 'hotmail',
   auth: {
     user: 'user@mail.com', // Cambialo por tu email
     pass: 'JAJATL' // Cambialo por tu password
   }
 });

const mailOptions = {
 from: `${formulario.person.email}`,
 to: 'support@mail.com', // Cambia esta parte por el destinatario
 subject: "[AngularJira] Solicitud Jira",
 html: `
 <strong>Nombre:</strong> ${formulario.person.name} ${formulario.person.lastName} ${formulario.person.secondLastName} <br/>
 <strong>E-mail:</strong> ${formulario.person.email} <br/>
 <strong>Problem Id:</strong>  ${formulario.problemTypeId} <br/>
 <strong>LastRce:</strong>  ${formulario.lastRce} <br/>
 <strong>Como te diste Cuenta:</strong>  ${formulario.problem.how} <br/>
 <strong>Con que institucion:</strong>  ${formulario.problem.where} <br/>
 <strong>Que has hecho:</strong>  ${formulario.problem.what} <br/>
 `
 };
transporter.sendMail(mailOptions, function (err, info) {
 if (err)
 console.log(err)
 else
 console.log(info);
 });
}
