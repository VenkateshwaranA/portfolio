"use client"

import { motion } from "framer-motion"
import { Code, Megaphone, Palette } from 'lucide-react'
import { Tools } from "@/src/lib/constants"
import Image from "next/image"

const icons = {
  megaphone: Megaphone,
  code: Code,
  palette: Palette,
}

export function ServicesSection() {
  return (
    <section id="services" className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Technologies and <span className="text-primary">Tools</span>
          </h2>
        </motion.div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {Tools.map((service, index) => {
            // const Icon = icons[service.icon as keyof typeof icons]
            // const Icon = service.icon
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-lg bg-card text-center shadow-lg transition-transform hover:-translate-y-2"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Image src={service.icon} alt="logo" className="h-9 w-9"/>
                </div>
                <h3 className="mb-4 text-xl font-semibold">{service.name}</h3>
                <p className="text-muted-foreground">{}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

