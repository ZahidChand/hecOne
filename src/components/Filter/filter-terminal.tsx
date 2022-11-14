import { FormProps, Icons } from "@pankod/refine-antd"
import { IResourceComponentsProps } from "@pankod/refine-core"
import { useTable } from "@pankod/refine-antd"
import { Button, Card, Input, Select } from "antd"
import React from "react"
import { ITerminal } from "../../interfaces"
import { Form } from "@pankod/refine-antd"
import { Box, Stack } from "@chakra-ui/react"

export const FilterTerminal: React.FC<IResourceComponentsProps> = () => {
  const { searchFormProps } = useTable<ITerminal>({
    initialSorter: [
      {
        field: "name",
        order: "asc",
      },
    ],
    metaData: {
      fields: [
        // "id",
        "name",
        "status",
        "terminal_city",
        // "created_at",
      ],
    },
  })

  return (
    <div>
      <Card title={"Filters"}>
        <Filter formProps={searchFormProps} />
      </Card>
    </div>
  )
}

const Filter: React.FC<{ formProps: FormProps }> = (props) => {
  return (
    <Form layout="vertical" {...props.formProps}>
      <Stack>
        <Box>
          <Form.Item label={"Name"} name="name">
            <Input prefix={<Icons.SearchOutlined />} />
          </Form.Item>
        </Box>
        <Box>
          <Form.Item label={"Status"} name="status">
            <Select allowClear options={[]} />
          </Form.Item>
        </Box>
        <Box>
          <Form.Item label={"City"} name="city">
            <Select allowClear options={[]} />
          </Form.Item>
        </Box>
        <Box>
          <Form.Item>
            <Button style={{ width: "100%" }} type="primary">
              Submit
            </Button>
          </Form.Item>
        </Box>
      </Stack>
    </Form>
  )
}
