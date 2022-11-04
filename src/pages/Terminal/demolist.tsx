import { useMany } from "@pankod/refine-core";
import {
    List,
    TextField,
    TagField,
    DateField,
    Table,
    useTable,
    FilterDropdown,
    Select,
    ShowButton,
    useSelect,
    getDefaultSortOrder,
    DeleteButton,
    EditButton,
    Space,
    Card,
} from "@pankod/refine-antd";

import { ITerminal } from "../../interfaces";
import { TerminalStatus } from "../../components/terminalStatus";

export const DemoList: React.FC = () => {
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
    });
    // const { tableProps } = useTable<ITerminal>();

    // const { selectProps: categorySelectProps } = useSelect<ITerminal>({
    //     resource: "HecOne_Terminal",
    // });

    return (
        <Card>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    className="link-css"
                    dataIndex="name"
                    title="Name"
                    sorter={{ multiple: 2 }}
                    defaultSortOrder={getDefaultSortOrder("Name", sorter)}

                />

                <Table.Column
                    dataIndex="station"
                    title="Station"
                    sorter={{ multiple: 2 }}
                    defaultSortOrder={getDefaultSortOrder("station", sorter)}
                />

                <Table.Column
                    dataIndex="device_id"
                    title="Device Id"
                    defaultSortOrder={getDefaultSortOrder("device_id", sorter)}
                    sorter
                />

                <Table.Column
                    dataIndex="type"
                    title="Type"
                    defaultSortOrder={getDefaultSortOrder("type", sorter)}
                    sorter

                />

                <Table.Column
                    dataIndex="status"
                    
                    title="Status"
                    defaultSortOrder={getDefaultSortOrder("status", sorter)}
                    sorter

                />

                {/* <Table.Column
                    dataIndex="longitude"
                    title="Longitude"
                    sorter={{ multiple: 1 }}
                />
                <Table.Column
                    dataIndex="latitude"
                    title="Latitude"
                    sorter={{ multiple: 1 }}
                /> */}

                <Table.Column
                    dataIndex="created_at"
                    title="Created At"
                    render={(value) => <DateField value={value} format="LLL" />}
                    defaultSortOrder={getDefaultSortOrder("created_at", sorter)}
                    sorter
                />


                <Table.Column
                    dataIndex="terminalAddress"
                    title="Terminal Address Line"
                    sorter={{ multiple: 2 }}
                    defaultSortOrder={getDefaultSortOrder("terminalAddress", sorter)}
                />

                <Table.Column
                    dataIndex="terminal_street"
                    title="Street"
                    sorter={{ multiple: 2 }}
                    defaultSortOrder={getDefaultSortOrder("terminal_street", sorter)}
                />

                <Table.Column
                    dataIndex="terminal_city"
                    title="City"
                    sorter={{ multiple: 2 }}
                    defaultSortOrder={getDefaultSortOrder("terminal_city", sorter)}
                />

                <Table.Column
                    dataIndex="terminal_state"
                    title="State"
                    sorter={{ multiple: 2 }}
                    defaultSortOrder={getDefaultSortOrder("terminal_state", sorter)}
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
                                        "device_id",
                                        "terminalAddress",
                                        "terminal_street",
                                        "terminal_city",
                                        "terminal_state"
                                    ],
                                }}
                            />
                        </Space>
                    )}
                />
            </Table>
        </Card>
    );
};