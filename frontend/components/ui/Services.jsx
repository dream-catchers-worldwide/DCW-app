'use client'
import servicesNZ from '../../app/data/servicesNZ.json'
import servicesUK from '../../app/data/servicesUk.json'
import SquarePics from './SquarePics'
import { useLocale } from '../LocaleContext'

export default function Services() {
  const { isUK } = useLocale()
  return (
    <>
      <div>
        {isUK ? (
          <div className="text-black bg-white px-20 sm:px-10 md:mx-10 lg:mx-25 xl:mx-50 py-10">
            <p className="font-[Convergence] text-2xl pl-16 pb-10 lg:px-36 px-4">
              Services
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center gap-y-16 lg:px-36 px-4">
              {servicesUK.map((service, index) => (
                <SquarePics
                  key={index}
                  src={service.image}
                  alt={service.caption}
                  caption={service.caption}
                  url={service.url}
                  moreUrl={service.moreUrl}
                  moreText={service.moreText}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-black bg-white px-20 sm:px-10 md:mx-10 lg:mx-25 xl:mx-50 py-10">
            <p className="font-[Convergence] text-2xl pl-16 pb-10 lg:px-36 px-4">
              Services
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center gap-y-16 lg:px-36 px-4">
              {servicesNZ.map((service, index) => (
                <SquarePics
                  key={index}
                  src={service.image}
                  alt={service.caption}
                  caption={service.caption}
                  url={service.url}
                  moreUrl={service.moreUrl}
                  moreText={service.moreText}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
