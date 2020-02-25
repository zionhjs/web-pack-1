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
                        <CardText>
                            Public informational website for Field Test, <a href="http://field-test.co" target="_blank">http://field-test.co</a> a subsidiary of The Lion'Esque Group.
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
                        <CardText>
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
                        <CardText>
                            This is my personal website which is a collection of my full-stack works and Designes.

                    </CardText>
                        <CardActions border>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>GitHub</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}>CodeCamp</Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="http://smokey.fm/" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" href="http://smokey.fm/" target="_blank" />
                        </CardMenu>
                    </Card >
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is Other Designs</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs id="tabs" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab className="tab" style={{ color: '#7d7d7d' }}>
                        UI/UX-Page-One
                    </Tab>
                    <Tab className="tab" style={{ color: '#7d7d7d' }}>
                        UI/UX-Page-Two
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
