"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const skillGroups = [
  {
    title: "Skills",
    items: [
      "Python",
      "C++",
      "C",
      "SQL",
      "Django",
      "JavaScript",
      "HTML/CSS",
      "Next.js",
      "React",
      "TypeScript",
      "CSS",
    ],
  },
  {
    title: "Languages",
    items: ["English", "Chinese", "Cantonese", "Malay"],
  },
  {
    title: "Interests",
    items: ["Stock trading", "Badminton", "Piano", "Reading", "Movies", "Gaming"],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">{"// Skills"}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 text-balance">
            Skills, Languages & Interests
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A quick snapshot of the languages I know, the tools I use, and the
            things I enjoy outside of coding.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <Card className="h-full border-2 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="px-3 py-1 font-mono text-xs"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}