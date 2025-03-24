import type { Meta, StoryObj } from "@storybook/react";
import CreativeDraft from "../CreativeDraft";

const meta: Meta<typeof CreativeDraft> = { title: "unDraw/CreativeDraft", component: CreativeDraft };

export default meta;
type Story = StoryObj<typeof CreativeDraft>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
