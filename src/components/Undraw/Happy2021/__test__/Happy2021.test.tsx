import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Happy2021 from "../Happy2021";

describe("Happy2021 component", () => {
  it("Happy2021 should render correctly", () => {
    render(<Happy2021 />);
    expect(true).toBeTruthy();
  });
});
