import { TableContainer } from "@chakra-ui/react"
import { Avatar, Card, Col, Icons, Tabs, Typography } from "@pankod/refine-antd"
import { IResourceComponentsProps } from "@pankod/refine-core"
import React from "react"
import Breadcrumb from "../../components/Breadcrumb/breadcrumb"
import EditNetworkConfig from "../NetworkConfig/editNetworkConfig"
import EditPrinterConfig from "../PrinterConfig/editPrinterConfig"

export const ShowDetailsOfTerminal: React.FC<IResourceComponentsProps> = () => {
  return (
    <>
      <Card bordered={false} style={{ height: "100%" }}>
        <div className="border-b-2 pb-6" style={{ borderBottomColor: "#ccc" }}>
          <Breadcrumb />
        </div>
        <div className="w-full flex mt-6 max-h-full">
          <Col xl={5} lg={24} xs={24}>
            <div style={{ width: "100%", height: "100%" }}>
              <Avatar
                size={120}
                src={
                  "https://previews.123rf.com/images/olkita/olkita1812/olkita181200061/116085498-black-isolated-outline-icon-of-fuel-pump-on-white-background-line-icon-of-fuel-station.jpg"
                }
              ></Avatar>
              <Typography.Title level={5}>Terminal_#12311</Typography.Title>

              <div
                style={{
                  width: "100%",
                  // textAlign: xl ? "unset" : "center",
                }}
              >
                <div>
                  <Typography.Text>
                    <Icons.DeploymentUnitOutlined />
                    <b>{" Type : "}</b>
                    Liquefaction
                  </Typography.Text>
                </div>
                <div>
                  <Typography.Text>
                    <Icons.HomeOutlined />
                    <b>{" Station : "}</b>
                    Station131
                  </Typography.Text>
                </div>
                <div>
                  <Typography.Text>
                    <Icons.DashboardOutlined />
                    <b>{" Status : "}</b>
                    Active
                  </Typography.Text>
                </div>
                <div>
                  <Typography.Text>
                    <Icons.LaptopOutlined />
                    <b>{" Device : "}</b>
                    1256
                  </Typography.Text>
                </div>
                <div>
                  <Typography.Text>
                    <Icons.HomeOutlined />
                    <b>{" Address : "}</b>
                    TerminalAddress1234, Eichendorffstr. 13, Allensbach,
                    Baden-Württemberg
                  </Typography.Text>
                </div>
              </div>
            </div>
            {/* </Card> */}
          </Col>

          <Col xl={18} xs={24}>
            {/* <Card > */}
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="Network Configurations" key="1">
                <TableContainer>
                  <EditNetworkConfig />
                </TableContainer>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Printer Configurations" key="2">
                <TableContainer>
                  <EditPrinterConfig />
                </TableContainer>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Restrictions" key="3">
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                  cumque nobis beatae odit optio vero, amet maiores dolore
                  necessitatibus dignissimos quia, facere adipisci pariatur
                  blanditiis? Optio ea velit, quasi sequi hic sed, odio saepe
                  culpa nesciunt explicabo dolore commodi perferendis id nemo.
                  Recusandae modi molestiae cumque vero labore similique
                  explicabo!
                </h1>
              </Tabs.TabPane>
            </Tabs>
          </Col>
        </div>
      </Card>
    </>
  )
}

export default ShowDetailsOfTerminal
