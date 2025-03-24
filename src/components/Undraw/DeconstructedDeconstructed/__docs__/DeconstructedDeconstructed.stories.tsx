import type { Meta, StoryObj } from "@storybook/react";
import DeconstructedDeconstructed from "../DeconstructedDeconstructed";

const meta: Meta<typeof DeconstructedDeconstructed> = { title: "unDraw/DeconstructedDeconstructed", component: DeconstructedDeconstructed };

export default meta;
type Story = StoryObj<typeof DeconstructedDeconstructed>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
