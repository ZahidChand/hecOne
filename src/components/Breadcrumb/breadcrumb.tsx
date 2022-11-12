import { useNavigation } from "@pankod/refine-core"
import { Breadcrumb } from "antd"
import React from "react"

const App: React.FC = () => {
  const { list } = useNavigation()
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <a
          href="#"
          onClick={(_) => {
            _.preventDefault()
            list("HecOne_Terminal")
          }}
        >
          Terminal
        </a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href={`/HecOne_Terminal/show/id`}>Details</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default App
