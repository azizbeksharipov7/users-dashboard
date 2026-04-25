export type UserRole = "admin" | "moderator" | "user";

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
}

export interface Hair {
  color: string;
  type: string;
}

export interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface Company {
  department: string;
  name: string;
  title: string;
}

export interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age: number;
  gender: string;

  email: string;
  phone: string;
  username: string;

  birthDate: string;
  image: string;

  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;

  hair: Hair;
  ip: string;

  address: Address;
  university: string;

  bank: Bank;
  company: Company;

  ein: string;
  ssn: string;
  userAgent: string;

  crypto: Crypto;

  role?: UserRole;
}
export interface Params {
  limit?: number;
  skip?: number;
  search?: string;
  sortBy?: string;
  order?: "asc" | "desc";
}

export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}