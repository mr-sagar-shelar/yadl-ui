import type { Meta, StoryObj } from "@storybook/react";
import CareerDevelopment from "../CareerDevelopment";

const meta: Meta<typeof CareerDevelopment> = { title: "unDraw/CareerDevelopment", component: CareerDevelopment };

export default meta;
type Story = StoryObj<typeof CareerDevelopment>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
