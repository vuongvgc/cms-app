export type UserData = {
  userName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
};

export type OrderData = {
  order: string;
  user: string;
  channel: string;
  date: string;
  status: string;
  total: string;
};

export interface LoginFormData {
  email: string;
  password: string;
}

export const initValues: LoginFormData = {
  email: 'admin@quickflow.com',
  password: '123456',
};
