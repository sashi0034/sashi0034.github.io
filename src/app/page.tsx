'use client'

import { ArrowDownIcon } from '@heroicons/react/24/outline'
import { AnimatedSection } from './components/AnimatedSection'
import { ProjectTree } from './components/ProjectTree'
import { projects } from './types/project'
import Image from 'next/image'

// 画像のベースパスを設定
const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/sashi0034.github.io' : ''

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-white to-primary-50">
        <div className="container text-center">
          <AnimatedSection>
            <h1 className="heading-1 mb-6">
              <span className="block text-primary-600">sashi</span>
              <span className="block">portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              クリエイティブなソリューションを提供する
              <br className="hidden sm:block" />
              エンジニアのポートフォリオサイトへようこそ
            </p>
            <AnimatedSection
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a href="#about" className="btn">
                詳しく見る
                <ArrowDownIcon className="ml-2 h-5 w-5" />
              </a>
            </AnimatedSection>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <AnimatedSection
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDownIcon className="h-6 w-6 text-primary-600" />
        </AnimatedSection>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center mb-4">
                <Image
                  src={`${basePath}/images/avatar/@sashi2024_335x335.png`}
                  alt="sashi2024のアイコン"
                  width={64}
                  height={64}
                  className="rounded-full border border-gray-200"
                  priority
                />
                <h3 className="heading-3 ml-4">プロフィール</h3>
              </div>
              <p className="text-gray-600 mb-6">
                ここにあなたの自己紹介文を入れてください。
                あなたの経歴、スキル、興味のある分野などを
                簡潔に説明しましょう。
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-24 font-medium">スキル</span>
                  <span className="text-gray-600">ここにスキルを記載</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 font-medium">経験</span>
                  <span className="text-gray-600">ここに経験を記載</span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-primary-100 rounded-lg p-8"
            >
              <h3 className="heading-3 mb-4">スキルセット</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">スキル1</span>
                    <span className="text-sm text-gray-600">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section bg-gray-50">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Projects</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            {projects.map((project) => (
              <ProjectTree
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-white">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Contact</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  メッセージ
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn">
                  送信する
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}