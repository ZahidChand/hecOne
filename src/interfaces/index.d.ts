export interface ITerminal {
    id: id,
    name: name,
    longitude: longitude,
    latitude: latitude,
    created_at: created_at,
    deviceId: number,
    station: string,
    created_by: string,
    type: string,
    status: string,
    terminalAddress: string,
    terminalStreet: string,
    terminalCity: string,
    terminalState: string,
    terminalZipcode: number ,


}

export interface INetworkConfig {
    id: id,
    name: name,
    keys: keys[],
    serverHost: any,
    serverPort: any,
    serverProtocol: any,
    userName: any,
    password: any,
    updated_at: updated_at,
    created_at: created_at,
    terminalid: ITerminal,

}