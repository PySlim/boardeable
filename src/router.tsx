import { createBrowserRouter } from "react-router-dom"
import App from "./App.tsx";
import PageNotFound from "./core/components/pageNotFound/Page.not.found.tsx";
import Login from "./core/components/login/Login.tsx";
import Account from "./core/components/account/Account..tsx";
import Boards from "./core/components/Boards/Boards.tsx";
import Folder from "./core/components/folder/folder.tsx";
import Sign from "./core/components/sign/Sign.tsx";
import PrivateRoute from "./routes/privateRoute/Private.route.tsx";
import {loader as accountLoader} from "./core/components/account/account.loader.tsx";
import {loader as boardLoader} from "./core/components/Boards/board.loader.ts";
import {loader as folderLoader} from "./core/components/folder/folder.loader.ts";
export const router = createBrowserRouter([
    {
        id: "app",
        path: '/',
        element: <App/>,
        errorElement: <PageNotFound/>,
        children:[
            {
                index: true,
                element:<Login/>
            },
            {
                path: "/sign",
                element: <Sign/>
            },
            {
                path: "/account",
                loader: accountLoader,
                element: <PrivateRoute>
                    <Account/>
                    </PrivateRoute>
            },
            {
                path: "/folder/:id",
                loader: folderLoader,
                element: <PrivateRoute>
                <Folder/>
                    </PrivateRoute>
            },
            {
                path: "/boards",
                loader: boardLoader,
                element: <PrivateRoute>
                <Boards/>
                    </PrivateRoute>
                    }

        ]
    }
])