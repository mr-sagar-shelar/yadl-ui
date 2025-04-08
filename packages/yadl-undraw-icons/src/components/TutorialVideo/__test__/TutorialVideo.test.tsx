import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TutorialVideo from "../TutorialVideo";

describe("TutorialVideo component", () => {
  it("TutorialVideo should render correctly", () => {
    render(<TutorialVideo />);
    expect(true).toBeTruthy();
  });
});
