import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PrivateCertificateAuthority from "../PrivateCertificateAuthority";

describe("PrivateCertificateAuthority component", () => {
  it("PrivateCertificateAuthority should render correctly", () => {
    render(<PrivateCertificateAuthority />);
    expect(true).toBeTruthy();
  });
});
