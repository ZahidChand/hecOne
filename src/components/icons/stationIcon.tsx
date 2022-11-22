import React from "react"
import { Icon } from "@pankod/refine-antd"

const StationIconSVG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    style={{ marginLeft: "-2px" }}
    width="20px"
    height="20px"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 2.009c-2.762 0-5 2.229-5 4.99 0 4.774 5 11 5 11s5-6.227 5-11c0-2.76-2.238-4.99-5-4.99zm0 7.751a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4z"
      fill="white"
    />
  </svg>
)

export const StationIcon = (props: React.ComponentProps<typeof Icon>) => (
  <Icon component={StationIconSVG} {...props} />
)
