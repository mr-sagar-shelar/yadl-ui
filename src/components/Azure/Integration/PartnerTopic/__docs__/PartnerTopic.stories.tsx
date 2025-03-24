import type { Meta, StoryObj } from "@storybook/react";
import PartnerTopic from "../PartnerTopic";

const meta: Meta<typeof PartnerTopic> = { title: "Azure/Integration/PartnerTopic", component: PartnerTopic };

export default meta;
type Story = StoryObj<typeof PartnerTopic>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
