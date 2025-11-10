'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getTranslation } from '@payloadcms/translations';
import { FieldDiffLabel, useConfig, useTranslation } from '@payloadcms/ui';
import { fieldAffectsData, fieldIsPresentationalOnly, fieldShouldBeLocalized } from 'payload/shared';
import React from 'react';
import ReactDiffViewer from 'react-diff-viewer-continued';
import { diffStyles } from '../styles.js';
const baseClass = 'relationship-diff';
const generateLabelFromValue = (collections, field, locale, value, config, parentIsLocalized) => {
  if (Array.isArray(value)) {
    return value.map(v => generateLabelFromValue(collections, field, locale, v, config, parentIsLocalized)).filter(Boolean) // Filters out any undefined or empty values
    .join(', ');
  }
  let relatedDoc;
  let valueToReturn = '';
  const relationTo = 'relationTo' in field ? field.relationTo : undefined;
  if (value === null || typeof value === 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string -- We want to return a string specifilly for null and undefined
    return String(value);
  }
  if (typeof value === 'object' && 'relationTo' in value) {
    relatedDoc = value.value;
  } else {
    // Non-polymorphic relationship
    relatedDoc = value;
  }
  const relatedCollection = relationTo ? collections.find(c => c.slug === (typeof value === 'object' && 'relationTo' in value ? value.relationTo : relationTo)) : null;
  if (relatedCollection) {
    const useAsTitle = relatedCollection?.admin?.useAsTitle;
    const useAsTitleField = relatedCollection.fields.find(f => fieldAffectsData(f) && !fieldIsPresentationalOnly(f) && f.name === useAsTitle);
    let titleFieldIsLocalized = false;
    if (useAsTitleField && fieldAffectsData(useAsTitleField)) {
      titleFieldIsLocalized = fieldShouldBeLocalized({
        field: useAsTitleField,
        parentIsLocalized
      });
    }
    if (typeof relatedDoc?.[useAsTitle] !== 'undefined') {
      valueToReturn = relatedDoc[useAsTitle];
    } else if (typeof relatedDoc?.id !== 'undefined') {
      valueToReturn = relatedDoc.id;
    } else {
      valueToReturn = relatedDoc;
    }
    if (typeof valueToReturn === 'object' && titleFieldIsLocalized && valueToReturn?.[locale]) {
      valueToReturn = valueToReturn[locale];
    }
  } else if (relatedDoc) {
    // Handle non-polymorphic `hasMany` relationships or fallback
    if (typeof relatedDoc?.id !== 'undefined') {
      valueToReturn = String(relatedDoc.id);
    } else {
      valueToReturn = relatedDoc;
    }
  }
  if (valueToReturn && typeof valueToReturn === 'object' && valueToReturn !== null || typeof valueToReturn !== 'string') {
    valueToReturn = JSON.stringify(valueToReturn);
  }
  return valueToReturn;
};
export const Relationship = t0 => {
  const $ = _c(12);
  const {
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
    config
  } = useConfig();
  const placeholder = `[${i18n.t("general:noValue")}]`;
  const {
    config: t1
  } = useConfig();
  const {
    collections
  } = t1;
  let t2;
  if ($[0] !== collections || $[1] !== comparisonValue || $[2] !== config || $[3] !== field || $[4] !== i18n || $[5] !== locale || $[6] !== parentIsLocalized || $[7] !== placeholder || $[8] !== versionValue) {
    let versionToRender = placeholder;
    let comparisonToRender = placeholder;
    if (versionValue) {
      if ("hasMany" in field && field.hasMany && Array.isArray(versionValue)) {
        versionToRender = versionValue.map(val => generateLabelFromValue(collections, field, locale, val, config, parentIsLocalized)).join(", ") || placeholder;
      } else {
        versionToRender = generateLabelFromValue(collections, field, locale, versionValue, config, parentIsLocalized) || placeholder;
      }
    }
    if (comparisonValue) {
      if ("hasMany" in field && field.hasMany && Array.isArray(comparisonValue)) {
        comparisonToRender = comparisonValue.map(val_0 => generateLabelFromValue(collections, field, locale, val_0, config, parentIsLocalized)).join(", ") || placeholder;
      } else {
        comparisonToRender = generateLabelFromValue(collections, field, locale, comparisonValue, config, parentIsLocalized) || placeholder;
      }
    }
    const label = "label" in field && typeof field.label !== "boolean" && typeof field.label !== "function" ? field.label : "";
    let t3;
    if ($[10] !== locale) {
      t3 = locale && _jsx("span", {
        className: `${baseClass}__locale-label`,
        children: locale
      });
      $[10] = locale;
      $[11] = t3;
    } else {
      t3 = $[11];
    }
    t2 = _jsxs("div", {
      className: baseClass,
      children: [_jsxs(FieldDiffLabel, {
        children: [t3, getTranslation(label, i18n)]
      }), _jsx(ReactDiffViewer, {
        hideLineNumbers: true,
        newValue: versionToRender,
        oldValue: comparisonToRender,
        showDiffOnly: false,
        splitView: true,
        styles: diffStyles
      })]
    });
    $[0] = collections;
    $[1] = comparisonValue;
    $[2] = config;
    $[3] = field;
    $[4] = i18n;
    $[5] = locale;
    $[6] = parentIsLocalized;
    $[7] = placeholder;
    $[8] = versionValue;
    $[9] = t2;
  } else {
    t2 = $[9];
  }
  return t2;
};
//# sourceMappingURL=index.js.map