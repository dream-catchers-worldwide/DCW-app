import Content from '../Contents'
import Button from './Button'

export default function sponsorships() {
  return (
    <>
      <Content
        header="Sponsorships (CSR)"
        content={[
          'Copy for this section is:',

          'Partner with DreamCatchers WorldWide to make a meaningful impact. Your support helps us deliver education, wellbeing, and community programmes for vulnerable groups. Whether through funding, resources, or volunteering, together we can create real change—locally and globally. Talk with us today about our Sponsorship Portfolio Offerings.',
        ]}
        bgColor="gray"
        image="/images/CSR.png"
        // imagePosition="right"
      />
      <div className="text-black bg-gray-100 md:mx-10 lg:mx-25 xl:mx-50 pt-5">
        <div className="flex justify-center">
          <Button text="Contact Us" link="contact-us" newTab={true} />
        </div>
      </div>
    </>
  )
}
