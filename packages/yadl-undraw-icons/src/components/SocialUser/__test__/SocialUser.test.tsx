import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SocialUser from "../SocialUser";

describe("SocialUser component", () => {
  it("SocialUser should render correctly", () => {
    render(<SocialUser />);
    expect(true).toBeTruthy();
  });
});
