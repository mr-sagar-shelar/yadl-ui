import type { Meta, StoryObj } from "@storybook/react";
import Feeling_proudFeelingProud from "../Feeling_proudFeelingProud";

const meta: Meta<typeof Feeling_proudFeelingProud> = { title: "unDraw/Feeling_proudFeelingProud", component: Feeling_proudFeelingProud };

export default meta;
type Story = StoryObj<typeof Feeling_proudFeelingProud>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
