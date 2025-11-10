'use client';

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getTranslation } from '@payloadcms/translations';
import { Button, ConfirmationModal, PopupList, toast, useConfig, useModal, useRouteTransition, useTranslation } from '@payloadcms/ui';
import { requests } from '@payloadcms/ui/shared';
import { useRouter } from 'next/navigation.js';
import { formatAdminURL } from 'payload/shared';
import React, { Fragment, useCallback, useState } from 'react';
const baseClass = 'restore-version';
const modalSlug = 'restore-version';
const Restore = ({
  className,
  collectionSlug,
  globalSlug,
  label,
  originalDocID,
  status,
  versionDate,
  versionID
}) => {
  const {
    config: {
      routes: {
        admin: adminRoute,
        api: apiRoute
      },
      serverURL
    },
    getEntityConfig
  } = useConfig();
  const collectionConfig = getEntityConfig({
    collectionSlug
  });
  const {
    toggleModal
  } = useModal();
  const router = useRouter();
  const {
    i18n,
    t
  } = useTranslation();
  const [draft, setDraft] = useState(false);
  const {
    startRouteTransition
  } = useRouteTransition();
  const restoreMessage = t('version:aboutToRestoreGlobal', {
    label: getTranslation(label, i18n),
    versionDate
  });
  let fetchURL = `${serverURL}${apiRoute}`;
  let redirectURL;
  const canRestoreAsDraft = status !== 'draft' && collectionConfig?.versions?.drafts;
  if (collectionSlug) {
    fetchURL = `${fetchURL}/${collectionSlug}/versions/${versionID}?draft=${draft}`;
    redirectURL = formatAdminURL({
      adminRoute,
      path: `/collections/${collectionSlug}/${originalDocID}`
    });
  }
  if (globalSlug) {
    fetchURL = `${fetchURL}/globals/${globalSlug}/versions/${versionID}?draft=${draft}`;
    redirectURL = formatAdminURL({
      adminRoute,
      path: `/globals/${globalSlug}`
    });
  }
  const handleRestore = useCallback(async () => {
    const res = await requests.post(fetchURL, {
      headers: {
        'Accept-Language': i18n.language
      }
    });
    if (res.status === 200) {
      const json = await res.json();
      toast.success(json.message);
      return startRouteTransition(() => router.push(redirectURL));
    } else {
      toast.error(t('version:problemRestoringVersion'));
    }
  }, [fetchURL, redirectURL, t, i18n, router, startRouteTransition]);
  return /*#__PURE__*/_jsxs(Fragment, {
    children: [/*#__PURE__*/_jsx("div", {
      className: [baseClass, className].filter(Boolean).join(' '),
      children: /*#__PURE__*/_jsx(Button, {
        buttonStyle: "pill",
        className: [canRestoreAsDraft && `${baseClass}__button`].filter(Boolean).join(' '),
        onClick: () => toggleModal(modalSlug),
        size: "small",
        SubMenuPopupContent: canRestoreAsDraft ? () => /*#__PURE__*/_jsx(PopupList.ButtonGroup, {
          children: /*#__PURE__*/_jsx(PopupList.Button, {
            onClick: () => [setDraft(true), toggleModal(modalSlug)],
            children: t('version:restoreAsDraft')
          })
        }) : null,
        children: t('version:restoreThisVersion')
      })
    }), /*#__PURE__*/_jsx(ConfirmationModal, {
      body: restoreMessage,
      confirmingLabel: t('version:restoring'),
      heading: t('version:confirmVersionRestoration'),
      modalSlug: modalSlug,
      onConfirm: handleRestore
    })]
  });
};
export default Restore;
//# sourceMappingURL=index.js.map