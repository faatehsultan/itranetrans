import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function TopTripBanner({ srcProp, destProp, setScheduleForOuterUser }) {
  const router = useRouter();
  const [src, setSrc] = useState(srcProp);
  const [dest, setDest] = useState(destProp);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      router.query.schedule_id
    ) {
      setLoading(true);
      fetch(`/api/getScheduleByID?schedule_id=${router.query.schedule_id}`)
        .then(res => res.json())
        .then(data => {
          setSrc(data[0].src)
          setDest(data[0].dest)
          if(setScheduleForOuterUser) {
            setScheduleForOuterUser(data[0])
          }
          setLoading(false);
        }
        )
        .catch(err => {
          console.log(err)
          setLoading(false);
        }
        )
    }
  }, [router.query])

  return (
    <div className='py-12 flex justify-center content-center' style={{ backgroundImage: "linear-gradient(to right, #f33333, #ff7738)", color: "white" }}>
      {!loading && src && dest && <strong className='text-3xl'>{src} - {dest}</strong>}
    </div>
  )
}
