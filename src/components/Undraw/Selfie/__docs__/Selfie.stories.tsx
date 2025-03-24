import type { Meta, StoryObj } from "@storybook/react";
import Selfie from "../Selfie";

const meta: Meta<typeof Selfie> = { title: "unDraw/Selfie", component: Selfie };

export default meta;
type Story = StoryObj<typeof Selfie>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
