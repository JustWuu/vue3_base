import type { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import { useEnv } from '@/hooks'
import { Storage } from '@/utils'
import { AxiosLoading } from './loading'

const storage = new Storage()
const axiosLoading = new AxiosLoading()
const { VITE_BASE_API } = useEnv()

const service: AxiosInstance = axios.create({
  baseURL: VITE_BASE_API,
  timeout: 10 * 1000, // 请求超时时间
  headers: { 'Content-Type': 'application/json;charset=UTF-8' }
})

const token = storage.getLocalStorage('token')

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 这里可以设置token: config!.headers!.Authorization = token
    token && (config!.headers!.Authorization = token)
    axiosLoading.addLoading()
    return config
  },
  (error: any) => {
    // 处理请求错误
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response: AxiosResponse) => {
    axiosLoading.closeLoading()
    const data = response.data
    return data
    // 如果回傳沒有帶code可能導致回傳return Promise.reject
    // 但其實回傳的是純物件，最後導致回傳的Promise出錯
    // 這邊先註解，實際使用時要與後端確認好再進行調整
    // if (data.code === 200) {
    //   return data
    // } else {
    //   return Promise.reject(data)
    // }
  },
  (err) => {
    axiosLoading.closeLoading()
    return Promise.reject(err.response)
  }
)

class Request {
  /**
   * 集合(collection)的名稱
   */
  path: string
  constructor(path: string) {
    this.path = path
  }
  /**
   * get
   */
  get<T = any>(url: string = '', data?: any): Promise<T> {
    return this.request('GET', url, { params: data })
  }
  /**
   * post
   */
  post<T = any>(url: string = '', data?: any): Promise<T> {
    return this.request('POST', url, { data })
  }
  /**
   * put
   */
  put<T = any>(url: string = '', data?: any): Promise<T> {
    return this.request('PUT', url, { data })
  }
  /**
   * delete
   */
  delete<T = any>(url: string = '', data?: any): Promise<T> {
    return this.request('DELETE', url, { params: data })
  }
  /**
   * request
   */
  request<T = any>(method = 'GET', id: string = '', data?: any): Promise<T> {
    const url = `${this.path}/${id}`

    return new Promise((resolve, reject) => {
      service({ method, url, ...data })
        .then((res) => {
          resolve(res as unknown as Promise<T>)
        })
        .catch((e: Error | AxiosError) => {
          reject(e)
        })
    })
  }
}

export default Request
