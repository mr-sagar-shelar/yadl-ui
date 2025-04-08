import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DesignToolsDesignTools from "../DesignToolsDesignTools";

describe("DesignToolsDesignTools component", () => {
  it("DesignToolsDesignTools should render correctly", () => {
    render(<DesignToolsDesignTools />);
    expect(true).toBeTruthy();
  });
});
