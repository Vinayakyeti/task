'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronIcon, FieldDiffLabel, Pill, useConfig, useTranslation } from '@payloadcms/ui';
import { fieldIsArrayType, fieldIsBlockType } from 'payload/shared';
import React, { useState } from 'react';
import { countChangedFields, countChangedFieldsInRows } from '../utilities/countChangedFields.js';
const baseClass = 'diff-collapser';
export const DiffCollapser = t0 => {
  const $ = _c(21);
  const {
    children,
    comparison,
    field,
    fields,
    initCollapsed: t1,
    isIterable: t2,
    label,
    locales,
    parentIsLocalized,
    version
  } = t0;
  const initCollapsed = t1 === undefined ? false : t1;
  const isIterable = t2 === undefined ? false : t2;
  const {
    t
  } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(initCollapsed);
  const {
    config
  } = useConfig();
  let t3;
  if ($[0] !== children || $[1] !== comparison || $[2] !== config || $[3] !== field || $[4] !== fields || $[5] !== isCollapsed || $[6] !== isIterable || $[7] !== label || $[8] !== locales || $[9] !== parentIsLocalized || $[10] !== t || $[11] !== version) {
    let changeCount;
    if (isIterable) {
      if (!fieldIsArrayType(field) && !fieldIsBlockType(field)) {
        throw new Error("DiffCollapser: field must be an array or blocks field when isIterable is true");
      }
      let t4;
      if ($[13] !== comparison) {
        t4 = comparison ?? [];
        $[13] = comparison;
        $[14] = t4;
      } else {
        t4 = $[14];
      }
      const comparisonRows = t4;
      let t5;
      if ($[15] !== version) {
        t5 = version ?? [];
        $[15] = version;
        $[16] = t5;
      } else {
        t5 = $[16];
      }
      const versionRows = t5;
      if (!Array.isArray(comparisonRows) || !Array.isArray(versionRows)) {
        throw new Error("DiffCollapser: comparison and version must be arrays when isIterable is true");
      }
      changeCount = countChangedFieldsInRows({
        comparisonRows,
        config,
        field,
        locales,
        parentIsLocalized,
        versionRows
      });
    } else {
      changeCount = countChangedFields({
        comparison,
        config,
        fields,
        locales,
        parentIsLocalized,
        version
      });
    }
    const t4 = isCollapsed && `${baseClass}__content--is-collapsed`;
    let t5;
    if ($[17] !== t4) {
      t5 = [`${baseClass}__content`, t4].filter(Boolean);
      $[17] = t4;
      $[18] = t5;
    } else {
      t5 = $[18];
    }
    const contentClassNames = t5.join(" ");
    let t6;
    if ($[19] !== isCollapsed) {
      t6 = () => setIsCollapsed(!isCollapsed);
      $[19] = isCollapsed;
      $[20] = t6;
    } else {
      t6 = $[20];
    }
    t3 = _jsxs("div", {
      className: baseClass,
      children: [_jsxs(FieldDiffLabel, {
        children: [_jsx("button", {
          "aria-label": isCollapsed ? "Expand" : "Collapse",
          className: `${baseClass}__toggle-button`,
          onClick: t6,
          type: "button",
          children: _jsx(ChevronIcon, {
            direction: isCollapsed ? "right" : "down"
          })
        }), _jsx("span", {
          className: `${baseClass}__label`,
          children: label
        }), changeCount > 0 && _jsx(Pill, {
          className: `${baseClass}__field-change-count`,
          pillStyle: "light-gray",
          size: "small",
          children: t("version:changedFieldsCount", {
            count: changeCount
          })
        })]
      }), _jsx("div", {
        className: contentClassNames,
        children
      })]
    });
    $[0] = children;
    $[1] = comparison;
    $[2] = config;
    $[3] = field;
    $[4] = fields;
    $[5] = isCollapsed;
    $[6] = isIterable;
    $[7] = label;
    $[8] = locales;
    $[9] = parentIsLocalized;
    $[10] = t;
    $[11] = version;
    $[12] = t3;
  } else {
    t3 = $[12];
  }
  return t3;
};
//# sourceMappingURL=index.js.map