import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
// import NotoSans from "@fontsource/noto-sans"; // Defaults to weight 400.
import NotoSans from './NotoSans-Regular.ttf';
import { html as toReactNode } from 'satori-html';
import Card from './_OGCard.svelte';

const height = 630;
const width = 1200;

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ url }) => {
  const title = url.searchParams.get('title') ?? undefined;
  const subtitle = url.searchParams.get('subtitle') ?? undefined;
  const result = Card.render({ title, subtitle });
  // this doesnt seem to work https://twitter.com/swyx/status/1601763297535361024?s=20&t=iAwvnGNM6rQ-6aXHFzxJNw
  // <style>
  //   div {
  //     font-family: 'Noto Sans';
  //     display: flex;
  //     flex-direction: column;
  //     font-size: 50px;
  //     background-color: white;
  //     height: 100%;
  //     width: 100%;
  //     align-items: center;
  //     justify-content: center;
  //   }
  // </style>
  const txt = `${result.html}`
  // console.log(txt)
  const element = toReactNode(txt);
  // console.log('---')
  // console.log(JSON.stringify(element, null, 2))

  // const html = {
  //   type: 'div',
  //   props: {
  //     children: 'hello, world',
  //     style: { color: 'red' }
  //   }
  // };
  const svg = await satori(element, {
    fonts: [
      {
        name: 'Noto Sans',
        data: Buffer.from(NotoSans),
        style: 'normal'
      }
    ],
    height,
    width
  });

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: width
    }
  });

  const image = resvg.render();

  return new Response(image.asPng(), {
    headers: {
      'content-type': 'image/png',
      'Cache-Control': `max-age=0, s-maxage=${60}` // 1 minute.. for now
    }
  });
};