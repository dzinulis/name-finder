# Name Filter App

## Motivation

Choosing a name for a newborn can be an unwelcome source of conflict for new parents.
The ability to filter and sort given names from a predetermined list can ease this
very important decision.

## Overview

This is a simple web app to filter latvian given names found in the official name day calendar.
Names can be filtered according to:
- gender
- month
- length

and sorted
- by date
- alphabetically
- by length

Currently the language of the app is Latvian, as the choice of given names is sourced
from the Latvian name day calendar, however the choice of languages shall be expanded
as more name day calendars are added.

## Used software packages

- TypeScript
- Vite
- React
- Tanstack Router
- Ant Design

## Running locally

1. Clone the repository:

```shell
git clone https://github.com/dzinulis/name-finder.git
cd name-finder
```
2. Install necessary packages:

```shell
npm install
```

3. Run JSON server in the background code:

```shell
npm run server
```

4. Run the app:
```shell
npm run dev
```

4. Open in browser:

Open [localhost:5173](http://localhost:5173/) in your browser of choice

## Features to be added in the future:

Missing features to be added in the near future:
- multiple language support
- extended name day calendar
- different layout for desktop and mobile devices
- switch between light and dark mode
- path parameters

Missing features to be added in the far future:
- other countries' name day calendars
- add name origin to database (germanic, slavic, baltic, greek, etc.)
- add name popularity from PMLP database
