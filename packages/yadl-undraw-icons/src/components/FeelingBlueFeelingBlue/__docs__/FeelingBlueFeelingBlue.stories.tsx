import type { Meta, StoryObj } from "@storybook/react";
import FeelingBlueFeelingBlue from "../FeelingBlueFeelingBlue";

const meta: Meta<typeof FeelingBlueFeelingBlue> = { title: "unDraw/FeelingBlueFeelingBlue", component: FeelingBlueFeelingBlue };

export default meta;
type Story = StoryObj<typeof FeelingBlueFeelingBlue>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
