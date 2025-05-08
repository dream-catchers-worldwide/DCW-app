'use client'
import Button from './ui/Button'
import { useLocale } from '@/components/LocaleContext'

export default function JoinUs() {
  const { isUK, toggleLocale } = useLocale()
  return (
    <>
      <div className="text-black bg-white px-20 sm:px-10 md:mx-10 lg:mx-25 xl:mx-50 py-10">
        <div className="font-[Convergence] text-3xl">Join Us</div>
        <div className="font-[Convergence] text-2xl pt-10">Volunteer</div>
        <>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
              {/* Text: spans full width on small, 2/3 on larger screens */}
              <div className="sm:col-span-2 space-y-3 sm:space-y-4 text-md py-5 font-[Convergence]">
                At DreamCatchers WorldWide, we are committed to providing
                services and support to vulnerable community groups. Our goal is
                to empower those in need and create positive change.
                <br /> One of the ways you can help us achieve this is by
                volunteering your time and skills. We welcome volunteers from
                all backgrounds and experiences, and we offer a range of
                volunteer opportunities to suit your interests and availability.
                <br />
                We partner with Volunteering Auckland since 2016 to offer
                rewarding and enriching volunteering opportunities.
              </div>

              {/* Image: takes 1/3 on larger screens, full width & centered on small */}
              <div className="flex justify-center sm:justify-end">
                <img src="/VolunteeringAuckland.png" className="h-40 w-auto" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-1 gap-1 mt-4 text-center">
            <div className="font-[Convergence] lg:text-xl text-md ">
              Check for current vacancies!
            </div>
            {isUK ? (
              <Button text="Go!" link="/contact-us" newTab={true} />
            ) : (
              <Button
                text="Go!"
                link="https://volunteeringauckland.org.nz/orgs/1923-dreamcatchers-worldwide"
                newTab={true}
              />
            )}
          </div>
          <div>
            <img src="images/Volunteer .png" />
          </div>
        </>
      </div>
    </>
  )
}
