import React from "react"
import { IResourceComponentsProps } from "@pankod/refine-core"
import {
  Table,
  useTable,
  Space,
  EditButton,
  ShowButton,
  DeleteButton,
  getDefaultSortOrder,
  DateField,
  Form,
  Row,
  Col,
} from "@pankod/refine-antd"

import { ITerminal } from "../../interfaces"
import { List } from "@chakra-ui/react"
import "./terminal.css"
export const GridListView: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<ITerminal>({
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
        "deviceId",
        "station",
        "created_by",
        "type",
        "status",
        "terminalAddress",
        "terminal_street",
        "terminal_city",
        "terminal_state",
        "terminal_zipcode",
      ],
    },
  })

  return (
    <>
      <Form>
        <Row
          // {...listProps}
          gutter={[16, 16]}
          style={{ background: "#fff" }}
        >
          <div>
            <Col xl={18} xs={24}>
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
                    dataIndex="deviceId"
                    title="Device Id"
                    defaultSortOrder={getDefaultSortOrder("deviceId", sorter)}
                    sorter
                  />

                  <Table.Column
                    dataIndex="terminalAddress"
                    title="Terminal Address Line"
                    sorter={{ multiple: 2 }}
                    defaultSortOrder={getDefaultSortOrder(
                      "terminalAddress",
                      sorter,
                    )}
                  />

                  <Table.Column
                    dataIndex="terminal_street"
                    title="Street"
                    sorter={{ multiple: 2 }}
                    defaultSortOrder={getDefaultSortOrder(
                      "terminal_street",
                      sorter,
                    )}
                  />

                  <Table.Column
                    dataIndex="terminal_city"
                    title="City"
                    sorter={{ multiple: 2 }}
                    defaultSortOrder={getDefaultSortOrder(
                      "terminal_city",
                      sorter,
                    )}
                  />

                  <Table.Column
                    dataIndex="terminal_state"
                    title="State"
                    sorter={{ multiple: 2 }}
                    defaultSortOrder={getDefaultSortOrder(
                      "terminal_state",
                      sorter,
                    )}
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
                              "deviceId",
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
              </List>
            </Col>
          </div>
        </Row>
      </Form>
    </>
  )
}
