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
  FormProps,
} from "@pankod/refine-antd"

import { ITerminal } from "../../interfaces"
import { CrudSorting } from "@pankod/refine-core"

export const ListTerminals: React.FC<{
  formProps: FormProps
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

        <Table.Column
          dataIndex="terminal_state"
          title="State"
          sorter={{ multiple: 2 }}
          defaultSortOrder={getDefaultSortOrder("terminal_state", sorter)}
        />

        <Table.Column
          dataIndex="status"
          key="status"
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

        <Table.Column<ITerminal>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton
                confirmOkText="Yes"
                confirmTitle="Are you sure you want to delete?"
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
