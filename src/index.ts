import dotenv from 'dotenv'
dotenv.config()

import '@/infrastructure/logger'
import '@/infrastructure/serverHttpFastify'
import '@/infrastructure/mailer'

import { startApp } from  '@/application'

startApp()
