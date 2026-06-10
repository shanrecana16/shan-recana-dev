import { useState } from "react";
import { light, dark } from "../theme/tokens";

export function useTheme() {
  const [isDark, setIsDark] = useState(true);
  const t = isDark ? dark : light;
  const toggle = () => setIsDark((prev) => !prev);
  return { isDark, t, toggle };
}
