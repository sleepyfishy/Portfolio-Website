"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Download, FileText, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ResumeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="resume" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">{"// Resume"}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 text-balance">
            Resume
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Download or view my resume for a full overview of my education,
            experience, and projects.
          </p>
        </motion.div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="overflow-hidden border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <motion.div
                  className="p-6 bg-primary/10 rounded-2xl"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <FileText className="w-12 h-12 text-primary" />
                </motion.div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Download My Resume
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Get a comprehensive overview of my education, experience,
                    projects, and skills in PDF format.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <Button asChild>
                      <a href="/resume.pdf" download>
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <Eye className="w-4 h-4 mr-2" />
                        View Online
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
