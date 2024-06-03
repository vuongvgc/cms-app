const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const orders = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    orderNo: '#3210',
    user: 'Olivia Martin',
    channel: 'Online Store',
    date: 'February 20, 2022',
    total: '$42.25',
    status: 'Shipped',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    orderNo: '#3209',
    user: 'Ava Johnson',
    channel: 'Shop',
    date: 'January 5, 2022',
    total: '$74.99',
    status: 'Paid',
  },
];

module.exports = {
  users,
  orders,
};
