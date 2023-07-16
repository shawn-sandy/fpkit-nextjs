# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.2.5](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.2.4...v0.2.5) (2023-07-16)

### Bug Fixes

- **test.tsx:** change import statement from "@fpkit/nextra" to "@fpkit/nextjs" to fix module not found error ([395de8e](https://github.com/shawn-sandy/fpkit-nextjs/commit/395de8e10b662413f50a922e32798a2bcfa0ad92))

### Features

- **layout.tsx:** add support for a navbar component in the root layout to improve navigation ([8fe03d5](https://github.com/shawn-sandy/fpkit-nextjs/commit/8fe03d556594700a38e7d127ea8629f762dc165a))
- **pg.tsx:** pass orgName and copyInfo props to PageFooter component to display organization name and copy information in the footer ([71ceda0](https://github.com/shawn-sandy/fpkit-nextjs/commit/71ceda014ac41cde58436f8f552542282f97ea08))

## [0.2.4](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.2.3...v0.2.4) (2023-06-20)

### Features

- **fpkit-nextjs:** add filter-mdx-pages and components exports to libs/index.ts ([3787eaf](https://github.com/shawn-sandy/fpkit-nextjs/commit/3787eafa89a8d912d283f90397a7901ac8146b5f))
- **fpkit-nextjs:** add hooks folder with usePageOpts and useConfig hooks ([d1664ab](https://github.com/shawn-sandy/fpkit-nextjs/commit/d1664ab89a389733f09fb458b6b91599950431eb))

## [0.2.3](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.2.2...v0.2.3) (2023-06-19)

### Features

- **fpkit-nextjs:** add PG component to create a compound page layout with a header and children components ([b1d1248](https://github.com/shawn-sandy/fpkit-nextjs/commit/b1d124871432207359237bdffd38c890c8ae9639))
- **fpkit-nextjs:** add React import to landmarks.tsx, page-footer.tsx, and pg.test.tsx to fix compilation errors ([f668ea1](https://github.com/shawn-sandy/fpkit-nextjs/commit/f668ea1a5a464319f2e002328db39e0f0692990a))
- **layout.tsx:** import and use PG.Footer component from fpkit-nextjs package to render the page footer ([bd74577](https://github.com/shawn-sandy/fpkit-nextjs/commit/bd745774a2a0b4d0689ffe402f990a41b6161243))
- **layout:** add MainSection component to render the main section of the page ([343906d](https://github.com/shawn-sandy/fpkit-nextjs/commit/343906df2d5ca9419c6d4daaddb9d26071227c7a))
- **next:** add new components for page header, page main, and page footer to improve semantics and accessibility of the app layout ([65250f1](https://github.com/shawn-sandy/fpkit-nextjs/commit/65250f14df8399fd3799b1498e63853b0c1b820c))
- **next:** add PageHeader component to About page for better user experience ([7d6362c](https://github.com/shawn-sandy/fpkit-nextjs/commit/7d6362cd1244eb3e1fe8f56f2570aa061fc1b3bc))
- **next:** add Pg component to create a compound page layout ([5fef066](https://github.com/shawn-sandy/fpkit-nextjs/commit/5fef06662909d575be8729b53549fc8782aaa114))
- **pg.tsx:** add NavSection component to render a navigation section in the page layout. ([d2c783b](https://github.com/shawn-sandy/fpkit-nextjs/commit/d2c783b7e382dca35e81fce91552c01381356fde))

## [0.2.2](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.2.1...v0.2.2) (2023-06-17)

### Features

- **components:** add support for a configurable background color to Navbar component ([3f9d6ca](https://github.com/shawn-sandy/fpkit-nextjs/commit/3f9d6ca58fa8e5a61a7d3f85a1a3cddc6c879848))

## [0.2.1](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.2.0...v0.2.1) (2023-06-16)

### Bug Fixes

- 🚑 fix failing axe test on Toc components ([99bd562](https://github.com/shawn-sandy/fpkit-nextjs/commit/99bd5627872434b0c82ddbb03a8e7427ca2f2c92))

### Features

- 🏗️ add nextjs tp apps ([34734e8](https://github.com/shawn-sandy/fpkit-nextjs/commit/34734e807b56d8e0b3bb3a2542d06df021803c4e))
- 🏗️ update the article list component ([1f842eb](https://github.com/shawn-sandy/fpkit-nextjs/commit/1f842eb68fa8f294ceb0f8dbd2a568737f22ea0d))
- 🤩 add page list component ([fbf3ced](https://github.com/shawn-sandy/fpkit-nextjs/commit/fbf3cedd9c746ecda50e46880f02ecc12c16d184))
- add hr to pageList component ([9c2de5a](https://github.com/shawn-sandy/fpkit-nextjs/commit/9c2de5afd805159e3396b3bdb7096961e60ca259))
- **next:** add navbar component to layout and create navbar component ([a57d197](https://github.com/shawn-sandy/fpkit-nextjs/commit/a57d197f31326ea24be6027d602b2c682d9e796f))
- **next:** add Title component from @fpkit/react to Header component ([8982478](https://github.com/shawn-sandy/fpkit-nextjs/commit/8982478dde9f5526808ddcbbd168c0001937bd9a))
- update next/link w/fpkit/link ([9bab134](https://github.com/shawn-sandy/fpkit-nextjs/commit/9bab1345a783378370d62782ed827a9f06c77042))

# [0.2.0](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.1.6...v0.2.0) (2023-04-16)

### Build System

- 📛 rename fpkit/nextjs to fpkit/nextra ([a6431be](https://github.com/shawn-sandy/fpkit-nextjs/commit/a6431be600bada23557a94b8c1dda926a036ca0c))

### Features

- 🌟 conditionally hide toc if items <=1 ([a19ed68](https://github.com/shawn-sandy/fpkit-nextjs/commit/a19ed686481d5ab7beea54bfa9de1b601e2bcbcd))
- 🚧 add/update keys for Navlist and Toc ([b6b65aa](https://github.com/shawn-sandy/fpkit-nextjs/commit/b6b65aaef1b947bf7c3013f8b1df25c3c64a9990))

### BREAKING CHANGES

- 🧨 fpkit/nextjs is now fpkit/nextra

## [0.1.6](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.1.5...v0.1.6) (2023-04-15)

### Features

- 🏗️ add basic toc component ([1915195](https://github.com/shawn-sandy/fpkit-nextjs/commit/1915195a6997072ba961e35b83d9ba9de49ad548))
- 🤩 add <head/> call to the theme.tsx ([6158340](https://github.com/shawn-sandy/fpkit-nextjs/commit/61583409db17e5cf2755203ca69d1669151099c3))
- 🤩 add a toc component ([5eee3f5](https://github.com/shawn-sandy/fpkit-nextjs/commit/5eee3f5e06de105627f5f2c31d5366698ba766b7))
- add table w/div [data-scroll] wrapper to mdx components ([2010320](https://github.com/shawn-sandy/fpkit-nextjs/commit/201032069a67c3184b37a15c0c7c1e5a98877957))

## [0.1.5](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.1.4...v0.1.5) (2023-04-10)

**Note:** Version bump only for package @fpkit/nextjs

## [0.1.4](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.1.3...v0.1.4) (2023-04-08)

### Features

- 🏗️ resolve the issue with the nav list types ([2bfb59a](https://github.com/shawn-sandy/fpkit-nextjs/commit/2bfb59ad99ec9cda78b9949e269a6694ab979f44))
- 🤩 add mdx-components to theme-config ([2ee1cc7](https://github.com/shawn-sandy/fpkit-nextjs/commit/2ee1cc79a0ef53975c170be406e9eb47871292ee))

## [0.1.3](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.1.2...v0.1.3) (2023-04-05)

### Bug Fixes

- 🚒 update and remove files/package to resolve build issues ([322db1d](https://github.com/shawn-sandy/fpkit-nextjs/commit/322db1dabdaeb93e35a8f835897b877766e12a60))

### Features

- 🌟 add navlist feature ([e630222](https://github.com/shawn-sandy/fpkit-nextjs/commit/e630222ee647ab14f360dbd29557a08181a3bfcf))
- 🌟 feat page type filter ([4c1c138](https://github.com/shawn-sandy/fpkit-nextjs/commit/4c1c138da2ad8f06bb261bf28db081f55f84c58f))
- 🤩 add sort method to page filter ([b42acae](https://github.com/shawn-sandy/fpkit-nextjs/commit/b42acae6250844f8b5c75c67da4ea910c956816d))

## [0.1.2](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.1.1...v0.1.2) (2023-04-01)

### Features

- 🚗 add nav list to index.ts exports ([a7a271e](https://github.com/shawn-sandy/fpkit-nextjs/commit/a7a271e0373ea87e874f05d2c211c63b9dfd845a))
- add nav-brand story/unit test ([5d24982](https://github.com/shawn-sandy/fpkit-nextjs/commit/5d24982e72634edfbb4b9e06c3e87c8b240c284f))
- add nav-list component ([98ae3ad](https://github.com/shawn-sandy/fpkit-nextjs/commit/98ae3ad13e669f7e6b73c01f8714369eae16295a))

## [0.1.1](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.1.0...v0.1.1) (2023-04-01)

**Note:** Version bump only for package @fpkit/nextjs

# [0.1.0](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.0.15...v0.1.0) (2023-04-01)

**Note:** Version bump only for package @fpkit/nextjs

## [0.0.15](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.0.14...v0.0.15) (2023-04-01)

**Note:** Version bump only for package @fpkit/nextjs

## [0.0.14](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.0.13...v0.0.14) (2023-04-01)

### Features

- 🌟 add conditional rendering for post list ([ebb6388](https://github.com/shawn-sandy/fpkit-nextjs/commit/ebb638867937d59e9c0ea96480ae7fd83b5fa25e))
- 🏗️ set article padding to 1rem ([896688a](https://github.com/shawn-sandy/fpkit-nextjs/commit/896688a2d3e426adc35e8b67476faf814c0b75af))
- 🔥 remove the navbar component ([628bb2f](https://github.com/shawn-sandy/fpkit-nextjs/commit/628bb2f1cdfd88ee923a6ce9e5eb425e84217e68))

## [0.0.13](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.0.12...v0.0.13) (2023-03-31)

**Note:** Version bump only for package @fpkit/nextjs

## [0.0.12](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.0.11...v0.0.12) (2023-03-31)

**Note:** Version bump only for package @fpkit/nextjs

## [0.0.11](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.0.10...v0.0.11) (2023-03-31)

### Features

- 📖 add stories for navigation component ([4e0a2c6](https://github.com/shawn-sandy/fpkit-nextjs/commit/4e0a2c6959c6f56a85e422c89421e46d929be32c))

## [0.0.10](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.0.9...v0.0.10) (2023-03-31)

**Note:** Version bump only for package @fpkit/nextjs

## [0.0.9](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.0.8...v0.0.9) (2023-03-31)

### Features

- ♻️ change library components to MDXComponents ([1bbb477](https://github.com/shawn-sandy/fpkit-nextjs/commit/1bbb477ea512aca438300b34c5ce15262e46d587))
- 🌟 add library for render mdx components ([b61280b](https://github.com/shawn-sandy/fpkit-nextjs/commit/b61280b6df3ff0e8f4b95b582528ee06a6ef367a))
- 🌟 add sort option to filter-mdx-pages ([e0429bb](https://github.com/shawn-sandy/fpkit-nextjs/commit/e0429bb116c0e09fd44e82b394997db9179ced98))
- 🏗️ add filter-mdx-pages ([6e29118](https://github.com/shawn-sandy/fpkit-nextjs/commit/6e2911861491cca9fbf4f2b20967992dbd238763))
- 🏗️ add tsconfig.json to nextra-blog ([81663a3](https://github.com/shawn-sandy/fpkit-nextjs/commit/81663a30579b95d18af8f35b257b7e6e8f70876d))
- 🏗️ export all types/interfaces from fpkit ([733d814](https://github.com/shawn-sandy/fpkit-nextjs/commit/733d81438c0fd2fb05406e467cd80bf7d78a9040))
- 🔥 remove unused code/variables ([94ed4c8](https://github.com/shawn-sandy/fpkit-nextjs/commit/94ed4c80c982cd6b947c702e9e63751419ac0877))
- 🚗 add post list page ([2523af9](https://github.com/shawn-sandy/fpkit-nextjs/commit/2523af9fcd0a69e700bd67184ee3aa10a8181500))
- 🚧 add post list component ([eb88019](https://github.com/shawn-sandy/fpkit-nextjs/commit/eb880196a062afb4c81c5dd5848405eb3f4152ea))
- 🚧 modify the header components ([0bf5642](https://github.com/shawn-sandy/fpkit-nextjs/commit/0bf5642016776828f3c2b0f03443b17c08a6bff4))
- 🚧 rename types headerProps ([e1bdf78](https://github.com/shawn-sandy/fpkit-nextjs/commit/e1bdf7811a9f27a6621c9282817533377fe594fc))
- export filterMdxPages types ([49dd965](https://github.com/shawn-sandy/fpkit-nextjs/commit/49dd965e6e75896fb0f7452f4e11de380f117347))

### BREAKING CHANGES

- 🧨 filter-mdx-pages
- 🧨 rename types headerProps

## [0.0.8](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.0.7...v0.0.8) (2023-03-27)

### Features

- 🌟 update theme config/opts ([f262762](https://github.com/shawn-sandy/fpkit-nextjs/commit/f262762bb0c40998a0081be1eb05126db729c884))

## [0.0.7](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.0.6...v0.0.7) (2023-03-27)

### Features

- modify useOpts hook ([e318d4e](https://github.com/shawn-sandy/fpkit-nextjs/commit/e318d4e2e4a2667f22c52534879389b0910a004c))

## [0.0.6](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.0.5...v0.0.6) (2023-03-27)

**Note:** Version bump only for package @fpkit/nextjs

## [0.0.5](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.0.4...v0.0.5) (2023-03-27)

### Features

- 🧑‍🏭 remove usePageOpts hook from index.js ([e24900e](https://github.com/shawn-sandy/fpkit-nextjs/commit/e24900e82d67304e0b450c70db318bd5f6540c73))
- 🪶 (fpkit-nextjs) add useFpkit hook ([f619845](https://github.com/shawn-sandy/fpkit-nextjs/commit/f619845db2b46c84ea0a9d2cfb0d91bbca2bd807))
- 🚧 modify add styles to navbar ([308f1cc](https://github.com/shawn-sandy/fpkit-nextjs/commit/308f1cc22f6817cfc5bc2ef993e017e8d43ba258))
- 🚧 update nextra-blog theme ([a8911ea](https://github.com/shawn-sandy/fpkit-nextjs/commit/a8911eadb669b8f3ceca1d616a510a0faad8ca5b))
- modified nav logo ([84dc5c9](https://github.com/shawn-sandy/fpkit-nextjs/commit/84dc5c9120bff30a5918f2546b1f17d8f67e3415))

## [0.0.4](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.0.3...v0.0.4) (2023-03-26)

### Features

- 🏗️ add layout components ([1bc600d](https://github.com/shawn-sandy/fpkit-nextjs/commit/1bc600d4e2f4fa0f718c917462589bc3b8af1b60))

## [0.0.3](https://github.com/shawn-sandy/fpkit-nextjs/compare/v0.0.2...v0.0.3) (2023-03-26)

**Note:** Version bump only for package @fpkit/nextjs
