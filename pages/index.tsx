import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

import depoiments from "../assets/facebook_comments.png";

import appsScreen from "../assets/apps.png";

import Script from "next/script";

type foods = {
  url: string;
  title: string;
  desc: string;
};

export default function Home() {
  const food: Array<foods> = [
    {
      url: "https://static-public.klickpages.com.br/uploads/media/file/2680152/2.png",
      title: "Sucos Detox Para Desintoxicar",
      desc: "Os estudos apontaram que além de reduzir o colesterol o detox também elimina gordura pelas fezes e urina",
    },
    {
      url: "https://static-public.klickpages.com.br/uploads/media/file/2680153/4.png",
      title: "Sopas Milagrosas",
      desc: "A combinação perfeita para queimar gordura em uma sopa super gostosa que substitui refeições.",
    },
    {
      url: "https://static-public.klickpages.com.br/uploads/media/file/2680154/5.png",
      title: "Shakes Funcionais",
      desc: "Ótima bebida com bastante nutrientes para aumentar sua imunidade e saciar suas fome de preparo rápido.",
    },
    {
      url: "https://static-public.klickpages.com.br/uploads/media/file/2680160/design_sem_nome_(3).jpg",
      title: "O chá mais poderoso do Brasil",
      desc: "Receita secreta de um dos chás mais procurados no Brasil quando o assunto é perca de peso. Incríveis os Resultados.",
    },
    {
      url: "https://static-public.klickpages.com.br/uploads/media/file/2680163/design_sem_nome_(4).jpg",
      title: "Bebidas Bomba",
      desc: "Muitos problemas cardíacos são causadas por problemas circulatórios. O yoga ajuda a bombear o sangue e a circular o oxigênio para todas as partes do corpo de forma saudável",
    },
    {
      url: "https://static-public.klickpages.com.br/uploads/media/file/2680166/design_sem_nome_(5).jpg",
      title: "Cardápios Fit",
      desc: "Cardápios práticos para a semana toda. Lembrando que não é uma dieta e sim uma reeducação. A nossa intenção é que você coma saudável.",
    },
  ];
  return (
    <>
      <Head>
        <title>Ebook Receitas para Secar</title>
        <meta name="description" content="RECEITAS PARA SECAR PRESELL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Marcos Oliveira" />
        <meta
          name="facebook-domain-verification"
          content="v0x22a6rizcf474jmg2olgc3fo04fh"
        />
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
          <h1 className="w-full text-center text-md md:text-xl font-semibold text-white bg-red-600 p-2">
            Emagreça com saúde em 30 dias: Descubra as receitas deliciosas e
            eficazes do nosso ebook de emagrecimento!
          </h1>

          <p className="text-center w-[1000px] leading-normal mt-10 font-semibold md:font-bold uppercase text-2xl md:text-4xl">
            Programa de Receitas para Secar Ajudou{" "}
            <span className="bg-green-500 text-white px-2">
              {" "}
              Mais de 75.000 Pessoas em 7 Países nos Últimos 2 Anos{" "}
            </span>{" "}
            que Precisavam Reduzir Drasticamente Suas GORDURAS CORPORAIS em
            poucos dias
          </p>
        </div>

        {/* video principal */}
        <div className="flex justify-center my-10 pt-3 mx-5">
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

        <div className="flex justify-center w-full my-5">
          <p className="w-80 text-center">
            Acesso vitalício por <strong> apenas R$37,00!</strong> Pague a vista
            ou parcele no cartão em até 4x.{" "}
            <strong> Compra 100% segura!</strong>
          </p>
        </div>

        <div className="p-10 bg-gray-900 text-white rounded-3xl mx-5">
          <h1 className="font-semibold text-left md:text-center text-xl md:text-3xl">
            6 TRANSFORMAÇÕES IMPACTANTES EM SEU CORPO NAS PRÓXIMAS SEMANAS
          </h1>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 ">
            <div>
              <ul>
                <li className="flex items-center my-3 text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-2 text-yellow-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Barriga diminue até 12cm por mês
                </li>
                <li className="flex items-center my-3 text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-2 text-yellow-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Pernas desincham bastante
                </li>
                <li className="flex items-center my-3 text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-2 text-yellow-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Reução de peso (de 5 a 10 quilos){" "}
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="flex items-center my-3 text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-2 text-yellow-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Reduz dores nas costas
                </li>
                <li className="flex items-center my-3 text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-2 text-yellow-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Melhora o diabetes e colesterol alto
                </li>
                <li className="flex items-center my-3 text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-2 text-yellow-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Tira a ansiedade de comer compulsivamente{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-10 px-3">
          <a
            href="https://go.hotmart.com/P78183595S?ap=8c15"
            className="flex p-5 justify-center items-center bg-green-500 w-[500px] rounded-3xl text-center text-white font-bold text-3xl cursor-pointer hover:bg-green-700"
          >
            QUERO PERDER ATÉ 10KG EM 30 DIAS
          </a>
        </div>

        <div className="flex justify-center w-full text-sm mb-10 mt-2 text-center ">
          <p className="w-52">
            Atenção: os resultados poderão variar de pessoa para pessoa
          </p>
        </div>

        <div className="mt-20 w-full flex justify-center md:mx-5">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <img
                className="p-10 md:p-0 md:w-full md:h-full"
                src="https://static-public.klickpages.com.br/uploads/media/file/1505553/design_sem_nome_(2).png"
                alt=""
              />
            </div>
            <div>
              <h1 className="ml-5 text-2xl md:text-3xl font-bold">
                ÚLTIMAS HORAS COM VALOR PROMOCIONAL DISPONÍVEL !
              </h1>
              <ul>
                <li className="flex mt-5 ml-10 text-gray-700">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-2 text-green-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Reeducação com Receitas
                </li>
                <li className="flex mt-5 ml-10 text-gray-700">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-2 text-green-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Aprenda a comer saudável
                </li>
                <li className="flex mt-5 ml-10 text-gray-700">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-2 text-green-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Receitas rápidas e práticas
                </li>
                <li className="flex mt-5 ml-10 text-gray-700">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-2 text-green-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Acelere o metabolismo
                </li>
                <li className="flex mt-5 ml-10 text-gray-700">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-2 text-green-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Desintoxique o organismos
                </li>
                <li className="flex mt-5 ml-10 text-gray-700">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-2 text-green-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Livre-se da gordura que te incomoda
                </li>
                <li className="flex mt-5 ml-10 text-gray-700">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-2 text-green-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Mais de 100 receitas para detonar calorias todos os dias
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-wrap mt-20 bg-orange-100 py-16 mx-5 mb-20 mx-3 rounded-3xl">
          <p className="text-sm text-center w-[500px] text-gray-700">
            Atenção: Se você é uma pessoa que precisa muito ter resultados e que
            sofre frequentemente com ANSIEDADE, o nosso PROGRAMA pode,
            definitivamente, te ajudar a partir de agora. E o melhor de tudo, é
            só R$37,00!
          </p>

          <div className="flex justify-center w-full">
            <h1 className="text-center text-2xl md:text-4xl font-bold w-[700px] my-5 mx-3">
              O Programa é a base de que alimentos simples que você tem em casa,
              são muitas receitas como:
            </h1>
          </div>

          <div id="receitas" className="grid grid-cols-1 md:grid-cols-3">
            {food.map((Currentfood, index) => (
              <div key={index} className="flex flex-wrap justify-center my-5">
                <img
                  className="w-56 h-56 rounded-full"
                  src={Currentfood.url}
                  alt=""
                />
                <div className="flex flex-wrap justify-center text-center w-full">
                  <h2 className="text-2xl font-semibold w-56">
                    {Currentfood.title}
                  </h2>
                </div>
                <p className="text-center text-sm w-72 my-4 text-gray-800">
                  {Currentfood.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-500 mx-5 p-5 md:p-10 text-white flex flex-wrap justify-center rounded-3xl">
          <h1 className="text-center font-bold text-2xl md:text-4xl my-5">
            E todas essas transformações agora estão disponíveis para você com o
            Programa RECEITAS PARA SECAR EM 30 DIAS{" "}
          </h1>

          <h3 className="text-center font-semibold text-md">
            Um passo a passo completo de 30 dias que vai mudar sua vida para
            sempre, você não precisará mais de dietas malucas e de produtos em
            cápsula para chegar ao seu corpo dos sonhos, com o nosso programa
            você começará a mudar seu corpo a partir de hoje!
          </h3>
        </div>

        <div className="bg-gray-900 p-5 mx-5 my-10 rounded-3xl">
          <div className="flex justify-center">
            <h1 className="text-center font-bold text-3xl text-white w-[500px]">
              VEJA DEPOIMENTOS DE PESSOAS QUE TIVERAM{" "}
              <span className="text-green-500">
                {" "}
                RESULTADOS COM AS RECEITAS DO EBOOK RECEITAS PARA SECAR
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

        {/* <a
          href="https://go.hotmart.com/P78183595S?ap=8c15"
          className="flex justify-center py-10 px-3"
        >
          <div className="flex p-5 justify-center items-center bg-green-500 w-[500px] rounded-3xl text-center text-white font-bold text-3xl cursor-pointer hover:bg-green-700">
            EU QUERO
          </div>
        </a> */}

        <div className="flex justify-center my-10">
          <h1 className="text-center font-bold text-3xl md:w-[600px]">
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

        <div className="bg-green-500 mx-5 p-10 text-white flex flex-wrap justify-center rounded-3xl my-10">
          <h1 className="text-center font-bold text-2xl md:text-4xl my-5">
            Prepare-se para um novo método alimentar que vai mudar o seu corpo!
          </h1>

          <h3 className="text-center font-semibold text-xl">
            O passo a passo completo do seu resultado cabe na palma da sua mão.
            Rápido e prático!
          </h3>
          <div className="flex justify-center w-full">
            <img
              className="mt-5"
              src="
          https://static-public.klickpages.com.br/uploads/media/file/680104/clientes_ebook.png"
              alt=""
            />
          </div>
        </div>

        <div className="my-10">
          <div className="grid md:grid-cols-2">
            <div className="flex justify-center w-full">
              <div className="p-5 md:w-[500px]">
                <h1 className="text-center md:text-left text-4xl font-bold">
                  QUEM DEVE PARTICIPAR DO PROGRAMA?
                </h1>
                <p className="text-left mt-5 text-gray-700">
                  Nós recomendamos ele para todas as pessoas que estão cansadas
                  e frustradas com os mais diversos métodos que tem por ai que
                  dizem que você vai ficar com o corpo magro e bonito, mas nada
                  disso acontece.
                </p>
                <p className="text-left mt-5 text-gray-700">
                  {" "}
                  Para qualquer mulher que precisa de ajuda para transformar o
                  corpo. Talvez você já tenha tentado academia, alguma dieta, ou
                  não tenha tentado nada antes porque não acreditava em nada que
                  via na frente, nós sabemos como é isso.
                </p>
                <p className="text-left mt-5 text-gray-700">
                  {" "}
                  Temos certeza que você só queira algo que dê resultado mais
                  rápido e duradouro, sem enganação, então agora chegou a sua
                  vez de ter o resultado que tanto busca há anos!
                </p>
                <p className="text-left mt-5 text-gray-700">
                  {" "}
                  Você só precisa estar decidida e seguir nossas orientações
                  durante o programa, combinado?
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                className="w-96"
                src="https://static-public.klickpages.com.br/uploads/media/file/2811858/design_sem_nome_(57).png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="bg-green-500 mx-5 p-10 text-white flex flex-wrap justify-center rounded-3xl my-10">
          <h1 className="text-center font-bold text-2xl md:text-4xl my-5">
            Tenha Hoje Seu Programa Receitas Para Secar em 30 Dias e Comece a
            Reduzir Peso Urgente!
          </h1>

          <h3 className="text-center font-semibold text-xl">
            Apenas seguindo o passo a passo todos os dias sem sair de casa!
          </h3>
        </div>

        <div className="flex flex-wrap justify-center w-full">
          <div className="w-[800px]">
            <h1 className="w-full text-4xl font-semibold text-center">
              O que você vai receber adquirindo o Programa Receitas Para Secar
              em 30 Dias
            </h1>

            <h2 className="text-center mt-2 text-xl text-gray-700">
              Serão 2 e-books incríveis!
              <br />
              Receba imediatamente e acesse agora mesmo no seu computador ou
              celular
            </h2>
          </div>

          <div className="grid md:grid-cols-2 mt-10">
            <div className="flex justify-center w-full">
              <img
                className="w-72"
                src="https://static-public.klickpages.com.br/uploads/media/file/2810886/smartmockups_kgmrtro3.png"
                alt=""
              />
            </div>
            <div className="p-5">
              <h1 className="text-center text-2xl font-semibold">
                O E-book Receitas para secar em 30 dias:
              </h1>

              <h3 className="text-lg md:w-[600px] my-4 text-gray-700">
                E nele você encontrará mais de 100 páginas e muita receitas que
                vão te fazer triturar toda a gordura acumulada em seu corpo!
              </h3>

              <ul className="text-gray-700">
                <li className="flex items-center my-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-2 text-yellow-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  A Receita Secreta do Chá mais PODEROSO do Brasil
                </li>
                <li className="flex items-center my-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-2 text-yellow-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Receitas de Bebidas Bomba para perder peso em 2 semanas de uso
                </li>
                <li className="flex items-center my-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-2 text-yellow-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Sugestões de cardápios fit para você comer de forma saudável
                  no seu dia a dia
                </li>
                <li className="flex items-center my-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-2 text-yellow-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Receitas de Doces Fit e séries de Circuito Funcional para
                  queimar gordura mesmo dormindo
                </li>
              </ul>
            </div>

            <div className="flex justify-center w-full">
              <img
                className="w-72"
                src="https://static-public.klickpages.com.br/uploads/media/file/2810890/smartmockups_kgmruzjm.png"
                alt=""
              />
            </div>
            <div className="p-5">
              <h1 className="text-center text-2xl font-semibold">
                E mais! O E-book do Desafio de 30 Dias:
              </h1>

              <h3 className="text-lg md:w-[600px] my-4 text-gray-700">
                Um cronograma completo e passo a passo desde o zero para você
                começar ir desde o seu primeiro dia de reeducação alimentar, até
                atingir o seu corpo desejado!
              </h3>

              <ul className="text-gray-700">
                <li className="flex items-center my-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-2 text-yellow-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  O passo a passo completo do que comer e beber durante os 30
                  dias
                </li>
                <li className="flex items-center my-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-2 text-yellow-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Entenderá como funcionam as Receitas para secar e quando
                  usá-las.
                </li>
                <li className="flex items-center my-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-2 text-yellow-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Será guiada por todas as refeições diárias com base nas
                  sugestões de cardápios.
                </li>
                <li className="flex items-center my-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-2 text-yellow-600"
                  >
                    <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
                  </svg>
                  ACESSO AO NOSSO GRUPO VIP NO FACEBOOK COM MAIS DE 75 MIL
                  PESSOAS
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-green-500 mx-5 p-10 text-white flex flex-wrap justify-center rounded-3xl my-10">
            <h1 className="text-center font-bold text-2xl md:text-4xl my-5">
              Um e-book complementa o outro. Você irá os usar 2 juntos para
              expulsar de 5 a 10kg em 30 dias!
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap w-full justify-center p-5">
          <iframe
            src="https://player.vimeo.com/video/471581175?h=9d765177d1"
            width="400"
            height="533"
            allow="autoplay; fullscreen; picture-in-picture"
          />

          <div className="flex flex-wrap justify-center w-full">
            <h1 className="text-3xl text-center my-5 font-semibold w-[700px]">
              Veja no vídeo acima você vai entender melhor como funciona o
              programa na prática
            </h1>
            <div className="flex justify-center w-full">
              <p className="text-center w-[700px]">
                Ao adquirir o programa você receberá o seu material você vai
                abri-lo e entrar na terceira página e clicar no botão para ser
                redirecionada para o nosso Grupo Vip. A partir esse momento você
                será acompanhada por nós e estará juntas com as outras meninas.
              </p>
            </div>
          </div>
        </div>

        <div
          id="garantia"
          className="flex justify-center flex-wrap mt-20 bg-orange-100 py-20"
        >
          <div className="flex flex-wrap justify-center w-full">
            <div className="flex justify-center w-full">
              <img
                className="w-72 h-42"
                src="https://static-public.klickpages.com.br/uploads/media/file/1219788/selo-de-qualidade_(1).png"
                alt=""
              />
            </div>
            <p className="text-center w-[450px] mt-8">
              Eu sei que mesmo depois do que te mostramos aqui, você pode ainda
              estar insegura. Mas nós vamos facilitar a sua vida. Vamos deixar
              você experimentar o programa Receitas Para Secar em 30 Dias (com
              direito a todos os brindes) por 7 dias para você ver o resultado
              que vai ter nesse período. Se por qualquer razão você não gostar
              ou se adaptar, nos envie um e-mail dentro desse período que
              simplesmente devolvemos 100% do valor que você pagou. Você não
              corre nenhum um risco em testar. Mentira! Na verdade, corre sim. O
              risco de daqui a 30 dias, finalmente conseguir alcançar o seu
              objetivo. Porque uma coisa é certa, se você não fizer nada, seu
              corpo vai continuar da mesma forma, é isso mesmo que você quer?
            </p>
          </div>
          <div className="flex justify-center w-full text-xs my-10">
            <p className="w-80 text-center">
              Acesso vitalício por <strong> apenas R$37,00!</strong> Pague a
              vista ou parcele no cartão em até 4x.{" "}
              <strong> Compra 100% segura!</strong>
            </p>
          </div>
        </div>

        <a
          href="https://go.hotmart.com/P78183595S?ap=8c15"
          className="flex justify-center py-10 "
        >
          <div className="flex p-5 justify-center items-center bg-green-500 w-[700px] rounded-3xl text-center text-white font-bold text-3xl cursor-pointer hover:bg-green-700">
            SIM, EU QUERO PERDER GORDURA LOCALIZADA E EMAGRECER!
          </div>
        </a>

        <div>
          <h1 className="text-center text-2xl md:text-4xl leading-normal">
            São pessoas comuns como você que nos procuram e conseguem ter
            resultados surpreendentes.{" "}
            <span className="bg-green-500 text-white">
              {" "}
              LEMBRANDO: Os resultados variam de pessoa pra pessoa sempre.
            </span>
          </h1>

          <div className="flex justify-center flex-wrap p-10">
            <div className="flex justify-center flex-wrap my-5">
              <img
                className="w-96"
                src="https://static-public.klickpages.com.br/uploads/media/file/1505622/8.jpg"
                alt=""
              />
              <h1 className="text-center w-full font-semibold text-lg">
                Aline Moraes (6 Kgs)
              </h1>
              <h2 className="text-center w-full w-64">
                Secou e eliminou as dobrinhas das costas em 29 dias de programa
              </h2>
            </div>
            <div className="flex justify-center flex-wrap">
              <img
                className="w-96"
                src="https://static-public.klickpages.com.br/uploads/media/file/1505611/design_sem_nome_(5).png"
                alt=""
              />
              <h1 className="text-center w-full font-semibold text-lg">
                Aldemira da Silva (17 Kgs)
              </h1>
              <h2 className="text-center w-full w-64">
                Chegou pra gente super pra baixo e desmotivada e hoje esta linda
                e mantém uma alimentação saudável
              </h2>
            </div>
          </div>
        </div>

        <footer>
          <div className="flex justify-center items-center text-white text-center text-xs w-full p-10 bg-gray-600">
            AVISO LEGAL: Todas as dicas e conceitos apresentados aqui têm como
            objetivo apenas informar e educar. Este website foi disponibilizado
            com esse objetivo e não tem intenção nenhuma de servir como
            orientação médica, prescrição ou substituir diagnósticos de
            profissionais. Nenhuma informação desta página ou do e-book Receitas
            Para Secar em 30 Dias substitui uma consulta com seu médico,
            nutricionista ou um personal. Jamais faça nenhuma mudança na sua
            alimentação ou estilo de vida alimentar sem antes consultar seu
            médico ou profissional de saúde. É só ele quem poderá avaliar de
            perto a sua situação atual e decidir se você está apto ou não a
            essas alterações. Tenha em mente que os resultados aqui apresentados
            são de pessoas reais, mas não garante que você terá os mesmo
            resultados. Vai do organismo de cada pessoa e da determinação de ter
            resultados. Os proprietários deste Livro Digital não se
            responsabilizam por quaisquer danos ou lesões resultantes. Isto é
            por sua conta. Receitas Para Secar em 30 Dias - Todos os direitos
            reservados.
          </div>
          <div className="flex justify-center items-center text-white text-md w-full p-10 bg-gray-900">
            Copyright Receitas Para Secar Ⓒ 2023 Todos os direitos reservados
          </div>
        </footer>
      </main>
    </>
  );
}
