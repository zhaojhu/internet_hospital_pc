/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import Toast from '@nutui/nutui/dist/packages/toast/toast.js';  // 加载构建后的JS
import '@nutui/nutui/dist/packages/toast/toast.css';  //加载构建后的CSS

let Loading = null
// 环境的切换
if (process.env.NODE_ENV == 'development') {
	axios.defaults.baseURL = "/api";
	// axios.defaults.baseURL = 'http://www.zjcoo.cn:8081';
} else if (process.env.NODE_ENV == 'debug') {
	axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV == 'production') {
	axios.defaults.baseURL = '';
}

// 请求超时时间
axios.defaults.timeout = 10000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(
	config => {
		Loading = Toast.loading('加载中...');
		return config;
	},
	error => {
		return Promise.error(error);
	})

// 响应拦截器
axios.interceptors.response.use(
	response => {
		Loading.hide()
		if (response.status === 200) {
			return Promise.resolve(response);
		} else {
			return Promise.reject(response);
		}
	},
	// 服务器状态码不是200的情况    
	error => {
		Loading.hide()
		if (error.response.status) {
			switch (error.response.status) {
				case 401:
					alert('开发者并未配置401')
					break;
				case 403:
					alert('开发者并未配置403')
					break;
				case 404:
					alert('开发者并未配置404')
					break;
					// 其他错误，直接抛出错误提示                
				default:
					alert('开发者并未配置其他错误(不包含401,403,404)')
			}
			return Promise.reject(error.response);
		}
	}
);
/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params) {
	return new Promise((resolve, reject) => {
		axios.get(
			url,
			{
				withCredentials: true,
				params: params
			}
			)
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.data)
			})
	});
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
	return new Promise((resolve, reject) => {
		axios.post(
			url,
			params,
			{
				withCredentials: true
			}
		)
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.data)
			})
	});
}
