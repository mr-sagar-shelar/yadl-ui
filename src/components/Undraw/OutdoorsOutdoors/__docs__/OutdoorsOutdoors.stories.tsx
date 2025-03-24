import type { Meta, StoryObj } from "@storybook/react";
import OutdoorsOutdoors from "../OutdoorsOutdoors";

const meta: Meta<typeof OutdoorsOutdoors> = { title: "unDraw/OutdoorsOutdoors", component: OutdoorsOutdoors };

export default meta;
type Story = StoryObj<typeof OutdoorsOutdoors>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
