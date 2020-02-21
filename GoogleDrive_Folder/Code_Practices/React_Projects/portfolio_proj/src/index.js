import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './components/contact';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
// react-mdl
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

//new package.json
// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const app = express();

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

// app.post('/api/form', (req, res) => {
//     console.log("req.body:", req.body)
//     nodemailer.createTestAccount((err, account) => {
//         const htmlEmail = `
//         <h3>Contact Details:</h3>
//         <ul>
//             <li>Name:${req.body.name}</li>
//             <li>Number:${req.body.number}</li>
//             <li>Email:${req.body.email}</li>
//             <li>Message:${req.body.message}</li>
//          </ul>
//         `

//         let transporter = nodemailer.createTransport({
//             host: 'smtp.ethereal.email',
//             port: 587,
//             secure:false,
//             auth: {
//                 user: 'malachi41@ethereal.email',
//                 pass: 'ZHczgkNjmy5tWTEwJt'
//             },
//             {
//                 false
//             }
//         })

//         let mailOptions = {
//             from: '"Website Guest" <test@testaccount.com>',
//             to: 'malachi41@ethereal.email',
//             replyTo: 'test@testaccount.com',
//             subject: 'New Message',
//             test: req.body.message,
//             html: htmlEmail
//         }

//         transporter.sendMail(mailOptions, (err, info) => {
//             if (err) {
//                 return console.log(err)
//             }
//             console.log("Message sent: %s", info.message)
//             console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
//         })
//     })
// })
// const PORT = process.env.PORT || 3001
// app.listen(PORT, () => {
//     console.log(`Server Listening on port ${PORT}`)
// })

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
