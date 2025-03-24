import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AppServiceCertificates from "../AppServiceCertificates";

describe("AppServiceCertificates component", () => {
  it("AppServiceCertificates should render correctly", () => {
    render(<AppServiceCertificates />);
    expect(true).toBeTruthy();
  });
});
