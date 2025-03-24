import type { Meta, StoryObj } from "@storybook/react";
import FinSpace from "../FinSpace";

const meta: Meta<typeof FinSpace> = { title: "AWS/Analytics/FinSpace", component: FinSpace };

export default meta;
type Story = StoryObj<typeof FinSpace>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
