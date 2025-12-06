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
                  99 人対戦の反重力レースゲーム
                </h3>
                <p className="text-gray-600 mb-4">
                  ローレベル API である DirectX 12
                  をバックエンドとした自作エンジン上を用いて C++
                  で開発したゲームです。 グラフィック、物理、ゲーム AI
                  といったインゲーム要素、他にもレベルエディタなども含めて自作しました。
                  <br></br>
                  このゲームの特徴的なグラフィック表現として、ラスタライズ方式のディファードレンダリングにレイマーチングを取り入れている点が挙げられます。それについては、文末の
                  <a
                    href="https://zenn.dev/sashi0034/articles/3f268022b4df9f"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    「レンダリング部分の記事」
                  </a>
                  で解説しています
                  <br></br>
                  実装において、物理部分は特に苦労しました。衝突処理の解決といったものは、意外とインターネット上に参考情報が少なく、試行錯誤の連続でした。三角形関連のプリミティブな衝突処理の実装から始まり、BVH
                  の構築、衝突時の押し戻し処理など地道に実装を行いました。特に苦労したのは、地面上をスムーズに移動する処理です。ここでは、大学の講義で学んだガウス・ニュートン法が思いがけず役に立ちました。
                  <br></br>
                  対戦相手となるゲーム AI
                  に関しては、スクエア・エニックスの三宅陽一郎さんの著書などで紹介されている「MCS-AI
                  動的連携モデル」を参考にしました。<br></br>
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <a
                    href="https://github.com/sashi0034/F0V2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-800 hover:bg-gray-200 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://zenn.dev/sashi0034/articles/3f268022b4df9f"
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
                    <span>レンダリング部分の記事</span>
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    C++
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    DirectX 12
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    HLSL
                  </span>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/JMnSkX49OwM"
                    title="Mutable 50 - Gameplay Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                  {/* <div className="flex items-center justify-center">
                    <img src="\images\screenshot\ray99.png" alt="angelscript" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection transition={{ duration: 0.8, delay: 0.1 }}>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-primary-800 mb-2">
                  Mutable 50
                </h3>
                <p className="text-gray-600 mb-4">
                  C++ / Siv3D で開発した 2D アクションゲームです。
                  グラフィックやプログラムを自作しています。 このゲームは
                  <span className="font-bold">
                    Siv3D バンダイナムコスタジオ杯 2023 で作成し、最優秀賞
                  </span>
                  を受賞しました。 その後、発展させたバージョンを Steam
                  にリリースしています。アイテムを駆使しながら自動生成されるダンジョンの第
                  50 層を目指すゲームです。<br></br>
                  今では当たり前のようにシェーダーを書いていますが、当時
                  (大学三回生の頃) はシェーダーを書いた経験が少なく、 HLSL
                  を用いた躍動的なエフェクト表現などの実装に苦労しました。
                  <br></br>
                  開発では boost::coroutine2
                  を試験的に導入し、コルーチンベースのアニメーションやイベント制御を取り入れてみました。C++
                  20
                  で標準化されたコルーチンはスタックレスですが、それとは対照的に
                  boost::coroutine2
                  はスタックフルのコルーチンであり、使い勝手やデバッグのしやすさ、また移植性の面で優れていると感じました。現在のプロジェクトでも活用しています。
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
                  と同様にゲーム開発の現場で用いられる静的型付けスクリプト言語です。
                  この OSS プロジェクトは AngelScript 汎用 LSP
                  クライアントであり、 多くのゲーム開発者に使用されています。
                  高性能な解析を行うために、コンパイラのフロントエンド部分を
                  TypeScript で一から実装しています。VSCode
                  などのクライアントで動作し、コーディングに欠かせない多くの機能が利用できます。
                  例えば、シンボル定義へのジャンプや参照検索、コード補完に加えて、型チェックや関数呼び出し時の引数チェックなども行えます。
                  <br></br>
                  私がこのソフトウェアを開発する前、AngelScript の IDE
                  サポートは非常に貧弱であり、
                  テキストファイル同然の編集作業を強いられていました。
                  そこで、AngelScript
                  を使ったゲーム開発をより快適に行うため、自分自身の開発環境を整える目的でこのプロジェクトを始めました。
                  <br></br>
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
                  更に詳しい詳細は文末のリンクの開発記事で紹介しています。
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
                    <img
                      src="https://img.shields.io/visual-studio-marketplace/i/sashi0034.angel-lsp"
                      alt="VS Marketplace installs"
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

              <div className="md:w-1/2 flex flex-col gap-4">
                <div className="flex items-center justify-center">
                  <img
                    src="\images\screenshot\angelscript.png"
                    alt="angelscript"
                    className="rounded-lg shadow-lg w-full max-w-xs"
                  />
                </div>
                <div className="flex items-center justify-center">
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

        <AnimatedSection transition={{ duration: 0.8, delay: 0.3 }}>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-primary-800 mb-2">
                  Monad Tachyon
                </h3>
                <p className="text-gray-600 mb-4">
                  かなり気合を入れて鋭意開発している2D
                  探索型アクションゲームです。
                  {/* 2026 年内に Steam で発売することを目指しています。 */}
                  「世界最速メトロイドヴァニア」をコンセプトに、爽快でスピーディーなアクションが楽しめます。
                  プレイ動画は一見難しそうに見えるかも知れませんが、基本的にプレイに必要なボタンは十字ボタンと
                  A, B
                  ボタンだけで誰でも簡単に遊ぶことができる工夫をしています。
                  <br></br>
                  このゲームは F-ZERO を 2D
                  に落とし込もうという発想から始まりました。
                  まず、単純にマリオのような 2D 横スクロールで F-ZERO
                  マシンを走らせることを考えてみましょう。
                  そのゲームは恐らく酷いものになりそうです。カメラがマシンに追従しきれず、マシンを操縦しきれずに
                  F-ZERO 特有の爽快感が損なわれてしまいます。
                  そこで思いついたのが、ボタン一つで F-ZERO
                  を演出出来ないか、というアイデアです。
                  移動そのものは自動で行い、プレイヤーはタイミングよくボタンを押して大ジャンプを発生させる。そうすることで、シンプル操作でも疾走感を味わえるゲームになると考えました。
                  実際に作って他の人に遊んでもらったところ、ゲームに不慣れなお爺さんであっても楽しそうにされていたので、このコンセプトは良いものであると自負しています。
                  <br></br>
                  未だ開発途中ですが、独自に構築したレベルエディタをはじめとするミドルウェアを整備し、生産性を高めつつ小規模な体制でも最大限の成果を挙げられるシステムを構築しています。
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
                  BEM 解析が可能です。<br></br>
                  <span className="font-bold">
                    この研究では、NVIDIA GPU に搭載されている Tensor
                    コアを活用しています。
                  </span>
                  Tensor
                  コアは行列積演算を高速に実行できる特殊なハードウェアユニットであり、これを用いることで
                  大幅に計算速度を向上させることができます。
                  研究では行列のメモリレイアウトを最適化し、より高速な Tensor
                  コアを用いた行列積計算を実現しました。
                  <br></br>
                  現在こちらの研究は一段落しており、現在は H
                  行列を用いた高速数値計算ライブラリの FORTRAN 実装を C
                  に移植し、GPU 対応させる作業を行っています。
                  <br></br>
                  なお、研究で用いる可視化ツールの開発にも DirectX 12
                  の自作エンジンを活用しています。
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
