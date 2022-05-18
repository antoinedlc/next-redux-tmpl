import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';

import Layout from '../common/containers/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </Layout>
  );
};

export default Home;