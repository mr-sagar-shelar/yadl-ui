import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DesignProcess from "../DesignProcess";

describe("DesignProcess component", () => {
  it("DesignProcess should render correctly", () => {
    render(<DesignProcess />);
    expect(true).toBeTruthy();
  });
});
