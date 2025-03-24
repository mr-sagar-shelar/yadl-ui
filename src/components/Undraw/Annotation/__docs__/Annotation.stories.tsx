import type { Meta, StoryObj } from "@storybook/react";
import Annotation from "../Annotation";

const meta: Meta<typeof Annotation> = { title: "unDraw/Annotation", component: Annotation };

export default meta;
type Story = StoryObj<typeof Annotation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
