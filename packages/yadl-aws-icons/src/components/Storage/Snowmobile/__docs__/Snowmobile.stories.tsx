import type { Meta, StoryObj } from "@storybook/react";
import Snowmobile from "../Snowmobile";

const meta: Meta<typeof Snowmobile> = { title: "AWS/Storage/Snowmobile", component: Snowmobile };

export default meta;
type Story = StoryObj<typeof Snowmobile>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
