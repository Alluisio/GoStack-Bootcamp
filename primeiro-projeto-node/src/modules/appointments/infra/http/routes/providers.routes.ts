import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';

const providersRoutert = Router();
const providersController = new ProvidersController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();

providersRoutert.use(ensureAuthenticated);

providersRoutert.get('/', providersController.index);
providersRoutert.get(
  '/:provider_id/month-availability',
  providerMonthAvailabilityController.index,
);
providersRoutert.get(
  '/:provider_id/day-availability',
  providerDayAvailabilityController.index,
);

export default providersRoutert;
