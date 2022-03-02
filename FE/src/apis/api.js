import { callApi } from "config/configApi"

export const clientApi = {
    category() {
        return callApi("https://127.0.0.1:8000/products");
    }
}