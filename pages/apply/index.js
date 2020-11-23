import Head from "next/head";

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>CoronaSafe Programming Course</title>
        <link rel="icon" href="/favicon.ico"/>
        <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script>
      </Head>
      <main className="h-screen">
        <iframe id="typeform-full" width="100%" height="100%" frameBorder="0" allow="camera; microphone; autoplay; encrypted-media;" src="https://form.typeform.com/to/CSv0H294"></iframe>
      </main>
    </div>
  );
}
