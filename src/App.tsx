import React from "react"
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
import { TerminalPage } from "./components/TerminalPage/TerminalPage"
import { TerminalDetails } from "./pages/Terminal/show"
import { EditNetworkConfig } from "./pages/NetworkConfig/edit-network-config"
import { CreateNetworkCOnfig } from "./pages/NetworkConfig/createTerminal"
import { TerminalEdit } from "./pages/Terminal/edit-terminal"
import { EditPrinterConfig } from "./pages/PrinterConfig/editPrinterConfig"
import { StationPage } from "./pages/Station/stationPage"
import { StationIcon, TerminalIcon } from "./components/icons"

const API_URL = "http://192.168.0.14:8080/v1/graphql"

const client = new GraphQLClient(API_URL, {
  headers: {
    "x-hasura-role": "admin",
  },
})

const gqlDataProvider = dataProvider(client)

export const App: React.FC = () => {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={gqlDataProvider}
      Title={Title}
      resources={[
        {
          name: "HecOne_Terminal",
          list: TerminalPage,
          show: TerminalDetails,
          edit: TerminalEdit,
          icon: <TerminalIcon />,
          options: { label: "Terminals" },
        },
        {
          name: "HecOne_Station",
          list: StationPage,
          icon: <StationIcon style={{ right: "10px" }} />,
          options: { label: "Stations" },
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
