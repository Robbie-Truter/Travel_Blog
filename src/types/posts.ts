export type TLatestPosts = {
  article_title: string;
  cover_image: string;
  date_created: string;
  country: {
    slug: string;
    country_name: string;
    country_iso: string | null;
    flag_emoji: string;
  };
  slug: string;
};

export type TTabPosts = {
  article_title: string;
  cover_image: string;
  country: {
    country_name: string;
  };
  location?: {
    location_name: string;
  };
};

export type TAllPosts = {
  id: string;
  status: string;
  article_title: string;
  article_content: string;
  cover_image: string;
  featured: boolean;
  is_tab: boolean;
  date_created: string;
  date_updated: string | null;
  country: {
    country_name: string;
    flag_emoji: string;
    country_iso: string | null;
  };
  location: {
    location_name: string;
  };
  slug: string;
};
