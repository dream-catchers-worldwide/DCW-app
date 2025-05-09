'use client'
import dynamic from 'next/dynamic'
//for mismatch error
const Donate = dynamic(() => import('@/components/Donate'), {
  ssr: false,
})

export default function DonatePage() {
  return <Donate />
}
