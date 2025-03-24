import type { Meta, StoryObj } from "@storybook/react";
import WordOfMouth from "../WordOfMouth";

const meta: Meta<typeof WordOfMouth> = { title: "unDraw/WordOfMouth", component: WordOfMouth };

export default meta;
type Story = StoryObj<typeof WordOfMouth>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
