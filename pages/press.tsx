import Link from 'next/link'
import { Column } from '../components/Column';
import Layout from '../components/Layout'
import { Articles } from '../data/links';
import { sortArrayOfObjects } from '../utils/list';

const PressPage = () => {
  const descending = sortArrayOfObjects(Articles, art => art.date).reverse();
  return (
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
        {descending.map(ext => (
          <p key={ext.url}>
            <div>
              {ext.author}
            </div>
            <div>
              <a href={ext.url} target="_blank">
                {ext.label}
              </a>
            </div>
            <div style={{fontSize: '0.8em',}}>
              {ext.date}
            </div>
          </p>
        ))}
      </Column>
    </Layout>
  );
};

export default PressPage;
