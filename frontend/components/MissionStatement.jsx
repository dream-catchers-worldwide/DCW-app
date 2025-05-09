'use client'
import React from 'react'
import Contents from './Contents'
import { useLocale } from './LocaleContext'

export default function MissionStatement() {
  const { isUK } = useLocale()
  return (
    <div>
      {isUK ? (
        <Contents
          header="Mission Statement"
          content={[
            'DreamCatchers WorldWide UK is committed to advancing equitable access to education, wellbeing, arts and lifelong learning for individuals of all ages, with a dedicated focus on vulnerable and underserved communities across London, England. Our mission is to empower people through holistic, community-based programmes that nurture academic growth, digital and traditional literacy, emotional resilience, and meaningful social connection.',
            'We provide targeted academic support and literacy development for both youth and adults, recognising that foundational learning skills are critical to long-term empowerment. By offering access to educational materials, digital tools, and structured learning resources, we aim to reduce barriers to education and promote self-confidence, particularly for those facing socio-economic, cultural, or generational disadvantages.',
            'Central to our approach is the promotion of compassion and wellbeing, which we view as inseparable from educational achievement and community engagement. Our programmes integrate emotional and mental health awareness, mindfulness practices, and intergenerational support mechanisms to build a resilient, confident, and socially connected population.',
            'In pursuit of inclusive growth, we actively partner with local organisations, schools, libraries, community hubs, and service providers to maximise reach and cultural responsiveness. These collaborations ensure that our programmes are not only relevant and impactful, but deeply embedded in the communities they serve.',
            'We work closely with an evolving network of dedicated volunteers, mentors, and community champions, whose lived experiences and cultural insights inform the design and delivery of our initiatives. Through their contributions, we foster grassroots leadership and community ownership of shared outcomes.',
            'At the heart of our mission is the conviction that everyone—regardless of age, background, or circumstance—deserves the opportunity to learn, to connect, and to thrive. DreamCatchers WorldWide UK builds pathways to social inclusion, digital confidence, academic achievement, and civic participation, ensuring that no one is left behind in our rapidly changing world.',
          ]}
          image="/images/uk mission .png"
        />
      ) : (
        <Contents
          header="Mission Statement"
          content={[
            'DreamCatchers WorldWide New Zealand is committed to advancing equitable access to education, wellbeing, arts and lifelong learning for individuals of all ages, with a dedicated focus on vulnerable and underserved communities across Aotearoa. Our mission is to empower people through holistic, community-based programmes that nurture academic growth, digital and traditional literacy, emotional resilience, and meaningful social connection.',

            'We provide targeted academic support and literacy development for both youth and adults, recognising that foundational learning skills are critical to long-term empowerment. By offering access to educational materials, digital tools, and structured learning resources, we aim to reduce barriers to education and promote self-confidence, particularly for those facing socio-economic, cultural, or generational disadvantages.',

            'Central to our approach is the promotion of compassion and wellbeing, which we view as inseparable from educational achievement and community engagement. Our programmes integrate emotional and mental health awareness, mindfulness practices, and intergenerational support mechanisms to build a resilient, confident, and socially connected population.',

            'In pursuit of inclusive growth, we actively partner with local organisations, schools, libraries, marae, community hubs, and service providers to maximise reach and cultural responsiveness. These collaborations ensure that our programmes are not only relevant and impactful, but deeply embedded in the communities they serve.',

            'We work closely with an evolving network of dedicated volunteers, mentors, and community champions, whose lived experiences and cultural insights inform the design and delivery of our initiatives. Through their contributions, we foster grassroots leadership and community ownership of shared outcomes.',

            'At the heart of our mission is the conviction that everyone—regardless of age, background, or circumstance—deserves the opportunity to learn, to connect, and to thrive. DreamCatchers WorldWide New Zealand builds pathways to social inclusion, digital confidence, academic achievement, and civic participation, ensuring that no one is left behind in our rapidly changing world.',
          ]}
          image="/images/Mission Statement.png"
        />
      )}
    </div>
  )
}
