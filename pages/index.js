// import styles from '../styles/Home.module.css'
// import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Search from '../components/search/Search';

export const Home = (props) => {
    return <Search />
}

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // Fetch data from API or database
  // Good to use when you need to make an authenticated request where you never want the client to see the information
  return {
    props: {
      meetups: res.data,
    },
  };
}

// export async function getStaticProps() {

//   const APP_ID = process.env.NEXT_PUBLIC_APP_ID;
//   const APP_KEY = process.env.NEXT_PUBLIC_APP_KEY;

//   let urlV2 = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

//   const client = new ApolloClient({
//     uri: urlV2,
//     cache: new InMemoryCache()
//   })

//   const { data } = await client.query({
//     // query: gql `
//     //   query GetRecipes {
//     //       recipe(limit: 10) {k
//     //         id
//     //         mission_name
//     //         launch_date_local
//     //         launch_site {
//     //           site_name_long
//     //         }
//     //         links {
//     //           article_link
//     //           video_link
//     //           mission_patch
//     //         }
//     //         rocket {
//     //           rocket_name
//     //         }
//     //       }
//     //     }
//     //  `
//   });

//   return {
//     props: {
//       recipes: [] //TODO: swtich to data.recipes
//     }
//   }
// }