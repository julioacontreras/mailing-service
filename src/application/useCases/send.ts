import { logger } from '@/adapters/logger'
import { HTTPReturn } from '@/adapters/serverHTTP/types'
import { statusHTTP } from '@/adapters/serverHTTP'
import { database } from '@/adapters/database'

export const sendCaseUse = async (settings: unknown): Promise<HTTPReturn> => {
    return {
      response: {},
      code: statusHTTP.OK
    }

}
