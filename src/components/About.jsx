import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-full bg-black text-gray-300 flex flex-col justify-center items-center py-8'>
      <div className='max-w-screen-lg w-full grid grid-cols-1 sm:grid-cols-2 gap-8 px-4'>
        <div className='sm:text-left text-center pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-600'>
            About
          </p>
        </div>
        <div className='sm:text-right'></div>
      </div>
      <div className='max-w-screen-lg w-full grid grid-cols-1 sm:grid-cols-2 gap-8 px-4'>
        <div className='sm:text-left text-center'>
          <p className='text-4xl font-bold'>
            Hi. I'm Md Parwez, nice to meet you. Please take a look around.
          </p>
          <p className='mt-4'>
            I am a passionate Full Stack Developer skilled in building excellent software that improves the lives of those around me. Whenever I encounter any website, I try to enhance its features, behavior, and user experiences.
          </p>
          <section className="py-8 w-full flex justify-center sm:justify-start" id="Coding Profiles">
            <div className="container px-4">
              <h2 className="text-2xl font-semibold">Coding Profiles</h2>
              <div className="mt-8 flex flex-col space-y-4">
                <div className="flex justify-center sm:justify-start">
                  <a
                    href="https://leetcode.com/u/imparwez/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    LeetCode Profile
                  </a>
                </div>
                <div className="flex justify-center sm:justify-start">
                  <a
                    href="https://www.geeksforgeeks.org/user/imparwez/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    GeeksforGeeks Profile
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className='sm:text-right text-center'>
          <section className="py-8 w-full" id="Study Overview">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-semibold">Education</h2>
              <div className="mt-12 flex flex-col space-y-8">
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full"></div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">2020-2024</h3>
                    <p>
                      Graduated from LPU (Lovely Professional University) with a B.Tech in Computer Science and Engineering.
                    </p>
                    <p className="mt-2">
                      Pursued an extra specialization in Data Science (AI & ML) to keep up with advancements in AI.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full"></div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">2019</h3>
                    <p>
                      Intermediate Science in Maths. Qualified in JEE Mains 2020 with the highest marks scored in Maths in Intermediate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
