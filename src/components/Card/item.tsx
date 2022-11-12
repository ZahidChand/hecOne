import { Card } from "@pankod/refine-antd"
import { ITerminal } from "../../interfaces"
import React from "react"

type TerminalItemProps = {
  item: ITerminal
}

export const TerminalItem: React.FC<TerminalItemProps> = ({ item }) => {
  return (
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{ width: 300 }}
    >
      <p> {item.id} </p>
      <p>{item.name}</p>
      <p>{item.longitude}</p>
    </Card>
  )
}
