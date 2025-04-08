import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GoogleMapsPlatform from "../GoogleMapsPlatform";

describe("GoogleMapsPlatform component", () => {
  it("GoogleMapsPlatform should render correctly", () => {
    render(<GoogleMapsPlatform />);
    expect(true).toBeTruthy();
  });
});
