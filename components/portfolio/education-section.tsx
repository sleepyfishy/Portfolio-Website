"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Hong Kong University of Science and Technology (HKUST)",
    location: "Clear Water Bay, Hong Kong",
    period: "2025 - 2029 (Expected)",
    courses: [
      "COMP 2011 C++ Programming",
      "COMP 1023 Python Programming",
      "COMP 2711 Discrete Mathematics",
      "MATH 1014 Calculus II",
      "FINA 2203 Fundamentals of Business Finance",
    ],
    score: "3.73/4.3",
    scoreLabel: "GPA",
  },
  {
    degree: "International Baccalaureate Diploma Programme (IBDP)",
    school: "Fairview International School",
    location: "Malaysia",
    period: "2022 - 2024",
    courses: [],
    score: "41/45",
    scoreLabel: "IBDP Score",
  },
]

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">{"// Education"}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 text-balance">
            Academic Background
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
                <CardHeader className="bg-primary/5 border-b border-border pt-8 pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="p-3 bg-primary rounded-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <GraduationCap className="w-6 h-6 text-primary-foreground" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {edu.degree}
                        </h3>
                        <p className="text-primary font-medium">{edu.school}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      {edu.location ? (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-1">
                  <div className={`grid gap-6 ${edu.courses.length > 0 ? "md:grid-cols-2" : "md:grid-cols-1"}`}>
                    {edu.courses.length > 0 ? (
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">
                          Relevant Coursework
                        </h4>
                        <ul className="space-y-2">
                          {edu.courses.map((course, i) => (
                            <motion.li
                              key={i}
                              className="flex items-center gap-2 text-muted-foreground"
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: 0.5 + i * 0.1 }}
                            >
                              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                              {course}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Academic Performance
                      </h4>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-primary">
                          {edu.score}
                        </span>
                        <span className="text-muted-foreground">{edu.scoreLabel}</span>
                      </div>
                    </div>
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
