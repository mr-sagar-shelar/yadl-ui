import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Conceptual_ideaConceptualIdea from "../Conceptual_ideaConceptualIdea";

describe("Conceptual_ideaConceptualIdea component", () => {
  it("Conceptual_ideaConceptualIdea should render correctly", () => {
    render(<Conceptual_ideaConceptualIdea />);
    expect(true).toBeTruthy();
  });
});
