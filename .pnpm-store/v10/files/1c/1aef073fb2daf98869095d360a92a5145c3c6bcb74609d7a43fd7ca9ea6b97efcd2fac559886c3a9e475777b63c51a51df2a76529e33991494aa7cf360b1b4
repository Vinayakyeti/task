'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getTranslation } from '@payloadcms/translations';
import { useConfig, useTranslation } from '@payloadcms/ui';
import { fieldIsArrayType, fieldIsBlockType } from 'payload/shared';
import React from 'react';
import { useSelectedLocales } from '../../../Default/SelectedLocalesContext.js';
import { DiffCollapser } from '../../DiffCollapser/index.js';
import { RenderVersionFieldsToDiff } from '../../RenderVersionFieldsToDiff.js';
import { getFieldsForRowComparison } from '../../utilities/getFieldsForRowComparison.js';
const baseClass = 'iterable-diff';
export const Iterable = t0 => {
  const $ = _c(15);
  const {
    baseVersionField,
    comparisonValue,
    field,
    locale,
    parentIsLocalized,
    versionValue
  } = t0;
  const {
    i18n
  } = useTranslation();
  const {
    selectedLocales
  } = useSelectedLocales();
  const {
    config
  } = useConfig();
  const versionRowCount = Array.isArray(versionValue) ? versionValue.length : 0;
  const comparisonRowCount = Array.isArray(comparisonValue) ? comparisonValue.length : 0;
  const maxRows = Math.max(versionRowCount, comparisonRowCount);
  if (!fieldIsArrayType(field) && !fieldIsBlockType(field)) {
    throw new Error(`Expected field to be an array or blocks type but got: ${field.type}`);
  }
  let t1;
  if ($[0] !== field || $[1] !== i18n || $[2] !== locale) {
    t1 = "label" in field && field.label && typeof field.label !== "function" && _jsxs("span", {
      children: [locale && _jsx("span", {
        className: `${baseClass}__locale-label`,
        children: locale
      }), getTranslation(field.label, i18n)]
    });
    $[0] = field;
    $[1] = i18n;
    $[2] = locale;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  let t2;
  if ($[4] !== baseVersionField || $[5] !== comparisonValue || $[6] !== config || $[7] !== field || $[8] !== i18n || $[9] !== maxRows || $[10] !== parentIsLocalized || $[11] !== selectedLocales || $[12] !== t1 || $[13] !== versionValue) {
    t2 = _jsx("div", {
      className: baseClass,
      children: _jsxs(DiffCollapser, {
        comparison: comparisonValue,
        field,
        isIterable: true,
        label: t1,
        locales: selectedLocales,
        parentIsLocalized,
        version: versionValue,
        children: [maxRows > 0 && _jsx("div", {
          className: `${baseClass}__rows`,
          children: Array.from(Array(maxRows).keys()).map((row, i) => {
            const versionRow = versionValue?.[i] || {};
            const comparisonRow = comparisonValue?.[i] || {};
            const {
              fields,
              versionFields
            } = getFieldsForRowComparison({
              baseVersionField,
              comparisonRow,
              config,
              field,
              row: i,
              versionRow
            });
            const rowNumber = String(i + 1).padStart(2, "0");
            const rowLabel = fieldIsArrayType(field) ? `Item ${rowNumber}` : `Block ${rowNumber}`;
            return _jsx("div", {
              className: `${baseClass}__row`,
              children: _jsx(DiffCollapser, {
                comparison: comparisonRow,
                fields,
                label: rowLabel,
                locales: selectedLocales,
                parentIsLocalized: parentIsLocalized || field.localized,
                version: versionRow,
                children: _jsx(RenderVersionFieldsToDiff, {
                  versionFields
                })
              })
            }, i);
          })
        }), maxRows === 0 && _jsx("div", {
          className: `${baseClass}__no-rows`,
          children: i18n.t("version:noRowsFound", {
            label: "labels" in field && field.labels?.plural ? getTranslation(field.labels.plural, i18n) : i18n.t("general:rows")
          })
        })]
      })
    });
    $[4] = baseVersionField;
    $[5] = comparisonValue;
    $[6] = config;
    $[7] = field;
    $[8] = i18n;
    $[9] = maxRows;
    $[10] = parentIsLocalized;
    $[11] = selectedLocales;
    $[12] = t1;
    $[13] = versionValue;
    $[14] = t2;
  } else {
    t2 = $[14];
  }
  return t2;
};
//# sourceMappingURL=index.js.map