import { winnersPage } from "../frontend";
import { garagePage } from "../frontend";
// import { winnersTable } from "../frontend";
import { winnersRender } from "./winnersRender";
import { clearTable } from "./winnersClearTable";


export const winnersMarkup = () => {
    clearTable();
    winnersRender();

    garagePage.style.display = 'none';
    winnersPage.style.display = 'block';
}




