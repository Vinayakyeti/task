'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Pill, useConfig, useTranslation } from '@payloadcms/ui';
import React, { Fragment } from 'react';
export const renderPill = (data, latestVersion, currentLabel, previousLabel, pillStyle) => {
  return /*#__PURE__*/_jsxs(React.Fragment, {
    children: [data?.id === latestVersion ? /*#__PURE__*/_jsx(Pill, {
      pillStyle: pillStyle,
      children: currentLabel
    }) : /*#__PURE__*/_jsx(Pill, {
      children: previousLabel
    }), "  "]
  });
};
export const AutosaveCell = t0 => {
  const $ = _c(16);
  const {
    latestDraftVersion,
    latestPublishedVersion,
    rowData: t1
  } = t0;
  let t2;
  if ($[0] !== t1) {
    t2 = t1 === undefined ? {
      autosave: undefined,
      publishedLocale: undefined,
      version: undefined
    } : t1;
    $[0] = t1;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const rowData = t2;
  const {
    i18n,
    t
  } = useTranslation();
  const {
    config: t3
  } = useConfig();
  const {
    localization
  } = t3;
  const publishedLocale = rowData?.publishedLocale || undefined;
  const status = rowData?.version._status;
  let t4;
  if ($[2] !== i18n?.language || $[3] !== latestDraftVersion || $[4] !== latestPublishedVersion || $[5] !== localization || $[6] !== publishedLocale || $[7] !== rowData || $[8] !== status || $[9] !== t) {
    let publishedLocalePill = null;
    const versionInfo = {
      draft: {
        currentLabel: t("version:currentDraft"),
        latestVersion: latestDraftVersion,
        pillStyle: undefined,
        previousLabel: t("version:draft")
      },
      published: {
        currentLabel: t("version:currentPublishedVersion"),
        latestVersion: latestPublishedVersion,
        pillStyle: "success",
        previousLabel: t("version:previouslyPublished")
      }
    };
    const {
      currentLabel,
      latestVersion,
      pillStyle,
      previousLabel
    } = versionInfo[status] || {};
    if (localization && localization?.locales && publishedLocale) {
      const localeCode = Array.isArray(publishedLocale) ? publishedLocale[0] : publishedLocale;
      let t5;
      if ($[11] !== localeCode) {
        t5 = loc => loc.code === localeCode;
        $[11] = localeCode;
        $[12] = t5;
      } else {
        t5 = $[12];
      }
      const locale = localization.locales.find(t5);
      const formattedLabel = locale?.label?.[i18n?.language] || locale?.label;
      if (formattedLabel) {
        publishedLocalePill = _jsx(Pill, {
          children: formattedLabel
        });
      }
    }
    let t5;
    if ($[13] !== rowData?.autosave || $[14] !== t) {
      t5 = rowData?.autosave && _jsx(Pill, {
        children: t("version:autosave")
      });
      $[13] = rowData?.autosave;
      $[14] = t;
      $[15] = t5;
    } else {
      t5 = $[15];
    }
    t4 = _jsxs(Fragment, {
      children: [t5, status && renderPill(rowData, latestVersion, currentLabel, previousLabel, pillStyle), publishedLocalePill]
    });
    $[2] = i18n?.language;
    $[3] = latestDraftVersion;
    $[4] = latestPublishedVersion;
    $[5] = localization;
    $[6] = publishedLocale;
    $[7] = rowData;
    $[8] = status;
    $[9] = t;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  return t4;
};
//# sourceMappingURL=index.js.map