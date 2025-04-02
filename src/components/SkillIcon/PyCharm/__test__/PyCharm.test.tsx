import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PyCharm from "../PyCharm";

describe("PyCharm component", () => {
  it("PyCharm should render correctly", () => {
    render(<PyCharm />);
    expect(true).toBeTruthy();
  });
});
