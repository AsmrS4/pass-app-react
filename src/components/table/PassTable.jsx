import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';

import PassTableItem from './PassTableItem';

export default function PassTable() {
    return (
        <TableContainer>
            <Table>
                <TableBody sx={{ border: '1px solid #d9d9d9' }}>
                    {rows.map((row, index) => (
                        <PassTableItem key={index} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function createData(name, status, date) {
    return {
        name,
        status,
        date,
        history: [
            {
                start_date: '05/01/2020',
                end_date: '01/02/2020',
                reason: 'Болезнь',
                customerId: '11091700',
            },
        ],
    };
}

const rows = [
    createData('Иванов Иван Иванович', 'На проверке', '01/01/2020'),
    createData('Иванов Иван Иванович', 'На проверке', '01/01/2020'),
    createData('Иванов Иван Иванович', 'На проверке', '01/01/2020'),
    createData('Иванов Иван Иванович', 'Одобрен', '01/01/2020'),
    createData('Иванов Иван Иванович', 'Одобрен', '01/01/2020'),
    createData('Иванов Иван Иванович', 'Отклонен', '01/01/2020'),
];
