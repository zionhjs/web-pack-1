import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import $ from 'jquery';

class Resume extends Component {
    arrowClickHandler = (e) => {
        var arrow = document.getElementById("arrow-icon");
        arrow.classList.toggle("open");
        e.preventDefault();
        var right_col = document.getElementById("resume-right-col")

    }

    render() {
        return (
            <div>
                <Grid className="resume-grid">
                    <Cell col={4} style={{ color: 'grey' }} className="resume-left-col" >
                        <div style={{ textalign: 'center', display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img
                                src="https://www.zivarentals.com/wp-content/uploads/2017/09/avatar-1606916_960_720-1.png"
                                alt="avatar"
                                style={{ height: '200px' }}
                                className="avatar-img"
                            />
                            <h2 style={{ paddingTop: '0.6em', color: 'white' }}>Zion Hung</h2>
                        </div>
                        <h4 style={{ color: 'white' }}>SDE Programmer</h4>
                        <hr style={{ borderTop: '3px solod #833fb2', width: '100%' }} />
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <hr style={{ borderTop: '3px solod #833fb2', width: '100%' }} />
                        <h5 style={{ color: 'white' }}>Address</h5>
                        <p>Address_1: 124 W 4th St #F, Downtown Los Angeles, CA 90013</p>
                        <p>Address_2: 3335 Susan St #200, Costa Mesa, CA 92626</p>
                        <h5 style={{ color: 'white' }}>Phone</h5>
                        <p>213-822-4642</p>
                        <h5 style={{ color: 'white' }}>Email</h5>
                        <p>hjszion@gmail.com</p>
                        <p>zionhugh@gmail.com</p>
                        <h5 style={{ color: 'white' }}>Website</h5>
                        <p>www.zionhung.com</p>
                        <hr style={{ borderTop: '3px solod #833fb2', width: '100%' }} />
                    </Cell>
                    <Cell className="resume-right-col" id="resume-right-col" col={8}>
                        <a class="arrow-icon" id="arrow-icon" onClick={this.arrowClickHandler}>
                            <span class="left-bar"></span>
                            <span class="right-bar"></span>
                        </a>
                        <h2>Skills</h2>
                        <hr style={{ borderTop: '1.5px solid white', width: "97%" }} />
                        <h5>Language</h5>
                        <Skills
                            skill="python"
                            progress={90}
                        />
                        <Skills
                            skill="JavaScript & ES6"
                            progress={87}
                        />
                        <Skills
                            skill="C#"
                            progress={84}
                        />
                        <Skills
                            skill="Java"
                            progress={30}
                        />
                        <hr style={{ borderTop: '1px dashed #bdc3c7', width: "88%", left: 0 }} />
                        <h5>MVC FrameWork</h5>
                        <Skills
                            skill="React"
                            progress={80}
                        />
                        <Skills
                            skill="Django"
                            progress={80}
                        />
                        <Skills
                            skill="Angular"
                            progress={60}
                        />
                        <Skills
                            skill="ASP.NET"
                            progress={75}
                        />
                        <Skills
                            skill="Vue"
                            progress={30}
                        />
                        <hr style={{ borderTop: '1px dashed #bdc3c7', width: "88%", left: 0 }} />
                        <h5>Database</h5>
                        <Skills
                            skill="MongoDB"
                            progress={60}
                        />
                        <Skills
                            skill="mySQL"
                            progress={60}
                        />
                        <hr style={{ borderTop: '1px dashed #bdc3c7', width: "88%", left: 0 }} />
                        <h5>Web Fundamental</h5>
                        <Skills
                            skill="HTML"
                            progress={96}
                        />
                        <Skills
                            skill="CSS & CSS3"
                            progress={87}
                        />
                        <hr style={{ borderTop: '1px dashed #bdc3c7', width: "88%", left: 0 }} />
                        <h5>Other</h5>
                        <Skills
                            skill="NodeJS"
                            progress={50}
                        />
                        <Skills
                            skill="Flask"
                            progress={30}
                        />
                        <Skills
                            skill="WebPack"
                            progress={45}
                        />
                        <Skills
                            skill="Gulp"
                            progress={60}
                        />
                        <Skills
                            skill="Redux"
                            progress={50}
                        />

                        <hr style={{ borderTop: '1.5px solid white', width: "97%" }} />
                        <h2>Work Experiences</h2>
                        <Experience
                            startYear={2018}
                            endYear={2019}
                            experienceName="yU+co"
                            experienceDescription="yU+co is a Digital Innovation Studio Crafting Content & Design. Between 2018 to 2019 I was a Graphic Desiner(2d&3d) at yU+co, creating content for the entertainment industry. From the experience there I spent more time in graphic design and I taught myself fornt-end web-development. After that I got more deep into web-development, I work as freelancer for UI/UX design and front-end developer."
                            link="https://www.yuco.com/"
                        />
                        <Experience
                            startYear={2014}
                            endYear={2016}
                            experienceName="Urbanus Architecture"
                            experienceDescription="Urbanus Architecture is one of China's Toptier Architecture Firm, I worked there for nearly 2 years as an architect before I came to USA to futher my education in Design."
                            link="http://www.urbanus.com.cn/"
                        />
                        <hr style={{ borderTop: '1.5px solid white', width: "97%" }} />
                        <h2>Education</h2>
                        <Education
                            startYear={2019}
                            endYear={2020}
                            schoolName="Coding Dojo"
                            schoolDescription="Coding Dojo is a place where student can learn Multi-Stack development, it has 10 years of Leanrning Science & Curriculum Refinement experiences. I study here for 5 month learning&practicing 5 MVC Framework, and I got all the black-belt rewards for each Framework I studied."
                            link="https://www.codingdojo.com/"
                        />
                        <Education
                            startYear={2016}
                            endYear={2018}
                            schoolName="Sci-Arc"
                            schoolDescription="SCI-Arc is a world-renowned center of innovation and one of the nation's few boutiques design schools. The school is located in a quarter-mile-long former freight depot in the Arts District of Los Angeles. It is distinguished by the vibrant atmosphere of its studios, which provides students with a uniquely inspiring environment in which to study design and architecture. I studied here for nearly 2 years, mostly on design and animation, and I got a master degree from the school."
                            link="https://www.sciarc.edu/"
                        />
                    </Cell>
                </Grid>
            </div >
        )
    }
}

export default Resume;