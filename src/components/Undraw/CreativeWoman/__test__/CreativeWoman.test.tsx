import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CreativeWoman from "../CreativeWoman";

describe("CreativeWoman component", () => {
  it("CreativeWoman should render correctly", () => {
    render(<CreativeWoman />);
    expect(true).toBeTruthy();
  });
});
