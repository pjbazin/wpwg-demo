using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json.Linq;
using System.Threading;

public partial class Pay : System.Web.UI.Page
{
  protected void Page_Load(object sender, EventArgs e)
  {
    Debug.WriteLine("Got Payment Request");

    // Read POST content
    int lenContent = Request.ContentLength;
    byte[] streamData = new byte[lenContent];
    int lenStream = Request.InputStream.Read(streamData, 0, lenContent);

    // Convert request to JSON object
    JObject jPR = JObject.Parse(Encoding.UTF8.GetString(Convert.FromBase64String(Encoding.UTF8.GetString(streamData))));
    Debug.WriteLine(jPR.ToString());
    /* Object = {
      "methodData": [
        {
          "supportedMethods": [
            "https://whitecollar.emvpass.net/pay",
            "https://tommypay.no/pay",
            "https://americanexpress.com/express-checkout",
            "https://rsolomakhin.github.io/bobpay"
          ]
        }
      ],
      "modifiers": [],
      "optionId": "FR7610107002870052900607748",
      "origin": "",
      "total": {
        "amount": {
          "currency": "EUR",
          "currencySystem": "urn:iso:std:iso:4217",
          "value": "0.01"
        },
        "label": "Vegg-1487252628265",
        "pending": false
      }
    } */

    // TODO: Process the Request
    Thread.Sleep(3000);

    // Build the answer
    var payResponseDetails = new {
      reference = jPR["total"]["label"],
      accepted = true,
      canceled = false
    };

    // Convert answer to Base64 Text
    string responseMessage = Convert.ToBase64String(Encoding.UTF8.GetBytes(JObject.FromObject(payResponseDetails).ToString()));
    Response.Write(responseMessage);
  }
}