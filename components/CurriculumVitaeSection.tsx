import Image from "next/image";
import React from "react";

const CurriculumVitaeSection = () => {
  const englishCVUrl = "/docs/CV_EN_CarlosHurtatiz.pdf";
  const spanishCVUrl = "/docs/CV_ES_CarlosHurtatiz.pdf";

  return (
    <section id="cv" className="py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
          <Image
            className="rounded-lg hover:scale-105 transition duration-300"
            src="/assets/images/cv-image.webp"
            alt="Curriculum Vitae"
            width={300}
            height={166}
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-custom mb-4">Want me in your team?</h2>
          <h3 className="text-2xl text-gray-600 mb-6">Contact me and let&#39;s talk about it!</h3>
          <div className="flex space-x-4">
            <a href={englishCVUrl} className="bg-azulC text-white py-2 px-4 rounded-md hover:bg-azulH" download>
              Download English CV
            </a>
            <a href={spanishCVUrl} className="bg-azulC text-white py-2 px-4 rounded-md hover:bg-azulH" download>
              Descargar CV en Español
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumVitaeSection;
