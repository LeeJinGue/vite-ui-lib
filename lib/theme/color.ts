export const palette = {
    common_0: "#ffffff",
    common_1000: "#000000",

    neutral_5: "#fbfbfc",
    neutral_10: "#f7f7f8",
    neutral_15: "#f4f4f5",
    neutral_25: "#eaebec",
    neutral_50: "#dbdcdf",
    neutral_100: "#c2c4c8",
    neutral_200: "#aeb0b6",
    neutral_300: "#989ba2",
    neutral_400: "#878a93",
    neutral_500: "#878a53",
    neutral_600: "#5a5c63",
    neutral_700: "#46474c",
    neutral_800: "#37383c",
    neutral_805: "#323438",
    neutral_810: "#2e2f31",
    neutral_815: "#29292c",
    neutral_825: "#212225",
    neutral_850: "#1b1c1e",
    neutral_900: "#171719",
    neutral_925: "#141415",
    neutral_950: "#0f0f10",

    blue_25: "#f0f4ff",
    blue_50: "#e0eaff",
    blue_100: "#ccdbff",
    blue_200: "#b2caff",
    blue_300: "#8fb1ff",
    blue_400: "#759fff",
    blue_450: "#6191ff",
    blue_500: "#4a81ff",
    blue_550: "#4278f5",
    blue_600: "#3467da",
    blue_700: "#244ca8",
    blue_800: "#193576",
    blue_900: "#122654",
    blue_950: "#0b1732",

    red_25: "#fffafa",
    red_50: "#feecec",
    red_100: "#fed5d5",
    red_200: "#ffb5b5",
    red_300: "#ff8c8c",
    red_400: "#ff6363",
    red_500: "#ff4242",
    red_600: "#e52222",
    red_700: "#b20c0c",
    red_800: "#750404",
    red_900: "#3b0101",

    orange_25: "#fffcf7",
    orange_50: "#fef4e6",
    orange_100: "#fee6c6",
    orange_200: "#ffd49c",
    orange_300: "#ffc06e",
    orange_400: "#ffa938",
    orange_500: "#ff9200",
    orange_600: "#d47800",
    orange_700: "#9c5800",
    orange_800: "#663a00",
    orange_900: "#361e00",

    green_25: "#f3fcf8",
    green_50: "#e3f8ee",
    green_100: "#ccf2e0",
    green_200: "#99e5c1",
    green_300: "#66d9a2",
    green_400: "#33cc82",
    green_500: "#00bf63",
    green_600: "#00994f",
    green_700: "#00733c",
    green_800: "#004c28",
    green_900: "#002614",

    light_blue_25: "#f7fdff",
    light_blue_50: "#e5f6fe",
    light_blue_100: "#c4ecfe",
    light_blue_200: "#a1e1ff",
    light_blue_300: "#70d2ff",
    light_blue_400: "#3dc2ff",
    light_blue_500: "#00aeff",
    light_blue_600: "#008dcf",
    light_blue_700: "#006796",
    light_blue_800: "#004261",
    light_blue_900: "#002130",

    pink_25: "#fef6f9",
    pink_50: "#feecf3",
    pink_100: "#fdddea",
    pink_200: "#fbbad5",
    pink_300: "#f998c1",
    pink_400: "#f775ac",
    pink_500: "#f55397",
    pink_600: "#d63d7e",
    pink_700: "#93325b",
    pink_800: "#62213c",
    pink_900: "#31111e",

    violet_25: "#fbfaff",
    violet_50: "#f0ecfe",
    violet_100: "#dbd3fe",
    violet_200: "#c0b0ff",
    violet_300: "#9e86fc",
    violet_400: "#7d5ef7",
    violet_500: "#6541f2",
    violet_600: "#4f2bde",
    violet_700: "#4121be",
    violet_800: "#281187",
    violet_900: "#11024d",
};
export const semantic = {
    primary_normal: palette.blue_500,
    primary_strong: palette.blue_550,
    primary_heavy: palette.blue_600,

    label_normal: palette.neutral_900,
    label_strong: palette.common_1000,
    label_neutral: palette.neutral_700,
    label_alternativ: palette.neutral_500,
    label_assistive: palette.neutral_100,
    label_disable: palette.neutral_50,

    background_normal: palette.common_0,
    background_alternativ: palette.neutral_10,
    // elevated: {
    //     normal: palette.common_0,
    //     alternativ: palette.neutral_10,
    // },

    line_normal: palette.neutral_50,
    line_neutral: palette.neutral_25,
    line_alternativ: palette.neutral_15,
    line_strong: palette.neutral_100,

    fill_normal: palette.neutral_15,
    fill_neutral: palette.neutral_10,
    fill_alternativ: palette.neutral_5,
    fill_disable: palette.neutral_25,
    fill_dimmer: "#17171980",

    status_positive: palette.green_500,
    status_cautionary: palette.orange_500,
    status_negative: palette.red_500,

    accent_light_blue: palette.light_blue_500,
    accent_violet: palette.violet_500,
    accent_pink: palette.pink_500,

    inverse_primary: palette.blue_450,
    inverse_background: palette.neutral_850,
    inverse_label: palette.neutral_10,

    static_white: palette.common_0,
    static_black: palette.common_1000,
};
export const colorToken = {
    ...palette,
    ...semantic,
};
export type ColorType = typeof colorToken;
