/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import React from "react";
import catalogCategoryRegistryInjectable from "../../../common/catalog/category-registry.injectable";
import { WeblinkAddCommand } from "../../components/catalog-entities/weblink-add-command";
import commandOverlayInjectable from "../../components/command-palette/command-overlay.injectable";
import { beforeFrameStartsInjectionToken } from "../tokens";

const setupWeblickContextMenuOpenInjectable = getInjectable({
  id: "setup-weblick-context-menu-open",
  instantiate: (di) => ({
    id: "setup-weblick-context-menu-open",
    run: () => {
      const catalogCategoryRegistry = di.inject(catalogCategoryRegistryInjectable);
      const commandOverlay = di.inject(commandOverlayInjectable);

      catalogCategoryRegistry
        .getForGroupKind("entity.k8slens.dev", "WebLink")
        ?.on("catalogAddMenu", ctx => {
          ctx.menuItems.push({
            title: "Add web link",
            icon: "public",
            onClick: () => commandOverlay.open(<WeblinkAddCommand />),
          });
        });
    },
  }),
  injectionToken: beforeFrameStartsInjectionToken,
});

export default setupWeblickContextMenuOpenInjectable;
