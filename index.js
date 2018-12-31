import { alexaInitCode } from "./framework";
import { Header } from "./src/header";
import { Details } from "./src/details";

const firstName = "Subscribe to";
const lastName = "Pewdiepie";
alexaInitCode("app", Header({ firstName, lastName }));
alexaInitCode("app2", Details({ firstName, lastName }));
