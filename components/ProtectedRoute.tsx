'use client'

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import Loading from './Loading';

type Props = {
    children: ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
    const session = useSession();
    const router = useRouter();

    if(session.status === 'loading') return <Loading/>;

    if (session.status === 'authenticated') {
        router.back();
    }
    return children

};

export default ProtectedRoute;
