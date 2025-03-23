import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NewYear2021 from "../NewYear2021";

describe("NewYear2021 component", () => {
  it("NewYear2021 should render correctly", () => {
    render(<NewYear2021 />);
    expect(true).toBeTruthy();
  });
});
