
import express from 'express'
//import { createUserController } from '../../application/modules/users/useCases/createUser';
const createUserController = require('../../application/modules/users/useCases/createUser');


/*import { deleteUserController } from '../../../useCases/deleteUser';
import { getUserByUserNameController } from '../../../useCases/getUserByUserName';
import { loginController } from '../../../useCases/login';
import { middleware } from '../../../../../shared/infra/http';
import { getCurrentUserController } from '../../../useCases/getCurrentUser';
import { refreshAccessTokenController } from '../../../useCases/refreshAccessToken';
import { logoutController } from '../../../useCases/logout';*/

const userRouter = express.Router();


userRouter.post('/',
  //(req, res) => createUserController.execute(req, res)
  (req, res) => createUserController.createUser(req, res)

);

userRouter.get('/',
  (req, res) =>   res.json({ message: "..." })
//  createUserController.execute(req, res)
);

/*userRouter.get('/me',
  middleware.ensureAuthenticated(),
  (req, res) => getCurrentUserController.execute(req, res)
)

userRouter.post('/login',
  (req, res) => loginController.execute(req, res)
)

userRouter.post('/logout',
  middleware.ensureAuthenticated(),
  (req, res) => logoutController.execute(req, res)
)

userRouter.post('/token/refresh',
  (req, res) => refreshAccessTokenController.execute(req, res)
)

userRouter.delete('/:userId',
  middleware.ensureAuthenticated(),
  (req, res) => deleteUserController.execute(req, res)
)

userRouter.get('/:username',
  middleware.ensureAuthenticated(),
  (req, res) => getUserByUserNameController.execute(req, res)
)*/



export { userRouter };