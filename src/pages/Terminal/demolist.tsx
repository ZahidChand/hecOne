import React from "react"
import {
  Table,
  useTable,
  FilterDropdown,
  Select,
  ShowButton,
  getDefaultSortOrder,
  DeleteButton,
  EditButton,
  Space,
  Card,
} from "@pankod/refine-antd"

import { ITerminal } from "../../interfaces"

const temp: ITerminal[] = [
  {
    id: "8e257b39-c267-46d2-a889-bd0a8947af95",
    name: "Terminal_#12876",
    longitude: "77.2219388",
    latitude: "28.6517178",
    created_at: "2022-10-13T06:54:18.427993+00:00",
    device_id: 1256,
    station: "Station123",
    created_by: "Conor McGregor",
    type: "Type002",
    status: "Active",
    terminalAddress: "TerminalAddress0126",
    terminal_street: "Boxhagener Str. 33",
    terminal_city: "Bramfeld",
    terminal_state: "Hamburg",
    terminal_zipcode: 22391,
  },
  {
    id: "dd622e31-ddee-4da1-9459-c93b81d35702",
    name: "Terminal#_128991",
    longitude: "2.352222",
    latitude: "48.856613",
    created_at: "2022-11-08T06:37:15.824706+00:00",
    device_id: 10978,
    station: "Station991",
    created_by: "Frank Mir",
    type: "Type002",
    status: "Active",
    terminalAddress: "TA_wiudhwh wih wi hewh",
    terminal_street: " 7 rue Charles Corbeau",
    terminal_city: " FÉcamp",
    terminal_state: " Haute-Normandie",
    terminal_zipcode: 1,
  },
  {
    id: "7ecb6b10-1b34-437a-8817-f4a46b9907e1",
    name: "Terminal_#1489",
    longitude: "73.856743",
    latitude: "18.52043",
    created_at: "2022-11-07T09:06:40.367837+00:00",
    device_id: 6718,
    station: "Station12289",
    created_by: "Peter Yan",
    type: "Type002",
    status: "In-Active",
    terminalAddress: "Mg Road Lane.14",
    terminal_street: "Opp KP",
    terminal_city: "Pune",
    terminal_state: "Maharashtra",
    terminal_zipcode: 1,
  },
  {
    id: "7842ec62-b801-4bcd-bf9f-e2d809bafee3",
    name: "Terminal_#1541",
    longitude: "73.856743",
    latitude: "18.52043",
    created_at: "2022-11-07T09:09:35.596168+00:00",
    device_id: 8143,
    station: "Station541",
    created_by: "Rahul Kumar",
    type: "Type004",
    status: "Active",
    terminalAddress: "Laxmi Road Lane.4",
    terminal_street: "JM Colony",
    terminal_city: "Pune",
    terminal_state: "Maharashtra",
    terminal_zipcode: 1,
  },
  {
    id: "9e44c2fa-d0bd-48f1-9635-d23ed7fa3eb1",
    name: "Terminal_#1781",
    longitude: "-114.070847",
    latitude: "51.048615",
    created_at: "2022-11-08T06:46:51.125966+00:00",
    device_id: 1268,
    station: "Station781",
    created_by: "Rick Hardy",
    type: "Type004",
    status: "In_Active",
    terminalAddress: "Terminal no 893 ",
    terminal_street: "893 chemin Hudson",
    terminal_city: "Montreal",
    terminal_state: "Quebec",
    terminal_zipcode: 1,
  },
  {
    id: "90793d30-0d18-4108-9597-de5494de05ab",
    name: "Terminal_#1879",
    longitude: "31.235712",
    latitude: "30.04442",
    created_at: "2022-11-08T06:53:08.800963+00:00",
    device_id: 9013,
    station: "Station879",
    created_by: "Anwar Jibawi",
    type: "Type003",
    status: "Active",
    terminalAddress: "Terminal iusdhuws wdiuhwd h",
    terminal_street: "16 Abou El-Nour St., Roxy",
    terminal_city: "Heliopolis",
    terminal_state: "Cairo",
    terminal_zipcode: 1,
  },
  {
    id: "cc98a748-c6b5-41aa-9bc8-3dcd2a910f97",
    name: "Terminal_#27813",
    longitude: "73.4016729",
    latitude: "18.7548563",
    created_at: "2022-10-13T06:08:01.632389+00:00",
    device_id: 7715,
    station: "Station3",
    created_by: "Krishna Murti",
    type: "Type004",
    status: "In-Active",
    terminalAddress: "TerminalAddress3",
    terminal_street: "Bannergatta",
    terminal_city: "Bangalore",
    terminal_state: "Karnataka",
    terminal_zipcode: 560076,
  },
  {
    id: "d5c0a877-525d-46ab-8c4d-54d3afcb660f",
    name: "Terminal_#Q123",
    longitude: "46.675297",
    latitude: "24.713552",
    created_at: "2022-11-08T06:42:03.443378+00:00",
    device_id: 7831,
    station: "StationQ1",
    created_by: "Salman bin Abdulaziz Al Saud",
    type: "Type001",
    status: "Active",
    terminalAddress: "TA_Psehw e wueh owuih",
    terminal_street: "Ulaya Dist.,, P.O.Box : 22189",
    terminal_city: "Riyadh Ulaya Dist.",
    terminal_state: " Riyadh",
    terminal_zipcode: 1,
  },
]

export const DemoList: React.FC = () => {
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
        "device_id",
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
    <Card>
      <Table
        {...tableProps}
        rowKey="id"
        style={{ cursor: "pointer" }}
        dataSource={temp}
      >
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
