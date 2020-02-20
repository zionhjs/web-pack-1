import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Dialog, DialogTitle, DialogContent, DialogActions, Button, ProgressBar, Textfield } from 'react-mdl';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
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
                                        MySkypeID
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-map-marker" aria-hidden="true"
                                            style={{ fontSize: '30px' }} />
                                        My-location:&nbsp; Los Angeles CA
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
                                    <form className="contact-form" id="contact-form" action="mailto:hjszion@gmail.com" method="post"
                                        enctype="text/plain">
                                        <Textfield className="form-textfield"
                                            onChange={() => { }}
                                            floatingLabel
                                            label="Your name here..."
                                            style={{ width: '100%' }}
                                        />
                                        <Textfield className="form-textfield"
                                            onChange={() => { }}
                                            floatingLabel
                                            label="Your contact number..."
                                            style={{ width: '100%' }}
                                        />
                                        <Textfield className="form-textfield"
                                            onChange={() => { }}
                                            floatingLabel
                                            pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                                            error="Input is not a correct email!"
                                            label="Your email here..."
                                            style={{ width: '100%' }}
                                        />
                                        <Textfield className="form-textfield form-textfield-area"

                                            onChange={() => { }}
                                            floatingLabel
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
