import type { Schema, Attribute } from '@strapi/strapi';

export interface FlexibleFaq extends Schema.Component {
  collectionName: 'components_global_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Question: Attribute.Text;
    Answer: Attribute.RichText;
  };
}

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
    HasPagination: Attribute.Boolean;
  };
}

export interface FlexibleGridItemContent extends Schema.Component {
  collectionName: 'components_flexible_grid_item_contents';
  info: {
    displayName: 'GridItemContent';
    icon: 'apps';
    description: '';
  };
  attributes: {
    SectionTitle: Attribute.Text;
    SubTitle: Attribute.String;
    GridItems: Attribute.Component<'global.grid-items', true>;
    SectionContent: Attribute.RichText;
  };
}

export interface FlexibleHasHistory extends Schema.Component {
  collectionName: 'components_flexible_has_histories';
  info: {
    displayName: 'HasHistory';
    icon: 'apps';
  };
  attributes: {
    HasHistory: Attribute.Boolean;
  };
}

export interface FlexibleHasMinistries extends Schema.Component {
  collectionName: 'components_flexible_has_ministries';
  info: {
    displayName: 'HasMinistries';
    icon: 'apps';
  };
  attributes: {
    HasMinistries: Attribute.Boolean;
  };
}

export interface FlexibleHasPastors extends Schema.Component {
  collectionName: 'components_flexible_has_pastors';
  info: {
    displayName: 'HasPastors';
    icon: 'apps';
  };
  attributes: {
    HasPastors: Attribute.Boolean;
  };
}

export interface FlexibleHasServices extends Schema.Component {
  collectionName: 'components_flexible_has_services';
  info: {
    displayName: 'HasSermons';
    icon: 'apps';
    description: '';
  };
  attributes: {
    HasSermons: Attribute.Boolean;
  };
}

export interface FlexibleHasVolunteers extends Schema.Component {
  collectionName: 'components_flexible_has_volunteers';
  info: {
    displayName: 'HasVolunteers';
    icon: 'apps';
    description: '';
  };
  attributes: {
    HasVolunteers: Attribute.Boolean;
  };
}

export interface FlexibleOneColumnContent extends Schema.Component {
  collectionName: 'components_flexible_one_column_contents';
  info: {
    displayName: 'OneColumnContent';
    icon: 'apps';
    description: '';
  };
  attributes: {
    hasVideo: Attribute.Boolean;
    SectionTitle: Attribute.String;
    override: Attribute.String;
    Content: Attribute.RichText;
    OneColMultipleLists: Attribute.Component<'global.grid-items', true>;
    SubTitle: Attribute.String;
    HasSermons: Attribute.Boolean;
    Youtube: Attribute.String;
    Audio: Attribute.String;
    Pdf: Attribute.String;
    Pastor: Attribute.String;
    Category: Attribute.Text;
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
    Image: Attribute.Media;
    SubTitle: Attribute.String;
    GridItems: Attribute.Component<'global.grid-items', true>;
    FlipContent: Attribute.Boolean;
    override: Attribute.Boolean;
    SectionContent: Attribute.RichText;
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
    description: '';
  };
  attributes: {
    SectionTitle: Attribute.String;
    SubTitle: Attribute.String;
    Content: Attribute.RichText;
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
    Content: Attribute.RichText;
    Image: Attribute.Media;
    Facebook: Attribute.String;
    email: Attribute.String;
    LinkedIn: Attribute.String;
    Instagram: Attribute.String;
    Youtube: Attribute.String;
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
    Image: Attribute.Media;
    ButtonLabel: Attribute.String;
    ButtonUrl: Attribute.String;
    IsVideo: Attribute.Boolean;
    SubTitle: Attribute.String;
    Content: Attribute.RichText;
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
    description: '';
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

export interface GlobalTab extends Schema.Component {
  collectionName: 'components_global_tabs';
  info: {
    displayName: 'Tab';
  };
  attributes: {};
}

export interface GlobalTags extends Schema.Component {
  collectionName: 'components_global_tags';
  info: {
    displayName: 'Tags';
    description: '';
  };
  attributes: {
    Tag: Attribute.String;
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
    Items: Attribute.Component<'global.grid-items', true>;
    DailyPrayers: Attribute.Blocks;
    Content: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'flexible.faq': FlexibleFaq;
      'flexible.featured-image': FlexibleFeaturedImage;
      'flexible.flexible': FlexibleFlexible;
      'flexible.gallery': FlexibleGallery;
      'flexible.grid-item-content': FlexibleGridItemContent;
      'flexible.has-history': FlexibleHasHistory;
      'flexible.has-ministries': FlexibleHasMinistries;
      'flexible.has-pastors': FlexibleHasPastors;
      'flexible.has-services': FlexibleHasServices;
      'flexible.has-volunteers': FlexibleHasVolunteers;
      'flexible.one-column-content': FlexibleOneColumnContent;
      'flexible.two-column-content': FlexibleTwoColumnContent;
      'global.campaign-events': GlobalCampaignEvents;
      'global.contact': GlobalContact;
      'global.gallery': GlobalGallery;
      'global.grid-items': GlobalGridItems;
      'global.hero-slider': GlobalHeroSlider;
      'global.ministries': GlobalMinistries;
      'global.pastors': GlobalPastors;
      'global.sermons': GlobalSermons;
      'global.tab': GlobalTab;
      'global.tags': GlobalTags;
      'global.two-col-content': GlobalTwoColContent;
    }
  }
}
