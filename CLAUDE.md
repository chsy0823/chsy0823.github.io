# chsy0823.github.io — Elon's Notes

개인 블로그. 기술 글, 생각 정리, 세미나 후기 등 장르 불문.
Astro 4 + Tailwind CSS 3 + MDX 기반. GitHub Pages 배포.

## 커맨드

```bash
npm run dev      # localhost:4321
npm run build    # dist/ 빌드 (배포 전 검증용)
npm run preview  # 빌드 결과 로컬 확인
```

## 프로젝트 구조

```
src/
├── content/
│   ├── config.ts              # Content Collection 스키마
│   └── blog/
│       └── {slug}/
│           ├── index.mdx      # 글 본문
│           └── *.png          # 이미지는 글과 같은 폴더에 co-locate
├── layouts/
│   └── BaseLayout.astro       # 공통 레이아웃 (nav, footer, CSS import)
├── pages/
│   ├── index.astro            # 홈 (전체 글 목록)
│   ├── about.astro            # About 페이지
│   └── blog/
│       ├── index.astro        # /blog 목록 페이지
│       └── [slug].astro       # 글 상세 페이지
└── styles/
    └── global.css             # Pretendard 폰트, Tailwind base
public/
└── img/                       # favicon, logo 등 정적 파일
.github/workflows/
└── deploy.yml                 # main push 시 GitHub Actions 자동 배포
```

## 새 글 추가하는 법

```bash
mkdir src/content/blog/{slug}
touch src/content/blog/{slug}/index.mdx
```

frontmatter 형식:
```yaml
---
title: "글 제목"
date: YYYY-MM-DD
description: "한 줄 설명 (목록에 표시)"
tags: ["tag1", "tag2"]
draft: false   # true면 빌드에서 제외
---
```

이미지는 같은 폴더에 두고 MDX에서 import:
```mdx
import myImage from './myimage.png';

<img src={myImage.src} alt="설명" style={{ maxWidth: '600px', width: '100%' }} />
```

## 디자인 시스템

**컨셉**: Dark Editorial. 개발자 포트폴리오가 아닌 개인 노트 블로그.

**색상 (하드코딩된 값 — 변경 시 일관성 유지 필요)**
| 용도 | 값 |
|------|-----|
| 배경 | `#0a0a0a` |
| 텍스트 기본 | `#e4e4e7` |
| 텍스트 보조 | `#a1a1aa` |
| 텍스트 약함 | `#71717a` |
| 구분선/border | `#1c1c1c` |
| 강조 (teal) | `text-teal-400` |
| 선택 하이라이트 | `bg-teal-500/25` |

**폰트**
- 본문: Pretendard Variable (CDN, 한국어 최적화)
- 코드: JetBrains Mono → Fira Code (fallback)

**prose (글 본문) 클래스 조합**
```
prose prose-invert prose-zinc max-w-none
prose-p:text-[#a1a1aa] prose-p:leading-relaxed
prose-a:text-teal-400 prose-a:no-underline hover:prose-a:underline
prose-strong:text-white
prose-code:text-teal-300 prose-code:bg-[#141414]
prose-pre:bg-[#111111] prose-pre:border prose-pre:border-[#222222]
prose-headings:text-white prose-headings:font-bold
prose-blockquote:border-teal-500 prose-blockquote:text-[#71717a]
prose-hr:border-[#1c1c1c]
```

## 블로그 철학

- **이름 노출 최소화**: nav/홈은 "Elon's Notes", 실명은 footer와 About에만.
- **카테고리 없음**: 태그만. `tags: ["distributed_system", "life", "career"]` 등 자유롭게.
- **완벽주의 금지**: 잘 정리 안 됐어도 올린다. 기록이 목적.
- **글 분류 기준**: 기술(`distributed_system`, `architecture`, `go`, `k8s`), 생각(`life`, `career`), 독서(`book`), 세미나(`seminar`) 등.

## 배포

`main` 브랜치에 push하면 GitHub Actions가 자동 빌드 + 배포.
워크플로우: `.github/workflows/deploy.yml`
GitHub Pages Source: GitHub Actions (레포 Settings > Pages에서 확인)

## 현재 글 목록

| 파일 | 제목 | 날짜 |
|------|------|------|
| bigtable1 | Bigtable 분석 Part 1 | 2021-01-25 |
| bigtable2 | Bigtable 분석 Part 2 | 2021-01-26 |
| bigtable3 | Bigtable 분석 Part 3 | 2021-01-27 |
| bigtable4 | Bigtable 분석 Part 4 | 2021-01-28 |
