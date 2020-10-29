import React from "react";

import Button from "./components/button/button";
import Notification from "./components/notification/notification";
import ToolTip from "./components/tool-tip/tool-tip";

function App() {
  return (
    <React.Fragment>
      <div style={{display: `flex`}}>
        <Button buttonState="default" />
        <Button buttonState="error" />
        <Button buttonState="success" />
      </div>

      <div>
        <Notification header="Against all odds" text="As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built gay party world." notificationState="default" />
        <Notification header="Always add value" text="He moonlight difficult engrossed an it sportsmen. Interested has all devonshire difficulty gay assistance joy." notificationState="error" />
        <Notification header="Action gets results" text="Nor hence hoped her after other known defer his. For county now sister engage had season better had waited." notificationState="success" />
      </div>
      
      <div>
        <ToolTip />
      </div>
   </React.Fragment>
  );
}

export default App;
