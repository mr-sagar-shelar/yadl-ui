import type { Meta, StoryObj } from "@storybook/react";
import Energizer from "../Energizer";

const meta: Meta<typeof Energizer> = { title: "unDraw/Energizer", component: Energizer };

export default meta;
type Story = StoryObj<typeof Energizer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
