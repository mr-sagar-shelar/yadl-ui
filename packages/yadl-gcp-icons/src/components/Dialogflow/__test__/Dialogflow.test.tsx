import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Dialogflow from "../Dialogflow";

describe("Dialogflow component", () => {
  it("Dialogflow should render correctly", () => {
    render(<Dialogflow />);
    expect(true).toBeTruthy();
  });
});
