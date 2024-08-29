import React from "react";
import Image from "next/image";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const ServicesSection = () => {
  const services = [
    {
      title: "Theme Wordpress Development",
      description: "Expert in developing custom WordPress themes according to requirements and needs.",
      icon: "/assets/illustrations/undraw_wordpress.svg",
    },
    {
      title: "UX/UI Design",
      description: "Design and development of user experience and usability according to the needs of each project.",
      icon: "/assets/illustrations/undraw_website.svg",
    },
    {
      title: "Static Web",
      description: "Design, development and implementation of static websites.",
      icon: "/assets/illustrations/undraw_static_sites.svg",
    },
    {
      title: "Website Management",
      description: "Website maintenance and content development (SEO).",
      icon: "/assets/illustrations/undraw_mantenimiento.svg",
    }
  ];

  return (
    <section id="services" className="py-10">
      <h2 className="my-10 text-center font-custom text-4xl dark:text-white">
        Services
        <hr className="w-6 h-1 mx-auto my-4 bg-azulC border-0 rounded"></hr>
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div key={index} className="max-w-md bg-white dark:bg-gray-700 rounded-2xl shadow-md p-6 flex">
            <div className="w-1/3 flex items-center justify-center">
              <Image
                src={service.icon}
                alt={service.title}
                width={120}
                height={120}
                className="rounded-lg"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-center pl-6">
              <h3 className="text-xl font-custom mb-2 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
