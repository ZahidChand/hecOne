import { FormProps, Icons } from "@pankod/refine-antd"
import {
  BaseRecord,
  CrudFilters,
  getDefaultFilter,
  HttpError,
  IResourceComponentsProps,
  useTranslate,
} from "@pankod/refine-core"
import { useTable } from "@pankod/refine-antd"
import { Button, Card, Input, Select } from "antd"
import React from "react"
// import { ITerminal } from "../../interfaces"
import { Form } from "@pankod/refine-antd"
import { Stack } from "@chakra-ui/react"
import { ITerminal, IFilterVariables } from "../../interfaces"
import { useDataGrid, Box, TextField } from "@pankod/refine-mui"
import { useForm } from "@pankod/refine-react-hook-form"

export const FilterTerminal: React.FC<{
  formProps: FormProps
  filters: CrudFilters
}> = (props) => {
  const { searchFormProps, filters } = useTable<
    ITerminal,
    HttpError,
    IFilterVariables
  >({
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
    onSearch: (params) => {
      const filters: CrudFilters = []
      const { name } = params

      filters.push({
        field: "q",
        operator: "eq",
        value: name,
      })
      return filters
    },
  })
  const t: any = useTranslate()
  const { register, handleSubmit, control } = useForm<
    BaseRecord,
    HttpError,
    IFilterVariables
  >({
    defaultValues: {
      name: getDefaultFilter("q", filters, "eq"),
    },
  })

  return (
    <div>
      <Card title={"Filters"}>
        {/* <Filter formProps={searchFormProps} filters={filters || []} /> */}
        {/* <h1>Hi</h1> */}
      </Card>
    </div>
  )
}
