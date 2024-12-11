"use client"

import { motion } from "framer-motion"
import { PORTFOLIO_IMAGES } from "@/src/lib/constants"

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            There are many variations of passages ofLorem Ipsum available, but the
            majority havesuffered alteration in some form, by injected humour
          </p>
        </motion.div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_IMAGES.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={image}
                alt={`Portfolio ${index + 1}`}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-lg font-bold text-white">View Project</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

