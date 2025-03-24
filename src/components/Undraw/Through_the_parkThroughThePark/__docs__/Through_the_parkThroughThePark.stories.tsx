import type { Meta, StoryObj } from "@storybook/react";
import Through_the_parkThroughThePark from "../Through_the_parkThroughThePark";

const meta: Meta<typeof Through_the_parkThroughThePark> = { title: "unDraw/Through_the_parkThroughThePark", component: Through_the_parkThroughThePark };

export default meta;
type Story = StoryObj<typeof Through_the_parkThroughThePark>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
