import React from "react";
import pageData from "./dynamic.json";

export async function generateStaticParams() {
  const generationData = pageData;

  return generationData.map((page) => {
    slug: page.slug;
  });
}

async function getData(params) {
  let data = pageData.filter((e) => e.slug === params.dynamic);

  return data;
}

const page = async ({ params }) => {
  const data = await getData(params);

  return (
    <main>
      <div>Here's some blazingly fast Data: {data[0]?.data}</div>
    </main>
  );
};

export default page;
