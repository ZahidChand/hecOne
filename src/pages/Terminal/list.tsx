import {
    IResourceComponentsProps,
    getDefaultFilter,
    useMany,
} from "@pankod/refine-core";

import {

    Table,
    useTable,
    Space,
    EditButton,
    ShowButton,
    DeleteButton,
    getDefaultSortOrder,
    FilterDropdown,
    Select,
    useSelect,
    DateField,
    TextField,
    Button,
    Icon,
    Form,
    Input,
    Row,
    Col,
} from "@pankod/refine-antd";

import { ITerminal } from "../../interfaces";
import { List, Text } from "@chakra-ui/react";
import { SearchOutlined } from "@ant-design/icons";

export const GridListView: React.FC<IResourceComponentsProps> = () => {
    const { tableProps, filters, sorter } = useTable<ITerminal>({
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
            ],
        },
    });

    return (

        <>
            <Form>
                <Row
                    // {...listProps}
                    gutter={[16, 16]}
                    style={{ background: "#fff", padding: "16px 24px" }}
                >

                    <Col xs={24} sm={18}></Col>
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
                                    marginLeft: "170px"
                                }}
                                placeholder={(" Search Terminal")}
                                suffix={<SearchOutlined />}
                            />
                        </Form.Item>


                        {/* <CreateButton onClick={() => createShow()}>
                                {t("Add Terminal")}
                            </CreateButton> */}
                    </div>

                    <div>
                        <List>
                            <Table {...tableProps} rowKey="id">
                                <Table.Column
                                    dataIndex="name"
                                    title="Name"
                                    sorter={{ multiple: 2 }}
                                    defaultSortOrder={getDefaultSortOrder("Name", sorter)}
                                />
                                <Table.Column
                                    dataIndex="longitude"
                                    title="Longitude"
                                    sorter={{ multiple: 1 }}
                                />
                                <Table.Column
                                    dataIndex="latitude"
                                    title="Latitude"
                                    sorter={{ multiple: 1 }}
                                />
                                <Table.Column
                                    dataIndex="id"
                                    title="Terminal Number"
                                    sorter={{ multiple: 2 }}
                                    defaultSortOrder={getDefaultSortOrder("id", sorter)}
                                />
                                <Table.Column
                                    dataIndex="created_at"
                                    title="Created At"
                                    render={(value) => <DateField value={value} format="LLL" />}
                                    defaultSortOrder={getDefaultSortOrder("created_at", sorter)}
                                    sorter
                                />
                                <Table.Column<ITerminal>
                                    title="Actions"
                                    dataIndex="actions"
                                    render={(_, record) => (
                                        <Space>
                                            <EditButton
                                                hideText
                                                size="small"
                                                recordItemId={record.id}
                                            />
                                            <ShowButton
                                                hideText
                                                size="small"
                                                recordItemId={record.id}
                                            />
                                            <DeleteButton
                                                hideText
                                                size="small"
                                                recordItemId={record.id}
                                                metaData={{
                                                    fields: [
                                                        "id",
                                                        "name",
                                                        "longitude",
                                                        "latitude",
                                                        "created_at",
                                                    ],
                                                }}
                                            />
                                        </Space>
                                    )}
                                />
                            </Table>
                        </List>
                    </div>
                </Row>
            </Form>
        </>
    );
};