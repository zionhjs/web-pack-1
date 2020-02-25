import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Dialog, DialogTitle, DialogContent, DialogActions, Button, ProgressBar, Textfield } from 'react-mdl';
import axios from 'axios';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: ""
        };
        this.submitForm = this.submitForm.bind(this);

        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }

    handleOpenDialog() {
        this.setState({
            openDialog: true
        });
    }

    handleCloseDialog() {
        this.setState({
            openDialog: false
        });
    }

    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <img
                            src="https://www.zivarentals.com/wp-content/uploads/2017/09/avatar-1606916_960_720-1.png"
                            alt="avatar"
                            style={{ height: '240px' }} className="avatar-img"
                        />
                        <h2>Zion Hung</h2>
                        <p style={{ width: '60%', paddingTop: '1em', fontSize: '15px' }}>
                            I was trained as a Designer from the Toptier school of the world. I'm good at mathematics and logic, after few years career of Design, I shift my pivot to the Coding world. I love creating things and learning new stuffs.
                                In the SDE field, my skill covers Backend to Frontend and with product design. Making products is exciting for me, always fun to apply my skills and making things.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr style={{ width: "510px" }} />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '24px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true"
                                            style={{ fontSize: '30px' }} />
                                        (213) 822-4642
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hidden="true"
                                            style={{ fontSize: '30px' }} />
                                        hjszion@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-whatsapp" aria-hidden="true"
                                            style={{ fontSize: '30px' }} />
                                        zionhung 2138224642
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-map-marker" aria-hidden="true"
                                            style={{ fontSize: '30px' }} />
                                        Los Angeles CA   &nbsp; Irvine CA
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                        <div>
                            <Button style={{ width: "510px" }} colored onClick={this.handleOpenDialog} raised ripple>Send A Message</Button>
                            <Dialog className="contact-dialog-container" open={this.state.openDialog}>
                                <i className="fa fa-envelope-open-o" aria-hidden="true" style={{ fontSize: '60px', marginTop: "45px" }} />
                                <i className="fa fa-close" aria-hidden="true"
                                    style={{ fontSize: '30px', position: "absolute", right: "9px", top: "5px", cursor: "pointer" }}
                                    onClick={this.handleCloseDialog} />
                                <DialogTitle>Let's Chat!</DialogTitle>
                                <DialogContent className="dialog-content-container">
                                    <p>Provide your basic infomation here and I'll contact you back soon!.</p>
                                    <ProgressBar indeterminate />
                                    <form className="contact-form" action="https://formspree.io/mrgkgnpv" id="contact-form" method="post" target="_blank">
                                        <Textfield className="form-textfield"
                                            onChange={() => { }}
                                            floatingLabel
                                            name="name"
                                            label="Your name here..."
                                            style={{ width: '100%' }}
                                        />
                                        <Textfield className="form-textfield"
                                            onChange={() => { }}
                                            floatingLabel
                                            name="number"
                                            type="number"
                                            label="Your contact number..."
                                            style={{ width: '100%' }}
                                        />
                                        <Textfield className="form-textfield"
                                            onChange={() => { }}
                                            floatingLabel
                                            pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                                            error="Input is not a correct email!"
                                            name="email"
                                            label="Your email here..."
                                            style={{ width: '100%' }}
                                        />
                                        <Textfield className="form-textfield form-textfield-area"
                                            onChange={() => { }}
                                            floatingLabel
                                            name="message"
                                            label="Your messages here in detail..."
                                            style={{ width: '100%' }}
                                        />
                                        <Button type='submit' form="contact-form" style={{ fontSize: 18, fontWeight: 450, textAlign: "center", width: "100%" }}>Send</Button>
                                    </form>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact;
