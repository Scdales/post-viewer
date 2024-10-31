export interface THair {
  color: string
  type: string
}

export interface TCoordinates {
  lat: number
  lng: number
}

export interface TAddress {
  address: string
  city: string
  state: string
  stateCode: string
  postalCode: string
  coordinates: TCoordinates
  country: string
}

export interface TBank {
  cardExpire: string
  cardNumber: string
  cardType: string
  currency: string
  iban: string
}

export interface TCompany {
  department: string
  name: string
  title: string
  address: TAddress
}

export interface TCrypto {
  coin: string
  wallet: string
  network: string
}

export type TUsersResponse =  {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: string
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  bloodGroup: string
  height: number
  weight: number
  eyeColor: string
  hair: THair
  ip: string
  address: TAddress
  macAddress: string
  university: string
  bank: TBank
  company: TCompany
  ein: string
  ssn: string
  userAgent: string
  crypto: TCrypto
  role: string
}
