import Content from '../Contents'
import Button from './Button'
import PartnershipLogos from './PartnershipLogos'
export default function Partnerships() {
  return (
    <>
      <Content
        header="Partnerships"
        content={[
          'We have partnered with some amazing organisations including Volunteering Auckland, TTCF, Auckland Council, childline, University of Auckland and others.',

          'We are always looking for ways to strengthen our relationships and outreach to the community.',

          'If our values match, please contact us now!',
        ]}
      />
      <div className="text-black bg-white md:mx-10 lg:mx-25 xl:mx-50 pt-5">
        <div className="flex justify-center">
          <PartnershipLogos />
        </div>
        <div className="flex justify-center">
          <Button text="Contact Us" link="contact-us" newTab={true} />
        </div>
      </div>
    </>
  )
}
