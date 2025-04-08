import type { Meta, StoryObj } from "@storybook/react";
import Freelancer from "../Freelancer";

const meta: Meta<typeof Freelancer> = { title: "unDraw/Freelancer", component: Freelancer };

export default meta;
type Story = StoryObj<typeof Freelancer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
