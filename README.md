# tinyproofs-react-practice

A small React learning repo for building Tinyproofs-like UI pieces step by step.

## Learning workflow

We will work like a tiny product team:

1. ChatGPT creates a lesson branch with UI scaffolding and TODOs.
2. You pull the branch locally.
3. You complete the React learning task.
4. You commit and push your change.
5. ChatGPT reviews the diff and gives the next task.

`main` should stay clean. Lesson work happens on branches like `lesson/01-components`, `lesson/02-props`, and `lesson/03-list-rendering`.

## Lesson 01: JSX, components, props

Status: merged into `main`.

Goal:

- Understand how React UI is split into components.
- Follow imports and exports across files.
- Read object data through props.
- Make one safe data edit, commit it, and push it.

## Lesson 02: props practice

Status: merged into `main`.

Goal:

- Compare passing one object prop versus passing individual props.
- Understand default prop values.
- Keep a commit focused on one learning task.

## Lesson 03: list rendering with map

Branch: `lesson/03-list-rendering`

Goal:

- Replace repeated JSX with `array.map(...)`.
- Learn why React list items need a `key` prop.
- Keep the rendered UI the same while improving the code structure.

Files to inspect:

- `src/App.jsx`
- `src/components/ProjectGallery.jsx`
- `src/components/CompactProjectCard.jsx`
- `src/data/projects.js`

Your task:

1. Pull the latest `main`.
2. Check out `lesson/03-list-rendering`.
3. Open `src/components/ProjectGallery.jsx`.
4. Replace the three repeated `<CompactProjectCard />` calls with `projects.map(...)`.
5. Add `key={project.id}` to the rendered card.
6. Commit and push only `src/components/ProjectGallery.jsx`.

Expected idea:

```jsx
{projects.map((project) => (
  <CompactProjectCard
    key={project.id}
    title={project.title}
    category={project.category}
    proofScore={project.proofScore}
    ctaLabel={`Open ${project.title}`}
  />
))}
```

## Commands

```bash
git checkout main
git pull origin main
git fetch origin
git checkout lesson/03-list-rendering
npm install
npm run dev
```

After your edit:

```bash
git status
git diff
git add src/components/ProjectGallery.jsx
git commit -m "Complete lesson 03 list rendering exercise"
git push origin lesson/03-list-rendering
```

## Git note for junior engineers

Before every commit, run:

```bash
git status
git diff
```

`git status` tells you which files changed. `git diff` shows the exact code changes. This habit prevents accidental commits.

For this lesson, the important Git habit is **small scope**: only `src/components/ProjectGallery.jsx` should be in your learner commit.
