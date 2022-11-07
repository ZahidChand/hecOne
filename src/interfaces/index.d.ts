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
    terminal_street: string,
    terminal_city: string,
    terminal_state: string,
    terminal_zipcode: number ,


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