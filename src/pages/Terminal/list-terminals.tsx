import React from "react"
import {
  Table,
  FilterDropdown,
  Select,
  ShowButton,
  getDefaultSortOrder,
  DeleteButton,
  EditButton,
  Space,
  Card,
  TableProps,
} from "@pankod/refine-antd"

import { ITerminal } from "../../interfaces"
import { CrudSorting } from "@pankod/refine-core"

export const ListTerminals: React.FC<{
  tableProps: TableProps<ITerminal>
  sorter: CrudSorting | undefined
}> = ({ tableProps, sorter }) => {
  return (
    <Card>
      <Table {...tableProps} rowKey="id" style={{ cursor: "pointer" }}>
        <Table.Column
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
          dataIndex="terminalAddress"
          title="Terminal Address Line"
          sorter={{ multiple: 2 }}
          defaultSortOrder={getDefaultSortOrder("terminalAddress", sorter)}
        />

        {/* <Table.Column
          dataIndex="terminal_street"
          title="Street"
          sorter={{ multiple: 2 }}
          defaultSortOrder={getDefaultSortOrder("terminal_street", sorter)}
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Select
                style={{ minWidth: 200 }}
                mode="multiple"
                placeholder="Select Category"
                // {...SelectProps}
              />
            </FilterDropdown>
          )}
        /> */}

        {/* <Table.Column
          dataIndex="terminal_city"
          title="City"
          sorter={{ multiple: 2 }}
          defaultSortOrder={getDefaultSortOrder("terminal_city", sorter)}
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Select
                style={{ minWidth: 200 }}
                mode="multiple"
                placeholder="Select Category"
                // {...SelectProps}
              />
            </FilterDropdown>
          )}
        /> */}

        <Table.Column
          dataIndex="terminal_state"
          title="State"
          sorter={{ multiple: 2 }}
          defaultSortOrder={getDefaultSortOrder("terminal_state", sorter)}
        />

        <Table.Column
          dataIndex="status"
          title="Status"
          defaultSortOrder={getDefaultSortOrder("status", sorter)}
          sorter
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Select
                placeholder="Select Status"
                options={[
                  { label: "Active", value: "Active" },
                  { label: "In-Active", value: "In-Active" },
                ]}
              />
            </FilterDropdown>
          )}
        />

        {/* <Table.Column
          dataIndex="created_at"
          title="Created At"
          render={(value) => <DateField value={value} format="LLL" />}
          defaultSortOrder={getDefaultSortOrder("created_at", sorter)}
          sorter={{ multiple: 2 }}
        /> */}

        <Table.Column<ITerminal>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton
                confirmOkText="Yes"
                confirmCancelText="No"
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
                    "terminal_state",
                  ],
                }}
              />
            </Space>
          )}
        />
      </Table>
    </Card>
  )
}
