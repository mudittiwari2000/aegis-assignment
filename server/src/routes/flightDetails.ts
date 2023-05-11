import express from 'express';
import { FlightDetailsController } from '../controllers/flightDetails';

const router = express.Router();

router.get('/', FlightDetailsController.getAllFlightDetails);
router.post('/', FlightDetailsController.createFlightDetails);
router.post('/get-flight-price', FlightDetailsController.getFlightPrice);

export default router;
