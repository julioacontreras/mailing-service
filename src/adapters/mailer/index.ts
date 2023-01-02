import { Mailer } from './types'

export let mailer: Mailer

export function setMailer (newMailer: Mailer) {
  mailer = newMailer
}
