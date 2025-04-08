import type { Meta, StoryObj } from "@storybook/react";
import JustBrowsing from "../JustBrowsing";

const meta: Meta<typeof JustBrowsing> = { title: "unDraw/JustBrowsing", component: JustBrowsing };

export default meta;
type Story = StoryObj<typeof JustBrowsing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
