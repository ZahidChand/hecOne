import { useRouterContext } from "@pankod/refine-core";
import { Box } from "@pankod/refine-mui";
import "./style.less";
import Terminal from "/home/adminrb/MyWorkspace/hecOne/src/components/Terminal/Terminal.jpg";

type TitleProps = {
  collapsed: boolean;
};

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();
  return (
    // <div >
    //     <img style={{ height: "70px", width: "180px" }} src="https://cityline.hectronic.com:49744/baygui/images/hectronic.png" alt="hecone" />
    // </div>

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
  );
};
