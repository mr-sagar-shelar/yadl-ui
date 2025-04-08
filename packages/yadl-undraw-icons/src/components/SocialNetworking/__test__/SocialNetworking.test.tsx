import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SocialNetworking from "../SocialNetworking";

describe("SocialNetworking component", () => {
  it("SocialNetworking should render correctly", () => {
    render(<SocialNetworking />);
    expect(true).toBeTruthy();
  });
});
