"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { MapPin, Calendar } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [bubbles, setBubbles] = useState<any[] | null>(null)

  useEffect(() => {
    const generated = Array.from({ length: 12 }).map((_, i) => {
      const size = Math.random() * 16 + 6
      const posX = Math.random() * 100
      const posY = Math.random() * 100
      const duration = Math.random() * 5 + 5
      const delay = Math.random() * 4
      const color = i % 2 === 0 ? 'rgba(52, 211, 153, 0.4)' : 'rgba(52, 211, 153, 0.3)'
      return { i, size, posX, posY, duration, delay, color }
    })

    setBubbles(generated)
  }, [])

  return (
    <section id="about-me" className="py-24 relative" ref={ref}>
      {/* Contrasting background */}
      <div className="absolute inset-0 bg-card/50 border-y border-border" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      
      {/* Floating bubbles for this section (client-only) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles &&
          bubbles.map(({ i, size, posX, posY, duration, delay, color }) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                left: `${posX}%`,
                top: `${posY}%`,
                background: color,
              }}
              animate={{ y: [0, -20, 0], x: [0, 10, 0], opacity: [0.35, 0.65, 0.35] }}
              transition={{ duration, delay, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
          ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Profile Photo */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-border bg-card">
                  <Image
                    src="/profile.jpeg"
                    alt="Profile photo"
                    width={224}
                    height={224}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-3 -right-3 w-48 h-48 md:w-56 md:h-56 rounded-2xl border-2 border-primary/30 -z-10" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="flex-1 text-center md:text-left"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-primary font-mono text-sm">{"// About Me"}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Who I Am
              </h2>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Hong Kong</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Graduating 2029</span>
                </div>
              </div>
              
              <p className="text-foreground leading-relaxed mb-4">
                I&apos;m a first-year Computer Science student at the Hong Kong University of Science and Technology, with a strong interest in building practical software. 
                Currently, I&apos;m expanding my skill set into neural networks and data analytics. I&apos;ve been learning how to work with data using Excel and SQL, and exploring how machine learning models can be applied to real-world problems. 
                I&apos;m particularly interested in the intersection of AI and software engineering, and how intelligent systems can enhance everyday applications.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m always looking to learn quickly, build meaningful projects, and deepen my understanding of how technology works under the hood.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
