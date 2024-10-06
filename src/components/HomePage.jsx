import React from 'react';
import { motion } from "framer-motion";
import { Image } from 'astro:assets';
import { ChevronRight, Globe, Map, BookOpen } from 'lucide-react';
import earthAnimation from '../assets/earth-placeholder.png';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <motion.section 
        className="hero py-20 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-blue-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              PACE in the Classroom: Исследуем наш мир с помощью спутниковых данных
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Узнайте, как спутник PACE помогает нам изучать океаны, атмосферу и климат нашей планеты.
            </motion.p>
            <motion.a 
              href="/about" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Узнать больше
              <ChevronRight className="ml-2 w-5 h-5" />
            </motion.a>
          </div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Image 
              src={earthAnimation} 
              alt="Анимация Земли" 
              width={500} 
              height={500} 
              className="rounded-full shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.section>

      <section className="features py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Что вы найдете на нашем сайте
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureItem 
              icon={<Globe className="w-16 h-16 text-blue-600" />}
              title="Информация о PACE"
              description="Узнайте все о миссии спутника PACE и его значении для науки о Земле."
              delay={0.2}
            />
            <FeatureItem 
              icon={<Map className="w-16 h-16 text-green-600" />}
              title="Интерактивная карта"
              description="Исследуйте данные PACE на интерактивной карте мира."
              delay={0.4}
            />
            <FeatureItem 
              icon={<BookOpen className="w-16 h-16 text-yellow-600" />}
              title="Образовательные ресурсы"
              description="Доступ к урокам, заданиям и проектам для школьников."
              delay={0.6}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureItem({ icon, title, description, delay }) {
  return (
    <motion.div 
      className="bg-gray-50 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
    >
      {icon}
      <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}