import { CheckOutlined, CloseOutlined, FormOutlined } from "@ant-design/icons"
import { Flex, Input, Spacer, Text } from "@chakra-ui/react"
import { Col, Form, Row } from "@pankod/refine-antd"
import { IResourceComponentsProps } from "@pankod/refine-core"
import { useState } from "react"
import "./editNetwork.css"

export const EditNetworkConfig: React.FC<IResourceComponentsProps> = () => {
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
                label={"User Name"}
                name="userName"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                {isEditMode ? (
                  <Input defaultValue={"User1"} style={{ float: "right" }} />
                ) : (
                  <Text style={{ float: "right", marginTop: "10px" }}>
                    User1
                  </Text>
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
              >
                {isEditMode ? (
                  <Input defaultValue={"1234"} style={{ float: "right" }} />
                ) : (
                  <Text style={{ float: "right", marginTop: "10px" }}>
                    1234
                  </Text>
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
              >
                {isEditMode ? (
                  <Input
                    defaultValue={"sr1.host1.com"}
                    style={{ float: "right" }}
                  />
                ) : (
                  <Text style={{ float: "right", marginTop: "10px" }}>
                    sr1.host1.com
                  </Text>
                )}
              </Form.Item>
              <Form.Item
                label={"Server Protocol"}
                name="serverProtocol"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                {isEditMode ? (
                  <Input
                    defaultValue={"serverProtocol1"}
                    style={{ float: "right" }}
                  />
                ) : (
                  <Text style={{ float: "right", marginTop: "10px" }}>
                    serverProtocol1
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
              >
                {isEditMode ? (
                  <Input
                    defaultValue={"abdcefghi"}
                    style={{ float: "right" }}
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
    </>
  )
}

export default EditNetworkConfig
