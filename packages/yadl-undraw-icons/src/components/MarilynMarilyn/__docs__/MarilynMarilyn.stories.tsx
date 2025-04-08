import type { Meta, StoryObj } from "@storybook/react";
import MarilynMarilyn from "../MarilynMarilyn";

const meta: Meta<typeof MarilynMarilyn> = { title: "unDraw/MarilynMarilyn", component: MarilynMarilyn };

export default meta;
type Story = StoryObj<typeof MarilynMarilyn>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
