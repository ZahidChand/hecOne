import {
  Card,
  DeleteButton,
  EditButton,
  ShowButton,
  Space,
  Table,
  FormProps,
  TableProps,
  getDefaultSortOrder,
  FilterDropdown,
  Select,
} from "@pankod/refine-antd"
import { CrudSorting } from "@pankod/refine-core"
import React from "react"
import { IStation } from "../../interfaces"

export const StationListView: React.FC<{
  formProps: FormProps
  tableProps: TableProps<IStation>
  sorter: CrudSorting | undefined
}> = ({ tableProps, sorter }) => {
  return (
    <>
      <Card>
        <Table {...tableProps} rowKey="id" style={{ cursor: "pointer" }}>
          <Table.Column
            dataIndex="name"
            title="Name"
            sorter={{ multiple: 2 }}
            defaultSortOrder={getDefaultSortOrder("Name", sorter)}
          />

          <Table.Column
            dataIndex="stationAddress"
            title="Address"
            sorter={{ multiple: 2 }}
            defaultSortOrder={getDefaultSortOrder("stationAddress", sorter)}
          />

          <Table.Column
            dataIndex="stationArea"
            title="Area"
            defaultSortOrder={getDefaultSortOrder("stationArea", sorter)}
            sorter
          />

          <Table.Column
            dataIndex="stationStatus"
            key="stationStatus"
            title="Status"
            defaultSortOrder={getDefaultSortOrder("stationStatus", sorter)}
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

          <Table.Column<IStation>
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
                      "stationAddress",
                      "stationArea",
                      "created_at",
                      "updated_at",
                      "stationStatus"
                    ],
                  }}
                />
              </Space>
            )}
          />
        </Table>
      </Card>
    </>
  )
}

export default StationListView
