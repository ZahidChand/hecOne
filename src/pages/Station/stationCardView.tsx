import { Center, Grid, GridItem, Text } from "@chakra-ui/react"
import {
  Avatar,
  Card,
  Form,
  FormProps,
  ListProps,
  Row,
} from "@pankod/refine-antd"
import React from "react"
import { IStation } from "../../interfaces"
import stationImage from "../../Images/GasStationImg2.png"

export const StationCardView: React.FC<{
  formProps: FormProps
  listProps: ListProps<IStation>
}> = ({ listProps }) => {
  return (
    <Form>
      <Row
        gutter={[16, 16]}
        style={{
          alignContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            margin: "auto",
          }}
        >
          {(listProps.dataSource ?? []).map((terminal) => {
            return (
              <div
                style={{ flex: "0 0 33%", width: "100%", padding: "5px" }}
                key={terminal.id}
              >
                <Card>
                  <div key={terminal?.id}>
                    <Grid templateColumns="repeat(10, 1fr)" mt={3} mb={3}>
                      <GridItem colSpan={2}>
                        <Center
                        // onClick={() => {
                        //   show("HecOne_Station", terminal?.id)
                        // }}
                        >
                          <Avatar
                            style={{ cursor: "pointer" }}
                            size={120}
                            src={stationImage}
                            alt={terminal.name}
                          />
                        </Center>
                      </GridItem>
                      <GridItem
                        colSpan={7}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                          marginLeft: "23px",
                        }}
                      >
                        <Text key="name" fontWeight={"bold"}>
                          {terminal?.name}
                        </Text>

                        <Text fontWeight={"sm"}>
                          <b>Address : </b>
                          {terminal?.stationAddress}
                        </Text>

                        <Text fontWeight={"sm"}>
                          <b>Area : </b>
                          {terminal?.stationArea}
                        </Text>
                      </GridItem>
                      {/* <GridItem colSpan={1} textAlign={"right"}>
                        <Dropdown
                          overlay={
                            <Menu mode="vertical">
                              <Menu.Item
                                key="1"
                                style={{
                                  fontWeight: 500,
                                }}
                                icon={
                                  <FormOutlined
                                    style={{
                                      color: "green",
                                      marginLeft: "17px",
                                    }}
                                  />
                                }
                                onClick={() => {
                                  edit("HecOne_Terminal", terminal?.id)
                                }}
                              >
                                {"Edit"}
                              </Menu.Item>

                              <Menu.Item
                                key="2"
                                style={{
                                  fontWeight: 500,
                                }}
                              >
                                <ShowButton
                                  icon={<EyeTwoTone />}
                                  style={{
                                    border: "0px",
                                    marginLeft: "10px",
                                  }}
                                  title="Show"
                                  hideText
                                  size="small"
                                  recordItemId={terminal.id}
                                />
                                {"Show"}
                              </Menu.Item>
                              <Menu.Item
                                key="3"
                                style={{
                                  fontSize: 15,
                                  display: "flex",
                                  alignItems: "center",
                                  fontWeight: 500,
                                }}
                              >
                                <DeleteButton
                                  recordItemId={terminal.id}
                                  style={{ border: "0px" }}
                                  confirmOkText="Yes"
                                  confirmCancelText="No"
                                  title="Delete"
                                />
                              </Menu.Item>
                            </Menu>
                          }
                          trigger={["click"]}
                        >
                          <Icons.MoreOutlined
                            style={{
                              fontSize: 24,
                            }}
                          />
                        </Dropdown>
                      </GridItem> */}
                    </Grid>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
      </Row>
    </Form>
  )
}
