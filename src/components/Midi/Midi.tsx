import React from "react";
import MidiSupportMessage from "./MidiSupportMessage";
import ShowInputOutput from "./ShowInputOutput";

interface MidiState {
  midiAccess: any;
  noMidiSupport: boolean;
}

class Midi extends React.Component<{}, MidiState> {
  componentDidMount() {
    // TODO: set up listeners

    if ((navigator as any).requestMIDIAccess) {
      (navigator as any)
        .requestMIDIAccess()
        .then(this.onMIDISuccess, this.onMIDIFailure);
    } else {
      this.setState({ noMidiSupport: true });
    }
  }

  state = {
    midiAccess: undefined,
    noMidiSupport: false
  };

  onMIDISuccess = (midiAccess: any) => {
    console.log("MIDI ready");
    this.setState({ midiAccess });
  };

  onMIDIFailure = (msg: any) => {
    console.log(`failed to get MIDI access due to: ${msg}`);
  };

  render() {
    const { noMidiSupport, midiAccess } = this.state;

    return (
      <>
        <h3>MIDI</h3>
        <header>
          {<MidiSupportMessage hasAccess={!noMidiSupport} />}
          <a
            href="https://webaudio.github.io/web-midi-api/#examples"
            target="_blank"
            rel="noopener noreferrer"
          >
            midi api examples
          </a>
        </header>
        {midiAccess && <ShowInputOutput midiAccess={midiAccess} />}
      </>
    );
  }
}

export default Midi;
