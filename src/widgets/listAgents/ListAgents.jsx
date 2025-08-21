import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';

const allRows = [
    { agency: 'ОсОО «Город Будущего»', object_name: 'ЖК «Панорама»', delivery_year: 2026, manager: 'Тимур Абдрахманов', contact_phone: '+996 700 456 789' },
    { agency: 'ОсОО «Город Будущего»', object_name: 'ЖК «Панорама»', delivery_year: 2026, manager: 'Тимур Абдрахманов', contact_phone: '+996 700 456 789' },
    { agency: 'ОсОО «Город Будущего»', object_name: 'ЖК «Панорама»', delivery_year: 2026, manager: 'Тимур Абдрахманов', contact_phone: '+996 700 456 789' },
    { agency: 'ОсОО «Город Будущего»', object_name: 'ЖК «Панорама»', delivery_year: 2026, manager: 'Тимур Абдрахманов', contact_phone: '+996 700 456 789' },
    { agency: 'ОсОО «Город Будущего»', object_name: 'ЖК «Панорама»', delivery_year: 2026, manager: 'Тимур Абдрахманов', contact_phone: '+996 700 456 789' },
    { agency: 'ОсОО «Город Будущего»', object_name: 'ЖК «Панорама»', delivery_year: 2026, manager: 'Тимур Абдрахманов', contact_phone: '+996 700 456 789' },
    { agency: 'ОсОО «Город Будущего»', object_name: 'ЖК «Панорама»', delivery_year: 2026, manager: 'Тимур Абдрахманов', contact_phone: '+996 700 456 789' },
];

const rowsPerPage = 8;

const headCellStyle = {
    color: '#323232',
    fontWeight: 500,
    fontSize: { xs: '20px', md: '25px' },
};

const bodyCellStyle = {
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
    whiteSpace: 'nowrap',
    color: '#323232',
    paddingTop: { xs: '15px', md: '35px' },
    paddingBottom: { xs: '15px', md: '35px' },
    fontWeight: 300,
    fontSize: { xs: '12px', md: '20px' },
};

export const ListAgents = () => {
    const [page, setPage] = React.useState(1);

    const handleChange = (value) => {
        setPage(value);
    };

    const paginatedRows = allRows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    return (
        <>
            <TableContainer component={Paper} sx={{ width: '100%', overflowX: 'auto' }}>
                <Table sx={{ minWidth: 650 }} aria-label="agents table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={headCellStyle}>Агентство</TableCell>
                            <TableCell sx={headCellStyle}>Объекты</TableCell>
                            <TableCell sx={headCellStyle}>Сдача</TableCell>
                            <TableCell sx={headCellStyle}>Менеджер</TableCell>
                            <TableCell sx={headCellStyle}>Контакты</TableCell>
                            <TableCell sx={headCellStyle}>Документы</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedRows.map((row, index) => (
                            <TableRow key={`${row.agency}-${index}`} sx={{ '& td': bodyCellStyle }}>
                                <TableCell>{row.agency}</TableCell>
                                <TableCell>{row.object_name}</TableCell>
                                <TableCell>{row.delivery_year}</TableCell>
                                <TableCell>{row.manager}</TableCell>
                                <TableCell>{row.contact_phone}</TableCell>
                                <TableCell sx={{
                                    textDecoration: 'underline',
                                    cursor: "pointer"
                                }}  >Скачать</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Pagination
                count={Math.ceil(allRows.length / rowsPerPage)}
                page={page}
                onChange={handleChange}
                variant="outlined"
                shape="rounded"
                sx={{
                    mt: 2,
                    display: 'flex',
                    justifyContent: 'end',
                    '& .MuiPaginationItem-root': {
                        borderRadius: '8px',
                    },
                    '& .MuiPaginationItem-root.Mui-selected': {
                        backgroundColor: '#163659',
                        color: '#fff',
                        borderColor: '#163659',
                    },
                    '& .MuiPaginationItem-root.Mui-selected:hover': {
                        backgroundColor: '#12294d',
                    },
                }}
            />
        </>
    );
};
