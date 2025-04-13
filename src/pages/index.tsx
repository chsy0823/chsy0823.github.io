import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageProfile from '@site/src/components/HomepageProfile';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="I am a software engineer with a passion for building web applications.">
      <main>
        <HomepageProfile />
      </main>
    </Layout>
  );
}
