import type { Meta, StoryObj } from "@storybook/react";
import TakingSelfie from "../TakingSelfie";

const meta: Meta<typeof TakingSelfie> = { title: "unDraw/TakingSelfie", component: TakingSelfie };

export default meta;
type Story = StoryObj<typeof TakingSelfie>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
