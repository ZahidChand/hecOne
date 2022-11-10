import {
  Avatar,
  Card,
  Divider,
  NumberField,
  Typography,
} from "@pankod/refine-antd";
import { ITerminal } from "../../interfaces";

const { Text, Paragraph } = Typography;

type TerminalItemProps = {
  item: ITerminal;
};

export const TerminalItem: React.FC<TerminalItemProps> = ({ item }) => {
  return (
    // <Card
    //     style={{
    //         margin: "8px",
    //     }}
    //     bodyStyle={{ height: "500px" }}
    //     >
    //     {/* <Text>Sanchita</Text> */}
    //     <div
    //         style={{
    //             display: "flex",
    //             flexDirection: "column",
    //             justifyContent: "space-between",
    //             height: "100%",
    //         }}
    //     >
    //         <div style={{ textAlign: "center" }}>
    //             <Avatar
    //                 size={128}
    //                 src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSVNDTCFdYkZVDp49l0Sux5b0qaQboq6swiLhZI04&s"}
    //                 alt={item.name}
    //             />
    //         </div>
    //         <Divider />
    //         <Text
    //             style={{
    //                 fontSize: "18px",
    //                 fontWeight: 800,
    //                 marginBottom: "8px",
    //             }}
    //         >
    //             {item.name}
    //         </Text>
    //         <Paragraph
    //             ellipsis={{ rows: 3, tooltip: true }}
    //             style={{ marginBottom: "8px" }}
    //         >
    //             {item.TerminalAddress}
    //         </Paragraph>
    //         <Text
    //             style={{
    //                 fontSize: "18px",
    //                 fontWeight: 700,
    //                 color: "#999999",
    //             }}
    //         >
    //         {item.name}
    //         </Text>
    //         <NumberField
    //             style={{
    //                 fontSize: "24px",
    //                 fontWeight: 500,
    //                 marginBottom: "8px",
    //             }}
    //             value={item.latitude}
    //         />
    //         <NumberField
    //             style={{
    //                 fontSize: "24px",
    //                 fontWeight: 500,
    //                 marginBottom: "8px",
    //             }}
    //             value={item.longitude}
    //         />

    //     </div>
    // </Card>
    <>
      <Card
        title="Default size card"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p> {item.id} </p>
        <p>{item.name}</p>
        <p>{item.longitude}</p>
      </Card>
      {/* <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card> */}
    </>
  );
};
