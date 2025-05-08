import services from '../../app/data/projects.json'
import SquarePics from './SquarePics'

export default function Services() {
  return (
    <>
      <div className="text-black bg-white px-20 sm:px-10 md:mx-10 lg:mx-25 xl:mx-50 py-10">
        <p className="font-[Convergence] text-2xl pl-16 pb-10 lg:px-36 px-4">
          Services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center gap-y-16 lg:px-36 px-4">
          {services.map((project, index) => (
            <SquarePics
              key={index}
              src={project.image}
              alt={project.caption}
              caption={project.caption}
              url={project.url}
              moreUrl={project.moreUrl}
              moreText={project.moreText}
            />
          ))}
        </div>
      </div>
    </>
  )
}
