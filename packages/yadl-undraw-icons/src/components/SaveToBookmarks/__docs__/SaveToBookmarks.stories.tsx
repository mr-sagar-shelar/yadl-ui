import type { Meta, StoryObj } from "@storybook/react";
import SaveToBookmarks from "../SaveToBookmarks";

const meta: Meta<typeof SaveToBookmarks> = { title: "unDraw/SaveToBookmarks", component: SaveToBookmarks };

export default meta;
type Story = StoryObj<typeof SaveToBookmarks>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
