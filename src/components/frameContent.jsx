import React, { useState } from "react";
import { createPortal } from "react-dom";

export default function Frame({ children }) {
    const [ref, setRef] = useState();
    const container = ref?.contentWindow?.document?.body;
  
    return (
      <iframe ref={setRef} style={{width:'auto', height:'auto'}}>
        {container && createPortal(children, container)}
      </iframe>
    );
  }