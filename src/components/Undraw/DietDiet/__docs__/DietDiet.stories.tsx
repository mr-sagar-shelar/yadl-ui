import type { Meta, StoryObj } from "@storybook/react";
import DietDiet from "../DietDiet";

const meta: Meta<typeof DietDiet> = { title: "unDraw/DietDiet", component: DietDiet };

export default meta;
type Story = StoryObj<typeof DietDiet>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
