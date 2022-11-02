import { SearchOutlined } from '@ant-design/icons';
import { Spacer, Text } from '@chakra-ui/react';
import { Form, Input, Switch } from '@pankod/refine-antd';
import React, { useState } from 'react'
import { CardListView } from '../../pages/cards';
import { GridListView } from '../../pages/Terminal'

function TerminalPage() {


    const [switchPage, setSwitchPage] = useState(true)

    const getpageViwe = (event: any) => {

        if (switchPage == false) {
            setSwitchPage(true)
        }
        else {

            setSwitchPage(false)

        }


    }

    return (
        // <div>
        <>
            <Form>
            <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: "8px",
                            marginBottom: "16px",
                        }}
                    >
                        <Text style={{ fontSize: "24px" }}>
                            {("Terminals")}
                        </Text>
                        <Form.Item name="name" noStyle>
                            <Input
                                style={{
                                    width: "400px",
                                    marginTop: "-15px",
                                    marginLeft: "400px"

                                }}
                                placeholder={(" Search Terminal")}
                                suffix={<SearchOutlined />}
                            />
                        </Form.Item>
                        <Spacer />
                <Switch checkedChildren="List View" unCheckedChildren="Card View" style={{ marginTop: "-15px", marginBottom: "10px" }} size="default" defaultChecked onClick={() => getpageViwe(switchPage)} />

                    </div>



                <div>
                    {
                        switchPage ? <GridListView /> : <CardListView />
                    }
                </div>
            </Form>
        </>
        // </div>
    )
}

export default TerminalPage
