import type { Schema, Attribute } from '@strapi/strapi';

export interface FlexibleFeaturedImage extends Schema.Component {
  collectionName: 'components_flexible_featured_images';
  info: {
    displayName: 'FeaturedImage';
    icon: 'apps';
  };
  attributes: {
    Image: Attribute.Media;
  };
}

export interface FlexibleFlexible extends Schema.Component {
  collectionName: 'components_flexible_flexibles';
  info: {
    displayName: 'Flexible';
    icon: 'apps';
  };
  attributes: {
    TwoColumnContent: Attribute.Component<'flexible.two-column-content'>;
  };
}

export interface FlexibleGallery extends Schema.Component {
  collectionName: 'components_flexible_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Gallery: Attribute.Media;
    galleries: Attribute.Relation<
      'flexible.gallery',
      'oneToMany',
      'api::gallery.gallery'
    >;
  };
}

export interface FlexibleGridItemContent extends Schema.Component {
  collectionName: 'components_flexible_grid_item_contents';
  info: {
    displayName: 'GridItemContent';
    icon: 'apps';
  };
  attributes: {
    SectionTitle: Attribute.Text;
    SectionContent: Attribute.Blocks;
    SubTitle: Attribute.String;
  };
}

export interface FlexibleOneColumnContent extends Schema.Component {
  collectionName: 'components_flexible_one_column_contents';
  info: {
    displayName: 'OneColumnContent';
    icon: 'apps';
  };
  attributes: {
    Content: Attribute.Blocks;
    hasVideo: Attribute.Boolean;
    SectionTitle: Attribute.String;
  };
}

export interface FlexibleTwoColumnContent extends Schema.Component {
  collectionName: 'components_flexible_two_column_contents';
  info: {
    displayName: 'TwoColumnContent';
    icon: 'apps';
    description: '';
  };
  attributes: {
    SectionTitle: Attribute.Text;
    SectionContent: Attribute.Blocks;
    Image: Attribute.Media;
    SubTitle: Attribute.String;
    GridItems: Attribute.Component<'global.grid-items', true>;
    FlipContent: Attribute.Boolean;
  };
}

export interface GlobalCampaignEvents extends Schema.Component {
  collectionName: 'components_global_campaign_events';
  info: {
    displayName: 'CampaignEvents';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.Text;
    Date: Attribute.DateTime;
    Events: Attribute.Component<'global.grid-items', true>;
  };
}

export interface GlobalContact extends Schema.Component {
  collectionName: 'components_global_contacts';
  info: {
    displayName: 'Contact';
    icon: 'apps';
  };
  attributes: {
    SectionTitle: Attribute.String;
    Content: Attribute.Blocks;
    SubTitle: Attribute.String;
  };
}

export interface GlobalFaq extends Schema.Component {
  collectionName: 'components_global_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'apps';
  };
  attributes: {
    Question: Attribute.Text;
    Answer: Attribute.Blocks;
  };
}

export interface GlobalGallery extends Schema.Component {
  collectionName: 'components_global_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'apps';
  };
  attributes: {
    SubTitle: Attribute.String;
    SectionTitle: Attribute.String;
    Gallery: Attribute.Component<'flexible.gallery', true>;
  };
}

export interface GlobalGridItems extends Schema.Component {
  collectionName: 'components_global_grid_items';
  info: {
    displayName: 'GridItems';
    icon: 'apps';
    description: '';
  };
  attributes: {
    SubTitle: Attribute.Text;
    Content: Attribute.Blocks;
    Icon: Attribute.Media;
    LinkLabel: Attribute.String;
    LinkUrl: Attribute.String;
    overrideDesign: Attribute.String;
    Preacher: Attribute.Enumeration<
      ['Reverend', 'Pastor Alebiosu', 'Pastor Ajiboye']
    >;
    BibleVerses: Attribute.Text;
    Date: Attribute.Date;
    SectionTitle: Attribute.String;
  };
}

export interface GlobalHeroSlider extends Schema.Component {
  collectionName: 'components_global_hero_sliders';
  info: {
    displayName: 'HeroSlider';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.Blocks;
    Image: Attribute.Media;
    ButtonLabel: Attribute.String;
    ButtonUrl: Attribute.String;
    IsVideo: Attribute.Boolean;
  };
}

export interface GlobalMinistries extends Schema.Component {
  collectionName: 'components_global_ministries';
  info: {
    displayName: 'Ministries';
    icon: 'apps';
  };
  attributes: {
    SubTitle: Attribute.String;
    SectionTitle: Attribute.String;
    Ministries: Attribute.Component<'global.grid-items', true>;
  };
}

export interface GlobalPastors extends Schema.Component {
  collectionName: 'components_global_pastors';
  info: {
    displayName: 'Pastors';
    icon: 'apps';
  };
  attributes: {
    SubTitle: Attribute.String;
    SectionTitle: Attribute.String;
    Pastors: Attribute.Component<'global.grid-items', true>;
  };
}

export interface GlobalSermons extends Schema.Component {
  collectionName: 'components_global_sermons';
  info: {
    displayName: 'Sermons';
    icon: 'apps';
    description: '';
  };
  attributes: {
    SubTitle: Attribute.String;
    SectionTitle: Attribute.Text;
    Sermons: Attribute.Component<'global.grid-items', true>;
    all_sermons: Attribute.Relation<
      'global.sermons',
      'oneToMany',
      'api::all-sermon.all-sermon'
    >;
  };
}

export interface GlobalTwoColContent extends Schema.Component {
  collectionName: 'components_global_two_col_contents';
  info: {
    displayName: 'TwoColContent';
    icon: 'apps';
    description: '';
  };
  attributes: {
    SubTitle: Attribute.String;
    SectionTitle: Attribute.String;
    Content: Attribute.Blocks;
    Items: Attribute.Component<'global.grid-items', true>;
    DailyPrayers: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'flexible.featured-image': FlexibleFeaturedImage;
      'flexible.flexible': FlexibleFlexible;
      'flexible.gallery': FlexibleGallery;
      'flexible.grid-item-content': FlexibleGridItemContent;
      'flexible.one-column-content': FlexibleOneColumnContent;
      'flexible.two-column-content': FlexibleTwoColumnContent;
      'global.campaign-events': GlobalCampaignEvents;
      'global.contact': GlobalContact;
      'global.faq': GlobalFaq;
      'global.gallery': GlobalGallery;
      'global.grid-items': GlobalGridItems;
      'global.hero-slider': GlobalHeroSlider;
      'global.ministries': GlobalMinistries;
      'global.pastors': GlobalPastors;
      'global.sermons': GlobalSermons;
      'global.two-col-content': GlobalTwoColContent;
    }
  }
}
