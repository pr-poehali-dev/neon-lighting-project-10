import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

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
  {
    url: 'https://cdn.poehali.dev/projects/36b10a90-991a-438d-881b-63bcb01371af/bucket/e6271912-da85-4aff-89f6-935ed3268732.jpg',
    caption: 'Танцующая пара'
  },
  {
    url: 'https://cdn.poehali.dev/projects/36b10a90-991a-438d-881b-63bcb01371af/bucket/e2962586-f023-4baa-ae20-24a6116292b0.jpg',
    caption: 'Тонкая работа с деталями'
  },
  {
    url: 'https://cdn.poehali.dev/projects/36b10a90-991a-438d-881b-63bcb01371af/bucket/6ebc617f-847e-4555-b5a7-d7ae2cfd58c9.jpg',
    caption: 'Сердце — автор внутри своей работы'
  },
  {
    url: 'https://cdn.poehali.dev/projects/36b10a90-991a-438d-881b-63bcb01371af/bucket/4677a6d8-4182-4bce-ae68-943ef8205613.jpg',
    caption: 'Воин — крупный план'
  },
  {
    url: 'https://cdn.poehali.dev/projects/36b10a90-991a-438d-881b-63bcb01371af/bucket/74eec1af-4377-4a2c-9125-d442e5fa4707.jpg',
    caption: 'Воин — в полный рост'
  },
  {
    url: 'https://cdn.poehali.dev/projects/36b10a90-991a-438d-881b-63bcb01371af/bucket/5a86d00e-c2a9-42aa-9d2e-8358add86fa4.jpg',
    caption: 'Начало — первые срезы бензопилой'
  },
  {
    url: 'https://cdn.poehali.dev/projects/36b10a90-991a-438d-881b-63bcb01371af/bucket/2ed6c84c-fc58-4f20-9c90-4752c73d2afa.jpg',
    caption: 'Башня — крупный план'
  },
  {
    url: 'https://cdn.poehali.dev/projects/36b10a90-991a-438d-881b-63bcb01371af/bucket/8aa390a8-2620-4924-a4a1-2d40f5f60b73.jpg',
    caption: 'Башня — автор рядом с работой'
  },
  {
    url: 'https://cdn.poehali.dev/projects/36b10a90-991a-438d-881b-63bcb01371af/bucket/2fee2eef-78b9-4a41-87b5-c6d0b6f447f1.jpg',
    caption: 'Внутри башни — расписные фигуры'
  },
  {
    url: 'https://cdn.poehali.dev/projects/36b10a90-991a-438d-881b-63bcb01371af/bucket/55fba473-5d44-4200-aa89-f788aa3435d9.jpg',
    caption: 'Роспись — финальный штрих'
  },
]

interface GallerySectionProps {
  isActive: boolean
}

export default function GallerySection({ isActive }: GallerySectionProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (i: number) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex(i => i !== null ? (i - 1 + photos.length) % photos.length : null)
  const next = () => setLightboxIndex(i => i !== null ? (i + 1) % photos.length : null)

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex])

  return (
    <>
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
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 flex-1 min-h-0"
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
              onClick={() => openLightbox(i)}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <Icon name="ZoomIn" size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs md:text-sm font-medium leading-tight">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              onClick={closeLightbox}
            >
              <Icon name="X" size={32} />
            </button>

            <button
              className="absolute left-4 text-white/70 hover:text-white transition-colors p-2"
              onClick={e => { e.stopPropagation(); prev() }}
            >
              <Icon name="ChevronLeft" size={48} />
            </button>

            <motion.div
              key={lightboxIndex}
              className="max-w-5xl max-h-[85vh] px-16 flex flex-col items-center gap-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={photos[lightboxIndex].url}
                alt={photos[lightboxIndex].caption}
                className="max-h-[75vh] max-w-full object-contain rounded-lg"
              />
              <p className="text-white/80 text-sm md:text-base">{photos[lightboxIndex].caption}</p>
              <div className="flex gap-2">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${i === lightboxIndex ? 'bg-amber-300 scale-125' : 'bg-white/40'}`}
                    onClick={() => setLightboxIndex(i)}
                  />
                ))}
              </div>
            </motion.div>

            <button
              className="absolute right-4 text-white/70 hover:text-white transition-colors p-2"
              onClick={e => { e.stopPropagation(); next() }}
            >
              <Icon name="ChevronRight" size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}