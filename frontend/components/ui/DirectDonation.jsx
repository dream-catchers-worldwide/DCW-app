'use client'
import Content from '../Contents'
import { useLocale } from '../LocaleContext'

export default function DirectDonation() {
  const { isUK } = useLocale()

  return (
    <div>
      {isUK ? (
        <Content
          header="Direct Donations"
          content={[
            'To send a direct donation to our charity account please do so at:',
            'DreamCatchers WorldWide',
            '(Lloyds TSB)',
            'SC: 77-91-29',
            'ACC: 24972260',
            'Ref: Name + Donation',
            'You are welcome to send donations via mail. If possible, we recommend you send a cheque for security purposes. Our address is:',
            'DreamCatchers WorldWide',
            '54 Fossil Road, Lewisham, London SE13 7DE, England',
          ]}
          image="/donate.jpg"
        />
      ) : (
        <Content
          header="Direct Donations"
          content={[
            'To send a direct donation to our charity account please do so at:',
            'DreamCatchers WorldWide',
            '(Kiwibank)',
            '38-9017-0215180-00',
            'Ref:',
            'Name + Donation',
            'Posted Donations',
            'You are welcome to send donations via mail. If possible, we recommend you send a cheque for security purposes. Our address is:',
            'DreamCatchers WorldWide',
            '272 New Windsor Road, New Windsor, Auckland 0600',
          ]}
          // image="/donate.jpg"
        />
      )}
    </div>
  )
}
