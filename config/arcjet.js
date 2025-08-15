import { tokenBucket } from '@arcjet/node'
import {ARJECT_KEY} from './env.js' 

const aj = arcjet({
  key: ARCJET_KEY,
  Characteristics: ["ip.src"], 
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE", 
      allow: ["CATEGORY:SEARCH_ENGINE" ],
    }),
    // create a token bucket rate limit. other algorithma are supported.
    tokenBucket({
        mode: "LIVE",
        refillRate: 5,  //Refill 5 tokens per interval
        interval: 10,  //Refill every 10 seconds
        capacity: 10,  //Bucket capacity of 10 tokens
    }),
  ],
}),