'use client'

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

type Props = {
    children: ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session.status === 'authenticated') {
            router.back();
        }
    }, [session.status]);

    return children

};

export default ProtectedRoute;
