import { NavigationMenu } from "@shopify/app-bridge-react";
import {
  AppBridgeProvider,
  QueryProvider,
  PolarisProvider,
} from "./components";
import { navigation } from "./pages";
import Routing from "./Routes";
import { store } from "./redux";
import { Provider } from "react-redux";

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  // const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");

  return (
    <PolarisProvider>
      <AppBridgeProvider>
        <QueryProvider>
          <Provider store={store}>
          <NavigationMenu
            navigationLinks={[...navigation]}
          />
          <Routing />
          </Provider>
        </QueryProvider>
      </AppBridgeProvider>
    </PolarisProvider>
  );
}
