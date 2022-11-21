import { SearchOutlined } from "@ant-design/icons"
import { Box, Spacer, Stack, Text } from "@chakra-ui/react"
import { Button, Card, Dropdown, Form, FormProps, Icons, Input, ListProps, useTable } from "@pankod/refine-antd"
import { CrudFilters, getDefaultFilter, HttpError } from "@pankod/refine-core"
import React, { useState } from "react"
import { FaFilter, FaListUl, FaTh } from "react-icons/fa"
import { IStation } from "../../interfaces"
import { StationCardView } from "./stationCardView"
import StationListView from "./stationListView"

export const StationPage = () => {
  const [gridView, setGridView] = useState<boolean>(false)
  const { tableProps, sorter, searchFormProps, filters } = useTable<
    IStation,
    HttpError
  >({
    initialSorter: [
      {
        field: "name",
        order: "asc",
      },
    ],
    metaData: {
      fields: ["id", "name", "created_at", "stationAddress", "stationArea"],
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
    <>
      <Form>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Text style={{ fontSize: "24px" }}>Stations</Text>
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
                autoComplete="false"
                style={{
                  margin: "0 5px",
                  height: "30px",
                  width: "300px",
                }}
                placeholder={" Search Station"}
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
            <StationListView
              formProps={searchFormProps}
              // filters={filters || []}
              tableProps={tableProps}
              sorter={sorter}
            />
          ) : (
            <StationCardView
              formProps={searchFormProps}
              // filters={filters || []}
              listProps={tableProps as ListProps<IStation>}
            />
          )}
        </div>
      </Form>
    </>
  )
}

const Filter: React.FC<{ formProps: FormProps; filters: CrudFilters }> = (
  props,
) => {
  const { formProps, filters } = props

  return (
    <Card>
      <Form
        layout="vertical"
        {...formProps}
        initialValues={{
          name: getDefaultFilter("name", filters),
        }}
      >
        <Stack>
          <Box>
            <Form.Item label={"Name"} name="name">
              <Input prefix={<Icons.SearchOutlined />} />
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