import { FaGithub } from "react-icons/fa";
import { SiIntel } from "react-icons/si";
import { CollapsibleSection } from "./CollapsibleSection";

export const SubProjects = () => {
  return (
    <div className="mt-16">
      <h2 className="heading-2 text-center mb-6">Other Projects</h2>
      <p className="text-center text-sm mb-6">
        上記で取り上げなかったプロジェクトのうち代表していくつかを以下に記載します。
        <br />
        クリックすると展開されます。
        {/* <p className="text-gray-500 ">クリックすると展開されます</p> */}
      </p>
      <div className="space-y-6">
        {/* F0V2 Game Engine */}
        {/* <CollapsibleSection
          title={
            <div>
              <div className="text-2xl font-bold text-primary-800">
                自作ゲームエンジン
              </div>
              <div className="text-sm text-gray-600 mt-1">
                DirectX 12 ゲームエンジンとそれで作るゲーム
              </div>
            </div>
          }
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-4">
                <p className="text-gray-600 mb-4">
                  前述の通り、DirectX 12
                  で一からゲームエンジン開発をしています。現在は、以下の機能などが実装済みです。
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  <li>png などの画像読み込み</li>
                  <li>wavefront モデル読み込み</li>
                  <li>基本的な描画処理 (RenderTarget なども)</li>
                  <li>基本的なライティング処理</li>
                  <li>GPGPU (ComputeShader)</li>
                  <li>キーボードやゲームパッド入力</li>
                  <li>Dear ImGUI による GUI</li>
                </ul>
                現段階における本エンジンの特徴として、リソースごとに依存関係を管理してアセットのホットリロードを実現しています。
                つまり、ゲームのデバッグ中にシェーダーやテクスチャを変更しても、ゲームを再起動せずに即座に変更を反映できます。
                まだまだプロトタイプの域を出ない代物ですが、エンジン本体とともに構想中のオープンワールド風フライトシューティングゲームを作りたいと考えています。
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
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="aspect-video w-full bg-gray-100 rounded-lg flex flex-col items-center justify-center">
                <img
                  src="/images/screenshot/f0v2-demo.png"
                  alt="F0V2 デモ画像"
                  className="rounded-lg shadow-lg max-h-64 mb-2"
                />
                <span className="text-gray-500 text-sm">デモ画像</span>
              </div>
            </div>
          </div>
        </CollapsibleSection> */}

        {/* Kamekani Gassen */}
        <CollapsibleSection
          title={
            <div>
              <div className="text-2xl font-bold text-primary-800">
                Unity で開発したゲーム
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Photon Fusion によるオンライン対戦
              </div>
            </div>
          }
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-4">
                Unity
                で作ったゲームはいくつかあるのですが、ここではオンライン対戦を実装した
                3D ゲームを代表して掲載します。 アルバイトで Photon
                を使ったオンライン対戦を実装したことがあり、その経験を活かして
                Photon Fusion をネットワークライブラリとして使用しました。
                あまりテストプレイが出来ておらず正直ゲームバランスはよろしくないのですが、通信エラー時の対処など実装自体はかなりしっかり出来ています。
                自分のユニットを動かしながらミサイルを発射してバトルロワイヤルをするゲームです。
                対戦相手のプレイヤーがいない場合は AI がバトルに参加します。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/sashi0034/MissileReflexAsset"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-800 hover:bg-gray-200 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://unityroom.com/games/kamekani-gassen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-800 hover:bg-gray-200 transition-colors"
                  >
                    <span>unityroom</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Unity
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  C#
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Photon
                </span>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="aspect-video w-full bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/D6MsIlz0LRs"
                  title="Demo: Unity"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* hello-seed */}
        <CollapsibleSection
          title={
            <div>
              <div className="text-2xl font-bold text-primary-800">
                純粋関数型プログラミング言語で開発したゲーム
              </div>
              <div className="text-sm text-gray-600 mt-1">
                関数型プログラミング言語 Haskell と SDL2 で作ったミニゲーム
              </div>
            </div>
          }
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-4">
                Haskell を入門する傍らに昔作ったミニゲームです。GUI
                ライブラリとして SDL2 を選択し、プログラムは Haskell
                の関数型プログラミングの特徴を活かした実験的な実装になっています。
                敵に当たらないようにとうもろこしを回収しつつ、一定量に到達すると無敵になって敵の捕食が出来るゲームです。
                関数型プログラミング言語を学んだ知識や経験は、一般的なオブジェクト指向プログラミングをするときにも役立っています。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/sashi0034/hello-seed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-800 hover:bg-gray-200 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Haskell
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  SDL2
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Stack
                </span>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="aspect-video w-full bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/_zrn4j3-_Mk"
                  title="Demo: Haskell Gamedev"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* EmojiInput */}
        <CollapsibleSection
          title={
            <div>
              <div className="text-2xl font-bold text-primary-800">
                EmojiInput
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Windows 絵文字入力 IME
              </div>
            </div>
          }
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-4">
                Windows 用の絵文字入力 IME です。 Windows
                には標準の絵文字入力機能がありますが、入力しづらく使いづらいと感じていたので独自に開発しました。
                タスク常駐アプリであり、特定のショートカットキーを押すことで表示される絵文字入力用ポップアップからテキストボックスに絵文字を入力できます。
                私はゲーム開発の際にログや UI
                として絵文字を多用するので私自身このアプリケーションを重宝しています。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/sashi0034/EmojiInput"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-800 hover:bg-gray-200 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <img
                    src="https://img.shields.io/github/stars/sashi0034/EmojiInput?style=flat-square&label=stars"
                    alt="GitHub stars"
                    className="h-6"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  C#
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  WPF
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Windows
                </span>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="aspect-video w-full bg-gray-100 rounded-lg flex flex-col items-center justify-center">
                <img
                  src="https://camo.githubusercontent.com/7273959be3cf016a6672fdac705bc2f37b9335a07ba7375c47d5246f2810af14/68747470733a2f2f692e6779617a6f2e636f6d2f37386133636636373966323538616362663664626334306631326538616366332e676966"
                  alt="EmojiInput screenshot"
                  className="rounded-lg shadow-lg max-h-64 mb-2"
                />
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* OutputClipboard */}
        {/* <CollapsibleSection
          title={
            <div>
              <div className="text-2xl font-bold text-primary-800">
                OutputClipboard
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Windows
                エクスプローラーにクリップボードの画像を保存する項目を追加
              </div>
            </div>
          }
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-4">
                Windows
                でエクスプローラーのコンテクストメニューからクリップボードの画像を保存することが出来るソフトウェアです。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <a
                  href="https://github.com/sashi0034/OutputClipboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-800 hover:bg-gray-200 transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  C#
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  WPF
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Windows
                </span>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <img
                src="https://camo.githubusercontent.com/20564b27c0a73d0f2fd8f275725a839cdf8d52ea801f84baeec83efb3c7e39e9/68747470733a2f2f692e6779617a6f2e636f6d2f30323635303231376364613264653138363631353131653364316432363939662e676966"
                alt="OutputClipboard screenshot"
                className="rounded-lg shadow-lg max-h-64 mb-2"
              />
            </div>
          </div>
        </CollapsibleSection> */}

        {/* GBEmu */}
        <CollapsibleSection
          title={
            <div>
              <div className="text-2xl font-bold text-primary-800">
                8-bit CPU
              </div>
              <div className="text-sm text-gray-600 mt-1">
                自作エミュレーター上で動作する 8-bit CPU プログラム
              </div>
            </div>
          }
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-4">
                CPU プロセッサについて学習していたときに、8-bit CPU である Z80
                関連の開発に取り組みました。Z80 系の CPU
                を搭載したレトロゲームのハードウェアのエミュレーターを C++
                で開発し、 その上で C で書いた自作 Z80
                プログラムを動作させました。
                エミュレータ開発において命令セットやメモリマップ、画像処理ユニットなどを一から実装したことでハードウェア動作に関する理解が大きく深まったと思います。
                また、Z80 プログラミングを実際に取り組む中で、昔ながらの 8-bit
                プログラム特有の制約や工夫についても学ぶことができました。
                <br />
                スクリーンショット中のドット絵も自作しています。8-bit
                中で絵を表現するのは大変でしたが、昔の色数制限や解像度制限について体感する良い経験になりました。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <a
                  href="https://github.com/sashi0034/GBEmu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-800 hover:bg-gray-200 transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>GitHub (エミュレータ)</span>
                </a>
                <a
                  href="https://github.com/sashi0034/gbroccoli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-800 hover:bg-gray-200 transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>GitHub (Z80 プログラム)</span>
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  C++
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  C
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Assembly
                </span>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <img
                src="/images/screenshot/z80-game.png"
                alt="GBEmu screenshot"
                className="rounded-lg shadow-lg max-h-64 mb-2"
              />
            </div>
          </div>
        </CollapsibleSection>

        {/* <CollapsibleSection
          title={
            <div>
              <div className="text-2xl font-bold text-primary-800">GBEmu</div>
              <div className="text-sm text-gray-600 mt-1">
                Game Boy エミュレータ
              </div>
            </div>
          }
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-4">
                C++ で実装した Game Boy エミュレータです。 PPU (グラフィック) は
                GPU
                を使用するように実装しており、パフォーマンスはかなり良好です。
                APU (サウンド) の実装も行いました。 カートリッジの規格は MBC1
                のみ対応しています。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <a
                  href="https://github.com/sashi0034/GBEmu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-800 hover:bg-gray-200 transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  C++
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Assembly
                </span>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <img
                src="/images/screenshot/gbemu.png"
                alt="GBEmu screenshot"
                className="rounded-lg shadow-lg max-h-64 mb-2"
              />
            </div>
          </div>
        </CollapsibleSection> */}

        {/* Fumichou */}
        {/* <CollapsibleSection
          title={
            <div>
              <div className="text-2xl font-bold text-primary-800">
                Fumichou
              </div>
              <div className="text-sm text-gray-600 mt-1">NES エミュレータ</div>
            </div>
          }
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-4">
                GBEmu と同様に C++ で実装したファミコンのエミュレータです。
                こちらも描画のパフォーマンスは良好ですが、GBEmu
                と比較するとメモリ管理ユニットが最適化された実装になっています。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/sashi0034/Fumichou"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-800 hover:bg-gray-200 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  C++
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Assembly
                </span>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <img
                src="/images/screenshot/fumichou.png"
                alt="Fumichou screenshot"
                className="rounded-lg shadow-lg max-h-64 mb-2"
              />
            </div>
          </div>
        </CollapsibleSection> */}

        {/* DD Backup */}
        {/* <CollapsibleSection
          title={
            <div>
              <div className="text-2xl font-bold text-primary-800">
                DD Backup
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Rust で作ったファイルバックアップ GUI アプリケーション
              </div>
            </div>
          }
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-4">
                プログラミング言語 Rust
                の学習がてらに開発したファイルバックアップ用 GUI
                アプリケーションです。 Iced というフレームワークを用いています。
                シンプルで使いやすいインターフェースを提供し、ファイルのバックアップとエクスポートを管理することができます。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <a
                  href="https://github.com/sashi0034/dd-backup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-800 hover:bg-gray-200 transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Rust
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Iced
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  GUI
                </span>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="aspect-video w-full bg-gray-100 rounded-lg flex flex-col items-center justify-center">
                <img
                  src="https://raw.githubusercontent.com/sashi0034/dd-backup/main/docs/screenshot.png"
                  alt="DD Backup screenshot"
                  className="rounded-lg shadow-lg max-h-64 mb-2"
                />
              </div>
            </div>
          </div>
        </CollapsibleSection> */}

        {/* SimpleOCR */}
        <CollapsibleSection
          title={
            <div>
              <div className="text-2xl font-bold text-primary-800">
                DirectX 12 上で機械学習
              </div>
              <div className="text-sm text-gray-600 mt-1">
                DirectX 12 の Compute Shader
                を使って機械学習を行うデモンストレーション
              </div>
            </div>
          }
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-4">
                DirectX 12
                自作エンジン上で機械学習をおこなうデモンストレーションです。
                近年は Python
                の深層学習関連のライブラリ等を用いれば手軽に機械学習を行うことができますが、このプロジェクトでは外部ライブラリには頼らず機械学習プログラムを一から
                C++ 及び Compute Shader (HLSL) で GPGPU の実装をしています。
                具体的には、画像を入力として手書き文字認識を行う三層ニューラルネットワークの実装を行っています。
                例えば、手書きで「5」と書くと、ニューラルネットワークがその画像を解析して「5
                である」と出力します。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <a
                  href="https://github.com/sashi0034/SimpleOCR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-800 hover:bg-gray-200 transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>GitHub</span>
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
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="aspect-video w-full bg-gray-100 rounded-lg flex flex-col items-center justify-center">
                <img
                  src="https://github.com/sashi0034/SimpleOCR/raw/main/screenshot.png"
                  alt="デモ画像"
                  className="rounded-lg shadow-lg max-h-64 mb-2"
                />
                {/* <span className="text-gray-500 text-sm">デモ画像</span> */}
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* AMX Basic Example */}
        <CollapsibleSection
          title={
            <div>
              <div className="text-2xl font-bold text-primary-800">
                AMX Basic Example
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Intel Advanced Matrix Extensions の基本的な使用例
              </div>
            </div>
          }
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-4">
                Intel の Advanced Matrix Extensions (AMX)
                を使用した基本的な行列演算のサンプルコードです。
                私は学部生の卒業研究で AMX
                に関するテーマを扱っており、備忘録としてまとめました。 AMX は
                Intel の最新 CPU
                で利用可能な行列演算用の拡張命令セットで、機械学習などの計算を高速化することができます。
                Intel
                の公式ドキュメントにコードサンプルは掲載されていますが、説明や実装が不十分な箇所が見受けられました。
                本リポジトリでは、それらの問題点を解消し、初学者でも理解しやすいようにコメント付きで整理されたコードで行列積演算（int8,
                bf16）や畳み込み演算（int8）の実装例を示しています。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/sashi0034/amx-basic-example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-800 hover:bg-gray-200 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <img
                    src="https://img.shields.io/github/stars/sashi0034/amx-basic-example?style=flat-square&label=stars"
                    alt="GitHub stars"
                    className="h-6"
                  />
                  <a
                    href="https://www.intel.com/content/www/us/en/developer/articles/code-sample/advanced-matrix-extensions-intrinsics-functions.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-800 hover:bg-blue-200 transition-colors"
                  >
                    <SiIntel className="w-5 h-5" />
                    <span>公式ドキュメント</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  C
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Intel AMX
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  SIMD
                </span>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="aspect-video w-full bg-gray-100 rounded-lg flex flex-col items-center justify-center p-4">
                <img
                  src="/images/screenshot/intel-amx.png"
                  alt="intel-amx"
                  className="rounded-lg shadow-lg max-h-64 mb-2"
                />
                <div className="text-gray-600 text-sm mb-2">実装例:</div>
                <ul className="text-gray-600 text-sm list-disc list-inside">
                  <li>int8 行列積演算</li>
                  <li>bf16 行列積演算</li>
                  <li>int8 畳み込み演算</li>
                </ul>
              </div>
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
};
