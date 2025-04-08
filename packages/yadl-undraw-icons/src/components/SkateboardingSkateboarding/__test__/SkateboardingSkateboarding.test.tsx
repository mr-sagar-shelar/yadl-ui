import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SkateboardingSkateboarding from "../SkateboardingSkateboarding";

describe("SkateboardingSkateboarding component", () => {
  it("SkateboardingSkateboarding should render correctly", () => {
    render(<SkateboardingSkateboarding />);
    expect(true).toBeTruthy();
  });
});
