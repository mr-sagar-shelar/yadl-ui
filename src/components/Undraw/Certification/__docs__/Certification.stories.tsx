import type { Meta, StoryObj } from "@storybook/react";
import Certification from "../Certification";

const meta: Meta<typeof Certification> = { title: "unDraw/Certification", component: Certification };

export default meta;
type Story = StoryObj<typeof Certification>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
