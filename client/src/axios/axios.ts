import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { API_KEY } from '../constants/api';

const singletonEnforcer = Symbol();

class AxiosClient {
  axiosClient: AxiosInstance;
  static axiosClientInstance: AxiosClient;

  constructor(enforcer: unknown) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot initialize Axios client single instance');
    }

    this.axiosClient = axios.create({
      baseURL: API_KEY,
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

    // TODO: Interceptors can be created here
  }

  static get instance() {
    if (!this.axiosClientInstance) {
      this.axiosClientInstance = new AxiosClient(singletonEnforcer);
    }

    return this.axiosClientInstance;
  }

  get(resource: string, config = {}) {
    return this.axiosClient.get(resource, {
      ...config,
      ...this.axiosClient.defaults.headers
    } as AxiosRequestConfig<Record<string, unknown>>);
  }

  post<T = unknown>(
    resource: string,
    data: Record<string, unknown> = {},
    config = {}
  ) {
    return this.axiosClient.post<T>(resource, data, {
      ...config,
      ...this.axiosClient.defaults.headers
    } as AxiosRequestConfig<Record<string, unknown>>);
  }

  update<T = unknown>(
    resource: string,
    data: Record<string, unknown>,
    config = {}
  ) {
    return this.axiosClient.put<T>(resource, data, {
      ...config,
      ...this.axiosClient.defaults.headers
    } as AxiosRequestConfig<Record<string, unknown>>);
  }

  put<T = unknown>(
    resource: string,
    data: Record<string, unknown>,
    config = {}
  ) {
    return this.axiosClient.put<T>(resource, data, {
      ...config,
      ...this.axiosClient.defaults.headers
    } as AxiosRequestConfig<Record<string, unknown>>);
  }

  patch<T = unknown>(
    resource: string,
    data: Record<string, unknown>,
    config = {}
  ) {
    return this.axiosClient.patch<T>(resource, data, {
      ...config,
      ...this.axiosClient.defaults.headers
    } as AxiosRequestConfig<Record<string, unknown>>);
  }

  delete<T = unknown>(
    resource: string,
    data: Record<string, unknown>,
    config = {}
  ) {
    return this.axiosClient.delete<T>(resource, {
      params: data,
      ...{ ...config, ...this.axiosClient.defaults.headers }
    });
  }
}

export default AxiosClient.instance;
