'use client';

import Link from 'next/link';
import { detailedEvents } from '@/data/events';
import BackToTopButton from '@/components/BackToTopButton';
import { use } from 'react';
import Image from 'next/image';

interface DetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function DetailsPage({ params }: DetailsPageProps) {
  const resolvedParams = use(params);
  const event = detailedEvents.find((e) => e.id === parseInt(resolvedParams.id));

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4 text-[#a48765]">Event nicht gefunden</h1>
        <Link href="/" className="text-[#a48765] hover:underline">
          Zurück zur Timeline
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-block mb-8 text-[#a48765] hover:underline">
          ← Zurück zur Timeline
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {event.image && (
            <div className="relative h-64 md:h-96 w-full">
              <Image
                src={event.image}
                alt={event.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          )}

          <div className="p-6">
            <div className="mb-4">
              <span className="inline-block bg-[#a48765] text-white px-3 py-1 rounded-full text-sm">
                {event.date}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#a48765]">{event.title}</h1>
            
            <div className="prose max-w-none">
              <p className="text-[#493638] text-lg mb-6">{event.description}</p>

              {event.longDescription && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-[#a48765]">Ausführliche Beschreibung</h2>
                  <p className="text-[#493638]">{event.longDescription}</p>
                </div>
              )}

              {event.additionalInfo && event.additionalInfo.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-[#a48765]">Zusätzliche Informationen</h2>
                  <div className="space-y-4">
                    {event.additionalInfo.map((info, index) => (
                      <div key={index} className="border-l-4 border-[#a48765] pl-4">
                        <h3 className="text-xl font-semibold text-[#a48765]">{info.title}</h3>
                        <p className="text-[#493638]">{info.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {event.media && event.media.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-[#a48765]">Medien</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {event.media.map((media, index) => (
                      <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src={media.url}
                          alt={media.title || `Bild ${index + 1}`}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                        {media.title && (
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
                            <p className="text-white text-sm">{media.title}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {event.links && event.links.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-[#a48765]">Weitere Links</h2>
                  <ul className="space-y-2">
                    {event.links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#a48765] hover:underline"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <BackToTopButton />
      </div>
    </div>
  );
} 