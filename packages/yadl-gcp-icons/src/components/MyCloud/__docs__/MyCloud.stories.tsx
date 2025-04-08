import type { Meta, StoryObj } from "@storybook/react";
import MyCloud from "../MyCloud";

const meta: Meta<typeof MyCloud> = { title: "GCP/MyCloud", component: MyCloud };

export default meta;
type Story = StoryObj<typeof MyCloud>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
