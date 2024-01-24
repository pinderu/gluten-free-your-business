"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>グルテンとは何ですか？</SectionHeading>

      <p className="mb-8">
        <span className="underline">グルテン</span>は、
        <span className="font-bold">小麦、ライ麦、大麦</span>
        に含まれるたんぱく質です。このたんぱく質がパン生地に弾力を与え、
        パンそのものがもちもちとした食感になるのです。
        多くの人にとっては無害ですが、
        <span className="underline">セリアック病</span>や
        <span className="underline">グルテン不耐症</span>、
        <span className="underline">小麦アレルギーのある人々</span>には、
        軽い不快感から重い健康問題まで引き起こす可能性があります。
      </p>
      <SectionHeading>日本でグルテンフリーが難しい理由は</SectionHeading>
      <p>
        日本の伝統的な食事は主にお米であり、これは自然にグルテンフリーです。しかし、現代の日本料理には
        <span className="underline">グルテンが隠れていることが多く</span>
        、以下のような理由でグルテンフリーが難しいと感じるかもしれません：
      </p>
      <ol className="text-left list-decimal list-inside ">
        <li>
          <span className="font-bold">醤油（しょうゆ）:</span>{" "}
          日本の伝統的な醤油は小麦を使って醸造されているため、グルテンが含まれています。
        </li>
        <li>
          <span className="font-bold"> 衣（ころも）:</span>
          天ぷらやとんかつなど、多くの揚げ物には小麦粉が使用されています。
        </li>
        <li>
          <span className="font-bold">ラーメンとうどん: </span>
          これらの人気の麺類は小麦で作られています。
        </li>
        <li>
          <span className="font-bold">ソースやだし:</span>
          多くの日本のソースやだしが、とろみをつけるためにグルテンを含むことがあります。
        </li>
        <li>
          <span className="font-bold">交差汚染:</span>
          料理がグルテンフリーであっても、キッチンでの交差汚染のリスクがあります。
        </li>
        <li>
          <span className="font-bold">言語の壁:</span>
          「グルテンフリー」という概念や食事制限を全てのレストランや食品製造者、スタッフが理解しているわけではありません。
        </li>
        <li>
          <span className="font-bold">選択肢の少なさ:</span>
          日本国内でのグルテンフリーの商品やレストランは、一部の西洋諸国に比べて非常に限られています。
        </li>
      </ol>
    </motion.section>
  );
}
