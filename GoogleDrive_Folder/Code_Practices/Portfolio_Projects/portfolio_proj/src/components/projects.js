import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import '../App.css';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* Project 01 */}
                    <Card shadow={5} style={{ minWidth: '360', minHeight: '510', margin: 'auto' }}>
                        <CardTitle id="card-title" style={{ color: "#fff", height: '360px', background: 'url(https://i0.wp.com/instinct.is/wp-content/uploads/2017/08/woman-cart-grocery-iphone-2.jpg?resize=2000%2C900&ssl=1) center/cover' }}
                        >Clark.io Website</CardTitle>
                        <CardText style={{ height: "120px", overflow: "auto" }}>
                            Clark.io is a subsidiary of The Lion'Esque Group. It provides a virtual shopping-cart product based RFID chip. I build the react-website for them.
                    </CardText>
                        <CardActions border>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>GitHub</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>CodeCamp</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="https://getclark.io/" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" href="http://field-test.co" target="_blank" />
                        </CardMenu>
                    </Card >

                    {/* Project 02 */}
                    <Card shadow={5} style={{ minWidth: '360', minHeight: '510', margin: 'auto' }}>
                        <CardTitle style={{ color: "#bdc3c7", height: '360px', background: 'url(https://yt3.ggpht.com/a/AGF-l78E1OeuCR4yXJORN0Ojy3bjcZKzsb0jqrMsgg=s240-c-k-c0xffffffff-no-rj-mo) center/cover' }}>Galore TV App</CardTitle>
                        <CardText style={{ height: "120px", overflow: "auto" }}>
                            Galore TV App
                            Hosted on Heroku <a href="https://git.heroku.com/galoretv-api.git" target="_blank">https://git.heroku.com/galoretv-api.git</a>
                            YouTube Scraper API endpoint <a href="https://galoretv-api.herokuapp.com/" target="_blank">https://galoretv-api.herokuapp.com/</a>(route endpoint)
                    </CardText>
                        <CardActions border>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>GitHub</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>CodeCamp</Button>
                            <Button colored><a href="https://galoremag.com/" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" href="https://galoremag.com/" target="_blank" colored />
                        </CardMenu>
                    </Card >

                    {/* Project 03 */}
                    <Card shadow={5} style={{ minWidth: '360', minHeight: '510', margin: 'auto' }}>
                        <CardTitle style={{ color: "#fff", height: '360px', background: 'url(https://dcassetcdn.com/design_img/2496504/580863/580863_13211572_2496504_7a53dddf_thumbnail.png) center/cover' }}>Zion's Website</CardTitle>
                        <CardText style={{ height: "120px", overflow: "auto" }}>
                            This is my personal website which is a collection of my full-stack works and Designes.

                    </CardText>
                        <CardActions border>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>GitHub</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>CodeCamp</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="http://zionhung.com" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" href="http://zionhung.com" target="_blank" />
                        </CardMenu>
                    </Card >
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* Project 01 */}
                    <Card shadow={5} style={{ minWidth: '360', minHeight: '510', margin: 'auto' }}>
                        <CardTitle id="card-title" style={{ color: "#fff", height: '360px', background: 'url(https://i.pinimg.com/originals/d3/e4/1f/d3e41fcda53faa7b6da198ad21dedc9d.jpg) center/cover' }}
                        >Calendar App</CardTitle>
                        <CardText>
                            A calendar built based of Django’s HTMLCalendar. The end user can add, edit, and delete events on this calendar. The calendar allows the user to navigate to the next and previous month, along with a yearly view to navigate to the specific month and year indicated. The calendar can also switch between a light and dark view.
                    </CardText>
                        <CardActions border>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>GitHub</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>CodeCamp</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="http://54.215.250.166/calendar/" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" href="http://54.215.250.166/calendar/" target="_blank" />
                        </CardMenu>
                    </Card >

                    {/* Project 02 */}
                    <Card shadow={5} style={{ minWidth: '360', minHeight: '510', margin: 'auto', }}>
                        <CardTitle id="card-title" style={{ color: "#fff", height: '360px', background: 'url(https://eezee.sg/blog/wp-content/uploads/2018/06/Artboard-3@3x-1024x461.png) center/330%' }}
                        >Employee Backend Mangement System</CardTitle>
                        <CardText style={{ height: "120px", overflow: "auto" }}>
                            Try login as Admin -- Or create new user<p style={{ color: "#3d72b4" }}>UserName: adminuser@gmail.com PW:adminuser</p>
                            A employee management system is build with Django's ORM and validation. Within this app, employee can clockin/out, write reports for what they have done. Based on that, the employer can track employee's performance, then decide rewards them or remind them to work harder. Employer will be able to do the full CRUD to change employee's data in terms of account-info/clock-info or give employee authority to access more for this system.
                        </CardText>
                        <CardActions border>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>GitHub</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="https://www.maipdf.com/pdf/?email=enifj1/5F6oMs" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>Project WireFrame</a></Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="http://52.53.232.172/" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" href="http://52.53.232.172/" target="_blank" />
                        </CardMenu>
                    </Card >
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {/* Project 01 */}
                    <Card shadow={5} style={{ minWidth: '360', minHeight: '510', margin: 'auto' }}>
                        <CardTitle id="card-title" style={{ color: "#fff", height: '360px', background: 'url(https://pbs.twimg.com/profile_images/1069715216307376128/_1uSHYr1_400x400.jpg) bottom/cover' }}
                        >Art-Galaxy Website&System</CardTitle>
                        <CardText>
                            A website and company assets management App was built with C#&ASP.NET.
                            User can login as client or manager. Customer can view product by its category and send request to server to get quote. Manage can upload content and classify the content based on OOP Model, also do some basic CRUD for the content and employees.
                    </CardText>
                        <CardActions border>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>GitHub</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>CodeCamp</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="http://www.artgalaxy.org/" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" href="http://www.artgalaxy.org/" target="_blank" />
                        </CardMenu>
                    </Card >
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    {/* Project 01 */}
                    <Card shadow={5} style={{ minWidth: '360', minHeight: '510', margin: 'auto' }}>
                        <CardTitle id="card-title" style={{ color: "#fff", height: '360px', background: 'url(https://www.qwoptechnologies.com/images/student-management.jpg) top/180%' }}
                        >Student Management System</CardTitle>
                        <CardText>
                            A student management system built based of Angular&NodeJS. The end user can add, edit, and delete events on this calendar. The calendar allows the user to navigate to the next and previous month, along with a yearly view to navigate to the specific month and year indicated. The calendar can also switch between a light and dark view.
                    </CardText>
                        <CardActions border>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>GitHub</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>CodeCamp</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="http://54.215.250.166/calendar/" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" href="http://54.215.250.166/calendar/" target="_blank" />
                        </CardMenu>
                    </Card >
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs id="tabs" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab className="tab" style={{ color: '#7d7d7d' }}>
                        React & JSX
                    </Tab>
                    <Tab className="tab" style={{ color: '#7d7d7d' }}>
                        Django & Python
                    </Tab>
                    <Tab className="tab" style={{ color: '#7d7d7d' }}>
                        ASP.NET Core & C#
                    </Tab>
                    <Tab className="tab" style={{ color: '#7d7d7d' }}>
                        Angular & Node.JS
                    </Tab>
                </Tabs>
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="project-content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div >
        )
    }
}

export default Projects;
