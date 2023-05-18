import axios from "axios";
import {setUserInfo} from "../store/userSlice";

export const demo = async (body) => request("demo", body);

export const initAxios = dispatch => {
    axios.defaults.validateStatus = status => {
        [400, 401, 500].includes(status) && dispatch(setUserInfo({}));
        return true;
    };
};
let token = ""
export const setToken = (newToken) => token = newToken
const request = async (url, body) => {

    return (await axios.post("/api/" + url, body,
        {
            headers: {
                "X-Access-Token": token
            }
        })).data
}