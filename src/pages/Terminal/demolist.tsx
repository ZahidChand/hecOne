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
} from "@pankod/refine-antd";

import { ITerminal } from "../../interfaces";

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

    const { selectProps: categorySelectProps } = useSelect<ITerminal>({
        resource: "HecOne_Terminal",
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
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
                    dataIndex="created_at"
                    title="Created At"
                    render={(value) => <DateField value={value} format="LLL" />}
                    defaultSortOrder={getDefaultSortOrder("created_at", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="device_id"
                    title="Device Id"
                    defaultSortOrder={getDefaultSortOrder("device_id", sorter)}
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
                            <Table.Column dataIndex="title" title="title" />
                            <Table.Column
                                dataIndex="status"
                                title="status"
                                render={(value) => <TagField value={value} />}
                            />
                            <Table.Column
                                dataIndex="createdAt"
                                title="createdAt"
                                render={(value) => <DateField format="LLL" value={value} />}
                            />
                            {/* <Table.Column
                    dataIndex={["category", "id"]}
                    title="category"
                    render={(value) => {
                        if (isLoading) {
                            return <TextField value="Loading..." />;
                        }

                        return (
                            <TextField
                                value={
                                    categoriesData?.data.find(
                                        (item) => item.id === value,
                                    )?.title
                                }
                            />
                        );
                    }}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Select
                                style={{ minWidth: 200 }}
                                mode="multiple"
                                placeholder="Select Category"
                                {...categorySelectProps}
                            />
                        </FilterDropdown>
                    )}
                /> */}
                            {/* <Table.Column<ITerminal>
                    title="Actions"
                    dataIndex="actions"
                    render={(_text, record): React.ReactNode => {
                        return (
                            <ShowButton
                                size="small"
                                recordItemId={record.id}
                                hideText
                            />
                        );
                    }}
                /> */}
                        </Table>
        </List>
    );
};