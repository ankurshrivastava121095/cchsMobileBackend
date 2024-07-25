const FeesModel = require("../models/Fees")
const nodemailer = require('nodemailer')

class FeesController {

    static add = async(req,res) => {
        try {
            const {
                studentName,
                studentClass,
                payeeName,
                payeeMailId,
                submittedFeesAmount,
                pendingFeesAmount,
                paymentMode,
                note,
            } = req.body

            const data = new FeesModel({
                studentName,
                studentClass,
                payeeName,
                payeeMailId,
                submittedFeesAmount,
                pendingFeesAmount,
                paymentMode,
                note,
            })
            const dataSaved = await data.save()

            if (dataSaved) {
                // if (payeeMailId != '') {
                //     let transporter = nodemailer.createTransport({
                //         service: 'gmail',
                //         host: 'smtp.gmail.com',
                //         port: 465,
                //         user: 'arclightdevelopmentsolutions@gmail.com',
                //         pass: 'ovvjhpaukdbokznd'
                //     })
    
                //     let info = await transporter.sendMail({
                //         from: 'City Children High School <arclightdevelopmentsolutions@gmail.com>',
                //         to: payeeMailId,
                //         subject: 'Fees Submission Notification',
                //         text: `Fees Submission Notification from City Children High School`,
                //         html: `
                //             <b>Subject: Confirmation of Fee Submission</b></br>
                //             <b>Dear ${payeeName},</b></br></br>
                //             <div>We are pleased to inform you that your recent fee submission has been successfully received and processed. Below are the details of the transaction for your reference:</div></br></br>
                //             <div><b>Student Name:</b> <span>${studentName}</span></div></br>
                //             <div><b>Amount Paid:</b> <span>${submittedFeesAmount}</span></div></br>
                //             <div><b>Payment Mode:</b> <span>${paymentMode}</span></div></br></br>
                //             <div>We appreciate your timely payment and continued support. If you have any questions or need further assistance, please do not hesitate to contact us</div></br></br>
                //             <div>Thank you for your cooperation.</div></br></br>
                //             <div>Best regards,</div></br>
                //             <div>City Children High School, Gwalior, MP.</div>
                //         `
                //     })

                //     if (info) {
                //         res.status(201).json({ 'status': 'success', 'message': 'Fees Submitted Successfully' })
                //     } else {
                //         res.status(201).json({ 'status': 'success', 'message': 'Fees Submitted Successfully, Unable to send Mail' })
                //     }
                // } else {
                //     res.status(201).json({ 'status': 'success', 'message': 'Fees Submitted Successfully' })
                // }
                res.status(201).json({ 'status': 'success', 'message': 'Fees Submitted Successfully' })
            } else {
                res.status(401).json({ 'status': 'failed', 'message': 'Internal Server Error' })
            }
        } catch (err) {
            res.status(401).json({ 'status': 'failed', 'message': `Error: ${err}` })
        }
    }

    static fetchAll = async(req,res) => {
        try {
            const data = await FeesModel.find().sort({ _id: -1 })
            res.status(201).json({
                success: true,
                data
            })
        } catch (err) {
            res.status(401).json({ 'status': 'failed', 'message': `Error: ${err}` })
        }
    }

    static fetchById = async(req,res) => {
        try {
            const data = await FeesModel.findById(req.params.id)
            res.status(201).json({
                success: true,
                data
            })
        } catch (err) {
            res.status(401).json({ 'status': 'failed', 'message': `Error: ${err}` })
        }
    }

    static update = async(req,res) => {
        try {
            const {
                studentName,
                studentClass,
                payeeName,
                payeeMailId,
                submittedFeesAmount,
                pendingFeesAmount,
                paymentMode,
                note,
            } = req.body.data

            const data = await FeesModel.findByIdAndUpdate(req.params.id, {
                studentName,
                studentClass,
                payeeName,
                payeeMailId,
                submittedFeesAmount,
                pendingFeesAmount,
                paymentMode,
                note,
            })

            if (data) {
                res.status(201).json({ 'status': 'success', 'message': 'Fees Details Updated Successfully' })
            } else {
                res.status(401).json({ 'status': 'failed', 'message': 'Internal Server Error' })
            }
        } catch (err) {
            res.status(401).json({ 'status': 'failed', 'message': `Error: ${err}` })
        }
    }

}
module.exports = FeesController