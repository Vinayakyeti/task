'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getTranslation } from '@payloadcms/translations';
import { FieldDiffLabel, useTranslation } from '@payloadcms/ui';
import React from 'react';
import { diffStyles } from '../styles.js';
import { DiffViewer } from './DiffViewer/index.js';
const baseClass = 'select-diff';
const getOptionsToRender = (value, options, hasMany) => {
  if (hasMany && Array.isArray(value)) {
    return value.map(val => options.find(option => (typeof option === 'string' ? option : option.value) === val) || String(val));
  }
  return options.find(option => (typeof option === 'string' ? option : option.value) === value) || String(value);
};
/**
 * Translates option labels while ensuring they are strings.
 * If `options.label` is a JSX element, it falls back to `options.value` because `DiffViewer`
 * expects all values to be strings.
 */
const getTranslatedOptions = (options, i18n) => {
  if (Array.isArray(options)) {
    return options.map(option => {
      if (typeof option === 'string') {
        return option;
      }
      const translatedLabel = getTranslation(option.label, i18n);
      // Ensure the result is a string, otherwise use option.value
      return typeof translatedLabel === 'string' ? translatedLabel : option.value;
    }).join(', ');
  }
  if (typeof options === 'string') {
    return options;
  }
  const translatedLabel = getTranslation(options.label, i18n);
  return typeof translatedLabel === 'string' ? translatedLabel : options.value;
};
export const Select = t0 => {
  const $ = _c(11);
  const {
    comparisonValue,
    diffMethod,
    field,
    locale,
    versionValue
  } = t0;
  const {
    i18n
  } = useTranslation();
  let placeholder = "";
  if (versionValue == comparisonValue) {
    placeholder = `[${i18n.t("general:noValue")}]`;
  }
  const options = "options" in field && field.options;
  let t1;
  if ($[0] !== comparisonValue || $[1] !== diffMethod || $[2] !== field || $[3] !== i18n || $[4] !== locale || $[5] !== options || $[6] !== placeholder || $[7] !== versionValue) {
    const comparisonToRender = typeof comparisonValue !== "undefined" ? getTranslatedOptions(getOptionsToRender(typeof comparisonValue === "string" ? comparisonValue : JSON.stringify(comparisonValue), options, field.hasMany), i18n) : placeholder;
    const versionToRender = typeof versionValue !== "undefined" ? getTranslatedOptions(getOptionsToRender(typeof versionValue === "string" ? versionValue : JSON.stringify(versionValue), options, field.hasMany), i18n) : placeholder;
    let t2;
    if ($[9] !== locale) {
      t2 = locale && _jsx("span", {
        className: `${baseClass}__locale-label`,
        children: locale
      });
      $[9] = locale;
      $[10] = t2;
    } else {
      t2 = $[10];
    }
    t1 = _jsxs("div", {
      className: baseClass,
      children: [_jsxs(FieldDiffLabel, {
        children: [t2, "label" in field && getTranslation(field.label || "", i18n)]
      }), _jsx(DiffViewer, {
        comparisonToRender,
        diffMethod,
        diffStyles,
        placeholder,
        versionToRender
      })]
    });
    $[0] = comparisonValue;
    $[1] = diffMethod;
    $[2] = field;
    $[3] = i18n;
    $[4] = locale;
    $[5] = options;
    $[6] = placeholder;
    $[7] = versionValue;
    $[8] = t1;
  } else {
    t1 = $[8];
  }
  return t1;
};
//# sourceMappingURL=index.js.map