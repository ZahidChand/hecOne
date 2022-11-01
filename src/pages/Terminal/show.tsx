// import { useShow, IResourceComponentsProps } from "@pankod/refine-core";

// import {
//     Show,
//     Typography,
//     MarkdownField,
//     RefreshButton,
// } from "@pankod/refine-antd";

// import { ITerminal } from "../../interfaces";

// const { Title, Text } = Typography;

// export const TerminalShow: React.FC<IResourceComponentsProps> = () => {
//     const metaData = {
//         fields: [
//             "id",
//               "name",
//               "longitude",
//               "latitude",
//               "created_at",
//         ],
//     };

//     const { queryResult } = useShow<ITerminal>({
//         metaData,
//     });

//     const { data, isLoading } = queryResult;
//     const record = data?.data;

//     return (
//         <Show
//             isLoading={isLoading}
//             pageHeaderProps={{
//                 extra: (
//                     <RefreshButton
//                         onClick={() => {
//                             queryResult.refetch();
//                         }}
//                     />
//                 ),
//             }}
//         >
//             <Title level={5}>Id</Title>
//             <Text>{record?.id}</Text>

//             <Title level={5}>Name</Title>
//             <Text>{record?.name}</Text>

//             <Title level={5}>Longitude</Title>
//             <Text>{record?.longitude}</Text>

//             <Title level={5}>Latitude</Title>
//             <Text>{record?.latitude}</Text>

//             <Title level={5}>Terminal Address</Title>
//             <Text>{record?.terminalAddress}</Text>
//         </Show>
//     );
// };


//****************************************** */

import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useBreakpoint } from '@chakra-ui/react';
import { Avatar, Button, Card, Col, EditButton, Grid, Icons, List, Row, Space, Tabs, Typography, useTable } from '@pankod/refine-antd'
import { HttpError, IResourceComponentsProps, useShow } from '@pankod/refine-core'
import React from 'react'
import { INetworkConfig, ITerminal } from '../../interfaces';
import editNetworkConfig from '../Terminal/editNetworkConfig';
// const { useBreakpoint } = Grid;

export const ShowDetailsOfTerminal: React.FC<IResourceComponentsProps> = () => {

    // const { queryResult: terminalQueryResult } = useShow<ITerminal>();
    // const terminal = terminalQueryResult.data?.data;



    // const { xl } = useBreakpoint();

    // const { tableProps } = useTable<INetworkConfig, HttpError>({
    //     resource: " HecOne_Terminal",
    //     initialSorter: [
    //         {
    //             field: "id",
    //             order: "desc",
    //         },
    //     ],
    //     permanentFilter: [
    //         {
    //             field: "HecOne_NetworkConfig.terminal.id",
    //             operator: "eq",
    //             value: terminal?.id,
    //         },
    //     ],
    //     initialPageSize: 4,
    //     queryOptions: {
    //         enabled: terminal !== undefined,
    //     },
    //     syncWithLocation: false,
    // });


    return (
        <>
            <Row>
                <Col xl={5} lg={24} xs={24}>
                    <Card bordered={false} style={{ height: "100%" }}>
                        <Space
                            direction="vertical"
                            style={{ width: "100%", height: "100%" }}
                        >
                            <Space
                                direction="vertical"
                                style={{ textAlign: "center", width: "100%" }}
                            >
                                <Avatar
                                    size={120}
                                    src={"https://previews.123rf.com/images/olkita/olkita1812/olkita181200061/116085498-black-isolated-outline-icon-of-fuel-pump-on-white-background-line-icon-of-fuel-station.jpg"}
                                ></Avatar>
                                <Typography.Title level={5}>
                                    Terminal_#12311
                                </Typography.Title>
                            </Space>
                            <Space
                                direction="vertical"
                                style={{
                                    width: "100%",
                                    // textAlign: xl ? "unset" : "center",
                                }}
                            >
                                <Typography.Text>
                                    <Icons.EnvironmentOutlined />{" "}
                                    Berlin
                                </Typography.Text>

                                <Typography.Text>
                                    <Icons.HomeOutlined /> {"TerminalAddress1"}
                                </Typography.Text>
                            </Space>
                        </Space>
                    </Card>
                </Col>
                <div style={{
                    borderLeft: "2px solid black",
                }}></div>
                <Col xl={18} xs={24}>

                    <List
                        title={("Terminal Configurations")}
                        pageHeaderProps={{
                            extra: <></>,
                        }}
                    >
                        <Tabs defaultActiveKey="1">
                            <Tabs.TabPane tab="Network Configurations" key="1">
                                <TableContainer>
                                    <Table size='sm' width={"100%"}>
                                        <Thead style={{ paddingBottom: "2px" }}>
                                            <Tr>
                                                <Th>Name</Th>
                                                <Th>Server Port</Th>
                                                <Th>Server Host</Th>
                                                <Th>Server Protocol</Th>
                                                <Th>Keys</Th>
                                                <Th>Actions</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody textAlign={"center"}>
                                            <Tr height={"40px"} >
                                                <Td>User1</Td>
                                                <Td>1234</Td>
                                                <Td>sr1.host1.com</Td>
                                                <Td>serverProtocol1</Td>
                                                <Td>[ "Hello", "There123", "Demo", "Test" ]</Td>
                                                <Td><EditButton
                                                    hideText
                                                    size="small"
                                                // recordItemId={record.id}
                                                /></Td>
                                            </Tr>
                                            <Tr height={"40px"}>
                                                <Td>User2</Td>
                                                <Td>5678</Td>
                                                <Td>sr2.host2.com</Td>
                                                <Td>serverProtocol2</Td>
                                                <Td>[ "wxyz", "lmno", "pqrst" ]</Td>
                                                <Td><EditButton
                                                    hideText
                                                    size="small"
                                                // recordItemId={record.id}
                                                /></Td>
                                            </Tr>
                                            <Tr height={"40px"}>
                                                <Td>User007</Td>
                                                <Td>231</Td>
                                                <Td>sh123</Td>
                                                <Td>servPortal987</Td>
                                                <Td>[ "abdcefghi", "jklmnop" ]</Td>
                                                <Td><EditButton
                                                    hideText
                                                    size="small"
                                                // recordItemId={record.id}
                                                /></Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Printer Configurations" key="2">
                                <TableContainer>
                                    <Table size='sm' width={"100%"}>
                                        <Thead style={{ paddingBottom: "2px" }}>
                                            <Tr>
                                                <Th>Printer IP</Th>
                                                <Th>Paper Size</Th>
                                                <Th>Actions</Th>

                                            </Tr>
                                        </Thead>
                                        <Tbody textAlign={"center"}>
                                            <Tr height={"40px"} >
                                                <Td>192.168.0.1</Td>
                                                <Td>A4</Td>
                                                <Td><EditButton
                                                    hideText
                                                    size="small"
                                                // recordItemId={record.id}
                                                /></Td>
                                            </Tr>

                                            <Tr height={"40px"}>
                                                <Td>192.168.0.4</Td>
                                                <Td>8.5 × 14 inches</Td>
                                                <Td><EditButton
                                                    hideText
                                                    size="small"
                                                // recordItemId={record.id}
                                                /></Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </Tabs.TabPane>
                            {/* <Tabs.TabPane tab="Tab 3" key="3">
                                Content of Tab Pane 3
                            </Tabs.TabPane> */}
                        </Tabs>
                    </List>

                </Col>
            </Row>
        </>
    )
}

export default ShowDetailsOfTerminal
