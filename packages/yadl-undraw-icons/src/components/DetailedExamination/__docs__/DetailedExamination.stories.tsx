import type { Meta, StoryObj } from "@storybook/react";
import DetailedExamination from "../DetailedExamination";

const meta: Meta<typeof DetailedExamination> = { title: "unDraw/DetailedExamination", component: DetailedExamination };

export default meta;
type Story = StoryObj<typeof DetailedExamination>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
