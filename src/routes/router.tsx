import { createBrowserRouter } from 'react-router-dom';
import ROUTE_PATH from './path';
import { SignIn, SignUp } from '@pages/auth';
import App from '@/App';
import Recruit from '@/pages/recruit';
import VisaRegistration from '@/pages/employee/visaRegistration';
import { PostNotice } from '@/pages/employer/postNotice';
import EmployerMyAccount from '@/pages/employer/myAccount';

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.HOME,
    element: <App />,
    children: [
      { path: ROUTE_PATH.AUTH.SIGN_IN, element: <SignIn /> },
      {
        path: ROUTE_PATH.AUTH.SIGN_UP,
        element: <SignUp />,
      },
      { path: ROUTE_PATH.Recruit, element: <Recruit /> },
      { path: ROUTE_PATH.EMPLOYEE.VISA_REGISTRATION, element: <VisaRegistration /> },
      { path: ROUTE_PATH.POST_NOTICE, element: <PostNotice /> },
      { path: ROUTE_PATH.EMPLOYER.MY_ACCOUNT, element: <EmployerMyAccount /> },
    ],
  },
]);
