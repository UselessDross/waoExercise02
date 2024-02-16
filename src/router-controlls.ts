// middle-were: [  index  ]--<#>[> router-controlls <]--<#>[  endpoints  ]
import { Router } from 'express'

import { Routes } from './endpoints'

const router = Router()


router.post(''       , Routes.endpointPost  )
router.get(''        , Routes.endpointGet   )
router.get('/:uid'   , Routes.endpointGetID )
router.put('/:uid'   , Routes.endpointPutID )
router.patch('/:uid' , Routes.endpointPatch )
router.delete('/:uid', Routes.endpointDelete)

export const endRoute = router;