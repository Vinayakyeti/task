'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getTranslation } from '@payloadcms/translations';
import { FieldDiffLabel, useTranslation } from '@payloadcms/ui';
import React from 'react';
import { diffStyles } from '../styles.js';
import { DiffViewer } from './DiffViewer/index.js';
const baseClass = 'text-diff';
export const Text = t0 => {
  const $ = _c(14);
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
  let t1;
  if ($[0] !== versionValue) {
    t1 = typeof versionValue === "string" ? versionValue : JSON.stringify(versionValue, null, 2);
    $[0] = versionValue;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const versionToRender = t1;
  let t2;
  if ($[2] !== comparisonValue) {
    t2 = typeof comparisonValue === "string" ? comparisonValue : JSON.stringify(comparisonValue, null, 2);
    $[2] = comparisonValue;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const comparisonToRender = t2;
  let t3;
  if ($[4] !== locale) {
    t3 = locale && _jsx("span", {
      className: `${baseClass}__locale-label`,
      children: locale
    });
    $[4] = locale;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] !== comparisonToRender || $[7] !== diffMethod || $[8] !== field || $[9] !== i18n || $[10] !== placeholder || $[11] !== t3 || $[12] !== versionToRender) {
    t4 = _jsxs("div", {
      className: baseClass,
      children: [_jsxs(FieldDiffLabel, {
        children: [t3, "label" in field && typeof field.label !== "function" && getTranslation(field.label || "", i18n)]
      }), _jsx(DiffViewer, {
        comparisonToRender,
        diffMethod,
        diffStyles,
        placeholder,
        versionToRender
      })]
    });
    $[6] = comparisonToRender;
    $[7] = diffMethod;
    $[8] = field;
    $[9] = i18n;
    $[10] = placeholder;
    $[11] = t3;
    $[12] = versionToRender;
    $[13] = t4;
  } else {
    t4 = $[13];
  }
  return t4;
};
//# sourceMappingURL=index.js.map