import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Greek_freakGreekFreak from "../Greek_freakGreekFreak";

describe("Greek_freakGreekFreak component", () => {
  it("Greek_freakGreekFreak should render correctly", () => {
    render(<Greek_freakGreekFreak />);
    expect(true).toBeTruthy();
  });
});
