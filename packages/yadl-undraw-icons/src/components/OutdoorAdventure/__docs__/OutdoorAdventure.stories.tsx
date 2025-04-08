import type { Meta, StoryObj } from "@storybook/react";
import OutdoorAdventure from "../OutdoorAdventure";

const meta: Meta<typeof OutdoorAdventure> = { title: "unDraw/OutdoorAdventure", component: OutdoorAdventure };

export default meta;
type Story = StoryObj<typeof OutdoorAdventure>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
