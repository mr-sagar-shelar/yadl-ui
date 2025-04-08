import type { Meta, StoryObj } from "@storybook/react";
import FillForms from "../FillForms";

const meta: Meta<typeof FillForms> = { title: "unDraw/FillForms", component: FillForms };

export default meta;
type Story = StoryObj<typeof FillForms>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
