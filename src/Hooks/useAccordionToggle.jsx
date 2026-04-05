import { useState } from "react";

export default function useAccordionToggle() {
  const [accordion, setAccordion] = useState(null);

  const accordionHandler = (id) => {
    setAccordion((prev) => (prev == id ? null : id));
  };
  return { accordionHandler, accordion };
}
