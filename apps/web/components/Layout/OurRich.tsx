'use client';
import { WorldMap } from '@/components/ui/world-map';
import { motion } from 'motion/react';

export function OurRich() {
  return (
    <div className=" py-40 dark:bg-black w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white">
          Remote{' '}
          <span className="text-neutral-400">
            {'Connectivity'.split('').map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}>
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Break free from traditional boundaries. Work from anywhere, at the
          comfort of your own studio apartment. Perfect for Nomads and
          Travellers.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
          {
            start: { lat: 55.7558, lng: 37.6173 }, // Moscow
            end: { lat: 35.6895, lng: 139.6917 }, // Tokyo
          },
          {
            start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
            end: { lat: 48.8566, lng: 2.3522 }, // Paris
          },
          {
            start: { lat: -33.8688, lng: 151.2093 }, // Sydney
            end: { lat: -36.8485, lng: 174.7633 }, // Auckland
          },
          {
            start: { lat: 19.076, lng: 72.8777 }, // Mumbai
            end: { lat: 13.7563, lng: 100.5018 }, // Bangkok
          },
          {
            start: { lat: 40.7128, lng: -74.006 }, // New York
            end: { lat: 41.9028, lng: 12.4964 }, // Rome
          },
          {
            start: { lat: -34.6037, lng: -58.3816 }, // Buenos Aires
            end: { lat: -23.5505, lng: -46.6333 }, // São Paulo
          },
          {
            start: { lat: 25.276987, lng: 55.296249 }, // Dubai
            end: { lat: 1.3521, lng: 103.8198 }, // Singapore
          },
          {
            start: { lat: 60.1699, lng: 24.9384 }, // Helsinki
            end: { lat: 59.3293, lng: 18.0686 }, // Stockholm
          },
          {
            start: { lat: 39.9042, lng: 116.4074 }, // Beijing
            end: { lat: 31.2304, lng: 121.4737 }, // Shanghai
          },
        ]}
      />
    </div>
  );
}
