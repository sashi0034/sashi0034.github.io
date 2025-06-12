export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  subProjects?: Project[];
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'ポートフォリオサイト',
    description: 'Next.jsとTailwind CSSを使用したモダンなポートフォリオサイト',
    detailedDescription: 'このポートフォリオサイトは、Next.jsのApp RouterとTailwind CSSを使用して構築されています。Framer Motionによるアニメーション効果を実装し、レスポンシブデザインを採用しています。',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/sashi0034/sashi0034.github.io',
    features: [
      'モダンなUIデザイン',
      'レスポンシブ対応',
      'スムーズなアニメーション',
      'SEO最適化'
    ],
    challenges: [
      'パフォーマンスの最適化',
      'アニメーションの実装',
      'レスポンシブデザインの調整'
    ],
    solutions: [
      'Next.jsの画像最適化機能を活用',
      'Framer Motionを使用した効率的なアニメーション実装',
      'Tailwind CSSのユーティリティクラスを活用した柔軟なレイアウト'
    ],
    subProjects: [
      {
        id: 'portfolio-ui',
        title: 'UIコンポーネント',
        description: '再利用可能なUIコンポーネントの開発',
        detailedDescription: 'アニメーション効果を持つ再利用可能なUIコンポーネントを開発しました。',
        technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
        features: ['アニメーション効果', 'カスタマイズ可能なプロパティ', 'レスポンシブ対応'],
        challenges: ['パフォーマンスの最適化', 'ブラウザ互換性の確保'],
        solutions: ['コンポーネントの遅延ロード', 'CSSの最適化'],
      },
      {
        id: 'portfolio-seo',
        title: 'SEO最適化',
        description: '検索エンジン最適化の実装',
        detailedDescription: 'Next.jsの機能を活用したSEO最適化を実装しました。',
        technologies: ['Next.js', 'Meta Tags', 'Sitemap'],
        features: ['メタタグの最適化', 'サイトマップの生成', 'OGP対応'],
        challenges: ['検索エンジンでの表示順位向上', 'ソーシャルメディアでの表示最適化'],
        solutions: ['構造化データの実装', 'パフォーマンススコアの改善'],
      }
    ]
  },
  {
    id: 'other-project',
    title: 'その他のプロジェクト',
    description: 'その他の開発プロジェクト',
    detailedDescription: '様々な技術スタックを使用した開発プロジェクトのコレクションです。',
    technologies: ['React', 'Node.js', 'Python', 'AWS'],
    features: ['マイクロサービスアーキテクチャ', 'クラウドインフラ', 'CI/CD'],
    challenges: ['スケーラビリティの確保', 'セキュリティの実装'],
    solutions: ['コンテナ化', 'セキュリティベストプラクティスの適用'],
    subProjects: [
      {
        id: 'microservice',
        title: 'マイクロサービス',
        description: 'マイクロサービスアーキテクチャの実装',
        detailedDescription: 'スケーラブルなマイクロサービスアーキテクチャを実装しました。',
        technologies: ['Docker', 'Kubernetes', 'Node.js'],
        features: ['コンテナ化', 'オートスケーリング', 'サービスディスカバリ'],
        challenges: ['サービス間通信の最適化', 'データの一貫性の確保'],
        solutions: ['メッセージキュー導入', '分散トランザクションの実装'],
      }
    ]
  }
]; 