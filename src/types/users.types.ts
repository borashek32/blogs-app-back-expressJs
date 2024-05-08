export type UserType = {
  id?: number
  name?: string
  username: string
  email: string
  address?: AddressType
  phone?: string
  website?: string
  company?: CompanyType
}

export type AddressType = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: { 
    lat: string
    lng: string
  } 
}

export type CompanyType = {
  name: string
  catchPhrase: string
  bs: string
}

export type RegisterRequestDataType = {
  email: string
}

export type RegisterResponseDataType = {
  id: number
  email: string
}