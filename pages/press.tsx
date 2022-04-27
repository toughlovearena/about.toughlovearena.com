import Link from 'next/link'
import Layout from '../components/Layout'
import { Articles } from '../data/links';

const PressPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>Press</h1>
    <div>
      <a href="presskit 2022-04-26.zip">
        Download Presskit
      </a>
    </div>
    <h3>
      Praise for Tough Love Arena
    </h3>
    {Articles.map(ext => (
      <p>
        {ext.date}
        <br />
        <a href={ext.url} target={ext.newTab ? '_blank' : undefined}>
          {ext.label}
        </a>
      </p>
    ))}
  </Layout>
);

export default PressPage;
