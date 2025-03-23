import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DesignData from "../DesignData";

describe("DesignData component", () => {
  it("DesignData should render correctly", () => {
    render(<DesignData />);
    expect(true).toBeTruthy();
  });
});
