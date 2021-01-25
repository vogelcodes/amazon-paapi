import {Router} from 'express';
import itemenxovalRouter from './itemenxoval.routes';
import sessionsRouter from './sessions.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.get('/', (req, res) => res.send('<html><head><title>VogelCodes Amazon PA API in Development</title></head><body>VogelCodes Amazon PA API in Development<p>Rotas:</p><ul><li>/users</li><li>/sessions</li><li>/item-enxoval</li></ul></body></html>'))

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/item-enxoval', itemenxovalRouter);

export default routes;
