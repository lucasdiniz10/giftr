import { Router } from 'express';

import ongsconroller from './app/controller/ongsconroller';
import UserController from './app/controller/usercontroller';
import EmailController from './app/controller/emailcontroler';
import causecontroller from './app/controller/causecontroller';
import SessionController from './app/controller/sessioncontroller';


import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/users', UserController.get);
routes.get('/users/:id', UserController.getId);
routes.post('/users/post', UserController.post);
routes.post('/users/session', SessionController.Session);
routes.get('/loadSession', authMiddleware, SessionController.LoadSession);
routes.post('/userCheck', SessionController.userCheck);
routes.put('/users/update/:email', UserController.put)

////////////////////////////////////////////////////////
// cause routes

routes.get('/causes', causecontroller.get);
routes.get('/causes/:id', causecontroller.getId);
routes.post('/causes/post', causecontroller.post);

///////////////////////////////////////////////////////
// Ongs routes

routes.get('/ongs', ongsconroller.get);
routes.get('/ongs/:id', ongsconroller.getId);
routes.post('/ongs/post', ongsconroller.post);
routes.put('/ongs/att/:id', ongsconroller.put);
routes.get('/ongs/causeName/:causeName', ongsconroller.getCause);

/////////////////////////////////////////////////////////////////////
// Email Routes

routes.get('/send/:email/:codigo', EmailController.emailDeConfirmacao)

export default routes;