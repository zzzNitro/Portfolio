## Personal Portfolio

[Live Portfolio Website](https://www.dexforge.com)

## Get started

```
npm i && npm run dev
```

## About repo

- Using NextJs
- React
- Styled components (each component has a corresponding ComponentStyles.js file)

[Thanks to UltimaQA for the inspiration and guidance](https://www.youtube.com/watch?v=8vfQ6SWBZ-U) 


## I'm Pablo Benito

- 🌌 I’m a Fullstack Developer from Chile 
- 🔭 I’m currently working on [Personality Feed]
- 🌱 I’m currently learning **Solidity** and **MongoDB**
- 💬 Ask me about **react, django, node, TDD,  jest**
- 📫 How to reach me **pablo.benito@rocketmail.com**
- ⚡ Fun fact **I've led over 20 people in competitive gaming and reached top 10% on Warframe leaderboards**

## Testing

### visual testing

For visual testing I had to enable an [ignore threhold](https://docs.happo.io/docs/compare-threshold)

How do we test all of the urls in our app?

What about timelineData.js, do we need to write a snapshot test for it?

- No, since the data appears in our visual tests, it's not necessary

### front-end perf

`cy.lighthouse(), Electron is not supported. Skipping...` error was a result of running Cypress on Electron. Changing to Chrome browser fixed the issue.

### updating npm packages

Use [npm-check](https://koalatea.io/how-to-update-all-your-npm-packages-at-once/)
