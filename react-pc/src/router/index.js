import { createBrowserRouter } from "react-router-dom";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import AuthorRoute from "@/components/AuthorRoute";

import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("@/pages/Home"));
const NewPage = lazy(() => import("@/pages/New"));
const ArticlePage = lazy(() => import("@/pages/Article"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/home",
        element: <AuthorRoute><Layout /></AuthorRoute>,
        children: [
            {
                index: true,
                element: <Suspense fallback={'加载中...'}> <HomePage /> </Suspense>,
            },
            {
                path: "new",
                element: <Suspense fallback={'加载中...'}> <NewPage /> </Suspense>,
            },
            {
                path: "article",
                element: <Suspense fallback={'加载中...'}> <ArticlePage /> </Suspense>,
            }
        ],
    },
]);

export default router;
