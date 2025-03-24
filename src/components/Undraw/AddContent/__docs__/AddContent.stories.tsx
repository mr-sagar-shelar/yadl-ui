import type { Meta, StoryObj } from "@storybook/react";
import AddContent from "../AddContent";

const meta: Meta<typeof AddContent> = { title: "unDraw/AddContent", component: AddContent };

export default meta;
type Story = StoryObj<typeof AddContent>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
