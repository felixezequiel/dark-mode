import { host } from '../config/host'
import axios, { AxiosPromise } from 'axios'
import { BasicAuthTypes } from '../types/global'

export const SearchUser = (dados: BasicAuthTypes):AxiosPromise => axios.get(host + '/user', { auth: dados })