export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          page: ["one", "two"],
        },
      },
      {
        params: {
          page: ["one", "three"],
        },
      },
      {
        params: {
          page: ["three", "four"],
        },
      },
    ],
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return {
    props: {
      params,
    },
  };
}

export default function Page({ params }) {
  return (
    <div>
      <h1>{params.page.join("/")}</h1>
      <p>(pages router)</p>
    </div>
  );
}
