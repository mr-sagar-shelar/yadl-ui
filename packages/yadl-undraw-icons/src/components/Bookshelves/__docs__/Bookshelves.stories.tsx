import type { Meta, StoryObj } from "@storybook/react";
import Bookshelves from "../Bookshelves";

const meta: Meta<typeof Bookshelves> = { title: "unDraw/Bookshelves", component: Bookshelves };

export default meta;
type Story = StoryObj<typeof Bookshelves>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
