import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import styles from './termsAndTarrifs.module.css'
import Mega_Menu from '../Common/Mega_Menu';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { MdMenuOpen } from "react-icons/md";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import StikyNav from "../Common/StikyNav";
import Footer from "../Common/Footer";
import About_us from "../../../assets/Images/common.jpg";

const IFB_Terms_And_Tariffs = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    const [dispaly, setDisplay] = useState(1);
    const [showMenu, setshowMenu] = useState(false);

    useEffect(() => {
        if (dispaly !== 0) {
            MySwal.close();
        }
    }, [dispaly]);

    const handleClick = (index) => {
        setDisplay(index);
        MySwal.close();
        window.scrollTo(0, 0);
    };

    const MySwal = withReactContent(Swal);

    const menutoggle = () => {
        MySwal.fire({
            html: (
                <div className="leftNavBars" style={{ marginTop: '40px' }} >
                    <div className={`animate__animated animate__fadeInLeft shortInfo`} >
                        {/* <p onClick={() => { handleClick(1, showMenu) }} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Terms & Tariffs – IFB Services  </p>
                        <p onClick={() => { handleClick(2, showMenu) }} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>2. Collateral Estimation</p>
                        <p onClick={() => { handleClick(3, showMenu) }} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>3. Movable collateral Management fee</p>
                        <p onClick={() => { handleClick(4, showMenu) }} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>4. Credit Processing fee</p>
                        <p onClick={() => { handleClick(5, showMenu) }} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>5. Renegotiated loans</p>
                        <p onClick={() => { handleClick(6, showMenu) }} style={dispaly === 6 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>6. Movable collateral Management fee</p>
                        <p onClick={() => { handleClick(7, showMenu) }} style={dispaly === 7 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>7. Other IFB Terms And Tariffs</p> */}
                    </div>
                </div>
            ),
            showConfirmButton: false,
            showCloseButton: true,
            width: "350px",
            denyButtonText: "Close",
            imageClass: "img-responsive",
            imageAlt: "Custom image",
            showClass: {
                popup: "animate__animated animate__jackInTheBox",
            },
            hideClass: {
                popup: "animate__animated animate__zoomOut",
            }
        }).then((result) => {
            if (result.isDenied) {
                // 
            }
        })
    }
    const location = useLocation();

    useEffect(() => {
        // Check if state is passed
        if (location.state && location.state.display) {
            setDisplay(location.state.display);
        }
    }, [location]);

    const handleNavigationClick = (index) => {
        setDisplay(index);
        window.scrollTo(0, 0);
    };


    return (
        <>

            <Mega_Menu />

            <StikyNav />

            <div className={styles.agarImage}>
                <img src={About_us} ></img>
            </div>

            <div className={styles.establishment}>

                <p className={styles.aboutUsMenu} onClick={() => { menutoggle() }} ><MdMenuOpen style={{ fontSize: '30px' }} /></p>

                <div className={styles.leftNavBars}>
                    <div className={`animate__animated animate__fadeInLeft ${styles.shortInfo}`} style={{ height: '400px' }}>
                        <p onClick={() => handleNavigationClick(1)} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> Terms & Tariffs – IFB Services  </p>
                        {/* <p onClick={() => handleNavigationClick(2)} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 2. Collateral Estimation </p>
                        <p onClick={() => handleNavigationClick(3)} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 3. Movable collateral Management fee </p>
                        <p onClick={() => handleNavigationClick(4)} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 4. Credit Processing fee </p>
                        <p onClick={() => handleNavigationClick(5)} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 5. Renegotiated loans </p>
                        <p onClick={() => handleNavigationClick(6)} style={dispaly === 6 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 6. Movable collateral Management fee </p>
                        <p onClick={() => handleNavigationClick(7)} style={dispaly === 7 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 7. Other IFB Terms And Tariffs </p> */}
                    </div>
                </div>


                {dispaly == 1 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>Terms & Tariffs – IFB Services </p>
                        <table className={styles.container}>
                            <thead>
                            <tr className={styles.headerRowss}>
                                    <th width="54">
                                        <p><strong>SN</strong></p>
                                    </th>
                                    <th width="326">
                                        <p><strong>Financing Product/Sector</strong></p>
                                    </th>
                                    <th width="127">
                                        <p><strong>Finance Type &amp; period</strong></p>
                                    </th>
                                    <th width="71">
                                        <p><strong>Monthly</strong></p>
                                    </th>
                                    <th width="77">
                                        <p><strong>Quarterly</strong></p>
                                    </th>
                                    <th width="95">
                                        <p><strong>Semi Annually</strong></p>
                                    </th>
                                    <th width="107">
                                        <p><strong>Annually</strong></p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowspan="11" width="54">
                                        <p><strong>1</strong></p>
                                    </td>
                                    <td width="326">
                                        <p>Murabaha Agriculture</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 1year</p>
                                    </td>
                                    <td width="71">
                                        <p>9.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>10.70%</p>
                                    </td>
                                    <td width="95">
                                        <p>12.70%</p>
                                    </td>
                                    <td width="107">
                                        <p>16.80%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Agriculture</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 2year</p>
                                    </td>
                                    <td width="71">
                                        <p>19.10%</p>
                                    </td>
                                    <td width="77">
                                        <p>20.50%</p>
                                    </td>
                                    <td width="95">
                                        <p>22.60%</p>
                                    </td>
                                    <td width="107">
                                        <p>26.70%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Agriculture</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 3year</p>
                                    </td>
                                    <td width="71">
                                        <p>29.80%</p>
                                    </td>
                                    <td width="77">
                                        <p>31.20%</p>
                                    </td>
                                    <td width="95">
                                        <p>33.40%</p>
                                    </td>
                                    <td width="107">
                                        <p>37.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Agriculture</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 4year</p>
                                    </td>
                                    <td width="71">
                                        <p>41.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>42.70%</p>
                                    </td>
                                    <td width="95">
                                        <p>44.80%</p>
                                    </td>
                                    <td width="107">
                                        <p>49.00%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Agriculture</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 5year</p>
                                    </td>
                                    <td width="71">
                                        <p>53.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>54.40%</p>
                                    </td>
                                    <td width="95">
                                        <p>56.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>60.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Agriculture</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 6 year</p>
                                    </td>
                                    <td width="71">
                                        <p>66.10%</p>
                                    </td>
                                    <td width="77">
                                        <p>67.40%</p>
                                    </td>
                                    <td width="95">
                                        <p>69.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>73.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Agriculture</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 7 year</p>
                                    </td>
                                    <td width="71">
                                        <p>78.80%</p>
                                    </td>
                                    <td width="77">
                                        <p>80.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>82.10%</p>
                                    </td>
                                    <td width="107">
                                        <p>86.00%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Agriculture</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 8 year</p>
                                    </td>
                                    <td width="71">
                                        <p>93.40%</p>
                                    </td>
                                    <td width="77">
                                        <p>94.70%</p>
                                    </td>
                                    <td width="95">
                                        <p>96.70%</p>
                                    </td>
                                    <td width="107">
                                        <p>100.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Agriculture</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 9 year</p>
                                    </td>
                                    <td width="71">
                                        <p>107.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>108.60%</p>
                                    </td>
                                    <td width="95">
                                        <p>110.40%</p>
                                    </td>
                                    <td width="107">
                                        <p>114.10%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Agriculture</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 10 year</p>
                                    </td>
                                    <td width="71">
                                        <p>121.70%</p>
                                    </td>
                                    <td width="77">
                                        <p>122.80%</p>
                                    </td>
                                    <td width="95">
                                        <p>124.60%</p>
                                    </td>
                                    <td width="107">
                                        <p>128.10%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Agriculture</p>
                                    </td>
                                    <td width="127">
                                        <p>Above 10 Years</p>
                                    </td>
                                    <td width="71">
                                        <p>136.40%</p>
                                    </td>
                                    <td width="77">
                                        <p>137.50%</p>
                                    </td>
                                    <td width="95">
                                        <p>139.20%</p>
                                    </td>
                                    <td width="107">
                                        <p>142.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="11" width="54">
                                        <p><strong>2</strong></p>
                                    </td>
                                    <td width="326">
                                        <p>Murabaha Manufacturing</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 1year</p>
                                    </td>
                                    <td width="71">
                                        <p>9.80%</p>
                                    </td>
                                    <td width="77">
                                        <p>11.20%</p>
                                    </td>
                                    <td width="95">
                                        <p>13.30%</p>
                                    </td>
                                    <td width="107">
                                        <p>17.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Manufacturing</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 2year</p>
                                    </td>
                                    <td width="71">
                                        <p>19.90%</p>
                                    </td>
                                    <td width="77">
                                        <p>21.40%</p>
                                    </td>
                                    <td width="95">
                                        <p>23.60%</p>
                                    </td>
                                    <td width="107">
                                        <p>27.90%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Manufacturing</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 3year</p>
                                    </td>
                                    <td width="71">
                                        <p>31.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>32.80%</p>
                                    </td>
                                    <td width="95">
                                        <p>35.10%</p>
                                    </td>
                                    <td width="107">
                                        <p>39.40%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Manufacturing</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 4year</p>
                                    </td>
                                    <td width="71">
                                        <p>43.50%</p>
                                    </td>
                                    <td width="77">
                                        <p>45.00%</p>
                                    </td>
                                    <td width="95">
                                        <p>47.20%</p>
                                    </td>
                                    <td width="107">
                                        <p>51.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Manufacturing</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 5year</p>
                                    </td>
                                    <td width="71">
                                        <p>55.80%</p>
                                    </td>
                                    <td width="77">
                                        <p>57.30%</p>
                                    </td>
                                    <td width="95">
                                        <p>59.40%</p>
                                    </td>
                                    <td width="107">
                                        <p>63.70%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Manufacturing</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 6 year</p>
                                    </td>
                                    <td width="71">
                                        <p>70.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>71.40%</p>
                                    </td>
                                    <td width="95">
                                        <p>73.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>77.70%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Manufacturing</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 7 year</p>
                                    </td>
                                    <td width="71">
                                        <p>83.50%</p>
                                    </td>
                                    <td width="77">
                                        <p>84.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>86.90%</p>
                                    </td>
                                    <td width="107">
                                        <p>91.00%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Manufacturing</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 8 year</p>
                                    </td>
                                    <td width="71">
                                        <p>97.60%</p>
                                    </td>
                                    <td width="77">
                                        <p>98.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>100.90%</p>
                                    </td>
                                    <td width="107">
                                        <p>104.80%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Manufacturing</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 9 year</p>
                                    </td>
                                    <td width="71">
                                        <p>112.10%</p>
                                    </td>
                                    <td width="77">
                                        <p>113.40%</p>
                                    </td>
                                    <td width="95">
                                        <p>115.30%</p>
                                    </td>
                                    <td width="107">
                                        <p>119.00%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Manufacturing</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 10 year</p>
                                    </td>
                                    <td width="71">
                                        <p>127.20%</p>
                                    </td>
                                    <td width="77">
                                        <p>128.30%</p>
                                    </td>
                                    <td width="95">
                                        <p>130.10%</p>
                                    </td>
                                    <td width="107">
                                        <p>133.70%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Manufacturing</p>
                                    </td>
                                    <td width="127">
                                        <p>Above 10 Years</p>
                                    </td>
                                    <td width="71">
                                        <p>142.60%</p>
                                    </td>
                                    <td width="77">
                                        <p>143.70%</p>
                                    </td>
                                    <td width="95">
                                        <p>145.40%</p>
                                    </td>
                                    <td width="107">
                                        <p>148.80%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="11" width="54">
                                        <p><strong>3</strong></p>
                                    </td>
                                    <td width="326">
                                        <p>Murabaha Construction Bridge</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 1year</p>
                                    </td>
                                    <td width="71">
                                        <p>10.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>11.50%</p>
                                    </td>
                                    <td width="95">
                                        <p>13.70%</p>
                                    </td>
                                    <td width="107">
                                        <p>18.10%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Construction Bridge</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 2year</p>
                                    </td>
                                    <td width="71">
                                        <p>20.60%</p>
                                    </td>
                                    <td width="77">
                                        <p>22.20%</p>
                                    </td>
                                    <td width="95">
                                        <p>24.40%</p>
                                    </td>
                                    <td width="107">
                                        <p>28.80%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Construction Bridge</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 3year</p>
                                    </td>
                                    <td width="71">
                                        <p>32.40%</p>
                                    </td>
                                    <td width="77">
                                        <p>34.00%</p>
                                    </td>
                                    <td width="95">
                                        <p>36.30%</p>
                                    </td>
                                    <td width="107">
                                        <p>40.70%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Construction Bridge</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 4year</p>
                                    </td>
                                    <td width="71">
                                        <p>44.70%</p>
                                    </td>
                                    <td width="77">
                                        <p>46.20%</p>
                                    </td>
                                    <td width="95">
                                        <p>48.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>52.90%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Construction Bridge</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 5year</p>
                                    </td>
                                    <td width="71">
                                        <p>57.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>58.80%</p>
                                    </td>
                                    <td width="95">
                                        <p>61.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>65.40%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Construction Bridge</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 6 year</p>
                                    </td>
                                    <td width="71">
                                        <p>71.60%</p>
                                    </td>
                                    <td width="77">
                                        <p>73.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>75.30%</p>
                                    </td>
                                    <td width="107">
                                        <p>79.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Construction Bridge</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 7 year</p>
                                    </td>
                                    <td width="71">
                                        <p>85.50%</p>
                                    </td>
                                    <td width="77">
                                        <p>86.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>89.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>93.10%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Construction Bridge</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 8 year</p>
                                    </td>
                                    <td width="71">
                                        <p>101.20%</p>
                                    </td>
                                    <td width="77">
                                        <p>102.50%</p>
                                    </td>
                                    <td width="95">
                                        <p>104.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>108.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Construction Bridge</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 9 year</p>
                                    </td>
                                    <td width="71">
                                        <p>116.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>117.60%</p>
                                    </td>
                                    <td width="95">
                                        <p>119.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>123.30%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Construction Bridge</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 10 year</p>
                                    </td>
                                    <td width="71">
                                        <p>131.90%</p>
                                    </td>
                                    <td width="77">
                                        <p>133.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>134.90%</p>
                                    </td>
                                    <td width="107">
                                        <p>138.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Construction Bridge</p>
                                    </td>
                                    <td width="127">
                                        <p>Above 10 Years</p>
                                    </td>
                                    <td width="71">
                                        <p>148.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>149.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>150.80%</p>
                                    </td>
                                    <td width="107">
                                        <p>154.20%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="11" width="54">
                                        <p><strong>4</strong></p>
                                    </td>
                                    <td width="326">
                                        <p>Murabaha Building Construction</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 1year</p>
                                    </td>
                                    <td width="71">
                                        <p>10.20%</p>
                                    </td>
                                    <td width="77">
                                        <p>11.80%</p>
                                    </td>
                                    <td width="95">
                                        <p>14.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>18.40%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Building Construction</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 2year</p>
                                    </td>
                                    <td width="71">
                                        <p>20.90%</p>
                                    </td>
                                    <td width="77">
                                        <p>22.40%</p>
                                    </td>
                                    <td width="95">
                                        <p>24.70%</p>
                                    </td>
                                    <td width="107">
                                        <p>29.20%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Building Construction</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 3year</p>
                                    </td>
                                    <td width="71">
                                        <p>32.60%</p>
                                    </td>
                                    <td width="77">
                                        <p>34.20%</p>
                                    </td>
                                    <td width="95">
                                        <p>36.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>41.00%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Building Construction</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 4year</p>
                                    </td>
                                    <td width="71">
                                        <p>44.90%</p>
                                    </td>
                                    <td width="77">
                                        <p>46.50%</p>
                                    </td>
                                    <td width="95">
                                        <p>48.70%</p>
                                    </td>
                                    <td width="107">
                                        <p>53.20%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Building Construction</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 5year</p>
                                    </td>
                                    <td width="71">
                                        <p>57.80%</p>
                                    </td>
                                    <td width="77">
                                        <p>59.30%</p>
                                    </td>
                                    <td width="95">
                                        <p>61.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>65.90%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Building Construction</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 6 year</p>
                                    </td>
                                    <td width="71">
                                        <p>72.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>73.70%</p>
                                    </td>
                                    <td width="95">
                                        <p>75.90%</p>
                                    </td>
                                    <td width="107">
                                        <p>80.20%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Building Construction</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 7 year</p>
                                    </td>
                                    <td width="71">
                                        <p>86.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>87.70%</p>
                                    </td>
                                    <td width="95">
                                        <p>89.80%</p>
                                    </td>
                                    <td width="107">
                                        <p>93.90%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Building Construction</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 8 year</p>
                                    </td>
                                    <td width="71">
                                        <p>101.20%</p>
                                    </td>
                                    <td width="77">
                                        <p>102.50%</p>
                                    </td>
                                    <td width="95">
                                        <p>104.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>108.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Building Construction</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 9 year</p>
                                    </td>
                                    <td width="71">
                                        <p>116.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>117.60%</p>
                                    </td>
                                    <td width="95">
                                        <p>119.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>123.30%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Building Construction</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 10 year</p>
                                    </td>
                                    <td width="71">
                                        <p>131.90%</p>
                                    </td>
                                    <td width="77">
                                        <p>133.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>134.90%</p>
                                    </td>
                                    <td width="107">
                                        <p>138.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Building Construction</p>
                                    </td>
                                    <td width="127">
                                        <p>Above 10 Years</p>
                                    </td>
                                    <td width="71">
                                        <p>148.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>149.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>150.80%</p>
                                    </td>
                                    <td width="107">
                                        <p>154.20%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="11" width="54">
                                        <p><strong>5</strong></p>
                                    </td>
                                    <td width="326">
                                        <p>Murabaha Miscellaneous Domestic Trade and Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 1year</p>
                                    </td>
                                    <td width="71">
                                        <p>10.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>11.50%</p>
                                    </td>
                                    <td width="95">
                                        <p>13.70%</p>
                                    </td>
                                    <td width="107">
                                        <p>18.00%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Miscellaneous Domestic Trade and Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 2year</p>
                                    </td>
                                    <td width="71">
                                        <p>20.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>21.80%</p>
                                    </td>
                                    <td width="95">
                                        <p>24.10%</p>
                                    </td>
                                    <td width="107">
                                        <p>28.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Miscellaneous Domestic Trade and Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 3year</p>
                                    </td>
                                    <td width="71">
                                        <p>32.10%</p>
                                    </td>
                                    <td width="77">
                                        <p>33.60%</p>
                                    </td>
                                    <td width="95">
                                        <p>35.90%</p>
                                    </td>
                                    <td width="107">
                                        <p>40.30%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Miscellaneous Domestic Trade and Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 4year</p>
                                    </td>
                                    <td width="71">
                                        <p>44.40%</p>
                                    </td>
                                    <td width="77">
                                        <p>45.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>48.20%</p>
                                    </td>
                                    <td width="107">
                                        <p>52.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Miscellaneous Domestic Trade and Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 5year</p>
                                    </td>
                                    <td width="71">
                                        <p>57.10%</p>
                                    </td>
                                    <td width="77">
                                        <p>58.60%</p>
                                    </td>
                                    <td width="95">
                                        <p>60.80%</p>
                                    </td>
                                    <td width="107">
                                        <p>65.20%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Miscellaneous Domestic Trade and Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 6 year</p>
                                    </td>
                                    <td width="71">
                                        <p>71.40%</p>
                                    </td>
                                    <td width="77">
                                        <p>72.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>75.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>79.30%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Miscellaneous Domestic Trade and Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 7 year</p>
                                    </td>
                                    <td width="71">
                                        <p>85.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>86.70%</p>
                                    </td>
                                    <td width="95">
                                        <p>88.80%</p>
                                    </td>
                                    <td width="107">
                                        <p>92.90%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Miscellaneous Domestic Trade and Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 8 year</p>
                                    </td>
                                    <td width="71">
                                        <p>101.20%</p>
                                    </td>
                                    <td width="77">
                                        <p>102.50%</p>
                                    </td>
                                    <td width="95">
                                        <p>104.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>108.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Miscellaneous Domestic Trade and Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 9 year</p>
                                    </td>
                                    <td width="71">
                                        <p>116.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>117.60%</p>
                                    </td>
                                    <td width="95">
                                        <p>119.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>123.30%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Miscellaneous Domestic Trade and Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 10 year</p>
                                    </td>
                                    <td width="71">
                                        <p>131.90%</p>
                                    </td>
                                    <td width="77">
                                        <p>133.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>134.90%</p>
                                    </td>
                                    <td width="107">
                                        <p>138.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Miscellaneous Domestic Trade and Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Above 10 Years</p>
                                    </td>
                                    <td width="71">
                                        <p>148.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>149.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>150.80%</p>
                                    </td>
                                    <td width="107">
                                        <p>154.20%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="11" width="54">
                                        <p><strong>6</strong></p>
                                    </td>
                                    <td width="326">
                                        <p>Murabaha Hotel &amp; Tourism</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 1year</p>
                                    </td>
                                    <td width="71">
                                        <p>9.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>10.70%</p>
                                    </td>
                                    <td width="95">
                                        <p>12.80%</p>
                                    </td>
                                    <td width="107">
                                        <p>16.80%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Hotel &amp; Tourism</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 2year</p>
                                    </td>
                                    <td width="71">
                                        <p>19.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>20.40%</p>
                                    </td>
                                    <td width="95">
                                        <p>22.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>26.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Hotel &amp; Tourism</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 3year</p>
                                    </td>
                                    <td width="71">
                                        <p>30.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>31.80%</p>
                                    </td>
                                    <td width="95">
                                        <p>34.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>38.20%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Hotel &amp; Tourism</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 4year</p>
                                    </td>
                                    <td width="71">
                                        <p>41.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>42.70%</p>
                                    </td>
                                    <td width="95">
                                        <p>44.80%</p>
                                    </td>
                                    <td width="107">
                                        <p>49.00%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Hotel &amp; Tourism</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 5year</p>
                                    </td>
                                    <td width="71">
                                        <p>52.70%</p>
                                    </td>
                                    <td width="77">
                                        <p>54.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>56.20%</p>
                                    </td>
                                    <td width="107">
                                        <p>60.30%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Hotel &amp; Tourism</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 6 year</p>
                                    </td>
                                    <td width="71">
                                        <p>65.60%</p>
                                    </td>
                                    <td width="77">
                                        <p>67.00%</p>
                                    </td>
                                    <td width="95">
                                        <p>69.10%</p>
                                    </td>
                                    <td width="107">
                                        <p>73.10%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Hotel &amp; Tourism</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 7 year</p>
                                    </td>
                                    <td width="71">
                                        <p>78.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>79.60%</p>
                                    </td>
                                    <td width="95">
                                        <p>81.60%</p>
                                    </td>
                                    <td width="107">
                                        <p>85.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Hotel &amp; Tourism</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 8 year</p>
                                    </td>
                                    <td width="71">
                                        <p>91.40%</p>
                                    </td>
                                    <td width="77">
                                        <p>92.70%</p>
                                    </td>
                                    <td width="95">
                                        <p>94.60%</p>
                                    </td>
                                    <td width="107">
                                        <p>98.30%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Hotel &amp; Tourism</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 9 year</p>
                                    </td>
                                    <td width="71">
                                        <p>104.90%</p>
                                    </td>
                                    <td width="77">
                                        <p>106.20%</p>
                                    </td>
                                    <td width="95">
                                        <p>108.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>111.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Hotel &amp; Tourism</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 10 year</p>
                                    </td>
                                    <td width="71">
                                        <p>118.90%</p>
                                    </td>
                                    <td width="77">
                                        <p>120.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>121.80%</p>
                                    </td>
                                    <td width="107">
                                        <p>125.30%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Hotel &amp; Tourism</p>
                                    </td>
                                    <td width="127">
                                        <p>Above 10 Years</p>
                                    </td>
                                    <td width="71">
                                        <p>133.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>134.40%</p>
                                    </td>
                                    <td width="95">
                                        <p>136.10%</p>
                                    </td>
                                    <td width="107">
                                        <p>139.40%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="11" width="54">
                                        <p><strong>7</strong></p>
                                    </td>
                                    <td width="326">
                                        <p>Murabaha Wholesale &amp; Retail Trade</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 1year</p>
                                    </td>
                                    <td width="71">
                                        <p>9.80%</p>
                                    </td>
                                    <td width="77">
                                        <p>11.20%</p>
                                    </td>
                                    <td width="95">
                                        <p>13.30%</p>
                                    </td>
                                    <td width="107">
                                        <p>17.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Wholesale &amp; Retail Trade</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 2year</p>
                                    </td>
                                    <td width="71">
                                        <p>19.90%</p>
                                    </td>
                                    <td width="77">
                                        <p>21.30%</p>
                                    </td>
                                    <td width="95">
                                        <p>23.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>27.80%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Wholesale &amp; Retail Trade</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 3year</p>
                                    </td>
                                    <td width="71">
                                        <p>31.80%</p>
                                    </td>
                                    <td width="77">
                                        <p>33.30%</p>
                                    </td>
                                    <td width="95">
                                        <p>35.60%</p>
                                    </td>
                                    <td width="107">
                                        <p>40.00%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Wholesale &amp; Retail Trade</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 4year</p>
                                    </td>
                                    <td width="71">
                                        <p>43.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>44.80%</p>
                                    </td>
                                    <td width="95">
                                        <p>47.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>51.30%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Wholesale &amp; Retail Trade</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 5year</p>
                                    </td>
                                    <td width="71">
                                        <p>56.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>57.40%</p>
                                    </td>
                                    <td width="95">
                                        <p>59.60%</p>
                                    </td>
                                    <td width="107">
                                        <p>63.90%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Wholesale &amp; Retail Trade</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 6 year</p>
                                    </td>
                                    <td width="71">
                                        <p>70.40%</p>
                                    </td>
                                    <td width="77">
                                        <p>71.80%</p>
                                    </td>
                                    <td width="95">
                                        <p>74.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>78.20%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Wholesale &amp; Retail Trade</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 7 year</p>
                                    </td>
                                    <td width="71">
                                        <p>84.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>85.40%</p>
                                    </td>
                                    <td width="95">
                                        <p>87.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>91.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Wholesale &amp; Retail Trade</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 8 year</p>
                                    </td>
                                    <td width="71">
                                        <p>98.50%</p>
                                    </td>
                                    <td width="77">
                                        <p>99.80%</p>
                                    </td>
                                    <td width="95">
                                        <p>101.80%</p>
                                    </td>
                                    <td width="107">
                                        <p>105.70%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Wholesale &amp; Retail Trade</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 9 year</p>
                                    </td>
                                    <td width="71">
                                        <p>113.20%</p>
                                    </td>
                                    <td width="77">
                                        <p>114.40%</p>
                                    </td>
                                    <td width="95">
                                        <p>116.30%</p>
                                    </td>
                                    <td width="107">
                                        <p>120.10%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Wholesale &amp; Retail Trade</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 10 year</p>
                                    </td>
                                    <td width="71">
                                        <p>128.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>129.50%</p>
                                    </td>
                                    <td width="95">
                                        <p>131.30%</p>
                                    </td>
                                    <td width="107">
                                        <p>134.90%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Wholesale &amp; Retail Trade</p>
                                    </td>
                                    <td width="127">
                                        <p>Above 10 Years</p>
                                    </td>
                                    <td width="71">
                                        <p>143.90%</p>
                                    </td>
                                    <td width="77">
                                        <p>145.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>146.80%</p>
                                    </td>
                                    <td width="107">
                                        <p>150.10%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="11" width="54">
                                        <p><strong>8</strong></p>
                                    </td>
                                    <td width="326">
                                        <p>Murabaha Health Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 1year</p>
                                    </td>
                                    <td width="71">
                                        <p>9.50%</p>
                                    </td>
                                    <td width="77">
                                        <p>10.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>13.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>17.10%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Health Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 2year</p>
                                    </td>
                                    <td width="71">
                                        <p>19.40%</p>
                                    </td>
                                    <td width="77">
                                        <p>20.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>23.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>27.20%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Health Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 3year</p>
                                    </td>
                                    <td width="71">
                                        <p>30.20%</p>
                                    </td>
                                    <td width="77">
                                        <p>31.70%</p>
                                    </td>
                                    <td width="95">
                                        <p>33.90%</p>
                                    </td>
                                    <td width="107">
                                        <p>38.10%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Health Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 4year</p>
                                    </td>
                                    <td width="71">
                                        <p>41.80%</p>
                                    </td>
                                    <td width="77">
                                        <p>43.20%</p>
                                    </td>
                                    <td width="95">
                                        <p>45.30%</p>
                                    </td>
                                    <td width="107">
                                        <p>49.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Health Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 5year</p>
                                    </td>
                                    <td width="71">
                                        <p>53.80%</p>
                                    </td>
                                    <td width="77">
                                        <p>55.30%</p>
                                    </td>
                                    <td width="95">
                                        <p>57.40%</p>
                                    </td>
                                    <td width="107">
                                        <p>61.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Health Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 6 year</p>
                                    </td>
                                    <td width="71">
                                        <p>67.50%</p>
                                    </td>
                                    <td width="77">
                                        <p>68.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>71.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>75.10%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Health Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 7 year</p>
                                    </td>
                                    <td width="71">
                                        <p>80.50%</p>
                                    </td>
                                    <td width="77">
                                        <p>81.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>83.90%</p>
                                    </td>
                                    <td width="107">
                                        <p>87.80%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Health Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 8 year</p>
                                    </td>
                                    <td width="71">
                                        <p>94.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>95.30%</p>
                                    </td>
                                    <td width="95">
                                        <p>97.30%</p>
                                    </td>
                                    <td width="107">
                                        <p>101.10%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Health Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 9 year</p>
                                    </td>
                                    <td width="71">
                                        <p>108.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>109.20%</p>
                                    </td>
                                    <td width="95">
                                        <p>111.10%</p>
                                    </td>
                                    <td width="107">
                                        <p>114.80%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Health Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 10 year</p>
                                    </td>
                                    <td width="71">
                                        <p>122.40%</p>
                                    </td>
                                    <td width="77">
                                        <p>123.60%</p>
                                    </td>
                                    <td width="95">
                                        <p>125.40%</p>
                                    </td>
                                    <td width="107">
                                        <p>128.90%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Health Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Above 10 Years</p>
                                    </td>
                                    <td width="71">
                                        <p>137.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>138.40%</p>
                                    </td>
                                    <td width="95">
                                        <p>140.10%</p>
                                    </td>
                                    <td width="107">
                                        <p>143.40%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="11" width="54">
                                        <p><strong>9</strong></p>
                                    </td>
                                    <td width="326">
                                        <p>Murabaha Transport Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 1year</p>
                                    </td>
                                    <td width="71">
                                        <p>10.10%</p>
                                    </td>
                                    <td width="77">
                                        <p>11.60%</p>
                                    </td>
                                    <td width="95">
                                        <p>13.80%</p>
                                    </td>
                                    <td width="107">
                                        <p>18.20%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Transport Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 2year</p>
                                    </td>
                                    <td width="71">
                                        <p>20.60%</p>
                                    </td>
                                    <td width="77">
                                        <p>22.20%</p>
                                    </td>
                                    <td width="95">
                                        <p>24.40%</p>
                                    </td>
                                    <td width="107">
                                        <p>28.80%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Transport Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 3year</p>
                                    </td>
                                    <td width="71">
                                        <p>32.20%</p>
                                    </td>
                                    <td width="77">
                                        <p>33.80%</p>
                                    </td>
                                    <td width="95">
                                        <p>36.10%</p>
                                    </td>
                                    <td width="107">
                                        <p>40.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Transport Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 4year</p>
                                    </td>
                                    <td width="71">
                                        <p>44.80%</p>
                                    </td>
                                    <td width="77">
                                        <p>46.30%</p>
                                    </td>
                                    <td width="95">
                                        <p>48.60%</p>
                                    </td>
                                    <td width="107">
                                        <p>53.10%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Transport Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 5year</p>
                                    </td>
                                    <td width="71">
                                        <p>57.60%</p>
                                    </td>
                                    <td width="77">
                                        <p>59.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>61.30%</p>
                                    </td>
                                    <td width="107">
                                        <p>65.70%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Transport Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 6 year</p>
                                    </td>
                                    <td width="71">
                                        <p>72.50%</p>
                                    </td>
                                    <td width="77">
                                        <p>73.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>76.10%</p>
                                    </td>
                                    <td width="107">
                                        <p>80.40%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Transport Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 7 year</p>
                                    </td>
                                    <td width="71">
                                        <p>86.50%</p>
                                    </td>
                                    <td width="77">
                                        <p>87.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>90.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>94.20%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Transport Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 8 year</p>
                                    </td>
                                    <td width="71">
                                        <p>101.20%</p>
                                    </td>
                                    <td width="77">
                                        <p>102.50%</p>
                                    </td>
                                    <td width="95">
                                        <p>104.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>108.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Transport Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 9 year</p>
                                    </td>
                                    <td width="71">
                                        <p>116.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>117.60%</p>
                                    </td>
                                    <td width="95">
                                        <p>119.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>123.30%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Transport Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 10 year</p>
                                    </td>
                                    <td width="71">
                                        <p>131.90%</p>
                                    </td>
                                    <td width="77">
                                        <p>133.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>134.90%</p>
                                    </td>
                                    <td width="107">
                                        <p>138.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Transport Service</p>
                                    </td>
                                    <td width="127">
                                        <p>Above 10 Years</p>
                                    </td>
                                    <td width="71">
                                        <p>148.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>149.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>150.80%</p>
                                    </td>
                                    <td width="107">
                                        <p>154.20%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="11" width="54">
                                        <p><strong>10</strong></p>
                                    </td>
                                    <td width="326">
                                        <p>Murabaha Transport Vehicle</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 1year</p>
                                    </td>
                                    <td width="71">
                                        <p>10.40%</p>
                                    </td>
                                    <td width="77">
                                        <p>12.00%</p>
                                    </td>
                                    <td width="95">
                                        <p>14.20%</p>
                                    </td>
                                    <td width="107">
                                        <p>18.70%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Transport Vehicle</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 2year</p>
                                    </td>
                                    <td width="71">
                                        <p>20.90%</p>
                                    </td>
                                    <td width="77">
                                        <p>22.50%</p>
                                    </td>
                                    <td width="95">
                                        <p>24.80%</p>
                                    </td>
                                    <td width="107">
                                        <p>29.20%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Transport Vehicle</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 3year</p>
                                    </td>
                                    <td width="71">
                                        <p>32.80%</p>
                                    </td>
                                    <td width="77">
                                        <p>34.30%</p>
                                    </td>
                                    <td width="95">
                                        <p>36.70%</p>
                                    </td>
                                    <td width="107">
                                        <p>41.20%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Transport Vehicle</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 4year</p>
                                    </td>
                                    <td width="71">
                                        <p>45.20%</p>
                                    </td>
                                    <td width="77">
                                        <p>46.70%</p>
                                    </td>
                                    <td width="95">
                                        <p>49.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>53.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Transport Vehicle</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 5year</p>
                                    </td>
                                    <td width="71">
                                        <p>58.10%</p>
                                    </td>
                                    <td width="77">
                                        <p>59.60%</p>
                                    </td>
                                    <td width="95">
                                        <p>61.90%</p>
                                    </td>
                                    <td width="107">
                                        <p>66.30%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Transport Vehicle</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 6 year</p>
                                    </td>
                                    <td width="71">
                                        <p>72.50%</p>
                                    </td>
                                    <td width="77">
                                        <p>73.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>76.10%</p>
                                    </td>
                                    <td width="107">
                                        <p>80.40%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Transport Vehicle</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 7 year</p>
                                    </td>
                                    <td width="71">
                                        <p>86.50%</p>
                                    </td>
                                    <td width="77">
                                        <p>87.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>90.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>94.20%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Transport Vehicle</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 8 year</p>
                                    </td>
                                    <td width="71">
                                        <p>101.70%</p>
                                    </td>
                                    <td width="77">
                                        <p>103.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>105.10%</p>
                                    </td>
                                    <td width="107">
                                        <p>109.10%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Transport Vehicle</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 9 year</p>
                                    </td>
                                    <td width="71">
                                        <p>117.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>118.30%</p>
                                    </td>
                                    <td width="95">
                                        <p>120.20%</p>
                                    </td>
                                    <td width="107">
                                        <p>124.00%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Transport Vehicle</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 10 year</p>
                                    </td>
                                    <td width="71">
                                        <p>132.70%</p>
                                    </td>
                                    <td width="77">
                                        <p>133.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>135.70%</p>
                                    </td>
                                    <td width="107">
                                        <p>139.30%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Transport Vehicle</p>
                                    </td>
                                    <td width="127">
                                        <p>Above 10 Years</p>
                                    </td>
                                    <td width="71">
                                        <p>148.90%</p>
                                    </td>
                                    <td width="77">
                                        <p>150.00%</p>
                                    </td>
                                    <td width="95">
                                        <p>151.70%</p>
                                    </td>
                                    <td width="107">
                                        <p>155.10%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="11" width="54">
                                        <p><strong>11</strong></p>
                                    </td>
                                    <td width="326">
                                        <p>Murabaha Construction Machinery</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 1year</p>
                                    </td>
                                    <td width="71">
                                        <p>10.60%</p>
                                    </td>
                                    <td width="77">
                                        <p>12.20%</p>
                                    </td>
                                    <td width="95">
                                        <p>14.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>19.00%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Construction Machinery</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 2year</p>
                                    </td>
                                    <td width="71">
                                        <p>21.20%</p>
                                    </td>
                                    <td width="77">
                                        <p>22.80%</p>
                                    </td>
                                    <td width="95">
                                        <p>25.10%</p>
                                    </td>
                                    <td width="107">
                                        <p>29.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Construction Machinery</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 3year</p>
                                    </td>
                                    <td width="71">
                                        <p>33.10%</p>
                                    </td>
                                    <td width="77">
                                        <p>34.70%</p>
                                    </td>
                                    <td width="95">
                                        <p>37.10%</p>
                                    </td>
                                    <td width="107">
                                        <p>41.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Construction Machinery</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 4year</p>
                                    </td>
                                    <td width="71">
                                        <p>45.40%</p>
                                    </td>
                                    <td width="77">
                                        <p>47.00%</p>
                                    </td>
                                    <td width="95">
                                        <p>49.30%</p>
                                    </td>
                                    <td width="107">
                                        <p>53.80%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Construction Machinery</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 5year</p>
                                    </td>
                                    <td width="71">
                                        <p>58.50%</p>
                                    </td>
                                    <td width="77">
                                        <p>60.00%</p>
                                    </td>
                                    <td width="95">
                                        <p>62.20%</p>
                                    </td>
                                    <td width="107">
                                        <p>66.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Construction Machinery</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 6 year</p>
                                    </td>
                                    <td width="71">
                                        <p>72.70%</p>
                                    </td>
                                    <td width="77">
                                        <p>74.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>76.30%</p>
                                    </td>
                                    <td width="107">
                                        <p>80.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Construction Machinery</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 7 year</p>
                                    </td>
                                    <td width="71">
                                        <p>86.80%</p>
                                    </td>
                                    <td width="77">
                                        <p>88.20%</p>
                                    </td>
                                    <td width="95">
                                        <p>90.30%</p>
                                    </td>
                                    <td width="107">
                                        <p>94.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Construction Machinery</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 8 year</p>
                                    </td>
                                    <td width="71">
                                        <p>104.20%</p>
                                    </td>
                                    <td width="77">
                                        <p>105.50%</p>
                                    </td>
                                    <td width="95">
                                        <p>107.60%</p>
                                    </td>
                                    <td width="107">
                                        <p>111.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Construction Machinery</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 9 year</p>
                                    </td>
                                    <td width="71">
                                        <p>119.80%</p>
                                    </td>
                                    <td width="77">
                                        <p>121.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>123.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>126.90%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Construction Machinery</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 10 year</p>
                                    </td>
                                    <td width="71">
                                        <p>135.90%</p>
                                    </td>
                                    <td width="77">
                                        <p>137.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>138.90%</p>
                                    </td>
                                    <td width="107">
                                        <p>142.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Construction Machinery</p>
                                    </td>
                                    <td width="127">
                                        <p>Above 10 Years</p>
                                    </td>
                                    <td width="71">
                                        <p>152.50%</p>
                                    </td>
                                    <td width="77">
                                        <p>153.60%</p>
                                    </td>
                                    <td width="95">
                                        <p>155.30%</p>
                                    </td>
                                    <td width="107">
                                        <p>158.80%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="11" width="54">
                                        <p><strong>12</strong></p>
                                    </td>
                                    <td width="326">
                                        <p>Murabaha Automobile</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 1year</p>
                                    </td>
                                    <td width="71">
                                        <p>9.70%</p>
                                    </td>
                                    <td width="77">
                                        <p>11.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>13.30%</p>
                                    </td>
                                    <td width="107">
                                        <p>17.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Automobile</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 2year</p>
                                    </td>
                                    <td width="71">
                                        <p>19.50%</p>
                                    </td>
                                    <td width="77">
                                        <p>20.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>23.10%</p>
                                    </td>
                                    <td width="107">
                                        <p>27.30%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Automobile</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 3year</p>
                                    </td>
                                    <td width="71">
                                        <p>30.20%</p>
                                    </td>
                                    <td width="77">
                                        <p>31.70%</p>
                                    </td>
                                    <td width="95">
                                        <p>33.90%</p>
                                    </td>
                                    <td width="107">
                                        <p>38.10%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Automobile</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 4year</p>
                                    </td>
                                    <td width="71">
                                        <p>41.40%</p>
                                    </td>
                                    <td width="77">
                                        <p>42.80%</p>
                                    </td>
                                    <td width="95">
                                        <p>44.90%</p>
                                    </td>
                                    <td width="107">
                                        <p>49.10%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Automobile</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 5year</p>
                                    </td>
                                    <td width="71">
                                        <p>53.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>54.40%</p>
                                    </td>
                                    <td width="95">
                                        <p>56.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>60.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Automobile</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 6 year</p>
                                    </td>
                                    <td width="71">
                                        <p>65.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>66.40%</p>
                                    </td>
                                    <td width="95">
                                        <p>68.40%</p>
                                    </td>
                                    <td width="107">
                                        <p>72.40%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Automobile</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 7 year</p>
                                    </td>
                                    <td width="71">
                                        <p>77.50%</p>
                                    </td>
                                    <td width="77">
                                        <p>78.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>80.80%</p>
                                    </td>
                                    <td width="107">
                                        <p>84.70%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Automobile</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 8 year</p>
                                    </td>
                                    <td width="71">
                                        <p>90.50%</p>
                                    </td>
                                    <td width="77">
                                        <p>91.80%</p>
                                    </td>
                                    <td width="95">
                                        <p>93.70%</p>
                                    </td>
                                    <td width="107">
                                        <p>97.40%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Automobile</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 9 year</p>
                                    </td>
                                    <td width="71">
                                        <p>103.90%</p>
                                    </td>
                                    <td width="77">
                                        <p>105.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>107.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>110.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Automobile</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 10 year</p>
                                    </td>
                                    <td width="71">
                                        <p>117.80%</p>
                                    </td>
                                    <td width="77">
                                        <p>118.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>120.70%</p>
                                    </td>
                                    <td width="107">
                                        <p>124.10%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Automobile</p>
                                    </td>
                                    <td width="127">
                                        <p>Above 10 Years</p>
                                    </td>
                                    <td width="71">
                                        <p>132.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>133.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>134.80%</p>
                                    </td>
                                    <td width="107">
                                        <p>138.00%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="11" width="54">
                                        <p><strong>13</strong></p>
                                    </td>
                                    <td width="326">
                                        <p>Murabaha Consumer finance</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 1year</p>
                                    </td>
                                    <td width="71">
                                        <p>10.10%</p>
                                    </td>
                                    <td width="77">
                                        <p>11.60%</p>
                                    </td>
                                    <td width="95">
                                        <p>13.80%</p>
                                    </td>
                                    <td width="107">
                                        <p>18.20%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Consumer finance</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 2year</p>
                                    </td>
                                    <td width="71">
                                        <p>20.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>21.80%</p>
                                    </td>
                                    <td width="95">
                                        <p>24.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>28.40%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Consumer finance</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 3year</p>
                                    </td>
                                    <td width="71">
                                        <p>31.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>32.80%</p>
                                    </td>
                                    <td width="95">
                                        <p>35.10%</p>
                                    </td>
                                    <td width="107">
                                        <p>39.40%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Consumer finance</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 4year</p>
                                    </td>
                                    <td width="71">
                                        <p>43.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>44.80%</p>
                                    </td>
                                    <td width="95">
                                        <p>47.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>51.30%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Consumer finance</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 5year</p>
                                    </td>
                                    <td width="71">
                                        <p>55.50%</p>
                                    </td>
                                    <td width="77">
                                        <p>56.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>59.10%</p>
                                    </td>
                                    <td width="107">
                                        <p>63.30%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Consumer finance</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 6 year</p>
                                    </td>
                                    <td width="71">
                                        <p>68.90%</p>
                                    </td>
                                    <td width="77">
                                        <p>70.40%</p>
                                    </td>
                                    <td width="95">
                                        <p>72.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>76.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Consumer finance</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 7 year</p>
                                    </td>
                                    <td width="71">
                                        <p>82.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>83.60%</p>
                                    </td>
                                    <td width="95">
                                        <p>85.70%</p>
                                    </td>
                                    <td width="107">
                                        <p>89.70%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Consumer finance</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 8 year</p>
                                    </td>
                                    <td width="71">
                                        <p>96.10%</p>
                                    </td>
                                    <td width="77">
                                        <p>97.40%</p>
                                    </td>
                                    <td width="95">
                                        <p>99.40%</p>
                                    </td>
                                    <td width="107">
                                        <p>103.20%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Consumer finance</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 9 year</p>
                                    </td>
                                    <td width="71">
                                        <p>110.40%</p>
                                    </td>
                                    <td width="77">
                                        <p>111.70%</p>
                                    </td>
                                    <td width="95">
                                        <p>113.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>117.20%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Consumer finance</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 10 year</p>
                                    </td>
                                    <td width="71">
                                        <p>125.20%</p>
                                    </td>
                                    <td width="77">
                                        <p>126.40%</p>
                                    </td>
                                    <td width="95">
                                        <p>128.10%</p>
                                    </td>
                                    <td width="107">
                                        <p>131.70%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Consumer finance</p>
                                    </td>
                                    <td width="127">
                                        <p>Above 10 Years</p>
                                    </td>
                                    <td width="71">
                                        <p>140.40%</p>
                                    </td>
                                    <td width="77">
                                        <p>141.50%</p>
                                    </td>
                                    <td width="95">
                                        <p>143.20%</p>
                                    </td>
                                    <td width="107">
                                        <p>146.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="11" width="54">
                                        <p><strong>14</strong></p>
                                    </td>
                                    <td width="326">
                                        <p>Murabaha Mortgage</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 1year</p>
                                    </td>
                                    <td width="71">
                                        <p>10.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>11.50%</p>
                                    </td>
                                    <td width="95">
                                        <p>13.70%</p>
                                    </td>
                                    <td width="107">
                                        <p>18.00%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Mortgage</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 2year</p>
                                    </td>
                                    <td width="71">
                                        <p>20.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>21.50%</p>
                                    </td>
                                    <td width="95">
                                        <p>23.70%</p>
                                    </td>
                                    <td width="107">
                                        <p>28.10%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Mortgage</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 3year</p>
                                    </td>
                                    <td width="71">
                                        <p>30.90%</p>
                                    </td>
                                    <td width="77">
                                        <p>32.40%</p>
                                    </td>
                                    <td width="95">
                                        <p>34.60%</p>
                                    </td>
                                    <td width="107">
                                        <p>38.90%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Mortgage</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 4year</p>
                                    </td>
                                    <td width="71">
                                        <p>42.60%</p>
                                    </td>
                                    <td width="77">
                                        <p>44.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>46.30%</p>
                                    </td>
                                    <td width="107">
                                        <p>50.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Mortgage</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 5year</p>
                                    </td>
                                    <td width="71">
                                        <p>54.80%</p>
                                    </td>
                                    <td width="77">
                                        <p>56.30%</p>
                                    </td>
                                    <td width="95">
                                        <p>58.40%</p>
                                    </td>
                                    <td width="107">
                                        <p>62.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Mortgage</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 6 year</p>
                                    </td>
                                    <td width="71">
                                        <p>67.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>68.70%</p>
                                    </td>
                                    <td width="95">
                                        <p>70.80%</p>
                                    </td>
                                    <td width="107">
                                        <p>74.90%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Mortgage</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 7 year</p>
                                    </td>
                                    <td width="71">
                                        <p>80.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>81.60%</p>
                                    </td>
                                    <td width="95">
                                        <p>83.60%</p>
                                    </td>
                                    <td width="107">
                                        <p>87.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Mortgage</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 8 year</p>
                                    </td>
                                    <td width="71">
                                        <p>93.70%</p>
                                    </td>
                                    <td width="77">
                                        <p>95.00%</p>
                                    </td>
                                    <td width="95">
                                        <p>97.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>100.80%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Mortgage</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 9 year</p>
                                    </td>
                                    <td width="71">
                                        <p>107.70%</p>
                                    </td>
                                    <td width="77">
                                        <p>108.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>110.70%</p>
                                    </td>
                                    <td width="107">
                                        <p>114.40%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Mortgage</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 10 year</p>
                                    </td>
                                    <td width="71">
                                        <p>122.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>123.20%</p>
                                    </td>
                                    <td width="95">
                                        <p>125.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>128.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Mortgage</p>
                                    </td>
                                    <td width="127">
                                        <p>Above 10 Years</p>
                                    </td>
                                    <td width="71">
                                        <p>136.80%</p>
                                    </td>
                                    <td width="77">
                                        <p>138.00%</p>
                                    </td>
                                    <td width="95">
                                        <p>139.60%</p>
                                    </td>
                                    <td width="107">
                                        <p>142.90%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="11" width="54">
                                        <p><strong>15</strong></p>
                                    </td>
                                    <td width="326">
                                        <p>Murabaha Import</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 1year</p>
                                    </td>
                                    <td width="71">
                                        <p>10.10%</p>
                                    </td>
                                    <td width="77">
                                        <p>11.60%</p>
                                    </td>
                                    <td width="95">
                                        <p>13.80%</p>
                                    </td>
                                    <td width="107">
                                        <p>18.10%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Import</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 2year</p>
                                    </td>
                                    <td width="71">
                                        <p>20.60%</p>
                                    </td>
                                    <td width="77">
                                        <p>22.20%</p>
                                    </td>
                                    <td width="95">
                                        <p>24.40%</p>
                                    </td>
                                    <td width="107">
                                        <p>28.80%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Import</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 3year</p>
                                    </td>
                                    <td width="71">
                                        <p>32.20%</p>
                                    </td>
                                    <td width="77">
                                        <p>33.80%</p>
                                    </td>
                                    <td width="95">
                                        <p>36.10%</p>
                                    </td>
                                    <td width="107">
                                        <p>40.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Import</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 4year</p>
                                    </td>
                                    <td width="71">
                                        <p>44.70%</p>
                                    </td>
                                    <td width="77">
                                        <p>46.20%</p>
                                    </td>
                                    <td width="95">
                                        <p>48.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>52.90%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Import</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 5year</p>
                                    </td>
                                    <td width="71">
                                        <p>57.60%</p>
                                    </td>
                                    <td width="77">
                                        <p>59.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>61.30%</p>
                                    </td>
                                    <td width="107">
                                        <p>65.70%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Import</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 6 year</p>
                                    </td>
                                    <td width="71">
                                        <p>71.60%</p>
                                    </td>
                                    <td width="77">
                                        <p>73.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>75.30%</p>
                                    </td>
                                    <td width="107">
                                        <p>79.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Import</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 7 year</p>
                                    </td>
                                    <td width="71">
                                        <p>85.50%</p>
                                    </td>
                                    <td width="77">
                                        <p>86.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>89.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>93.10%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Import</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 8 year</p>
                                    </td>
                                    <td width="71">
                                        <p>100.90%</p>
                                    </td>
                                    <td width="77">
                                        <p>102.20%</p>
                                    </td>
                                    <td width="95">
                                        <p>104.20%</p>
                                    </td>
                                    <td width="107">
                                        <p>108.20%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Import</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 9 year</p>
                                    </td>
                                    <td width="71">
                                        <p>115.90%</p>
                                    </td>
                                    <td width="77">
                                        <p>117.20%</p>
                                    </td>
                                    <td width="95">
                                        <p>119.10%</p>
                                    </td>
                                    <td width="107">
                                        <p>122.90%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Import</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 10 year</p>
                                    </td>
                                    <td width="71">
                                        <p>131.50%</p>
                                    </td>
                                    <td width="77">
                                        <p>132.70%</p>
                                    </td>
                                    <td width="95">
                                        <p>134.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>138.10%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Import</p>
                                    </td>
                                    <td width="127">
                                        <p>Above 10 Years</p>
                                    </td>
                                    <td width="71">
                                        <p>147.50%</p>
                                    </td>
                                    <td width="77">
                                        <p>148.70%</p>
                                    </td>
                                    <td width="95">
                                        <p>150.40%</p>
                                    </td>
                                    <td width="107">
                                        <p>153.80%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="11" width="54">
                                        <p><strong>16</strong></p>
                                    </td>
                                    <td width="326">
                                        <p>Murabaha Export</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 1year</p>
                                    </td>
                                    <td width="71">
                                        <p>6.60%</p>
                                    </td>
                                    <td width="77">
                                        <p>7.60%</p>
                                    </td>
                                    <td width="95">
                                        <p>9.10%</p>
                                    </td>
                                    <td width="107">
                                        <p>12.00%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Export</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 2year</p>
                                    </td>
                                    <td width="71">
                                        <p>14.10%</p>
                                    </td>
                                    <td width="77">
                                        <p>15.20%</p>
                                    </td>
                                    <td width="95">
                                        <p>16.80%</p>
                                    </td>
                                    <td width="107">
                                        <p>19.90%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Export</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 3year</p>
                                    </td>
                                    <td width="71">
                                        <p>22.20%</p>
                                    </td>
                                    <td width="77">
                                        <p>23.30%</p>
                                    </td>
                                    <td width="95">
                                        <p>24.90%</p>
                                    </td>
                                    <td width="107">
                                        <p>28.10%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Export</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 4year</p>
                                    </td>
                                    <td width="71">
                                        <p>30.60%</p>
                                    </td>
                                    <td width="77">
                                        <p>31.70%</p>
                                    </td>
                                    <td width="95">
                                        <p>33.30%</p>
                                    </td>
                                    <td width="107">
                                        <p>36.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Export</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 5year</p>
                                    </td>
                                    <td width="71">
                                        <p>39.60%</p>
                                    </td>
                                    <td width="77">
                                        <p>40.70%</p>
                                    </td>
                                    <td width="95">
                                        <p>42.40%</p>
                                    </td>
                                    <td width="107">
                                        <p>45.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Export</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 6 year</p>
                                    </td>
                                    <td width="71">
                                        <p>50.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>51.40%</p>
                                    </td>
                                    <td width="95">
                                        <p>53.10%</p>
                                    </td>
                                    <td width="107">
                                        <p>56.40%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Export</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 7 year</p>
                                    </td>
                                    <td width="71">
                                        <p>59.70%</p>
                                    </td>
                                    <td width="77">
                                        <p>60.80%</p>
                                    </td>
                                    <td width="95">
                                        <p>62.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>65.70%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Export</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 8 year</p>
                                    </td>
                                    <td width="71">
                                        <p>69.50%</p>
                                    </td>
                                    <td width="77">
                                        <p>70.60%</p>
                                    </td>
                                    <td width="95">
                                        <p>72.20%</p>
                                    </td>
                                    <td width="107">
                                        <p>75.40%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Export</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 9 year</p>
                                    </td>
                                    <td width="71">
                                        <p>79.60%</p>
                                    </td>
                                    <td width="77">
                                        <p>80.60%</p>
                                    </td>
                                    <td width="95">
                                        <p>82.20%</p>
                                    </td>
                                    <td width="107">
                                        <p>85.30%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Export</p>
                                    </td>
                                    <td width="127">
                                        <p>Up to 10 year</p>
                                    </td>
                                    <td width="71">
                                        <p>89.90%</p>
                                    </td>
                                    <td width="77">
                                        <p>91.00%</p>
                                    </td>
                                    <td width="95">
                                        <p>92.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>95.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Export</p>
                                    </td>
                                    <td width="127">
                                        <p>Above 10 Years</p>
                                    </td>
                                    <td width="71">
                                        <p>100.60%</p>
                                    </td>
                                    <td width="77">
                                        <p>101.60%</p>
                                    </td>
                                    <td width="95">
                                        <p>103.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>105.90%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="11" width="54">
                                        <p><strong>17</strong></p>
                                    </td>
                                    <td width="326">
                                        <p>Murabaha Advance Against Import Bills</p>
                                    </td>
                                    <td width="127">
                                        <p>Upto 30 days</p>
                                    </td>
                                    <td width="71">
                                        <p>11.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="95">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="107">
                                        <p>&nbsp;</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Advance Against Import Bills</p>
                                    </td>
                                    <td width="127">
                                        <p>Upto 60 days</p>
                                    </td>
                                    <td width="71">
                                        <p>11.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="95">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="107">
                                        <p>&nbsp;</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Advance Against Import Bills</p>
                                    </td>
                                    <td width="127">
                                        <p>Upto 90 days</p>
                                    </td>
                                    <td width="71">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="77">
                                        <p>12.60%</p>
                                    </td>
                                    <td width="95">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="107">
                                        <p>&nbsp;</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Advance Against Import Bills</p>
                                    </td>
                                    <td width="127">
                                        <p>over 90 days</p>
                                    </td>
                                    <td width="71">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="77">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="95">
                                        <p>15.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>19.70%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Advance Against Export Bills</p>
                                    </td>
                                    <td width="127">
                                        <p>Upto 30 days</p>
                                    </td>
                                    <td width="71">
                                        <p>7.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="95">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="107">
                                        <p>&nbsp;</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Advance Against Export Bills</p>
                                    </td>
                                    <td width="127">
                                        <p>30-60 days</p>
                                    </td>
                                    <td width="71">
                                        <p>7.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="95">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="107">
                                        <p>&nbsp;</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Advance Against Export Bills</p>
                                    </td>
                                    <td width="127">
                                        <p>60-90 days</p>
                                    </td>
                                    <td width="71">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="77">
                                        <p>8.40%</p>
                                    </td>
                                    <td width="95">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="107">
                                        <p>&nbsp;</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Advance Against Export Bills</p>
                                    </td>
                                    <td width="127">
                                        <p>over 90 days</p>
                                    </td>
                                    <td width="71">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="77">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="95">
                                        <p>10.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>13.30%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Merchandise(Import)</p>
                                    </td>
                                    <td width="127">
                                        <p>&lt;90 days</p>
                                    </td>
                                    <td width="71">
                                        <p>10.80%</p>
                                    </td>
                                    <td width="77">
                                        <p>12.40%</p>
                                    </td>
                                    <td width="95">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="107">
                                        <p>&nbsp;</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Merchandise(Import)</p>
                                    </td>
                                    <td width="127">
                                        <p>&gt;90&lt;180 days</p>
                                    </td>
                                    <td width="71">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="77">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="95">
                                        <p>14.90%</p>
                                    </td>
                                    <td width="107">
                                        <p>&nbsp;</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Merchandise(Import)</p>
                                    </td>
                                    <td width="127">
                                        <p>&gt;180 days</p>
                                    </td>
                                    <td width="71">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="77">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="95">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="107">
                                        <p>19.70%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="3" width="54">
                                        <p><strong>18</strong></p>
                                    </td>
                                    <td width="326">
                                        <p>Murabaha Merchandise Revolving/ onetime(Export)</p>
                                    </td>
                                    <td width="127">
                                        <p>&lt;90 days</p>
                                    </td>
                                    <td width="71">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="77">
                                        <p>8.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="107">
                                        <p>&nbsp;</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Merchandise Revolving/ onetime(Export)</p>
                                    </td>
                                    <td width="127">
                                        <p>&gt;90&lt;180 days</p>
                                    </td>
                                    <td width="71">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="77">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="95">
                                        <p>10.80%</p>
                                    </td>
                                    <td width="107">
                                        <p>&nbsp;</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Merchandise Revolving/ onetime(Export)</p>
                                    </td>
                                    <td width="127">
                                        <p>&gt;180 days</p>
                                    </td>
                                    <td width="71">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="77">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="95">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="107">
                                        <p>14.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="5" width="54">
                                        <p><strong>19</strong></p>
                                    </td>
                                    <td width="326">
                                        <p>Murabaha Pre-shipment(ECG)</p>
                                    </td>
                                    <td width="127">
                                        <p>Pre-shipment(ECG)</p>
                                    </td>
                                    <td width="71">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="77">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="95">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="107">
                                        <p>9.80%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Pre-shipment(ECG)</p>
                                    </td>
                                    <td width="127">
                                        <p>Pre-shipment(against contract or L/C or collateral ) up to 90 days</p>
                                    </td>
                                    <td width="71">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="77">
                                        <p>6.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="107">
                                        <p>&nbsp;</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Pre-shipment(ECG)</p>
                                    </td>
                                    <td width="127">
                                        <p>Pre-shipment(against contract or L/C or collateral&nbsp; (90-180) days</p>
                                    </td>
                                    <td width="71">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="77">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="95">
                                        <p>8.40%</p>
                                    </td>
                                    <td width="107">
                                        <p>&nbsp;</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Pre-shipment(ECG)</p>
                                    </td>
                                    <td width="127">
                                        <p>Pre-shipment(against contract or L/C or collateral&nbsp; (180-365) days</p>
                                    </td>
                                    <td width="71">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="77">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="95">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="107">
                                        <p>14.90%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Pre-shipment(ECG)</p>
                                    </td>
                                    <td width="127">
                                        <p>Pre-shipment(against contract or L/C or collateral above 365) days</p>
                                    </td>
                                    <td width="71">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="77">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="95">
                                        <p>&nbsp;</p>
                                    </td>
                                    <td width="107">
                                        <p>15.00%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="11" width="54">
                                        <p><strong>20</strong></p>
                                    </td>
                                    <td width="326">
                                        <p>Murabaha Micro Finance Institutions</p>
                                    </td>
                                    <td width="127">
                                        <p>1-12 months</p>
                                    </td>
                                    <td width="71">
                                        <p>8.60%</p>
                                    </td>
                                    <td width="77">
                                        <p>9.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>11.80%</p>
                                    </td>
                                    <td width="107">
                                        <p>15.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Micro Finance Institutions</p>
                                    </td>
                                    <td width="127">
                                        <p>13.-24 months</p>
                                    </td>
                                    <td width="71">
                                        <p>17.60%</p>
                                    </td>
                                    <td width="77">
                                        <p>18.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>20.90%</p>
                                    </td>
                                    <td width="107">
                                        <p>24.70%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Micro Finance Institutions</p>
                                    </td>
                                    <td width="127">
                                        <p>25-36 months</p>
                                    </td>
                                    <td width="71">
                                        <p>27.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>28.60%</p>
                                    </td>
                                    <td width="95">
                                        <p>30.60%</p>
                                    </td>
                                    <td width="107">
                                        <p>34.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Micro Finance Institutions</p>
                                    </td>
                                    <td width="127">
                                        <p>37-48 months</p>
                                    </td>
                                    <td width="71">
                                        <p>38.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>39.30%</p>
                                    </td>
                                    <td width="95">
                                        <p>41.30%</p>
                                    </td>
                                    <td width="107">
                                        <p>45.20%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Micro Finance Institutions</p>
                                    </td>
                                    <td width="127">
                                        <p>49-60 months</p>
                                    </td>
                                    <td width="71">
                                        <p>48.80%</p>
                                    </td>
                                    <td width="77">
                                        <p>50.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>52.10%</p>
                                    </td>
                                    <td width="107">
                                        <p>55.90%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Micro Finance Institutions</p>
                                    </td>
                                    <td width="127">
                                        <p>61-84 months</p>
                                    </td>
                                    <td width="71">
                                        <p>61.20%</p>
                                    </td>
                                    <td width="77">
                                        <p>62.50%</p>
                                    </td>
                                    <td width="95">
                                        <p>64.40%</p>
                                    </td>
                                    <td width="107">
                                        <p>68.30%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Micro Finance Institutions</p>
                                    </td>
                                    <td width="127">
                                        <p>85-96 Months</p>
                                    </td>
                                    <td width="71">
                                        <p>72.90%</p>
                                    </td>
                                    <td width="77">
                                        <p>74.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>76.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>79.80%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Micro Finance Institutions</p>
                                    </td>
                                    <td width="127">
                                        <p>97-108 Months</p>
                                    </td>
                                    <td width="71">
                                        <p>85.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>86.20%</p>
                                    </td>
                                    <td width="95">
                                        <p>88.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>91.70%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Micro Finance Institutions</p>
                                    </td>
                                    <td width="127">
                                        <p>109-120 Months</p>
                                    </td>
                                    <td width="71">
                                        <p>97.50%</p>
                                    </td>
                                    <td width="77">
                                        <p>98.70%</p>
                                    </td>
                                    <td width="95">
                                        <p>100.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>103.90%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Micro Finance Institutions</p>
                                    </td>
                                    <td width="127">
                                        <p>121-132 Months</p>
                                    </td>
                                    <td width="71">
                                        <p>110.50%</p>
                                    </td>
                                    <td width="77">
                                        <p>111.60%</p>
                                    </td>
                                    <td width="95">
                                        <p>113.30%</p>
                                    </td>
                                    <td width="107">
                                        <p>116.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Micro Finance Institutions</p>
                                    </td>
                                    <td width="127">
                                        <p>Above 132 Months</p>
                                    </td>
                                    <td width="71">
                                        <p>123.80%</p>
                                    </td>
                                    <td width="77">
                                        <p>124.80%</p>
                                    </td>
                                    <td width="95">
                                        <p>126.40%</p>
                                    </td>
                                    <td width="107">
                                        <p>129.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="54">
                                        <p><strong>21</strong></p>
                                    </td>
                                    <td width="326">
                                        <p>Murabaha Overuse</p>
                                    </td>
                                    <td width="127">
                                        <p>Existing revolving facility Account</p>
                                    </td>
                                    <td width="71">
                                        <p>11.60%</p>
                                    </td>
                                    <td width="77">
                                        <p>13.30%</p>
                                    </td>
                                    <td width="95">
                                        <p>15.90%</p>
                                    </td>
                                    <td width="107">
                                        <p>20.80%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="2" width="54">
                                        <p><strong>22</strong></p>
                                    </td>
                                    <td width="326">
                                        <p>Murabaha Revolving Facility</p>
                                    </td>
                                    <td width="127">
                                        <p>Non exporter</p>
                                    </td>
                                    <td width="71">
                                        <p>10.50%</p>
                                    </td>
                                    <td width="77">
                                        <p>12.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>14.30%</p>
                                    </td>
                                    <td width="107">
                                        <p>18.90%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Revolving Facility</p>
                                    </td>
                                    <td width="127">
                                        <p>Exporters</p>
                                    </td>
                                    <td width="71">
                                        <p>8.30%</p>
                                    </td>
                                    <td width="77">
                                        <p>9.50%</p>
                                    </td>
                                    <td width="95">
                                        <p>11.40%</p>
                                    </td>
                                    <td width="107">
                                        <p>15.00%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="4" width="54">
                                        <p><strong>23</strong></p>
                                    </td>
                                    <td width="326">
                                        <p>Murabaha Warehouse Receipt Financing</p>
                                    </td>
                                    <td width="127">
                                        <p>1-12 months</p>
                                    </td>
                                    <td width="71">
                                        <p>7.90%</p>
                                    </td>
                                    <td width="77">
                                        <p>9.10%</p>
                                    </td>
                                    <td width="95">
                                        <p>10.80%</p>
                                    </td>
                                    <td width="107">
                                        <p>14.30%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Warehouse Receipt Financing</p>
                                    </td>
                                    <td width="127">
                                        <p>13.-24 months</p>
                                    </td>
                                    <td width="71">
                                        <p>16.00%</p>
                                    </td>
                                    <td width="77">
                                        <p>17.20%</p>
                                    </td>
                                    <td width="95">
                                        <p>19.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>22.50%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Warehouse Receipt Financing</p>
                                    </td>
                                    <td width="127">
                                        <p>25-36 months</p>
                                    </td>
                                    <td width="71">
                                        <p>24.20%</p>
                                    </td>
                                    <td width="77">
                                        <p>25.40%</p>
                                    </td>
                                    <td width="95">
                                        <p>27.10%</p>
                                    </td>
                                    <td width="107">
                                        <p>30.60%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Warehouse Receipt Financing</p>
                                    </td>
                                    <td width="127">
                                        <p>37-60 months</p>
                                    </td>
                                    <td width="71">
                                        <p>32.70%</p>
                                    </td>
                                    <td width="77">
                                        <p>33.90%</p>
                                    </td>
                                    <td width="95">
                                        <p>35.70%</p>
                                    </td>
                                    <td width="107">
                                        <p>39.10%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="4" width="54">
                                        <p><strong>24</strong></p>
                                    </td>
                                    <td width="326">
                                        <p>Murabaha Personal loan for Salaried Individuals</p>
                                    </td>
                                    <td width="127">
                                        <p>Consumer Finance</p>
                                    </td>
                                    <td width="71">
                                        <p>10.20%</p>
                                    </td>
                                    <td width="77">
                                        <p>11.70%</p>
                                    </td>
                                    <td width="95">
                                        <p>14.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>18.40%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Personal loan for Salaried Individuals</p>
                                    </td>
                                    <td width="127">
                                        <p>Alegnita emergency</p>
                                    </td>
                                    <td width="71">
                                        <p>10.20%</p>
                                    </td>
                                    <td width="77">
                                        <p>11.70%</p>
                                    </td>
                                    <td width="95">
                                        <p>14.00%</p>
                                    </td>
                                    <td width="107">
                                        <p>18.40%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Personal loan for Salaried Individuals</p>
                                    </td>
                                    <td width="127">
                                        <p>House renovation</p>
                                    </td>
                                    <td width="71">
                                        <p>9.90%</p>
                                    </td>
                                    <td width="77">
                                        <p>11.40%</p>
                                    </td>
                                    <td width="95">
                                        <p>13.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>17.80%</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="326">
                                        <p>Murabaha Personal loan for Salaried Individuals</p>
                                    </td>
                                    <td width="127">
                                        <p>House completion</p>
                                    </td>
                                    <td width="71">
                                        <p>9.90%</p>
                                    </td>
                                    <td width="77">
                                        <p>11.40%</p>
                                    </td>
                                    <td width="95">
                                        <p>13.50%</p>
                                    </td>
                                    <td width="107">
                                        <p>17.80%</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 2 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>2. Collateral Estimation</p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>Term & Tariff</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow}>
                                    <td>2</td>
                                    <td colSpan={2}>Collateral Estimation</td>
                                </tr>
                                <tr>
                                    <td>2.1</td>
                                    <td>Residential Building/apartment unit</td>
                                    <td>900+400 for each unit</td>
                                </tr>
                                <tr>
                                    <td>2.2</td>
                                    <td>Residential Building with more than one floor</td>
                                    <td>900+100/floor</td>
                                </tr>
                                <tr>
                                    <td>2.3</td>
                                    <td>Hotel, Guesthouse, commercial building and apartment</td>
                                    <td>1,500+150/floor</td>
                                </tr>
                                <tr>
                                    <td>2.4</td>
                                    <td>Store, warehouse and factories</td>
                                    <td>850+150/floor</td>
                                </tr>
                                <tr>
                                    <td>2.5</td>
                                    <td>Fuel station</td>
                                    <td>850/tanker for building as per the above rate</td>
                                </tr>
                                <tr>
                                    <td>2.6</td>
                                    <td>Flower Farm</td>
                                    <td>1,500/greenhouse+150/block for buildings</td>
                                </tr>
                                <tr>
                                    <td>2.7</td>
                                    <td>Coffee hulling and washing station</td>
                                    <td>2,300.00/site</td>
                                </tr>
                                <tr>
                                    <td>2.8</td>
                                    <td>Coffee and other plantation</td>
                                    <td>400/hectare but not more than 0.5% of the loan</td>
                                </tr>
                                <tr>
                                    <td>2.9</td>
                                    <td>Staff housing</td>
                                    <td>free</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 3 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>3. Movable collateral Management fee</p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>Term & Tariff</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow}>
                                    <td>3</td>
                                    <td colSpan={2}>Movable collateral Management fee</td>
                                </tr>
                                <tr>
                                    <td>3.1</td>
                                    <td>Motor Vehicle</td>
                                    <td>500/Booklet</td>
                                </tr>
                                <tr>
                                    <td>3.2</td>
                                    <td>Factory Machinery</td>
                                    <td>1,000.00/machinery up to 6 Mill
                                        <br />3,000/plant up to 20 Mill
                                        <br />10,000/plant if its above 20 Mill</td>
                                </tr>
                                <tr>
                                    <td>3.3</td>
                                    <td>Construction Machinery and Equipment</td>
                                    <td>600 each</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 4 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>4. Credit Processing fee</p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>Term & Tariff</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow}>
                                    <td>4</td>
                                    <td colSpan={2}>Credit Processing fee</td>
                                </tr>
                                <tr>
                                    <td>4.1</td>
                                    <td>New credit facility</td>
                                    <td>For financing amount up to 10 million, 0.05%/minimum 5000<br />
                                        For financing amount of 10-100 million, 0.075%/minimum 7,500<br />
                                        For financing amount &gt; 100 million, 0.1%/minimum 100,000</td>
                                </tr>
                                <tr>
                                    <td>4.2</td>
                                    <td>Renewal of existing facility</td>
                                    <td>75% of the financing processing fee based on the facility limit</td>
                                </tr>
                                <tr>
                                    <td>4.3</td>
                                    <td>Renewal at increasing existing limit</td>
                                    <td>75% of the financing processing fee shall be charged on the existing limit and the incremental balance shall be charged as new facility mentioned above under 4.1</td>
                                </tr>
                                <tr>
                                    <td>4.4</td>
                                    <td>Renewal of expired facilities not more than a month</td>
                                    <td>0.05% of the limit (Minimum Birr 3000)</td>
                                </tr>
                                <tr>
                                    <td>4.5</td>
                                    <td>financing approval on CCR</td>
                                    <td>2,000.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 5 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>5. Renegotiated loans </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>Term & Tariff</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow}>
                                    <td>5</td>
                                    <td colSpan={2}>Renegotiated loans</td>
                                </tr>
                                <tr>
                                    <td>5.1</td>
                                    <td>Waiver of repayment</td>
                                    <td>75% of the loan processing fee based on the outstanding balance (minimum Birr 5,000)</td>
                                </tr>
                                <tr>
                                    <td>5.2</td>
                                    <td>Rescheduling</td>
                                    <td>75% of the loan processing fee based on the outstanding balance (minimum Birr 5,000)</td>
                                </tr>
                                <tr>
                                    <td>5.3</td>
                                    <td>Amendment of repayment</td>
                                    <td>75% of the loan processing fee based on the outstanding balance (minimum Birr 5,000)</td>
                                </tr>
                                <tr>
                                    <td>5.4</td>
                                    <td>Transfer of financing file (excluding staff)</td>
                                    <td>10,000.00</td>
                                </tr>
                                <tr>
                                    <td>5.5</td>
                                    <td>Guarantee extension/amendment fee</td>
                                    <td>3,000.00</td>
                                </tr>
                                <tr>
                                    <td>5.6</td>
                                    <td>Guarantee conversion to term financing</td>
                                    <td>10,000.00</td>
                                </tr>
                                <tr>
                                    <td>5.7</td>
                                    <td>Credit approval confirmation fee</td>
                                    <td>5,000.00</td>
                                </tr>
                                <tr>
                                    <td>5.8</td>
                                    <td>Any letter regarding credit facility to be issued at the request of the borrower/customer/supplier</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <td>5.9</td>
                                    <td>Special Mention follow up fee</td>
                                    <td>1.5/month on installment amount (minimum 1,000 birr)</td>
                                </tr>
                                <tr>
                                    <td>5.10</td>
                                    <td>NPL follow up fee</td>
                                    <td>an increase of 3% penalty on the existing rate</td>
                                </tr>
                                <tr>
                                    <td>5.11</td>
                                    <td>Additional Grace period for Project Loans</td>
                                    <td>2,500.00</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 6 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>6. Movable collateral Management fee </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>Term & Tariff</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow}>
                                    <td>6</td>
                                    <td colSpan={2}>Financing reapproval fee</td>
                                </tr>
                                <tr>
                                    <td>6.1</td>
                                    <td>Commitment fee for unutilized fund after re approval</td>
                                    <td>0.5% of the outstanding loan balance min 10,000.00</td>
                                </tr>
                                <tr>
                                    <td>6.2</td>
                                    <td>Arrangement fee</td>
                                    <td>0.5% of the outstanding loan balance to be renegotiated but not more than 200,000.00 birr</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 7 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>7. Other IFB Terms And Tariffs </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>Term & Tariff</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>7</td>
                                    <td>Cancellation/Suspension of foreclosure decision</td>
                                    <td>up to 10 mill 5000/case 10 Million up to 50 million 10,000/case above 50 Million 25,000.00 on cash</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Insurance Premium payment charge</td>
                                    <td>10.5% of the insurance premium (minimum birr 3,000)</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>financing re-approval by the reason of the customer</td>
                                    <td>5,000.00</td>
                                </tr>
                                <tr className={styles.headerRow}>
                                    <td>10</td>
                                    <td colSpan={2}>Merchandise Loan Handling charge</td>
                                </tr>

                                <tr>
                                    <td>10.1</td>
                                    <td>Each time a Merchandise is pledged/released</td>
                                    <td>5,000.00/2,000.00</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>Appeal</td>
                                    <td>2,500.00</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>Credit Early settlement</td>
                                    <td>1,000.00</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>Settlement of Pre-shipment loan in Birr</td>
                                    <td>5% on the amount which makes hard core and converted to term loan only</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

            </div>

            <Footer />
        </>
    );
};

export default IFB_Terms_And_Tariffs;