import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // サブパスで運用（/forever-howto 配下で動かす）
  basePath: "/forever-howto",

  /* Turbopackを無効化（既存） */
  experimental: {
    turbo: undefined,
  },

  // 画像最適化を使わない（既存）
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
