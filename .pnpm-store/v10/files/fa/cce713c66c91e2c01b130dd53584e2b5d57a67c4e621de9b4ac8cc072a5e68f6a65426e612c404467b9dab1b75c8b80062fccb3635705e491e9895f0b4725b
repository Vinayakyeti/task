'use client';

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fieldBaseClass, Pill, ReactSelect, useConfig, useTranslation } from '@payloadcms/ui';
import { formatDate } from '@payloadcms/ui/shared';
import { stringify } from 'qs-esm';
import React, { useCallback, useEffect, useState } from 'react';
import { renderPill } from '../../Versions/cells/AutosaveCell/index.js';
const baseClass = 'compare-version';
const maxResultsPerRequest = 10;
const baseOptions = [];
export const SelectComparison = props => {
  const {
    baseURL,
    draftsEnabled,
    latestDraftVersion,
    latestPublishedVersion,
    onChange,
    parentID,
    value,
    versionID
  } = props;
  const {
    config: {
      admin: {
        dateFormat
      },
      localization
    }
  } = useConfig();
  const [options, setOptions] = useState(baseOptions);
  const [lastLoadedPage, setLastLoadedPage] = useState(1);
  const [errorLoading, setErrorLoading] = useState('');
  const {
    i18n,
    t
  } = useTranslation();
  const loadedAllOptionsRef = React.useRef(false);
  const getResults = useCallback(async ({
    lastLoadedPage: lastLoadedPageArg
  }) => {
    if (loadedAllOptionsRef.current) {
      return;
    }
    const query = {
      depth: 0,
      limit: maxResultsPerRequest,
      page: lastLoadedPageArg,
      where: {
        and: [{
          id: {
            not_equals: versionID
          }
        }]
      }
    };
    if (parentID) {
      query.where.and.push({
        parent: {
          equals: parentID
        }
      });
    }
    if (localization && draftsEnabled) {
      query.where.and.push({
        snapshot: {
          not_equals: true
        }
      });
    }
    const search = stringify(query);
    const response = await fetch(`${baseURL}?${search}`, {
      credentials: 'include',
      headers: {
        'Accept-Language': i18n.language
      }
    });
    if (response.ok) {
      const data = await response.json();
      if (data.docs.length > 0) {
        const versionInfo = {
          draft: {
            currentLabel: t('version:currentDraft'),
            latestVersion: latestDraftVersion,
            pillStyle: undefined,
            previousLabel: t('version:draft')
          },
          published: {
            currentLabel: t('version:currentPublishedVersion'),
            latestVersion: latestPublishedVersion,
            pillStyle: 'success',
            previousLabel: t('version:previouslyPublished')
          }
        };
        const additionalOptions = data.docs.map(doc => {
          const status = doc.version._status;
          let publishedLocalePill = null;
          const publishedLocale = doc.publishedLocale || undefined;
          const {
            currentLabel,
            latestVersion,
            pillStyle,
            previousLabel
          } = versionInfo[status] || {};
          if (localization && localization?.locales && publishedLocale) {
            const localeCode = Array.isArray(publishedLocale) ? publishedLocale[0] : publishedLocale;
            const locale = localization.locales.find(loc => loc.code === localeCode);
            const formattedLabel = locale?.label?.[i18n?.language] || locale?.label;
            if (formattedLabel) {
              publishedLocalePill = /*#__PURE__*/_jsx(Pill, {
                children: formattedLabel
              });
            }
          }
          return {
            label: /*#__PURE__*/_jsxs("div", {
              children: [formatDate({
                date: doc.updatedAt,
                i18n,
                pattern: dateFormat
              }), "  ", renderPill(doc, latestVersion, currentLabel, previousLabel, pillStyle), publishedLocalePill]
            }),
            value: doc.id
          };
        });
        setOptions(existingOptions => [...existingOptions, ...additionalOptions]);
        if (!data.hasNextPage) {
          loadedAllOptionsRef.current = true;
        }
        setLastLoadedPage(data.page);
      }
    } else {
      setErrorLoading(t('error:unspecific'));
    }
  }, [dateFormat, baseURL, parentID, versionID, t, i18n, latestDraftVersion, latestPublishedVersion]);
  useEffect(() => {
    if (!i18n.dateFNS) {
      // If dateFNS is not loaded, we can't format the date in getResults
      return;
    }
    void getResults({
      lastLoadedPage: 1
    });
  }, [getResults, i18n.dateFNS]);
  const filteredOptions = options.filter((option, index, self) => self.findIndex(t_0 => t_0.value === option.value) === index);
  useEffect(() => {
    if (filteredOptions.length > 0 && !value) {
      onChange(filteredOptions[0]);
    }
  }, [filteredOptions, value, onChange]);
  return /*#__PURE__*/_jsxs("div", {
    className: [fieldBaseClass, baseClass, errorLoading && 'error-loading'].filter(Boolean).join(' '),
    children: [/*#__PURE__*/_jsx("div", {
      className: `${baseClass}__label`,
      children: t('version:compareVersion')
    }), !errorLoading && /*#__PURE__*/_jsx(ReactSelect, {
      isClearable: false,
      isSearchable: false,
      onChange: onChange,
      onMenuScrollToBottom: () => {
        void getResults({
          lastLoadedPage: lastLoadedPage + 1
        });
      },
      options: filteredOptions,
      placeholder: t('version:selectVersionToCompare'),
      value: value
    }), errorLoading && /*#__PURE__*/_jsx("div", {
      className: `${baseClass}__error-loading`,
      children: errorLoading
    })]
  });
};
//# sourceMappingURL=index.js.map