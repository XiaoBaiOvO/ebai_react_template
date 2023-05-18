import React from "react";
import Result404 from "../pages/result/404"

import Main from "../pages/main"

// 路由表
export const routes = [
    {
        path: "/",
        element: <Main/>,
    },
    {
        path: "*",
        element: <Result404/>,
    }
];