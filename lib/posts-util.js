import fs from "fs"
import path from "path"

import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "posts")
// * cwd() method selects overall project folder, and "posts" dives into posts folder to get to blog posts (comment for learning purposes)

export const getPostsFiles = () => {
 return fs.readdirSync(postsDirectory);
}

export const getPostData = (postIdentifier) => {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // * Removes the file extension name
  const filePath = path.join(postsDirectory, `${postSlug}.md`)
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);


  const postData = {
    slug: postSlug,
    ...data,
    content 
  };

  return postData;
}

export const getAllPosts = () => {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  })

  const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1)
  
  return sortedPosts;
}

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter(post => post.isFeatured)

  return featuredPosts;
}