import axios from "axios"
import { BASE_URL } from "./serverInfoConfig";

export const instance = axios.create({
	baseURL: BASE_URL,
})
instance.interceptors.request.use((config) => {
	if(localStorage.getItem('access-token') !== '') {
		config.headers = {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + localStorage.getItem('access-token')
		}
	}
	return config;
}, (errors) => {
	return Promise.reject(errors);
})
instance.interceptors.response.use((response) => {
	return response;
}, (error) => {
	const ers = error.response.status;
	if(ers === 401) {
		localStorage.removeItem('access-token');
		localStorage.removeItem('refrash-token');
		window.location('/authorization');
		return error.response;
	}
	return error;
})

export const authenticationRegister = async (registerForm) => {
	const response = await instance.post('auth/registration', registerForm);
	return response;
}
export const authenticationLogin = async (loginForm) => {
    const response = await instance.post('auth/login', loginForm);
	return response;
}
export const GetMyUserData = async () => {
    const response = await instance.get('users/myData');
	return response;
}
export const GetMyFriendsData = async () => {
    const response = await instance.get('users/myFriendsData');
	return response;
}
