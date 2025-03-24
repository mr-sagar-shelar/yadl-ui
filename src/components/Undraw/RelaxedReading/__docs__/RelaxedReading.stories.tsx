import type { Meta, StoryObj } from "@storybook/react";
import RelaxedReading from "../RelaxedReading";

const meta: Meta<typeof RelaxedReading> = { title: "unDraw/RelaxedReading", component: RelaxedReading };

export default meta;
type Story = StoryObj<typeof RelaxedReading>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
