import React from "react";
import { HttpError, IResourceComponentsProps } from "@pankod/refine-core";

import {
    Edit,
    Form,
    Input,
    ListButton,
    RefreshButton,
    useForm,
} from "@pankod/refine-antd";
import { ITerminal } from "../../interfaces";

import "react-mde/lib/styles/css/react-mde-all.css";


export const TerminalEdit: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps, queryResult } = useForm<
        ITerminal,
        HttpError
    >({
        metaData: {
            fields: [
                "id",
              "name",
              "longitude",
              "latitude",
              "created_at",
            ],
        },
    });

    return (
        <Edit
            pageHeaderProps={{
                extra: (
                    <>
                        <ListButton />
                        <RefreshButton onClick={() => queryResult?.refetch()} />
                    </>
                ),
            }}
            saveButtonProps={saveButtonProps}
        >
            <Form
                {...formProps}
                layout="vertical"
                onFinish={(values) =>
                    formProps.onFinish?.({
                        ...values,
                    })
                }
            >
                {/* <Form.Item
                    label="ID"
                    name="id"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item> */}
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Longitude"
                    name="longitude"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Latitude"
                    name="latitude"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Edit>
    );
};