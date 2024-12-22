import { ReactKeycloakProvider } from "@react-keycloak/web"
import keycloak from "./Keycloak"
import Router from "./components/router/Router"

function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <Router />
    </ReactKeycloakProvider>
  )
}

export default App
