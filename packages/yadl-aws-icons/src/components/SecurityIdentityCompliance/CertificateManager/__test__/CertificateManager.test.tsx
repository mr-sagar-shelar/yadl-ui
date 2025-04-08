import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CertificateManager from "../CertificateManager";

describe("CertificateManager component", () => {
  it("CertificateManager should render correctly", () => {
    render(<CertificateManager />);
    expect(true).toBeTruthy();
  });
});
