import type { Meta, StoryObj } from "@storybook/react";
import PlayfulCat from "../PlayfulCat";

const meta: Meta<typeof PlayfulCat> = { title: "unDraw/PlayfulCat", component: PlayfulCat };

export default meta;
type Story = StoryObj<typeof PlayfulCat>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
