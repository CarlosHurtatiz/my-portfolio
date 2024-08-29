import React from "react";
import Image from 'next/image';

const TimelineSection = () => {
  const timelineEvents = [
    {
      id: 1,
      date: "Nov. 2023",
      title: "Miella",
      subtitle: "FullStack Developer",
      type: "Freelance Project",
      description: "Fullstack development to create a website showcasing the Miella project for Marmato. The website highlighted its history, achievements and products for the Caldas Development Corporation.",
      links: { label: "Check it out!", url: "https://miella.com.co/" },
      logo: "/assets/logos/miella-logo.png",
      tags: ["UX - UI", "Web Development", "Project Management"]
    },
    {
      id: 2,
      date: "Sept. 2023",
      title: "Sena Soft",
      subtitle: "Software development (free category)",
      type: "Software Competition",
      description: "Participation in the Sena Soft 2023 competition in Pereira, Colombia. I build an App that allows me to connect different points on a map to find the closest and cheapest route for a trip between selected points.",
      links: { label: "Check the LinkedIn post I made about it!", url: "https://www.linkedin.com/posts/softesteban_sena-senasoft2023-qvision-activity-7113503895057772544-Q2M-?utm_source=share&utm_medium=member_desktop" },
      logo: "/assets/logos/sena-soft.png",
      tags: ["Software development", "Javascript", "React", "MySQL", "PHP", "API"]
    },
    {
      id: 3,
      date: "Mar - Apr. 2023",
      title: "Orden Politico",
      subtitle: "Wordpress Theme Developer & Plugin",
      type: "Freelance Project",
      description: "Design and development from scratch of a Wordpress template and development of a plugin for searching and displaying candidate results using the map of Colombia.",
      links: { label: "Check it out!", url: "https://ordenpolitico.com/" },
      logo: "/assets/logos/ordenpolitico.svg",
      tags: ["Leadership", "UX - UI", "Project Management", "Web Development", "Design"]
    },
    
    {
      id: 4,
      date: "Jan. - Feb. 2023",
      title: "Cafe Vivento",
      subtitle: "Design and development of a WordPress website using Elementor, as well as the implementation of the MercadoPago payment gateway.",
      type: "Full-time Job",
      description: "Contributed to the entire software development lifecycle, from understanding client needs to leading software developers to meet sprints. Developed databases, web APIs, and integrated applications with services.",
      links: {},
      logo: "/assets/logos/cafevivento.svg",
      tags: ["Design", "Elementor", "Wordpress", "Plugins", "MercadoPago"]
    },
  ];

  return (
    <section id="timeline">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h2 className="text-center font-custom text-4xl">
          Timeline
          <hr className="w-6 h-1 mx-auto my-4 bg-azulC border-0 rounded"></hr>
        </h2>
        <div className="container mx-auto">
          <div className="flex flex-col">
            {timelineEvents.map((event) => (
              <div key={event.id} className="py-4 md:py-8">
                <div className="flex flex-col bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden">
                  <div className="p-6 flex flex-col md:flex-row items-center">
                    <Image
                      className="m-4 rounded-md"
                      src={event.logo}
                      alt={`Logo ${event.title}`}
                      width={100}
                      height={100}
                    />
                    <div className="md:pl-4">
                      <span className="font-custom dark:text-white bg-sky-200 dark:bg-sky-900">
                        {event.date}
                      </span>
                      <h3 className="text-lg font-custom dark:text-white">{event.title}</h3>
                      {event.subtitle && (
                        <h4 className="text-base text-gray-500 dark:text-gray-300">{event.subtitle}</h4>
                      )}
                      <p className="text-gray-700 dark:text-gray-300 font-custom mt-2">{event.type}</p>
                      <p className="text-gray-700 dark:text-gray-300 pb-2">{event.description}</p>
                      {event.links && event.links.url && (
                        <a
                          href={event.links.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {event.links.label || "Check it out!"}
                        </a>
                      )}
                      <div className="mt-2">
                        {event.tags.map((tag, index) => (
                          <span key={index} className="text-sm bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded px-2 py-1 mr-2">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
