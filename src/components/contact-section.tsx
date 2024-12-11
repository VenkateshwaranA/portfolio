// "use client"

// import { motion } from "framer-motion"
// import { Button } from "@/src/components/ui/button"
// import { Input } from "@/src/components/ui/input"
// import { Textarea } from "@/src/components/ui/textarea"
// import { SOCIAL_LINKS } from "@/src/lib/constants"

// export function ContactSection() {
//   return (
//     <section id="contact" className="py-16 bg-slate-400 ">
//       <div className="container">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
//             Contact <span className="text-primary">Me</span>
//           </h2>
//           <p className="mt-4 text-muted-foreground">
//             There are many variations of passages ofLorem Ipsum available, but the
//             majority havesuffered alteration in some form
//           </p>
//         </motion.div>
//         <div className="mt-16 flex flex-col gap-8 md:grid-cols-2">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="space-y-4"
//           >

//           </motion.div>
//           <motion.form
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true}}
//             // className="space-y-4 justify-center"
//           >
//             <div className="ml-96 w-1/4 space-y-4 ">
//             <Input placeholder="Your Name" />
//             <Input type="email" placeholder="Your Email" />
//             <Textarea placeholder="Your Message" className="min-h-[150px]" />
//             <Button type="submit" size="lg">
//               Send Message
//             </Button>

//             </div>
//             <div className="mt-2 flex space-x-4 justify-center">
//               {SOCIAL_LINKS.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.url}
//                   className="text-muted-foreground hover:text-primary"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <span className="sr-only">{link.name}</span>
//                   <link.icon className={`fab fa-${link.icon} text-2xl`} />
//                 </a>
//               ))}
//           </div>
//           </motion.form>

//         </div>
//       </div>
//     </section>
//   )
// }

"use client";

import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { SOCIAL_LINKS } from "@/src/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Contact <span className="text-[#FFB800]">Me</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            {/* Additional content can be added here */}
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-600">
                Feel free to reach out for any inquiries or collaborations. I'm always excited to discuss new projects and opportunities.
              </p>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-6"
          >
            <Input placeholder="Your Name" className="w-full p-3" />
            <Input type="email" placeholder="Your Email" className="w-full p-3" />
            <Textarea
              placeholder="Your Message"
              className="w-full p-3 min-h-[150px]"
            />
            <div className="flex justify-center">
              <Button type="submit" size="lg" className="bg-[#FFB800] hover:bg-[#FFB800]/90 text-white px-8 py-3">
                Send Message
              </Button>
            </div>
          </motion.form>
        </div>
        <div className="mt-16 flex justify-center space-x-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="text-gray-600 hover:text-[#FFB800] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{link.name}</span>
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}