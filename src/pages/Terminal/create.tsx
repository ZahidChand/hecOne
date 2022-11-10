import React, { useState } from "react"
import { IResourceComponentsProps } from "@pankod/refine-core"

import { Create, Form, Input, useForm } from "@pankod/refine-antd"

import "react-mde/lib/styles/css/react-mde-all.css"

import { ITerminal } from "../../interfaces"

export const PostCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<ITerminal>()

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
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

        <Form.Item
          label="Terminal Number"
          name="terminalAddress"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Create>
  )
}
