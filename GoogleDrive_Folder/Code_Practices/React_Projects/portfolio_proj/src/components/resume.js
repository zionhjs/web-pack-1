import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textalign: 'center' }}>
                            <img
                                src="https://www.zivarentals.com/wp-content/uploads/2017/09/avatar-1606916_960_720-1.png"
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Zion Hung</h2>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
                        <hr style={{ borderTop: '3px solod #833fb2', width: '50%' }} />
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <hr style={{ borderTop: '3px solod #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>123 Dewey Ave, San Gabriel, CA 91776</p>
                        <h5>Phone</h5>
                        <p>213-822-4642</p>
                        <h5>Email</h5>
                        <p>zionhung@gmail.com</p>
                        <h5>Web</h5>
                        <p>www.zionhung.com</p>
                        <hr style={{ borderTop: '3px solod #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2012}
                            endYear={2006}
                            schoolName="Sci-Arc"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        />
                        <Education
                            startYear={2009}
                            endYear={2014}
                            schoolName="Sci-Arc"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        />
                        <hr style={{ borderTop: '1px solid #e22947' }} />
                        <Experience
                            startYear={2012}
                            endYear={2016}
                            experienceName="Sci-Arc"
                            experienceDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        />
                        <Experience
                            startYear={2012}
                            endYear={2016}
                            experienceName="Sci-Arc"
                            experienceDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        />
                        <hr style={{ borderTop: '1px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill="python"
                            progress={100}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={100}
                        />
                        <Skills
                            skill="C#"
                            progress={100}
                        />
                        <Skills
                            skill="HTML"
                            progress={100}
                        />
                        <Skills
                            skill="CSS"
                            progress={100}
                        />
                        <Skills
                            skill="Django"
                            progress={80}
                        />
                        <Skills
                            skill="React"
                            progress={80}
                        />
                        <Skills
                            skill="Angular"
                            progress={50}
                        />
                        <Skills
                            skill="Vue"
                            progress={50}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={50}
                        />
                        <Skills
                            skill="MongoDB"
                            progress={50}
                        />
                        <Skills
                            skill="mySQL"
                            progress={50}
                        />
                        <Skills
                            skill="Flask"
                            progress={30}
                        />
                        <Skills
                            skill="WebPack"
                            progress={30}
                        />
                        <Skills
                            skill="Gulp"
                            progress={40}
                        />
                        <Skills
                            skill="Java"
                            progress={30}
                        />
                        <Skills
                            skill="Redux"
                            progress={50}
                        />
                    </Cell>
                </Grid>
            </div >
        )
    }
}

export default Resume;