'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ReactSelect, useLocale, useTranslation } from '@payloadcms/ui';
import React from 'react';
const baseClass = 'select-version-locales';
export const SelectLocales = t0 => {
  const $ = _c(8);
  const {
    onChange,
    options,
    value
  } = t0;
  const {
    t
  } = useTranslation();
  const {
    code
  } = useLocale();
  let t1;
  if ($[0] !== code) {
    t1 = items => items.map(item => {
      if (typeof item.label === "string") {
        return item;
      }
      if (typeof item.label !== "string" && item.label[code]) {
        return {
          label: item.label[code],
          value: item.value
        };
      }
    });
    $[0] = code;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const format = t1;
  let t2;
  if ($[2] !== format || $[3] !== onChange || $[4] !== options || $[5] !== t || $[6] !== value) {
    t2 = _jsxs("div", {
      className: baseClass,
      children: [_jsx("div", {
        className: `${baseClass}__label`,
        children: t("version:showLocales")
      }), _jsx(ReactSelect, {
        isMulti: true,
        onChange,
        options: format(options),
        placeholder: t("version:selectLocales"),
        value: format(value)
      })]
    });
    $[2] = format;
    $[3] = onChange;
    $[4] = options;
    $[5] = t;
    $[6] = value;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
};
//# sourceMappingURL=index.js.map