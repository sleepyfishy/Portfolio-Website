"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const codeLines = [
  "const developer = {",
  '  name: "CS Student",',
  '  university: "HKUST",',
  "  skills: ['React', 'TypeScript', 'Python'],",
  "  passion: 'Building cool stuff',",
  "};",
]

export function HeroSection() {
  const [bubbles, setBubbles] = useState<any[] | null>(null)

  useEffect(() => {
    const generated = Array.from({ length: 30 }).map((_, i) => {
      const size = Math.random() * 18 + 8
      const delay = Math.random() * 5
      const duration = Math.random() * 10 + 15
      const startX = Math.random() * 120
      const startY = Math.random() * 100 + 120
      const driftX = Math.random() * 100 - 50
      const colorVariant = i % 3
      const color =
        colorVariant === 0
          ? "rgba(52, 211, 153, 0.5)"
          : colorVariant === 1
          ? "rgba(52, 211, 153, 0.2)"
          : "rgba(52, 211, 153, 0.35)"

      return { i, size, delay, duration, startX, startY, driftX, color }
    })

    setBubbles(generated)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background bubbles (client-only, generated after mount) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles &&
          bubbles.map(({ i, size, delay, duration, startX, startY, driftX, color }) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                left: `${startX}%`,
                background: color,
                boxShadow: i % 2 === 0 ? "0 0 20px rgba(52, 211, 153, 0.3)" : "none",
              }}
              initial={{ y: startY, opacity: 0.3, scale: 0.5 }}
              animate={{
                y: [startY, -200],
                opacity: [0.3, 0.8, 0.6, 0.3],
                scale: [0.5, 1, 0.8],
                x: [0, driftX],
              }}
              transition={{ duration, delay, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
            />
          ))}
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block text-primary font-mono text-sm mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {"// Welcome to my portfolio"}
          </motion.span>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Your next developer{" "}
            <span className="text-primary">in progress.</span>
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-lg text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Computer Science student at HKUST, passionate about building
            innovative solutions and turning ideas into reality through code.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Button size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="https://github.com/sleepyfishy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/kaishentan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              href="mailto:sethtan0001@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right side - Code animation */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-card rounded-xl border border-border shadow-2xl overflow-hidden">
            {/* Code editor header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-accent" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <span className="ml-4 text-xs text-muted-foreground font-mono">
                developer.ts
              </span>
            </div>
            {/* Code content */}
            <div className="p-6 font-mono text-sm">
              {codeLines.map((line, index) => (
                <motion.div
                  key={index}
                  className="flex"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.15 }}
                >
                  <span className="text-muted-foreground w-8 select-none">
                    {index + 1}
                  </span>
                  <span className="text-foreground">
                    {line.includes("const") && (
                      <>
                        <span className="text-primary">const</span>
                        {line.replace("const", "")}
                      </>
                    )}
                    {line.includes(":") && !line.includes("const") && (
                      <>
                        <span className="text-accent">
                          {line.split(":")[0]}
                        </span>
                        :{line.split(":").slice(1).join(":")}
                      </>
                    )}
                    {line === "};" && line}
                  </span>
                </motion.div>
              ))}
              <motion.span
                className="inline-block w-2 h-5 bg-primary ml-8 mt-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.a
          href="#about-me"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm mb-2">Scroll down</span>
          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  )
}
