import nodemailer from 'nodemailer';

const emailOlvidePassword = async (datos) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
      const { email, nombre, token } = datos;

      //envio email
      const info = await transporter.sendMail({
        from: "App Veterinarios (administra tus pacientes) &#x1f4c4;",
        to: email,
        subject: 'Restablece tu password',
        text: 'Restablece tu password',
        html: `<p> Hola: ${nombre}, has solicitado reestablecer tu password.</p>
              <p> Sigue el enlace para generar un nuevo password:
              <a href="${process.env.FRONTEND_URL2}/olvide-password/${token}">Reestablecer cuenta</a> </p>
              <p> Si tu no creaste esta cuenta, ignora este mensaje. </p>
        ` 
      });
      console.log("mensaje env: %s", info.messageId)
}

export default emailOlvidePassword;