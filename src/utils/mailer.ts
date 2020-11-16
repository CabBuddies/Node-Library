import * as nodemailer from 'nodemailer';
import * as smtpTransport from 'nodemailer-smtp-transport';

console.log(nodemailer,smtpTransport);

var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: "starlight.mailer.service@gmail.com",
        pass: "Mailer@Starlight*com"
    }
}));

console.log(transporter);

function sendMail(to:string,subject:string,text:string){
    return new Promise((resolve,reject)=>{
        transporter.sendMail({
            to, 
            subject,
            text
        }, function(error, response){
            if(error){
                reject(error);
            }else{
                resolve(response);
            }
        });
    });
}

// sendMail('konda.nihal5@gmail.com','Test Subject','Test Body').then((response)=>{
//     console.log('response',response);
// }).catch((error)=>{
//     console.log('error',error);
// });

export default sendMail;