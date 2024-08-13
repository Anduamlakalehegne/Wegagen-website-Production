import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector } from '@mui/x-data-grid';
import About_us from "../../../assets/Images/common.jpg";
import Mega_Menu from "../Common/Mega_Menu";
import Footer from "../Common/Footer";
import StikyNav from "../Common/StikyNav";
import styles from "./location.module.css";

function ATM_Location() {
    const [districtsData, setDistrictsData] = useState({});
    const [selectedDistrict, setSelectedDistrict] = useState('NORTH ADDIS ABABA DISTRICT');
    const [isLoading, setIsLoading] = useState(true); // Added loading state
    const apiUrl = 'https://weg.back.strapi.wegagen.com/api/atm-branches';

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true); // Start loading
            try {
                const response = await fetch(`${apiUrl}?pagination[page]=1&pagination[pageSize]=10000`);
                const data = await response.json();
                const atmData = data.data.map((atm) => ({
                    id: atm.attributes.SN,
                    branch: atm.attributes.branch,
                    location: atm.attributes.location,
                    district: atm.attributes.district
                }));

                const groupedData = atmData.reduce((acc, atm) => {
                    acc[atm.district] = acc[atm.district] || [];
                    acc[atm.district].push(atm);
                    return acc;
                }, {});

                setDistrictsData(groupedData);
                setIsLoading(false); // End loading
            } catch (error) {
                console.error("Error fetching data: ", error);
                setIsLoading(false); // End loading, even if there's an error
            }
        };

        fetchData();
    }, []);

    const handleDistrictSelect = (district) => {
        setSelectedDistrict(district);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'branch', headerName: 'Branch', width: 320 },
        { field: 'location', headerName: 'Location', width: 320 }
    ];

    function DistrictsNav({ districts, selectedDistrict, onSelect }) {
        return (
            <div className={styles.districtsNav}>
                {districts.map((district, index) => (
                    <p key={index}
                        className={selectedDistrict === district ? styles.districtActive : ''}
                        onClick={() => onSelect(district)}>
                        {district}
                    </p>
                ))}
            </div>
        );
    }

    function CustomToolbar() {
        return (
            <GridToolbarContainer sx={{ justifyContent: 'flex-end' }}>
                <GridToolbarFilterButton />
            </GridToolbarContainer>
        );
    }

    return (
        <div>
            <StikyNav />
            <Mega_Menu />

            <div className={styles.agarImage}>
                <img src={About_us} alt="About us"></img>
            </div>

            <div className={styles.establishment}>
                {/* Side Navigation */}
                <div className={styles.sideNav}>
                    <DistrictsNav
                        districts={Object.keys(districtsData)}
                        selectedDistrict={selectedDistrict}
                        onSelect={handleDistrictSelect}
                    />
                </div>
                {/* Main content */}
                <div className={styles.mainContent}>
                    {!isLoading ? (
                        selectedDistrict && districtsData[selectedDistrict] ? (
                            <div style={{ width: '100%', height: '800px', margin: 'auto', marginBottom: '50px' }}>
                                <p className={styles.headerTitle2}>ATM LOCATIONS</p>
                                <p className={styles.headerTitle}>{selectedDistrict}</p>
                                <DataGrid
                                    rows={districtsData[selectedDistrict]}
                                    columns={columns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5, 10, 20]}
                                    components={{
                                        Toolbar: CustomToolbar,
                                    }}
                                    checkboxSelection
                                    sx={{
                                        border: 1,
                                        borderColor: 'primary.light',
                                        '& .MuiDataGrid-cell:hover': {
                                            color: 'primary.main',
                                        },
                                        '& .MuiDataGrid-columnHeaders': {
                                            backgroundColor: '#ff6b0b',
                                        },
                                        '& .MuiDataGrid-row': {
                                            '&:hover': {
                                                backgroundColor: 'rgba(255, 165, 0, 0.3)',
                                            },
                                        },
                                    }}
                                />
                            </div>
                        ) : (
                            <p>No data available for this district.</p>
                        )
                    ) : (
                        <p>Loading ATM data...</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ATM_Location;
