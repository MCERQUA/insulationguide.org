"use client";

import { useEffect } from "react";

/** AEO traffic-source capture — hidden fields, invisible, no content/design change. */
export function useAEOCapture() {
  useEffect(() => {
    try {
      const p = new URLSearchParams(window.location.search);
      let src = p.get("utm_source") || p.get("ref") || "";
      if (!src && document.referrer) {
        try {
          src = new URL(document.referrer).hostname;
        } catch {
          src = document.referrer;
        }
      }
      if (!src) src = "direct";
      const s = document.getElementById("__aeo_src") as HTMLInputElement | null;
      if (s) s.value = src;
      const u = document.getElementById("__aeo_url") as HTMLInputElement | null;
      if (u) u.value = window.location.href;
    } catch {
      // no-op
    }
  }, []);
}

export function AEOFields() {
  useAEOCapture();
  return (
    <>
      <input type="hidden" name="traffic_source" id="__aeo_src" value="" />
      <input type="hidden" name="landing_url" id="__aeo_url" value="" />
    </>
  );
}
