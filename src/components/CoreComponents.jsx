import { CORE_CONCEPTS } from "../data.js";
import CoreComponent from "./CoreComponent.jsx";

export default function CoreComponents() {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreComponent key={conceptItem.title} {...conceptItem} />
        ))}
        {/* <CoreComponent
        {...CORE_CONCEPTS[0]}
      />
      <CoreComponent
        {...CORE_CONCEPTS[1]}
      />
      <CoreComponent
        {...CORE_CONCEPTS[2]}
      />
      <CoreComponent
        {...CORE_CONCEPTS[3]}
      /> */}
      </ul>
    </section>
  );
}
