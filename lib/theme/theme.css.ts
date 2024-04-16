import { createGlobalTheme } from "@vanilla-extract/css";
import { colorToken } from "./color";
import { typography } from "./typography";

export const vars = createGlobalTheme(":root", {
    color: { ...colorToken },
    typography: {
        ...typography,
    },
});
