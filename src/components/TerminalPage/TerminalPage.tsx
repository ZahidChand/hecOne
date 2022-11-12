import { SearchOutlined } from "@ant-design/icons"
import { Box, Text } from "@chakra-ui/react"
import { Button, Dropdown, Form, Input } from "@pankod/refine-antd"
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
              onClick={(_) => setGridView(false)}
            >
              <FaListUl />
            </div>
            <div
              onClick={(_) => setGridView(true)}
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
            <h4>
              <Button
                style={{
                  width: "300px",
                  backgroundColor: "white",
                  border: "1px solid grey",
                }}
              >
                <Box flex="1" textAlign="left" fontSize="md">
                  Filters
                </Box>
              </Button>
            </h4>
          </Dropdown>
        </div>
      </div>

      <div>{!gridView ? <DemoList /> : <CardListView />}</div>
    </Form>
  )
}

export default TerminalPage
