import nodemailer from 'nodemailer'

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
  ): Promise<unknown> {
    const {MAILER_USER, MAILER_PASS, MAILER_HOST, MAILER_PORT} = process.env;
    if (
      !MAILER_USER ||
      !MAILER_PASS ||
      !MAILER_HOST ||
      !MAILER_PORT
    ) {
      throw Error('Need email config parameters')
    }
    const transporter = nodemailer.createTransport({
      host: MAILER_HOST,
      port: Number(MAILER_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: MAILER_USER,
        pass: MAILER_PASS,
      },
    })

    const body = prepareTemplate(templateId, message)

    // send mail with defined transport object
    await transporter.sendMail({
      from, // sender address
      to, // list of receivers
      subject, // Subject line
      html: body, // html body
    })
 
    return {}
  },
}
