import { motion } from "framer-motion"

const photos = [
  {
    url: 'https://cdn.poehali.dev/projects/36b10a90-991a-438d-881b-63bcb01371af/bucket/fd349e73-9be8-49c1-8dfe-dda70aef1051.jpg',
    caption: 'Работа над медведем'
  },
  {
    url: 'https://cdn.poehali.dev/projects/36b10a90-991a-438d-881b-63bcb01371af/bucket/0f1a091d-98e6-4664-bc42-eb0400cf2285.jpg',
    caption: 'Бензопила — главный инструмент'
  },
  {
    url: 'https://cdn.poehali.dev/projects/36b10a90-991a-438d-881b-63bcb01371af/bucket/51e0588e-7b8b-4f4f-b017-4beadff60207.jpg',
    caption: 'Медведь с медалью'
  },
  {
    url: 'https://cdn.poehali.dev/projects/36b10a90-991a-438d-881b-63bcb01371af/bucket/9cccfb88-868c-4df4-8ab7-4b5734f0b8ef.jpg',
    caption: 'Финальная доработка образа'
  },
  {
    url: 'https://cdn.poehali.dev/projects/36b10a90-991a-438d-881b-63bcb01371af/bucket/2db3b848-bf3b-45dc-835d-cdcb9453b94a.jpg',
    caption: 'Дивий Град — фестиваль скульптуры'
  },
]

interface GallerySectionProps {
  isActive: boolean
}

export default function GallerySection({ isActive }: GallerySectionProps) {
  return (
    <section id="gallery" className="relative h-screen w-full snap-start flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 overflow-hidden">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-white mb-8 shrink-0"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Процесс создания
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 flex-1 min-h-0"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-lg group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-xs md:text-sm font-medium leading-tight">{photo.caption}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
