import { SearchOutlined } from '@ant-design/icons';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Spacer, Text } from '@chakra-ui/react';
import { Dropdown, Form, Input, Menu, Switch } from '@pankod/refine-antd';
import React, { useState } from 'react'
import { CardListView } from '../../pages/cards/list';
import { DemoList } from '../../pages/Terminal/demolist'
import { FilterView } from '../Filter/Filter';

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
    // const menu = (
    //     <Menu
    //         items={[
    //             {
    //                 key: '1',
    //                 label: (
    //                     <FilterView />
    //                 ),
    //             }
    //         ]}
    //     />
    // )
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
                        // gap: "8px",
                        // marginBottom: "16px",
                    }}
                >
                    <Text style={{ fontSize: "24px" }}>
                        {("Terminals")}
                    </Text>
                    <Form.Item style={{ marginLeft: "50px", marginTop: "-15px", marginBottom: "10px", fontSize: "24px" }} >
                        {/* <Dropdown overlay={menu}>
                            <a onClick={e => e.preventDefault()}>Filters</a>
                        </Dropdown> */}
                    </Form.Item>
                    <Form.Item name="name" noStyle>
                        <Input
                            style={{
                                width: "400px",
                                marginTop: "-15px",
                                marginLeft: "300px"

                            }}
                            placeholder={(" Search Terminal")}
                            suffix={<SearchOutlined />}
                        />
                    </Form.Item>
                    <Spacer />
                    <Switch checkedChildren="List View" unCheckedChildren="Card View" style={{ marginTop: "-15px", marginBottom: "10px" }} size="default" defaultChecked onClick={() => getpageViwe(switchPage)} />

                </div>
                <div>
                    <Accordion>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        Filters
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <FilterView />
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    {
                        switchPage ? <DemoList/> : <CardListView />
                    }
                </div>
            </Form>

        </>
        // </div>
    )
}

export default TerminalPage
