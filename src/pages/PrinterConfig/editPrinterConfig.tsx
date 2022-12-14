import { CheckOutlined, CloseOutlined, FormOutlined } from "@ant-design/icons"
import { Flex, Spacer, Text } from "@chakra-ui/react"
import { Col, Form, Input, Row } from "@pankod/refine-antd"
import { IResourceComponentsProps } from "@pankod/refine-core"
import React, { useState } from "react"
import "../NetworkConfig/editNetwork.css"

export const EditPrinterConfig: React.FC<IResourceComponentsProps> = () => {
  const [isEditMode, setIsEditMode] = useState(false)

  return (
    <Form
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
                      setIsEditMode(false)
                    }}
                  />
                  <Spacer />
                </Flex>

                <CloseOutlined
                  onClick={() => {
                    setIsEditMode(false)
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
                onClick={() => setIsEditMode(true)}
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
              style={{ marginBlock: "auto" }}
            >
              {isEditMode ? (
                <Input
                  defaultValue={"192.168.0.1"}
                  style={{
                    marginBottom: "15px",
                    marginLeft: "160px",
                    width: "200px",
                  }}
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
              style={{ marginBlock: "auto" }}
            >
              {isEditMode ? (
                <Input
                  defaultValue={"8.5 x 14 inches"}
                  style={{
                    marginLeft: "97px",
                    marginBottom: "15px",
                    width: "130%",
                  }}
                />
              ) : (
                <Text style={{ float: "right", marginTop: "10px" }}>
                  8.5 ?? 14 inches
                </Text>
              )}
            </Form.Item>
          </Col>
        </Row>
      </div>
    </Form>
  )
}
