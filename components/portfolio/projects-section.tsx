"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Folder } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Password Manager",
    description:
      "A simple program to add, view and remove passwords. Passwords are stored in an encrypted form.",
    image: "/projects/encrypted.png",
    technologies: ["Python", "Cryptography.fernet"],
    github: "https://github.com/sleepyfishy/Password-Manager",
    demo: "https://demo.com",
    featured: true,
    web: false,
    ai: true,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern responsive portfolio website with accessible UI designed to show projects and skills.",
    image: "/projects/website.png",
    technologies: ["TypeScript", "React", "Node.js", "TailwindCSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    web: true,
    ai: true,
  },
  {
    title: "Discord Bot",
    description:
      "A Discord bot that utilises Gemini's API to allow users to talk with Gemini.",
    image: "/projects/discord.jpg",
    technologies: ["Python", "discord.py", "google-genai"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    web: false,
    ai: true,
  },
  {
    title: "Stock Portfolio Tracker",
    description:
      "Work in progress.",
    image: "/projects/budget.jpg",
    technologies: ["Python", "yfinance", "..."],
    github: "https://github.com",
    featured: true,
    web: true,
    ai: false,
  },
]

const categories = ["All", "Featured", "Web", "AI"]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : activeFilter === "Featured"
      ? projects.filter((p) => p.featured)
      : activeFilter === "Web"
      ? projects.filter((p) => !!p.web)
      : activeFilter === "AI"
      ? projects.filter((p) => !!p.ai)
      : projects

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-mono text-sm">{"// Projects"}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 text-balance">
            Things I&apos;ve Built
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            building creative solutions
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category)}
              className="font-mono"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              layout
            >
              <Card className="h-full flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
                {/* Project image or placeholder */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Folder className="w-16 h-16 text-primary/40" />
                    </motion.div>
                  )}
                  {project.featured && (
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                      Featured
                    </Badge>
                  )}
                </div>

                <CardHeader>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(project.technologies ?? []).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="border-t border-border pt-4">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      <span className="sr-only">GitHub</span>
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span className="sr-only">Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
