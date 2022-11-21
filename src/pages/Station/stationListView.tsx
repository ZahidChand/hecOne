import {
  Card,
  DeleteButton,
  EditButton,
  ShowButton,
  Space,
  Table,
  FormProps,
  TableProps,
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
            // defaultSortOrder={getDefaultSortOrder("Name", sorter)}
          />

          <Table.Column
            dataIndex="stationAddress"
            title="Address"
            sorter={{ multiple: 2 }}
            // defaultSortOrder={getDefaultSortOrder("station", sorter)}
          />

          <Table.Column
            dataIndex="stationArea"
            title="Area"
            // defaultSortOrder={getDefaultSortOrder("device_id", sorter)}
            sorter
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