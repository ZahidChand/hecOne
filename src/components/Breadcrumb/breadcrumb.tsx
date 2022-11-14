import { useNavigation } from "@pankod/refine-core"
import { Breadcrumb } from "antd"
import React from "react"

export const DetailsBreadcrumb: React.FC = () => {
  const { list } = useNavigation()
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <a
          href="/"
          onClick={(_) => {
            _.preventDefault()
            list("HecOne_Terminal")
          }}
        >
          Terminal
        </a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="/" onClick={(_) => _.preventDefault()}>
          Details
        </a>
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}
