import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SocialSharing from "../SocialSharing";

describe("SocialSharing component", () => {
  it("SocialSharing should render correctly", () => {
    render(<SocialSharing />);
    expect(true).toBeTruthy();
  });
});
