'use client';

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckboxInput, Gutter, useConfig, useDocumentInfo, useRouteTransition, useTranslation } from '@payloadcms/ui';
import { formatDate } from '@payloadcms/ui/shared';
import { usePathname, useRouter, useSearchParams } from 'next/navigation.js';
import React, { useEffect, useMemo, useState } from 'react';
import Restore from '../Restore/index.js';
import { SelectComparison } from '../SelectComparison/index.js';
import { SelectLocales } from '../SelectLocales/index.js';
import { SelectedLocalesContext } from './SelectedLocalesContext.js';
import { SetStepNav } from './SetStepNav.js';
const baseClass = 'view-version';
export const DefaultVersionView = ({
  canUpdate,
  doc,
  latestDraftVersion,
  latestPublishedVersion,
  modifiedOnly: modifiedOnlyProp,
  RenderedDiff,
  selectedLocales: selectedLocalesProp,
  versionID
}) => {
  const {
    config,
    getEntityConfig
  } = useConfig();
  const availableLocales = useMemo(() => config.localization ? config.localization.locales.map(locale => ({
    label: locale.label,
    value: locale.code
  })) : [], [config.localization]);
  const {
    i18n
  } = useTranslation();
  const {
    id,
    collectionSlug,
    globalSlug
  } = useDocumentInfo();
  const {
    startRouteTransition
  } = useRouteTransition();
  const [collectionConfig] = useState(() => getEntityConfig({
    collectionSlug
  }));
  const [globalConfig] = useState(() => getEntityConfig({
    globalSlug
  }));
  const [selectedLocales, setSelectedLocales] = useState(selectedLocalesProp);
  const [compareValue, setCompareValue] = useState();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [modifiedOnly, setModifiedOnly] = useState(modifiedOnlyProp);
  function onToggleModifiedOnly() {
    setModifiedOnly(!modifiedOnly);
  }
  useEffect(() => {
    // If the selected comparison doc or locales change, update URL params so that version page
    // This is so that RSC can update the version comparison state
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (!compareValue) {
      current.delete('compareValue');
    } else {
      current.set('compareValue', compareValue?.value);
    }
    if (!selectedLocales) {
      current.delete('localeCodes');
    } else {
      current.set('localeCodes', JSON.stringify(selectedLocales.map(locale_0 => locale_0.value)));
    }
    if (modifiedOnly === false) {
      current.set('modifiedOnly', 'false');
    } else {
      current.delete('modifiedOnly');
    }
    const search = current.toString();
    const query = search ? `?${search}` : '';
    // TODO: this transition occurs multiple times during the initial rendering phases, need to evaluate
    startRouteTransition(() => router.push(`${pathname}${query}`));
  }, [compareValue, pathname, router, searchParams, selectedLocales, modifiedOnly, startRouteTransition]);
  const {
    admin: {
      dateFormat
    },
    localization,
    routes: {
      api: apiRoute
    },
    serverURL
  } = config;
  const versionCreatedAt = doc?.updatedAt ? formatDate({
    date: doc.updatedAt,
    i18n,
    pattern: dateFormat
  }) : '';
  const compareBaseURL = `${serverURL}${apiRoute}/${globalSlug ? 'globals/' : ''}${collectionSlug || globalSlug}/versions`;
  const draftsEnabled = Boolean((collectionConfig || globalConfig)?.versions.drafts);
  return /*#__PURE__*/_jsxs("main", {
    className: baseClass,
    children: [/*#__PURE__*/_jsx(SetStepNav, {
      collectionConfig: collectionConfig,
      collectionSlug: collectionSlug,
      doc: doc,
      fields: (collectionConfig || globalConfig)?.fields,
      globalConfig: globalConfig,
      globalSlug: globalSlug,
      id: id
    }), /*#__PURE__*/_jsxs(Gutter, {
      className: `${baseClass}__wrap`,
      children: [/*#__PURE__*/_jsxs("div", {
        className: `${baseClass}__header-wrap`,
        children: [/*#__PURE__*/_jsx("p", {
          className: `${baseClass}__created-at`,
          children: i18n.t('version:versionCreatedOn', {
            version: i18n.t(doc?.autosave ? 'version:autosavedVersion' : 'version:version')
          })
        }), /*#__PURE__*/_jsxs("header", {
          className: `${baseClass}__header`,
          children: [/*#__PURE__*/_jsx("h2", {
            children: versionCreatedAt
          }), canUpdate && /*#__PURE__*/_jsx(Restore, {
            className: `${baseClass}__restore`,
            collectionSlug: collectionSlug,
            globalSlug: globalSlug,
            label: collectionConfig?.labels.singular || globalConfig?.label,
            originalDocID: id,
            status: doc?.version?._status,
            versionDate: versionCreatedAt,
            versionID: versionID
          }), /*#__PURE__*/_jsx("span", {
            className: `${baseClass}__modifiedCheckBox`,
            children: /*#__PURE__*/_jsx(CheckboxInput, {
              checked: modifiedOnly,
              id: 'modifiedOnly',
              label: i18n.t('version:modifiedOnly'),
              onToggle: onToggleModifiedOnly
            })
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: `${baseClass}__controls`,
        children: [/*#__PURE__*/_jsx(SelectComparison, {
          baseURL: compareBaseURL,
          draftsEnabled: draftsEnabled,
          latestDraftVersion: latestDraftVersion,
          latestPublishedVersion: latestPublishedVersion,
          onChange: setCompareValue,
          parentID: id,
          value: compareValue,
          versionID: versionID
        }), localization && /*#__PURE__*/_jsx(SelectLocales, {
          onChange: setSelectedLocales,
          options: availableLocales,
          value: selectedLocales
        })]
      }), /*#__PURE__*/_jsx(SelectedLocalesContext, {
        value: {
          selectedLocales: selectedLocales.map(locale_1 => locale_1.value)
        },
        children: doc?.version && RenderedDiff
      })]
    })]
  });
};
//# sourceMappingURL=index.js.map