'use Client'
import Content from '../Contents'
import Button from './Button'
import PartnershipLogos from './PartnershipLogos'
import PartnershipLogosUK from './PartnershipLogosUK'
import { useLocale } from '../LocaleContext'

export default function Partnerships() {
  const { isUK } = useLocale()
  return (
    <>
      {isUK ? (
        <div>
          <Content
            header="Partnerships"
            content={[
              'We have partnered with some amazing organisations and businesses including Zhulin Hidden Village, Chin International, Catford Print Centre, Professional Member of People Dancing, Himalya Restaurant and Flight Club Shoreditch.',
              'We are always looking for ways to strengthen our relationships and outreach to the community.',

              'If our values match, please contact us now!',
            ]}
          />
          <div className="text-black bg-white md:mx-10 lg:mx-25 xl:mx-50 pt-5">
            <div className="flex justify-center">
              <PartnershipLogosUK />
            </div>
            <div className="flex justify-center">
              <Button text="Contact Us" link="contact-us" newTab={true} />
            </div>
          </div>
        </div>
      ) : (
        <div>
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
        </div>
      )}
    </>
  )
}
