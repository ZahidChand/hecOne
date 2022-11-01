import { Refine } from "@pankod/refine-core";
import {
    notificationProvider,
    Layout,
    ErrorComponent,
} from "@pankod/refine-antd";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider, {
    liveProvider,
    GraphQLClient,
    graphqlWS,
} from "@pankod/refine-hasura";
import "@pankod/refine-antd/dist/styles.min.css";

import { Title } from "./components/Title";
import TerminalPage from "./components/TerminalPage/TerminalPage";
import { ShowDetailsOfTerminal } from "./pages/Terminal/show";
import { FilterView } from "./components/Filter/Filter";

const API_URL = "http://192.168.0.129:8080/v1/graphql";

const client = new GraphQLClient(API_URL, {
    headers: {
        "x-hasura-role": "admin",
    },
});

const gqlDataProvider = dataProvider(client);

const App: React.FC = () => {
    return (
        <Refine
            routerProvider={routerProvider}
            dataProvider={gqlDataProvider}
            Title={Title}
            resources={[
                // {
                //     name: "HecOne_Terminal",
                //     list: PostList,
                //     create: PostCreate,
                //     edit: PostEdit,
                //     show: PostShow,
                // },
                {
                    name: "HecOne_Terminal",
                    list: TerminalPage,
                    show: ShowDetailsOfTerminal
                },
                {
                    name: "HecOne_Terminal",
                    list: FilterView
                }
            ]}
            notificationProvider={notificationProvider}
            Layout={Layout}
            catchAll={<ErrorComponent />}
        />
    );
};

export default App;