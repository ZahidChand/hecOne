import { Flex, Spacer } from '@chakra-ui/react'
import { Button, Card, Col, Form, Input, Row, SaveButton } from '@pankod/refine-antd'
import { IResourceComponentsProps, useNavigation } from '@pankod/refine-core'
import React from 'react'

export const EditPrinterConfig: React.FC<IResourceComponentsProps> = () => {


    const { goBack } = useNavigation()




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
            </Card>

        </>
    )
}

export default EditPrinterConfig
