# Data Duel App

## Getting Started

### Prerequisites

To install the software, you will need the following:

Node.js and npm:
You can install the latest version of npm globally by running the command `npm install npm@latest -g`.
You can install Node.js using nvm (Node Version Manager) by running `nvm install v20`.

### Installation

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the Teams tab.

## The Brief

The application has 2 tabs: Teams & Duel.

#### Teams

This tab displays all the teams available in separate cards. Every card has:

- Logo of the team
- Name of the team
- A button called `Select`.

On clicking the `Select` button, the team will get selected to be displayed against another team in the Duel screen.

On selecting the second team card:

- Buttons `Reset` and `Compare` will get active
- On clicking `Reset` the teams will get unselected.
- On clicking `Compare`, the user will automatically moved to the Duel tab.

#### Duel

This tab gives users the ability to compare the performance of the teams selected. It displayes a number of stats, including:

- Teams performance as per the records
- Passing Leaders in the teams
- Rushing Leaders in the teams
- Receiving Leaders in the teams
- Touchdown Leaders in the teams

Along with the players performance in the last five games.

## Authors

Ravneet Singh Anand - [RavneetAnand](https://github.com/RavneetAnand)
