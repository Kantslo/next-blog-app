import { Fragment } from "react";
import Head from "next/head";

import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";
import { getFeaturedPosts } from "@/lib/posts-util";

function HomePage(props) {


  return (
    <Fragment>
      <Head>
        <title>Kantslo' Blog</title>
        <meta name="description" content="I post about programming and web development!" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 3600
  }
}

export default HomePage;
