import { TableContainer } from "@chakra-ui/react"
import { Avatar, Card, Icons, Tabs, Typography } from "@pankod/refine-antd"
import React from "react"
import { DetailsBreadcrumb } from "../../components/Breadcrumb/breadcrumb"
import { EditNetworkConfig } from "../NetworkConfig/edit-network-config"
import { EditPrinterConfig } from "../PrinterConfig/editPrinterConfig"

export const TerminalDetails: React.FC = () => {
  return (
    <Card bordered={false} className="h-full">
      <div className="border-b-2 pb-6 border-b-gray-300">
        <DetailsBreadcrumb />
      </div>
      <div className="w-full flex mt-6 max-h-full">
        <div className="w-3/12 border-r-2 p-2 border-gray-300">
          <div className="flex flex-col items-center">
            <Avatar
              size={120}
              src={
                "https://previews.123rf.com/images/olkita/olkita1812/olkita181200061/116085498-black-isolated-outline-icon-of-fuel-pump-on-white-background-line-icon-of-fuel-station.jpg"
              }
            ></Avatar>
            <Typography.Title level={5}>Terminal_#12311</Typography.Title>

            <div className="w-full">
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
        </div>

        <div className="w-8/12 p-2 mx-auto flex flex-col justify-start h-full min-h-6/12">
          <Tabs defaultActiveKey="1" className="h-full">
            <Tabs.TabPane tab="Network Configurations" key="1">
              <TableContainer>
                <EditNetworkConfig />
              </TableContainer>
            </Tabs.TabPane>
            <Tabs.TabPane
              tab="Printer Configurations"
              key="2"
              className="h-full"
            >
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
        </div>
      </div>
    </Card>
  )
}
