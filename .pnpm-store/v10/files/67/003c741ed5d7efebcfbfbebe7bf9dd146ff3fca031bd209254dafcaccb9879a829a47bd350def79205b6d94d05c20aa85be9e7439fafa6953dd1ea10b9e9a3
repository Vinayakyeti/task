import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RenderServerComponent } from '@payloadcms/ui/elements/RenderServerComponent';
import React from 'react';
import { getCustomViews } from './getCustomViews.js';
import { getViewConfig } from './getViewConfig.js';
import { ShouldRenderTabs } from './ShouldRenderTabs.js';
import { DocumentTab } from './Tab/index.js';
import { tabs as defaultTabs } from './tabs/index.js';
const baseClass = 'doc-tabs';
export const DocumentTabs = props => {
  const {
    collectionConfig,
    globalConfig,
    i18n,
    payload,
    permissions
  } = props;
  const {
    config
  } = payload;
  const customViews = getCustomViews({
    collectionConfig,
    globalConfig
  });
  return /*#__PURE__*/_jsx(ShouldRenderTabs, {
    children: /*#__PURE__*/_jsx("div", {
      className: baseClass,
      children: /*#__PURE__*/_jsx("div", {
        className: `${baseClass}__tabs-container`,
        children: /*#__PURE__*/_jsxs("ul", {
          className: `${baseClass}__tabs`,
          children: [Object.entries(defaultTabs)?.sort(([, a], [, b]) => {
            if (a.order === undefined && b.order === undefined) {
              return 0;
            } else if (a.order === undefined) {
              return 1;
            } else if (b.order === undefined) {
              return -1;
            }
            return a.order - b.order;
          })?.map(([name, tab], index) => {
            const viewConfig = getViewConfig({
              name,
              collectionConfig,
              globalConfig
            });
            const tabFromConfig = viewConfig && 'tab' in viewConfig ? viewConfig.tab : undefined;
            const {
              condition
            } = tabFromConfig || {};
            const meetsCondition = !condition || condition && Boolean(condition({
              collectionConfig,
              config,
              globalConfig,
              permissions
            }));
            if (meetsCondition) {
              return /*#__PURE__*/_jsx(DocumentTab, {
                path: viewConfig && 'path' in viewConfig ? viewConfig.path : '',
                ...props,
                ...(tab || {}),
                ...(tabFromConfig || {})
              }, `tab-${index}`);
            }
            return null;
          }), customViews?.map((CustomView, index) => {
            if ('tab' in CustomView) {
              const {
                path,
                tab
              } = CustomView;
              if (tab.Component) {
                return RenderServerComponent({
                  clientProps: {
                    path
                  },
                  Component: tab.Component,
                  importMap: payload.importMap,
                  key: `tab-custom-${index}`,
                  serverProps: {
                    collectionConfig,
                    globalConfig,
                    i18n,
                    payload,
                    permissions
                  }
                });
              }
              return /*#__PURE__*/_jsx(DocumentTab, {
                path: path,
                ...props,
                ...tab
              }, `tab-custom-${index}`);
            }
            return null;
          })]
        })
      })
    })
  });
};
//# sourceMappingURL=index.js.map