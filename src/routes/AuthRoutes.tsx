import AuthPathControl from '~/components/AuthPathControl';
import Account from '~/pages/Account';
import MyInfor from '~/pages/MyInfor';
import MyTicket from '~/pages/MyTicket';

const AuthRoutes = [
    {
        path: 'account',

        element: (
            <AuthPathControl>
                <Account />
            </AuthPathControl>
        ),
        children: [
            {
                index: true,
                element: <MyInfor />,
            },
            {
                path: 'my-ticket',
                element: <MyTicket />,
            },
        ],
    },
];

export default AuthRoutes;
