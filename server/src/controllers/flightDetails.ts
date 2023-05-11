import { Request, Response } from 'express';
import { FlightDetailsService } from '../services/flightDetails';
import { IFlightDetails } from '../models/flightDetails';
import { IFlightPriceRequest } from '../lib/interfaces/flight';

export class FlightDetailsController {
  static async getAllFlightDetails(
    _: unknown,
    res: Response
  ): Promise<Response> {
    try {
      const flightDetails = await FlightDetailsService.getAllFlightDetails();
      return res.json(flightDetails);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
  }

  static async createFlightDetails(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const flightDetails: IFlightDetails = req.body;
      const newFlightDetails = await FlightDetailsService.createFlightDetails(
        flightDetails
      );
      return res.json(newFlightDetails);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
  }

  static async getFlightPrice(req: Request, res: Response) {
    try {
      const { source, destination, date }: IFlightPriceRequest = req.body;
      const flightDetails = await FlightDetailsService.getFlightDetails(
        source,
        destination,
        date
      );
      res.json(flightDetails);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
