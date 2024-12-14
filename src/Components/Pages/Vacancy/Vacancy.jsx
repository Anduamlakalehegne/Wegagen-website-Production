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
            console.log(data);  // Check the API response
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
        fromDate: vacancy.attributes.From_Date || 'N/A',  // Use fallback
        toDate: vacancy.attributes.To_Date || 'N/A',    // Use fallback
        dateRange: `${vacancy.attributes.From_Date || 'N/A'} - ${vacancy.attributes.To_Date || 'N/A'}`, // Combine dates
    })), [vacancies]);

    const columns = useMemo(() => [
        {
            Header: 'No',
            accessor: 'no',
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
        {
            Header: 'Date',
            accessor: 'dateRange', // Use the new dateRange property
            style: { width: '180px' },
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
                <img src={About_us} alt="About Us" />
            </div>

            <p style={{ fontSize: '30px', marginTop: '20px' }}>Career</p>

            <table {...getTableProps()} className={styles.vacanciesTable}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps({ style: column.style })}>
                                    {column.render('Header')}
                                </th>
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
                                    <td {...cell.getCellProps({ style: cell.column.style })}>
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className={styles.vacanciesApplyLink}>
                <p>
                    Applicants fulfilling the stated criteria could send their applications with CV and copy of
                    testimonials through <a href="https://vacancy.wegagenbanksc.com.et:9090" style={{ color: '#ff6b0b' }}>https://vacancy.wegagenbanksc.com.et:9090</a>
                </p>
            </div>

            <Footer />
        </>
    );
};

export default VacanciesTable;