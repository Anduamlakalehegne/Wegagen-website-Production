import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import About_us from "../../../assets/Images/common.jpg";
import Mega_Menu from "../Common/Mega_Menu";
import Footer from "../Common/Footer";
import StikyNav from "../Common/StikyNav";
import styles from "./location.module.css";

function Branch_Location() {
    const [districtsData, setDistrictsData] = useState({});
    const [selectedDistrict, setSelectedDistrict] = useState('North Addis Ababa District Office');
    const [isLoading, setIsLoading] = useState(true);
    const apiUrl = 'https://weg.back.strapi.wegagen.com/api/branch-lists';

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${apiUrl}?pagination[page]=1&pagination[pageSize]=1000`);
                const data = await response.json();
                let branchesData = data.data.map((branch) => ({
                    id: branch.attributes.SN == null ? "" : branch.attributes.SN,
                    branchs: branch.attributes.branchs,
                    kirnchafoch: branch.attributes.kirnchafoch,
                    telephone: branch.attributes.telephone,
                    district: branch.attributes.district,
                }));

                // Sort branches by SN
                branchesData = branchesData.sort((a, b) => {
                    return a.id - b.id; // Assuming id (SN) is a number. If it's a string, modify sorting accordingly.
                });

                const groupedData = branchesData.reduce((acc, branch) => {
                    acc[branch.district] = acc[branch.district] || [];
                    acc[branch.district].push(branch);
                    return acc;
                }, {});

                setDistrictsData(groupedData);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'branchs', headerName: 'Branch', width: 240 },
        { field: 'kirnchafoch', headerName: 'Local Name', width: 280 },
        { field: 'telephone', headerName: 'Telephone', width: 210 },
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
        <div className={styles.container}>
            <StikyNav />
            <Mega_Menu />
            <div className={styles.agarImage}>
                <img src={About_us} alt="About us"></img>
            </div>

            {/* Side Navigation */}
            <div className={styles.establishment}>
                <DistrictsNav
                    districts={Object.keys(districtsData)}
                    selectedDistrict={selectedDistrict}
                    onSelect={setSelectedDistrict}
                />
                {/* Main content */}
                <div className={styles.mainContent}>
                    <div style={{ width: '100%', height: '100%', margin: 'auto', marginBottom: '100px' }}>
                        {!isLoading ? (
                            selectedDistrict && districtsData[selectedDistrict] ? (
                                <div style={{ width: '100%', height: '800px', margin: 'auto', marginBottom: '50px' }}>
                                    <p className={styles.headerTitle2}>BRANCHES LOCATIONS</p>
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
                            <p>Loading branches...</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Branch_Location;
