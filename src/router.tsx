import { createBrowserRouter } from "react-router-dom"
import App from "./App.tsx";
import PageNotFound from "./core/components/pageNotFound/Page.not.found.tsx";
import LoginSign from "./core/components/loginSign/Login.sign.tsx";
import Account from "./core/components/account/Account..tsx";
import Boards from "./core/components/Boards/Boards.tsx";
import Folder from "./core/components/folder/folder.tsx";
export const router = createBrowserRouter([
    {
        id: "app",
        path: '/',
        element: <App/>,
        errorElement: <PageNotFound/>,
        children:[
            {
                path: "/",
                element:<LoginSign/>
            },
            {
                path: "/account",
                element: <Account/>
            },
            {
                path: "/folder",
                element: <Folder/>
            },
            {
                path: "/Boards",
                element: <Boards/>
            }

        ]
    }
])