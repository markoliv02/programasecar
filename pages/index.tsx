import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

import depoiments from "../assets/facebook_comments.png";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>RECEITAS PARA SECAR</title>
        <meta name="description" content="RECEITAS PARA SECAR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-52JMFM64JF"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-52JMFM64JF');
          
          `}
      </Script>
      <main className="container mx-auto text-black">
        <div className="flex justify-center flex-wrap">
          <h1 className="w-full text-center text-7xl font-bold text-red-600 my-10">
            Não perca essa chance !
          </h1>
          <p className="text-center  text-3xl">
            Você sabia que existe um método que te ensina e te ajuda a eliminar
            até entre 5 a 10 kg em 30 dias? quem saber como?
          </p>
        </div>

        {/* video principal */}
        <div className="flex justify-center my-10 p-3">
          <iframe
            className="rounded-3xl"
            width="800"
            height="405"
            src="https://www.youtube.com/embed/aOldf0UZICY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>

        <a
          href="https://go.hotmart.com/P78183595S"
          className="flex justify-center py-10 px-3"
        >
          <div className="flex p-5 justify-center items-center bg-green-500 w-[500px] rounded-3xl text-center text-white font-bold text-3xl cursor-pointer hover:bg-green-700">
            QUERO PERDER ATÉ 10KG EM 30 DIAS
          </div>
        </a>

        <div className="bg-gray-900 p-5">
          <div className="flex justify-center">
            <h1 className="text-center font-bold text-3xl text-white w-[500px]">
              VEJA DEPOIMENTOS DE PESSOAS QUE TIVERAM{" "}
              <span className="text-green-500">
                {" "}
                RESULTADOS COM AS RECEITAS
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 p-7 gap-4">
            <div className="flex justify-center">
              <iframe
                className="rounded-3xl w-96 h-96 md:w-full md:h-96"
                src="https://www.youtube.com/embed/gODJroxn7sQ"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="flex justify-center">
              <iframe
                className="rounded-3xl w-96 h-96 md:w-full md:h-96"
                src="https://www.youtube.com/embed/_NgxqKYd4lg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
        <a
          href="https://go.hotmart.com/P78183595S"
          className="flex justify-center py-10 px-3"
        >
          <div className="flex p-5 justify-center items-center bg-green-500 w-[500px] rounded-3xl text-center text-white font-bold text-3xl cursor-pointer hover:bg-green-700">
            EU QUERO
          </div>
        </a>

        <div className="flex justify-center my-10">
          <h1 className="text-center font-bold text-3xl w-[600px]">
            Espaço dos clientes{" "}
            <span className="text-green-500">
              {" "}
              Satisfação com Receitas para secar
            </span>
          </h1>
        </div>
        <div className="flex justify-center">
          <img
            className="w-[800px]"
            src="https://static-public.klickpages.com.br/uploads/media/file/2826687/checkooooout_(4).png"
            alt="depoimentos de pessoas que emagreceram com receitas para secar"
          />
        </div>
        <a
          href="https://go.hotmart.com/P78183595S"
          className="flex justify-center py-10 px-3"
        >
          <div className="flex p-5 justify-center items-center bg-green-500 w-[500px] rounded-3xl text-center text-white font-bold text-3xl cursor-pointer hover:bg-green-700">
            IR PARA SITE OFICIAL
          </div>
        </a>
      </main>
    </>
  );
}
