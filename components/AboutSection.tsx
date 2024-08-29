import React from "react"

const skills = [
  { skill: "JavaScript" },
  { skill: "React" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Wordpress" },
  { skill: "Joomla" },
  { skill: "Prestashop" },
  { skill: "Divi" },
  { skill: "Elementor" },
  { skill: "MySQL" },
  { skill: "Git" },
  { skill: "GitHub" },
  //{ skill: "Nestjs" },
  //{ skill: "Angular" },
  //{ skill: "Nextjs" },
  //{ skill: "TypeScript" },
  //{ skill: "Python" },
  //{ skill: "C#" },
  //{ skill: ".NET" },
  //{ skill: "SQL" },
  //{ skill: "SQL Server" },
  //{ skill: "PostgreSQL" },
  //{ skill: "MongoDB" },
  //{ skill: "Sonarqube" },
  //{ skill: "GitLab" },
  //{ skill: "Socket.io" },
  //{ skill: "draw.io" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h2 className="text-center font-custom text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-azulC border-0 rounded"></hr>
        </h2>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h3 className="text-center text-2xl font-custom mb-6 md:text-left">
              Get to know me!
            </h3>
             
            <br />
            <p>
            Frontend web developer, passionate about learning new technologies. 
            I have experience communicating with clients to understand their needs by developing 
            user experience and product usability with web tools, databases, analytics, and automation.


            
            <br />
            <br />

            I solve problems using Content Management Systems (CMS) such as Wordpress and UX/UI. 
            My quick learning and communication skills foster efficient collaboration in different work environments.
            </p>
            <br />
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h3 className="text-2xl font-custom mb-6">My Skills</h3>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
