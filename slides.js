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
import ReglSlide from './regl-slide';
import examples from './webgl-examples';

const BigHeading = props => (
  <Heading caps lineHeight={1.5} size={1} {...props}>
    {props.children}
  </Heading>
);

const SmallHeading = props => (
  <Heading lineHeight={1.5} size={2} {...props}>
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
            <br />
            <SmallHeading>
              &nbsp;Stian Veum Møllersen / @mollerse&nbsp;
            </SmallHeading>
            <SmallText>Content warnings: Motion</SmallText>
          </Slide>

          <Slide {...defaultSlideProps}>
            <SmallHeading>&hellip;the story begins</SmallHeading>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Jeg er veldig glad i å lage gøyale ting i nettlesern 😎</Text>
            <Appear>
              <Text>
                Spesielt ting som <em>ser</em> gøyalt ut 👨‍🎨
              </Text>
            </Appear>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>SVG, Canvas, CSS &mdash; all the good stuff 🤩</Text>
            <AppearingBlock>
              <Text>Men bare 2D&#42; 😞</Text>
              <SmallText>
                Du kan gjøre <em>litt</em> 3D greier.
              </SmallText>
            </AppearingBlock>
          </Slide>

          <Slide {...defaultSlideProps} align="center hack">
            <Text className="attribution">
              50 Years of Charts by Hinderling Volkart AG
            </Text>
            <iframe
              height="100%"
              width="100%"
              style={{
                border: 'none'
              }}
              src="https://50-jahre-hitparade.ch/"
            />
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>3D får du med WebGL 😻</Text>
            <AppearingBlock>
              <Text>
                Men hva <em>er</em> WebGL? 🤷‍♂️
              </Text>
            </AppearingBlock>
          </Slide>

          <Slide {...defaultSlideProps}>
            <SmallHeading>&nbsp;WebGL&nbsp;</SmallHeading>
            <Text>&hellip;what even are you?</Text>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>
              WebGL er en metode for å vise avansert grafikk i nettleseren 🤓
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
            <Text>WebGL er nettleserens API mot grafikkortet 📽</Text>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>GPUens beregningskrefter i nettlesern 💪</Text>
            <AppearingBlock>
              <Text>&dArr;</Text>
              <Text>Grafikk som før var forbeholdt desktop 🖥</Text>
            </AppearingBlock>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>⚠️Real talk⚠️</Text>
            <Text>WebGL er komplisert, annerledes og kravstort.</Text>
          </Slide>

          <Slide
            {...defaultSlideProps}
            align="center hack"
            className="code-demo"
          >
            <CodePane
              lang="js"
              source={fs.readFileSync('./code-slides/demo.js', 'utf8')}
            />
          </Slide>

          <Slide {...defaultSlideProps} align="hack hack">
            <Text className="attribution">
              Creating 3D objects using WebGL fra Mozilla Developer Network
            </Text>
            <iframe
              height="480"
              width="640"
              style={{
                border: 'none'
              }}
              src="https://mdn.github.io/webgl-examples/tutorial/sample5/"
            />
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Dette var mye greier 😐</Text>
            <Appear>
              <Text>Hvordan angriper jeg dette? 😧</Text>
            </Appear>
          </Slide>

          <Slide {...defaultSlideProps}>
            <BlockQuote>
              <Quote>Det er enklere å lære seg noe når du har det gøy.</Quote>
              <Cite>👉</Cite>
            </BlockQuote>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Utforsk teknologi gjennom kreativitet 🧙‍♂️</Text>
            <AppearingBlock>
              <Text>Blottet for praktiske formål 👌</Text>
              <SmallText>
                Skal sies at kreativitet i seg selv er en utrolig viktig
                egenskap for utviklere, men det er en annen talk.
              </SmallText>
            </AppearingBlock>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>
              Det gjør frustrasjonene på veien til gøyale opplevelser 🎉
            </Text>
            <Appear>
              <Text>Du må bare starte et sted 🗺</Text>
            </Appear>
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

          <Slide {...defaultSlideProps}>
            <Text>Musikk er lyd, lyd er signaler 🔊</Text>
            <AppearingBlock>
              <Text>&dArr;</Text>
              <Text>Signaler kan visualiseres! 👍</Text>
            </AppearingBlock>
          </Slide>

          <Slide {...defaultSlideProps} align="center hack">
            <Image
              height="90%"
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/FFT-Time-Frequency-View.png"
              alt="FFT Time and Frequency view"
            />
            <SmallText>
              By Phonical (Own work) [CC BY-SA 4.0
              (https://creativecommons.org/licenses/by-sa/4.0)], via Wikimedia
              Commons
            </SmallText>
          </Slide>

          <Slide {...defaultSlideProps} align="center hack">
            <SmallText>&lt;aside&gt;</SmallText>
            <SmallText>Du kan lære alt om FFT på Youtube:</SmallText>
            <iframe
              width="854"
              height="480"
              src="https://www.youtube.com/embed/spUNpyF58BY"
              frameborder="0"
              allow="encrypted-media"
              allowfullscreen
            />
            <SmallText>&lt;/aside&gt;</SmallText>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Vi kan visualisere musikk 🤘</Text>
            <AppearingBlock>
              <Text>&hellip;hvem kan egentlig glemme Winamp?</Text>
              <SmallText>
                Antageligvis de fleste, for jeg innser at jeg har blitt gammel.
              </SmallText>
            </AppearingBlock>
          </Slide>

          <Slide {...defaultSlideProps} align="hack hack">
            <Text className="attribution">
              Milkdrop 2 &mdash; Winamp Visualizer
            </Text>
            <iframe
              width="80%"
              height="615"
              src="https://www.youtube.com/embed/-34Qqd0mAfo?start=78"
              frameborder="0"
              allowfullscreen
            />
          </Slide>

          <Slide {...defaultSlideProps} align="hack hack">
            <Text className="attribution">
              Thutmose &mdash; WuWu (TARI Remix) [Trap Nation]
            </Text>
            <iframe
              width="80%"
              height="615"
              src="https://www.youtube.com/embed/_BwpNaT_noo?start=11"
              frameborder="0"
              allowfullscreen
            />
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

          <Slide {...defaultSlideProps}>
            <Text>Her er det muligheter 🤩</Text>
            <AppearingBlock>
              <Text>Greit å begrense seg litt ☝️</Text>
              <SmallText>Vi kan jo ikke så mye om dette 😅</SmallText>
            </AppearingBlock>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Image width="65%" src="images/notes.jpg" />
            <SmallText>3D &#43; penn &amp; papir &rArr; ❤️</SmallText>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Gape over alt! 🍽</Text>
            <Appear>
              <Text>&hellip;eller?</Text>
            </Appear>
          </Slide>

          <Slide {...defaultSlideProps}>
            <SmallHeading>Rammeverk</SmallHeading>
            <Text>Helst mer ramme enn verk 🖼</Text>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>
              Vil du virkelig <em>lære</em> deg noe 👨‍🎓
            </Text>
            <Appear>
              <Text>er det greit med noe som gjemmer akkurat passe mye 🕵️‍♂️</Text>
            </Appear>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>WebGL ------------------------ 🦄🌈</Text>
          </Slide>

          <Slide {...defaultSlideProps} transition="none">
            <Text>WebGL ----- 🍪 -------------- 🦄🌈</Text>
          </Slide>

          <Slide {...defaultSlideProps} transition="none">
            <Text>WebGL ----- 🍪 ---------- three.js</Text>
          </Slide>

          <Slide {...defaultSlideProps} transition="none">
            <Text>WebGL --- regl ---------- three.js</Text>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>regl er et biblotek for å jobbe med WebGL.</Text>
            <SmallText>Ligger liksom litt i navnet.</SmallText>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>regl er inspirert av Reacts functional rendering.</Text>
            <Appear>
              <Text>Commands istedenfor components i React.</Text>
            </Appear>
          </Slide>

          <CodeSlide
            align="top"
            bgColor="#333"
            transition={[]}
            className="codeslide"
            lang="js"
            code={fs.readFileSync('./code-slides/scoped-commands.js', 'utf8')}
            ranges={[
              {
                loc: [0, 0],
                title: 'Commands'
              },
              {
                loc: [2, 9],
                title: 'En command'
              },
              {
                loc: [10, 17],
                title: 'En anna command'
              },
              {
                loc: [18, 21],
                title: 'Komposisjon 👍'
              },
              {
                loc: [2, 8],
                title: 'Disse'
              },
              {
                loc: [10, 16],
                title: 'Er tilgjengelig her'
              }
            ]}
          />

          <Slide {...defaultSlideProps}>
            <Text>regl gjør ganske lite for deg.</Text>
            <SmallText>npm to the rescue!</SmallText>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>
              &hellip;men regl tar seg av state håndtering og det maskinelle.
            </Text>
            <SmallText>No more gl.bindBuffer 🕺</SmallText>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>
              <a href="http://regl.party/api">regl.party</a>
            </Text>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Image width="65%" src="images/notes.jpg" />
          </Slide>

          <Slide {...defaultSlideProps}>
            <SmallHeading>&nbsp;Steg 1:&nbsp;</SmallHeading>
            <Text>Lag <em>én</em> kube</Text>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Først litt WebGL teori 👨‍🏫</Text>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>WebGL er drit flink til å tegne trekanter 📐</Text>
            <SmallText>Seriøst liksom</SmallText>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>
              Når WebGL tegner, går den gjennom en buffer av trekanter.
            </Text>
            <AppearingBlock>
              <Text>Hver trekant er tre punkter:</Text>
              <Text>
                <Code>t1 = [p1, p2, p3]</Code>
              </Text>
              <Text>
                <Code>buffer = [t1, t2...tN]</Code>
              </Text>

              <SmallText>Hello, I am Captain Obvious 👨‍✈️</SmallText>
            </AppearingBlock>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Trekantene bygger igjen opp mer komplekse ting.</Text>
            <AppearingBlock>
              <Text>
                En firkant er 2 trekanter. Og en kube er 6&times;2 trekanter.
              </Text>
              <SmallText>Captain Obvious strikes again! 👨‍✈️</SmallText>
            </AppearingBlock>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Så jeg må definere 24 punkter fordelt på 12 trekanter 👨‍💻</Text>
            <AppearingBlock>
              <Text>&hellip;og putte dem i en buffer 👷‍♂️</Text>
            </AppearingBlock>
          </Slide>

          <CodeSlide
            align="top"
            bgColor="#333"
            transition={[]}
            className="codeslide"
            lang="js"
            code={fs.readFileSync('./webgl-examples/1_tower/index.js', 'utf8')}
            ranges={[
              {
                loc: [0, 0],
                title: 'Tegne en kube'
              },
              {
                loc: [7, 8],
                title: 'cube factory 🏭'
              },
              {
                loc: [9, 10],
                title: 'Definer punkter'
              },
              {
                loc: [10, 14],
                title: 'Bunn'
              },
              {
                loc: [15, 19],
                title: 'Front'
              },
              {
                loc: [20, 24],
                title: 'Høyre'
              },
              {
                loc: [25, 29],
                title: 'Bak'
              },
              {
                loc: [30, 34],
                title: 'Venstre'
              },
              {
                loc: [35, 39],
                title: 'Topp'
              },
              {
                loc: [41, 42],
                title: 'Lage trekant-buffer 👷‍♂️'
              },
              {
                loc: [42, 44],
                title: 'Bunn'
              },
              {
                loc: [44, 46],
                title: 'Front'
              },
              {
                loc: [46, 48],
                title: 'Høyre'
              },
              {
                loc: [48, 50],
                title: 'Bak'
              },
              {
                loc: [50, 52],
                title: 'Venstre'
              },
              {
                loc: [52, 54],
                title: 'Topp'
              },
              {
                loc: [56, 63],
                title: 'Litt farge 🎨'
              },
              {
                loc: [64, 65],
                title: 'Returner'
              },
              {
                loc: [67, 68],
                title: 'Putt i en variabel'
              },
              {
                loc: [69, 70],
                title: 'Lager en draw()'
              },
              {
                loc: [70, 73],
                title: 'Fyllfarge'
              },
              {
                loc: [74, 75],
                title: 'Lager en kommando'
              },
              {
                loc: [100, 101],
                title: 'elementBuffer'
              },
              {
                loc: [96, 100],
                title: 'attributes'
              },
              {
                loc: [84, 96],
                title: 'Vertex shader'
              }
            ]}
          />

          <Slide {...defaultSlideProps}>
            <Text>Verte-what? 🤷‍♂️</Text>
            <Appear>
              <Text>Vertex shader</Text>
            </Appear>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Kjernen i WebGL er shadere 👻</Text>
            <SmallText>Ganske shady greier...</SmallText>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Shadere er små programmer som kjøres på GPUen 🧙‍♂️</Text>
            <AppearingBlock>
              <Text>Skrevet i GLSL, en avart av C 🤓</Text>
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
            <Text>Vertex Shadere er ansvarlige for å bygge geometrier 🏗</Text>
            <Appear>
              <Text>Som Fragment Shadere kan fargelegge 🎨</Text>
            </Appear>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Image width="100%" src="images/pipeline.svg" />
            <SmallText>
              Kilde: https://en.wikipedia.org/wiki/Graphics_pipeline
            </SmallText>
          </Slide>

          <CodeSlide
            align="top"
            bgColor="#333"
            transition={[]}
            className="codeslide"
            lang="js"
            code={fs.readFileSync('./webgl-examples/1_tower/index.js', 'utf8')}
            ranges={[
              {
                loc: [84, 96],
                title: 'Vertex shader'
              },
              {
                loc: [85, 86],
                title: 'Setter presisjon'
              },
              {
                loc: [86, 88],
                title: 'attributes'
              },
              {
                loc: [96, 100],
                title: 'attributes'
              },
              {
                loc: [87, 88],
                title: 'varying'
              },
              {
                loc: [90, 95],
                title: 'Jobben'
              },
              {
                loc: [91, 92],
                title: 'gl_Position'
              },
              {
                loc: [93, 94],
                title: 'varying'
              },
              {
                loc: [75, 84],
                title: 'Fragment shader'
              },
              {
                loc: [78, 79],
                title: 'varying'
              },
              {
                loc: [80, 83],
                title: 'gl_FragColor'
              },
              {
                loc: [104, 105],
                title: 'Kaller draw'
              }
            ]}
          />

          <Slide {...defaultSlideProps} align="hack hack">
            <ReglSlide fn={examples[1]} />
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Ikke veldig imponerende 🤐</Text>
            <SmallText>Ser ikke 3D ut en gang! 🎁</SmallText>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Vi må lære oss om WebGLs koordinatsystem 🗺</Text>
            <SmallText>Ugh, trodde jeg var ferdig med matte 🤦‍♂️</SmallText>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>
              Koordinatsystemet til WebGL er en kube, hvor hver akse går fra -1
              til 1 👨‍🏫
            </Text>
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
              Det er slitsomt å forholde seg til at alt plasseres langs [-1, 1] 😓
            </Text>
            <Appear>
              <Text>Så vi bruker matte for å fikse problemet 💡</Text>
            </Appear>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>Matriser lar oss mappe om koordinatsystemer 🗺</Text>
          </Slide>
          <Slide {...defaultSlideProps}>
            <Text>Matriser som mapper 🗺</Text>
            <Appear>
              <Text>Model: object &rarr; world.</Text>
            </Appear>
            <Appear>
              <Text>View: world &rarr; camera.</Text>
            </Appear>
            <Appear>
              <Text>Projection: camera &rarr; screen.</Text>
            </Appear>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>
              Når vi kombinerer dem får vi en komplett mapping fra et objekt til
              skjermen 👌
            </Text>
            <AppearingBlock>
              <Code>gl_Position = projection * view * model * pos;</Code>
              <SmallText>
                Hvem sa du ikke kom til å få bruk for matte etter skolen? 😄
              </SmallText>
            </AppearingBlock>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Nå kan vi justere hva vi ser! 👁</Text>
          </Slide>

          <Slide {...defaultSlideProps}>
            <SmallHeading>&nbsp;Steg 2:&nbsp;</SmallHeading>
            <Text>Se <em>hele</em> verden!</Text>
          </Slide>

          <CodeSlide
            align="top"
            bgColor="#333"
            transition={[]}
            className="codeslide"
            lang="js"
            code={fs.readFileSync('./webgl-examples/2_camera/index.js', 'utf8')}
            ranges={[
              {
                loc: [0, 0],
                title: 'Sett opp et kamera'
              },
              {
                loc: [7, 8],
                title: 'Cube 🏭 er lik'
              },
              {
                loc: [75, 76],
                title: 'Oppsett av kommando'
              },
              {
                loc: [103, 104],
                title: 'Uniforms'
              },
              {
                loc: [104, 113],
                title: 'View matrix'
              },
              {
                loc: [104, 105],
                title: 'regl gir oss tick'
              },
              {
                loc: [70, 71],
                title: 'Ved å bruke frame'
              },
              {
                loc: [104, 113],
                title: 'View matrix'
              },
              {
                loc: [105, 106],
                title: 'Finner en faktor'
              },
              {
                loc: [106, 112],
                title: 'Regn ut ny matrix'
              },
              {
                loc: [1, 2],
                title: 'hjelp fra gl-mat4'
              },
              {
                loc: [106, 112],
                title: 'Regn ut ny matrix'
              },
              {
                loc: [107, 108],
                title: 'Out param'
              },
              {
                loc: [108, 109],
                title: 'Punktet vi ser på'
              },
              {
                loc: [109, 110],
                title: 'Sentrum'
              },
              {
                loc: [110, 111],
                title: 'Hva er 👆'
              },
              {
                loc: [106, 112],
                title: 'Regn ut ny matrix'
              },
              {
                loc: [114, 123],
                title: 'Projection matrix'
              },
              {
                loc: [114, 115],
                title: 'fra regl'
              },
              {
                loc: [115, 122],
                title: 'regn ut matrix'
              },
              {
                loc: [116, 117],
                title: 'out param'
              },
              {
                loc: [117, 118],
                title: 'field of view'
              },
              {
                loc: [118, 119],
                title: 'aspect ratio'
              },
              {
                loc: [119, 120],
                title: 'near'
              },
              {
                loc: [120, 121],
                title: 'far'
              },
              {
                loc: [115, 122],
                title: 'regn ut matrix'
              },
              {
                loc: [85, 98],
                title: 'Vertex shader'
              },
              {
                loc: [89, 90],
                title: 'uniforms'
              },
              {
                loc: [92, 97],
                title: 'Regn ut pos'
              },
              {
                loc: [93, 94],
                title: 'Regn ut pos'
              },
              {
                loc: [76, 85],
                title: 'Uendra'
              },
              {
                loc: [128, 129],
                title: 'Kaller draw'
              }
            ]}
          />

          <Slide {...defaultSlideProps} align="hack hack">
            <ReglSlide fn={examples[2]} />
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Nå kan vi se 3D-effekten! 🎉</Text>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Fortsatt kjedelig med bare en kube 🏙</Text>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Vi kan lage flere ting!</Text>
            <Appear>
              <Text>&hellip;men først litt modularisering 👷‍♂️</Text>
            </Appear>
          </Slide>

          <Slide {...defaultSlideProps}>
            <SmallHeading>&nbsp;Steg 3:&nbsp;</SmallHeading>
            <Text>Fylle verden!</Text>
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
              {
                loc: [0, 0],
                title: 'camera.js'
              },
              {
                loc: [0, 0],
                title: 'Egen command'
              },
              {
                loc: [2, 11],
                title: 'Med view'
              },
              {
                loc: [12, 21],
                title: 'Og projection'
              },
              {
                loc: [22, 27],
                title: 'Som eksporteres'
              }
            ]}
          />
          <CodeSlide
            align="top"
            bgColor="#333"
            transition={[]}
            className="codeslide"
            lang="js"
            code={fs.readFileSync(
              './webgl-examples/3_multiple/cube.js',
              'utf8'
            )}
            ranges={[
              {
                loc: [0, 0],
                title: 'cube.js'
              },
              {
                loc: [0, 0],
                title: 'Egen command'
              },
              {
                loc: [4, 5],
                title: 'Cube 🏭'
              },
              {
                loc: [71, 80],
                title: 'Fragment shader'
              },
              {
                loc: [80, 93],
                title: 'Vertex shader'
              },
              {
                loc: [93, 98],
                title: 'og verdier'
              },
              {
                loc: [64, 68],
                title: 'Som eksporteres'
              }
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
              {
                loc: [0, 0],
                title: 'ground.js'
              },
              {
                loc: [0, 1],
                title: 'Vi lager en bakke 🏭'
              },
              {
                loc: [1, 13],
                title: 'En firkant langs X,Z'
              },
              {
                loc: [18, 26],
                title: 'Med shaders'
              },
              {
                loc: [26, 38],
                title: 'Med shaders'
              },
              {
                loc: [38, 43],
                title: 'og data'
              },
              {
                loc: [15, 16],
                title: 'Eksporter fn'
              }
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
              {
                loc: [0, 0],
                title: 'Alt sys sammen'
              },
              {
                loc: [2, 9],
                title: 'Importer delene'
              },
              {
                loc: [10, 11],
                title: 'Inne i draw'
              },
              {
                loc: [16, 20],
                title: 'Kaller vi dem'
              },
              {
                loc: [16, 20],
                title: 'Nå deles camera'
              },
              {
                loc: [23, 24],
                title: 'Som vi kan se'
              }
            ]}
          />
          <Slide {...defaultSlideProps} align="hack hack">
            <ReglSlide fn={examples[3]} />
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Dette begynner å ligne noe! 💅</Text>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Nå kan vi begynne å fikle og eksperimentere 👨‍🔬</Text>
            <AppearingBlock>
              <Text>Feks med fargene 🎨</Text>
            </AppearingBlock>
          </Slide>

          <Slide {...defaultSlideProps}>
            <SmallHeading>&nbsp;Steg 4&amp;5:&nbsp;</SmallHeading>
            <Text>Eksperimentering!</Text>
          </Slide>

          <CodeSlide
            align="top"
            bgColor="#333"
            transition={[]}
            className="codeslide"
            lang="js"
            code={fs.readFileSync(
              './webgl-examples/4_glslify/cube.js',
              'utf8'
            )}
            ranges={[
              {
                loc: [0, 0],
                title: 'cube.js'
              },
              {
                loc: [72, 87],
                title: 'i fragment shader'
              },
              {
                loc: [72, 73],
                title: 'glsl'
              },
              {
                loc: [0, 1],
                title: 'glsl'
              },
              {
                loc: [74, 75],
                title: 'glslify'
              },
              {
                loc: [79, 84],
                title: 'Vi fikler litt'
              },
              {
                loc: [79, 82],
                title: 'Striper'
              },
              {
                loc: [81, 84],
                title: 'Og litt random'
              }
            ]}
          />

          <Slide {...defaultSlideProps} align="hack hack">
            <ReglSlide fn={examples[4]} />
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Dette begynner å se fett ut 😎</Text>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Et fungerende system er enklere å utforske 👨‍🚀</Text>
            <Appear>
              <Text>Det er da du lærer 👨‍🎓</Text>
            </Appear>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Vi kan fikle til noen kule lyseffekter 🤹‍♂️</Text>
            <AppearingBlock>
              <SmallText>Jeg sparer dere for koden her, men den finner dere i eksempel 5 på github 👍</SmallText>
            </AppearingBlock>
          </Slide>

          <Slide {...defaultSlideProps} align="hack hack">
            <ReglSlide fn={examples[5]} />
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>
              Dette er et prima eksempel på hvordan et fungerende system
              hjelper deg med læring 💡
            </Text>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>
              Når du forstår hvordan du kom deg et sted du er kan du alltid
              komme deg dit igjen 🗺
            </Text>
          </Slide>

          <Slide {...defaultSlideProps} align="hack hack">
            <ReglSlide fn={examples[5]} />
          </Slide>

          <Slide {...defaultSlideProps}>
            <Image width="65%" src="images/notes.jpg" />
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Vi må bygge flere bygninger 🏗</Text>
          </Slide>

          <Slide {...defaultSlideProps}>
            <SmallHeading>&nbsp;Steg 6:&nbsp;</SmallHeading>
            <Text>Fler ting!</Text>
          </Slide>

          <CodeSlide
            align="top"
            bgColor="#333"
            transition={[]}
            className="codeslide"
            lang="js"
            code={fs.readFileSync('./webgl-examples/6_batch/index.js', 'utf8')}
            ranges={[
              {
                loc: [0, 0],
                title: 'demo.js'
              },
              {
                loc: [2, 9],
                title: 'Importerer som før'
              },
              {
                loc: [4, 9],
                title: 'Litt annen config'
              },
              {
                loc: [14, 15],
                title: 'Hvor mange?'
              },
              {
                loc: [16, 22],
                title: 'Lag litt random'
              },
              {
                loc: [23, 35],
                title: 'Samle i en liste'
              },
              {
                loc: [36, 38],
                title: 'I draw'
              },
              {
                loc: [38, 39],
                title: 'Generer data'
              },
              {
                loc: [44, 48],
                title: 'Tegning'
              },
              {
                loc: [46, 47],
                title: 'Ett kall per offset'
              }
            ]}
          />
          <CodeSlide
            align="top"
            bgColor="#333"
            transition={[]}
            className="codeslide"
            lang="js"
            code={fs.readFileSync('./webgl-examples/6_batch/cube.js', 'utf8')}
            ranges={[
              {
                loc: [0, 0],
                title: 'cube.js'
              },
              {
                loc: [150, 155],
                title: 'Leser inn offsets'
              },
              {
                loc: [122, 123],
                title: 'Vertext shader'
              },
              {
                loc: [126, 128],
                title: 'Henter ut verdiene'
              },
              {
                loc: [133, 136],
                title: 'Regner ut ny pos'
              },
              {
                loc: [137, 138],
                title: 'Setter ny pos'
              }
            ]}
          />

          <Slide {...defaultSlideProps} align="hack hack">
            <ReglSlide fn={examples[6]} />
          </Slide>

          <Slide {...defaultSlideProps}>
            <Image width="65%" src="images/notes.jpg" />
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Nå har vi noe veldig fett! 😎🤘</Text>
            <AppearingBlock>
              <Text>Mangler bare en ting&hellip;</Text>
            </AppearingBlock>
          </Slide>

          <Slide {...defaultSlideProps}>
            <SmallHeading>&nbsp;Steg 7:&nbsp;</SmallHeading>
            <Text>Musikk! 🎶</Text>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>
              Vi kan bruke WebAudioAPI til å hente ut data fra lyd med AnalyzerNode 📈
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
              {
                loc: [0, 0],
                title: 'sound.js'
              },
              {
                loc: [0, 2],
                title: 'Hjelp fra modules'
              },
              {
                loc: [4, 5],
                title: 'Lager oss en funksjon'
              },
              {
                loc: [5, 6],
                title: "Som spør mic'en"
              },
              {
                loc: [10, 12],
                title: 'Vi hooker den opp'
              },
              {
                loc: [13, 14],
                title: 'Og kaller cb'
              }
            ]}
          />

          <Slide {...defaultSlideProps} align="center hack">
            <Image
              height="90%"
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/FFT-Time-Frequency-View.png"
              alt="FFT Time and Frequency view"
            />
            <SmallText>
              By Phonical (Own work) [CC BY-SA 4.0
              (https://creativecommons.org/licenses/by-sa/4.0)], via Wikimedia
              Commons
            </SmallText>
          </Slide>

          <CodeSlide
            align="top"
            bgColor="#333"
            transition={[]}
            className="codeslide"
            lang="js"
            code={fs.readFileSync('./webgl-examples/7_sound/index.js', 'utf8')}
            ranges={[
              {
                loc: [0, 0],
                title: 'demo.js'
              },
              {
                loc: [9, 10],
                title: 'Importerer sound'
              },
              {
                loc: [52, 56],
                title: 'Laster sound'
              },
              {
                loc: [36, 37],
                title: 'Som kaller draw'
              },
              {
                loc: [38, 39],
                title: 'Her leser vi freq'
              },
              {
                loc: [39, 40],
                title: 'sender til offsets'
              },
              {
                loc: [23, 35],
                title: 'I offsets'
              },
              {
                loc: [29, 30],
                title: 'Bytter vi ut Y'
              },
              {
                loc: [29, 30],
                title: 'med frekvens verdi'
              }
            ]}
          />
          <Slide {...defaultSlideProps} align="hack hack">
            <ReglSlide fn={examples[7]} />
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Vi kan tilogmed bytte lydkilde:</Text>
            <AppearingBlock>
              <Text>🎶 Welcome to Metropolis 🎶</Text>
            </AppearingBlock>
          </Slide>

          <Slide {...defaultSlideProps} align="hack hack">
            <ReglSlide fn={examples['final']} />
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Dette var historien om hvordan jeg lærte meg litt om WebGL 👨‍🎓</Text>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>regl er akkurat lavnivå nok til at jeg ble tvunget til å skjønne hvordan WebGL henger sammen 🕵️‍♂️</Text>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Jeg hadde det morsomt mens jeg holdt på 🤹‍♂️</Text>
            <Appear>
              <Text>&hellip;og jeg fikk litt ekstra kunnskap gjennom gøyale omveier 🔭</Text>
            </Appear>
          </Slide>

          <Slide {...defaultSlideProps}>
            <Text>Alt trenger ikke være praktisk for å ha praktisk nytte 😄</Text>
          </Slide>

          <Slide {...defaultSlideProps}>
            <BigHeading>Takk for meg!</BigHeading>
            <SmallHeading>Stian Veum Møllersen / @mollerse</SmallHeading>
            <SmallText>
              Slides:{' '}
              <a href="https://mollerse.github.io/regl-vj-presentation">
                mollerse.github.io/regl-vj-presentation
              </a>
            </SmallText>
            <SmallText><a href="https://kortslutning.fun">kortslutning.fun</a></SmallText>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

const mount = document.createElement('div');
document.body.appendChild(mount);
render(<Slides />, mount);
