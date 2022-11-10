import { Breadcrumb } from "antd"
import React from "react"

const App: React.FC = () => (
  <Breadcrumb>
    <Breadcrumb.Item>
      <a href={`${process.env.REACT_APP_API}/HecOne_Terminal`}>Terminal</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href={`${process.env.REACT_APP_API}/HecOne_Terminal/show/id`}>
        Details
      </a>
    </Breadcrumb.Item>
    {/* <Breadcrumb.Item>
      <a href={`${process.env.REACT_APP_API}/HecOne_Terminal/edit/id`}>Edit</a>
    </Breadcrumb.Item> */}
    {/* <Breadcrumb.Item>An Application</Breadcrumb.Item> */}
  </Breadcrumb>
)

export default App
