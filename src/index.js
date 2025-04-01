import { body } from "./helpers/dompoints";
import { footer } from "./view/navigation/footer";
import { header } from "./view/navigation/header";
import { main } from "./view/navigation/main";

import "./styles/style.css"

body.append(header, main, footer);
