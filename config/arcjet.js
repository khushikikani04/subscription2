// import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
// import { ARCJET_KEY } from './env.js'

// const aj = arcjet({
//   key: ARCJET_KEY,
//   characteristics: ["ip.src"],
//   rules: [
//     shield({ mode: "LIVE" }),
//     detectBot({
//       mode: "LIVE",
//       allow: [ "CATEGORY:SEARCH_ENGINE" ],
//     }),
//     tokenBucket({
//       mode: "LIVE",
//       refillRate: 5, // Refill 5 tokens per interval
//       interval: 10, // Refill every 10 seconds
//       capacity: 10, // Bucket capacity of 10 tokens
//     }),
//   ],
// });

// export default aj;


// // config/arcjet.js
// import arcjet from "@arcjet/node";

// const aj = arcjet({
//     key: process.env.ARCJET_KEY, // from .env
//     rules: [
//         {
//             type: "bot",
//             mode: "report" // 👈 only reports, doesn't block
//         }
//     ]
// });

// export default aj;



// import arcjet, { protect } from "@arcjet/node";

// const aj = arcjet({
//   key: process.env.ARCJET_KEY,
//   rules: [
//     protect.Bot({
//       // mode: "DRY_RUN",  // या "LIVE"
//       allow: ["CATEGORY:SEARCH_ENGINE"], 
//     }),
//   ],
// });

// export default aj;

import arcjet, { detectBot } from "@arcjet/node";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    detectBot({
      mode: "DRY_RUN",  // or "DRY_RUN" if you're still testing
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),
  ],
});

export default aj;
