const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to: email,
        from:'ran.ben.melech1@gmail.com',
        subject: 'Welcome to Who Can Help',
        text:`Thanks for joining in ${name}! ,Let us know how can we help`
    })
}
const sendGoodByeEmail=(email,name)=>{
    sgMail.send({
        to: email,
        from:'ran.ben.melech1@gmail.com',
        subject: "Were sad to see you leave",
        text:`dont gooooo, ${name}.`
    })
}
module.exports=({
    sendWelcomeEmail,
    sendGoodByeEmail  
})