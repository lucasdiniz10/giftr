import { Router } from 'express';
import causecontroller from './app/controller/causecontroller';
import ongsconroller from './app/controller/ongsconroller';
import UserController from './app/controller/usercontroller';
import SessionController from './app/controller/sessioncontroller';

const routes = new Router();

routes.get('/users', UserController.get);
routes.get('/user/:id', UserController.getId);
routes.post('/users/post', UserController.post);
routes.post('/users/session', SessionController.Session)

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
routes.get('/ongs/causeName/:causeName', ongsconroller.getCause);

export default routes;