import express from 'express';
import { FlightDetailsController } from '../controllers/flightDetails';

const router = express.Router();

router.get('/', FlightDetailsController.getAllFlightDetails);
router.post('/create', FlightDetailsController.createFlightDetails);
router.post('/by-preference', FlightDetailsController.getFlightPrice);

export default router;
