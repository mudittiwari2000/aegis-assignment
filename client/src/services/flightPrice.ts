import { AxiosResponse } from 'axios';
import axiosClient from '../axios';
import { FlightPriceResponse } from '../lib/types/flight';

export const getFlightDetailsService = async (): Promise<
  AxiosResponse<FlightPriceResponse, unknown>
> => {
  return await axiosClient.post<FlightPriceResponse>(
    '/flight-prices/by-preference'
  );
};
