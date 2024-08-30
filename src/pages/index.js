import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <img src="img/Polaris-Catalog-BLOG-symmetrical-subhead.png" width="100%"/>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Apache Polaris (incubating)`}
      description="Apache Polaris (incubating), The interoperable, open source catalog for Apache Iceberg">
      <HomepageHeader />
    </Layout>
  );
}
