import {UserType} from './UserType';

export interface User {
  firstName: string;
  lastName: string;
  phone: string;
  street: string;
  flatNo: string;
  houseNo: string;
  zipCode: string;
  city: string;
  type: UserType;
}
