import type { Meta, StoryObj } from "@storybook/react";
import Exams from "../Exams";

const meta: Meta<typeof Exams> = { title: "unDraw/Exams", component: Exams };

export default meta;
type Story = StoryObj<typeof Exams>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
