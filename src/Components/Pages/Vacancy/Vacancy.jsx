import React, { useMemo, useState, useEffect } from 'react';
import { useTable } from 'react-table';
import styles from './vacancy.module.css'; // Replace with your actual styles path
import Mega_Menu from '../Common/Mega_Menu';
import StikyNav from '../Common/StikyNav';
import About_us from "../../../assets/Images/common.jpg";
import Footer from '../Common/Footer';

const VacanciesTable = () => {
    const [vacancies, setVacancies] = useState([]);

    useEffect(() => {
        const fetchVacancies = async () => {
            const response = await fetch('https://weg.back.strapi.wegagen.com/api/external-vacancies');
            const data = await response.json();
            setVacancies(data.data);
        };

        fetchVacancies();
    }, []);

    const data = useMemo(() => vacancies.map(vacancy => ({
        no: vacancy.attributes.no,
        position: vacancy.attributes.position,
        jobPurpose: vacancy.attributes.Job_Purpose,
        qualification: vacancy.attributes.Qualification_Required_and_Experience,
        placeOfWork: vacancy.attributes.Place_of_Work,
        Required_Number: vacancy.attributes.Required_Number,
        Grade: vacancy.attributes.Grade,
        // Add other attributes you want to include in the table
    })), [vacancies]);

    const columns = useMemo(() => [
        {
            Header: 'No',
            accessor: 'no', // accessor is the "key" in the data
        },
        {
            Header: 'Position',
            accessor: 'position',
        },
        {
            Header: 'Job Purpose',
            accessor: 'jobPurpose',
        },
        {
            Header: 'Qualification Required',
            accessor: 'qualification',
        },
        {
            Header: 'Place of Work',
            accessor: 'placeOfWork',
        },
        {
            Header: 'Required Number',
            accessor: 'Required_Number',
        },
        {
            Header: 'Grade',
            accessor: 'Grade',
        },
    ], []);

    const tableInstance = useTable({ columns, data });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;

    return (
        <>

            <Mega_Menu />
            <StikyNav />

            <div className={styles.agarImage}>
                <img src={About_us} ></img>
            </div>

            <p style={{ fontSize: '30px', marginTop: '20px', }}>Career</p> 
            <table {...getTableProps()} className={styles.vacanciesTable}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className={styles.vacanciesApplyLink}>
                <p>
                    Applicants fulfilling the stated criteria could send their applications with CV and copy of
                    testimonials through <a href="https://vacancy.wegagenbanksc.com.et:9090" style={{color:'#ff6b0b'}}>https://vacancy.wegagenbanksc.com.et:9090</a> from Monday August 12, 2024 to Saturday August 17, 2024, Tel. 0115-523800.
                </p>
            </div>

            <Footer />

        </>
    );
};

export default VacanciesTable;
