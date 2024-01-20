import StickerPlacer from "@/components/StickerPlacer"
import Pattern from "@/illustrations/Pattern"

export default function Home() {
  return (
    <main className="w-full h-screen bg-white flex items-start pt-[12vw] justify-center overflow-x-hidden">
      <div className="w-96 h-72 z-10 relative">
        <StickerPlacer />
      </div>
      <div className="md:block hidden">
        <Pattern className="pointer-events-none absolute inset-0" />
        <div className="border-[256px] border-white inset-0 absolute blur-3xl" />
      </div>
    </main>
  )
}
