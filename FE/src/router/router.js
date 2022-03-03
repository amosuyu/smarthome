import ClientHome from "container/Client/ClientHome/ClientHome";
import FeatureBrandDetail from "container/Client/FeatureBrandDetail/FeatureBrandDetail";


export const clientRoutes = [
    {
        index: true,
        element: <ClientHome />
    },
    {
        index: false,
        path: "/feature",
        element: <FeatureBrandDetail />
    },
]