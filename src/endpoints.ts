// middle-were: [  index  ]--<#>[  router-controlls  ]--<#>[> endpoints <]
import { Request, Response } from "express";
import mongoose from "mongoose";


mongoose.connect('mongodb://localhost:27017/waoDB')


const endpointPost = async (req: Request, res: Response) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('You successfully executed the endpoint POST');
}

const endpointGet = async (req: Request, res: Response) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('You successfully executed the endpoint GET');
}


const endpointGetID = async (req: Request, res: Response) =>{
    const { uid } = req.params;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('You successfully executed the endpoint GET with uid:'+uid);
}

const endpointPutID = async (req: Request, res: Response) =>{
    const { uid } = req.params;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('You successfully executed the endpoint PUT trying to update uid:'+uid);
}

const endpointPatch = async (req: Request, res: Response) =>{
    const { uid } = req.params;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('You successfully executed the endpoint PATCH on the uid:'+uid);
}

const endpointDelete = async (req: Request, res: Response) =>{
    const { uid } = req.params;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('You successfully executed the endpoint DELETE on the uid:'+uid);
}

export const Routes = {
    endpointPost,
    endpointGet,
    endpointGetID,
    endpointPutID,
    endpointPatch,
    endpointDelete,
}