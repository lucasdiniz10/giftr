import nodemailer from 'nodemailer'

const user = "boasvindas@giftr.com.br";

const pass = "";

class Emailcontroller {
    get(req, res) {
        const transporter = nodemailer.createTransport({
            host: "smtp.umbler.com",
            port: 587, 
            auth: { user, }
        })

        transporter.sendMail({
            from: user,
            to: user,
            replyTo: user,
            subject: "VIADAO",
            text: "EMAIL DE TESTE VIADAO"
        }).then(info=>{
            res.send(info)
        }).catch(error=> {
            res.send(error)
        })


    }
}

export default new Emailcontroller();