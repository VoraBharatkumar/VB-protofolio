'use client'

import { Reveal } from './reveal'
import { ProjectCard, type Project } from './project-card'

const projects: Project[] = [
  {
    name: 'National Jungle Safari',
    type: 'Frontend',
    technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'GitHub'],
    images: [
      '/projects/project1/image1-1.png',
      '/projects/project1/image1-2.png',
      '/projects/project1/image1-3.png',
      '/projects/project1/image1-4.png',
      '/projects/project1/image1-5.png',
    ],
    github: 'https://github.com/VoraBharatkumar/Jungle-Safari',
    demo: 'https://jungle-safari-five.vercel.app',
  },
  {
    name: 'Beauty-Pro',
    type: 'Fullstack',
    technologies: ['Next.js', 'React.js', 'JavaScript', 'MongoDB', 'NextAuth', 'GitHub'],
    images: [
      '/projects/project2/image2-1.png',
      '/projects/project2/image2-2.png',
      '/projects/project2/image2-3.png',
      '/projects/project2/image2-4.png',
      '/projects/project2/image2-5.png',
    ],
    github: 'https://github.com/VoraBharatkumar/Beauty_Pro',
    demo: 'https://beauty-pro-woad.vercel.app/',
  },
  {
    name: 'Task-Manager',
    type: 'Fullstack',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'MongoDB', 'NextAuth', 'GitHub'],
    images: [
      '/projects/project3/image3-1.png',
      '/projects/project3/image3-2.png',
      '/projects/project3/image3-3.png',
      '/projects/project3/image3-4.png',
      '/projects/project3/image3-5.png',
    ],
    github: 'https://github.com/VoraBharatkumar/Task-Manager',
    demo: 'https://task-manager-jade-mu-30.vercel.app/',
  },
  {
    name: 'Patola Hub',
    type: 'Frontend',
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'GitHub'],
    images: [
      '/projects/project4/image4-1.png',
      '/projects/project4/image4-2.png',
      '/projects/project4/image4-3.png',
      '/projects/project4/image4-4.png',
    ],
    github: 'https://github.com/VoraBharatkumar/Patola_hub',
    demo: 'https://patola-hub.vercel.app/',
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative px-6 md:px-12 lg:px-20 py-20 sm:py-28 lg:py-32 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-purple-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center mb-12 sm:mb-16">
        <h2 className="text-balance font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1E3A8A] leading-tight">
          Projects built with{' '}
          <span className="text-[#2563EB]">modern technologies</span>
        </h2>
        <p className="mt-3.5 text-pretty text-sm sm:text-base leading-relaxed text-[#64748B] font-normal">
          A selection of frontend and fullstack applications delivered with clean, maintainable code.
        </p>
      </div>

      <div className="relative grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.08} className="h-full">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}