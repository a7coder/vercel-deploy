import Head from 'next/head';
import Script from 'next/script';
import Layout, { siteTitle } from '../component/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../component/date';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  
  return {
    props: {
      allPostsData,
    },
  };
}



export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section className={utilStyles.headingMd}>
        <p>Hi, I am Freelancer and Software Engineer</p>
        
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
