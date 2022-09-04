import Head from "next/head";

export default function Layout({
  title,
  children,
  footer = true,
  description,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <div>
        <main>{children}</main>
        {footer && (
          <footer>
            <p>Footer</p>
          </footer>
        )}
      </div>
    </>
  );
}
