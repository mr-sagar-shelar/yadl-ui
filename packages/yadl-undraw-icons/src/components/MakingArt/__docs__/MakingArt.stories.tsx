import type { Meta, StoryObj } from "@storybook/react";
import MakingArt from "../MakingArt";

const meta: Meta<typeof MakingArt> = { title: "unDraw/MakingArt", component: MakingArt };

export default meta;
type Story = StoryObj<typeof MakingArt>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
