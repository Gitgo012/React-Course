import TabButton from "../components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "../data.js";
import Section from "../components/section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  console.log("EXAMPLES COMPONENT EXECUTING");

  const tabContent = selectedTopic ? (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  ) : (
    <p>Please select a topic.</p>
  );

  return (
    <Section title="Examples" id="examples">
      <Tabs buttonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              label="components"
              onClick={() => handleSelect("components")}
            />
            <TabButton
              isSelected={selectedTopic === "jsx"}
              label="jsx"
              onClick={() => handleSelect("jsx")}
            />
            <TabButton
              isSelected={selectedTopic === "props"}
              label="props"
              onClick={() => handleSelect("props")}
            />
            <TabButton
              isSelected={selectedTopic === "state"}
              label="state"
              onClick={() => handleSelect("state")}
            />
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
