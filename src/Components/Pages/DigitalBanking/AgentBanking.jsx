import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector } from '@mui/x-data-grid';
import { Paper } from '@mui/material';
import Header from '../Common/Header'
import ExchangeRate from '../Common/ExchangeRate'
import Slider from '../Common/Slider'
import About_us from "../../../assets/Images/common.jpg";
import agar1 from "../../../assets/Images/agar1.png";
import styles from "./cardBanking.module.css";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
// import { FaUserCheck } from "react-icons/fa"; 
import { IoIosDoneAll } from "react-icons/io";
import Mega_Menu from "../Common/Mega_Menu";
import Footer from "../Common/Footer";
import StikyNav from "../Common/StikyNav";

function AgentBanking() {

    useEffect(() => {
        Aos.init();
    }, []);

    const [rows, setRows] = useState([]);
    const apiUrl = 'https://weg.back.strapi.wegagen.com/api/agent-networks';

    useEffect(() => {
        const fetchData = async () => {
            try {
                // First call to get total count
                let response = await fetch(`${apiUrl}?publicationState=live&pagination[page]=1&pagination[pageSize]=1`);
                let data = await response.json();
                const total = data.meta.pagination.total;

                // Second call to get all agents based on total count
                response = await fetch(`${apiUrl}?publicationState=live&pagination[page]=1&pagination[pageSize]=${total}`);
                data = await response.json();
                const agentsData = data.data.map((agent) => ({
                    id: agent.id,
                    no: agent.attributes.no,
                    fullName: agent.attributes.full_name,
                    city: agent.attributes.city,
                    specificLocation: agent.attributes.specific_location,
                }));
                setRows(agentsData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    const columns = [
        { field: 'no', headerName: 'No', width: 150 },
        { field: 'fullName', headerName: 'Full Name', width: 400 },
        { field: 'city', headerName: 'City', width: 300 },
        { field: 'specificLocation', headerName: 'Specific Location', width: 200 },
    ];

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

            {/* <ExchangeRate /> */}

            <Mega_Menu path="digitalBanking" />

            <div className={styles.agarImage}>
                <img src={About_us} ></img>
            </div>

            <p className={styles.title}>
                <h5>Agent Banking Service</h5>
                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
            </p>
            <div className={styles.description}>
                <p>
                    Aiming to expand reach and pursue financial inclusion, offers network of capable agents to provide banking service on behalf of Wegagen Bank
                </p>
            </div>
            <div className={styles.features}>
                <div className={styles.featuresTitle}>
                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                    <p>FEATURES:</p>
                </div>
                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                    <li>Account opening</li>
                    <li>Cash in/Deposit</li>
                    <li>Cash out/Withdrawal</li>
                    <li>Pay bills  </li>
                    <li>Sell air time </li>
                </ul>
            </div>

            <p className={styles.RequirementTitle}>
                Basic Requirement to get the Product
            </p>
            <div className={styles.moreFeatures}>
                <div className={styles.leftFeatures}>
                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                </div>
                <div className={styles.rightFeatures}>
                    <p>
                        Shall bring a certificate of registration and a valid trade license
                    </p>
                </div>
            </div>
            <div className={styles.moreFeatures}>
                <div className={styles.leftFeatures}>
                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                </div>
                <div className={styles.rightFeatures}>
                    <p>
                        Must have defined physical location to offer agency banking services
                    </p>
                </div>
            </div>
            <div className={styles.moreFeatures}>
                <div className={styles.leftFeatures}>
                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                </div>
                <div className={styles.rightFeatures}>
                    <p>
                        Applicant seeking to provide agency banking service must be reputable, at least within the local society
                    </p>
                </div>
            </div>

            <div className={styles.moreFeatures} >
                <div className={styles.leftFeatures}>
                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                </div>
                <div className={styles.rightFeatures}>
                    <p>
                        Applicant seeking to provide agency banking service must have enough source of funds to render the service
                    </p>
                </div>
            </div>


            <div className={styles.moreFeatures} style={{ marginBottom: '50px' }}>
                <div className={styles.leftFeatures}>
                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                </div>
                <div className={styles.rightFeatures}>
                    <p>
                        Mobile phone, Initial deposit and Renewed ID are required for customers wishing to use agency banking outlets
                    </p>
                </div>

            </div>
            <div>

                <div style={{ height: '100%', width: '90%', margin: 'auto', marginBottom: '100px' }}>
                    <p className={styles.headerTitle}>Agent Network</p>
                    {/* <Paper elevation={2} sx={{ height: '100%', width: '100%', overflow: 'hidden' }}> */}
                    <DataGrid
                        rows={rows}
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
                                    backgroundColor: 'rgba(255, 165, 0, 0.3)', // Light orange on hover for rows
                                },
                            },
                        }}
                    />
                    {/* </Paper> */}
                </div>

            </div>


            <Footer />

        </div>
    )
}

export default AgentBanking