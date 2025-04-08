import type { Meta, StoryObj } from "@storybook/react";
import OutdoorParty from "../OutdoorParty";

const meta: Meta<typeof OutdoorParty> = { title: "unDraw/OutdoorParty", component: OutdoorParty };

export default meta;
type Story = StoryObj<typeof OutdoorParty>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
