// import { Router } from 'express';

// import authorize from '../middlewares/auth.middleware.js';

// import { getUser, getUsers, createUser } from '../controllers/user.controller.js';

// const userRouter = Router();

// userRouter.get('/', getUsers);
// userRouter.get('/:id', authorize, getUser);
// userRouter.post('/', createUser);
// userRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE user' }));
// userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE user' }));

// export default userRouter;



import { Router } from 'express';

import authorize from '../middlewares/auth.middleware.js';

import { getUser, getUsers, createUser } from '../controllers/user.controller.js';
import { signIn } from '../controllers/auth.controller.js'; // new controller for login

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', authorize, getUser);
userRouter.post('/', createUser);
userRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE user' }));
userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE user' }));

userRouter.post('/sign-in', signIn);

export default userRouter;
