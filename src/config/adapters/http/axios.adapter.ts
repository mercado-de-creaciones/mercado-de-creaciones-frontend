import axios, { AxiosError, AxiosInstance } from "axios";

import { HttpAdapter } from "./http.adapter";
import { MessageResponse } from "@/infrastructure/interfaces/api.responses";

interface Options{
  baseURL: string;
  params?: Record<string, string>;
}

export class AxiosAdapter implements HttpAdapter{
  private axiosInstance: AxiosInstance;

  constructor(options: Options) { 
    this.axiosInstance = axios.create({
      baseURL: options.baseURL,
      params: options.params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }

  async get<T>(url: string, options?: Record<string, unknown>): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get<T>(url, options);
      return data;
    } catch (error) {
      const serverError = error as AxiosError;
      const errorMessage = serverError.response?.data as MessageResponse;
      
      throw new Error(errorMessage.message);
    }
  }

  async post<T>(url: string, body: Record<string, unknown>, options?: Record<string, unknown>): Promise<T> {
    try {
      const { data } = await this.axiosInstance.post<T>(url, body, options);
      return data;
    } catch (error) {
      const serverError = error as AxiosError;
      const errorMessage = serverError.response?.data as MessageResponse;
      throw new Error(errorMessage.message);
    }
  }

  async put<T>(url: string, body: Record<string, unknown>, options?: Record<string, unknown>): Promise<T> {
    try {
      const { data } = await this.axiosInstance.put<T>(url, body, options);
      return data;
    } catch (error) {
      const serverError = error as AxiosError;
      const errorMessage = serverError.response?.data as MessageResponse;
      throw new Error(errorMessage.message);
    }
  }

  async delete<T>(url: string, options?: Record<string, unknown>): Promise<T> {
    try {
      const { data } = await this.axiosInstance.delete<T>(url, options);
      return data;
    } catch (error) {
      const serverError = error as AxiosError;
      const errorMessage = serverError.response?.data as MessageResponse;
      throw new Error(errorMessage.message);
    }
  }
}