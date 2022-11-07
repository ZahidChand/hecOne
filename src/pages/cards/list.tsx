import {
    IResourceComponentsProps,
    useNavigation,
} from "@pankod/refine-core";

import {
    useSimpleList,
    Row,
    Col,
    Form,
    Card,
    Avatar
} from "@pankod/refine-antd";
import { ITerminal } from "../../interfaces";
import { Center, Grid, GridItem, HStack, Stack, Text, Wrap } from "@chakra-ui/react";
import { FilterView } from "../../components/Filter/Filter";

type TerminalItemProps = {
    item: ITerminal;
};

export const CardListView: React.FC<IResourceComponentsProps> = () => {
    const { show } = useNavigation();
    const { listProps } = useSimpleList<
        ITerminal
    >({
        initialSorter: [
            {
                field: "name",
                order: "asc",
            },
        ],
        metaData: {
            fields: [
                "id",
                "name",
                "longitude",
                "latitude",
                "created_at",
                "device_id",
                "station",
                "created_by",
                "type",
                "status",
                "terminalAddress",
                "terminal_street",
                "terminal_city",
                "terminal_state",
                "terminal_zipcode"
            ],
        },
        pagination: { pageSize: 12, defaultCurrent: 2 },
    });


    return (
        <>
            <Form>
                <Row
                    // {...listProps}
                    gutter={[16, 16]}
                    style={{ background: "#fff", padding: "80px", alignContent: "center" }}
                >
                            {listProps?.dataSource?.map((terminal) => {
                                return (
                                    <>
                            <div style={{display: "flex" }}>
                                        <Card style={{ width: 400 , marginRight: "20px", marginLeft: "20px"}}>
                                            <div key={terminal?.id}>
                                                        <HStack>
                                                            <Center onClick={() => {
                                                                show("HecOne_Terminal", terminal?.id);
                                                            }}>
                                                                <Avatar
                                                                    style={{ cursor: "pointer" }}
                                                                    size={120}
                                                                    src={"https://previews.123rf.com/images/olkita/olkita1812/olkita181200061/116085498-black-isolated-outline-icon-of-fuel-pump-on-white-background-line-icon-of-fuel-station.jpg"}
                                                                    alt={terminal.name}
                                                                />
                                                            </Center>
                                                            <Stack>
                                                                <Text fontWeight={"bold"}>
                                                                    {terminal?.name}
                                                                </Text>

                                                                <Text fontWeight={"sm"}>
                                                                    <b>Station : </b>
                                                                    {terminal?.station}
                                                                </Text>

                                                                <Text fontWeight={"sm"}>
                                                                    <b>Status : </b>
                                                                    {terminal?.status}
                                                                </Text>

                                                                <Text fontWeight={"sm"}>
                                                                    <b>City : </b>
                                                                    {terminal?.terminal_city}
                                                                </Text>
                                                            </Stack>
                                                        </HStack>
                                            </div>
                                        </Card>
                                        </div>
                                    </>
                                )
                            })}
                </Row>
            </Form>
        </>
    );
};