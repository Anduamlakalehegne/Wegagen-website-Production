// src/components/LiveChat.js
import React, { useEffect } from 'react';

const ThreeCXChat = () => {
  useEffect(() => {
    // Add the 3CX live chat script to the page
    const script = document.createElement('script');
    script.src = "https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js";
    script.defer = true;
    script.charset = "utf-8"; 
    script.id = "tcx-callus-js"; 
    document.body.appendChild(script); 

    return () => {
      // Cleanup the script when the component is unmounted
      document.body.removeChild(script); 
    };
  }, []);

  return (
    <div>
      {/* Real-time updates */}
      <call-us-selector
        phonesystem-url="https://contactcenter.wegagenbanksc.com.et:5001"
        party="LiveChat660271"
      ></call-us-selector>

      {/* Static configuration (commented out as per your instructions) */}
      {/* 
      <call-us 
        phonesystem-url="https://contactcenter.wegagenbanksc.com.et:5001" 
        style="position:fixed;font-size:16px;line-height:17px;z-index: 99999;--call-us-main-accent-color:#47D6D6;--call-us-main-background-color:#FFFFFF;--call-us-plate-background-color:#206C77;--call-us-plate-font-color:#E6E6E6;--call-us-main-font-color:#292929;--call-us-agent-bubble-color:#29292910;right: 20px; bottom: 20px;" 
        id="wp-live-chat-by-3CX" 
        minimized="true" 
        animation-style="slidefromside" 
        party="LiveChat660271" 
        minimized-style="bubbleright" 
        allow-call="true" 
        allow-video="false" 
        allow-soundnotifications="true" 
        enable-mute="true" 
        enable-onmobile="true" 
        offline-enabled="true" 
        enable="true" 
        ignore-queueownership="false" 
        authentication="name" 
        operator-name="Support Team" 
        show-operator-actual-name="false" 
        aknowledge-received="true" 
        gdpr-enabled="false" 
        message-userinfo-format="both" 
        message-dateformat="both" 
        lang="browser" 
        button-icon-type="doublebubble" 
        greeting-visibility="none" 
        greeting-offline-visibility="none" 
        chat-delay="2000" 
        enable-direct-call="true" 
        enable-ga="false" 
      ></call-us> 
      */}
    </div>
  );
};

export default ThreeCXChat;
