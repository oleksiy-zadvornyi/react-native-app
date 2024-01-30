import axios, {AxiosRequestConfig} from 'axios';

export const BaseAxiosConfig: AxiosRequestConfig = {
  baseURL: 'http://localhost:3000',
};

const http = axios.create(BaseAxiosConfig);

export default http;
