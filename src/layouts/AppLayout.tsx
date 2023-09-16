import {Main} from '@components/index';
import { Outlet } from 'react-router-dom';
import { Navigation } from '.';

const AppLayout = () => {
    return (
            <Navigation>
                <Main>
                    <Outlet />
                </Main>
            </Navigation>
    );
};

export default AppLayout;