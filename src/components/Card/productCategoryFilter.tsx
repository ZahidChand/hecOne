import React from "react"
import { useEffect, useState } from "react"
import { useList, useTranslate } from "@pankod/refine-core"

import { Button, Space } from "@pankod/refine-antd"

import { ITerminal } from "../../interfaces"

type ProductItemProps = {
  value?: string[]
  onChange?: (value: string[]) => void
}

export const ProductCategoryFilter: React.FC<ProductItemProps> = ({
  onChange,
  value,
}) => {
  const t = useTranslate()

  const [filterCategories, setFilterCategories] = useState<string[]>(
    value ?? [],
  )

  useEffect(() => {
    if (filterCategories.length > 0) {
      onChange?.(filterCategories)
    }
  }, [filterCategories])

  const { data: categoryData } = useList<ITerminal>({
    resource: "HecOne_Terminal",
    config: {
      pagination: { pageSize: 30 },
    },
  })

  return (
    <Space wrap>
      <Button
        shape="round"
        type={filterCategories.length === 0 ? "primary" : "default"}
        onClick={() => {
          setFilterCategories([])
          onChange?.([])
        }}
      >
        {t("stores.all")}
      </Button>
      {categoryData?.data.map((category) => (
        <Button
          key={category.id}
          shape="round"
          type={
            filterCategories.includes(category.id.toString())
              ? "primary"
              : "default"
          }
          // onClick={() => toggleFilterCategory(category.id.toString())}
        >
          {/* {category.title} */}
        </Button>
      ))}
    </Space>
  )
}
