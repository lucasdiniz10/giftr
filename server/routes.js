import { Router } from 'express';

import UserController from './app/controller/usercontroller';

const routes = new Router();

routes.get('/users', UserController.get);
routes.post('/users/post', UserController.post);

export default routes;