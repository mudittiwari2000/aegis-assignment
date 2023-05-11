import { FlightPriceResponse, FlightVendor } from '../lib/types/flight';
import { IFlightDetails, FlightDetails } from '../models/flightDetails';
import { formatCurrency } from '../utils/formatCurrency';

export class FlightDetailsService {
  static async getAllFlightDetails(): Promise<IFlightDetails[]> {
    return FlightDetails.find().exec();
  }

  static async createFlightDetails(
    flightDetails: IFlightDetails
  ): Promise<IFlightDetails> {
    const newFlightDetails = new FlightDetails(flightDetails);
    return newFlightDetails.save();
  }

  static async getFlightDetails(
    source: string,
    destination: string,
    date: string
  ): Promise<FlightPriceResponse> {
    const flightPrices = await FlightDetails.find({
      source,
      destination,
      date: new Date(date)
    }).exec();

    const result: Record<string, string> = {};

    for (const { vendor, price } of flightPrices) {
      result[vendor] = formatCurrency(price);
    }

    return result as Record<FlightVendor, string>;
  }
}
