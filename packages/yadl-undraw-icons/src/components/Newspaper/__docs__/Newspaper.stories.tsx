import type { Meta, StoryObj } from "@storybook/react";
import Newspaper from "../Newspaper";

const meta: Meta<typeof Newspaper> = { title: "unDraw/Newspaper", component: Newspaper };

export default meta;
type Story = StoryObj<typeof Newspaper>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
