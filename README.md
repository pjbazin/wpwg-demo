# Payment Request and Apps Demo (2017/02/24)

## Version Status (0.8.02xx)
This code to demonstrate the features of the W3C payment menthods management.
Created using Visual Studio and the dotnetcore framework.
And also a video recording for a quick tour : [Video](MoreInfo/VeggieShop%2BWhiteCollar-0.8.mp4)
- The demo shop : VeggieShopping
- The Credit Transfer payment app (currently a basic framework to be completed)
To be browsed using a compliant client ([i.e. Tommy Thorsen one](https://github.com/tommythorsen/webpayments-demo/tree/gh-pages/clients))

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
- Fake Payment
- Pinpaid card-present payment to be implemented

## History
- Based on [Tommy Thorsen demo](https://github.com/tommythorsen/webpayments-demo) and [Rouslan Solomakhin Payment request tutorial](https://github.com/rsolomakhin)
