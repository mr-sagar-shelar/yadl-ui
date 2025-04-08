import type { Meta, StoryObj } from "@storybook/react";
import InNoTimeInNoTime from "../InNoTimeInNoTime";

const meta: Meta<typeof InNoTimeInNoTime> = { title: "unDraw/InNoTimeInNoTime", component: InNoTimeInNoTime };

export default meta;
type Story = StoryObj<typeof InNoTimeInNoTime>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
