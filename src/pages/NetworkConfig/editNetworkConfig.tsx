import { CheckOutlined, CloseOutlined, EditOutlined, FormOutlined } from "@ant-design/icons";
import { Flex, Input, Spacer, Text } from "@chakra-ui/react"
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Form, List, Row, SaveButton, Select } from "@pankod/refine-antd";
import { IResourceComponentsProps, useNavigation } from "@pankod/refine-core";
import { useState } from "react";

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
                style={{ marginTop: 10, width: "95%" }}
                layout="horizontal"
                initialValues={{
                    isActive: true,
                }}
            >

                <Row>
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
                <Row>
                    <Col>
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
                                <Text >User1</Text>}
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
                                <Text >1234</Text>}
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
                                <Text >sr1.host1.com</Text>}

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
                                <Text >serverProtocol1</Text>}

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
                                <Text >abdcefghi</Text>}

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
            </Form>
        </>
    )
}

export default EditNetworkConfig
