import React from "react"
import { useRouterContext } from "@pankod/refine-core"
import { Box } from "@pankod/refine-mui"
import "./style.less"
import hecImage from "../../Images/download.png"
import titleImage from "../../Images/hectronic.png"

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
            style={{ height: "40px", width: "35px", backgroundColor: "red" }}
            src={hecImage}
            alt="hecone"
          />
        ) : (
          <img
            style={{ height: "70px", width: "180px" }}
            src={titleImage}
            alt="hecone"
          />
        )}
      </Box>
    </Link>
  )
}
