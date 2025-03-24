import type { Meta, StoryObj } from "@storybook/react";
import ReadyForWaves from "../ReadyForWaves";

const meta: Meta<typeof ReadyForWaves> = { title: "unDraw/ReadyForWaves", component: ReadyForWaves };

export default meta;
type Story = StoryObj<typeof ReadyForWaves>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
