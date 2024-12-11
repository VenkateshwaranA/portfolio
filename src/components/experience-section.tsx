"use client"

import { motion } from "framer-motion"
import { EXPERIENCES } from "@/src/lib/constants"

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-muted/50 py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            My <span className="text-primary">Experiences</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            There are many variations of passages ofLorem Ipsum available, but the
            majority havesuffered alteration in some form
          </p>
        </motion.div>
        {/* <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"> */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 ">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg bg-card p-6 shadow-lg"
            >
              <div className="mb-4">
                <span className="text-sm text-muted-foreground">
                  {experience.period}
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-primary">
                {experience.title}
              </h3>
              <p className="mb-4 text-sm font-medium">{experience.company}</p>
              <p className="text-muted-foreground">{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

