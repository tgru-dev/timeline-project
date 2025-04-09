'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TimelineEvent } from '@/types';
import '../styles/Timeline.css';

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline = ({ events }: TimelineProps) => {
  return (
    <div className="relative container mx-auto px-4 py-8">
      {/* Vertical line - hidden on mobile */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#bca78f] opacity-30 hidden md:block" />
      
      <div className="space-y-8 md:space-y-16">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Event card */}
            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} relative`}>
              <Link href={`/details/${event.id}`} className="block">
                <div className="card cursor-pointer">
                  <div className="head">{event.date}</div>
                  <div className="content">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    {event.image && (
                      <img
                        src={event.image}
                        alt={event.title}
                        className="rounded-lg"
                      />
                    )}
                    <div className="mt-4">
                      <span className="button">Mehr Details</span>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Verbindungslinie - sichtbar auf allen Geräten */}
              <div className={`timeline-connector ${index % 2 === 0 ? 'left' : 'right'}`}></div>
            </div>

            {/* Timeline dot */}
            <div className="w-full md:w-2/12 flex justify-center my-4 md:my-0">
              <div className="w-6 h-6 bg-[#bca78f] rounded-full border-2 border-[#f5f1e8] shadow-lg relative z-10"></div>
            </div>

            {/* Empty space for alignment - hidden on mobile */}
            <div className="hidden md:block w-5/12" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline; 
