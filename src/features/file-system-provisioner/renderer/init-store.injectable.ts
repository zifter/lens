/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import fileSystemProvisionerStoreInjectable from "../../../extensions/extension-loader/file-system-provisioner-store/file-system-provisioner-store.injectable";
import { beforeFrameStartsInjectionToken } from "../../../renderer/before-frame-starts/tokens";

const initFileSystemProvisionerStoreInjectable = getInjectable({
  id: "init-file-system-provisioner-store",
  instantiate: (di) => ({
    id: "init-file-system-provisioner-store",
    run: () => {
      const store = di.inject(fileSystemProvisionerStoreInjectable);

      store.load();
    },
  }),
  injectionToken: beforeFrameStartsInjectionToken,
});

export default initFileSystemProvisionerStoreInjectable;
