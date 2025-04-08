import type { Meta, StoryObj } from "@storybook/react";
import Images from "../Images";

const meta: Meta<typeof Images> = { title: "Azure/Compute/Images", component: Images };

export default meta;
type Story = StoryObj<typeof Images>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
