import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-full bg-black text-gray-300 flex justify-center items-center'>
      <div className='max-w-screen-lg w-full grid grid-cols-1 sm:grid-cols-2 gap-8 px-4'>
        <div className='sm:text-right pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-600'>
            About
          </p>
        </div>
        <div className='sm:text-left text-center'>
          <p className='text-4xl font-bold'>
            Hi. I'm Md Parwez, nice to meet you. Please take a look around.
          </p>
          <p className='mt-4'>
            I am a passionate Full Stack Developer skilled in building excellent software that improves the lives of those around me. Whenever I encounter any website, I try to enhance its features, behavior, and user experiences.
          </p>
        </div>
      </div>
      <section className="py-8 w-full flex justify-center" id="Study Overview">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold">Education</h2>
          <div className="mt-12 flex flex-col space-y-8">
            <div className="flex items-start">
              <div className="w-4 h-4 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full"></div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">2024</h3>
                <p>
                  Graduated from LPU (Lovely Professional University) In B.TECH COMPUTER SCIENCE AND ENGINEERING.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-4 h-4 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full"></div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">2024</h3>
                <p>
                  Data Science(AI & ML) Pursued Interest Based Extra Specialization in Data Science field to not lag behind coz of Advancements in AI
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-4 h-4 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full"></div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">2019</h3>
                <p>
                  Intermediate Science in (I.SC in Maths) Qualified in Jee Mains- 2020 And highest number scored in Math in Intermediate.
                </p>
              </div>
            </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;



