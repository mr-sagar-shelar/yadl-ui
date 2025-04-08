import type { Meta, StoryObj } from "@storybook/react";
import WorkTogether from "../WorkTogether";

const meta: Meta<typeof WorkTogether> = { title: "unDraw/WorkTogether", component: WorkTogether };

export default meta;
type Story = StoryObj<typeof WorkTogether>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
