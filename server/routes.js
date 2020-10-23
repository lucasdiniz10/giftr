import { Router } from 'express';
import causecontroller from './app/controller/causecontroller';

import UserController from './app/controller/usercontroller';

const routes = new Router();

routes.get('/users', UserController.get);
routes.get('/user/:id', UserController.getId);
routes.post('/users/post', UserController.post);

////////////////////////////////////////////////////////
// cause routes

routes.get('/causes', causecontroller.get);
routes.get('/causes/:id', causecontroller.getId);
routes.post('/causes', causecontroller.post);

export default routes;