import axios from 'axios'

export function request(config) {
    
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/w6',
        timeout: 5000
    })
    // 2.axios的拦截器
        // 2.1 请求拦截的作用
        instance.interceptors.request.use(config => {
            // console.log(config)
            // 1.比如config中的一些信息不符合服务区的要求
            // 2.不如每次发送网络请求时，都希望在界面中显示一个请求的图标
            // 3.某系网络请求（比如登录（token））,必须携带一些特殊的信息
            return config
        }, err =>{
            console.log(err)
        })
        //2.2响应拦截
        instance.interceptors.response.use(res => {
            // console.log(res);
            return res.data
        }, err => {
            console.log(err);
        })
    // 3.发送网络请求
    return instance(config)
   
}
 