import type { Meta, StoryObj } from "@storybook/react";
import Lambda from "../Lambda";

const meta: Meta<typeof Lambda> = { title: "AWS/Compute/Lambda", component: Lambda };

export default meta;
type Story = StoryObj<typeof Lambda>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
