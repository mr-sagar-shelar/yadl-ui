import type { Meta, StoryObj } from "@storybook/react";
import SnowGlobe from "../SnowGlobe";

const meta: Meta<typeof SnowGlobe> = { title: "unDraw/SnowGlobe", component: SnowGlobe };

export default meta;
type Story = StoryObj<typeof SnowGlobe>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
