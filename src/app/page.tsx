"use client";

import { useState } from "react";
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

import { MainProjects } from "./components/MainProjects";
import { SubProjects } from "./components/SubProjects";

// 画像のベースパスを設定
const isProd = process.env.NODE_ENV === "production";
const basePath = "";

export default function Home() {
  const [isImgError, setIsImgError] = useState(false);

  return (
    <main className="min-h-screen">
      {/* About Section */}
      <section id="about" className="section bg-white">
        <div className="container">
          <h2 className="heading-2 text-center mb-4">sashi portfolio</h2>
          <div className="flex items-center justify-center mb-2">
            <FaGamepad className="w-10 h-10 text-primary-600" />
          </div>
          <p className="text-sm text-gray-600 text-center mb-12">
            ゲーム開発をしています
          </p>
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
                ゲーム自体が好きなのはもちろんのこと、ゲーム開発関連の技術に強い興味関心があります。イラストやピクセルアートも描いています。
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
                  <span className="text-gray-600">
                    HPC (High Performance Computing)
                  </span>
                </div>
                <div>
                  <span className="w-24 font-medium block mb-2">経歴</span>
                  <ul className="list-disc list-inside space-y-1 ml-6">
                    <li className="text-gray-600">
                      2025年4月 - 現在: 京都大学大学院 情報学研究科
                      通信情報システムコース 修士課程
                    </li>
                    <li className="text-gray-600">
                      2021年4月 - 2025年3月: 京都大学 工学部情報学科
                    </li>
                  </ul>
                </div>
              </div>

              {/* Portfolio Image (Pixelart) */}
              <div className="mt-8 flex justify-center items-center gap-4">
                <Image
                  src={`${basePath}/images/screenshot/sp_96x96-export.png`}
                  alt="sashi portfolio icon"
                  width={200}
                  height={200}
                  className="rounded-xl shadow-lg"
                  priority
                />
                <Image
                  src={`${basePath}/images/screenshot/sp2_64x64-export.png`}
                  alt="sashi portfolio icon 2"
                  width={200}
                  height={200}
                  className="rounded-xl shadow-lg"
                  priority
                />
              </div>
              <p className="text-center text-sm text-gray-600 mt-4">
                <a
                  href="https://pixel-art.jp/event-artist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700"
                >
                  SHIBUYA PIXEL ART 2024
                </a>{" "}
                にて 「Limited Pixel Art 16×16」 を受賞しました。
              </p>
            </AnimatedSection>
            <AnimatedSection
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-primary-100 rounded-lg p-8 relative overflow-hidden"
            >
              <img
                src={isImgError 
                  ? `${basePath}/images/avatar/top-languages-fallback.svg` 
                  : "https://github-readme-stats-fast.vercel.app/api/top-langs/?username=sashi0034&layout=compact&langs_count=20"
                }
                alt="Top Languages"
                className="rounded-lg shadow-lg w-full"
                onError={() => setIsImgError(true)}
              />
              {isImgError && (
                <div className="absolute top-4 right-4 bg-amber-100 border border-amber-200 text-amber-700 text-[10px] sm:text-xs font-medium px-2 py-1 rounded-full shadow-sm flex items-center gap-1 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                  データの取得に失敗したため、最新ではない可能性があります。
                </div>
              )}
            </AnimatedSection>
          </div>

          {/* Skills Section - Full Width */}
          <AnimatedSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12"
          >
            <h3 className="heading-3 text-center mb-8">習得済みの分野</h3>
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
                  アルバイトで四年以上チーム開発
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
                <span className="text-xs text-gray-600 mt-1">SHIBUYA PIXEL ART 2024 受賞</span>
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
              <div className="flex flex-col items-center">
                <div className="bg-primary-50 rounded-full px-4 py-2 border border-primary-200 hover:border-primary-400 transition-colors flex items-center gap-2">
                  <FaServer className="w-4 h-4 text-primary-600" />
                  <span>C言語, Fortran</span>
                  <span className="text-xs text-gray-600 mt-1">
                    スパコンの数値計算
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary-50 rounded-full px-4 py-2 border border-primary-200 hover:border-primary-400 transition-colors flex items-center gap-2">
                  <FaServer className="w-4 h-4 text-primary-600" />
                  <span>Rust</span>
                  <span className="text-xs text-gray-600 mt-1">
                    アプリケーション開発
                  </span>
                </div>
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
              <div className="bg-primary-50 rounded-full px-4 py-2 border border-primary-200 hover:border-primary-400 transition-colors flex items-center gap-2">
                <FaMicrosoft className="w-5 h-5 text-primary-600" />
                <span>C#</span>
                <span className="text-xs text-gray-600 mt-1">
                  Unity, WPF
                </span>
              </div>
              <div className="bg-primary-50 rounded-full px-4 py-2 border border-primary-200 hover:border-primary-400 transition-colors flex items-center gap-2">
                <FaWindows className="w-5 h-5 text-primary-600" />
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
          <MainProjects />
        </div>
      </section>

      {/* Sub Projects Section */}
      <div className="container">
        <SubProjects />
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-50 py-8 border-t border-gray-200">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/sashi0034"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <FaGithub className="w-8 h-8" />
              </a>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} sashi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
