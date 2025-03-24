import type { Meta, StoryObj } from "@storybook/react";
import TreasureTreasure from "../TreasureTreasure";

const meta: Meta<typeof TreasureTreasure> = { title: "unDraw/TreasureTreasure", component: TreasureTreasure };

export default meta;
type Story = StoryObj<typeof TreasureTreasure>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
