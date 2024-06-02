import { AuthData } from '@/app/lib/api/auth.api';
import { httpApiMock } from '@/app/lib/api/mocks/http.api.mock';
import { initValues } from '@/app/lib/type';

const avatarImg = process.env.AWS_URL + '/avatar.jpeg';

httpApiMock.onPost('login').reply((config) => {
  const data: AuthData = JSON.parse(config.data || '');
  if (data.password === initValues.password) {
    return [
      200,
      {
        token: 'bearerToken',
        user: {
          id: 1,
          firstName: 'Admin',
          lastName: 'QuickFlow',
          imgUrl: avatarImg,
          userName: 'admin',
          email: {
            email: 'admin@quickflow.com',
            verified: true,
          },
          phone: {
            number: '012234567890',
            verified: true,
          },
        },
      },
    ];
  } else return [401, { message: 'Invalid Credentials' }];
});
