import axios from "axios";
import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";

export type PicList = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

type Pic = {
  data: [PicList];
};
export type PicInfo = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

export default class API {
  public static getInstacne() {
    if (!this.instance) {
      this.instance = new API();
    }
    return this.instance;
  }
  private static instance: API;
  private baseURL: string = "https://picsum.photos/";
  private axios: AxiosInstance | undefined;
  private constructor() {
    this.CreateAxiosInstance();
  }
  public CreateAxiosInstance() {
    this.axios = axios.create({
      baseURL: this.baseURL,
      timeout: 100000,
    });
  }
  public axiosWrapper<T>(axiosArgument: any): AxiosPromise<T> {
    return new Promise((resolve, reject) => {
      this.axios(axiosArgument)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  }
  public GetPics(params: { page_id: number }): AxiosPromise<Pic> {
    let path = `/v2/list?page=${params["page_id"]}&limit=60`;
    delete params["page_id"];
    const axiosArgument = {
      method: "GET",
      url: path,
    };
    return this.axiosWrapper<Pic>(axiosArgument);
  }
  public GetPicInfo(params: { picId: number }): AxiosPromise<PicInfo> {
    let path = `/id/${params["picId"]}/info`;
    delete params["picId"];
    const axiosArgument = {
      method: "GET",
      url: path,
    };
    return this.axiosWrapper<PicInfo>(axiosArgument);
  }
}
