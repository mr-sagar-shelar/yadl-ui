import type { Meta, StoryObj } from "@storybook/react";
import OurSolution from "../OurSolution";

const meta: Meta<typeof OurSolution> = { title: "unDraw/OurSolution", component: OurSolution };

export default meta;
type Story = StoryObj<typeof OurSolution>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
