import type { Meta, StoryObj } from "@storybook/react";
import Presenting from "../Presenting";

const meta: Meta<typeof Presenting> = { title: "unDraw/Presenting", component: Presenting };

export default meta;
type Story = StoryObj<typeof Presenting>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
