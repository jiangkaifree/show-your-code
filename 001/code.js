import { message } from 'antd'

function doAxios(p) {
  return axios({
    method: "post",
    url: "http://localhost:61230/skf/oper",
    data: p,
  });
}

function doAxios2(p) {
  return axios.post("http://192.168.20.234:5081/aa/01", p, {
    headers: {
      AnonymousSession: "3ac82d40387853a39a35cbe3619c41973354",
      // content-Type: 'text/plain'
      "Content-Type": "text/plain",
    },
  });
}

const loginPlugin = function (params) {
  return new Promise((resolve, reject) => {
    let pin = params ? params.pin : "111111";
    doAxios(params)
      .then((loginPin) => {
        if (result && result.code === 0) {
          doAxios({ type: "AuthenticationFirstStep", pin })
            .then((firstStep) => {
              firstStep.data = firstStep.data.replace(/\x00\x00/g, "");
              firstStep.data = JSON.parse(firstStep.data);
              if (firstStep.data.code === 0) {
                let data = firstStep.data.data;
                doAxios2(data)
                  .then((flken1) => {
                    if (flken1 && flken1.data) {
                      flken1 = flken1.data;
                      doAxios({
                        type: "AuthenticationSecondStep",
                        data: flken1,
                      })
                        .then((secondStep) => {
                          secondStep.data = JSON.parse(secondStep.data);
                        })
                        .catch((err) => {
                          message.error(`第四步出现问题${err.msg}`);
                        });
                    } else {
                      message.warn(`第3步code不为0`);
                    }
                  })
                  .catch((err) => {
                    message.error(`第3步出现问题`);
                  });
                // return res.data
              } else {
                message.warn(`第2步code不为0`);
              }
            })
            .catch((err) => {
              console.log("我走了catch", err);
              message.error(`第2步出现问题${err.msg}`);
            });
        } else {
          if (loginPin && loginPin.code === 378) {
            message.warn(`请修改初始密码后再登录`);
            reject();
          }
          message.warn(`第1步code不为0`);
        }
      })
      .catch((err) => {
        message.error(`第1步出现问题${err.msg}`);
      });
    // console.log('flken2.data',flken2.data)
    // resolve(flken2.data)
  });
};
export default loginPlugin;
