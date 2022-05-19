import React from 'react';
import { TextColumns } from '../components/about/TextColumns';
import { Column } from '../components/Column';
import Layout from '../components/Layout'
import { InternalPage } from '../data/nav';

const playtesters = [
  'Adam Heart',
  'Alec Boccio',
  'Dakota Hadfield',
  'Dan Gant',
  'Dan Enders',
  `David O'Sullivan`,
  'Eddy "RLBS" Hung',
  'Eliah Hecht',
  'Eric Ngeo',
  'Khalid Husain',
  'Khalid Richards',
  'Marvin Ma',
  'Nathan Richardson',
  'Scott Roepnack',
  'Tony Pietra',
].sort();

const Large = (props: { children: React.ReactNode; }) => (
  <div style={{ fontSize: '2em', }}>
    {props.children}
  </div>
);
const Medium = (props: { children: React.ReactNode; }) => (
  <div style={{ fontSize: '1.6em', }}>
    {props.children}
  </div>
);

const AboutPage = () => {
  return (
    <Layout page={InternalPage.About}>
      <Column style={{ textAlign: 'center', }}>
        <Large>
          coding and game design by M. Paul Weeks
        </Large>
        <Large>
          art and animation by Amy Xu
        </Large>
        <Medium>
          original music and sound design by Josie Brechner and M Gewehr
        </Medium>

        <div>
          alpha playtesters
        </div>
        <TextColumns text={playtesters} />
        <div>
          special thanks to David "UltraDavid" Graham and shygybeats
        </div>

        <div style={{textAlign: 'center',}}>
          Download the <a href="/presskit-toughlovearena-2022-04-26.zip">
            Presskit
          </a>
        </div>
      </Column>
    </Layout>
  );
};

export default AboutPage;
