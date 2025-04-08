import type { Meta, StoryObj } from "@storybook/react";
import Connect from "../Connect";

const meta: Meta<typeof Connect> = { title: "AWS/BusinessApplications/Connect", component: Connect };

export default meta;
type Story = StoryObj<typeof Connect>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
