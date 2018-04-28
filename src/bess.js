import React, { Fragment } from "react";

import Title from "./article/title";
import SubTitle from "./article/sub-title";
import Paragraph from "./article/paragraph";
import Photo from "./shared/photo";
import Grid from "./shared/grid";

import photo1 from './assets/photos/IJmuiden 26062011-13-800px.jpg';
import photo2 from './assets/photos/IJmuiden 26062011-14-800px.jpg';

export default Crew;

function Crew() {
  return (
    <Fragment>
      <Title>Bess, you is my woman now</Title>
        <Paragraph>Zo mooi als Porgy dat kon zingen (Gershwin 1935), kunnen wij het niet. Maar we zijn wel enorm trots op onze stoere Sentijn1133. In alle opzichten een echte Koopmans (van Dick jr) uit 1995. Inmiddels hebben we er al een dikke 25.000 mijl mee gevaren.</Paragraph>

        <Photo url={photo1} />

        <SubTitle>Maten en gewichten</SubTitle>
        <Paragraph>
          <Grid rows={[
            ['Lengte', '37 voet (11.33 meter)'],
            ['Lengte waterlijn', '9,90 m'],
            ['Breedte', '3,74 m'],
            ['Waterverplaatsing', '> 6000 kg'],
            ['Ballast', '2950 kg'],
            ['Hoogte mast', '18 meter'],
            ['Diepgang', '2,10 m'],
            ['Motor', 'Volvo Penta MD2030 saildrive'],
            ['Water', '200 l'],
            ['Diesel', '80 l'],
            ['Navigatie', 'Raymarine plotter Es serie, Quatum radar, AIS, Raymarine i70 displays'],
            ['Windvaan', 'Windpilot Pacific Plus (+ST1000 Raymarine)'],
          ]} />
        </Paragraph>

        <SubTitle>Energie</SubTitle>
        <Paragraph>
          <Grid rows={[
            ['Serviceaccu\'s', '3 x 150Ah Gel Deep Cycle Victron'],
            ['Startaccu', '1 x AGM 80Ah Deep Cycle'],
            ['Sleepgenerator', 'Ampair'],
            ['Zonnepanelen', '1 x Kyocera KC130 (vast achterop)'],
            ['', '1 x Sunpower (90w; overal neer te leggen)'],
            ['Oplader/omvormer', 'Victron Multiplus C12/1600/70-16'],
          ]} />
        </Paragraph>

        <Photo url={photo2} />
    </Fragment>
  );
}


