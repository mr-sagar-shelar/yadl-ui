import type { Meta, StoryObj } from "@storybook/react";
import HealthyOptions from "../HealthyOptions";

const meta: Meta<typeof HealthyOptions> = { title: "unDraw/HealthyOptions", component: HealthyOptions };

export default meta;
type Story = StoryObj<typeof HealthyOptions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
