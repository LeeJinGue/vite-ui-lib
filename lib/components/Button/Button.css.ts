import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { vars } from "@theme";

export const button = recipe({
    base: {
        padding: "2px",
        ...vars.typography.Display_1,
    },
    variants: {
        size: {
            sm: {
                width: "50px",
            },
            md: {
                width: "100px",
            },
            lg: {
                width: "200px",
            },
        },
        full: {
            true: {
                width: "100%",
            },
        },
    },
    defaultVariants: {
        size: "md",
    },
});
export type ButtonVariants = RecipeVariants<typeof button>;

// import { recipe } from "@vanilla-extract/recipes";

// export const button = recipe({
//     base: {
//         border: "none",
//         backgroundColor: "black",
//         color: "white",
//         fontWeight: "bold",
//     },
//     variants: {
//         size: {
//             sm: {
//                 padding: "5px",
//             },
//             md: {
//                 padding: "10px",
//             },
//             lg: {
//                 padding: "15px",
//             },
//         },
//         color: {
//             black: {
//                 backgroundColor: "#000000",
//             },
//             white: {
//                 backgroundColor: "#FFFFFF",
//             },
//         },
//     },
// });
