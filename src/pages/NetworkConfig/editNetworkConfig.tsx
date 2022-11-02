import { EditOutlined, FormOutlined } from "@ant-design/icons";
import { Flex, Input, Spacer } from "@chakra-ui/react"
import { Button, Col, Form, List, Row, SaveButton, Select } from "@pankod/refine-antd";
import { IResourceComponentsProps, useNavigation } from "@pankod/refine-core";

export const EditNetworkConfig: React.FC<IResourceComponentsProps> = () => {

    const { goBack } = useNavigation()

    const editPerform = () => {
        alert("Clicked")
    }
    return (
        <>
            <Form
                // {...formProps}
                style={{ marginTop: 10, width: "95%" }}
                layout="horizontal"
                initialValues={{
                    isActive: true,
                }}
            >
                <Row>
                    <Col xs={24} lg={24}>
                        {/* <FormOutlined style={{ cursor: "pointer", float: "right" }}
                            onClick={() => { editPerform() }}
                        >
                            Edit
                        </FormOutlined> */}
                        <Row gutter={10}>

                            <Col xs={24} lg={12}>
                                <Form.Item
                                    label={("User Name")}
                                    name="userName"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input defaultValue={'User1'} style={{ width: "50%", float: "right" }} />
                                </Form.Item>
                                <Form.Item
                                    label={("Server Port")}
                                    name="serverPort"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input defaultValue={'1234'} style={{ width: "50%", float: "right" }} />
                                </Form.Item>
                                <Form.Item
                                    label={("Server Host")}
                                    name="serverHost"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input defaultValue={'sr1.host1.com'} style={{ width: "50%", float: "right" }} />
                                </Form.Item>
                                <Form.Item
                                    label={("Server Protocol")}
                                    name="serverProtocol"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input defaultValue={'serverProtocol1'} style={{ width: "50%", float: "right" }} />
                                </Form.Item>

                                <Form.Item
                                    label={("Keys")}
                                    name="keys"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input defaultValue={'abdcefghi , jklmnop'} style={{ width: "50%", float: "right" }} />
                                </Form.Item>

                                <Form.Item>
                                    <Flex>

                                        <Button
                                            onClick={() => { goBack() }}
                                            style={{ cursor: "pointer", width: "40%", float: "right" }}>
                                            Cancel
                                        </Button>
                                        <Spacer />
                                        <SaveButton
                                            style={{ width: "40%", float: "right" }}
                                        />
                                    </Flex>

                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default EditNetworkConfig
