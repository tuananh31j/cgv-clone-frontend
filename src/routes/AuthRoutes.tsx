import AuthPathControl from '~/components/AuthPathControl';
import MyTicket from '~/pages/MyTicket';

const AuthRoutes = [
    {
        path: 'my-ticket',
        element: (
            <AuthPathControl>
                <MyTicket />
            </AuthPathControl>
        ),
    },
];

export default AuthRoutes;
