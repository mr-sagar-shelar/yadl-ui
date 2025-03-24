import type { Meta, StoryObj } from "@storybook/react";
import Aircraft from "../Aircraft";

const meta: Meta<typeof Aircraft> = { title: "unDraw/Aircraft", component: Aircraft };

export default meta;
type Story = StoryObj<typeof Aircraft>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
