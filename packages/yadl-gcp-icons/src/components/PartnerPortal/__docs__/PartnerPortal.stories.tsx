import type { Meta, StoryObj } from "@storybook/react";
import PartnerPortal from "../PartnerPortal";

const meta: Meta<typeof PartnerPortal> = { title: "GCP/PartnerPortal", component: PartnerPortal };

export default meta;
type Story = StoryObj<typeof PartnerPortal>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
