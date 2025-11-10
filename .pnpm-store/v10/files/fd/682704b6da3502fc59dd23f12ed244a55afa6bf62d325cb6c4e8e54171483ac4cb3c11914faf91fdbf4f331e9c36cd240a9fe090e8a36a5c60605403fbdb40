'use client';

import { c as _c } from "react/compiler-runtime";
import { getTranslation } from '@payloadcms/translations';
import { useConfig, useLocale, useStepNav, useTranslation } from '@payloadcms/ui';
import { formatDate } from '@payloadcms/ui/shared';
import { fieldAffectsData, formatAdminURL } from 'payload/shared';
import { useEffect } from 'react';
export const SetStepNav = t0 => {
  const $ = _c(14);
  const {
    id,
    collectionConfig,
    collectionSlug,
    doc,
    fields,
    globalConfig,
    globalSlug
  } = t0;
  const {
    config
  } = useConfig();
  const {
    setStepNav
  } = useStepNav();
  const {
    i18n,
    t
  } = useTranslation();
  const locale = useLocale();
  let t1;
  let t2;
  if ($[0] !== collectionConfig || $[1] !== collectionSlug || $[2] !== config || $[3] !== doc || $[4] !== fields || $[5] !== globalConfig || $[6] !== globalSlug || $[7] !== i18n || $[8] !== id || $[9] !== locale || $[10] !== setStepNav || $[11] !== t) {
    t1 = () => {
      let nav = [];
      const {
        admin: t3,
        routes: t4
      } = config;
      const {
        dateFormat
      } = t3;
      const {
        admin: adminRoute
      } = t4;
      if (collectionSlug && collectionConfig) {
        let docLabel = "";
        const useAsTitle = collectionConfig?.admin?.useAsTitle || "id";
        const pluralLabel = collectionConfig?.labels?.plural;
        const formattedDoc = doc.version ? doc.version : doc;
        if (formattedDoc) {
          if (useAsTitle !== "id") {
            const titleField = fields.find(f => {
              const fieldName = "name" in f ? f.name : undefined;
              return Boolean(fieldAffectsData(f) && fieldName === useAsTitle);
            });
            if (titleField && formattedDoc[useAsTitle]) {
              if ("localized" in titleField && titleField.localized) {
                docLabel = formattedDoc[useAsTitle]?.[locale.code];
              } else {
                docLabel = formattedDoc[useAsTitle];
              }
            } else {
              docLabel = `[${t("general:untitled")}]`;
            }
          } else {
            docLabel = doc.id;
          }
        }
        nav = [{
          label: getTranslation(pluralLabel, i18n),
          url: formatAdminURL({
            adminRoute,
            path: `/collections/${collectionSlug}`
          })
        }, {
          label: docLabel,
          url: formatAdminURL({
            adminRoute,
            path: `/collections/${collectionSlug}/${id}`
          })
        }, {
          label: "Versions",
          url: formatAdminURL({
            adminRoute,
            path: `/collections/${collectionSlug}/${id}/versions`
          })
        }, {
          label: doc?.createdAt ? formatDate({
            date: doc.createdAt,
            i18n,
            pattern: dateFormat
          }) : ""
        }];
      }
      if (globalSlug && globalConfig) {
        nav = [{
          label: globalConfig.label,
          url: formatAdminURL({
            adminRoute,
            path: `/globals/${globalConfig.slug}`
          })
        }, {
          label: "Versions",
          url: formatAdminURL({
            adminRoute,
            path: `/globals/${globalConfig.slug}/versions`
          })
        }, {
          label: doc?.createdAt ? formatDate({
            date: doc.createdAt,
            i18n,
            pattern: dateFormat
          }) : ""
        }];
      }
      setStepNav(nav);
    };
    t2 = [config, setStepNav, collectionSlug, globalSlug, doc, id, locale, t, i18n, collectionConfig, fields, globalConfig];
    $[0] = collectionConfig;
    $[1] = collectionSlug;
    $[2] = config;
    $[3] = doc;
    $[4] = fields;
    $[5] = globalConfig;
    $[6] = globalSlug;
    $[7] = i18n;
    $[8] = id;
    $[9] = locale;
    $[10] = setStepNav;
    $[11] = t;
    $[12] = t1;
    $[13] = t2;
  } else {
    t1 = $[12];
    t2 = $[13];
  }
  useEffect(t1, t2);
  return null;
};
//# sourceMappingURL=SetStepNav.js.map