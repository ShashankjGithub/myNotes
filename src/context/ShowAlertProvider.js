import { useState } from "react";
import ShowAlertContext from "./ShowAlertContext";

const AlertState = (props) => {
    const [alert, setalert] = useState(null)

  const showAlert = (message,type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1000);
  }
  return (
    <ShowAlertContext.Provider value={{alert,showAlert}}>
        {props.children}
    </ShowAlertContext.Provider>
);
}
export default AlertState;