export interface ITerminal {
    id: id,
    name: name,
    longitude: longitude,
    latitude: latitude,
    created_at: created_at,
    terminalAddress: string,
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