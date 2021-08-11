const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.API_KEY_EMAIL);

const sendEmail = async (name, email) => {
  const msg = {
    to: email,
    from: "caarts.tech@gmail.com",
    subject: `Hi ${name}`,
    html: `<!DOCTYPE html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <title></title>

    <style type="text/css">
        table,
        td {
            color: #000000;
        }
        
        a {
            color: #0000ee;
            text-decoration: underline;
        }
        
        @media (max-width: 480px) {
            #u_content_text_11 .v-text-align {
                text-align: center !important;
            }
            #u_content_text_12 .v-text-align {
                text-align: center !important;
            }
            #u_content_button_5 .v-text-align {
                text-align: center !important;
            }
            #u_content_text_10 .v-text-align {
                text-align: center !important;
            }
            #u_content_text_9 .v-text-align {
                text-align: center !important;
            }
            #u_content_button_4 .v-text-align {
                text-align: center !important;
            }
            #u_content_text_6 .v-text-align {
                text-align: center !important;
            }
            #u_content_text_7 .v-text-align {
                text-align: center !important;
            }
            #u_content_button_3 .v-text-align {
                text-align: center !important;
            }
            #u_content_text_4 .v-text-align {
                text-align: center !important;
            }
            #u_content_text_5 .v-text-align {
                text-align: center !important;
            }
            #u_content_button_2 .v-text-align {
                text-align: center !important;
            }
            #u_content_text_2 .v-text-align {
                text-align: center !important;
            }
            #u_content_text_3 .v-text-align {
                text-align: center !important;
            }
            #u_content_button_1 .v-text-align {
                text-align: center !important;
            }
        }
        
        @media only screen and (min-width: 620px) {
            .u-row {
                width: 600px !important;
            }
            .u-row .u-col {
                vertical-align: top;
            }
            .u-row .u-col-42p67 {
                width: 256.02px !important;
            }
            .u-row .u-col-42p84 {
                width: 257.04px !important;
            }
            .u-row .u-col-45p17 {
                width: 271.02px !important;
            }
            .u-row .u-col-47p16 {
                width: 282.96px !important;
            }
            .u-row .u-col-48p16 {
                width: 288.96px !important;
            }
            .u-row .u-col-50 {
                width: 300px !important;
            }
            .u-row .u-col-51p84 {
                width: 311.04px !important;
            }
            .u-row .u-col-52p84 {
                width: 317.04px !important;
            }
            .u-row .u-col-54p83 {
                width: 328.98px !important;
            }
            .u-row .u-col-57p16 {
                width: 342.96px !important;
            }
            .u-row .u-col-57p33 {
                width: 343.98px !important;
            }
            .u-row .u-col-100 {
                width: 600px !important;
            }
        }
        
        @media (max-width: 620px) {
            .u-row-container {
                max-width: 100% !important;
                padding-left: 0px !important;
                padding-right: 0px !important;
            }
            .u-row .u-col {
                min-width: 320px !important;
                max-width: 100% !important;
                display: block !important;
            }
            .u-row {
                width: calc(100% - 40px) !important;
            }
            .u-col {
                width: 100% !important;
            }
            .u-col>div {
                margin: 0 auto;
            }
        }
        
        body {
            margin: 0;
            padding: 0;
        }
        
        table,
        tr,
        td {
            vertical-align: top;
            border-collapse: collapse;
        }
        
        p {
            margin: 0;
        }
        
        .ie-container table,
        .mso-container table {
            table-layout: fixed;
        }
        
        * {
            line-height: inherit;
        }
        
        a[x-apple-data-detectors="true"] {
            color: inherit !important;
            text-decoration: none !important;
        }
    </style>

    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Crimson+Text:400,700&display=swap" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet" type="text/css" />

</head>

<body class="clean-body" style="
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      background-color: #e2ded7;
      color: #000000;
    ">
    <table style="
        border-collapse: collapse;
        table-layout: fixed;
        border-spacing: 0;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        vertical-align: top;
        min-width: 320px;
        margin: 0 auto;
        background-color: #e2ded7;
        width: 100%;
      " cellpadding="0" cellspacing="0">
        <tbody>
            <tr style="vertical-align: top">
                <td style="
              word-break: break-word;
              border-collapse: collapse !important;
              vertical-align: top;
            ">
                    <div class="u-row-container" style="padding: 0px; background-color: transparent">
                        <div class="u-row" style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #081120;
                ">
                            <div style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  ">
                                <div class="u-col u-col-100" style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    ">
                                    <div style="width: 100% !important">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        ">
                                            <!--<![endif]-->
                                            <table style="font-family: 'Open Sans', sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 20px 10px 10px;
                                  font-family: 'Open Sans', sans-serif;
                                " align="left">
                                                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                                <tr>
                                                                    <td class="v-text-align" style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      " align="center">
                                                                        <img align="center" border="0" src="http://drive.google.com/uc?export=view&id=1M0VCNane90HRoMbKIKX6_d2lVDSTdThm" alt="Image" title="Image" style="
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          clear: both;
                                          display: inline-block !important;
                                          border: none;
                                          height: auto;
                                          float: none;
                                          width: 15%;
                                          max-width: 313.2px;
                                        " width="313.2" />
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="u-row-container" style="padding: 0px; background-color: transparent">
                        <div class="u-row" style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #081120;
                ">
                            <div style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  ">
                                <div class="u-col u-col-100" style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    ">
                                    <div style="width: 100% !important">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        ">
                                            <!--<![endif]-->
                                            <table style="font-family: 'Open Sans', sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px 10px 50px;
                                  font-family: 'Open Sans', sans-serif;
                                " align="left">
                                                            <div class="v-text-align" style="
                                    color: #d2cec2;
                                    line-height: 150%;
                                    text-align: center;
                                    word-wrap: break-word;
                                  ">
                                                                <p style="font-size: 14px; line-height: 150%">
                                                                    <strong><span
                                        style="
                                          font-size: 22px;
                                          line-height: 33px;
                                        "
                                        >&nbsp;HI, ${name} . &nbsp;FIND YOUR BEST TASTE HERE</span
                                      ></strong
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        
                      </div>
               
                    </div>
                  </div>
        
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                <div
                    class="u-col u-col-42p67"
                    style="
                      max-width: 320px;
                      min-width: 256px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      style="background-color: #d2cec2; width: 100% !important"
                    >
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          id="u_content_text_11"
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 30px 10px 10px 30px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  class="v-text-align"
                                  style="
                                    color: #ee6603;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        font-size: 22px;
                                        line-height: 30.8px;
                                      "
                                      >ABOUT US</span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          id="u_content_text_12"
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px 10px 10px 30px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  class="v-text-align"
                                  style="
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 140%;
                                      text-align: left;
                                    "
                                  >
                                    &nbsp;
                                  </p>
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 140%;
                                      text-align: left;
                                    "
                                  >
                                    <span
                                      style="
                                        font-family: 'comic sans ms', sans-serif;
                                        font-size: 14px;
                                        line-height: 19.6px;
                                      "
                                      >&nbsp;Hello, we're Manglorian-C-Food,
                                      your new premium food delivery</span
                                    ><br /><span
                                      style="
                                        font-family: 'comic sans ms', sans-serif;
                                        font-size: 14px;
                                        line-height: 19.6px;
                                      "
                                      >service. We know you're always busy. No
                                      time for cooking. So let us take care of
                                      that, we're really good at it, we
                                      promise!</span
                                    >
                                  </p>
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 140%;
                                      text-align: left;
                                    "
                                  >
                                    &nbsp;
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          id="u_content_button_5"
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px 10px 30px 30px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <div class="v-text-align" align="left">
                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:'Open Sans',sans-serif;"><tr><td class="v-text-align" style="font-family:'Open Sans',sans-serif;" align="left"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:36px; v-text-anchor:middle; width:111px;" arcsize="11%" stroke="f" fillcolor="#ee6603"><w:anchorlock/><center style="color:#FFFFFF;font-family:'Open Sans',sans-serif;"><![endif]-->
                                  <a
                                    href=""
                                    target="_blank"
                                    style="
                                      box-sizing: border-box;
                                      display: inline-block;
                                      font-family: 'Open Sans', sans-serif;
                                      text-decoration: none;
                                      -webkit-text-size-adjust: none;
                                      text-align: center;
                                      color: #ffffff;
                                      background-color: #ee6603;
                                      border-radius: 4px;
                                      -webkit-border-radius: 4px;
                                      -moz-border-radius: 4px;
                                      width: auto;
                                      max-width: 100%;
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      word-wrap: break-word;
                                      mso-border-alt: none;
                                    "
                                  >
                                    <span
                                      style="
                                        display: block;
                                        padding: 10px 20px;
                                        line-height: 120%;
                                      "
                                      ><span
                                        style="
                                          font-size: 14px;
                                          line-height: 16.8px;
                                        "
                                        >Read More</span
                                      ></span
                                    >
                                  </a>
                                  <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="344" style="width: 344px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-57p33"
                    style="
                      max-width: 320px;
                      min-width: 344px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                >
                                  <tr>
                                    <td
                                      class="v-text-align"
                                      style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                      align="center"
                                    >
                                      <img
                                        align="center"
                                        border="0"
                                        src="http://drive.google.com/uc?export=view&id=1_b5aL_rifA67trmGWZq5NxNRP1XVoLew"
                                        alt="Image"
                                        title="Image"
                                        style="
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          clear: both;
                                          display: inline-block !important;
                                          border: none;
                                          height: auto;
                                          float: none;
                                          width: 100%;
                                          max-width: 300px;
                                          margin-top: 20px;
                                          margin-bottom: 20px;
                                          border-radius: 15px;
                                        "
                                        width="344"
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #081120;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #081120;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 50px 0px 0px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                >
                                  <tr>
                                    <td
                                      class="v-text-align"
                                      style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                      align="center"
                                    >
                                      <img
                                        align="center"
                                        border="0"
                                        src="http://drive.google.com/uc?export=view&id=1WHSO71LRNLVkpdo76Ye1FovuTnpK2jOZ"
                                        alt="Image"
                                        title="Image"
                                        style="
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          clear: both;
                                          display: inline-block !important;
                                          border: none;
                                          height: auto;
                                          float: none;
                                          width: 100%;
                                          max-width: 600px;
                                        "
                                        width="600"
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #d2cec2;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #d2cec2;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 5px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  height="0px"
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="
                                    border-collapse: collapse;
                                    table-layout: fixed;
                                    border-spacing: 0;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    vertical-align: top;
                                    border-top: 0px solid #bbbbbb;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                  "
                                >
                                  <tbody>
                                    <tr style="vertical-align: top">
                                      <td
                                        style="
                                          word-break: break-word;
                                          border-collapse: collapse !important;
                                          vertical-align: top;
                                          font-size: 0px;
                                          line-height: 0px;
                                          mso-line-height-rule: exactly;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                      >
                                        <span>&#160;</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="
                padding: 0px;
                background-image: url('http://drive.google.com/uc?export=view&id=122uNSQZG2HYtDKOjEcp2FmoPxomE3daB');
                background-repeat: no-repeat;
                background-position: center top;
                background-color: transparent;
              "
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #d2cec2;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-image: url('images/image-5.png');background-repeat: no-repeat;background-position: center top;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #d2cec2;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="311" style="background-color: #ffffff;width: 311px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-51p84"
                    style="
                      max-width: 320px;
                      min-width: 311px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      style="background-color: #ffffff; width: 100% !important"
                    >
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                >
                                  <tr>
                                    <td
                                      class="v-text-align"
                                      style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                      align="center"
                                    >
                                      <img
                                        align="center"
                                        border="0"
                                        src="http://drive.google.com/uc?export=view&id=1q2B1KRWuwzMZH3rcEdYbEq9arP_UHmlj"
                                        alt="Image"
                                        title="Image"
                                        style="
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          clear: both;
                                          display: inline-block !important;
                                          border: none;
                                          height: auto;
                                          float: none;
                                          width: 100%;
                                          max-width: 291px;
                                          border-radius: 15px;
                                        "
                                        width="291"
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="289" style="width: 289px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-48p16"
                    style="
                      max-width: 320px;
                      min-width: 289px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          id="u_content_text_10"
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 15px 10px 10px 15px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  class="v-text-align"
                                  style="
                                    color: #ee6301;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        font-size: 18px;
                                        line-height: 25.2px;
                                      "
                                      ><strong
                                        ><span
                                          style="
                                            font-size: 20px;
                                            line-height: 28px;
                                          "
                                          >R</span
                                        ><span
                                          style="
                                            font-size: 20px;
                                            line-height: 28px;
                                          "
                                          >eady in 20 Minutes</span
                                        ></strong
                                      ></span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          id="u_content_text_9"
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px 15px 10px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  class="v-text-align"
                                  style="
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 140%;
                                      text-align: justify;
                                    "
                                  >
                                    <span
                                      style="
                                        font-family: 'comic sans ms', sans-serif;
                                        font-size: 14px;
                                        line-height: 19.6px;
                                      "
                                      >You're only twenty minutes away from your
                                      delicious and super healthy meals
                                      delivered right to your home. We work with
                                      the best chefs in each town to ensure that
                                      you're 100% happy.</span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          id="u_content_button_4"
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px 10px 20px 15px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <div class="v-text-align" align="left">
                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:'Open Sans',sans-serif;"><tr><td class="v-text-align" style="font-family:'Open Sans',sans-serif;" align="left"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:36px; v-text-anchor:middle; width:124px;" arcsize="11%" stroke="f" fillcolor="#ee6603"><w:anchorlock/><center style="color:#FFFFFF;font-family:'Open Sans',sans-serif;"><![endif]-->
                                  <a
                                    href=""
                                    target="_blank"
                                    style="
                                      box-sizing: border-box;
                                      display: inline-block;
                                      font-family: 'Open Sans', sans-serif;
                                      text-decoration: none;
                                      -webkit-text-size-adjust: none;
                                      text-align: center;
                                      color: #ffffff;
                                      background-color: #ee6603;
                                      border-radius: 4px;
                                      -webkit-border-radius: 4px;
                                      -moz-border-radius: 4px;
                                      width: auto;
                                      max-width: 100%;
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      word-wrap: break-word;
                                      mso-border-alt: none;
                                    "
                                  >
                                    <span
                                      style="
                                        display: block;
                                        padding: 10px 20px;
                                        line-height: 120%;
                                      "
                                      ><span
                                        style="
                                          font-size: 14px;
                                          line-height: 16.8px;
                                        "
                                        >ORDER NOW</span
                                      ></span
                                    >
                                  </a>
                                  <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #d2cec2;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #d2cec2;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 15px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  height="0px"
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="
                                    border-collapse: collapse;
                                    table-layout: fixed;
                                    border-spacing: 0;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    vertical-align: top;
                                    border-top: 0px solid #bbbbbb;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                  "
                                >
                                  <tbody>
                                    <tr style="vertical-align: top">
                                      <td
                                        style="
                                          word-break: break-word;
                                          border-collapse: collapse !important;
                                          vertical-align: top;
                                          font-size: 0px;
                                          line-height: 0px;
                                          mso-line-height-rule: exactly;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                      >
                                        <span>&#160;</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #d2cec2;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #d2cec2;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="329" style="width: 329px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-54p83"
                    style="
                      max-width: 320px;
                      min-width: 329px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          id="u_content_text_6"
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px 10px 10px 20px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  class="v-text-align"
                                  style="
                                    color: #ee6301;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="font-size: 14px; line-height: 140%">
                                    <strong
                                      ><span
                                        style="
                                          font-size: 18px;
                                          line-height: 25.2px;
                                        "
                                        ><span
                                          style="
                                            font-size: 20px;
                                            line-height: 28px;
                                          "
                                          >100% organic</span
                                        ><br /></span
                                    ></strong>
                                                                </p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table id="u_content_text_7" style="font-family: 'Open Sans', sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px 15px 10px 20px;
                                  font-family: 'Open Sans', sans-serif;
                                " align="left">
                                                            <div class="v-text-align" style="
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  ">
                                                                <p style="
                                      font-size: 14px;
                                      line-height: 140%;
                                      text-align: justify;
                                    ">
                                                                    <span style="
                                        font-family: 'comic sans ms', sans-serif;
                                        font-size: 14px;
                                        line-height: 19.6px;
                                      ">All our vegetables are fresh, organic and
                                      local. Animals are raised without added
                                      hormones or antibiotics. Good for your
                                      health, the environment, and it also
                                      tastes better!</span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          id="u_content_button_3"
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px 10px 20px 20px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <div class="v-text-align" align="left">
                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:'Open Sans',sans-serif;"><tr><td class="v-text-align" style="font-family:'Open Sans',sans-serif;" align="left"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:36px; v-text-anchor:middle; width:124px;" arcsize="11%" stroke="f" fillcolor="#ee6603"><w:anchorlock/><center style="color:#FFFFFF;font-family:'Open Sans',sans-serif;"><![endif]-->
                                  <a
                                    href=""
                                    target="_blank"
                                    style="
                                      box-sizing: border-box;
                                      display: inline-block;
                                      font-family: 'Open Sans', sans-serif;
                                      text-decoration: none;
                                      -webkit-text-size-adjust: none;
                                      text-align: center;
                                      color: #ffffff;
                                      background-color: #ee6603;
                                      border-radius: 4px;
                                      -webkit-border-radius: 4px;
                                      -moz-border-radius: 4px;
                                      width: auto;
                                      max-width: 100%;
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      word-wrap: break-word;
                                      mso-border-alt: none;
                                    "
                                  >
                                    <span
                                      style="
                                        display: block;
                                        padding: 10px 20px;
                                        line-height: 120%;
                                      "
                                      ><span
                                        style="
                                          font-size: 14px;
                                          line-height: 16.8px;
                                        "
                                        >ORDER NOW</span
                                      ></span
                                    >
                                  </a>
                                  <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="271" style="background-color: #ffffff;width: 271px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-45p17"
                    style="
                      max-width: 320px;
                      min-width: 271px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      style="background-color: #ffffff; width: 100% !important"
                    >
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                >
                                  <tr>
                                    <td
                                      class="v-text-align"
                                      style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                      align="center"
                                    >
                                      <img
                                        align="center"
                                        border="0"
                                        src="http://drive.google.com/uc?export=view&id=12Hnu2tBtJ_c3Qyrs1osVCL6vyhw_Ywma"
                                        alt="Image"
                                        title="Image"
                                        style="
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          clear: both;
                                          display: inline-block !important;
                                          border: none;
                                          height: auto;
                                          float: none;
                                          width: 100%;
                                          max-width: 251px;
                                          border-radius: 15px;
                                        "
                                        width="251"
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #d2cec2;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #d2cec2;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  height="0px"
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="
                                    border-collapse: collapse;
                                    table-layout: fixed;
                                    border-spacing: 0;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    vertical-align: top;
                                    border-top: 0px solid #bbbbbb;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                  "
                                >
                                  <tbody>
                                    <tr style="vertical-align: top">
                                      <td
                                        style="
                                          word-break: break-word;
                                          border-collapse: collapse !important;
                                          vertical-align: top;
                                          font-size: 0px;
                                          line-height: 0px;
                                          mso-line-height-rule: exactly;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                      >
                                        <span>&#160;</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                </td>
            </tr>
        </tbody>
    </table>

    <!--[if (!mso)&(!IE)]><!-->
    </div>
    <!--<![endif]-->
    </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
    </div>
    </div>

    <div class="u-row-container" style="padding: 0px; background-color: transparent">
        <div class="u-row" style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #d2cec2;
                ">
            <div style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  ">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #d2cec2;"><![endif]-->

                <!--[if (mso)|(IE)]><td align="center" width="317" style="background-color: #ffffff;width: 317px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                <div class="u-col u-col-52p84" style="
                      max-width: 320px;
                      min-width: 317px;
                      display: table-cell;
                      vertical-align: top;
                    ">
                    <div style="background-color: #ffffff; width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        ">
                            <!--<![endif]-->
                            <table style="font-family: 'Open Sans', sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody>
                                    <tr>
                                        <td style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: 'Open Sans', sans-serif;
                                " align="left">
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                    <td class="v-text-align" style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      " align="center">
                                                        <img align="center" border="0" src="http://drive.google.com/uc?export=view&id=1xja-WS3VIUwCsZAhVZQA4tpFoItZVMrn" alt="Image" title="Image" style="
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          clear: both;
                                          display: inline-block !important;
                                          border: none;
                                          height: auto;
                                          float: none;
                                          width: 100%;
                                          max-width: 297px;
                                          border-radius: 15px;
                                        " width="297" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                    </div>
                </div>
                <!--[if (mso)|(IE)]></td><![endif]-->
                <!--[if (mso)|(IE)]><td align="center" width="283" style="width: 283px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                <div class="u-col u-col-47p16" style="
                      max-width: 320px;
                      min-width: 283px;
                      display: table-cell;
                      vertical-align: top;
                    ">
                    <div style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        ">
                            <!--<![endif]-->
                            <table id="u_content_text_4" style="font-family: 'Open Sans', sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody>
                                    <tr>
                                        <td style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px 10px 10px 15px;
                                  font-family: 'Open Sans', sans-serif;
                                " align="left">
                                            <div class="v-text-align" style="
                                    color: #ee6301;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  ">
                                                <p style="font-size: 14px; line-height: 140%">
                                                    <strong><span
                                        style="
                                          font-size: 18px;
                                          line-height: 25.2px;
                                        "
                                        >UP to 365 Days/year</span
                                      ></strong
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          id="u_content_text_5"
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px 15px 10px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  class="v-text-align"
                                  style="
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        font-family: 'comic sans ms', sans-serif;
                                        font-size: 14px;
                                        line-height: 19.6px;
                                      "
                                      >Never cook again! We really mean that.
                                      Our subscription plans include up to 365
                                      days/year coverage. You can also choose to
                                      order more flexibly if that's your
                                      style.</span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          id="u_content_button_2"
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px 10px 10px 15px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <div class="v-text-align" align="left">
                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:'Open Sans',sans-serif;"><tr><td class="v-text-align" style="font-family:'Open Sans',sans-serif;" align="left"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:36px; v-text-anchor:middle; width:124px;" arcsize="11%" stroke="f" fillcolor="#ee6603"><w:anchorlock/><center style="color:#FFFFFF;font-family:'Open Sans',sans-serif;"><![endif]-->
                                  <a
                                    href=""
                                    target="_blank"
                                    style="
                                      box-sizing: border-box;
                                      display: inline-block;
                                      font-family: 'Open Sans', sans-serif;
                                      text-decoration: none;
                                      -webkit-text-size-adjust: none;
                                      text-align: center;
                                      color: #ffffff;
                                      background-color: #ee6603;
                                      border-radius: 4px;
                                      -webkit-border-radius: 4px;
                                      -moz-border-radius: 4px;
                                      width: auto;
                                      max-width: 100%;
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      word-wrap: break-word;
                                      mso-border-alt: none;
                                    "
                                  >
                                    <span
                                      style="
                                        display: block;
                                        padding: 10px 20px;
                                        line-height: 120%;
                                      "
                                      ><span
                                        style="
                                          font-size: 14px;
                                          line-height: 16.8px;
                                        "
                                        >ORDER NOW</span
                                      ></span
                                    >
                                  </a>
                                  <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #081120;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #081120;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px 0px 50px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                >
                                  <tr>
                                    <td
                                      class="v-text-align"
                                      style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                      align="center"
                                    >
                                      <img
                                        align="center"
                                        border="0"
                                        src="http://drive.google.com/uc?export=view&id=1thpSqcAj_KIsw5XxQjv3Mh-T8yQQWboe"
                                        alt="Image"
                                        title="Image"
                                        style="
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          clear: both;
                                          display: inline-block !important;
                                          border: none;
                                          height: auto;
                                          float: none;
                                          width: 100%;
                                          max-width: 600px;
                                        "
                                        width="600"
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="257" style="background-color: #d2cec2;width: 257px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-42p84"
                    style="
                      max-width: 320px;
                      min-width: 257px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      style="background-color: #d2cec2; width: 100% !important"
                    >
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          id="u_content_text_2"
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 30px 10px 10px 30px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  class="v-text-align"
                                  style="
                                    color: #ee6603;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="font-size: 14px; line-height: 140%">
                                    <strong
                                      ><span
                                        style="
                                          font-size: 22px;
                                          line-height: 30.8px;
                                        "
                                        >BOOK A DELIVERY<br /></span
                                    ></strong>
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table id="u_content_text_3" style="font-family: 'Open Sans', sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody>
                                    <tr>
                                        <td style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px 10px 10px 30px;
                                  font-family: 'Open Sans', sans-serif;
                                " align="left">
                                            <div class="v-text-align" style="
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  ">
                                                <p style="font-size: 14px; line-height: 140%">
                                                    <span style="
                                        font-family: Lato, sans-serif;
                                        font-size: 14px;
                                        line-height: 19.6px;
                                      ">Lorem ipsum dolor sit amet, consectetuer
                                      adipiscing elit, sed diam nonummy nibh
                                      euismod tincidunt ut laoreet dolore magna
                                      aliquam erat volutpat.</span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          id="u_content_button_1"
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px 10px 30px 30px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <div class="v-text-align" align="left">
                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:'Open Sans',sans-serif;"><tr><td class="v-text-align" style="font-family:'Open Sans',sans-serif;" align="left"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:36px; v-text-anchor:middle; width:124px;" arcsize="11%" stroke="f" fillcolor="#ee6603"><w:anchorlock/><center style="color:#FFFFFF;font-family:'Open Sans',sans-serif;"><![endif]-->
                                  <a
                                    href=""
                                    target="_blank"
                                    style="
                                      box-sizing: border-box;
                                      display: inline-block;
                                      font-family: 'Open Sans', sans-serif;
                                      text-decoration: none;
                                      -webkit-text-size-adjust: none;
                                      text-align: center;
                                      color: #ffffff;
                                      background-color: #ee6603;
                                      border-radius: 4px;
                                      -webkit-border-radius: 4px;
                                      -moz-border-radius: 4px;
                                      width: auto;
                                      max-width: 100%;
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      word-wrap: break-word;
                                      mso-border-alt: none;
                                    "
                                  >
                                    <span
                                      style="
                                        display: block;
                                        padding: 10px 20px;
                                        line-height: 120%;
                                      "
                                      ><span
                                        style="
                                          font-size: 14px;
                                          line-height: 16.8px;
                                        "
                                        >ORDER NOW</span
                                      ></span
                                    >
                                  </a>
                                  <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="343" style="width: 343px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-57p16"
                    style="
                      max-width: 320px;
                      min-width: 343px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                >
                                  <tr>
                                    <td
                                      class="v-text-align"
                                      style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                      align="center"
                                    >
                                      <img
                                        align="center"
                                        border="0"
                                        src="http://drive.google.com/uc?export=view&id=16cMzBZxsHUFmKZgzIzkOAcRwnGtFwhz3"
                                        alt="Image"
                                        title="Image"
                                        style="
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          clear: both;
                                          display: inline-block !important;
                                          border: none;
                                          height: auto;
                                          float: none;
                                          width: 100%;
                                          margin-top: 10px;
                                          margin-bottom: 10px;
                                          max-width: 250px;
                                          border-radius: 15px;
                                        "
                                        width="343"
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #081120;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #081120;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  height="0px"
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="
                                    border-collapse: collapse;
                                    table-layout: fixed;
                                    border-spacing: 0;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    vertical-align: top;
                                    border-top: 0px solid #bbbbbb;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                  "
                                >
                                  <tbody>
                                    <tr style="vertical-align: top">
                                      <td
                                        style="
                                          word-break: break-word;
                                          border-collapse: collapse !important;
                                          vertical-align: top;
                                          font-size: 0px;
                                          line-height: 0px;
                                          mso-line-height-rule: exactly;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                      >
                                        <span>&#160;</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            </td>
                            </tr>
                            </tbody>
                            </table>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
            </div>
        </div>

        <div class="u-row-container" style="padding: 0px; background-color: transparent">
            <div class="u-row" style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #081120;
                ">
                <div style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  ">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #081120;"><![endif]-->

                    <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                    <div class="u-col u-col-50" style="
                      max-width: 320px;
                      min-width: 300px;
                      display: table-cell;
                      vertical-align: top;
                    ">
                        <div style="width: 100% !important">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        ">
                                <!--<![endif]-->
                                <table style="font-family: 'Open Sans', sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                        <tr>
                                            <td style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 50px 10px 15px;
                                  font-family: 'Open Sans', sans-serif;
                                " align="left">
                                                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                    <tr>
                                                        <td class="v-text-align" style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      " align="center">
                                                            <img align="center" border="0" src="http://drive.google.com/uc?export=view&id=1oWDmTQdBIROHXqhKcqkva_MyMVurtDUD" alt="Image" title="Image" style="
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          clear: both;
                                          display: inline-block !important;
                                          border: none;
                                          height: auto;
                                          float: none;
                                          width: 25%;
                                          max-width: 70px;
                                          border-radius: 15px;
                                        " width="70" />
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table style="font-family: 'Open Sans', sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                        <tr>
                                            <td style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px 10px 10px 30px;
                                  font-family: 'Open Sans', sans-serif;
                                " align="left">
                                                <div class="v-text-align" style="
                                    color: #d2cec2;
                                    line-height: 160%;
                                    text-align: center;
                                    word-wrap: break-word;
                                  ">
                                                    <p style="font-size: 14px; line-height: 160%">
                                                        <span style="
                                        font-size: 16px;
                                        line-height: 25.6px;
                                        font-family: Pacifico, cursive;
                                      ">The Manglorian-C-Food</span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-50"
                    style="
                      max-width: 320px;
                      min-width: 300px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 40px 10px 10px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  class="v-text-align"
                                  style="
                                    color: #ffffff;
                                    line-height: 140%;
                                    text-align: center;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        font-size: 22px;
                                        line-height: 30.8px;
                                      "
                                      >Follow Us</span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <div align="center">
                                  <div style="display: table; max-width: 167px">
                                    <!--[if (mso)|(IE)]><table width="167" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:167px;"><tr><![endif]-->

                                    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 10px;" valign="top"><![endif]-->
                                    <table
                                      align="left"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                      width="32"
                                      height="32"
                                      style="
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        margin-right: 10px;
                                      "
                                    >
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            align="left"
                                            valign="middle"
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                            "
                                          >
                                            <a
                                              href="https://linkedin.com/"
                                              title="LinkedIn"
                                              target="_blank"
                                            >
                                              <img
                                                src="http://drive.google.com/uc?export=view&id=1BwFyu-J15PKdKA4oaXoGkHhqz3NqYSZ_"
                                                alt="LinkedIn"
                                                title="LinkedIn"
                                                width="32"
                                                style="
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                  clear: both;
                                                  display: block !important;
                                                  border: none;
                                                  height: auto;
                                                  float: none;
                                                  max-width: 32px !important;
                                                  border-radius: 15px;
                                                "
                                              />
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 10px;" valign="top"><![endif]-->
                                    <table
                                      align="left"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                      width="32"
                                      height="32"
                                      style="
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        margin-right: 10px;
                                      "
                                    >
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            align="left"
                                            valign="middle"
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                            "
                                          >
                                            <a
                                              href="https://instagram.com/"
                                              title="Instagram"
                                              target="_blank"
                                            >
                                              <img
                                                src="http://drive.google.com/uc?export=view&id=1yDn22Im70FK3efmnuUwUnaTO9gRUPrFN"
                                                alt="Instagram"
                                                title="Instagram"
                                                width="32"
                                                style="
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                  clear: both;
                                                  display: block !important;
                                                  border: none;
                                                  height: auto;
                                                  float: none;
                                                  max-width: 32px !important;
                                                  border-radius: 15px;
                                                "
                                              />
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 10px;" valign="top"><![endif]-->
                                    <table
                                      align="left"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                      width="32"
                                      height="32"
                                      style="
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        margin-right: 10px;
                                      "
                                    >
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            align="left"
                                            valign="middle"
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                            "
                                          >
                                            <a
                                              href="https://email.com/"
                                              title="Email"
                                              target="_blank"
                                            >
                                              <img
                                                src="http://drive.google.com/uc?export=view&id=1D88kKKcBQPfmvRKftxtEhhm_YEJ7Z1Y_"
                                                alt="Email"
                                                title="Email"
                                                width="32"
                                                style="
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                  clear: both;
                                                  display: block !important;
                                                  border: none;
                                                  height: auto;
                                                  float: none;
                                                  max-width: 32px !important;
                                                  border-radius: 15px;
                                                "
                                              />
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
                                    <table
                                      align="left"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                      width="32"
                                      height="32"
                                      style="
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        margin-right: 0px;
                                      "
                                    >
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            align="left"
                                            valign="middle"
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                            "
                                          >
                                            <a
                                              href="https://messenger.com/"
                                              title="Messenger"
                                              target="_blank"
                                            >
                                              <img
                                                src="http://drive.google.com/uc?export=view&id=1OnOPApS2W_OEWzZqs-S7pI4GNRK7ot7V"
                                                alt="Messenger"
                                                title="Messenger"
                                                width="32"
                                                style="
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                  clear: both;
                                                  display: block !important;
                                                  border: none;
                                                  height: auto;
                                                  float: none;
                                                  max-width: 32px !important;
                                                  border-radius: 15px;
                                                "
                                              />
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px 10px 50px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  class="v-text-align"
                                  style="
                                    color: #d2cec2;
                                    line-height: 140%;
                                    text-align: center;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="font-size: 14px; line-height: 140%">
                                    FIND US<br /><span
                                      style="
                                        font-family: 'Crimson Text', serif;
                                        font-size: 14px;
                                        line-height: 19.6px;
                                      "
                                      >2nd Cross, Main street , Mangalore</span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Open Sans', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 30px 10px 10px;
                                  font-family: 'Open Sans', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  class="v-text-align"
                                  style="
                                    line-height: 140%;
                                    text-align: center;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        font-size: 12px;
                                        line-height: 16.8px;
                                      "
                                      >You received this email because you
                                      signed up for My restaurant Inc.</span
                                    >
                                  </p>
                                  <p style="font-size: 14px; line-height: 140%">
                                    &nbsp;
                                  </p>
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        text-decoration: underline;
                                        font-size: 12px;
                                        line-height: 16.8px;
                                      "
                                      >Unsubscribe</span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
  </body>
</html>`,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    if (error.response) {
      throw new Error(error.response.body);
    }
  }
};
module.exports = { sendEmail };
