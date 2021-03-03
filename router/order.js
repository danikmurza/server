const {Router} = require('express')
const nodemailer = require('nodemailer');

const Ticket = require('../models/ticket')
const router = Router()

router.post('/a', async (req, res) => {
     let date = new Date();
    try {
        const {
            firstName, lastName, email, reason, vehicleLocation,
            licensePlate, vehicleYear, make, model, color, did, tel
        } = req.body
        console.log(req.body)
        const ticket = await new Ticket({
            firstName, lastName, email, reason, vehicleLocation,
            licensePlate, vehicleYear, make, model, color, tel, did, numberTicket: new Date()
        })
        await ticket.save()

        let transporter = nodemailer.createTransport({
            host: "smtp.ionos.com",
            port: 587,
            secure: false,
            auth: { user: 'a@mdanik.info', pass: 'Agamyanrafael1!'}
        });

        let mailOptions = {
            from: 'a@mdanik.info',
            to: 'dgmmessages@gmail.com',
            subject: `${reason}`,
            text: `<h1>${reason}</h1>`,
            html: `<h1>${reason}</h1>
                    <p>First Name: ${firstName}</p>
                    <p>Last Name: ${lastName}</p>
                    <p>Phone: ${tel}</p>
                    <p>Email: ${email}</p>
                    <p>VehicleLocation: ${vehicleLocation}</p>
                    <p>LicensePlate: ${licensePlate}</p>
                    <p>VehicleYear: ${vehicleYear}</p>
                    <p>Make: ${make}</p>
                    <p>Model: ${model}</p>
                    <p>Color: ${color}</p>
                    <p><span>${date}</span></p>`
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        // res.json({ticket})
        res.status(201).json({message: 'add'})

    } catch (e) {
        console.log(e)
        res.status(500).json({message: 'Something went wrong, try again'})
    }
})

// router.get('/', async (req, res) => {
// try {
//     const ticket = await Ticket.find()
//    await res.status(200).json(ticket)
// }catch (e) {
//     console.log("wrong")
// }
//
// })


module.exports = router
