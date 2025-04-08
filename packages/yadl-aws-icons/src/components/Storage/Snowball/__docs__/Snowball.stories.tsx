import type { Meta, StoryObj } from "@storybook/react";
import Snowball from "../Snowball";

const meta: Meta<typeof Snowball> = { title: "AWS/Storage/Snowball", component: Snowball };

export default meta;
type Story = StoryObj<typeof Snowball>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
