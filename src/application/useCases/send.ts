import { logger } from '@/adapters/logger'
import { HTTPReturn } from '@/adapters/serverHTTP/types'
import { statusHTTP } from '@/adapters/serverHTTP'
import { mailer } from '@/adapters/mailer'

type EmailResponse = {
  body: {
    from: string
    to: string
    subject: string
    message: string
    template: string  
  }
}

export const sendCaseUse = async (settings: unknown): Promise<HTTPReturn> => {
  const response = settings as EmailResponse
  const { from, to, subject, message, template } = response.body 
  const isSended = await mailer.send(from, to, subject, message, template)

  return {
    response: {},
    code: isSended ? statusHTTP.OK : statusHTTP.INTERNAL_SERVER_ERROR,
  }
}
