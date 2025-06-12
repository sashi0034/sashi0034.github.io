"use client";

import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { AnimatedSection } from "./components/AnimatedSection";
import Image from "next/image";
import {
  FaGithub,
  FaGamepad,
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaMicrosoft,
  FaWindows,
  FaSteam,
  FaTrophy,
} from "react-icons/fa";

// 画像のベースパスを設定
const isProd = process.env.NODE_ENV === "production";
const basePath = "";

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
              <div className="flex justify-center mt-4">
                <FaGamepad className="w-12 h-12 text-primary-600" />
              </div>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              ゲーム開発をしています
              {/* <br className="hidden sm:block" />
              エンジニアのポートフォリオサイトへようこそ */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
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
                <h3 className="heading-3 ml-4">sashi</h3>
              </div>
              <p className="text-gray-600 mb-6">
                ゲームを遊ぶことはもちろんのこと、ゲーム開発に関する技術が大好きで、日々学習しながら開発を行っています。
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-24 font-medium">GitHub</span>
                  <a
                    href="https://github.com/sashi0034"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 flex items-center gap-2"
                  >
                    <FaGithub className="w-5 h-5" />
                    @sashi0034
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="w-24 font-medium">研究分野</span>
                  <span className="text-gray-600">HPC</span>
                </div>
                <div>
                  <span className="w-24 font-medium block mb-2">経歴</span>
                  <ul className="list-disc list-inside space-y-1 ml-6">
                    <li className="text-gray-600">
                      2025年4月 - 現在: 京都大学 大学院情報学研究科
                      通信情報システムコース 修士課程
                    </li>
                    <li className="text-gray-600">
                      2021年4月 - 2025年3月: 京都大学 工学部情報学科
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-primary-100 rounded-lg p-8"
            >
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=sashi0034&layout=compact&theme=onedark&langs_count=20"
                alt="Top Languages"
                className="rounded-lg shadow-lg w-full"
              />
            </AnimatedSection>
          </div>

          {/* Skills Section - Full Width */}
          <AnimatedSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12"
          >
            <h3 className="heading-3 text-center mb-8">習得済み</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="flex flex-col items-center">
                <div className="bg-primary-50 rounded-full px-4 py-2 border border-primary-200 hover:border-primary-400 transition-colors flex items-center gap-2">
                  <FaGamepad className="w-4 h-4 text-primary-600" />
                  <span>C++</span>
                  <span className="text-xs text-gray-600 mt-1">
                    最も使用した言語 (C++20)
                  </span>
                </div>
              </div>
              <div className="bg-primary-50 rounded-full px-4 py-2 border border-primary-200 hover:border-primary-400 transition-colors flex items-center gap-2">
                <FaGamepad className="w-4 h-4 text-primary-600" />
                <span>DirectX 12</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary-50 rounded-full px-4 py-2 border border-primary-200 hover:border-primary-400 transition-colors flex items-center gap-2">
                  <FaGamepad className="w-4 h-4 text-primary-600" />
                  <span>HLSL</span>
                </div>
              </div>
              <div className="bg-primary-50 rounded-full px-4 py-2 border border-primary-200 hover:border-primary-400 transition-colors flex items-center gap-2">
                <FaGamepad className="w-4 h-4 text-primary-600" />
                <span>Siv3D</span>
                <span className="text-xs text-gray-600 mt-1">
                  コミット実績あり
                </span>
              </div>
              <div className="bg-primary-50 rounded-full px-4 py-2 border border-primary-200 hover:border-primary-400 transition-colors flex items-center gap-2">
                <FaGamepad className="w-4 h-4 text-primary-600" />
                <span>Unity</span>
                <span className="text-xs text-gray-600 mt-1">
                  アルバイトで四年以上開発
                </span>
              </div>
              <div className="bg-primary-50 rounded-full px-4 py-2 border border-primary-200 hover:border-primary-400 transition-colors flex items-center gap-2">
                <FaCode className="w-4 h-4 text-primary-600" />
                <span>TypeScript</span>
                <span className="text-xs text-gray-600 mt-1">angel-lsp</span>
              </div>
              <div className="bg-primary-50 rounded-full px-4 py-2 border border-primary-200 hover:border-primary-400 transition-colors flex items-center gap-2">
                <FaGamepad className="w-4 h-4 text-primary-600" />
                <span>Pixelart</span>
                <span className="text-xs text-gray-600 mt-1">
                  SHIBUYA PIXEL ART 2024 受賞
                </span>
              </div>
              <div className="bg-primary-50 rounded-full px-4 py-2 border border-primary-200 hover:border-primary-400 transition-colors flex items-center gap-2">
                <FaGamepad className="w-4 h-4 text-primary-600" />
                <span>Blender</span>
                <span className="text-xs text-gray-600 mt-1">アセット作成</span>
              </div>
              <div className="bg-primary-50 rounded-full px-4 py-2 border border-primary-200 hover:border-primary-400 transition-colors flex items-center gap-2">
                <FaServer className="w-4 h-4 text-primary-600" />
                <span>Python</span>
              </div>
              <div className="bg-primary-50 rounded-full px-4 py-2 border border-primary-200 hover:border-primary-400 transition-colors flex items-center gap-2">
                <FaServer className="w-4 h-4 text-primary-600" />
                <span>OpenMP</span>
              </div>
              <div className="bg-primary-50 rounded-full px-4 py-2 border border-primary-200 hover:border-primary-400 transition-colors flex items-center gap-2">
                <FaServer className="w-4 h-4 text-primary-600" />
                <span>CUDA</span>
                <span className="text-xs text-gray-600 mt-1">
                  GPGPU (研究分野)
                </span>
              </div>
              <div className="bg-primary-50 rounded-full px-4 py-2 border border-primary-200 hover:border-primary-400 transition-colors flex items-center gap-2">
                <FaTools className="w-4 h-4 text-primary-600" />
                <span>Git</span>
              </div>
              <div className="bg-primary-50 rounded-full px-4 py-2 border border-primary-200 hover:border-primary-400 transition-colors flex items-center gap-2">
                <FaTools className="w-4 h-4 text-primary-600" />
                <span>GitHub Actions</span>
              </div>
              <div className="bg-primary-50 rounded-full px-4 py-2 border border-primary-200 hover:border-primary-400 transition-colors flex items-center gap-2">
                <FaCode className="w-4 h-4 text-primary-600" />
                <span>コンパイラ開発</span>
                <span className="text-xs text-gray-600 mt-1">
                  C Compiler for x86_64
                </span>
              </div>
              <div className="bg-primary-50 rounded-full px-4 py-2 border border-primary-200 hover:border-primary-400 transition-colors flex items-center gap-2">
                <FaCode className="w-4 h-4 text-primary-600" />
                <span>LSP</span>
                <span className="text-xs text-gray-600 mt-1">
                  Language Server Protocol
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-primary-800 hover:bg-primary-200 transition-colors group relative">
                <FaMicrosoft className="w-5 h-5" />
                <span>C#</span>
                <span className="text-xs text-gray-600 mt-1">
                  Unity 外の .NET も
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-primary-800 hover:bg-primary-200 transition-colors group relative">
                <FaWindows className="w-5 h-5" />
                <span>WPF</span>
                <span className="text-xs text-gray-600 mt-1">
                  アルバイトで開発
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Section */}
      <section id="project" className="section bg-gray-50">
        <div className="container">
          <AnimatedSection>
            <h2 className="heading-2 text-center mb-6">Projects</h2>
            <div className="space-y-12">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-primary-800 mb-2">
                      Mutable 50
                    </h3>
                    <p className="text-gray-600 mb-4">
                      C++ / Siv3Dで開発した 2D アクションゲームです。
                      <span className="font-bold">
                        Siv3D バンダイナムコスタジオ杯 2023 で最優秀賞
                      </span>
                      を受賞しました。 その後、個人で Steam
                      でリリースして販売しています。 独自 HLSL
                      シェーダーによる斬新なグラフィック、躍動的なアニメーション表現などを取り入れることで野心的なゲームに仕上げました。
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <a
                        href="https://github.com/sashi0034/Sukuu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-800 hover:bg-gray-200 transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                        <span>GitHub</span>
                      </a>
                      <a
                        href="https://store.steampowered.com/app/3147480/Mutable_50/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-800 hover:bg-gray-200 transition-colors"
                      >
                        <FaSteam className="w-5 h-5" />
                        <span>Steam</span>
                      </a>
                      <a
                        href="https://siv3d.github.io/ja-jp/event/gamejam2023/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#171a21] rounded-full text-white hover:bg-[#2a3f5f] transition-colors"
                      >
                        <FaTrophy className="w-5 h-5" />
                        <span>ゲームジャム</span>
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        C++
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        Siv3D
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        HLSL
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        Pixelart
                      </span>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="aspect-video">
                      <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/UAZB_YyMgmQ"
                        title="Mutable 50 - Gameplay Trailer"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-primary-800 mb-2">
                      angel-lsp
                    </h3>
                    <p className="text-gray-600 mb-4">
                      AngelScript は Lua
                      のようにゲーム開発の現場で用いられる静的スクリプト言語です。
                      この OSS プロジェクトは唯一無二の AngelScript 汎用 LSP
                      クライエントであり、多くのゲーム開発者に使用されています。
                      高性能な解析を行うために、コンパイラのフロントエンド部分を
                      TypeScript で一から実装しました。VSCode
                      などのクライアントで動作し、開発に必要な主要な機能が利用できます。
                      このソフトウェアは、実際のゲーム会社でも使用されている他、
                      OSS で開発されている人気ゲームエンジン
                      <b>
                        <a
                          href="https://ezengine.net/pages/docs/custom-code/angelscript/as-components.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          ezEngine で公式サポートされている
                        </a>
                      </b>
                      といった実績があります。
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <a
                        href="https://github.com/sashi0034/angel-lsp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-800 hover:bg-gray-200 transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                        <span>GitHub</span>
                      </a>
                      <a
                        href="https://zenn.dev/sashi0034/articles/fc929f7d644387"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-800 hover:bg-blue-200 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6l4 2m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>開発記事</span>
                      </a>
                      <a
                        href="https://ezengine.net/pages/docs/custom-code/angelscript/as-components.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-green-800 hover:bg-green-200 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="M11.3 1.046a1.75 1.75 0 00-2.6 0l-.5.558a1.75 1.75 0 01-2.1.44l-.66-.33a1.75 1.75 0 00-2.3.78l-.33.66a1.75 1.75 0 01-.44 2.1l-.558.5a1.75 1.75 0 000 2.6l.558.5a1.75 1.75 0 01.44 2.1l-.33.66a1.75 1.75 0 00.78 2.3l.66.33a1.75 1.75 0 012.1.44l.5.558a1.75 1.75 0 002.6 0l.5-.558a1.75 1.75 0 012.1-.44l.66.33a1.75 1.75 0 002.3-.78l.33-.66a1.75 1.75 0 01.44-2.1l.558-.5a1.75 1.75 0 000-2.6l-.558-.5a1.75 1.75 0 01-.44-2.1l.33-.66a1.75 1.75 0 00-.78-2.3l-.66-.33a1.75 1.75 0 00-2.1.44l-.5.558zm-1.3 5.204a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0z" />
                        </svg>
                        <span>ezEngine document</span>
                      </a>
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                        </svg>
                        60
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        TypeScript
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        AngelScript
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        LSP
                      </span>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex items-center justify-center">
                    <img
                      src="https://raw.githubusercontent.com/sashi0034/angel-lsp/main/sample.png"
                      alt="angel-lsp project image"
                      className="rounded-lg shadow-lg w-full max-w-xs"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-white">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Contact</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
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
  );
}
