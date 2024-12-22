import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "http://localhost:7080",
    realm: "thenotes",
    clientId: "react-client",
});

export default keycloak;