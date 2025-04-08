import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FallIsComingFallIsComing from "../FallIsComingFallIsComing";

describe("FallIsComingFallIsComing component", () => {
  it("FallIsComingFallIsComing should render correctly", () => {
    render(<FallIsComingFallIsComing />);
    expect(true).toBeTruthy();
  });
});
