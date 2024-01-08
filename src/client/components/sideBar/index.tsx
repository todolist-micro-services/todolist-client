import React, { useRef, useState } from "react";

import { retrieveData, storeData } from "@utils/storeData.ts";
import { SideBarContent } from "./sideBarContent";
import { Props } from "./types.ts";
import styles from "./styles.module.scss";

function SideBar({ children }: Props) {
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const saveSideBarWidth = retrieveData("sideBarWidth");
  const [sidebarWidth, setSidebarWidth] = useState(
    saveSideBarWidth ? +saveSideBarWidth : 268
  );

  const startResizing = React.useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = React.useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = React.useCallback(
    (mouseMoveEvent) => {
      if (isResizing) {
        setSidebarWidth(
          mouseMoveEvent.clientX -
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            sidebarRef.current.getBoundingClientRect().left
        );
      }
    },
    [isResizing]
  );

  React.useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  React.useEffect(() => {
    storeData("sideBarWidth", sidebarWidth.toString());
  }, [sidebarWidth]);

  return (
    <div className={styles.sideBar}>
      <div
        ref={sidebarRef}
        className={styles.appSidebar}
        style={{ width: sidebarWidth }}
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className={styles.appSidebarContent}>
          <SideBarContent />
        </div>
        <div className={styles.appSidebarResizer} onMouseDown={startResizing} />
      </div>
      <div className={styles.appFrame}>{children}</div>
    </div>
  );
}

export { SideBar };
