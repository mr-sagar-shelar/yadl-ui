import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SocialUpdate from "../SocialUpdate";

describe("SocialUpdate component", () => {
  it("SocialUpdate should render correctly", () => {
    render(<SocialUpdate />);
    expect(true).toBeTruthy();
  });
});
