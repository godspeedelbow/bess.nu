import React, { Fragment } from "react";

import Title from "../shared/title";
import SubTitle from "../shared/sub-title";
import Paragraph from "../shared/paragraph";
import Photo from "../shared/photo";

import photo1 from '../assets/photos/DSC04756-800px.jpg';
import photo2 from '../assets/photos/IMG_1407-800px.jpg';

export default Crew;


function Crew() {
  return (
    <Fragment>
      <Title>De bemanning</Title>
      <Paragraph>Met z'n tweetjes op een schip is de ultieme test voor je relatie. Dat zit bij ons wel goed, want we zeilen al bijna 45 jaar samen.</Paragraph>

      <SubTitle>Ineke van der Hoff</SubTitle>
      <Paragraph>Geboren in Utrecht op 12 februari 1954. Ik heb sociologie gestudeerd en heb sinds mijn afstuderen (1983) met veel plezier gewerkt. Eerst in het HBO (Verpleegkunde), daarna bij de universiteit (onderwijsontwikkeling) en de laatste 17 jaar bij de KNOV, de beroepsorganisatie voor verloskundigen. Sinds 1 januari 2018 ben ik gestopt met werken. Alle tijd dus om langere tochten over zee te maken.</Paragraph>


      <SubTitle>Lex Boezeman</SubTitle>
      <Paragraph>Geboren in Utrecht op 27 november 1952. Na mijn studie Nederlands heb ik jaren in het onderwijs gewerkt (voortgezet onderwijs, HBO en universiteit). Daarna bijna 30 jaar zelfstandig ondernemer geweest, gespecialiseerd in het leesbaar maken van lange beleidsteksten en ingewikkelde rapporten. Sinds 1 januari 2018 met pensioen, maar nog steeds niet vies van hard werken.</Paragraph>

      <Photo url={photo1} />

      <SubTitle>Bootjes varen</SubTitle>
      <Paragraph>Tot in onze studententijd hebben we veel gezeild in 16 kwadraats (kwadraten?) en varianten daarop. Toen onze kinderen peuter en kleuter waren, hebben we de bootjes ingeruild voor tenten en caravans, want dat vonden onze zoons het einde.</Paragraph>
      <Paragraph>Eind jaren '90 pakken we de draad van het zeilen weer op. Eerst met een Waarschip 600 (Baruch), daarna een Waarschip 725 (Grietje). We verkennen Friesland, het IJsselmeer, de Waddenzee, België, Frankrijk en de Engelse oostkust. In 2002 brengt Grietje ons naar Italië en Kroatië om daar drie maanden te zeilen.</Paragraph>
      <Paragraph>Sinds 2005 varen we met Bess, onze Sentijn1133. Een schip dat echt heel veel kan (hebben). Na voorbereidend werk met tochten naar Engeland, Zweden en Schotland maken we 2010-2011 een rondje Atlantic. In 2013-2015 voegen we daar een rondje Groot-Brittanië aan toe. En nu zakken we opnieuw af naar het zuiden.</Paragraph>

      <SubTitle>Contact</SubTitle>
      <Paragraph>Je kunt het beste contact met ons opnemen via de e-mail: info@boezeman.com</Paragraph>

      <Photo url={photo2} />
    </Fragment>
  );
}
