import { SearchOutlined } from "@ant-design/icons"
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react"
import { Form, Input, Switch } from "@pankod/refine-antd"
import { useState } from "react"
import { CardListView } from "../../pages/cards/list"
import { DemoList } from "../../pages/Terminal/demolist"
import { FilterView } from "../Filter/Filter"

function TerminalPage() {
  const [switchPage, setSwitchPage] = useState(true)

  const getpageViwe = (event: any) => {
    if (switchPage === false) {
      setSwitchPage(true)
    } else {
      setSwitchPage(false)
    }
  }
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
          <Switch
            style={{ margin: "0 5px" }}
            checkedChildren="List View"
            unCheckedChildren="Card View"
            size="default"
            defaultChecked
            onClick={() => getpageViwe(switchPage)}
          />
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
          <div style={{ margin: "0 5px" }}>
            <Accordion allowToggle style={{ borderRadius: "10px" }}>
              <AccordionItem>
                <h4>
                  <AccordionButton
                    width="300px"
                    backgroundColor="white"
                    border="1px solid grey"
                  >
                    <Box flex="1" textAlign="left" fontSize="md">
                      Filters
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h4>
                <AccordionPanel pb={4}>
                  <FilterView />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <div>{switchPage ? <DemoList /> : <CardListView />}</div>
    </Form>
  )
}

export default TerminalPage
