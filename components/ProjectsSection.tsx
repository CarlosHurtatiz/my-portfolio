import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import { FaCheckCircle } from "react-icons/fa";

const projects = [
  {
    name: "Class Scheduler",
    description:
      "PHP web app for Class Scheduler using MVC, Bootstrap Template and MySQL.",
    image: "/assets/images/programador.webp",
    current: true,
    github: "",
    link: "https://programador.elmaquetador.com/programador/phcrnr/",
    technologies: [
      "/assets/logos/bootstrap-logo.png",
      "/assets/logos/PHP-logo.svg",
      "/assets/logos/mysql.svg"
    ]
  },
  {
    name: "AppSalon",
    description:
      "Appsalon is a web app for scheduling appointments in barbershops and beauty salons developed with PHP, MySQL using MVC and a proprietary framework.",
    image: "/assets/images/appsalon.webp",
    current: true,
    github: "https://github.com/CarlosHurtatiz/APPSALON_MVC",
    link: "https://appsalon.elmaquetador.com/",
    technologies: [
      "/assets/logos/PHP-logo.svg",
      "/assets/logos/bootstrap-logo.png",
      "/assets/logos/mysql.svg"
    ]
  },
  {
    name: "My Portfolio APP",
    description:
      "This portfolio, built using Next.js, is where I showcase my skills and projects in a sleek, user-friendly interface.",
    image: "/assets/images/portfolio.webp",
    current: false,
    github: "https://github.com/carloshurtatiz/my-portfolio",
    link: "",
    technologies: [
      "/assets/logos/next-logo.jpg",
      "/assets/logos/react-logo.png",
      "/assets/logos/tailwind.svg"
    ]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="mb-24">
      <h2 className="my-12 text-center font-custom text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-azulC border-0 rounded"></hr>
      </h2>
      <p className="pb-12 text-center text-lg lg:text-xl leading-7 mb-8 lg:mb-10 text-neutral-600 dark:text-neutral-400">
        This is my journey through learning software development to become an Indie Creator!
      </p>
      <div className="flex flex-col space-y-8 md:space-y-12">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-12">
                  <div className="md:w-1/2 mb-4">
                    <Link href={project.link} target="_blank" >
                      <Image
                        src={project.image}
                        alt=""
                        width={500}
                        height={300}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>

                  <div className="md:w-1/2">
                    <h3 className="text-2xl lg:text-4xl font-custom mb-3 lg:mb-4">{project.name}</h3>

                    {project.current && (
                      <span className="bg-azulC text-white px-4 py-1 rounded-full absolute top-4 left-4 shadow-md flex items-center transition duration-300">
                        <FaCheckCircle className="mr-2" /> Current
                      </span>
                    )}
                    <p className="text-lg lg:text-xl leading-7 mb-4 lg:mb-6 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row items-center space-x-4">
                      <Link href={project.github} target="_blank">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer hover:-translate-y-1 transition-transform">
                          <BsGithub size={30} />
                        </div>
                      </Link>
                      {project.link !== "" && (
                        <Link href={project.link} target="_blank">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer hover:-translate-y-1 transition-transform">
                            <BsArrowUpRightSquare size={30} />
                          </div>
                        </Link>
                      )}
                      {project.technologies.map((tech, index) => (
                        <div key={index} className="w-12 h-12">
                          <Image
                            src={tech}
                            alt="Tech"
                            width={48}
                            height={48}
                            className="object-contain rounded-md hover:opacity-70 cursor-pointer hover:-translate-y-1 transition-transform"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection
