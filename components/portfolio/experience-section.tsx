"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar, Building2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Tech Company Ltd.",
    location: "Hong Kong",
    period: "Jun 2024 - Aug 2024",
    description:
      "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver features on time.",
    achievements: [
      "Improved application performance by 40% through code optimization",
      "Implemented new user authentication system",
      "Led code reviews for junior developers",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    title: "Teaching Assistant",
    company: "HKUST",
    location: "Hong Kong",
    period: "Sep 2023 - Dec 2023",
    description:
      "Assisted in teaching introductory programming courses. Held office hours and graded assignments.",
    achievements: [
      "Mentored 50+ students in programming fundamentals",
      "Created supplementary learning materials",
      "Maintained 95% positive feedback rating",
    ],
    technologies: ["Python", "Java", "Git"],
  },
  {
    title: "Freelance Developer",
    company: "Self-employed",
    location: "Remote",
    period: "2022 - Present",
    description:
      "Building websites and applications for small businesses and startups. Managing projects from conception to deployment.",
    achievements: [
      "Delivered 10+ successful projects",
      "Built long-term relationships with 5 recurring clients",
      "Expanded skillset to include mobile development",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">
            {"// Experience"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 text-balance">
            Where I&apos;ve Worked
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 w-0.5 h-full bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3 }}
                />

                {/* Content */}
                <div
                  className={`md:w-1/2 pl-8 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <motion.div
                    className="bg-card p-6 rounded-xl border border-border shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">
                        {exp.title}
                      </h3>
                    </div>

                    <div
                      className={`flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>

                    <p
                      className={`text-muted-foreground mb-4 ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {exp.description}
                    </p>

                    <ul
                      className={`space-y-2 mb-4 ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className={`text-sm text-muted-foreground flex items-start gap-2 ${
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <span className="text-accent mt-1">→</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="font-mono text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
