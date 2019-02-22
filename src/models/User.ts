export interface IAddress {
  street: string;
  city: string;
  suite: string;
  zipcode: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAddress;
}
