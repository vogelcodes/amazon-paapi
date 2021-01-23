import {Router} from 'express';
import itemenxovalRouter from './itemenxoval.routes';
import sessionsRouter from './sessions.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/item-enxoval', itemenxovalRouter);

export default routes;
