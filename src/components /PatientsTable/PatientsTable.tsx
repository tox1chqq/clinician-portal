import {IconButton, Table,Pagination, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import mockData from "../../mockdata.json";
import {ListPoint} from "../ListPoint/ListPoint";
import detail from '../../assests/images/detail.svg'
import React, {useState, useEffect, ChangeEvent} from "react";
import {IPatient} from "../../types";

export const PatientsTable = () => {
    const patients = mockData
    const [currentItems, setCurrentItems] = useState<IPatient[]>([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(patients.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(patients.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event: React.ChangeEvent<unknown>,page: number) => {
        const newOffset = (page * itemsPerPage) % patients.length;
        setItemOffset(newOffset);
    };


    const tableHeaders = [
        {title: 'Name', subtitle: '', border: '16px 0 0 0px'},
        {title: 'Medication', subtitle: 'Dose / frequency'},
        {title: 'Symptoms', subtitle: 'Severity'},
        {title: 'Physical Wellbeing', subtitle: 'In the last 7 days'},
        {title: 'Mood', subtitle: 'In the last 7 days'},
        {title: 'Medication Adherence', subtitle: 'In the last 7 days'},
        {title: 'View Details', subtitle: '', border: '0 16px 0 0'}
    ]

    return <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    {tableHeaders.map(tableItem => <TableCell key={tableItem.title} align='center' sx={{
                        color: 'tableHeaderText',
                        backgroundColor: 'tableBackgroundColor',
                        verticalAlign: 'baseline',
                        border:'none',
                        borderRadius: tableItem.border || ''
                    }}>
                        <Typography component='h6' variant='h6' fontSize={14} fontWeight='bold'>
                            {tableItem.title}
                        </Typography>
                        <Typography component='h6' variant='h6' fontSize={12}>
                            {tableItem.subtitle}
                        </Typography>
                    </TableCell>)}
                </TableRow>
            </TableHead>
            <TableBody>
                {currentItems.map(patient => <TableRow key={patient.id} sx={{color:'mainTextColor'}}>
                    <TableCell align='center'>
                        <Typography fontWeight='bold' fontSize={14}>
                            {patient.name}
                        </Typography>
                    </TableCell>
                    <TableCell align='center'>
                       <Typography>
                           {patient.medication}
                       </Typography>
                        <Typography>
                            ({patient.medication_dose}/ QD)
                        </Typography>
                    </TableCell>
                    <TableCell align='center'>
                        {patient.symptoms.map(item =>
                        <ListPoint key={item.name} text={item.name} color={item.state}/>
                        )}
                    </TableCell>
                    <TableCell align='center'>
                        <Typography fontSize={20} fontWeight='bold'>
                            {patient.wellbeing.toFixed(1)}
                        </Typography>
                    </TableCell>
                    <TableCell align='center'>
                        <Typography fontSize={20} fontWeight='bold'>
                            {patient.mood.toFixed(1)}
                        </Typography>
                    </TableCell>
                    <TableCell align='center'>
                        <Typography fontSize={20} fontWeight='bold' color='adherenceColor'>
                            {patient.adherence}
                        </Typography>
                    </TableCell>
                    <TableCell align='center'>
                        <IconButton sx={{padding:'10px', backgroundColor:'tableButtonColor'}}>
                            <img src={detail} alt='Detail'/>
                        </IconButton>
                    </TableCell>
                </TableRow>)}
            </TableBody>
        </Table>
        <Pagination count={pageCount}  variant="outlined" color="primary" onChange={handlePageClick} />
    </TableContainer>
}
