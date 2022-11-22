import React from "react"
import { SearchOutlined } from "@ant-design/icons"
import { Box, Spacer, Stack, Text } from "@chakra-ui/react"
import {
  Button,
  Card,
  Dropdown,
  Form,
  FormProps,
  Icons,
  Input,
  ListProps,
  Select,
  useSelect,
  useSimpleList,
  useTable,
} from "@pankod/refine-antd"
import { useState } from "react"
import { CardListView } from "../../pages/cards/terminal-list-CardView"
import { FaFilter, FaListUl, FaTh } from "react-icons/fa"
import { IFilterVariables, ITerminal } from "../../interfaces"
import { ListTerminals } from "../../pages/Terminal/terminal-list-TableView"
import {
  CrudFilters,
  getDefaultFilter,
  HttpError,
  useTranslate,
} from "@pankod/refine-core"

export const TerminalPage = () => {
  const [gridView, setGridView] = useState<boolean>(false)
  const { listProps } = useSimpleList<ITerminal>({
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
    pagination: { pageSize: 12, defaultCurrent: 2 },
  })
  const { tableProps, sorter, searchFormProps, filters } = useTable<
    ITerminal,
    HttpError,
    IFilterVariables
  >({
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
    onSearch: (params) => {
      const filters: CrudFilters = []
      const { name, status }: any = params

      filters.push({
        field: "name",
        operator: "eq",
        value: name,
      })

      filters.push({
        field: "status",
        operator: "in",
        value: status,
      })

      return filters
    },
  })

  return (
    <Form
      {...searchFormProps}
      initialValues={{
        name: getDefaultFilter("name", filters),
        status: getDefaultFilter("stationStatus", filters, "in"),
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Text style={{ fontSize: "24px" }}>Terminals</Text>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                backgroundColor: !gridView ? "white" : "transparent",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => setGridView(false)}
            >
              <FaListUl />
            </div>
            <div
              onClick={() => setGridView(true)}
              style={{
                backgroundColor: gridView ? "white" : "transparent",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <FaTh />
            </div>
          </div>
          <Form.Item name="name" noStyle>
            <Input
              style={{
                margin: "0 5px",
                height: "30px",
                width: "300px",
              }}
              placeholder={" Search Terminal"}
              suffix={<SearchOutlined />}
            />
          </Form.Item>
          <Spacer />
          <Dropdown
            overlay={
              <Filter formProps={searchFormProps} filters={filters || []} />
            }
            trigger={["click"]}
          >
            <FaFilter size={"20px"} style={{ cursor: "pointer" }} />
          </Dropdown>
        </div>
      </div>

      <div>
        {!gridView ? (
          <ListTerminals
            formProps={searchFormProps}
            // filters={filters || []}
            tableProps={tableProps}
            sorter={sorter}
          />
        ) : (
          <CardListView
            formProps={searchFormProps}
            // filters={filters || []}
            listProps={tableProps as ListProps<ITerminal>}
          />
        )}
      </div>
    </Form>
  )
}

const Filter: React.FC<{ formProps: FormProps; filters: CrudFilters }> = (
  props,
) => {
  const t = useTranslate()
  const { formProps, filters } = props

  return (
    <Card>
      <Form
        layout="vertical"
        {...formProps}
        initialValues={{
          name: getDefaultFilter("name", filters),
          status: getDefaultFilter("status", filters, "in"),
        }}
      >
        <Stack>
          <Box>
            <Form.Item label={"Name"} name="name">
              <Input prefix={<Icons.SearchOutlined />} />
            </Form.Item>
          </Box>
          <Box>
            <Form.Item label={"Status"} name="status">
              <Select
                options={[
                  { label: "Active", value: "Active" },
                  { label: "In-Active", value: "In-Active" },
                ]}
                allowClear
                placeholder={"Status"}
              />
            </Form.Item>
          </Box>
          <Box>
            <Form.Item>
              <Button
                style={{ width: "100%" }}
                type="primary"
                htmlType="submit"
              >
                {"Submit"}
              </Button>
            </Form.Item>
          </Box>
        </Stack>
      </Form>
    </Card>
  )
}
