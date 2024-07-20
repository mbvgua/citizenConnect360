import nodemailer from 'nodemailer'
import path from 'path'
import dotenv from 'dotenv'
import { UserEmail } from '../models/userModels'
import { ConfigDetails } from '../models/configModels'
dotenv.config({path:path.resolve(__dirname,"../../.env")})


// 1.create a configuration object
let configObject:any = {
    host: "smtp.gmail.com",
    service: "gmail",
    // secure: false,  //added to see if it works
    port: 587,
    auth :{
        user:process.env.MAIL_HOST,
        pass:process.env.SMTP_PASSWORD 
    }
    // requireTLS: true,
    // logger: true, // Enable logger
    // debug: true // Include SMTP traffic in the logs    
}

// 2.create a transporter
function createTransporter (configObject:any){   
    return nodemailer.createTransport(configObject)
}

//send the user email
export async function sendWelcomeEmail(messageOption:UserEmail){
    let transporter = createTransporter(configObject)
    await transporter.verify()

    await transporter.sendMail(messageOption, (error,info)=>{
        if (error){
            console.log(error)
        } else {
            console.log(info)
            // console.log('Message sent: %s', info.messageId)
            
        }
    })
}

