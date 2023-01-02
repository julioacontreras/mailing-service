export interface Mailer {
  send: (
    from: string,
    to: string,
    message: string,
    subject: string,
    template: string,
  ) => void
}
