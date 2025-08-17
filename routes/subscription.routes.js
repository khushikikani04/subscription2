import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js"
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js"

const subscriptionRouter = Router();

// subscriptionRouter.get('/', (req, res) => res.send({title: 'GET all subscriptions'}));

subscriptionRouter.get('/:id', (req, res) => res.send({title: 'GET subscriptions detailes '}));

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.get('/:id', (req, res) => res.send({title: 'UPDATE subscriptions'}));

subscriptionRouter.get('/:id', (req, res) => res.send({title: 'DELETE user subscriptions'}));

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

subscriptionRouter.get('/:id/cancel', (req, res) => res.send({title: 'CANCEL subscriptions'}));

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({title: 'GET upcoming renewals'}));

export default subscriptionRouter;