import React from "react"
import { SearchOutlined } from "@ant-design/icons"
import { Text } from "@chakra-ui/react"
import { Dropdown, Form, Input } from "@pankod/refine-antd"
import { useState } from "react"
import { CardListView } from "../../pages/cards/list"
import { DemoList } from "../../pages/Terminal/demolist"
import { FilterView } from "../Filter/Filter"
import { FaListUl, FaTh } from "react-icons/fa"

function TerminalPage() {
  const [gridView, setGridView] = useState<boolean>(false)

  return (
    <Form>
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
          <Dropdown overlay={<FilterView />} trigger={["click"]}>
            <div className="rounded-md border-gray-300 m-auto h-8 w-64 flex items-center pl-2 bg-white border-2">
              Filters
            </div>
          </Dropdown>
        </div>
      </div>

      <div>{!gridView ? <DemoList /> : <CardListView />}</div>
    </Form>
  )
}

export default TerminalPage
