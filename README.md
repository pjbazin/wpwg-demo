# Payment Request and Apps Demo (2017/02/24)

## Version Status (0.8.02xx)
This code to demonstrate the features of the W3C payment methods management.

Created using Visual Studio and the dotnetcore framework.
- The demo shop : [VeggieShopping](VeggieShop)
- The Credit Transfer payment app : [WhiteCollar](WhiteCollar)

Look at the video recording for a quick tour ot the user experience: [Video](MoreInfo/VeggieShop%2BWhiteCollar-0.8.mp4)

To be browsed using a compliant client ([i.e. Tommy's Chromium](https://github.com/tommythorsen/webpayments-demo/tree/gh-pages/clients))

## Current Features
-	Handles multiple payment methods:
  *	Basic-card payment.
  *	Web App payment (mine and tommy’s)
-	Rendering UI for payment confirmation or cancelation
-	Use of the manifest to create explicit choice
-	Management of Payment request options by the merchant
-	Feedback of the shipping options to alter the amount
-	Use of the payment response details by the payment app
-	Use of the payment response details by the merchant (for display)
-	Registration and more around the service worker control

## Known Limitations
- Fake Payment (actual expected data flow with basic exchanges)
- Pinpaid card-present payment to be implemented

## History
- Based on [Tommy Thorsen's demo](https://github.com/tommythorsen/webpayments-demo) and [Rouslan Solomakhin's PaymentRequest tutorial](https://rsolomakhin.github.io/)
