import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div className="landing-container" style={{ height: '100%', width: '100%', margin: 'auto 0' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://www.zivarentals.com/wp-content/uploads/2017/09/avatar-1606916_960_720-1.png" alt="avatar" className="avatar-img"></img>
                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>
                            <hr />
                            <p style={{ width: "60%", margin: "0 auto", lineHeight: "27px" }}>HTML/CSS | Bootstrap | JQuery | JavaScript&NodeJS | C# | Python | Java | React | Angular | Django | Flask | Express | MongoDB | SQLite | Angular(MEAN)| ASP.NET Core | NPM | NuGet | Webpack | Gulp | Redux</p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="www.linkedin.com/in/zion-hung-a3214119a" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* GitHub */}
                                <a href="https://github.com/zionhung" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/* LeetCode */}
                                <a href="https://leetcode.com/zionhung/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-code" aria-hidden="true" />
                                </a>
                                {/* YouTube */}
                                <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;