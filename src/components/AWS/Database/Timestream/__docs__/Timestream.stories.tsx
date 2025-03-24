import type { Meta, StoryObj } from "@storybook/react";
import Timestream from "../Timestream";

const meta: Meta<typeof Timestream> = { title: "AWS/Database/Timestream", component: Timestream };

export default meta;
type Story = StoryObj<typeof Timestream>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
