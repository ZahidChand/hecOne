import { Form, Switch } from '@pankod/refine-antd';
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
                <Switch checkedChildren="List View" unCheckedChildren="Card View" style={{ marginTop: "-15px", marginBottom: "10px" }} size="default" defaultChecked onClick={() => getpageViwe(switchPage)} />


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
