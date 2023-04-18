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
// import createAppBridge from '@shopify/app-bridge';



export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  // const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");


  // const appBridge = createAppBridge({
  //   apiKey: '5ab27767c742f624d9b91b8a476b72ce',
  //   shopOrigin: 'https://it-path-dev-store.myshopify.com',
  //   host: "https://it-path-dev-store.myshopify.com"
  // });

  return (
    <PolarisProvider>
      <AppBridgeProvider >
        <QueryProvider>
          <Provider store={store}>
            {/* <AppBridgeContext.Provider value={appBridge}> */}
            <NavigationMenu
              navigationLinks={[...navigation]}
            />
            <Routing />
            {/* </AppBridgeContext.Provider> */}
          </Provider>
        </QueryProvider>
      </AppBridgeProvider>
    </PolarisProvider>
  );
}
