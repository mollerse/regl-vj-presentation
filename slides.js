import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Fit,
  Link,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Spectacle,
  Slide,
  Text
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import Prism from 'prismjs';
window.Prism = Prism;
import theme from './theme';
const fs = require('fs');

// Examples
import WebGLSlide from './webgl-slide';
import examples from './webgl-examples';

const BigHeading = props => (
  <Heading fit caps lineHeight={1.5} size={1} {...props}>
    {props.children}
  </Heading>
);

const SmallHeading = props => (
  <Heading lineHeight={1.5} fit size={2} {...props}>
    {props.children}
  </Heading>
);

const SmallText = props => (
  <Text className="small-text" {...props}>
    {props.children}
  </Text>
);

const AppearingBlock = props => (
  <Appear {...props}>
    <div>{props.children}</div>
  </Appear>
);

const defaultSlideProps = {
  maxWidth: window.innerWidth - 40,
  maxHeight: window.innerHeight - 40,
  align: 'center center'
};

class Slides extends Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['slide']} progress="none" controls={false}>
          <Slide {...defaultSlideProps}>
            <BigHeading>VJing med regl</BigHeading>
            <BigHeading>&mdash; WebGL with a twist</BigHeading>
            <SmallHeading>Stian Veum Møllersen / @mollerse</SmallHeading>
            <SmallText>Content warnings: Motion</SmallText>
          </Slide>
          <Slide {...defaultSlideProps} align="center flex-start">
            <SmallHeading>&nbsp;VJING&nbsp;</SmallHeading>
            <Text>What the J?</Text>
            <SmallText>V står for Video.</SmallText>
          </Slide>
          <Slide {...defaultSlideProps}>
            <BlockQuote>
              <Quote>
                VJing (pronounced: VEE-JAY-ing) is a broad designation for
                realtime visual performance.
              </Quote>
              <Cite>Wikiepdia</Cite>
            </BlockQuote>
          </Slide>
          <Slide {...defaultSlideProps} align="center hack">
            <Text className="attribution">
              audiograph.xyz av Matt DesLauriers
            </Text>
            <iframe
              height="100%"
              width="100%"
              style={{
                border: 'none'
              }}
              src="http://audiograph.xyz"
            />
          </Slide>
          <Slide {...defaultSlideProps} align="center hack">
            <Text className="attribution">
              Dark Sunrise av Steven Wittens / Unconed
            </Text>
            <iframe
              height="100%"
              width="100%"
              style={{
                border: 'none'
              }}
              src="https://christmasexperiments.com/2013/22/dark-sunrise/"
            />
          </Slide>
          <Slide {...defaultSlideProps} align="hack hack">
            <Text className="attribution">Og hvem kan glemme Winamp?</Text>
            <iframe
              width="80%"
              height="615"
              src="https://www.youtube.com/embed/-34Qqd0mAfo?start=78"
              frameborder="0"
              allowfullscreen
            />
            <SmallText>
              Antageligvis de fleste, for jeg innser at jeg har blitt gammel.
            </SmallText>
          </Slide>
          <Slide {...defaultSlideProps}>
            <SmallHeading>Men, hvorfor?</SmallHeading>
            <SmallText>
              De som har hørt meg prate før blir antageligvis ikke overaska nå.
            </SmallText>
          </Slide>
          <Slide {...defaultSlideProps}>
            <BlockQuote>
              <Quote>Det er enklere å lære seg noe når du har det gøy.</Quote>
              <Cite>Noen</Cite>
            </BlockQuote>
          </Slide>
          <Slide {...defaultSlideProps} align="center center">
            <Text>
              Utforsk ny teknologi gjennom kreativitet, blottet for praktiske
              formål.
            </Text>
            <SmallText>
              Skal sies at kreativitet i seg selv er en utrolig viktig egenskap
              for utviklere, men det er en annen talk.
            </SmallText>
          </Slide>
          <Slide {...defaultSlideProps} align="center flex-start">
            <SmallHeading>&nbsp;WebGL&nbsp;</SmallHeading>
            <Text>Hva og hvorfor?</Text>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>
              WebGL er en metode for å vise avansert grafikk i nettleseren.
            </Text>
            <SmallText>Unreal Engine, wooo!</SmallText>
          </Slide>
          <Slide {...defaultSlideProps} align="center hack">
            <Text className="attribution">
              CitiBike Commute av Taylor Baldwin
            </Text>
            <iframe
              height="100%"
              width="100%"
              style={{
                border: 'none'
              }}
              src="https://tbaldw.in/citibike-trips/"
            />
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>WebGL er nettleserens interface mot grafikkortet.</Text>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>
              Gjør GPUens massive beregningskrefter tilgjengelig i nettlesern,
              for å lage grafikk som før var forbeholdt desktop.
            </Text>
          </Slide>
          <Slide {...defaultSlideProps}>
            <SmallText>Approved by BEKK</SmallText>
            <Image src="images/bekkradar.png" />
          </Slide>
          <Slide {...defaultSlideProps} align="center flex-start">
            <SmallHeading>&nbsp;WebGL&nbsp;</SmallHeading>
            <Text>Hvordan?</Text>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>
              Real talk: WebGL er komplisert, annerledes og kravstort.
            </Text>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>
              Det betyr at veien til mestring er full av gøyale og frustrerende
              opplevelser.
            </Text>
            <Appear>
              <Text>Du må bare starte et sted.</Text>
            </Appear>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>Kjernen i WebGL er shadere.</Text>
            <SmallText>Ganske shady greier...</SmallText>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>Shadere er små programmer som kjøres på GPUen.</Text>
            <AppearingBlock>
              <Text>Skrevet i GLSL, en avart av C.</Text>
              <SmallText>There is no escape!</SmallText>
            </AppearingBlock>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>Det finnes to typer shadere:</Text>
            <Appear>
              <Text>Vertex og Fragment.</Text>
            </Appear>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>Vertex Shadere er ansvarlige for å bygge geometrier.</Text>
            <Appear>
              <Text>Som Fragment Shadere kan fargelegge.</Text>
            </Appear>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Image width="100%" src="images/pipeline.svg" />
            <SmallText>
              Kilde: https://en.wikipedia.org/wiki/Graphics_pipeline
            </SmallText>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>Denne pipelinen er drit flink til å tegne trekanter</Text>
            <SmallText>Seriøst liksom</SmallText>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>
              Når WebGL tegner, går den gjennom en buffer av trekanter.
            </Text>
            <AppearingBlock>
              <Text>Hver trekant er tre punkter.</Text>
              <SmallText>Hello, I am Captain Obvious.</SmallText>
            </AppearingBlock>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>Trekantene bygger igjen opp mer komplekse ting.</Text>
            <AppearingBlock>
              <Text>
                En firkant er 2 trekanter. Og en kube er 12 trekanter.
              </Text>
              <SmallText>Captain Obvious strikes again!</SmallText>
            </AppearingBlock>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>
              Punktene som utgjør trekanter lever i et koordinatsystem.
            </Text>
            <Appear>
              <Text>
                Koordinatsystemet til WebGL er en kube, hvor hver akse går fra
                -1 til 1.
              </Text>
            </Appear>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Image width="50%" src="images/clip-space.svg" />
            <SmallText>
              Kilde:
              https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection
            </SmallText>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>
              Det er slitsomt å forholde seg til at alt plasseres langs [-1, 1]
            </Text>
            <Appear>
              <Text>Så vi bruker matte for å fikse problemet.</Text>
            </Appear>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>Matriser lar oss mappe om koordinatsystemer.</Text>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>Model matrix: object &rarr; world.</Text>
            <Appear>
              <Text>View matrix: world &rarr; camera.</Text>
            </Appear>
            <Appear>
              <Text>Projection matrix: camera &rarr; screen.</Text>
            </Appear>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>
              Når vi kombinerer dem får vi en komplett mapping fra et objekt til
              skjermen.
            </Text>
            <SmallText>
              Hvem sa du ikke kom til å få bruk for matte etter skolen?
            </SmallText>
          </Slide>
          <Slide {...defaultSlideProps} align="center flex-start">
            <SmallHeading>&nbsp;REGL&nbsp;</SmallHeading>
            <Text>Hva og hvorfor?</Text>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>regl er et biblotek for å jobbe med WebGL.</Text>
            <SmallText>Ligger liksom litt i navnet.</SmallText>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>regl har sine røtter i stack.gl.</Text>
            <Appear>
              <Text>Som var et prosjekt for å modularisere WebGL.</Text>
            </Appear>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>regl er inspirert av Reacts functional rendering.</Text>
            <Appear>
              <Text>Komposisjon av objects som components i React.</Text>
            </Appear>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>regl tilbyr ikke WebGL wrappers.</Text>
            <AppearingBlock>
              <Text>Du må fortsatt lage geometriene dine selv.</Text>
              <SmallText>npm to the rescue!</SmallText>
            </AppearingBlock>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>Men regl tar seg av state management og det maskinelle.</Text>
            <SmallText>No more gl.bindBuffer \0/</SmallText>
          </Slide>
          <Slide {...defaultSlideProps} align="center flex-start">
            <SmallHeading>&nbsp;REGL&nbsp;</SmallHeading>
            <Text>Hvordan?</Text>
          </Slide>
          <CodeSlide
            align="top"
            bgColor="#333"
            transition={[]}
            className="codeslide"
            lang="js"
            code={fs.readFileSync('./code-slides/regl-api-basic.js', 'utf8')}
            ranges={[
              { loc: [0, 0], title: 'REGL API' },
              { loc: [0, 1], title: 'Instansiering' },
              { loc: [10, 11], title: 'Kommandoer' },
              { loc: [2, 10], title: 'Props' },
              { loc: [3, 5], title: 'Shaders' },
              { loc: [5, 6], title: 'Attributes' },
              { loc: [6, 7], title: 'Elements' },
              { loc: [7, 8], title: 'Uniforms' },
              { loc: [10, 11], title: 'Kommandoer' },
              { loc: [12, 13], title: 'Draw' }
            ]}
          />
          <Slide {...defaultSlideProps}>
            <Text>
              Og mye mer: <a href="http://regl.party/api">regl.party/api</a>
            </Text>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>Hvordan henger dette sammen med VJing?</Text>
            <AppearingBlock>
              <Text>Motivasjon for å lære.</Text>
              <SmallText>Også er det ganske fett da.</SmallText>
            </AppearingBlock>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Image width="80%" src="images/notes.jpg" />
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>3D + penn & papir = &lt;3</Text>
          </Slide>
          <CodeSlide
            align="top"
            bgColor="#333"
            transition={[]}
            className="codeslide"
            lang="js"
            code={fs.readFileSync('./webgl-examples/1_tower/index.js', 'utf8')}
            ranges={[
              { loc: [0, 0], title: 'Tegne et tårn' },
              { loc: [7, 8], title: 'Oppsett' },
              { loc: [9, 10], title: 'Definer vertices' },
              { loc: [10, 14], title: 'Bottom' },
              { loc: [15, 19], title: 'Front' },
              { loc: [20, 24], title: 'Right' },
              { loc: [25, 29], title: 'Back' },
              { loc: [30, 34], title: 'Left' },
              { loc: [35, 39], title: 'Top' },
              { loc: [41, 42], title: 'Definer elements' },
              { loc: [42, 44], title: 'Bottom' },
              { loc: [44, 46], title: 'Front' },
              { loc: [46, 48], title: 'Right' },
              { loc: [48, 50], title: 'Back' },
              { loc: [50, 52], title: 'Left' },
              { loc: [52, 54], title: 'Top' },
              { loc: [56, 63], title: 'Definer colors' },
              { loc: [64, 65], title: 'Returner' },
              { loc: [67, 68], title: 'Putt i en variabel' },
              { loc: [69, 70], title: 'Lager en draw()' },
              { loc: [0, 1], title: 'Importer regl' },
              { loc: [70, 73], title: 'Fyllfarge' },
              { loc: [74, 75], title: 'Oppsett av kall' },
              { loc: [101, 102], title: 'Elements for indeks' },
              { loc: [97, 101], title: 'Attributes' },
              { loc: [102, 103], title: 'Uniforms' },
              { loc: [103, 104], title: 'View matrix' },
              { loc: [1, 2], title: 'Mat4 modulen' },
              { loc: [103, 104], title: 'Lages med lookAt' },
              { loc: [104, 105], title: 'Projection' },
              { loc: [104, 105], title: 'Regl kaller fn' },
              { loc: [105, 112], title: 'mat4 hjelp igjen' },
              { loc: [84, 97], title: 'Vertex shader' },
              { loc: [85, 86], title: 'Setter precision' },
              { loc: [86, 89], title: 'Deklarerer in vars' },
              { loc: [89, 90], title: 'Deklarerer ut vars' },
              { loc: [91, 96], title: 'Jobben' },
              { loc: [75, 84], title: 'Fragment shader' },
              { loc: [117, 118], title: 'Kaller draw' }
            ]}
          />
          <Slide {...defaultSlideProps} align="hack hack">
            <WebGLSlide fn={examples[1]} />
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>Ikke veldig imponerende.</Text>
            <SmallText>Ser ikke 3D ut en gang!</SmallText>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>Vi justerer på kameraet!</Text>
          </Slide>
          <CodeSlide
            align="top"
            bgColor="#333"
            transition={[]}
            className="codeslide"
            lang="js"
            code={fs.readFileSync('./webgl-examples/2_camera/index.js', 'utf8')}
            ranges={[
              { loc: [0, 0], title: 'Justerbart kamera' },
              { loc: [7, 8], title: 'Tower er lik' },
              { loc: [75, 76], title: 'Oppsett av kall' },
              { loc: [103, 104], title: 'Uniforms' },
              { loc: [104, 113], title: 'View matrix' },
              { loc: [104, 105], title: 'regl gir oss tick' },
              { loc: [70, 71], title: 'Ved å bruke frame' },
              { loc: [104, 113], title: 'View matrix' },
              { loc: [105, 106], title: 'Finner en faktor' },
              { loc: [106, 112], title: 'Regn ut ny matrix' },
              { loc: [114, 123], title: 'Projection matrix' },
              { loc: [85, 98], title: 'Vertex shader' },
              { loc: [92, 97], title: 'Uendret' },
              { loc: [128, 129], title: 'Kaller draw' }
            ]}
          />
          <Slide {...defaultSlideProps} align="hack hack">
            <WebGLSlide fn={examples[2]} />
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>Nå kan vi tydelig se 3D-effekten!</Text>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>Fortsatt litt kjedelig med bare ett tårn.</Text>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>Heldigvis har regl gode APIer for komposisjon!</Text>
          </Slide>
          <CodeSlide
            align="top"
            bgColor="#333"
            transition={[]}
            className="codeslide"
            lang="js"
            code={fs.readFileSync('./code-slides/scoped-commands.js', 'utf8')}
            ranges={[
              { loc: [0, 0], title: 'Scoping' },
              { loc: [10, 17], title: 'En komponent' },
              { loc: [2, 9], title: 'En annen komponent' },
              { loc: [18, 21], title: 'Props blir passed' }
            ]}
          />
          <Slide {...defaultSlideProps}>
            <Text>Dette kan vi bruke til å dele opp scena vår.</Text>
          </Slide>
          <CodeSlide
            align="top"
            bgColor="#333"
            transition={[]}
            className="codeslide"
            lang="js"
            code={fs.readFileSync(
              './webgl-examples/3_multiple/camera.js',
              'utf8'
            )}
            ranges={[
              { loc: [0, 0], title: 'camera.js' },
              { loc: [0, 0], title: 'Kameraet i en fil' },
              { loc: [2, 11], title: 'Med view' },
              { loc: [12, 21], title: 'Og projection' },
              { loc: [22, 27], title: 'Eksporter fn' }
            ]}
          />
          <CodeSlide
            align="top"
            bgColor="#333"
            transition={[]}
            className="codeslide"
            lang="js"
            code={fs.readFileSync(
              './webgl-examples/3_multiple/tower.js',
              'utf8'
            )}
            ranges={[
              { loc: [0, 0], title: 'tower.js' },
              { loc: [4, 5], title: 'Tower er lik' },
              { loc: [71, 80], title: 'Sine egne shaders' },
              { loc: [80, 93], title: 'Sine egne shaders' },
              { loc: [93, 98], title: 'og verdier' },
              { loc: [64, 68], title: 'Eksporter fn' },
              { loc: [66, 67], title: 'som tar config' },
              { loc: [68, 69], title: 'vi kan bruke' }
            ]}
          />
          <CodeSlide
            align="top"
            bgColor="#333"
            transition={[]}
            className="codeslide"
            lang="js"
            code={fs.readFileSync(
              './webgl-examples/3_multiple/ground.js',
              'utf8'
            )}
            ranges={[
              { loc: [0, 0], title: 'ground.js' },
              { loc: [0, 1], title: 'Vi lager en bakke' },
              { loc: [1, 13], title: 'En firkant langs X,Z' },
              { loc: [18, 26], title: 'Med shaders' },
              { loc: [26, 38], title: 'Med shaders' },
              { loc: [38, 43], title: 'og data' },
              { loc: [15, 16], title: 'Eksporter fn' },
              { loc: [15, 16], title: 'med config' },
              { loc: [16, 17], title: 'som kan brukes' }
            ]}
          />
          <CodeSlide
            align="top"
            bgColor="#333"
            transition={[]}
            className="codeslide"
            lang="js"
            code={fs.readFileSync(
              './webgl-examples/3_multiple/index.js',
              'utf8'
            )}
            ranges={[
              { loc: [0, 0], title: 'Alt sys sammen' },
              { loc: [2, 9], title: 'Importer delene' },
              { loc: [10, 11], title: 'Inne i draw' },
              { loc: [16, 20], title: 'Kaller vi dem' },
              { loc: [16, 20], title: 'Nå deles camera' },
              { loc: [23, 24], title: 'Som vi kan se' }
            ]}
          />
          <Slide {...defaultSlideProps} align="hack hack">
            <WebGLSlide fn={examples[3]} />
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>Dette begynner å ligne noe!</Text>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>Fortsatt litt kjedelig, da</Text>
            <AppearingBlock>
              <Text>Vi spriter det opp med litt fargefikling!</Text>
              <SmallText>
                Men ikke mer enn at vi får med oss bryggefesten...
              </SmallText>
            </AppearingBlock>
          </Slide>
          <CodeSlide
            align="top"
            bgColor="#333"
            transition={[]}
            className="codeslide"
            lang="js"
            code={fs.readFileSync(
              './webgl-examples/4_glslify/tower.js',
              'utf8'
            )}
            ranges={[
              { loc: [0, 0], title: 'Tower.js' },
              { loc: [6, 7], title: 'Inne i tower fn' },
              { loc: [55, 61], title: 'Endrer vi fargene' },
              { loc: [56, 60], title: 'Til noe kledelig' },
              { loc: [87, 100], title: 'Vertex er uendret' },
              { loc: [72, 87], title: 'Fragment shader' },
              { loc: [79, 84], title: 'Vi fikler litt' },
              { loc: [79, 82], title: 'Striper' },
              { loc: [81, 84], title: 'Og litt random' },
              { loc: [74, 75], title: 'Random module' },
              { loc: [74, 75], title: 'med glslify' },
              { loc: [72, 73], title: 'Build time import' },
              { loc: [0, 1], title: 'ala browserify' }
            ]}
          />
          <CodeSlide
            align="top"
            bgColor="#333"
            transition={[]}
            className="codeslide"
            lang="js"
            code={fs.readFileSync(
              './webgl-examples/4_glslify/ground.js',
              'utf8'
            )}
            ranges={[
              { loc: [0, 0], title: 'ground.js' },
              { loc: [20, 29], title: 'Fragment shader' },
              { loc: [25, 28], title: 'Samme fikling' }
            ]}
          />
          <Slide {...defaultSlideProps} align="hack hack">
            <WebGLSlide fn={examples[4]} />
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>Nå begynner det å ligne på noe</Text>
            <AppearingBlock>
              <Text>Men vi kan fikle litt mer</Text>
              <SmallText>Å fikle er å lære &mdash; Confucius</SmallText>
            </AppearingBlock>
          </Slide>
          <CodeSlide
            align="top"
            bgColor="#333"
            transition={[]}
            className="codeslide"
            lang="js"
            code={fs.readFileSync(
              './webgl-examples/5_lighting/tower.js',
              'utf8'
            )}
            ranges={[
              { loc: [0, 0], title: 'tower.js' },
              { loc: [0, 0], title: 'Let there be light!' },
              { loc: [6, 7], title: 'Vi må ha normals' },
              { loc: [62, 67], title: "Normal = what's up" },
              { loc: [67, 71], title: "Normal = what's up" },
              { loc: [71, 75], title: "Normal = what's up" },
              { loc: [75, 79], title: "Normal = what's up" },
              { loc: [79, 83], title: "Normal = what's up" },
              { loc: [83, 88], title: "Normal = what's up" },
              { loc: [138, 143], title: 'En attribute' },
              { loc: [141, 142], title: 'En attribute' },
              { loc: [122, 138], title: 'Vertex shader' },
              { loc: [124, 125], title: 'Deklarer inn' },
              { loc: [128, 129], title: 'Deklarer ut' },
              { loc: [134, 136], title: 'Assign' },
              { loc: [99, 100], title: 'Fragment shader' },
              { loc: [104, 105], title: 'Les inn' },
              { loc: [107, 113], title: 'Gjør litt matte' },
              { loc: [115, 116], title: 'Legg til lys' },
              { loc: [117, 118], title: 'Legg til lys' }
            ]}
          />
          <Slide {...defaultSlideProps} align="hack hack">
            <WebGLSlide fn={examples[5]} />
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>Nå er vi nesten der.</Text>
            <AppearingBlock>
              <Text>Trenger bare fler tårn</Text>
              <SmallText>...tappetårn?</SmallText>
            </AppearingBlock>
          </Slide>
          <CodeSlide
            align="top"
            bgColor="#333"
            transition={[]}
            className="codeslide"
            lang="js"
            code={fs.readFileSync('./webgl-examples/6_batch/index.js', 'utf8')}
            ranges={[
              { loc: [0, 0], title: 'index.js' },
              { loc: [2, 9], title: 'Importerer som før' },
              { loc: [4, 9], title: 'Litt annen config' },
              { loc: [14, 15], title: 'Hvor mange tårn?' },
              { loc: [16, 22], title: 'Lag litt random' },
              { loc: [23, 35], title: 'Samle i en liste' },
              { loc: [38, 39], title: 'Generer data' },
              { loc: [44, 48], title: 'Tegning' },
              { loc: [46, 47], title: 'Ett kall per offset' }
            ]}
          />
          <CodeSlide
            align="top"
            bgColor="#333"
            transition={[]}
            className="codeslide"
            lang="js"
            code={fs.readFileSync('./webgl-examples/6_batch/tower.js', 'utf8')}
            ranges={[
              { loc: [0, 0], title: 'tower.js' },
              { loc: [0, 0], title: 'Må fikle litt' },
              { loc: [150, 155], title: 'Leser inn offsets' },
              { loc: [122, 123], title: 'Vertext shader' },
              { loc: [126, 128], title: 'Henter ut verdier' },
              { loc: [133, 136], title: 'Regner ut ny pos' },
              { loc: [137, 138], title: 'Setter ny pos' }
            ]}
          />
          <Slide {...defaultSlideProps} align="hack hack">
            <WebGLSlide fn={examples[6]} />
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>Nå har vi noe veldig fett!</Text>
            <AppearingBlock>
              <Text>Mangler bare en ting...</Text>
            </AppearingBlock>
          </Slide>
          <Slide {...defaultSlideProps} align="center center">
            <SmallHeading>MUSIKK!</SmallHeading>
            <SmallText>Fordi alt blir bedre med lyd</SmallText>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>
              Vi kan bruke WebAudioAPI til å hente ut frekvensdata fra lyd.
            </Text>
          </Slide>
          <CodeSlide
            align="top"
            bgColor="#333"
            transition={[]}
            className="codeslide"
            lang="js"
            code={fs.readFileSync('./webgl-examples/7_sound/sound.js', 'utf8')}
            ranges={[
              { loc: [0, 0], title: 'sound.js' },
              { loc: [0, 2], title: 'Hjelp fra modules' },
              { loc: [4, 5], title: 'Lager oss en funksjon' },
              { loc: [5, 6], title: "Som spør mic'en" },
              { loc: [10, 12], title: 'Vi hooker den opp' },
              { loc: [13, 14], title: 'Og kaller cb' }
            ]}
          />
          <CodeSlide
            align="top"
            bgColor="#333"
            transition={[]}
            className="codeslide"
            lang="js"
            code={fs.readFileSync('./webgl-examples/7_sound/index.js', 'utf8')}
            ranges={[
              { loc: [0, 0], title: 'index.js' },
              { loc: [9, 10], title: 'Importerer sound' },
              { loc: [52, 56], title: 'Laster sound' },
              { loc: [36, 37], title: 'Som kaller draw' },
              { loc: [38, 39], title: 'Her leser vi freq' },
              { loc: [39, 40], title: 'sender til offsets' },
              { loc: [23, 35], title: 'I offsets' },
              { loc: [29, 30], title: 'Bytter vi ut Y' },
              { loc: [29, 30], title: 'med frekvens verdi' }
            ]}
          />
          <Slide {...defaultSlideProps} align="hack hack">
            <WebGLSlide fn={examples[7]} />
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>Vi kan tilogmed bytte lydkilde:</Text>
            <AppearingBlock>
              <Text>Welcome to Metropolis!</Text>
            </AppearingBlock>
          </Slide>
          <Slide {...defaultSlideProps} align="hack hack">
            <WebGLSlide fn={examples['final']} />
          </Slide>
          <Slide {...defaultSlideProps}>
            <BigHeading>Takk for meg!</BigHeading>
            <SmallHeading>Henchman #5 / @mollerse</SmallHeading>
            <Text className="slides">
              Slides:{' '}
              <Link href="https://mollerse.github.io/regl-vj-presentation">
                mollerse.github.io/regl-vj-presentation
              </Link>
            </Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

const mount = document.createElement('div');
document.body.appendChild(mount);
render(<Slides />, mount);
