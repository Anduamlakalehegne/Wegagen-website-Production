import React, { useState } from "react";
import { Nav } from "rsuite/";
import "rsuite/dist/rsuite.min.css";

const DropdownMenu = () => {
 
  return (
    <center>
            <div>
                
                <div style={{ marginTop: 20 }}> 
                    <Nav> 
                        <Nav.Item active>Courses</Nav.Item>
                        <Nav.Item>Tutorials</Nav.Item>
                        <Nav.Menu title="Jobs">
                            <Nav.Item>Apply for Jobs</Nav.Item>
                            <Nav.Item>Jobathon</Nav.Item>
                            <Nav.Menu title="Post a Job">
                                <Nav.Item>Post a Job</Nav.Item>
                                <Nav.Item>Open previous jobs</Nav.Item>
                            </Nav.Menu>
                        </Nav.Menu>
                        <Nav.Menu title="Practice">
                            <Nav.Item>All DSA problems</Nav.Item>
                            <Nav.Item>Problem of the Day</Nav.Item>
                        </Nav.Menu>
                    </Nav>
                </div>
            </div>
        </center>
  );
};



export default DropdownMenu;
