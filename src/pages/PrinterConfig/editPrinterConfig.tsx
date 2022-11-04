import { CheckOutlined, CloseOutlined, FormOutlined } from '@ant-design/icons'
import { Flex, Spacer, Text } from '@chakra-ui/react'
import { Button, Card, Col, Form, Input, Row, SaveButton } from '@pankod/refine-antd'
import { IResourceComponentsProps, useNavigation } from '@pankod/refine-core'
import React, { useState } from 'react'

export const EditPrinterConfig: React.FC<IResourceComponentsProps> = () => {


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
            <Card bordered={false} style={{ height: "100%" }}>
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
                        <Col xs={24} lg={24}>
                            <Row gutter={10}>

                                <Col xs={24} lg={12}>
                                    <Form.Item
                                        label={("Printer IP")}
                                        name="printerIP"
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >

                                        {isEditMode ?
                                            <Input defaultValue={'192.168.0.1'} style={{ float: "right" }} />
                                            :
                                            <Text >192.168.0.1</Text>}
                                    </Form.Item>
                                    <Form.Item
                                        label={("Printer Paper Size")}
                                        name="printerPaperSize"
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >
                                        {isEditMode ?
                                            <Input defaultValue={'8.5 x 14 inches'} style={{ float: "right" }} />
                                            :
                                            <Text>8.5 × 14 inches</Text>}
                                    </Form.Item>


                                    {/* <Form.Item>
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

                                    </Form.Item> */}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </Card>

        </>
    )
}

export default EditPrinterConfig
