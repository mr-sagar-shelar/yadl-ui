import type { Meta, StoryObj } from "@storybook/react";
import WorkLink from "../WorkLink";

const meta: Meta<typeof WorkLink> = { title: "AWS/EndUserComputing/WorkLink", component: WorkLink };

export default meta;
type Story = StoryObj<typeof WorkLink>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
