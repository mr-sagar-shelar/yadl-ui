import type { Meta, StoryObj } from "@storybook/react";
import MapDark from "../MapDark";

const meta: Meta<typeof MapDark> = { title: "unDraw/MapDark", component: MapDark };

export default meta;
type Story = StoryObj<typeof MapDark>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
