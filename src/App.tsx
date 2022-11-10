import { Refine } from "@pankod/refine-core"
import {
  notificationProvider,
  Layout,
  ErrorComponent,
} from "@pankod/refine-antd"
import routerProvider from "@pankod/refine-react-router-v6"
import dataProvider, { GraphQLClient } from "@pankod/refine-hasura"
import "@pankod/refine-antd/dist/styles.min.css"
import { Title } from "./components/Title"
import TerminalPage from "./components/TerminalPage/TerminalPage"
import { ShowDetailsOfTerminal } from "./pages/Terminal/show"
import { FilterView } from "./components/Filter/Filter"
import EditNetworkConfig from "./pages/NetworkConfig/editNetworkConfig"
import CreateNetworkCOnfig from "./pages/NetworkConfig/createTerminal"
import { TerminalEdit } from "./pages/Terminal"
import EditPrinterConfig from "./pages/PrinterConfig/editPrinterConfig"

const API_URL = `${process.env.REACT_APP_API}/v1/graphql`

const client = new GraphQLClient(API_URL, {
  headers: {
    "x-hasura-role": "admin",
  },
})

const gqlDataProvider = dataProvider(client)

const App: React.FC = () => {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={gqlDataProvider}
      Title={Title}
      resources={[
        {
          name: "HecOne_Terminal",
          list: TerminalPage,
          show: ShowDetailsOfTerminal,
          edit: TerminalEdit,
        },
        {
          name: "HecOne_Terminal",
          list: FilterView,
        },
        {
          name: "HecOne_PrinterConfig",
          edit: EditPrinterConfig,
        },
        {
          name: "HecOne_NetworkConfig",
          parentName: "HecOne_Terminal",
          options: { route: "HecOne_NetworkConfig" },
          create: CreateNetworkCOnfig,
          edit: EditNetworkConfig,
        },
      ]}
      notificationProvider={notificationProvider}
      Layout={Layout}
      catchAll={<ErrorComponent />}
    />
  )
}

export default App
