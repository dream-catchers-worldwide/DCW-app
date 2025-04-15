import OurMissionPhoto from './OurMissionPhoto'

import Button from './Button'

export default function AboutUs() {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-4">
        <div className="lg:pl-20 pl-4 font-[sansation]">
          <p className="text-md lg:text-xl text-red-700">About Us</p>
          <p className=" text-md text-black lg:text-3xl font-bold pt-3 pb-4">
            Our Mission
          </p>
          <p className="text-md text-black lg:text-lg pr-10">
            At DreamCatchers WorldWide, we believe that everyone has the power
            to make a difference. Whether you are a volunteer, donor, or
            supporter, you can help us achieve our mission of providing services
            to vulnerable community groups.
          </p>
          <div className="pt-8">
            <Button text="Learn more" link="/mission-statement" />
          </div>
        </div>
        <div className="lg:pr-20 pr-4 pl-4 lg:pl-0">
          <OurMissionPhoto />
        </div>
      </div>
    </div>
  )
}
