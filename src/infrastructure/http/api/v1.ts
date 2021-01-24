
import express from 'express'
import { userRouter } from '../../../interfaces/routes/users';

const v1Router = express.Router();

v1Router.get('/', (req, res) => {
  //return res.json({ message: "Yo! we're up" });
  res.status(200).render('homepage');


})


v1Router.use('/users', userRouter);
/*v1Router.use('/members', memberRouter);
v1Router.use('/posts', postRouter);
v1Router.use('/comments', commentRouter);*/

export { v1Router }