export interface ITerminal {
  id: string
  name: string
  longitude: string
  latitude: string
  created_at: string
  device_id: number
  station: string
  created_by: string
  type: string
  status: string
  terminalAddress: string
  terminal_street: string
  terminal_city: string
  terminal_state: string
  terminal_zipcode: number
}

export interface INetworkConfig {
  id: id
  name: name
  keys: keys[]
  serverHost: string
  serverPort: string
  serverProtocol: string
  userName: string
  password: string
  updated_at: string
  created_at: string
  terminalid: string
}

export interface IFilterVariables {
  name?: string
  // store?: string;
  // user?: string;
  status?: string[]
}

export interface IStation {
  id: id
  name: string
  stationAddress: string
  stationArea: string
  created_at: string
  updated_at: string
  stationStatus: string
}
