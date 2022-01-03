import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getSliderImages = async () => {
  const query = gql`
 query MyQuery {
  sliderImages(orderBy: createdAt_DESC) {
    sliderImageTitle
    sliderImageFile {
      url
    }
    id
  }
}
`
  const result = await request(graphqlAPI, query);

  return result.sliderImages;
}

export const getBannerTexts = async () => {
  const query = gql`
query MyQuery {
  bannerChangingTexts(orderBy: createdAt_DESC) {
    textLabel
    id
  }
}
`
  const result = await request(graphqlAPI, query);

  return result.bannerChangingTexts;
}

export const getEpisodes = async () => {
  const query = gql`
query MyQuery {
  legalEpisodes(orderBy: createdAt_DESC) {
    episodeTitle
    episodeLink
    episodeDescription
    id
    createdAt
    episodePoster {
      url
    }
  }
}
`
  const result = await request(graphqlAPI, query);

  return result.legalEpisodes;
}

export const getClientTestimonies = async () => {
  const query = gql`
query MyQuery {
  clientsTestimonials(orderBy: createdAt_DESC) {
    clientFullName
    clientPhoto {
      url
    }
    clientPosition
    id
    clientTestimonial {
      raw
    }
    testimonyCategory
  }
}
`
  const result = await request(graphqlAPI, query);

  return result.clientsTestimonials;
}


export const getPostDetail = async (slug) => {
  const query = gql`
  query GetPostDetail($slug: String!) {
  activity(where: {slug: $slug}) {
    activityTitle
    featuredImage {
      url
    }
    createdAt
    activityDetails {
      text
      raw
      html
    }
    id
    slug
  }
}
`
  const result = await request(graphqlAPI, query, { slug });

  return result.activity;
}

export const getSearchEpisodes = async () => {
  const query = gql`
query MyQuery {
  legalEpisodes(orderBy: createdAt_DESC) {
    episodeTitle
    episodeLink
    episodeDescription
    id
    createdAt
    episodePoster {
      url
    }
  }
}
`
  const result = await request(graphqlAPI, query);

  return result.legalEpisodes;
}