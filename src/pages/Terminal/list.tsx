import {
    IResourceComponentsProps,
    getDefaultFilter,
    useMany,
    CrudFilters,
    useTranslate,
    useNavigation,
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
    FormProps,
    DatePicker,
    Icons,
    Card,
} from "@pankod/refine-antd";

import { ITerminal } from "../../interfaces";
import { Box, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, List, Spacer, Text, useDisclosure } from "@chakra-ui/react";
import { SearchOutlined } from "@ant-design/icons";
import { useRef } from "react";
import { FilterView } from "../../components/Filter/Filter";
import show from "./show";
import { color } from "@pankod/refine-mui";
import "./terminal.css"
export const GridListView: React.FC<IResourceComponentsProps> = () => {
    const { tableProps, sorter, searchFormProps } = useTable<ITerminal>({
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
    const t = useTranslate();
    const { show } = useNavigation();

    return (
        <>
            <Form>
                <Row
                    // {...listProps}
                    gutter={[16, 16]}
                    style={{ background: "#fff", padding: "24px 24px" }}
                >
                    <div>
                        <List>
                            <Table {...tableProps} rowKey="id"
                                onRow={(record) => {
                                    return {
                                        onClick: () => {
                                            show("HecOne_Terminal", record?.id)
                                        },
                                    };
                                }}
                            >

                                <Table.Column
                                    className="link-css"
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
