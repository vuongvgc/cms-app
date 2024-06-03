export type OrderType = {
  id: string;
  orderNo: string;
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

export type UserType = {
  id: string;
  name: string;
  email: string;
  password: string;
};
