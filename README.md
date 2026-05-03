# tinyproofs-react-practice

A small React learning repo for building Tinyproofs-like UI pieces step by step.

## Learning workflow

We will work like a tiny product team:

1. ChatGPT creates a lesson branch with UI scaffolding and TODOs.
2. You pull the branch locally.
3. You complete the React learning task.
4. You commit and push your change.
5. ChatGPT reviews the diff and gives the next task.

`main` should stay clean. Lesson work happens on branches like `lesson/01-components`.

## Lesson 01: JSX, components, props

Branch: `lesson/01-components`

Goal:

- Understand how React UI is split into components.
- Follow imports and exports across files.
- Read object data through props.
- Make one safe data edit, commit it, and push it.

Your task:

1. Pull the branch.
2. Run the app.
3. Open these files:
   - `src/App.jsx`
   - `src/components/ProjectCard.jsx`
   - `src/components/ProfileCard.jsx`
   - `src/data/projects.js`
   - `src/data/profiles.js`
4. Change one text value in `src/data/projects.js`.
5. Commit and push.

## Commands

```bash
git clone https://github.com/turanarican1985/tinyproofs-react-practice.git
cd tinyproofs-react-practice
git checkout lesson/01-components
npm install
npm run dev
```

After your edit:

```bash
git status
git diff
git add src/data/projects.js
git commit -m "Update lesson 01 project data"
git push origin lesson/01-components
```

## Git note for junior engineers

Before every commit, run:

```bash
git status
git diff
```

`git status` tells you which files changed. `git diff` shows the exact code changes. This habit prevents accidental commits.
