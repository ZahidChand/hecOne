import { Input } from "@chakra-ui/react"
import { Button, Col, Form, List, Row, SaveButton, Select } from "@pankod/refine-antd";
import { IResourceComponentsProps, useNavigation } from "@pankod/refine-core";
import ShowDetailsOfTerminal from "./show";

export const EditNetworkConfig: React.FC<IResourceComponentsProps> = () => {

    const { goBack } = useNavigation()

    return (
        <>
            <Form
                // {...formProps}
                style={{ marginTop: 10 }}
                layout="vertical"
                initialValues={{
                    isActive: true,
                }}
            >
                <Row>
                    <Col xs={24} lg={24}>
                        <List
                            title={("Terminal Network Configuration")}
                        // pageHeaderProps={{
                        //     extra: <></>,
                        // }}
                        >
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
                                        <Input defaultValue={'User1'} style={{width:"50%"}} />
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
                                        <Input defaultValue={'1234'} style={{width:"50%"}} />
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
                                        <Input defaultValue={'sr1.host1.com'} style={{width:"50%"}} />
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
                                        <Input defaultValue={'serverProtocol1'} style={{width:"50%"}} />
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
                                        <Input defaultValue={'abdcefghi , jklmnop'} style={{width:"50%"}} />
                                    </Form.Item>

                                    <Form.Item>
                                        <Button
                                            onClick={() => { goBack() }}
                                            style={{ cursor: "pointer", width: "50%" }}>
                                            Cancel
                                        </Button>
                                        <br /><br />
                                        <SaveButton
                                            style={{ width: "50%" }}
                                        />

                                    </Form.Item>
                                </Col>
                            </Row>
                        </List>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default EditNetworkConfig
