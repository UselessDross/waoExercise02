// middle-were: [  index  ]--<#>[> router-controlls <]--<#>[  endpoints  ]--<#>[  order  ]

import { Router, json } from 'express';
import { Routes }       from './endpoints'

const router = Router()


router.get(''        ,         Routes.endpointGetID );
router.post(''       ,         Routes.endpointPost  );   
router.get(   '/:uid', json(), Routes.endpointGetID );
router.put(   '/:uid', json(), Routes.endpointPutID );
router.patch( '/:uid', json(), Routes.endpointPatch );
router.delete('/:uid', json(), Routes.endpointDelete);

export const endRoute = router;