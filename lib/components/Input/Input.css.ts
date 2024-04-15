import { style } from "@vanilla-extract/css";

export const input = style({
    border: "1px solid black",
    margin: 10,
});

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
