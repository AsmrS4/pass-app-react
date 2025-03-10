import React, { useEffect, useState } from 'react';
import { List } from '@mui/material';

import './index.scss';
import UserItem from '../../components/listItem/UserItem';
import { useSelector } from 'react-redux';

const UsersPage = () => {
    const { users } = useSelector((state) => state.users);

    return (
        <>
            <div className='users-page'>
                <div className='inner-wrapper'>
                    <div className='users-wrapper'>
                        <List sx={{ width: 1, paddingX: '16px' }}>
                            {users.map((item) => {
                                return <UserItem {...item} />;
                            })}
                        </List>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UsersPage;
