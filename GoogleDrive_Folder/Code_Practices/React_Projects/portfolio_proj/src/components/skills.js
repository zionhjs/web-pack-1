import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';


class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'inline', width: '10%' }}>
                            {this.props.skill}
                        </div>
                        <div style={{ display: 'inline', width: '90%' }}>
                            <ProgressBar style={{ margin: 'auto', width: '75%' }} progress={this.props.progress} />
                        </div>
                    </div>
                </Cell>
            </Grid >
        )
    }
}

export default Skills;
