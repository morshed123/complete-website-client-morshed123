import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact my-5 py-5">
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    <h5 className="text-primary">Contact</h5>
                    <h1>Quick Enquiry</h1>
                    <small>Please fill the below form</small>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="" className="-3">
                        <div className="form-group ">
                            <input type="text" className="form-control mb-3" placeholder="Email Address *" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control mb-3" placeholder="Subject *" />
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control mb-3" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button type="button" className="btn btn-info mb-4 text-white"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;