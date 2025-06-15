import { request } from "@/utils";
export const logInAPI = (LoginData) =>
    request({
        url: "/authorizations",
        method: "post",
        data: LoginData,
    });

export const userInfoAPI = () =>
    request({
        url: "/user/profile",
        method: "get",
    });

