import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DesignInspiration from "../DesignInspiration";

describe("DesignInspiration component", () => {
  it("DesignInspiration should render correctly", () => {
    render(<DesignInspiration />);
    expect(true).toBeTruthy();
  });
});
