import { MainPage } from "../../pages/main-page/main-page";
import { FavoritesPage } from "../../pages/favorities-page/favorities-page";
import { LoginPage } from "../../pages/login-page/login-page";
import { OfferPage } from "../../pages/offer-page/offer-page";
import { NotFoundPage } from "../not-found/not-found";

function App() {
    return(
        <> <MainPage /> 
        <LoginPage/>
        <OfferPage/>
        <FavoritesPage/>
        <NotFoundPage/>
</>
       
    )
}
export {App};