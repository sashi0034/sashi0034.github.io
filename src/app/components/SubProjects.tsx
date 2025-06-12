import { FaGithub } from "react-icons/fa";
import { CollapsibleSection } from "./CollapsibleSection";

export const SubProjects = () => {
  return (
    <div className="mt-16">
      <h2 className="heading-2 text-center mb-6">Sub Projects</h2>
      <p className="text-center text-gray-500 text-sm mb-6">
        クリックすると展開されます
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
                  <li>png など画像読み込み</li>
                  <li>wavefront モデル読み込み</li>
                  <li>基本的な描画処理 (RenderTarget なども)</li>
                  <li>基本的なライティング処理</li>
                  <li>キーボードやゲームパッド入力</li>
                  <li>Dear ImGUI による GUI</li>
                </ul>
                構想中のオープンワールド風フライトシューティングゲームをエンジンを開発しながら作りたいと考えています。
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
      </div>
    </div>
  );
};
