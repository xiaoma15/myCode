import { request } from "@/utils";

export const getChannelsAPI = () =>
    request({
        url: "/channels",
        method: "get"
    });

export const publishArticleAPI = (data) =>
    request({
        url: "/mp/articles",
        method: "post",
        data,
        params: {
            draft: false,
        },
    });


export const getArticleListAPI = (params) =>
    request({
        url: "/mp/articles",
        method: "get",
        params,
    });

export const deleteArticleAPI = (id) =>
    request({
        url: `/mp/articles/${id}`,
        method: "delete",
    });

export const getArticleByIdAPI = (id) =>
    request({
        url: `/mp/articles/${id}`,
        method: "get",
    });

export const editeArticleAPI = (data) =>
    request({
        url: `/mp/articles/${data.id}`,
        method: "put",
        data,
        params: {
            draft: false,
        },
    });