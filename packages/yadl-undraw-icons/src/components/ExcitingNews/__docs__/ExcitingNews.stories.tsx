import type { Meta, StoryObj } from "@storybook/react";
import ExcitingNews from "../ExcitingNews";

const meta: Meta<typeof ExcitingNews> = { title: "unDraw/ExcitingNews", component: ExcitingNews };

export default meta;
type Story = StoryObj<typeof ExcitingNews>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
