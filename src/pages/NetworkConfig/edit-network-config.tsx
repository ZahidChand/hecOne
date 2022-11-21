import { CheckOutlined, CloseOutlined, FormOutlined } from "@ant-design/icons"
import { Flex, Spacer, Text } from "@chakra-ui/react"
import { Col, Form, Input, Row } from "@pankod/refine-antd"
import { IResourceComponentsProps } from "@pankod/refine-core"
import React, { useState } from "react"
import "../NetworkConfig/editNetwork.css"

export const EditNetworkConfig: React.FC<IResourceComponentsProps> = () => {
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
              label={"User Name"}
              name="username"
              rules={[
                {
                  required: true,
                },
              ]}
              style={{ marginBlock: "auto" }}
            >
              {isEditMode ? (
                <Input
                  defaultValue={"User1"}
                  style={{
                    marginBottom: "15px",
                    marginLeft: "150px",
                  }}
                />
              ) : (
                <Text style={{ float: "right", marginTop: "10px" }}>User1</Text>
              )}
            </Form.Item>
            <Form.Item
              label={"Server Port"}
              name="serverPort"
              rules={[
                {
                  required: true,
                },
              ]}
              style={{ marginBlock: "auto" }}
            >
              {isEditMode ? (
                <Input
                  defaultValue={"1234"}
                  style={{
                    marginBottom: "15px",
                    marginLeft: "150px",
                    // width: "130%",
                  }}
                />
              ) : (
                <Text style={{ float: "right", marginTop: "10px" }}>1234</Text>
              )}
            </Form.Item>
            <Form.Item
              label={"Server Port"}
              name="serverPort"
              rules={[
                {
                  required: true,
                },
              ]}
              style={{ marginBlock: "auto" }}
            >
              {isEditMode ? (
                <Input
                  defaultValue={"1234"}
                  style={{
                    marginBottom: "15px",
                    marginLeft: "150px",
                    // width: "130%",
                  }}
                />
              ) : (
                <Text style={{ float: "right", marginTop: "10px" }}>1234</Text>
              )}
            </Form.Item>
            <Form.Item
              label={"Server Host"}
              name="serverHost"
              rules={[
                {
                  required: true,
                },
              ]}
              style={{ marginBlock: "auto" }}
            >
              {isEditMode ? (
                <Input
                  defaultValue={"sr1.host1.com"}
                  style={{
                    marginBottom: "15px",
                    marginLeft: "150px",
                    // width: "130%",
                  }}
                />
              ) : (
                <Text style={{ float: "right", marginTop: "10px" }}>
                  sr1.host1.com
                </Text>
              )}
            </Form.Item>
            <Form.Item
              label={"Keys"}
              name="keys"
              rules={[
                {
                  required: true,
                },
              ]}
              style={{ marginBlock: "auto" }}
            >
              {isEditMode ? (
                <Input
                  defaultValue={"abdcefghi"}
                  style={{
                    marginBottom: "15px",
                    marginLeft: "200px",
                    width: "80%",
                  }}
                />
              ) : (
                <Text style={{ float: "right", marginTop: "10px" }}>
                  abdcefghi
                </Text>
              )}
            </Form.Item>
          </Col>
        </Row>
      </div>
    </Form>
  )
}
