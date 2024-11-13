import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
//import 'swiper/swiper-bundle.min.css';
import './ServicesCarousel.css'; // Custom CSS for styling

const ServicesCarousel = () => {
  const services = [
    {
      title: "Immigration Hearings and Appeals",
      icon: "fas fa-gavel",
      description: "Expert legal guidance and representation for hearings and appeals related to immigration.",
      link: "/services",
    },
    {
      title: "Express Entry Programs",
      icon: "fas fa-map-signs",
      description: "Guidance for skilled workers applying for permanent residence under Canada's Express Entry system.",
      link: "/services",
    },
    {
      title: "Federal Skilled Trade Programs",
      icon: "fas fa-hammer",
      description: "Helping skilled trade workers immigrate to Canada and obtain permanent residency.",
      link: "/services",
    },
    {
      title: "Canadian Experience Class",
      icon: "fas fa-briefcase",
      description: "Assisting applicants with Canadian work experience in applying for permanent residency.",
      link: "/services",
    },
    {
      title: "Provincial Nominee Programs (PNP)",
      icon: "fas fa-map-marker-alt",
      description: "Helping you navigate Canada's Provincial Nominee Programs for a smoother process.",
      link: "/services",
    },
    {
      title: "Refugee Cases Appeals and Filing",
      icon: "fas fa-hands-helping",
      description: "Legal support and advice for individuals seeking refugee protection in Canada.",
      link: "/services",
    },
    {
      title: "Humanitarian & Compassionate Cases",
      icon: "fas fa-heart",
      description: "Assistance with applications based on humanitarian and compassionate grounds.",
      link: "/services",
    },
    {
      title: "Detention and Immigration Appeal Hearings",
      icon: "fas fa-balance-scale",
      description: "Representation for individuals facing immigration detention or appeal hearings.",
      link: "/services",
    },
    {
      title: "Criminal Inadmissibility Cases",
      icon: "fas fa-ban",
      description: "Providing guidance for overcoming criminal inadmissibility and entering Canada.",
      link: "/services",
    },
    {
      title: "Work Permits/LMIAs",
      icon: "fas fa-briefcase",
      description: "Helping employers and foreign workers secure work permits and Labour Market Impact Assessments (LMIAs).",
      link: "/services",
    },
    {
      title: "PR Card Renewals",
      icon: "fas fa-id-card",
      description: "Assistance with renewing your Permanent Resident card and maintaining residency status.",
      link: "/services",
    },
    {
      title: "Citizenship Application Filing",
      icon: "fas fa-star",
      description: "Guiding you through the application process to become a Canadian citizen.",
      link: "/services",
    },
    {
      title: "Study Permit Application Filing",
      icon: "fas fa-graduation-cap",
      description: "Help for students looking to study in Canada by obtaining the necessary study permits.",
      link: "/services",
    },
    {
      title: "Visitor Visa/Super Visa",
      icon: "fas fa-passport",
      description: "Assisting you with visitor visa and super visa applications to visit family or friends in Canada.",
      link: "/services",
    },
    {
      title: "Intra-Company Transfers",
      icon: "fas fa-building",
      description: "Guiding employees and employers through the intra-company transfer process for working in Canada.",
      link: "/services",
    },
  ];

  return (
    <section className="services-section">
      <h2 className="services-heading">Choose Your Required Services</h2>
      <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={30} // Increase space between slides
  slidesPerView={3}
  navigation
  pagination={{ clickable: true }}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    320: {
      slidesPerView: 1, // Show 1 slide on very small screens
    },
    768: {
      slidesPerView: 1, // Show 1 slide on mobile screens
    },
    1024: {
      slidesPerView: 2, // Show 2 slides on tablets
    },
    1210: {
      slidesPerView: 3, // Show 3 slides on large screens
    },  
  }}
  className="services-carousel"
>
  {services.map((service, index) => (
    <SwiperSlide key={index}>
      <div className="service-card">
        <div className="service-icon">
          <i className={service.icon}></i>
        </div>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
        <Link to={service.link} className="read-more-link">Read More</Link>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </section>
  );
};

export default ServicesCarousel;
