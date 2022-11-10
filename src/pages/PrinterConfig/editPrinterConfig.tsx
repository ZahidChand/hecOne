import { CheckOutlined, CloseOutlined, FormOutlined } from "@ant-design/icons"
import { Flex, Spacer, Text } from "@chakra-ui/react"
import { Col, Form, Input, Row } from "@pankod/refine-antd"
import { IResourceComponentsProps } from "@pankod/refine-core"
import React, { useState } from "react"
import "../NetworkConfig/editNetwork.css"

export const EditPrinterConfig: React.FC<IResourceComponentsProps> = () => {
  const [isEditMode, setIsEditMode] = useState(false)

  const editPerform = () => {
    setIsEditMode(true)
  }

  const CancelEdit = () => {
    setIsEditMode(false)
  }

  return (
    <>
      <Form
        // {...formProps}
        className="ant-advanced-search-form"
        layout="horizontal"
        initialValues={{
          isActive: true,
        }}
      >
        <div style={{ padding: "10px" }}>
          <Row>
            <Col style={{ marginInlineStart: "80%" }}>
              {isEditMode ? (
                <Flex
                  gap={16}
                  style={{
                    cursor: "pointer",
                    float: "right",
                    fontSize: "20px",
                  }}
                >
                  <Flex>
                    <CheckOutlined
                      onClick={() => {
                        CancelEdit()
                      }}
                    />
                    <Spacer />
                  </Flex>

                  <CloseOutlined
                    onClick={() => {
                      CancelEdit()
                    }}
                  />
                </Flex>
              ) : (
                <FormOutlined
                  style={{
                    cursor: "pointer",
                    float: "right",
                    fontSize: "20px",
                  }}
                  onClick={() => {
                    editPerform()
                  }}
                />
              )}
            </Col>
          </Row>
          <Row>
            <Col style={{ width: "50%" }}>
              <Form.Item
                label={"Printer IP"}
                name="printerIP"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                {isEditMode ? (
                  <Input
                    defaultValue={"192.168.0.1"}
                    style={{ float: "right" }}
                  />
                ) : (
                  <Text style={{ float: "right", marginTop: "10px" }}>
                    192.168.0.1
                  </Text>
                )}
              </Form.Item>
              <Form.Item
                label={"Printer Paper Size"}
                name="printerPaperSize"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                {isEditMode ? (
                  <Input
                    defaultValue={"8.5 x 14 inches"}
                    style={{ float: "right" }}
                  />
                ) : (
                  <Text style={{ float: "right", marginTop: "10px" }}>
                    8.5 × 14 inches
                  </Text>
                )}
              </Form.Item>
            </Col>
          </Row>
        </div>
      </Form>
    </>
  )
}

export default EditPrinterConfig
