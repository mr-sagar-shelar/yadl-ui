import type { Meta, StoryObj } from "@storybook/react";
import BookLover from "../BookLover";

const meta: Meta<typeof BookLover> = { title: "unDraw/BookLover", component: BookLover };

export default meta;
type Story = StoryObj<typeof BookLover>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
