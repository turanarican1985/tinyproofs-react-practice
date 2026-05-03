# tinyproofs-react-practice

A small React learning repo for building Tinyproofs-like UI pieces step by step.

## Learning workflow

We will work like a tiny product team:

1. ChatGPT creates a lesson branch with UI scaffolding and TODOs.
2. You pull the branch locally.
3. You complete the React learning task.
4. You commit and push your change.
5. ChatGPT reviews the diff and gives the next task.

`main` should stay clean. Lesson work happens on branches like `lesson/01-components` and `lesson/02-props`.

## Lesson 01: JSX, components, props

Status: merged into `main`.

Goal:

- Understand how React UI is split into components.
- Follow imports and exports across files.
- Read object data through props.
- Make one safe data edit, commit it, and push it.

## Lesson 02: props practice

Branch: `lesson/02-props`

Goal:

- Compare passing one object prop versus passing individual props.
- Understand default prop values.
- Keep a commit focused on one learning task.

Files to inspect:

- `src/App.jsx`
- `src/components/CompactProjectCard.jsx`
- `src/data/projects.js`

Your task:

1. Pull the latest branches.
2. Check out `lesson/02-props`.
3. Open `src/App.jsx`.
4. Find the empty `<CompactProjectCard />` under `TODO 01`.
5. Pass these props from `secondProject`:
   - `title`
   - `category`
   - `proofScore`
   - `ctaLabel`
6. Commit and push only `src/App.jsx`.

Expected idea:

```jsx
<CompactProjectCard
  title={secondProject.title}
  category={secondProject.category}
  proofScore={secondProject.proofScore}
  ctaLabel="View profile card project"
/>
```

## Commands

```bash
git checkout main
git pull origin main
git fetch origin
git checkout lesson/02-props
npm install
npm run dev
```

After your edit:

```bash
git status
git diff
git add src/App.jsx
git commit -m "Complete lesson 02 props exercise"
git push origin lesson/02-props
```

## Git note for junior engineers

Before every commit, run:

```bash
git status
git diff
```

`git status` tells you which files changed. `git diff` shows the exact code changes. This habit prevents accidental commits.

For this lesson, the important Git habit is **small scope**: only `src/App.jsx` should be in your commit.
