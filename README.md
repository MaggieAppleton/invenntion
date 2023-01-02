# How to Run

This project uses `yarn`, and runs on node 18 (check .nvmrc for the exact version). Run it locally with `yarn dev`.

<br />

# Design Brief

## Concept

A venn diagram that combines two concepts or ideas for you. Using a generative language model, we give the user three++ possible ways to combine their initial concepts.

Uses OpenAI's GPT-3 to generate ideas.

Users can save generated results as text or PNGs.

### Initial concept sketch

![](images/sketch2.jpg)

### [Wireframes](/design-process/wireframes.md)

![](images/onboarding.png)
![](images/main-flow.png)

## [Visual Design Mockups](/design-process/visual-designs.md)

![](images/invenntion2.jpg)
![](images/invenntion6.jpg)
![](images/invenntion9.jpg)

<br />

## WIP Proof of Concept

Basic functionality working on the prototype

![](images/invenntion-process.jpg)

<br />

## Requirements

### Essential

Users should be able to:

- enter their OpenAI API key to make requests
  - make sure that API key isn't stored or exposed to 3rd parties
- enter two words or sentences. Max length 100 characters.
- click a button/area that triggers the combination action: sends a request to OpenAI
  - use text-davinici-003
  - return three options, each less than 180 characters
- see a loading animation while the request is resolving
- see the returned results
- be able to swipe/scroll/click through the three returned results
- be able to reset the whole venn to be blank
- be able to edit the existing inputs and re-run the generation

### Nice to have

- be able to generate more than three results
  - this could be re-running the whole generation, or clicking somewhere to generate a fourth or fifth result in addition to the first three
- copy generated results to the clipboard
- save a PNG of the final venn digram with inputs and generated results
- shared a generated PNG and link to Twitter
- animated rainbow gradient on venn circles – maybe a requirement 🌈

## Todos

- [x] Wireframe main user flow
- [x] Wireframe onboarding sequence
- [ ] Final designs that meet all the requirements
- [ ] Write an example dataset of prompts and good answers to fine-tune on
- [ ] Prompt engineering
- [ ] Research how we can accept OpenAI keys and use them for API requests without compromising user security
