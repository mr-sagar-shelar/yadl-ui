import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MicrosoftDefenderEASM from "../MicrosoftDefenderEASM";

describe("MicrosoftDefenderEASM component", () => {
  it("MicrosoftDefenderEASM should render correctly", () => {
    render(<MicrosoftDefenderEASM />);
    expect(true).toBeTruthy();
  });
});
