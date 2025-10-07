export type TLatestPosts = {
  article_title: string;
  cover_image: string;
  date_created: string;
  country: {
    slug: string;
    country_name: string;
  };
};

export type TTabPosts = {
  article_title: string;
  cover_image: string;
  country: {
    slug: string;
    country_name: string;
  };
};
