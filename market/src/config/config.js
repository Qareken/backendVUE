import {setAxiosInterceptor} from "./axios-interceptor";

// eslint-disable-next-line no-unused-vars
export function initVueApp(vue) {
setAxiosInterceptor(()=>console.log("Unauthorized"))
}