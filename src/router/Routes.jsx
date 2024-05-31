import HomePage from "../page/home/HomePage";
import LoginPage from "../page/login/LoginPage";
import Portal from "../page/portal";
import CreateNewSupplier from "../page/portal-supplier-new/CreateNewSupplier";
import UpdateSupplier from "../page/portal-supplier-update/UpdateSupplier";
import PortalSupplier from "../page/portal-supplier/PortalSupplier";
import SupplierDetails from "../page/portal-supplier-details/SupplierDetails";
import PortalSeller from "../page/portal-seller/PortalSeller";
import PostDetailPage from "../page/post/PostDetailPage";
import MainLayout from "./MainLayout";
import MainLayoutAdmin from "./MainLayoutAdmin";

const Routes = [
  {
    layout: MainLayout,
    routes: [
      {
        id: "POST_DETAIL",
        component: <PostDetailPage />,
        guards: [],
        fallback: () => null,
      },
      {
        id: "LOGIN",
        component: <LoginPage />,
        guards: [],
        fallback: () => null,
      },
      {
        id: "HOME",
        component: <HomePage />,
        guards: [],
        fallback: () => null,
      },
    ],
  },
  {
    layout: MainLayoutAdmin,
    routes: [
      {
        id: "PORTAL_SELLER",
        component: <PortalSeller />,
        guards: [],
        fallback: () => null,
      },
      {
        id: "PORTAL_SUPPLIER_NEW",
        component: <CreateNewSupplier />,
        guards: [],
        fallback: () => null,
      },
      {
        id: "PORTAL_SUPPLIER_DETAIL",
        component: <SupplierDetails />,
        guards: [],
        fallback: () => null,
      },
      {
        id: "PORTAL_SUPPLIER_UPDATE",
        component: <UpdateSupplier />,
        guards: [],
        fallback: () => null,
      },
      {
        id: "PORTAL_SUPPLIER",
        component: <PortalSupplier />,
        guards: [],
        fallback: () => null,
      },
      {
        id: "PORTAL",
        component: <Portal />,
        guards: [],
        fallback: () => null,
      },
    ],
  },
];
export default Routes;
