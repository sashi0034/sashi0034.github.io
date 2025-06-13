import { FaGithub, FaSteam, FaTrophy } from "react-icons/fa";
import { AnimatedSection } from "./AnimatedSection";

export const MainProjects = () => {
  return (
    <AnimatedSection>
      <h2 className="heading-2 text-center mb-6">Projects</h2>
      <div className="space-y-12">
        <AnimatedSection transition={{ duration: 0.8, delay: 0.1 }}>
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
                  シェーダーによる独創的なグラフィック、躍動的なアニメーション表現などを取り入れることで斬新なゲームに仕上げました。
                  アイテムを駆使しながら自動生成されるダンジョンの第 50
                  層を目指すゲームです。
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
        </AnimatedSection>

        <AnimatedSection transition={{ duration: 0.8, delay: 0.2 }}>
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
                  などのクライアントで動作し、コーディングに欠かせない多くの機能が利用できます。
                  このソフトウェアは、実際のゲーム会社でも使用されている他、 OSS
                  で開発されている人気ゲームエンジン
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
                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/sashi0034/angel-lsp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-800 hover:bg-gray-200 transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>GitHub</span>
                    </a>
                    <img
                      src="https://img.shields.io/github/stars/sashi0034/angel-lsp?style=flat-square&label=stars"
                      alt="GitHub stars"
                      className="h-6"
                    />
                  </div>
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
        </AnimatedSection>

        <AnimatedSection transition={{ duration: 0.8, delay: 0.3 }}>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-primary-800 mb-2">
                  Monad Tachyon
                </h3>
                <p className="text-gray-600 mb-4">
                  かなり気合を入れて鋭意開発している2D
                  探索型アクションゲームです。2025 年内に Steam
                  で発売することを目指しています。
                  「世界最速メトロイドヴァニア」をコンセプトに、爽快でスピーディーなアクションが楽しめます。
                  一見難しそうに見えるかも知れませんが、基本的にプレイに必要なボタンは十字ボタンと
                  A, B
                  ボタンだけで誰でも簡単に遊ぶことができる工夫をしています。
                  未だ開発途中ですが、独自に構築したレベルエディタをはじめとする各種ツールを活用し、生産性を高めつつ短期間で最大限の成果を挙げられる体制を構築しています。
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <a
                    href="https://store.steampowered.com/app/3328960/Monad_Tachyon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#171a21] rounded-full text-white hover:bg-[#2a3f5f] transition-colors"
                  >
                    <FaSteam className="w-5 h-5" />
                    <span>Steam</span>
                  </a>
                  <a
                    href="https://gamebiz.jp/news/396584"
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
                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                    <span>紹介記事</span>
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
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="aspect-video mb-4">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/wDqKggP4Xxk"
                    title="Monad Tachyon - Gameplay Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <p className="text-sm text-gray-600 mt-2">
                    Steam ストアページ用のトレーラー動画。
                  </p>
                </div>
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/r3NBNPyiwrM"
                    title="Monad Tachyon - Gameplay Showcase"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <p className="text-sm text-gray-600 mt-2">
                    自作レベルエディタのデモ動画。ブラシやスポイトの他にも Undo
                    / Redo
                    なども実装してあり、多機能で使いやすいエディタとなっています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection transition={{ duration: 0.8, delay: 0.4 }}>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-primary-800 mb-2">
                  研究内容: 高性能BEM数値解析フレームワーク
                </h3>
                <p className="text-gray-600 mb-4">
                  大学院では、境界要素法 (BEM)
                  による大規模数値解析プログラムの高性能化を研究しています。 BEM
                  は解析領域の境界のみを離散化することで高精度な解を効率的に得られる手法ですが、密行列計算の膨大な計算量が課題です。
                  本研究では、
                  <span className="font-bold">
                    GPU (CUDA) による高速な反復解法 (BiCGStab 法)
                  </span>
                  と、CPU 側の前処理の OpenMP 並列化を組み合わせ、
                  スパコン上で効率的に動作する解析フレームワークを開発しています。
                  ユーザーは物理モデルに応じた境界積分関数を記述するだけで、汎用的かつ高性能な
                  BEM 解析が可能です。
                  <span className="font-bold">
                    また、この研究で用いる可視化ツールの開発には DirectX 12
                    をバックエンドにした自作ゲームエンジンを使用しています。
                  </span>
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    CUDA
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    OpenMP
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    C++
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    HPC
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    DirectX 12
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 flex items-center justify-center">
                <img
                  src="/images/screenshot/bb-bem.png"
                  alt="BEM可視化サンプル"
                  className="rounded-lg shadow-lg w-full max-w-xs"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
};
