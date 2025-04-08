import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MicrosoftDefenderforIoT from "../MicrosoftDefenderforIoT";

describe("MicrosoftDefenderforIoT component", () => {
  it("MicrosoftDefenderforIoT should render correctly", () => {
    render(<MicrosoftDefenderforIoT />);
    expect(true).toBeTruthy();
  });
});
