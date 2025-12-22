import { FaGithub, FaSteam, FaTrophy } from "react-icons/fa";
import { AnimatedSection } from "./AnimatedSection";
import { ReadMoreSection } from "./ReadMoreSection";

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
                  自作エンジンで開発した 99 人対戦の反重力レースゲームです。
                  自作エンジンのグラフィクスは DirectX 12 をバックエンドとし、レンダリング、物理、ゲーム AI といったインゲーム要素、他にもレベルエディタなども含めて自作しました。
                </p>
                <ReadMoreSection collapsedHeight="3rem">
                  <p className="text-gray-600 mb-4">
                    このゲームでは、ラスタライズ方式のディファードレンダリングにレイマーチングを組み合わせた独自のグラフィック表現を採用しています。レイトレーシングと異なり、レイマーチングは GPU によるハードウェアサポートが存在しないため処理負荷が高く、一般的なゲームで採用されることはほとんどありません。
                    それでも本作では、ポリゴンでは表現が難しいフラクタル的な地形を SDF として定義し、これをレイマーチングで描画することで、従来手法では実現しにくい独創的なシーン表現を可能にしています。
                    このレンダリング手法の詳細については、文末の
                    <a href="https://zenn.dev/sashi0034/articles/3f268022b4df9f" target="_blank" rel="noopener noreferrer">「レンダリング部分の記事」</a>
                    で解説しています。
                    <br></br>
                    実装において、物理部分は特に苦労しました。衝突処理の解決といったものは、意外とインターネット上に参考情報が少なく、試行錯誤の連続でした。三角形関連のプリミティブな衝突処理の実装から始まり、BVH の構築、衝突時の押し戻し処理など地道に実装を行いました。特に苦労したのは、地面上をスムーズに移動する処理です。ここでは、大学の講義で学んだガウス・ニュートン法が思いがけず役に立ちました。
                    <br></br>
                    対戦相手となるゲーム AI に関しては、スクエア・エニックスの三宅陽一郎さんの著書などで紹介されている「MCS-AI 動的連携モデル」を参考にしました。
                  </p>
                </ReadMoreSection>
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
                  C++ / Siv3D で開発した 2D アクションゲームです。グラフィックやプログラムを自作しています。このゲームは <span className="font-bold">Siv3D バンダイナムコスタジオ杯 2023 で作成し、最優秀賞</span> を受賞しました。アイテムを駆使しながら自動生成されるダンジョンの第 50 層を目指すゲームです。
                </p>
                <ReadMoreSection collapsedHeight="3rem">
                  <p className="text-gray-600 mb-4">
                    今では当たり前のようにシェーダーを書いていますが、当時 (大学三回生の頃) はシェーダーを書いた経験が少なく、 HLSL を用いた躍動的なエフェクト表現などの実装に苦労しました。
                    <br></br>
                    開発では boost::coroutine2 を試験的に導入し、コルーチンベースのアニメーションやイベント制御を取り入れてみました。C++ 20 で標準化されたコルーチンはスタックレスですが、それとは対照的に boost::coroutine2 はスタックフルのコルーチンであり、使い勝手やデバッグのしやすさ、また移植性の面で優れていると感じました。現在のプロジェクトでも活用しています。
                    <br></br>
                    ゲームジャムの終了後、発展させたバージョンを開発し、その作品は Steam にリリースしています。
                  </p>
                </ReadMoreSection>
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
                  この OSS プロジェクトは AngelScript 汎用 LSP サーバーであり、多くのゲーム開発者に使用されています。AngelScript は Lua と同様にゲーム開発の現場で用いられる静的型付けスクリプト言語です。
                  このソフトウェアは、実際のゲーム会社でも使用されている他、OSS で開発されている人気ゲームエンジン <b><a href="https://ezengine.net/pages/docs/custom-code/angelscript/as-components.html" target="_blank" rel="noopener noreferrer">ezEngine で公式サポートされている</a></b> といった実績があります。更に詳しい詳細は文末リンクの開発記事で紹介しています。
                </p>
                <ReadMoreSection collapsedHeight="3rem">
                  <p className="text-gray-600 mb-4">
                    私がこのソフトウェアを開発する前、AngelScript の IDE サポートは非常に貧弱であり、テキストファイル同然の編集作業を強いられていました。そこで、AngelScript を使ったゲーム開発をより快適に行うため、自分自身の開発環境を整える目的でこのプロジェクトを始めました。
                    高性能な解析を行うために、解析に使用するコンパイラのフロントエンド部分は TypeScript で一から実装しました。
                    <br></br>
                    VSCode などのクライアントで動作し、コーディングに欠かせない多くの機能が利用できます。例えば、シンボル定義へのジャンプや参照検索、コード補完に加えて、型チェックや関数呼び出し時の引数チェックなども行えます。
                  </p>
                </ReadMoreSection>
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
                    かなり気合を入れて鋭意開発している 2D 探索型アクションゲームです。{/* 2026 年内に Steam で発売することを目指しています。 */}「世界最速メトロイドヴァニア」をコンセプトに、爽快でスピーディーなアクションが楽しめます。プレイ動画は一見難しそうに見えるかも知れませんが、基本的にプレイに必要なボタンは十字ボタンと A, B ボタンだけで誰でも簡単に遊ぶことができる工夫をしています。
                </p>
                <ReadMoreSection collapsedHeight="3rem">
                  <p className="text-gray-600 mb-4">
                    このゲームは F-ZERO を 2D に落とし込もうという発想から始まりました。まず、単純にマリオのような 2D 横スクロールで F-ZERO マシンを走らせることを考えてみましょう。そのゲームは恐らく酷いものになりそうです。カメラがマシンに追従しきれず、マシンを操縦しきれずに F-ZERO 特有の爽快感が損なわれてしまいます。そこで思いついたのが、ボタン一つで F-ZERO を演出出来ないか、というアイデアです。移動そのものは自動で行い、プレイヤーはタイミングよくボタンを押して大ジャンプを発生させる。そうすることで、シンプル操作でも疾走感を味わえるゲームになると考えました。実際に作って他の人に遊んでもらったところ、ゲームに不慣れなお爺さんであっても楽しそうにされていたので、このコンセプトは良いものであると自負しています。
                    <br></br>
                    未だ開発途中ですが、独自に構築したレベルエディタをはじめとするミドルウェアを整備し、生産性を高めつつ小規模な体制でも最大限の成果を挙げられるシステムを構築しています。
                  </p>
                </ReadMoreSection>
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
                  研究内容: 境界要素法 (BEM) の高速化
                </h3>
                <p className="text-gray-600 mb-4">
                  大学院では、「境界要素法（BEM）の高速化」を研究テーマとして扱っています。BEMは、解析対象の境界部分のみを離散化することで計算領域を簡略化できる一方、境界上の全点同士が相互作用するため、非常に大きな密行列の連立一次方程式を解く必要があるという特徴があります。そこで、私はこの計算を GPUで高速に解く手法について研究をしました。
                </p>
                <ReadMoreSection collapsedHeight="3rem">
                  <p className="text-gray-600 mb-4">
                    具体的には、BEM で得られる密行列に対して CUDA を用いて BiCGStab 法の GPU 実装を行い、その性能評価と高速化手法の比較を行いました。特に、実応用では多数の解析モデルを解く場合が多いことに着目し、複数のモデルを一括して取り扱うことで、行列・行列積演算に基づく実装を可能とし、GPUが有する高い演算性能を効率的に利用することを可能としました。また、NVIDIA GPUに搭載されたTensorコアを用いた行列演算の高速化や、Tensorコアに適したメモリレイアウトの設計にも取り組み、性能測定を行いました。結果として、右辺化で十数〜数十倍、Tensorコア利用でさらに数倍の高速化を確認しました。
                    <br></br>
                    なお、研究で用いる可視化ツールの開発にも DirectX 12 の自作エンジンを活用しています。
                  </p>
                </ReadMoreSection>
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
