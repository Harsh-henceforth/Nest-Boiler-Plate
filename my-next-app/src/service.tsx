import axios from "axios";

// dev server
 const API_ROOT = process.env.NEXT_PUBLIC_DEV_API_URL;

// production server 
// const API_ROOT = process.env.NEXT_PUBLIC_API_ROOT_STAGING;

const service = axios.create({
  baseURL: API_ROOT,
  headers: {
    "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
    Pragma: "no-cache",
  },
});

service.defaults.timeout = 100000;

const cancelTokenSources: { [key: string]: any } = {};

service.interceptors.request.use(
  (config) => {
    const requestUrl = config.url;
    if (requestUrl && cancelTokenSources[requestUrl]) {
      cancelTokenSources[requestUrl].cancel(`Canceled previous request to ${requestUrl}`);
    }

    const source = axios.CancelToken.source();
    config.cancelToken = source.token;
    cancelTokenSources[requestUrl!] = source;

    config.headers["Content-Type"] = "application/json";
    const authToken = sessionStorage.getItem("jwtMaxUser");
    config.headers.Authorization = `Bearer ${authToken}`;
    return config;
  },
  (error) => Promise.reject(error)
);

service.interceptors.response.use(
  (response) => {
    const isGetRequest = response.config.method === "get";
    const requestUrl = response.config.url;
    if (requestUrl) delete cancelTokenSources[requestUrl];
    return response.data;
  },
  (error) => {
    if (axios.isCancel(error)) {
      console.log("Request canceled:", error.message);
    }

    const { status } = error.response || {};
    if (status === 401) {
      sessionStorage.clear();
      window.location.replace("/login");
    }

    return Promise.reject(error);
  }
);

export default service;
