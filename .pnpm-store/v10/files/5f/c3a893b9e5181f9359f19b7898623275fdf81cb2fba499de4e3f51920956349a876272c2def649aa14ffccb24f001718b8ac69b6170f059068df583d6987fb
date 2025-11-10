'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { getTranslation } from '@payloadcms/translations';
import { useTranslation } from '@payloadcms/ui';
import React from 'react';
import { useSelectedLocales } from '../../../Default/SelectedLocalesContext.js';
import { DiffCollapser } from '../../DiffCollapser/index.js';
import { RenderVersionFieldsToDiff } from '../../RenderVersionFieldsToDiff.js';
const baseClass = 'collapsible-diff';
export const Collapsible = t0 => {
  const $ = _c(11);
  const {
    baseVersionField,
    comparisonValue,
    field,
    parentIsLocalized,
    versionValue
  } = t0;
  const {
    i18n
  } = useTranslation();
  const {
    selectedLocales
  } = useSelectedLocales();
  if (!baseVersionField.fields?.length) {
    return null;
  }
  let t1;
  if ($[0] !== field || $[1] !== i18n) {
    t1 = "label" in field && field.label && typeof field.label !== "function" && _jsx("span", {
      children: getTranslation(field.label, i18n)
    });
    $[0] = field;
    $[1] = i18n;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const t2 = parentIsLocalized || field.localized;
  let t3;
  if ($[3] !== baseVersionField.fields || $[4] !== comparisonValue || $[5] !== field.fields || $[6] !== selectedLocales || $[7] !== t1 || $[8] !== t2 || $[9] !== versionValue) {
    t3 = _jsx("div", {
      className: baseClass,
      children: _jsx(DiffCollapser, {
        comparison: comparisonValue,
        fields: field.fields,
        label: t1,
        locales: selectedLocales,
        parentIsLocalized: t2,
        version: versionValue,
        children: _jsx(RenderVersionFieldsToDiff, {
          versionFields: baseVersionField.fields
        })
      })
    });
    $[3] = baseVersionField.fields;
    $[4] = comparisonValue;
    $[5] = field.fields;
    $[6] = selectedLocales;
    $[7] = t1;
    $[8] = t2;
    $[9] = versionValue;
    $[10] = t3;
  } else {
    t3 = $[10];
  }
  return t3;
};
//# sourceMappingURL=index.js.map