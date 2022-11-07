import { CheckOutlined, CloseOutlined, EditOutlined, FormOutlined } from "@ant-design/icons";
import { Flex, Input, Spacer, Text } from "@chakra-ui/react"
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Form, List, Row, SaveButton, Select } from "@pankod/refine-antd";
import { IResourceComponentsProps, useNavigation } from "@pankod/refine-core";
import { useState } from "react";
import "./editNetwork.css"

export const EditNetworkConfig: React.FC<IResourceComponentsProps> = () => {

    const { goBack } = useNavigation()

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
                <div style={{ padding: "10px"}}>
                    <Row >
                        <Col style={{ marginInlineStart: "80%" }}>
                            {isEditMode ?
                                <Flex gap={16} style={{ cursor: "pointer", float: "right", fontSize: "20px" }}>
                                    <Flex>
                                        <CheckOutlined
                                            onClick={() => { CancelEdit() }}
                                        />
                                        <Spacer />

                                    </Flex>

                                    <CloseOutlined
                                        onClick={() => { CancelEdit() }}
                                    />
                                </Flex>

                                :
                                <FormOutlined style={{ cursor: "pointer", float: "right", fontSize: "20px" }}
                                    onClick={() => { editPerform() }}
                                />

                            }
                        </Col>
                    </Row>
                    <Row >
                        <Col style={{ width: "50%" }}>
                            <Form.Item
                                label={("User Name")}
                                name="userName"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                {isEditMode ?
                                    <Input defaultValue={'User1'} style={{ float: "right" }} />
                                    :
                                    <Text style={{ float: "right", marginTop: "10px" }}>User1</Text>}
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
                                {isEditMode ?
                                    <Input defaultValue={'1234'} style={{ float: "right" }} />
                                    :
                                    <Text style={{ float: "right", marginTop: "10px" }}>1234</Text>}
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
                                {isEditMode ?
                                    <Input defaultValue={'sr1.host1.com'} style={{ float: "right" }} />
                                    :
                                    <Text style={{ float: "right", marginTop: "10px" }}>sr1.host1.com</Text>}

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
                                {isEditMode ?
                                    <Input defaultValue={'serverProtocol1'} style={{ float: "right" }} />
                                    :
                                    <Text style={{ float: "right", marginTop: "10px" }}>serverProtocol1</Text>}

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
                                {isEditMode ?
                                    <Input defaultValue={'abdcefghi'} style={{ float: "right" }} />
                                    :
                                    <Text style={{ float: "right", marginTop: "10px" }}>abdcefghi</Text>}

                            </Form.Item>

                            {/* <Form.Item>
                            {
                                isEditMode ?
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
                                    :
                                    ''
                            }

                        </Form.Item> */}
                        </Col>
                    </Row>
                </div>
            </Form>
        </>
    )
}

export default EditNetworkConfig
