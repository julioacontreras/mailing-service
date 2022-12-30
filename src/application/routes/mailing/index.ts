import { serverHTTP } from '@/adapters/serverHTTP'

import { sendCaseUse } from '@/application/useCases/send'

export function useRoutesAuth () {
   
  serverHTTP.add('send', {
    useCase: sendCaseUse,
    route: '/api/mailing/send'
  })
     
}
