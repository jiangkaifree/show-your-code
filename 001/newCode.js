import { message } from "antd";

const doAxios = async (params) => {
  const result = await doAxios({
    method: "post",
    url: "http://localhost:61230/skf/oper",
    data: p,
  });
  return result;
};

const doAxios2 = async (params) => {
  const result = await axios.post("http://192.168.20.234:5081/aa/01", p, {
    headers: {
      AnonymousSession: "3ac82d40387853a39a35cbe3619c41973354",
      // content-Type: 'text/plain'
      "Content-Type": "text/plain",
    },
  });
  return result;
};

const loginPlugin = async (params) => {
  const pin = params ? params.pin : "111111";
  const { code } = await doAxios(params);
  if (code === 0) {
    const firstStep = await doAxios({ type: "AuthenticationFirstStep", pin });
    const { data: firstData, code: firstCode} = JSON(firstStep.data.replace(/\x00\x00/g, ""))
    if (firstCode === 0) {
      const secondStep = await doAxios2(firstData)
      if (secondStep && secondStep.data) {
        const thirdStep = await doAxios({
          type: 'AuthenticationSecondStep',
          data: secondStep.data
        })
        const lastResult  = JSON.parse(thirdStep.data)
      }
    }
  } else {
    if (code === 378) {
      message.warn("第1步code不为0");
    }
  }
};
export default loginPlugin;
