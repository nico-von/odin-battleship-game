import { body } from "./helpers/dompoints";
import { footer } from "./view/navigation/footer";
import { header } from "./view/navigation/header";
import { main } from "./view/navigation/main";
import { initialiseGame } from "./controller/game/game-manager";
import "./styles/style.css"

body.append(header, main, footer);
await initialiseGame();
