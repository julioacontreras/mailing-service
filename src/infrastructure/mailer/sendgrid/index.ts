import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY || 'dont have key')

function prepareTemplate(templateId: string, message: string) {
    return message
  }

export const mailer = {
  async send(
    from: string,
    to: string,
    subject: string,
    message: string,
    templateId: string,
  ): Promise<boolean> {
    const body = prepareTemplate(templateId, message)
    return new Promise((resolve) => {
        sgMail
        .send({
            from, // sender address
            to, // list of receivers
            subject, // Subject line
            html: body, // html body
            })
        .then((response) => {
            resolve(true)
        })
        .catch((error) => {
            resolve(false)
            console.error(error)
        })    
     
    })
      
  },
}

