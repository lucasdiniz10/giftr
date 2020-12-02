import nodemailer from 'nodemailer'

const user = "gabrielsena@giftr.com.br";

const pass = "qweasdzxc.";

class Emailcontroller {
    async emailDeConfirmacao(req, res) {
        const { email } = req.params;

        const transporter = nodemailer.createTransport({
            host: "smtp.umbler.com",
            port: 587,
            auth: { user, pass }
        })

        transporter.sendMail({
            from: user,
            to: email,
            replyTo: user,
            subject: "Recuoeração de senha",
            text: "EMAIL DE TESTE",
            html: '<p>Click <a href="http://localhost:8080/#/password-recovery/new-password">here</a> to reset your password</p>'
        }).then(info => {
            res.send(info)
        }).catch(error => {
            res.send(error)
        })


    }
}

export default new Emailcontroller();