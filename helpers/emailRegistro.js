import nodemailer from 'nodemailer';

const emailRegistro = async (datos) => {
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
        subject: 'Comprueba tu cuenta en appvet',
        text: 'Comprueba tu cuenta en appvet',
        html: `<p> Hola: ${nombre}, comprueba tu cuenta en appvet.</p>
              <p> Tu cuenta ha sido creada, has click en el siguiente enlace:
              <a href="${process.env.FRONTEND_URL2}/Confirmar-cuentas/${token}">Comprobar cuenta</a> </p>
              <p> Si tu no creaste esta cuenta, ignora este mensaje. </p>
        ` 
      });
      console.log("mensaje env: %s", info.messageId)
}

export default emailRegistro;