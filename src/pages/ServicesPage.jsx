import React, { useState } from 'react';
import '../Styles/ServicesPage.css';

const services = [
    { title: 'Immigration Hearings and Appeals', description: 'Details about immigration hearings and appeals...' },
    { title: 'Express Entry Programs', description: 'Information about Express Entry programs...' },
    { title: 'Federal Skilled Trade Programs', description: 'Details about Federal Skilled Trade Programs...' },
    // Add other services here
];

const ServicesPage = () => {
    const [selectedService, setSelectedService] = useState(services[0]);

    return (
        <div className="services-page">
            <div className="sidebar">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`tab ${selectedService.title === service.title ? 'active' : ''}`}
                        onClick={() => setSelectedService(service)}
                    >
                        {service.title}
                    </div>
                ))}
            </div>
            <div className="content">
                <h2>{selectedService.title}</h2>
                <p>{selectedService.description}</p>
            </div>
        </div>
    );
};

export default ServicesPage;
