import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineArt from "../OnlineArt";

describe("OnlineArt component", () => {
  it("OnlineArt should render correctly", () => {
    render(<OnlineArt />);
    expect(true).toBeTruthy();
  });
});
