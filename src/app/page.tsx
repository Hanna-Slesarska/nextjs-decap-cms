import Image from "next/image";
import Head from "next/head"
import { Component } from 'react'
import  {attributes, react as HomeContent } from '../../content/home.md'


export default function Home() {
  const { title, cats } = attributes
  return (
  <div> <Head>
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</Head>
<article>
  <h1>{title}</h1>
  <HomeContent />
  <ul>
    {cats.map((cat: any, k: any) => (
      <li key={k}>
        <h2>{cat.name}</h2>
        <p>{cat.description}</p>
      </li>
    ))}
  </ul>
</article></div>
  );
}
