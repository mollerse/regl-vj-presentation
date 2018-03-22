# [NO] Musikkvisualisering med WebGL og regl
([EN] Visualize music with WebGL and regel)

45 min presentation given at BEKK Fagdag (Sept. '17), NTNU TechTalks (Feb. '18) and BartJS (March '18). The talk is in Norwegian, but the code examples should be legible for anyone.

The slides can be viewed at http://mollerse.github.io/regl-vj-presentation/

## Edit

`npm i && npm start` to see a local copy of the slides.

All code examples can be found under `/webgl-examples`. `index.js` is the entry point for all examples. Some of the examples have a `index-for-slides.js`-file, it is the same as `index.js`, just wrapped in a module to use for embedding in the slides.

Every step of the example can be viewed seperatly with `npm run [example]`. For instance `npm run multiple`.

To only view the finished demo do `npm run final`.

# Abstract

[NO]
WebGL gir deg muligheten til å drive med 3D-programmering i nettleseren og åpner for en del kule ting som før har vært forbeholdt desktop og native applikasjoner. Men WebGL og 3D-programmering kan være litt tungt å komme i gang med og involverer mange avanserte konsepter.

For å gjøre det til et morsomt prosjekt kombinerte jeg kreativ programmering, musikk, og et lite WebGL-rammeverk som heter regl, for å lære meg mer om 3D-programmering og WebGL. Dette er historien om det prosjektet.

Det blir litt grunnleggende intro til WebGL og biblioteket regl (http://regl.party), hvordan du kan visualisere musikk/lyd, og litt filosofering om hvordan du kan lære deg nye ting med kreativ programmering.

[EN]
WebGL gives you the ability to do 3D-programming in the browser and opens up for some cool things that used to be restricted to desktop and native applications. But WebGL and 3D-programming can be a little tough to get started with and involves alot of advanced concepts.

To make it into a fun project for myself, I combined creative programming, music and a small WebGL-framework called regl, to teach myself more about 3D-programming and WebGL. This is the story of that project.

We will visit some basics for WebGL and regl, how you can visualize music/sound, and some musings on how to learn new things with creative programming.
