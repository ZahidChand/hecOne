import React from "react"
import { HttpError, IResourceComponentsProps } from "@pankod/refine-core"

import {
  Edit,
  Form,
  Input,
  ListButton,
  RefreshButton,
  useForm,
} from "@pankod/refine-antd"
import { ITerminal } from "../../interfaces"

import "react-mde/lib/styles/css/react-mde-all.css"

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
        "device_id",
        "station",
        "created_by",
        "type",
        "status",
        "terminalAddress",
        "terminal_street",
        "terminal_city",
        "terminal_state",
        "terminal_zipcode",
      ],
    },
  })

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
          label="Station"
          name="station"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Device Id"
          name="device_id"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Type"
          name="type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Terminal Address"
          name="terminalAddress"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Street"
          name="terminal_street"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="City"
          name="terminal_city"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="State"
          name="terminal_state"
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
  )
}
