import mongoose, { Document } from 'mongoose';
import { FlightVendor } from '../lib/types/flight';

export interface IFlightDetails extends Document {
  source: string;
  destination: string;
  vendor: FlightVendor;
  price: number;
  date: Date;
}

const flightDetailsSchema = new mongoose.Schema({
  source: { type: String, required: true },
  destination: { type: String, required: true },
  vendor: {
    type: String,
    enum: ['indigo', 'vistara', 'airAsia'],
    required: true
  },
  price: { type: Number, required: true },
  date: { type: Date, required: true }
});

export const FlightDetails = mongoose.model<IFlightDetails>(
  'FlightDetails',
  flightDetailsSchema
);
