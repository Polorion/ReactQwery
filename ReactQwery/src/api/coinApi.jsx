import axios from "axios";

export const coinApi = {
    getAllCoins: () => {
        return axios('https://api.coinstats.app/public/v1/coins')
    }
}