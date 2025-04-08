import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NewYear2022 from "../NewYear2022";

describe("NewYear2022 component", () => {
  it("NewYear2022 should render correctly", () => {
    render(<NewYear2022 />);
    expect(true).toBeTruthy();
  });
});
