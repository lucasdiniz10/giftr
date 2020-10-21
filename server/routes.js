import { Router } from 'express';

import UserController from './app/controller/usercontroller';

const routes = new Router();

<<<<<<< HEAD
routes.get('/users', UserController.get);
routes.post('/users/post', UserController.post);
=======
routes.get('/', (req, res) => {
    return res.json({ message: 'hello world' })
});
>>>>>>> 22448c19d07fcbc3db4f7631e9b3bbb56c03b44d

export default routes;