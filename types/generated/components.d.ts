import type { Schema, Attribute } from '@strapi/strapi';

export interface FinesLeviedFinesLevied extends Schema.Component {
  collectionName: 'components_fines_levied_fines_levieds';
  info: {
    displayName: 'finesLevied';
  };
  attributes: {
    fineId: Attribute.Integer;
    date: Attribute.Date;
    website: Attribute.String;
    fineCost: Attribute.Decimal;
  };
}

export interface FinesNotLeviedFinesNotLevied extends Schema.Component {
  collectionName: 'components_fines_not_levied_fines_not_levieds';
  info: {
    displayName: 'finesNotLevied';
  };
  attributes: {
    fineId: Attribute.Integer;
    date: Attribute.Date;
    website: Attribute.String;
  };
}

export interface IssueComparison extends Schema.Component {
  collectionName: 'components_issue_comparisons';
  info: {
    displayName: 'comparison';
  };
  attributes: {
    finesLevied: Attribute.Component<'fines-levied.fines-levied'>;
    finesNotLevied: Attribute.Component<'fines-not-levied.fines-not-levied'>;
  };
}

export interface ScanHistoryScanHistory extends Schema.Component {
  collectionName: 'components_scan_history_scan_histories';
  info: {
    displayName: 'scanHistory';
  };
  attributes: {
    date: Attribute.Date;
    website: Attribute.String;
    detected: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'fines-levied.fines-levied': FinesLeviedFinesLevied;
      'fines-not-levied.fines-not-levied': FinesNotLeviedFinesNotLevied;
      'issue.comparison': IssueComparison;
      'scan-history.scan-history': ScanHistoryScanHistory;
    }
  }
}
