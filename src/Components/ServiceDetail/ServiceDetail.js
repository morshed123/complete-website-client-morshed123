import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { useHistory } from 'react-router';
import { useParams } from 'react-router';
import { Button } from 'react-bootstrap';

const ServiceDetail = () => {
    const history = useHistory();
    const handleProceedCheckout = () => {

        history.push('/order');
    }

    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {

        fetch('https://young-mesa-72827.herokuapp.com/service/' + serviceId)
            .then(res => res.json())
            .then(data => setService(data));
    }, [serviceId])


    return (

        <div class=" shadow pt-4 mt-5 mx-5" >
            <Service showButton={false} service={service}>
            </Service>
            <Button onClick={handleProceedCheckout} className=" mt-3" variant="primary">Check Out </Button>
        </div>

    );
};

export default ServiceDetail;