import axios from 'axios';
import router from "@/routes/router.js"
// url 경로 변경 예정
// import { baseURL } from "@/utils/basicURL.ts"

const baseURL = "";

// Axios 인스턴스 생성
const axiosInstance = axios.create({
    baseURL: baseURL, 
    timeout: 10000, 
});
// 요청 인터셉터 설정
axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
// 응답 인터셉터 설정
axiosInstance.interceptors.response.use(
    response => {
        // 서버로부터 새 토큰이 반환되면 저장
        const newToken = response.headers['authorization'];
        if (newToken) {
            localStorage.setItem('token', newToken.replace('Bearer ', ''));
        }
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 403:
                    router.push('/');
                    alert("접근 권한이 없습니다.")
                    break;
                default:
                    return Promise.reject(error);
            }
        }
        
    }
);
export default axiosInstance;