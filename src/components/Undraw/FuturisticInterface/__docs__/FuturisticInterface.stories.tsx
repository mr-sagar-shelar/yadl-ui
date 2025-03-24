import type { Meta, StoryObj } from "@storybook/react";
import FuturisticInterface from "../FuturisticInterface";

const meta: Meta<typeof FuturisticInterface> = { title: "unDraw/FuturisticInterface", component: FuturisticInterface };

export default meta;
type Story = StoryObj<typeof FuturisticInterface>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
