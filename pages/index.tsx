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
          <h1 className="w-full text-center text-7xl font-bold text-red-600 my-10">
            Não perca essa chance !
          </h1>
          <p className="text-center  text-3xl">
            Você sabia que existe um método que te ensina e te ajuda a eliminar
            até entre 5 a 10 kg em 30 dias? quem saber como?
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

        <div className="flex justify-center w-full">
          <p className="w-80 text-center">
            Acesso vitalício por <strong> apenas R$37,00!</strong> Pague a vista
            ou parcele no cartão em até 4x.{" "}
            <strong> Compra 100% segura!</strong>
          </p>
        </div>

        <div className="flex justify-center py-10 px-3">
          <a
            href="https://go.hotmart.com/P78183595S?ap=8c15"
            className="flex p-5 justify-center items-center bg-green-500 w-[500px] rounded-3xl text-center text-white font-bold text-3xl cursor-pointer hover:bg-green-700"
          >
            QUERO PERDER ATÉ 10KG EM 30 DIAS
          </a>
        </div>

        <div className="p-10 bg-gray-900 text-white rounded-3xl mx-5">
          <h1 className="font-semibold text-center text-3xl">
            6 TRANSFORMAÇÕES IMPACTANTES EM SEU CORPO NAS PRÓXIMAS SEMANAS
          </h1>

          <div className="mt-5 grid grid-cols-2 ">
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

        <div className="flex justify-center w-full text-sm mb-10 mt-3 text-center">
          <p>Atenção: os resultados poderão variar de pessoa para pessoa</p>
        </div>

        <div className="my-36 w-full flex justify-center mx-5">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <img
                className="p-10 md:p-0 md:w-full md:h-full"
                src="https://static-public.klickpages.com.br/uploads/media/file/1505553/design_sem_nome_(2).png"
                alt=""
              />
            </div>
            <div>
              <h1 className="ml-5 text-3xl font-bold">
                ÚLTIMAS HORAS COM VALOR PROMOCIONAL DISPONÍVEL !
              </h1>
              <ul>
                <li className="flex mt-5 ml-10">
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
                <li className="flex mt-5 ml-10">
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
                <li className="flex mt-5 ml-10">
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
                <li className="flex mt-5 ml-10">
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
                <li className="flex mt-5 ml-10">
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
                <li className="flex mt-5 ml-10">
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
                <li className="flex mt-5 ml-10">
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

        <div className="flex justify-center flex-wrap mt-20 bg-orange-100 py-20 mx-5 my-40 mx-3 rounded-3xl">
          <p className="text-xs text-center w-[500px]">
            Atenção: Se você é uma pessoa que precisa muito ter resultados e que
            sofre frequentemente com ANSIEDADE, o nosso PROGRAMA pode,
            definitivamente, te ajudar a partir de agora. E o melhor de tudo, é
            só R$37,00!
          </p>

          <div className="flex justify-center w-full">
            <h1 className="text-center text-4xl font-bold w-[700px] my-5 mx-3">
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
                <p className="text-center text-sm w-72 my-4">
                  {Currentfood.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <a
          href="https://go.hotmart.com/P78183595S?ap=8c15"
          className="flex justify-center py-10 px-3"
        >
          <div className="flex p-5 justify-center items-center bg-green-500 w-[500px] rounded-3xl text-center text-white font-bold text-3xl cursor-pointer hover:bg-green-700">
            EU QUERO
          </div>
        </a>

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

        <div className="bg-green-500 mx-5 p-10 text-white flex flex-wrap justify-center rounded-3xl">
          <h1 className="text-center font-bold text-4xl my-5">
            E todas essas transformações agora estão disponíveis para você com o
            Programa RECEITAS PARA SECAR EM 30 DIAS{" "}
          </h1>

          <h3 className="text-center font-semibold text-xl">
            Um passo a passo completo de 30 dias que vai mudar sua vida para
            sempre, você não precisará mais de dietas malucas e de produtos em
            cápsula para chegar ao seu corpo dos sonhos, com o nosso programa
            você começará a mudar seu corpo a partir de hoje!
          </h3>
        </div>

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

        <div className="bg-green-500 mx-5 p-10 text-white flex flex-wrap justify-center rounded-3xl my-10">
          <h1 className="text-center font-bold text-4xl my-5">
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

        <div className="flex flex-wrap w-full justify-center ">
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
