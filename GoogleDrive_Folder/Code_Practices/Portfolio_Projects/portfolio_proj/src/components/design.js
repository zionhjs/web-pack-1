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
                        <CardTitle id="card-title" style={{ color: "black", height: '360px', background: 'url(https://i.loli.net/2020/02/26/3yf96TPi8Ntuh2M.png) center/cover' }}
                        >Enchanted Diamonds</CardTitle>
                        <CardText style={{ height: '90' }}>
                            Enchanted Diamonds a New York City–based online retailer that has had a showroom in Times Square(Closed recently). I worked as a UI/UX designer for designing their Website&App. Welcome to visit their website in the below demo button. You also can check my design by click "Design PDF" button below.
                        </CardText>
                        <CardActions border>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="https://www.maipdf.com/pdf/?email=enhs/qzdOfTJQ" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>Design PDF</a></Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="https://www.maipdf.com/pdf/?email=enhs/qzdOfTJQ" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" href="#" target="_blank" colored />
                        </CardMenu>
                    </Card >

                    {/* Project 02 */}
                    <Card shadow={5} style={{ minWidth: '360', minHeight: '510', margin: 'auto' }}>
                        <CardTitle id="card-title" style={{ color: "black", height: '360px', background: 'url(https://i.pinimg.com/originals/08/20/a3/0820a3bb9a23939f20dc58972c8f9a92.jpg) bottom/cover' }}
                        >Baby Phat</CardTitle>
                        <CardText style={{ height: '90', overflow: "auto" }}>
                            Baby phat is an American apparel brand. Baby Phat's celebrity fans include Alicia Keys, Rihanna, Chrissy Teigen, Kim Kardashian, Christina Millian, Britney Spears, Missy Elliot and Monica (many of whom sat front row during her Fashion Week performances or attended the highly sought-after after-parties). I worked as a UI/UX designer for designing their ecommerce Website&App. Welcome to visit their website in the below demo button. You also can check my design by click "Design PDF" button below.
                        </CardText>
                        <CardActions border>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="https://www.maipdf.com/pdf/?email=enI8y72w3/EtI" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>Design PDF</a></Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="https://babyphat.com/" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" href="https://babyphat.com/" target="_blank" />
                        </CardMenu>
                    </Card >
                    {/* Project 03 */}
                    <Card shadow={5} style={{ minWidth: '360', minHeight: '510', margin: 'auto' }}>
                        <CardTitle id="card-title" style={{ color: "black", height: '360px', background: 'url(https://i.loli.net/2020/02/26/r4XHeUu6TCzMGoq.png) center/cover' }}
                        >Dwell CBD</CardTitle>
                        <CardText style={{ height: '90' }}>
                            Dwell is a lifestyle brand, mental impacts, helps people slow down, be more mindful, take care of themselves Direct to consumer for foreseeable future.
                            I worked as a UI/UX designer for designing their Website&App&Brand. Welcome to visit their website in the below demo button. You also can check my design by click "Design PDF" button below.
                        </CardText>
                        <CardActions border>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="https://www.maipdf.com/pdf/?email=eniNEtJlm1FC." target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>Design PDF</a></Button>
                            <Button style={{ textDecoration: "none", color: "#005C97" }}><a href="https://dwellcbd.com/" target="_blank" style={{ textDecoration: "none", color: "#005C97" }}>LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" href="#" target="_blank" colored />
                        </CardMenu>
                    </Card >
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">

                </div>
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
