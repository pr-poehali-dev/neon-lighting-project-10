import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

const steps = [
  {
    label: 'Процесс',
    url: 'https://cdn.poehali.dev/projects/36b10a90-991a-438d-881b-63bcb01371af/bucket/678f193b-1849-46d9-8982-fdf6b6ce521c.jpg',
    description: 'Работа бензопилой — из цельного бревна рождается образ'
  },
  {
    label: 'Готовая работа',
    url: 'https://cdn.poehali.dev/projects/36b10a90-991a-438d-881b-63bcb01371af/bucket/ce4234b7-7dac-4b37-92ed-6930dd4f10e0.jpg',
    description: 'Женщина с ребёнком — финальная скульптура в парке'
  },
  {
    label: 'Автор',
    url: 'https://cdn.poehali.dev/projects/36b10a90-991a-438d-881b-63bcb01371af/bucket/0e33defe-40b2-459b-9302-079590fe0ab4.jpg',
    description: 'Мастер рядом со своей работой после завершения'
  },
]

interface WorkSectionProps {
  isActive: boolean
}

export default function WorkSection({ isActive }: WorkSectionProps) {
  const [active, setActive] = useState(0)

  return (
    <section id="work" className="relative h-screen w-full snap-start flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 overflow-hidden">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-white mb-3 shrink-0"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        История одной работы
      </motion.h2>
      <motion.p
        className="text-neutral-400 text-lg mb-8 shrink-0"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        От бревна до скульптуры в парке
      </motion.p>

      <motion.div
        className="flex gap-3 mb-6 shrink-0"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {steps.map((step, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
              i === active
                ? 'bg-amber-300 text-black border-amber-300'
                : 'bg-transparent text-white/60 border-white/20 hover:border-white/50 hover:text-white'
            }`}
          >
            {step.label}
          </button>
        ))}
      </motion.div>

      <motion.div
        className="flex gap-6 flex-1 min-h-0"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="relative flex-1 min-h-0 overflow-hidden rounded-xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={steps[active].url}
              alt={steps[active].label}
              className="w-full h-full object-cover object-top"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                className="text-white text-base md:text-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {steps[active].description}
              </motion.p>
            </AnimatePresence>
          </div>

          <button
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-1 transition-colors"
            onClick={() => setActive(i => (i - 1 + steps.length) % steps.length)}
          >
            <Icon name="ChevronLeft" size={24} />
          </button>
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-1 transition-colors"
            onClick={() => setActive(i => (i + 1) % steps.length)}
          >
            <Icon name="ChevronRight" size={24} />
          </button>
        </div>

        <div className="hidden lg:flex flex-col gap-3 w-48 shrink-0">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative overflow-hidden rounded-lg flex-1 transition-all ${
                i === active ? 'ring-2 ring-amber-300' : 'opacity-50 hover:opacity-80'
              }`}
            >
              <img src={step.url} alt={step.label} className="w-full h-full object-cover object-top" />
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
