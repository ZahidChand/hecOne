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
import { Avatar, Button, Card, Col, CreateButton, Divider, EditButton, Grid, Icons, List, Row, Space, Tabs, Typography, useTable } from '@pankod/refine-antd'
import { HttpError, IResourceComponentsProps, useNavigation, useShow } from '@pankod/refine-core'
import { create } from 'domain';
import React, { useState } from 'react'
import Breadcrumb from "../../components/Breadcrumb/breadcrumb"
import EditNetworkConfig from '../NetworkConfig/editNetworkConfig';
import EditPrinterConfig from '../PrinterConfig/editPrinterConfig';
// const { useBreakpoint } = Grid;

export const ShowDetailsOfTerminal: React.FC<IResourceComponentsProps> = () => {
    const { create } = useNavigation();
    // const [ bcrumbName, setBCrumbName] = useState();
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

            <Card bordered={false} style={{ height: "100%" }}>
                <div>
                    <Breadcrumb />
                </div>
                <Row>
                    <Col xl={5} lg={24} xs={24}>
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
                        {/* </Card> */}
                    </Col>
                    <Divider type='vertical' style={{ height: 260, borderColor: "black" }} />
                    {/* <div style={{
                                        borderLeft: "2px solid black",
                                    }}></div> */}
                    <Col xl={18} xs={24}>
                        {/* <Card > */}
                        <Tabs defaultActiveKey="1">
                            <Tabs.TabPane tab="Network Configurations" key="1">

                                <TableContainer>
                                    <EditNetworkConfig />

                                </TableContainer>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Printer Configurations" key="2">
                                <TableContainer>
                                    <Table size='sm' width={"100%"}>
                                        <EditPrinterConfig />
                                    </Table>
                                </TableContainer>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Restrictions" key="3">
                                <h1>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Odio, cumque nobis beatae odit optio vero, amet maiores
                                    dolore necessitatibus dignissimos quia, facere adipisci pariatur
                                    blanditiis? Optio ea velit, quasi sequi hic sed, odio saepe
                                    culpa nesciunt explicabo dolore commodi perferendis id nemo.
                                    Recusandae modi molestiae cumque vero labore similique explicabo!
                                </h1>
                            </Tabs.TabPane>
                        </Tabs>

                    </Col>
                </Row >
            </Card>
        </>
    )
}

export default ShowDetailsOfTerminal
