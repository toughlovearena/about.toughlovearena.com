import Link from 'next/link'
import { Column } from '../components/Column';
import Layout from '../components/Layout'
import { Articles } from '../data/links';

const PressPage = () => (
  <Layout title="Press">
    <Column>
      <h1>Press</h1>
      <div>
        <a href="/presskit-toughlovearena-2022-04-26.zip">
          Download Presskit
        </a>
      </div>
      <h2>
        Praise for Tough Love Arena
      </h2>
      {Articles.map(ext => (
        <p>
          {ext.date}
          <br />
          <a href={ext.url} target={ext.newTab ? '_blank' : undefined}>
            {ext.label}
          </a>
        </p>
      ))}
    </Column>
  </Layout>
);

export default PressPage;
