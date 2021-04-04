import Head from 'next/head';
import React from 'react';
import Header from './Header/Header';


type PropsType = {
  children: React.ReactNode
  titlePage: string
}

const MainContainer: React.FC<PropsType> = ({children, titlePage}) => {
  return (
    <>
      <Head>
        <title>{titlePage}</title>
      </Head>

      <div className="container">
        <Header/>

        {children}
      </div>

    </>
  );
};

export default MainContainer;