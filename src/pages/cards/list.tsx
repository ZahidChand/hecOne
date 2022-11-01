import {
    IResourceComponentsProps,
    HttpError,
    useList,
    useNavigation,
} from "@pankod/refine-core";

import {
    useSimpleList,
    Row,
    AntdList,
    Col,
    Form,
    Typography,
    Card,
    Avatar,
    Input,
    Switch,
    useDrawerForm,
} from "@pankod/refine-antd";
import { ITerminal } from "../../interfaces";
import { Center, Grid, GridItem, HStack, Stack, Text, Wrap } from "@chakra-ui/react";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { GridListView } from "../Terminal";

type TerminalItemProps = {
    item: ITerminal;
};

export const CardListView: React.FC<IResourceComponentsProps> = () => {
    const { show } = useNavigation();
    const { listProps } = useSimpleList<
        ITerminal
    // HttpError,
    // { name: string; terminalAddress: string[] }

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
                "terminalAddress"
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
                    style={{ background: "#fff", padding: "24px 24px" }}
                >

                    <Col xs={24} sm={18}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexWrap: "wrap",
                                gap: "8px",
                                marginBottom: "16px",
                            }}
                        >
                            <Text style={{ fontSize: "24px" }}>
                                {("Terminal")}
                            </Text>
                            <Form.Item name="name" noStyle>
                                <Input
                                    style={{
                                        width: "400px",
                                        marginTop: "-15px",


                                    }}
                                    placeholder={(" Search Terminal")}
                                    suffix={<SearchOutlined />}
                                />
                            </Form.Item>


                            {/* <CreateButton onClick={() => createShow()}>
                                {t("Add Terminal")}
                            </CreateButton> */}
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexWrap: "wrap",
                                gap: "8px",
                                marginBottom: "16px",
                            }}
                        >
                            {listProps?.dataSource?.map((terminal) => {
                                return (
                                    <>

                                        <Card style={{ width: 340 }}>
                                            <div key={terminal?.id}>
                                                <Grid templateColumns="repeat(12, 1fr)" mt={3} mb={3}>
                                                    <GridItem colSpan={12}>
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
                                                                    {terminal?.terminalAddress}
                                                                </Text>
                                                                {/* <Text>Logitude : {terminal.longitude}</Text>
                                                                <Text>Latitude : {terminal.latitude}</Text> */}

                                                            </Stack>
                                                        </HStack>
                                                    </GridItem>
                                                </Grid>
                                            </div>
                                        </Card>

                                    </>
                                )

                            })}

                        </div>
                    </Col>
                </Row>
            </Form>

        </>
    );
};