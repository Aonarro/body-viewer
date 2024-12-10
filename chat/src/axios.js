import axios from "axios";

const headers = {
    'Accept-language': 'ru_RU',
    'Content-Type': 'application/json',
    'x-wi-client': 'wi-web'
    // 'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Mobile/15E148 Safari/604.1'
    // 'Cookie': 'wi-device-id=d3c55f45-c67b-4731-a483-3679cc9aedbd; wi-jwt-refresh=eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6W10sImlkIjoiNWVmOWQ4YjAtYjIxOS00NWY4LWE0OTQtMjlkOGNkNTA1YTlmIiwidHlwZSI6IkkiLCJzdWIiOiJoZWxsbzExMTExIiwiaWF0IjoxNzI5Nzc1MDg0LCJleHAiOjE3MzAzNzk4ODR9.G8T_LFWwBE0UPicyIkEyW04DCL12qw_snN60S_L8kmc'
};

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:9088/auth/v1',
    headers: headers,
    withCredentials: true
})

