import React from "react"
import { useRouterContext } from "@pankod/refine-core"
import { Box } from "@pankod/refine-mui"
import "./style.less"

type TitleProps = {
  collapsed: boolean
}

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext()
  return (
    <Link to="/">
      <Box
        sx={{
          height: "72px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {collapsed ? (
          <img
            style={{ height: "70px", width: "60px" }}
            src="https://cityline.hectronic.com:49744/baygui/images/hectronic.png"
            alt="hecone"
          />
        ) : (
          <img
            style={{ height: "70px", width: "180px" }}
            src="https://cityline.hectronic.com:49744/baygui/images/hectronic.png"
            alt="hecone"
          />
        )}
      </Box>
    </Link>
  )
}
