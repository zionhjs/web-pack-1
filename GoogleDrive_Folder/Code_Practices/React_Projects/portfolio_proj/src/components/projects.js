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
                        <CardTitle id="card-title" style={{ color: "#fff", height: '360px', background: 'url(https://reactjs.org/logo-og.png) center/cover' }}
                        >React Project #1</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodeCamp</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >

                    {/* Project 02 */}
                    <Card shadow={5} style={{ minWidth: '360', minHeight: '510', margin: 'auto' }}>
                        <CardTitle style={{ color: "#fff", height: '360px', background: 'url(https://reactjs.org/logo-og.png) center/cover' }}>React Project #2</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodeCamp</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >

                    {/* Project 03 */}
                    <Card shadow={5} style={{ minWidth: '360', minHeight: '510', margin: 'auto' }}>
                        <CardTitle style={{ color: "#fff", height: '360px', background: 'url(https://reactjs.org/logo-og.png) center/cover' }}>React Project #3</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodeCamp</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is Angular & NodeJS</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is Django&Python</h1></div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>This is C#&ASP</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs id="tabs" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab className="tab" style={{ color: '#7d7d7d' }}>
                        React & JavaScript
                    </Tab>
                    <Tab className="tab" style={{ color: '#7d7d7d' }}>
                        Angular & Node.JS
                    </Tab>
                    <Tab className="tab" style={{ color: '#7d7d7d' }}>
                        Django & Python
                    </Tab>
                    <Tab className="tab" style={{ color: '#7d7d7d' }}>
                        C# & ASP
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
