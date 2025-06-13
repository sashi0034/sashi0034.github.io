import { FaGithub } from "react-icons/fa";
import { CollapsibleSection } from "./CollapsibleSection";

export const SubProjects = () => {
  return (
    <div className="mt-16">
      <h2 className="heading-2 text-center mb-6">Other Projects</h2>
      <p className="text-center text-sm mb-6">
        その他のプロジェクトです
        <br />
        クリックすると展開されます
        {/* <p className="text-gray-500 ">クリックすると展開されます</p> */}
      </p>
      <div className="space-y-6">
        {/* F0V2 Game Engine */}
        <CollapsibleSection
          title={
            <div>
              <div className="text-2xl font-bold text-primary-800">F0V2</div>
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
                  DirectX 12
                  で一からゲームエンジン開発をしています。現在は、以下の機能などが実装済みです。
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  <li>png などの画像読み込み</li>
                  <li>wavefront モデル読み込み</li>
                  <li>基本的な描画処理 (RenderTarget なども)</li>
                  <li>基本的なライティング処理</li>
                  <li>キーボードやゲームパッド入力</li>
                  <li>Dear ImGUI による GUI</li>
                </ul>
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
        </CollapsibleSection>

        {/* EmojiInput */}
        <CollapsibleSection
          title={
            <div>
              <div className="text-2xl font-bold text-primary-800">
                EmojiInput
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Windows 用の絵文字入力 IME
              </div>
            </div>
          }
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-4">
                Windows 用の絵文字入力 IME です。 Windows
                には標準の絵文字入力機能がありますが、入力しづらく使いづらいと感じていたので独自に開発しました。
                タスク常駐アプリであり、使い勝手のよいソフトウェアです。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/sashi0034/EmojiInput-lsp"
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
        <CollapsibleSection
          title={
            <div>
              <div className="text-2xl font-bold text-primary-800">
                OutputClipboard
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Windows エクスプローラーにクリップボード貼り付けメニューを追加
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
        </CollapsibleSection>

        {/* GBEmu */}
        <CollapsibleSection
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
                APU (サウンド) の実装も行いました。 カートリッジの対応は MBC1
                のみしています。 あまり C++
                に慣れていないときに書いたコードなので、実装に荒い部分が少々あります。
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
        </CollapsibleSection>

        {/* Fumichou */}
        <CollapsibleSection
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
                こちらも描画のパフォーマンスは良好ですが、メモリ管理ユニットの実装を最適化出来たと思います。
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
        </CollapsibleSection>

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
                Photon Fusion を使いました。
                あまりテストプレイが出来ておらず正直ゲームバランスはよろしくないのですが、実装自体はかなりしっかり出来ていたと思います。
                自分のユニットを動かしながらミサイルを発射してバトルロワイヤルをするゲームです。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-2">
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
              <img
                src="https://os-worker.unityroom.com/unityroom_production/icon/42191/icon_20230305_003311.gif?h=1677943991"
                alt="かめかに合戦 screenshot"
                className="rounded-lg shadow-lg max-h-64 mb-2"
              />
            </div>
          </div>
        </CollapsibleSection>
        {/* hello-seed */}
        <CollapsibleSection
          title={
            <div>
              <div className="text-2xl font-bold text-primary-800">
                関数型プログラミング言語で開発したゲーム
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
                Haskell
                を入門する傍らに昔作ったミニゲームです。SDL2を使用してグラフィックを実装し、Haskell
                の関数型プログラミングの特徴を活かした実験的な実装になっています。
                敵に当たらないようにとうもろこしを回収するだけのゲームです。
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
              <div className="aspect-video w-full bg-gray-100 rounded-lg flex flex-col items-center justify-center">
                <img
                  src="https://user-images.githubusercontent.com/82739042/210538385-2c5b3b61-8239-4b0c-94e3-886eb4a25b34.png"
                  alt="OutputClipboard screenshot"
                  className="rounded-lg shadow-lg max-h-64 mb-2"
                />
              </div>
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
};
