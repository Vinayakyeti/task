'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getTranslation } from '@payloadcms/translations';
import { useTranslation } from '@payloadcms/ui';
import React from 'react';
import { useSelectedLocales } from '../../../Default/SelectedLocalesContext.js';
import { DiffCollapser } from '../../DiffCollapser/index.js';
import { RenderVersionFieldsToDiff } from '../../RenderVersionFieldsToDiff.js';
const baseClass = 'tabs-diff';
export const Tabs = props => {
  const $ = _c(13);
  const {
    baseVersionField,
    comparisonValue,
    field,
    versionValue
  } = props;
  const {
    selectedLocales
  } = useSelectedLocales();
  let t0;
  if ($[0] !== baseVersionField.tabs || $[1] !== comparisonValue || $[2] !== field || $[3] !== props || $[4] !== selectedLocales || $[5] !== versionValue) {
    let t1;
    if ($[7] !== comparisonValue || $[8] !== field || $[9] !== props || $[10] !== selectedLocales || $[11] !== versionValue) {
      t1 = (tab, i) => {
        if (!tab?.fields?.length) {
          return null;
        }
        const fieldTab = field.tabs?.[i];
        return _jsx("div", {
          className: `${baseClass}__tab`,
          children: (() => {
            if ("name" in fieldTab && selectedLocales && fieldTab.localized) {
              return selectedLocales.map((locale, index) => {
                const localizedTabProps = {
                  ...props,
                  comparison: comparisonValue?.[tab.name]?.[locale],
                  version: versionValue?.[tab.name]?.[locale]
                };
                return _jsx("div", {
                  className: `${baseClass}__tab-locale`,
                  children: _jsx("div", {
                    className: `${baseClass}__tab-locale-value`,
                    children: _jsx(Tab, {
                      ...localizedTabProps,
                      fieldTab,
                      locale,
                      tab
                    }, locale)
                  })
                }, [locale, index].join("-"));
              });
            } else {
              if ("name" in tab && tab.name) {
                const namedTabProps = {
                  ...props,
                  comparison: comparisonValue?.[tab.name],
                  version: versionValue?.[tab.name]
                };
                return _jsx(Tab, {
                  fieldTab,
                  ...namedTabProps,
                  tab
                }, i);
              } else {
                return _jsx(Tab, {
                  fieldTab,
                  ...props,
                  tab
                }, i);
              }
            }
          })()
        }, i);
      };
      $[7] = comparisonValue;
      $[8] = field;
      $[9] = props;
      $[10] = selectedLocales;
      $[11] = versionValue;
      $[12] = t1;
    } else {
      t1 = $[12];
    }
    t0 = _jsx("div", {
      className: baseClass,
      children: baseVersionField.tabs.map(t1)
    });
    $[0] = baseVersionField.tabs;
    $[1] = comparisonValue;
    $[2] = field;
    $[3] = props;
    $[4] = selectedLocales;
    $[5] = versionValue;
    $[6] = t0;
  } else {
    t0 = $[6];
  }
  return t0;
};
const Tab = t0 => {
  const $ = _c(12);
  const {
    comparisonValue,
    fieldTab,
    locale,
    parentIsLocalized,
    tab,
    versionValue
  } = t0;
  const {
    i18n
  } = useTranslation();
  const {
    selectedLocales
  } = useSelectedLocales();
  if (!tab.fields?.length) {
    return null;
  }
  let t1;
  if ($[0] !== i18n || $[1] !== locale || $[2] !== tab) {
    t1 = "label" in tab && tab.label && typeof tab.label !== "function" && _jsxs("span", {
      children: [locale && _jsx("span", {
        className: `${baseClass}__locale-label`,
        children: locale
      }), getTranslation(tab.label, i18n)]
    });
    $[0] = i18n;
    $[1] = locale;
    $[2] = tab;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  const t2 = parentIsLocalized || fieldTab.localized;
  let t3;
  if ($[4] !== comparisonValue || $[5] !== fieldTab.fields || $[6] !== selectedLocales || $[7] !== t1 || $[8] !== t2 || $[9] !== tab.fields || $[10] !== versionValue) {
    t3 = _jsx(DiffCollapser, {
      comparison: comparisonValue,
      fields: fieldTab.fields,
      label: t1,
      locales: selectedLocales,
      parentIsLocalized: t2,
      version: versionValue,
      children: _jsx(RenderVersionFieldsToDiff, {
        versionFields: tab.fields
      })
    });
    $[4] = comparisonValue;
    $[5] = fieldTab.fields;
    $[6] = selectedLocales;
    $[7] = t1;
    $[8] = t2;
    $[9] = tab.fields;
    $[10] = versionValue;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  return t3;
};
//# sourceMappingURL=index.js.map