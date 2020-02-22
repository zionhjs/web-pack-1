import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{ marginTop: '0px' }}>{this.props.experienceName}</h4>
                    <p>{this.props.experienceDescription}</p>
                    <a href={this.props.link} target="_blank" style={{ color: "#00d2ff" }}>{this.props.link}</a>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;