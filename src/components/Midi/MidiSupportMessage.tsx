import React from "react";

interface MidiSupportMessageProps {
  hasAccess: boolean;
}

const MidiSupportMessage: React.FC<MidiSupportMessageProps> = ({
  hasAccess
}) => (
  <>
    {hasAccess ? (
      <div className="MidiSupportMessage">You have Midi Access!</div>
    ) : (
      <div className="NoMidiSupport-message">
        This browser does not have midi support yet. It is an experimental
        feature. Please try visiting this page in Chrome.
      </div>
    )}
  </>
);

export default MidiSupportMessage;
