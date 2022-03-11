import { callApi } from "config/configApi"

export const clientApi = {
    product() {
        return callApi("http://127.0.0.1:8000/api/products");
    },
    category() {
        return callApi("http://127.0.0.1:8000/api/category");
    },
    authLogin() {
        return callApi("http://127.0.0.1:8000/api/user")
    },
    authRegister(data) {
        return callApi("http://127.0.0.1:8000/api/register", 'POST', data)
    }
}