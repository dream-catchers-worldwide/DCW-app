'use client'
import { useLocale } from '../LocaleContext'

export default function OurMissionPhoto() {
  const { isUK } = useLocale()
  return (
    <div>
      {isUK ? (
        <img
          src="/images/mission uk.png"
          className="lg:mt-20 rounded-4xl w-120"
        />
      ) : (
        <img
          src="/images/Mission image .png"
          className=" lg:mt-20 rounded-4xl w-120"
        />
      )}
    </div>
  )
}
