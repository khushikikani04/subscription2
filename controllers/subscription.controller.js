// import Subscription from '../models/subscription.model.js'
// import { workflowClient } from '../config/upstash.js'
// // import { SERVER_URL } from '../config/env.js'

// export const createSubscription = async (req, res, next) => {
//   try {
//     const subscription = await Subscription.create({
//       ...req.body,
//       user: req.user._id,
//     });

//     const { workflowRunId } = await workflowClient.trigger({
//       url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
//       body: {
//         subscriptionId: subscription.id,
//       },
//       headers: {
//         'content-type': 'application/json',
//       },
//       retries: 0,
//     })

//     res.status(201).json({ success: true, data: { subscription, workflowRunId } });
//   } catch (e) {
//     next(e);
//   }
// }

// export const getUserSubscriptions = async (req, res, next) => {
//   try {
//     // Check if the user is the same as the one in the token
//     if(req.user.id !== req.params.id) {
//       const error = new Error('You are not the owner of this account');
//       error.status = 401;
//       throw error;
//     }

//     const subscriptions = await Subscription.find({ user: req.params.id });

//     res.status(200).json({ success: true, data: subscriptions });
//   } catch (e) {
//     next(e);
//   }
// }


// import Subscription from '../models/subscription.model.js'
// import { workflowClient } from '../config/upstash.js'
// import { SERVER_URL } from '../config/env.js'   // 👈 अब import हो गया

// export const createSubscription = async (req, res, next) => {
//   try {
//     const subscription = await Subscription.create({
//       ...req.body,
//       user: req.user._id,
//     });

//     const { workflowRunId } = await workflowClient.trigger({
//       url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
//       body: {
//         subscriptionId: subscription.id,
//       },
//       headers: {
//         'content-type': 'application/json',
//       },
//       retries: 0,
//     });

//     res.status(201).json({ success: true, data: { subscription, workflowRunId } });
//   } catch (e) {
//     next(e);
//   }
// };



// controllers/subscription.controller.js
import Subscription from "../models/subscription.model.js";  

// 🟢 Create new subscription
export const createSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.create(req.body);
    res.status(201).json({ success: true, data: subscription });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// 🟢 Get all subscriptions for logged-in user
export const getUserSubscriptions = async (req, res) => {
  try {
    // मान लो req.user.id में user का ID stored है (JWT से)
    const subscriptions = await Subscription.find({ user: req.user.id });

    res.status(200).json({
      success: true,
      count: subscriptions.length,
      data: subscriptions,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
