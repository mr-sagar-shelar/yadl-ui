import type { Meta, StoryObj } from "@storybook/react";
import PartnerNamespace from "../PartnerNamespace";

const meta: Meta<typeof PartnerNamespace> = { title: "Azure/Integration/PartnerNamespace", component: PartnerNamespace };

export default meta;
type Story = StoryObj<typeof PartnerNamespace>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
