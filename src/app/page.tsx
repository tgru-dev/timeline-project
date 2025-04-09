import Timeline from '@/components/Timeline';
import { events } from '@/data/events';
import BackToTopButton from '@/components/BackToTopButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8">
      <div className="relative flex place-items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-[#a48765] font-cormorant">
          Leipziger Buchmesse Exkursion
        </h1>
      </div>

      <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
        <div className="w-full max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-[#a48765] opacity-30"></div>
            </div>
          </div>
          <p className="mt-4 text-center text-[#bca78f]">
            Die Leipziger Buchmesse ist eine der ältesten und traditionsreichsten Buchmessen der Welt. 
            Dieser Zeitstrahl zeigt die wichtigsten Highlights der Buchmesse die wir erlebet haben.
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl">
        <Timeline events={events} />
      </div>

      <BackToTopButton />
    </main>
  );
}
