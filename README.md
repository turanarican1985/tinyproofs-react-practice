# tinyproofs-react-practice

A small React learning repo for building Tinyproofs-like UI pieces step by step.

## Learning workflow

We will work like a tiny product team:

1. ChatGPT creates a lesson branch with UI scaffolding and TODOs.
2. You pull the branch locally.
3. You complete the React learning task.
4. You commit and push your change.
5. ChatGPT reviews the diff and gives the next task.

`main` should stay clean. Lesson work happens on branches like `lesson/01-components`, `lesson/02-props`, `lesson/03-list-rendering`, and `lesson/04-conditional-rendering`.

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

Status: merged into `main`.

Goal:

- Replace repeated JSX with `array.map(...)`.
- Learn why React list items need a `key` prop.
- Keep the rendered UI the same while improving the code structure.

## Lesson 04: conditional rendering

Branch: `lesson/04-conditional-rendering`

Goal:

- Show different UI depending on prop values.
- Practice `&&`, ternary expressions, or small helper variables.
- Remove placeholder UI and replace it with real conditional UI.

Files to inspect:

- `src/App.jsx`
- `src/components/ProjectStatusPanel.jsx`
- `src/data/projects.js`

Your task:

1. Pull the latest `main`.
2. Check out `lesson/04-conditional-rendering`.
3. Open `src/components/ProjectStatusPanel.jsx`.
4. Replace the first placeholder with status-specific conditional rendering:
   - Featured → `Featured project is ready to highlight.`
   - Draft → `Draft project still needs polish.`
   - Anything else → `Practice project is here for learning.`
5. Replace the second placeholder with a conditional strong-score message:
   - If `project.proofScore >= 75`, show `Strong proof score.`
   - Otherwise show nothing.
6. Commit and push only `src/components/ProjectStatusPanel.jsx`.

Expected idea:

```jsx
{project.status === "Featured" ? (
  <p>Featured project is ready to highlight.</p>
) : project.status === "Draft" ? (
  <p>Draft project still needs polish.</p>
) : (
  <p>Practice project is here for learning.</p>
)}

{project.proofScore >= 75 && <p>Strong proof score.</p>}
```

## Commands

```bash
git checkout main
git pull origin main
git fetch origin
git checkout lesson/04-conditional-rendering
npm install
npm run dev
```

After your edit:

```bash
git status
git diff
git add src/components/ProjectStatusPanel.jsx
git commit -m "Complete lesson 04 conditional rendering exercise"
git push origin lesson/04-conditional-rendering
```

## Git note for junior engineers

Before every commit, run:

```bash
git status
git diff
```

`git status` tells you which files changed. `git diff` shows the exact code changes. This habit prevents accidental commits.

For this lesson, the important Git habit is **small scope**: only `src/components/ProjectStatusPanel.jsx` should be in your learner commit.
