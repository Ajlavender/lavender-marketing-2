import { useEffect } from "react";
import { spell, useLocale } from "@/lib/locale";

/**
 * On the US site, rewrites Canadian spellings in visible page text
 * (e.g. "summarised" -> "summarized"). Runs after hydration and on DOM changes.
 */
export function UsSpelling() {
  const locale = useLocale();
  useEffect(() => {
    if (locale !== "en-us") return;
    const fix = (root: Node) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let n: Node | null;
      while ((n = walker.nextNode())) {
        const p = n.parentElement;
        if (p && /^(SCRIPT|STYLE|TEXTAREA|INPUT)$/.test(p.tagName)) continue;
        const t = n.nodeValue ?? "";
        const u = spell(t, "en-us");
        if (u !== t) n.nodeValue = u;
      }
    };
    fix(document.body);
    const mo = new MutationObserver((muts) => {
      for (const m of muts) {
        if (m.type === "characterData") fix(m.target);
        m.addedNodes.forEach((a) => fix(a));
      }
    });
    mo.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => mo.disconnect();
  }, [locale]);
  return null;
}
