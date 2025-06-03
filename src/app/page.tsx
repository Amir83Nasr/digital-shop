import Banner from '@/components/banner'
import Welcome from '@/components/Welcome'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between">
      <Banner />
      <Welcome />
    </div>
  )
}
