import { body } from "./helpers/dompoints";
import { footer } from "./view/navigation/footer";
import { header } from "./view/navigation/header";
import { main } from "./view/navigation/main";

body.append(header, main, footer);