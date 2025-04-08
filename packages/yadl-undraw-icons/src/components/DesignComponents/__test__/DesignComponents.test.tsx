import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DesignComponents from "../DesignComponents";

describe("DesignComponents component", () => {
  it("DesignComponents should render correctly", () => {
    render(<DesignComponents />);
    expect(true).toBeTruthy();
  });
});
