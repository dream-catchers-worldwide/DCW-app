import affiliations from '../../app/data/affiliations.json'
import SquarePics from './SquarePics'

export default function Affiliations() {
  return (
    <>
      <div className="text-black bg-white px-20 sm:px-10 md:mx-10 lg:mx-25 xl:mx-50 py-10">
        <p className="font-[Convergence] text-2xl pl-16 pb-10 lg:px-36 px-4">
          Affiliations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center gap-y-16 lg:px-36 px-4">
          {affiliations.map((affiliation, index) => (
            <SquarePics
              key={index}
              src={affiliation.image}
              alt={affiliation.caption}
              caption={affiliation.caption}
            />
          ))}
        </div>
      </div>
    </>
  )
}
