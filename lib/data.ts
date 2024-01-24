import React from "react";
import { AiOutlineStock } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import youtubeImg from "@/public/youtube.jpeg";
import tiktokImg from "@/public/tiktok.jpeg";
import instaImg from "@/public/insta.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Portfolio",
    hash: "#portfolio",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "お客様層を拡大しましょう",
    description:
      "グルテンは西洋諸国の人々にとって一般的な食事制限です。日本ではグルテンフリーの選択肢を提供しているレストランが多くありませんので、新しい顧客層を簡単に引き付けることができます。",
    icon: React.createElement(AiOutlineStock),
  },
  {
    title: "オーガニックマーケティング",
    description:
      "私たちの確立されたSNSアカウントを活用することで、グルテンフリーレストランを求めている人々のオーディエンスに直接アプローチできます。",
    icon: React.createElement(AiOutlineEye),
  },
  {
    title: "お客様に安全にサービスを提供する",
    description:
      "私たちは、レストランのスタッフにグルテンフリー食品の安全な調理方法と顧客とのコミュニケーション方法を教育するトレーニングを提供できます。",
    icon: React.createElement(MdOutlineHealthAndSafety),
  },
] as const;

export const projectsData = [
  {
    title: "Youtube",
    description:
      "日本のグルテンフリーレストランを紹介する長編動画とグルテンフリー日本旅行情報",
    imageUrl: youtubeImg,
  },
  {
    title: "Instagram",
    description: "日本の知られざるグルテンフリーレストランを画像投稿で紹介する",
    imageUrl: instaImg,
  },
  {
    title: "Tiktok",
    description: "日本でのグルテンフリー旅行を紹介するショートフォーム動画",
    imageUrl: tiktokImg,
  },
] as const;
