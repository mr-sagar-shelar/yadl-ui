import type { Meta, StoryObj } from "@storybook/react";
import MobileEngagement from "../MobileEngagement";

const meta: Meta<typeof MobileEngagement> = { title: "Azure/General/MobileEngagement", component: MobileEngagement };

export default meta;
type Story = StoryObj<typeof MobileEngagement>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
