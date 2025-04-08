import type { Meta, StoryObj } from "@storybook/react";
import MedicineMedicine from "../MedicineMedicine";

const meta: Meta<typeof MedicineMedicine> = { title: "unDraw/MedicineMedicine", component: MedicineMedicine };

export default meta;
type Story = StoryObj<typeof MedicineMedicine>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
