// middle-were: [  index  ]--<#>[  router-controlls  ]--<#>[> endpoints <]--<#>[  order  ]
import { Request, Response } from "express";
import mongoose from "mongoose";
import { schema } from "./model/order";


const connection = mongoose.createConnection('mongodb://localhost:27017/waoDB')
export const model = connection.model('Orders', schema)


const endpointPost = async (req: Request, res: Response) =>{
                                                           const { order } = req.body;
                                                           res.json(await model.create(order));
                                                           }

const endpointGetID = async (req: Request, res: Response) =>{
                                                            const { uid } = req.params; 
                                                            res.json(await model.findById(uid).lean())
                                                            }

const endpointPutID = async (req: Request, res: Response) =>{
                                                            const { uid } = req.params;
                                                            const { order } = req.body; 
                                                            console.log(req.body)
                                                            res.json(await model.findOneAndReplace({_id: uid}, order).lean());
                                                            }

const endpointPatch = async (req: Request, res: Response) =>{
                                                            const { uid } = req.params;
                                                            const { order } = req.body;
                                                            res.send(await model.findByIdAndUpdate(uid, order));
                                                            }

const endpointDelete = async (req: Request, res: Response) =>{
                                                             const { uid } = req.params;
                                                             res.json(await model.findByIdAndDelete(uid));
                                                             }

export const Routes = {
                      endpointPost,
                      endpointGetID,
                      endpointPutID,
                      endpointPatch,
                      endpointDelete,
                      }